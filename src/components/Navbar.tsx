import React from 'react';
import { Menu, X, Salad } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Salad className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">gOATed Mealz</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Home</a>
              <a href="/weight-loss" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Weight Loss Plans</a>
              <a href="/menstrual-health" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Menstrual Health</a>
              <a href="/general-health" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">General Health</a>
              <a href="/survey" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700">Diet Survey</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Home</a>
            <a href="/weight-loss" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Weight Loss Plans</a>
            <a href="/menstrual-health" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Menstrual Health</a>
            <a href="/general-health" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">General Health</a>
            <a href="/survey" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">Diet Survey</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar