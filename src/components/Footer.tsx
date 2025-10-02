import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Konta School</h3>
                <p className="text-sm text-gray-400">Music & Performing Arts</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Inspiring hearts. Empowering minds. Transforming lives through music and the arts.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Donate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Sponsor a Student</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Busoga Region, Uganda</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} className="flex-shrink-0" />
                <span>+256 753 550 863</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@kontaschool.org</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Konta School of Music and Performing Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
