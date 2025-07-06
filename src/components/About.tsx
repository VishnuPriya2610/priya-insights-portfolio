
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-gray-700 mb-6 leading-relaxed">
                I am a dedicated Computer Engineering graduate from Presidency University (2025) with a passion for 
                data analytics and problem-solving. My expertise lies in transforming complex datasets into 
                meaningful insights that drive business decisions.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With proficiency in Excel, SQL, Power BI, Tableau, and Python, I specialize in creating 
                comprehensive data visualizations and analytical solutions. I thrive on challenges that 
                require both technical expertise and creative thinking.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-blue-600 font-semibold mb-2">Education</h4>
                  <p className="text-gray-700">Computer Engineering</p>
                  <p className="text-gray-600">Presidency University (2025)</p>
                </div>
                <div>
                  <h4 className="text-blue-600 font-semibold mb-2">Focus</h4>
                  <p className="text-gray-700">Data Analytics</p>
                  <p className="text-gray-600">Business Intelligence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Solutions</h3>
                  <p className="text-gray-700 text-sm">
                    Passionate about turning raw data into strategic insights through advanced analytics and visualization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
