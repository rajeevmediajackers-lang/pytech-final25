import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'Digital Marketing',
    'Cybersecurity',
    'Cloud Services'
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cancellation & Refunds', path: '/refunds' },
    { name: 'Shipping Policy', path: '/shipping' }
  ];

  return (
    <footer className="bg-[#0A2463] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_webtech-masters/artifacts/hbhnkn90_logo3-pytech.png"
              alt="PyTech Digital"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-lg font-semibold text-white mb-2">PyTech Digital Pvt. Ltd.</h3>
            <p className="text-gray-300 mb-4">
              Engineering Digital Excellence for Forward-Thinking Businesses
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/pytech-digital/?viewAsMember=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#2E5BFF] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#2E5BFF] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#2E5BFF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#2E5BFF] flex-shrink-0 mt-1" />
                <span className="text-gray-300">2nd Floor, Plot No. 21 & 21A,<br />Sector 142, Noida,<br />Uttar Pradesh 201304</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#2E5BFF] flex-shrink-0" />
                <a href="tel:+919205222170" className="text-gray-300 hover:text-[#2E5BFF] transition-colors">
                  +91 9205 222 170
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#2E5BFF] flex-shrink-0" />
                <a href="mailto:info@pytechdigital.com" className="text-gray-300 hover:text-[#2E5BFF] transition-colors">
                  info@pytechdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PyTech Digital Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-[#2E5BFF] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#2E5BFF] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-[#2E5BFF] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
