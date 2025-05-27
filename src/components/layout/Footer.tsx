import React from 'react';
import { Zap, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-blue-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI<span className="text-white">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              The all-in-one AI platform for creators, analysts, marketers, and developers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Data Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Video Editing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AIHub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;