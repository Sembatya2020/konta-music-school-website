import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  className?: string;
}

export function NewsletterSignup({ 
  title = "Stay Updated", 
  description = "Subscribe to our newsletter for the latest updates on events, programs, and school news.",
  className = ""
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setShowError(true);
          setTimeout(() => setShowError(false), 5000);
        } else {
          console.error('Error subscribing to newsletter:', error);
          alert('There was an error subscribing. Please try again.');
        }
      } else {
        setShowSuccess(true);
        setEmail('');
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('There was an error subscribing. Please try again.');
    }

    setIsSubmitting(false);
  }

  if (showSuccess) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className}`}>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="text-green-500" size={48} />
        </div>
        <h3 className="text-xl font-bold text-green-800 text-center mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-green-700 text-center">
          Thank you for subscribing to our newsletter. You'll receive updates about our events and programs.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {showError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">
              This email is already subscribed to our newsletter.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}