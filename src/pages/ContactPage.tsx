import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { sendContactEmail, sendAutoReply } from '../lib/emailService';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error } = await supabase.from('contact_inquiries').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (error) {
        console.error('Error submitting inquiry:', error);
        alert('There was an error submitting your message. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Send notification email to school
      const emailSent = await sendContactEmail(formData);
      
      // Send auto-reply to user
      const autoReplySent = await sendAutoReply(formData);

      // Show success message
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setShowSuccess(false), 5000);

      // Optional: Log email status
      if (!emailSent) {
        console.warn('Contact email notification failed to send');
      }
      if (!autoReplySent) {
        console.warn('Auto-reply email failed to send');
      }

    } catch (error) {
      console.error('Error processing contact form:', error);
      alert('There was an error submitting your message. Please try again.');
    }

    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us to learn more about our programs, volunteer opportunities, or partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Busoga Region<br />
                Uganda<br />
                East Africa
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-700 leading-relaxed">
                +256 753 550 863<br />
                Monday - Friday<br />
                9:00 AM - 5:00 PM
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-700 leading-relaxed">
                info@kontaschool.org<br />
                We'll respond within<br />
                24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Send Us a Message</h2>
            <p className="text-gray-700 text-center mb-8">
              Fill out the form below and we'll get back to you as soon as possible
            </p>

            {showSuccess && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl flex items-center">
                <CheckCircle className="text-green-500 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-green-900 mb-1">Message Sent!</h4>
                  <p className="text-green-800">
                    Thank you for reaching out. We'll be in touch with you soon.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="+256 753 550 863"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="donation">Donation & Sponsorship</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="scholarship">Scholarship Application</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2" size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us on Social Media</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Follow us for updates, performances, and inspiring stories from our students
            </p>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-110 shadow-lg"
            >
              <span className="text-2xl font-bold">f</span>
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-110 shadow-lg"
            >
              <span className="text-2xl font-bold">📷</span>
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-110 shadow-lg"
            >
              <span className="text-2xl font-bold">▶</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
