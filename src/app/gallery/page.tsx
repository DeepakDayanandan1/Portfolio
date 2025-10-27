"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Masonry from '@/components/ui/masonry';

export default function Gallery() {
  const [masonryHeight, setMasonryHeight] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load images from public/gallery folder
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setGalleryImages(data.images || []);
      } catch (error) {
        console.error('Error loading gallery images:', error);
        // Fallback to empty array if API fails
        setGalleryImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryImages();
  }, []);

  // ✅ match Masonry's expected Item[] structure
  const items = galleryImages.map((img, index) => ({
    id: index.toString(),
    img,
    url: img,
    height: 300 + (index % 3) * 80,
  }));

  // Calculate masonry height based on content
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const calculateHeight = () => {
      const columns = window.innerWidth >= 1500 ? 5 : 
                     window.innerWidth >= 1000 ? 4 : 
                     window.innerWidth >= 600 ? 3 : 
                     window.innerWidth >= 400 ? 2 : 1;
      
      const gap = 16;
      const colHeights = new Array(columns).fill(0);
      
      items.forEach(item => {
        const col = colHeights.indexOf(Math.min(...colHeights));
        const height = item.height / 2; // Keep the same division for consistency
        colHeights[col] += height + gap;
      });
      
      const maxHeight = Math.max(...colHeights);
      setMasonryHeight(maxHeight + 100); // Add some padding
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, [items]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Header Section */}
      <section className="pt-16 sm:pt-20 pb-2 sm:pb-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1a1d2e] rounded-2xl py-1 sm:py-2 ">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-[#c4ff00] text-center leading-none tracking-normal sm:tracking-wide md:tracking-wider"
              style={{ fontFamily: 'Humane, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              GALLERY
            </h2>
          </div>
        </div>
      </section>

      {/* Gallery Section with Dynamic Height */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-[#00000] rounded-2xl p-6 sm:p-10 md:p-12"
            style={{ minHeight: masonryHeight > 0 ? `${masonryHeight}px` : 'auto' }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c4ff00] mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading gallery...</p>
                </div>
              </div>
            ) : galleryImages.length === 0 ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <p className="text-gray-400 text-lg mb-4">No images found in gallery</p>
                  <p className="text-gray-500 text-sm">Add images to the <code className="bg-gray-800 px-2 py-1 rounded">public/gallery</code> folder</p>
                </div>
              </div>
            ) : (
              <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
