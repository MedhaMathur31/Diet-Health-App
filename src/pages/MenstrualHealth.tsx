import React from 'react';
import { Calendar, Apple, Moon, Heart, ArrowRight, Check } from 'lucide-react';

const MenstrualHealth = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-purple-900 bg-opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Menstrual Health & Nutrition</h1>
            <p className="text-xl mb-8">Personalized nutrition plans to support your menstrual cycle and overall well-being</p>
            <a 
              href="/survey" 
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Your Plan <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Cycle Phases Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nutrition Through Your Cycle</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Moon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Menstrual Phase</h3>
              <p className="text-gray-600">Focus on iron-rich foods and warm, nourishing meals to replenish your body.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Follicular Phase</h3>
              <p className="text-gray-600">Light, fresh foods to support increasing energy levels and hormonal balance.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ovulatory Phase</h3>
              <p className="text-gray-600">Nutrient-dense foods to maintain high energy and support reproductive health.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Apple className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luteal Phase</h3>
              <p className="text-gray-600">Complex carbs and magnesium-rich foods to manage PMS symptoms.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Cycle-Synced Nutrition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Reduced PMS Symptoms</h3>
              <p className="text-gray-600">Strategic nutrition choices can help minimize cramping, bloating, and mood swings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Balanced Energy Levels</h3>
              <p className="text-gray-600">Maintain steady energy throughout your cycle with phase-specific meal plans.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Hormonal Balance</h3>
              <p className="text-gray-600">Support natural hormone production with targeted nutritional support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Foods Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Foods for Menstrual Health</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Foods to Include</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-green-600" />
                  </span>
                  <div>
                    <span className="font-semibold">Iron-rich foods:</span>
                    <p className="text-gray-600">Leafy greens, lentils, quinoa</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-green-600" />
                  </span>
                  <div>
                    <span className="font-semibold">Omega-3 fatty acids:</span>
                    <p className="text-gray-600">Salmon, chia seeds, walnuts</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-green-600" />
                  </span>
                  <div>
                    <span className="font-semibold">Magnesium-rich foods:</span>
                    <p className="text-gray-600">Dark chocolate, avocados, bananas</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80" 
                alt="Healthy Food Selection" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Menstrual Health?</h2>
          <p className="text-xl mb-8">Get your personalized nutrition plan based on your cycle</p>
          <a 
            href="/survey" 
            className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Take the Survey <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenstrualHealth;