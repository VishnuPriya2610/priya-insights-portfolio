
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Greenhouse Monitoring System',
      description: 'IoT-based environmental monitoring solution using Raspberry Pi and Arduino sensors for real-time plant growth optimization.',
      technologies: ['IoT', 'Raspberry Pi', 'Arduino', 'Python', 'Data Analytics'],
      features: [
        'Real-time sensor data collection',
        'Environmental parameter monitoring',
        'Plant growth optimization algorithms',
        'Automated alert systems'
      ],
      icon: '🌱'
    },
    {
      title: 'AI-Powered Legal Awareness Chatbot',
      description: 'Intelligent chatbot leveraging NLP with Gemini and BERT for legal awareness, deployed on cloud with scalable REST APIs.',
      technologies: ['NLP', 'Gemini AI', 'BERT', 'Cloud Deployment', 'REST APIs'],
      features: [
        'Natural language processing',
        'Legal document analysis',
        'Real-time data access',
        'Scalable cloud architecture'
      ],
      icon: '⚖️'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-colors group">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{project.icon}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-blue-400 font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <ArrowUp className="w-3 h-3 text-blue-400 mr-2 rotate-45" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Github size={20} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
