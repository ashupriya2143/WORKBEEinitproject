import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { MapPin, Clock, DollarSign, Users, Plus, Search, Filter, Bell, Star, CheckCircle, X, User } from 'lucide-react'
import toast from 'react-hot-toast'

interface JobRequest {
  id: string
  title: string
  description: string
  location: string
  duration: string
  pay: number
  payType: 'hourly' | 'daily' | 'fixed'
  skillsRequired: string[]
  urgency: 'immediate' | 'today' | 'tomorrow' | 'flexible'
  status: 'searching' | 'matched' | 'confirmed' | 'completed'
  createdAt: string
  matchedWorkers?: Worker[]
}

interface Worker {
  id: string
  name: string
  rating: number
  completedJobs: number
  skills: string[]
  distance: string
  estimatedArrival: string
  profileImage?: string
}

const BusinessDashboard: React.FC = () => {
  const { user, signOut } = useAuth()
  const [activeTab, setActiveTab] = useState<'book' | 'active' | 'history'>('book')
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [jobRequests, setJobRequests] = useState<JobRequest[]>([])
  const [searchingJob, setSearchingJob] = useState<JobRequest | null>(null)

  // Mock data for demonstration
  useEffect(() => {
    const mockJobs: JobRequest[] = [
      {
        id: '1',
        title: 'Cashier for Evening Shift',
        description: 'Need experienced cashier for busy evening hours',
        location: 'MG Road, Bangalore',
        duration: '4 hours',
        pay: 200,
        payType: 'hourly',
        skillsRequired: ['Cashier', 'Customer Service'],
        urgency: 'today',
        status: 'confirmed',
        createdAt: '2025-01-21T10:00:00Z'
      },
      {
        id: '2',
        title: 'Sales Assistant - Weekend',
        description: 'Weekend sales assistant for electronics store',
        location: 'Brigade Road, Bangalore',
        duration: '8 hours',
        pay: 1500,
        payType: 'daily',
        skillsRequired: ['Sales Assistant', 'Product Knowledge'],
        urgency: 'tomorrow',
        status: 'completed',
        createdAt: '2025-01-20T14:00:00Z'
      }
    ]
    setJobRequests(mockJobs)
  }, [])

  const [bookingForm, setBookingForm] = useState({
    title: '',
    description: '',
    location: '',
    duration: '',
    pay: '',
    payType: 'hourly' as 'hourly' | 'daily' | 'fixed',
    skillsRequired: [] as string[],
    urgency: 'today' as 'immediate' | 'today' | 'tomorrow' | 'flexible'
  })

  const skillOptions = [
    'Cashier', 'Sales Assistant', 'Store Associate', 'Customer Service',
    'Inventory Management', 'Stock Management', 'Product Display', 'Billing/POS Operation',
    'Store Helper', 'Floor Manager', 'Visual Merchandising', 'Store Security'
  ]

  const handleBookWorker = () => {
    if (!bookingForm.title || !bookingForm.location || !bookingForm.pay) {
      toast.error('Please fill in all required fields')
      return
    }

    const newJob: JobRequest = {
      id: Date.now().toString(),
      ...bookingForm,
      pay: parseFloat(bookingForm.pay),
      status: 'searching',
      createdAt: new Date().toISOString()
    }

    setJobRequests(prev => [newJob, ...prev])
    setSearchingJob(newJob)
    setShowBookingModal(false)
    
    // Reset form
    setBookingForm({
      title: '',
      description: '',
      location: '',
      duration: '',
      pay: '',
      payType: 'hourly',
      skillsRequired: [],
      urgency: 'today'
    })

    toast.success('Searching for workers...')
    
    // Simulate finding workers after 3 seconds
    setTimeout(() => {
      const mockWorkers: Worker[] = [
        {
          id: '1',
          name: 'Rajesh Kumar',
          rating: 4.8,
          completedJobs: 156,
          skills: ['Cashier', 'Customer Service'],
          distance: '2.3 km away',
          estimatedArrival: '15 mins'
        },
        {
          id: '2',
          name: 'Priya Sharma',
          rating: 4.9,
          completedJobs: 203,
          skills: ['Sales Assistant', 'Product Display'],
          distance: '1.8 km away',
          estimatedArrival: '12 mins'
        }
      ]

      setJobRequests(prev => 
        prev.map(job => 
          job.id === newJob.id 
            ? { ...job, status: 'matched', matchedWorkers: mockWorkers }
            : job
        )
      )
      setSearchingJob(null)
      toast.success('Workers found! Check your active bookings.')
    }, 3000)
  }

  const handleSkillToggle = (skill: string) => {
    setBookingForm(prev => ({
      ...prev,
      skillsRequired: prev.skillsRequired.includes(skill)
        ? prev.skillsRequired.filter(s => s !== skill)
        : [...prev.skillsRequired, skill]
    }))
  }

  const confirmWorker = (jobId: string, workerId: string) => {
    setJobRequests(prev =>
      prev.map(job =>
        job.id === jobId
          ? { ...job, status: 'confirmed' }
          : job
      )
    )
    toast.success('Worker confirmed! They will arrive soon.')
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
              <p className="text-gray-600">Welcome back! Ready to find workers?</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              <button
                onClick={signOut}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobRequests.filter(j => j.status === 'confirmed').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobRequests.filter(j => j.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Search className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Searching</p>
                <p className="text-2xl font-bold text-gray-900">
                  {jobRequests.filter(j => j.status === 'searching' || j.status === 'matched').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">₹12,450</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'book', label: 'Book Worker', icon: Plus },
                { key: 'active', label: 'Active Jobs', icon: Clock },
                { key: 'history', label: 'History', icon: CheckCircle }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === key
                      ? 'border-yellow-500 text-yellow-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'book' && (
              <div className="text-center py-12">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plus className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Workers?</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Post your job requirement and get matched with verified workers in minutes.
                </p>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 transition-colors"
                >
                  Book Worker Now
                </button>
              </div>
            )}

            {activeTab === 'active' && (
              <div className="space-y-6">
                {jobRequests.filter(job => job.status !== 'completed').map(job => (
                  <div key={job.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.status === 'searching' ? 'bg-yellow-100 text-yellow-800' :
                        job.status === 'matched' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {job.status === 'searching' ? 'Searching...' :
                         job.status === 'matched' ? 'Workers Found' :
                         'Confirmed'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{job.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm">₹{job.pay}/{job.payType}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{job.skillsRequired.join(', ')}</span>
                      </div>
                    </div>

                    {job.status === 'matched' && job.matchedWorkers && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Available Workers</h4>
                        <div className="space-y-4">
                          {job.matchedWorkers.map(worker => (
                            <div key={worker.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                  <User className="h-6 w-6 text-gray-600" />
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900">{worker.name}</h5>
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                      <span>{worker.rating}</span>
                                    </div>
                                    <span>{worker.completedJobs} jobs</span>
                                    <span>{worker.distance}</span>
                                    <span>ETA: {worker.estimatedArrival}</span>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => confirmWorker(job.id, worker.id)}
                                className="bg-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-orange-400 transition-colors"
                              >
                                Confirm
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {job.status === 'confirmed' && (
                      <div className="mt-4 p-4 bg-green-50 rounded-lg">
                        <p className="text-green-800 font-medium">Worker confirmed! They will arrive soon.</p>
                      </div>
                    )}
                  </div>
                ))}

                {jobRequests.filter(job => job.status !== 'completed').length === 0 && (
                  <div className="text-center py-12">
                    <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Active Jobs</h3>
                    <p className="text-gray-600">Your active job requests will appear here.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-6">
                {jobRequests.filter(job => job.status === 'completed').map(job => (
                  <div key={job.id} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600">{job.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>{job.location}</span>
                          <span>₹{job.pay}/{job.payType}</span>
                          <span>{new Date(job.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                ))}

                {jobRequests.filter(job => job.status === 'completed').length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Completed Jobs</h3>
                    <p className="text-gray-600">Your completed jobs will appear here.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Book a Worker</h2>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    value={bookingForm.title}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Cashier for evening shift"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={bookingForm.location}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Enter your store address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <textarea
                  value={bookingForm.description}
                  onChange={(e) => setBookingForm(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  placeholder="Describe the work requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={bookingForm.duration}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, duration: e.target.value }))}
                    placeholder="e.g., 4 hours, 1 day"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pay Amount *
                  </label>
                  <input
                    type="number"
                    value={bookingForm.pay}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, pay: e.target.value }))}
                    placeholder="Amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pay Type
                  </label>
                  <select
                    value={bookingForm.payType}
                    onChange={(e) => setBookingForm(prev => ({ ...prev, payType: e.target.value as any }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="hourly">Per Hour</option>
                    <option value="daily">Per Day</option>
                    <option value="fixed">Fixed Amount</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Skills
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {skillOptions.map(skill => (
                    <label key={skill} className="flex items-center space-x-2 text-sm">
                      <input
                        type="checkbox"
                        checked={bookingForm.skillsRequired.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
                        className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                      />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When do you need them?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { key: 'immediate', label: 'Right Now' },
                    { key: 'today', label: 'Today' },
                    { key: 'tomorrow', label: 'Tomorrow' },
                    { key: 'flexible', label: 'Flexible' }
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setBookingForm(prev => ({ ...prev, urgency: key as any }))}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        bookingForm.urgency === key
                          ? 'bg-yellow-500 text-slate-900'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBookWorker}
                  className="flex-1 py-3 px-6 bg-yellow-500 text-slate-900 rounded-lg font-medium hover:bg-orange-400 transition-colors"
                >
                  Find Workers
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Searching Modal */}
      {searchingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500 mx-auto mb-6"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Finding Workers...</h3>
            <p className="text-gray-600 mb-4">We're matching you with the best workers for your job.</p>
            <div className="text-sm text-gray-500">
              <p>Job: {searchingJob.title}</p>
              <p>Location: {searchingJob.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessDashboard