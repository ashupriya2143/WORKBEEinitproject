import React from 'react'
import { Hexagon, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-500 p-2 rounded-lg relative">
                <Hexagon className="h-6 w-6 text-slate-800 fill-current" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">WorkBee</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming India's on-demand worker market by connecting businesses with skilled temporary workers in minutes.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@workbee.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Businesses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Find Workers</li>
              <li>Pricing</li>
              <li>Safety & Trust</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Workers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Find Jobs</li>
              <li>How it Works</li>
              <li>Safety</li>
              <li>Earnings</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WorkBee. All rights reserved. Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer