
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Vishnu Priya S
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Computer Engineering Graduate | Data Analyst
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transforming data into actionable insights with expertise in Excel, SQL, Power BI, Tableau, and Python. 
            Passionate about leveraging analytics to drive strategic decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
