import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic Plan',
    price: '₹2,499',
    features: [
      'Personalized meal plans',
      'Basic recipe collection',
      'Weekly shopping lists',
      'Basic weight tracking',
    ],
  },
  {
    name: 'Premium Plan',
    price: '₹4,999',
    features: [
      'Everything in Basic Plan',
      'Advanced recipe collection',
      'Nutrition coaching',
      'Progress tracking tools',
      'Community support',
    ],
  },
  {
    name: 'Ultimate Plan',
    price: '₹7,999',
    features: [
      'Everything in Premium Plan',
      '1-on-1 consultations',
      'Custom exercise plans',
      'Priority support',
      'Mobile app access',
    ],
  },
];

const WeightLoss = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Weight Loss Plans</h1>
          <p className="text-xl">Choose the perfect plan for your weight loss journey</p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-green-600 mb-6">{plan.price}<span className="text-base text-gray-600">/month</span></p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/survey"
                  className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Our Weight Loss Plans</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Personalized Meal Plans</h3>
              <p className="text-gray-600">Get customized meal plans based on your preferences, dietary restrictions, and weight loss goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Recipe Collection</h3>
              <p className="text-gray-600">Access to hundreds of healthy, delicious recipes that support your weight loss journey.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
              <p className="text-gray-600">Track your weight, measurements, and progress with our easy-to-use tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-600">Get guidance from nutrition experts to help you achieve your goals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Weight Loss Journey Today</h2>
          <p className="text-xl mb-8">Take our survey to get your personalized plan</p>
          <a 
            href="/survey" 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Take the Survey <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeightLoss;