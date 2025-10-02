import { useEffect, useState } from 'react';
import { Heart, Users, Award, Music, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { NewsletterSignup } from '../components/NewsletterSignup';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image_url: string | null;
}

interface Event {
  id: string;
  title: string;
  event_date: string;
  location: string;
}

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const { data: testimonialsData } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .limit(3);

      const { data: eventsData } = await supabase
        .from('events')
        .select('id, title, event_date, location')
        .eq('status', 'upcoming')
        .order('event_date', { ascending: true })
        .limit(3);

      if (testimonialsData) setTestimonials(testimonialsData);
      if (eventsData) setUpcomingEvents(eventsData);
    } catch {
      console.log('Database not configured, using mock data');
      // Set some mock data for demo purposes
      setTestimonials([]);
      setUpcomingEvents([]);
    }
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7520985/pexels-photo-7520985.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
              <Music className="text-amber-500 mr-2" size={24} />
              <span className="text-gray-700 font-medium">Established 2015</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Inspiring Hearts.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Empowering Minds.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming lives through music and the arts in Uganda's Busoga region
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('donate')}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Donate Now
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-gray-200"
            >
              Explore Programs
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Students Trained</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Performances Held</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Charity Driven</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To empower young minds and hearts through access to music and performing arts education,
              nurturing creativity, confidence, and lifelong skills for a brighter future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
                alt="Students learning music"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Transforming Lives Through Art</h3>
              <p className="text-gray-700 leading-relaxed">
                Since our founding, we've provided free and subsidized arts education to underserved
                children and youth. From teaching instruments and vocal training to dance and drama,
                we've helped hundreds of young people gain confidence, discover their talents, and
                perform on stages they never imagined.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe every child deserves the chance to discover their voice, express their talent,
                and transform their community through the power of the arts.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-md"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100"
                >
                  <div className="p-6">
                    <div className="text-amber-600 font-semibold mb-2">
                      {new Date(event.event_date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate('events')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                View All Events
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Stories</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
                >
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Connected</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Be the first to know about our upcoming concerts, new programs, and community events. 
                Join our newsletter and become part of the Konta Music School family.
              </p>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Monthly updates on events and programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Student success stories and achievements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Exclusive access to special events</span>
                </div>
              </div>
            </div>
            <div>
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Your support helps us provide music and arts education to children who need it most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('donate')}
              className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Donate Now
            </button>
            <button
              onClick={() => onNavigate('get-involved')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all shadow-lg"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
