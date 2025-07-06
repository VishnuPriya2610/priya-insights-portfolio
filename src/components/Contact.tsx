
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on data-driven projects or discuss opportunities in data analytics? 
            Let's connect and explore how we can work together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Email</h3>
              <a 
                href="mailto:priyasatish042@gmail.com"
                className="text-white hover:text-blue-400 transition-colors text-lg"
              >
                priyasatish042@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">GitHub</h3>
              <a 
                href="https://github.com/VishnuPriya2610"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors text-lg flex items-center justify-center space-x-2"
              >
                <Github size={20} />
                <span>VishnuPriya2610</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:priyasatish042@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
            <a 
              href="https://github.com/VishnuPriya2610"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Github size={20} />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
