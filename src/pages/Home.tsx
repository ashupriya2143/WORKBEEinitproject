import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Shield, Users, Star, CheckCircle, ArrowRight, Target, Award, MapPin, Zap, CreditCard } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 relative">
              {/* Launching Soon Badge */}
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🚀 Launching Soon in India
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Find Workers
                <span className="text-yellow-500 block">in 5 Minutes</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Transform your business with India's fastest on-demand labor marketplace. Connect with verified workers instantly, or find flexible work opportunities near you.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-500">≤5 Min</div>
                  <div className="text-sm text-gray-400">Average Job Fill Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-500">24/7</div>
                  <div className="text-sm text-gray-400">Platform Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-500">100%</div>
                  <div className="text-sm text-gray-400">Verified Workers</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register-business"
                  className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 transition-colors inline-flex items-center justify-center"
                >
                  Hire Workers <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/register-worker"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center"
                >
                  Find Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Store workers and business owners connecting through WorkBee platform"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Worker Found!</p>
                      <p className="text-sm text-gray-600">Cashier • 2.3 km away</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">4.9 Rating</p>
                      <p className="text-sm text-gray-600">156 jobs completed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-2xl transform -rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for India's unique needs with cutting-edge technology and local insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Jobs filled in 5 minutes or less with our smart matching system
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Safety</h3>
              <p className="text-gray-600">
                Aadhaar-KYC, background-checked & rated by peers
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work From Your City</h3>
              <p className="text-gray-600">
                No long drives, no extra allowances. Find work opportunities near you
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Payments</h3>
              <p className="text-gray-600">
                No more cash hassles—instant UPI payout after shift
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/*<section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose WorkBee?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing India's stores and shops staffing with cutting-edge technology and unmatched reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Get matched with qualified store and shop workers in under 5 minutes. Our AI-powered matching ensures the right fit every time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trusted & Safe</h3>
              <p className="text-gray-600">
                All workers are background verified with digital payments, insurance coverage, and comprehensive safety measures for your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skilled Workers</h3>
              <p className="text-gray-600">
                Access to a vetted pool of skilled workers with ratings, reviews, and verified experience in stores and shops.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, fast, and reliable - get started in 3 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For Businesses */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Stores & Shops</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Post Your Requirement</h4>
                    <p className="text-gray-600">Describe your staffing need - cashier, sales assistant, store helper, or any other role for your store or shop.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Get Matched Instantly</h4>
                    <p className="text-gray-600">Our AI finds the best workers with store and shop experience and sends you qualified candidates within minutes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hire & Manage</h4>
                    <p className="text-gray-600">Select workers, track attendance, and make secure payments through our platform.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Workers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Workers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Create Your Profile</h4>
                    <p className="text-gray-600">Sign up for free, add your store and shop skills, experience, and preferences to get started.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Get Job Matches</h4>
                    <p className="text-gray-600">Receive notifications for store and shop jobs that match your skills and location preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Work & Earn</h4>
                    <p className="text-gray-600">Accept jobs, complete work, and get paid directly to your account with full transparency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trust & Safety First
            </h2>
            <p className="text-xl text-gray-600">
              Your security and peace of mind are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Background Verified</h3>
              <p className="text-gray-600 text-sm">All workers undergo comprehensive background checks</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Insured Work</h3>
              <p className="text-gray-600 text-sm">All work is covered by comprehensive insurance</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rated & Reviewed</h3>
              <p className="text-gray-600 text-sm">Transparent rating system for quality assurance</p>
            </div>

            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600 text-sm">Digital payments with full transaction transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses and workers already using WorkBee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register-business"
              className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 transition-colors inline-flex items-center justify-center"
            >
              Start Hiring Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/register-worker"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center"
            >
              Join as Worker <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
