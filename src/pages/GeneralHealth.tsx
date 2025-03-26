import React from 'react';
import { Leaf, Brain, Heart, Battery, ArrowRight, Check } from 'lucide-react';

const GeneralHealth = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-teal-900 bg-opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Holistic Health & Nutrition</h1>
            <p className="text-xl mb-8">Discover the power of balanced nutrition for optimal health and wellness</p>
            <a 
              href="/survey" 
              className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Balanced Nutrition</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Heart Health</h3>
              <p className="text-gray-600">Support cardiovascular health with heart-friendly nutrients.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mental Clarity</h3>
              <p className="text-gray-600">Enhance cognitive function and mental performance.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Levels</h3>
              <p className="text-gray-600">Maintain consistent energy throughout the day.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Immunity</h3>
              <p className="text-gray-600">Strengthen your immune system naturally.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nutrition Guidelines Section */}
      <div className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Nutrition Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Daily Nutrition Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-teal-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-teal-600" />
                  </span>
                  <div>
                    <span className="font-semibold">Balanced Macronutrients</span>
                    <p className="text-gray-600">Optimal ratio of proteins, carbs, and healthy fats</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-teal-600" />
                  </span>
                  <div>
                    <span className="font-semibold">Micronutrient Rich</span>
                    <p className="text-gray-600">Essential vitamins and minerals from whole foods</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-teal-600" />
                  </span>
                  <div>
                    <span className="font-semibold">Hydration</span>
                    <p className="text-gray-600">Adequate water intake throughout the day</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80" 
                alt="Healthy Food Variety" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Health?</h2>
          <p className="text-xl mb-8">Get your personalized nutrition plan today</p>
          <a 
            href="/survey" 
            className="inline-flex items-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Take the Survey <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneralHealth;