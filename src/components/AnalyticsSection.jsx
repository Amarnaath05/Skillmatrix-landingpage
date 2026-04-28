import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const AnalyticsSection = () => {
  const [barHeights, setBarHeights] = useState([0, 0, 0, 0, 0, 0]);
  const [lineProgress, setLineProgress] = useState(0);
  const [counters, setCounters] = useState({ success: 0, growth: 0, students: 0, projects: 0 });

  const barData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 80 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 90 },
    { month: 'May', value: 75 },
    { month: 'Jun', value: 95 }
  ];

  useEffect(() => {
    // Animate bars
    const timer = setTimeout(() => {
      setBarHeights(barData.map(item => item.value));
    }, 500);

    // Animate line
    const lineTimer = setTimeout(() => {
      setLineProgress(100);
    }, 800);

    // Animate counters
    const counterTimer = setTimeout(() => {
      setCounters({
        success: 85,
        growth: 10,
        students: 5000,
        projects: 150
      });
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearTimeout(lineTimer);
      clearTimeout(counterTimer);
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#0b0f19] to-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Real Results,
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Real Impact
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Track your progress with our comprehensive analytics dashboard
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                {counters.success}%
              </span>
            </div>
            <p className="text-gray-400 text-sm">Success Rate</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-purple-400" />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {counters.growth}x
              </span>
            </div>
            <p className="text-gray-400 text-sm">Career Growth</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                {counters.students.toLocaleString()}
              </span>
            </div>
            <p className="text-gray-400 text-sm">Active Students</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-orange-400" />
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                {counters.projects}+
              </span>
            </div>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Monthly Progress</h3>
            <div className="flex items-end justify-between h-48">
              {barData.map((item, index) => (
                <div key={item.month} className="flex flex-col items-center flex-1">
                  <div className="w-full max-w-12 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all duration-1000 ease-out relative">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"
                      style={{ height: `${barHeights[index]}%` }}
                    />
                    {/* Animated glow effect */}
                    {barHeights[index] > 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-500 animate-pulse opacity-30 rounded-t-lg" />
                    )}
                  </div>
                  <span className="text-gray-400 text-sm mt-2">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Line Chart */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Skill Development</h3>
            <div className="relative h-48">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 25, 50, 75, 100].map((value) => (
                  <div key={value} className="border-b border-white/10 w-full" />
                ))}
              </div>
              
              {/* Line */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 140 Q 60 100, 100 120 T 180 80 T 260 40"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeDasharray="300"
                  strokeDashoffset={300 - (300 * lineProgress / 100)}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              
              {/* Points */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
              <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-indigo-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
