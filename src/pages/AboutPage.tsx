import { useEffect, useState } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string | null;
}

interface Sponsor {
  id: string;
  name: string;
  logo_url: string;
  website_url: string | null;
}

export function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data: teamData } = await supabase
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true });

    const { data: sponsorsData } = await supabase
      .from('sponsors')
      .select('*')
      .order('created_at', { ascending: false });

    if (teamData) setTeamMembers(teamData);
    if (sponsorsData) setSponsors(sponsorsData);
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Konta School</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A charity-driven institution nurturing young talents in Uganda's Busoga region
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2015, Konta School of Music and Performing Arts emerged from a simple belief:
                that every child, regardless of their background, deserves access to quality arts education.
                In a world where many young dreams are silenced by poverty and lack of opportunity, we
                created a sanctuary where creativity flourishes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What started as a small community initiative has grown into a beacon of hope for hundreds
                of children across the Busoga region. Through music, dance, and drama, we're not just
                teaching skills—we're building confidence, fostering discipline, and opening doors to
                possibilities our students never imagined.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Konta School stands as a testament to the transformative power of the arts, with
                over 200 students trained and countless lives changed forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower young minds and hearts through access to music and performing arts education,
                nurturing creativity, confidence, and lifelong skills for a brighter future.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A community where every child has the opportunity to discover their artistic potential
                and use it to transform their lives and inspire others.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Excellence, inclusivity, creativity, and compassion guide everything we do. We believe
                in the power of the arts to heal, inspire, and unite communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Since our founding, we've touched the lives of hundreds of students, offering them not
              just lessons in music and performing arts, but lessons in discipline, teamwork, and self-worth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Students Trained</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Performances</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">15</h3>
              <p className="text-gray-600 font-medium">Programs Offered</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">10</h3>
              <p className="text-gray-600 font-medium">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      {teamMembers.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Dedicated professionals and volunteers committed to nurturing young talent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="h-64 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    {member.image_url ? (
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="text-white" size={80} />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {sponsors.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Partners & Sponsors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700">
                Thank you to our generous supporters who make our work possible
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition-shadow"
                >
                  <img
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    className="max-h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
