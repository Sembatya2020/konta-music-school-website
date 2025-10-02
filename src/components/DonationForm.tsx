import { useState } from 'react';
import { Heart, CreditCard, DollarSign } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface DonationFormProps {
  className?: string;
}

export function DonationForm({ className = "" }: DonationFormProps) {
  const [formData, setFormData] = useState({
    donor_name: '',
    email: '',
    amount: '',
    donation_type: 'one-time',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const predefinedAmounts = [25, 50, 100, 250, 500];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('donations').insert({
        donor_name: formData.donor_name || 'Anonymous',
        email: formData.email,
        amount: parseFloat(formData.amount),
        donation_type: formData.donation_type,
        message: formData.message,
      });

      if (error) {
        console.error('Error recording donation:', error);
        alert('There was an error processing your donation. Please try again.');
      } else {
        setShowSuccess(true);
        setFormData({
          donor_name: '',
          email: '',
          amount: '',
          donation_type: 'one-time',
          message: '',
        });
        setTimeout(() => setShowSuccess(false), 8000);
      }
    } catch (error) {
      console.error('Error processing donation:', error);
      alert('There was an error processing your donation. Please try again.');
    }

    setIsSubmitting(false);
  }

  if (showSuccess) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your generous donation has been recorded. We'll contact you shortly with payment instructions.
        </p>
        <p className="text-sm text-green-600">
          Your support helps us continue providing quality music education to our community.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="text-white" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Support Our Mission</h2>
        <p className="text-gray-600">
          Your donation helps us provide music education and opportunities to students in our community.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={formData.donor_name}
              onChange={(e) => setFormData({ ...formData, donor_name: e.target.value })}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Donation Type
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="one-time"
                checked={formData.donation_type === 'one-time'}
                onChange={(e) => setFormData({ ...formData, donation_type: e.target.value })}
                className="mr-2"
              />
              One-time Donation
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="monthly"
                checked={formData.donation_type === 'monthly'}
                onChange={(e) => setFormData({ ...formData, donation_type: e.target.value })}
                className="mr-2"
              />
              Monthly Donation
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Donation Amount (USD)
          </label>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setFormData({ ...formData, amount: amount.toString() })}
                className={`px-4 py-2 rounded-lg border text-center font-medium transition-all ${
                  formData.amount === amount.toString()
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-amber-500'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="Enter custom amount"
              min="1"
              step="0.01"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share why you're supporting our mission..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <CreditCard className="mr-2" size={20} />
          {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </form>

      <div className="mt-6 p-4 bg-amber-50 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Note:</strong> This form records your donation intent. We'll contact you with secure payment instructions via email.
        </p>
      </div>
    </div>
  );
}