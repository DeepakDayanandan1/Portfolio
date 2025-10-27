"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-16 sm:pt-20 pb-2 sm:pb-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1a1d2e] rounded-2xl py-1 sm:py-2 ">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-[#c4ff00] text-center leading-none tracking-normal sm:tracking-wide md:tracking-wider"
              style={{ fontFamily: 'Humane, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              CONTACT
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 pb-0 sm:pb-0">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#c4ff00] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Left Side - Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 sm:mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                    If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-black/10">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Email</h4>
                        <a
                          href="mailto:deepakdayanandan008@gmail.com"
                          className="text-black/80 hover:text-black transition-colors text-sm sm:text-base"
                        >
                          deepakdayanandan008@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-black/10">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Phone</h4>
                        <a
                          href="tel:+917356784317"
                          className="text-black/80 hover:text-black transition-colors text-sm sm:text-base"
                        >
                          +91 7356784317
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-black/10">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Location</h4>
                        <p className="text-black/80 text-sm sm:text-base">
                          Alappuzha, Kerala, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white text-black border-2 border-transparent focus:border-black focus:outline-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white text-black border-2 border-transparent focus:border-black focus:outline-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-black font-semibold mb-2 text-sm sm:text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white text-black border-2 border-transparent focus:border-black focus:outline-none resize-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      ❌ Failed to send message. Please try again or contact me directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#1a1d2e] hover:bg-black'
                    } text-white`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}