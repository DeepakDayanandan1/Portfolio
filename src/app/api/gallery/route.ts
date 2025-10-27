import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'gallery');
    
    // Check if gallery directory exists
    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json({ images: [] });
    }

    // Read directory contents
    const files = fs.readdirSync(galleryPath);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => `/gallery/${file}`);

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
