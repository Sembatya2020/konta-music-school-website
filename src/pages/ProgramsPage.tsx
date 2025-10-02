import { useEffect, useState } from 'react';
import { Music, Drama, Mic, Piano, Guitar, Drum, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string | null;
  duration: string | null;
  capacity: number | null;
}

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

const categoryIcons: Record<string, any> = {
  vocal: Mic,
  instrumental: Piano,
  dance: Drama,
  drama: Drama,
  music: Music,
};

export function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    loadPrograms();
  }, []);

  async function loadPrograms() {
    const { data } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setPrograms(data);
  }

  const categories = ['all', ...Array.from(new Set(programs.map(p => p.category)))];
  const filteredPrograms = selectedCategory === 'all'
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Programs</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive music and performing arts programs designed to nurture talent
              and inspire creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Music Programs</h3>
              <p className="text-gray-700">
                Learn vocal techniques, instruments like piano, guitar, drums, and music theory
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Drama className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Performing Arts</h3>
              <p className="text-gray-700">
                Explore dance, drama, stage production, and theatrical performance
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Workshops</h3>
              <p className="text-gray-700">
                Special masterclasses with guest artists and intensive training sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => {
                const Icon = categoryIcons[program.category.toLowerCase()] || Music;
                return (
                  <div
                    key={program.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  >
                    <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center relative overflow-hidden">
                      {program.image_url ? (
                        <img
                          src={program.image_url}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Icon className="text-white" size={80} />
                      )}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-sm font-semibold text-gray-900">
                        {program.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{program.description}</p>

                      <div className="space-y-2 mb-4">
                        {program.duration && (
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-semibold mr-2">Duration:</span>
                            {program.duration}
                          </div>
                        )}
                        {program.capacity && (
                          <div className="flex items-center text-sm text-gray-600">
                            <span className="font-semibold mr-2">Class Size:</span>
                            Up to {program.capacity} students
                          </div>
                        )}
                      </div>

                      <button className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2" size={18} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No programs available in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Apply for a Scholarship</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We believe that financial constraints should never stand in the way of artistic dreams.
                Our scholarship program provides free or subsidized training to talented students from
                underprivileged backgrounds.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Free tuition for qualified students</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Access to instruments and materials</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Performance opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Mentorship from experienced teachers</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg inline-flex items-center"
              >
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7520936/pexels-photo-7520936.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Scholarship students"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our vibrant community of young artists and discover your creative potential
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
