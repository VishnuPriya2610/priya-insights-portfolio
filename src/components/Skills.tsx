
import { useState, useEffect } from 'react';

const Skills = () => {
  const [animatedBars, setAnimatedBars] = useState(false);

  const skills = [
    { name: 'Excel', level: 90, icon: '📊', color: 'from-blue-500 to-blue-600' },
    { name: 'SQL', level: 85, icon: '🗃️', color: 'from-blue-500 to-blue-600' },
    { name: 'Power BI', level: 88, icon: '📈', color: 'from-blue-500 to-blue-600' },
    { name: 'Tableau', level: 82, icon: '📉', color: 'from-blue-500 to-blue-600' },
    { name: 'Python', level: 78, icon: '🐍', color: 'from-blue-500 to-blue-600' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
          
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xl font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: animatedBars ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Data Visualization</h3>
              <p className="text-gray-700 text-sm">Creating compelling visual stories from complex datasets</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Statistical Analysis</h3>
              <p className="text-gray-700 text-sm">Advanced statistical methods and predictive modeling</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Business Intelligence</h3>
              <p className="text-gray-700 text-sm">Transforming data into actionable business insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
