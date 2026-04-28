import React from 'react';

const Companies = () => {
  const companies = [
    "Meta", "Netflix", "Apple", "Google", "Microsoft", 
    "Adobe", "Intel", "Samsung", "Uber", "LinkedIn",
    "Amazon", "Tesla", "IBM", "Oracle", "Salesforce"
  ];

  // Duplicate for infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#0b0f19] to-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Companies Where Our
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Learners Have Progressed
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our alumni have successfully transitioned to top-tier companies worldwide
          </p>
        </div>

        {/* Infinite Scroll Companies Row */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-right">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 mx-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-medium">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">500+</div>
            <div className="text-gray-300">Company Partnerships</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 mb-2">85%</div>
            <div className="text-gray-300">Placement Rate</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 mb-2">$75K</div>
            <div className="text-gray-300">Average Starting Salary</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
