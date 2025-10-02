import { useEffect, useState } from 'react';
import { Image, Video, Music, Drama } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  media_url: string;
  media_type: string;
  category: string;
}

export function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    const { data } = await supabase
      .from('gallery_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setGalleryItems(data);
  }

  const categories = ['all', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Gallery</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Capturing moments of creativity, performance, and transformation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center relative overflow-hidden">
                    {item.media_type === 'image' ? (
                      <img
                        src={item.media_url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <Video className="text-white" size={64} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[20px] border-l-amber-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-gray-900">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Image className="text-gray-400 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Items Found</h3>
              <p className="text-gray-600">
                Check back soon for photos and videos from our programs and performances!
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Performances</h3>
              <p className="text-gray-700">
                Concerts, recitals, and community showcases throughout the year
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Drama className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Students</h3>
              <p className="text-gray-700">
                Young artists discovering their talents and building confidence
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Countless Memories</h3>
              <p className="text-gray-700">
                Capturing the joy and transformation of our students' journeys
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
