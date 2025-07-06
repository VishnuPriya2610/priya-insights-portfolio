
import { Github, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to collaborate on data-driven projects or discuss opportunities in data analytics? 
              Let's connect and explore how we can work together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg border">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <a 
                      href="mailto:priyasatish042@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      priyasatish042@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg border">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">GitHub</h4>
                    <a 
                      href="https://github.com/VishnuPriya2610"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      VishnuPriya2610
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="mailto:priyasatish042@gmail.com">
                    <Mail size={20} />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <a 
                    href="https://github.com/VishnuPriya2610"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Message Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
