import React from 'react';

const Companies = () => {
  const row1Companies = [
    { name: "Netflix", color: "text-red-400", borderColor: "border-red-500/30", glow: "shadow-[0_0_12px_rgba(239,68,68,0.4)]" },
    { name: "Google", color: "text-blue-400", borderColor: "border-blue-500/30", glow: "shadow-[0_0_12px_rgba(96,165,250,0.4)]" },
    { name: "Amazon", color: "text-orange-400", borderColor: "border-orange-500/30", glow: "shadow-[0_0_12px_rgba(251,146,60,0.4)]" },
    { name: "Meta", color: "text-blue-500", borderColor: "border-blue-500/30", glow: "shadow-[0_0_12px_rgba(59,130,246,0.4)]" },
    { name: "Apple", color: "text-white", borderColor: "border-white/30", glow: "shadow-[0_0_12px_rgba(255,255,255,0.4)]" },
    { name: "Microsoft", color: "text-cyan-400", borderColor: "border-cyan-500/30", glow: "shadow-[0_0_12px_rgba(34,211,238,0.4)]" },
    { name: "Tesla", color: "text-red-500", borderColor: "border-red-500/30", glow: "shadow-[0_0_12px_rgba(239,68,68,0.4)]" },
    { name: "LinkedIn", color: "text-blue-600", borderColor: "border-blue-500/30", glow: "shadow-[0_0_12px_rgba(37,99,235,0.4)]" }
  ];

  const row2Companies = [
    { name: "Adobe", color: "text-red-600", borderColor: "border-red-500/30", glow: "shadow-[0_0_12px_rgba(220,38,38,0.4)]" },
    { name: "Intel", color: "text-blue-700", borderColor: "border-blue-500/30", glow: "shadow-[0_0_12px_rgba(29,78,216,0.4)]" },
    { name: "Samsung", color: "text-blue-800", borderColor: "border-blue-500/30", glow: "shadow-[0_0_12px_rgba(30,58,138,0.4)]" },
    { name: "Uber", color: "text-gray-300", borderColor: "border-gray-500/30", glow: "shadow-[0_0_12px_rgba(209,213,219,0.4)]" },
    { name: "IBM", color: "text-blue-900", borderColor: "border-blue-500/30", glow: "shadow-[0_0_12px_rgba(30,58,138,0.4)]" },
    { name: "Oracle", color: "text-red-700", borderColor: "border-red-500/30", glow: "shadow-[0_0_12px_rgba(185,28,28,0.4)]" },
    { name: "Salesforce", color: "text-cyan-500", borderColor: "border-cyan-500/30", glow: "shadow-[0_0_12px_rgba(6,182,212,0.4)]" },
    { name: "Spotify", color: "text-green-500", borderColor: "border-green-500/30", glow: "shadow-[0_0_12px_rgba(34,197,94,0.4)]" }
  ];

  // Duplicate for infinite scroll
  const duplicatedRow1 = [...row1Companies, ...row1Companies];
  const duplicatedRow2 = [...row2Companies, ...row2Companies];

  return (
    <section className="bg-[#020617] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="text-cyan-400 text-xs tracking-[0.3em] uppercase text-center">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl text-center font-serif mt-4">
            Companies Where Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Learners Have Progressed</span>
          </h2>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            Our alumni have successfully transitioned to top-tier companies worldwide
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative mt-16 overflow-hidden group">
          {/* Row 1 - Moving Left */}
          <div className="flex gap-6 w-max animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
            {duplicatedRow1.map((company, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-5 py-2 rounded-full bg-[#0a1628] border ${company.borderColor} text-sm font-medium transition-all duration-300 ${company.color} ${company.glow} opacity-60 group-hover:opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-lg`}
              >
                {company.name}
              </div>
            ))}
          </div>

          {/* Row 2 - Moving Right */}
          <div className="flex gap-6 w-max animate-[marquee_20s_linear_infinite_reverse] group-hover:[animation-play-state:paused] mt-6">
            {duplicatedRow2.map((company, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-5 py-2 rounded-full bg-[#0a1628] border ${company.borderColor} text-sm font-medium transition-all duration-300 ${company.color} ${company.glow} opacity-60 group-hover:opacity-30 hover:opacity-100 hover:scale-105 hover:shadow-lg`}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="p-6 rounded-xl bg-[#0a1628] border border-white/5 text-center">
            <div className="text-3xl font-semibold text-cyan-400">500+</div>
            <div className="text-gray-400 mt-2">Company Partnerships</div>
          </div>
          <div className="p-6 rounded-xl bg-[#0a1628] border border-white/5 text-center">
            <div className="text-3xl font-semibold text-cyan-400">85%</div>
            <div className="text-gray-400 mt-2">Placement Rate</div>
          </div>
          <div className="p-6 rounded-xl bg-[#0a1628] border border-white/5 text-center">
            <div className="text-3xl font-semibold text-cyan-400">$75K</div>
            <div className="text-gray-400 mt-2">Average Starting Salary</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 italic mt-10 text-sm">
          Join thousands of successful professionals who started their journey with us
        </div>

        {/* CTA Button */}
        <button className="mt-6 mx-auto block px-6 py-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition">
          View Success Stories
        </button>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Companies;
