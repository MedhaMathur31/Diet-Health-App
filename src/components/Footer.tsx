import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">gOATed Mealz</h3>
            <p className="text-sm">Your journey to a healthier lifestyle starts here.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:underline">Home</a></li>
              <li><a href="/weight-loss" className="text-sm hover:underline">Weight Loss Plans</a></li>
              <li><a href="/menstrual-health" className="text-sm hover:underline">Menstrual Health</a></li>
              <li><a href="/general-health" className="text-sm hover:underline">General Health</a></li>
              <li><a href="/survey" className="text-sm hover:underline">Diet Survey</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: contact@nutrilife.com</p>
            <p className="text-sm">Phone: +91 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500 text-center">
          <p className="text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by gOATed Mealz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer