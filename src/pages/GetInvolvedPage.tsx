import { Heart, Users, Briefcase } from 'lucide-react';
import { DonationForm } from '../components/DonationForm';
import { NewsletterSignup } from '../components/NewsletterSignup';

export function GetInvolvedPage() {

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get Involved</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join us in transforming lives through the power of music and performing arts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your financial support helps us provide free education, instruments, and opportunities
                to students who need them most.
              </p>
              <a
                href="#donate"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all"
              >
                Donate Now
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Share your skills and passion by teaching, mentoring, or helping organize events
                and programs.
              </p>
              <a
                href="#volunteer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all"
              >
                Learn More
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Corporate partnerships and sponsorships help us expand our reach and impact in
                the community.
              </p>
              <a
                href="#partner"
                className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonationForm />
        </div>
      </section>

      <section id="volunteer" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Volunteer Opportunities
              </h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                We're always looking for passionate individuals to join our team and make a difference
                in young lives. Whether you're a musician, teacher, or simply someone who cares,
                there's a place for you at Konta School.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Teaching & Mentoring</h4>
                    <p className="text-gray-700">
                      Share your musical or performing arts expertise with eager students
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Event Coordination</h4>
                    <p className="text-gray-700">
                      Help organize concerts, recitals, and community outreach programs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Administrative Support</h4>
                    <p className="text-gray-700">
                      Assist with operations, communications, and program management
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg"
              >
                Apply to Volunteer
              </a>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Volunteers"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Corporate Partnerships
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Partner with us to create lasting impact while demonstrating your commitment to
              community development and arts education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bronze Partner</h3>
              <p className="text-3xl font-bold text-amber-600 mb-6">$1,000</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Logo on website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Social media recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Quarterly impact reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-amber-500 transform scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Silver Partner</h3>
              <p className="text-3xl font-bold text-amber-600 mb-6">$5,000</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">All Bronze benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Event sponsorship opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">VIP event invitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Custom partnership package</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold Partner</h3>
              <p className="text-3xl font-bold text-amber-600 mb-6">$10,000+</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">All Silver benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Title sponsor recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Advisory board seat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span className="text-gray-700">Dedicated impact showcase</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg"
            >
              Discuss Partnership Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
