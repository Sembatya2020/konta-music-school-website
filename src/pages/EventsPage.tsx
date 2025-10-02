import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  image_url: string | null;
  ticket_price: number;
  status: string;
}

export function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');

  useEffect(() => {
    loadEvents();
  }, [filter]);

  async function loadEvents() {
    let query = supabase.from('events').select('*');

    if (filter === 'upcoming') {
      query = query.eq('status', 'upcoming');
    } else if (filter === 'past') {
      query = query.eq('status', 'past');
    }

    const { data } = await query.order('event_date', { ascending: filter === 'upcoming' });

    if (data) setEvents(data);
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Events & Performances</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join us for inspiring concerts, recitals, workshops, and community celebrations
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'upcoming'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === 'past'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {events.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="h-64 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center relative overflow-hidden">
                    {event.image_url ? (
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Calendar className="text-white" size={80} />
                    )}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 rounded-full text-sm font-bold text-gray-900 flex items-center">
                      <Calendar className="mr-2" size={16} />
                      {new Date(event.event_date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Calendar className="text-amber-500 mr-3 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Date & Time</p>
                          <p className="text-gray-600">
                            {new Date(event.event_date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="text-amber-500 mr-3 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Location</p>
                          <p className="text-gray-600">{event.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Ticket className="text-amber-500 mr-3 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-semibold text-gray-900">Ticket Price</p>
                          <p className="text-gray-600">
                            {event.ticket_price === 0
                              ? 'Free Entry'
                              : `UGX ${event.ticket_price.toLocaleString()}`}
                          </p>
                        </div>
                      </div>
                    </div>

                    {event.status === 'upcoming' && (
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-md">
                        Register / RSVP
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Calendar className="text-gray-400 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Events Found</h3>
              <p className="text-gray-600">
                {filter === 'upcoming'
                  ? 'Check back soon for upcoming events!'
                  : 'No events in this category yet.'}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to Stay Updated?
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Subscribe to our newsletter and never miss an event
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
