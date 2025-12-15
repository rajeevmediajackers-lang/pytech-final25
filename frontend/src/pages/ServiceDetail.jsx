import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import ServiceContactForm from '../components/ServiceContactForm';
import { services } from '../data/mock';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0A2463] mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button className="bg-[#2E5BFF] hover:bg-[#1e4bd6]">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getIconComponent = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={64} /> : null;
  };

  const serviceDetails = {
    'web-development': {
      overview: 'Our web development services combine cutting-edge technology with creative design to deliver websites that not only look great but also drive results. From simple landing pages to complex web applications, we have the expertise to bring your vision to life.',
      benefits: [
        'Custom design tailored to your brand',
        'Mobile-responsive across all devices',
        'SEO-optimized for better visibility',
        'Fast loading speeds for better UX',
        'Secure and scalable architecture',
        'Easy content management systems'
      ],
      process: [
        { title: 'Discovery', desc: 'Understanding your business goals and requirements' },
        { title: 'Planning', desc: 'Creating wireframes and technical specifications' },
        { title: 'Design', desc: 'Crafting beautiful and intuitive user interfaces' },
        { title: 'Development', desc: 'Building with clean, efficient code' },
        { title: 'Testing', desc: 'Rigorous QA across devices and browsers' },
        { title: 'Launch', desc: 'Deployment and ongoing support' }
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'WordPress', 'Node.js', 'PHP', 'Python']
    },
    'mobile-app-development': {
      overview: 'Create powerful mobile experiences that engage your users. We develop native iOS and Android apps, as well as cross-platform solutions that work seamlessly across devices while maintaining high performance and user satisfaction.',
      benefits: [
        'Native and cross-platform development',
        'Intuitive user interface design',
        'Offline functionality support',
        'Push notifications integration',
        'App Store optimization',
        'Regular updates and maintenance'
      ],
      process: [
        { title: 'Strategy', desc: 'Defining app concept and features' },
        { title: 'Design', desc: 'Creating engaging UI/UX' },
        { title: 'Development', desc: 'Building for iOS and Android' },
        { title: 'Testing', desc: 'Comprehensive quality assurance' },
        { title: 'Deployment', desc: 'App Store submission' },
        { title: 'Support', desc: 'Ongoing maintenance and updates' }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'GraphQL', 'REST APIs']
    },
    'custom-software-development': {
      overview: 'Transform your unique business challenges into innovative software solutions. We specialize in building custom enterprise applications that streamline operations, improve efficiency, and give you a competitive edge.',
      benefits: [
        'Tailored to your specific needs',
        'Scalable architecture for growth',
        'Integration with existing systems',
        'Enhanced security measures',
        'Improved operational efficiency',
        'Competitive advantage'
      ],
      process: [
        { title: 'Analysis', desc: 'Understanding business processes' },
        { title: 'Architecture', desc: 'Designing system architecture' },
        { title: 'Development', desc: 'Agile development approach' },
        { title: 'Integration', desc: 'Connecting with existing systems' },
        { title: 'Testing', desc: 'Comprehensive testing phase' },
        { title: 'Deployment', desc: 'Launch and training' }
      ],
      technologies: ['Java', 'Python', '.NET', 'Node.js', 'PostgreSQL', 'MongoDB', 'Microservices', 'Docker']
    },
    'digital-marketing': {
      overview: 'Drive growth with data-driven digital marketing strategies. From SEO to social media, we help you reach your target audience, generate quality leads, and convert them into loyal customers.',
      benefits: [
        'Increased online visibility',
        'Higher quality leads',
        'Better ROI on marketing spend',
        'Brand awareness and authority',
        'Measurable results and analytics',
        'Competitive market advantage'
      ],
      process: [
        { title: 'Audit', desc: 'Current digital presence analysis' },
        { title: 'Strategy', desc: 'Comprehensive marketing plan' },
        { title: 'Implementation', desc: 'Campaign execution' },
        { title: 'Optimization', desc: 'Continuous improvement' },
        { title: 'Reporting', desc: 'Performance analytics' },
        { title: 'Scaling', desc: 'Growth and expansion' }
      ],
      technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Google Ads', 'Facebook Ads', 'Hootsuite', 'Ahrefs']
    }
  };

  const defaultDetails = {
    overview: `Our ${service.title} service provides comprehensive solutions to help your business succeed. With years of experience and a team of experts, we deliver results that exceed expectations.`,
    benefits: service.features.map(f => f),
    process: [
      { title: 'Consultation', desc: 'Understanding your needs' },
      { title: 'Planning', desc: 'Creating detailed roadmap' },
      { title: 'Execution', desc: 'Implementing solutions' },
      { title: 'Review', desc: 'Quality assurance' },
      { title: 'Delivery', desc: 'Project handover' },
      { title: 'Support', desc: 'Ongoing assistance' }
    ],
    technologies: ['Modern Tech Stack', 'Industry Standards', 'Best Practices']
  };

  const details = serviceDetails[slug] || defaultDetails;

  return (
    <div className=\"min-h-screen pt-20\">
      <SEO
        title={`${service.title} - PyTech Digital`}
        description={service.description}
        keywords={`${service.title}, ${service.features.join(', ')}, PyTech Digital`}
        url={`/services/${slug}`}
      />

      {/* Breadcrumb */}
      <section className=\"py-8 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex items-center space-x-2 text-sm\">
            <Link to=\"/\" className=\"text-gray-500 hover:text-[#2E5BFF]\">Home</Link>
            <span className=\"text-gray-400\">/</span>
            <Link to=\"/services\" className=\"text-gray-500 hover:text-[#2E5BFF]\">Services</Link>
            <span className=\"text-gray-400\">/</span>
            <span className=\"text-[#0A2463] font-medium\">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className=\"py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex items-center justify-center mb-8\">
            <div className=\"w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center\">
              <div className=\"text-white\">
                {getIconComponent(service.icon)}
              </div>
            </div>
          </div>
          <h1 className=\"text-5xl md:text-6xl font-bold text-center mb-6\">
            {service.title}
          </h1>
          <p className=\"text-xl md:text-2xl text-center text-gray-200 max-w-3xl mx-auto\">
            {service.description}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className=\"py-20 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center\">
            <div>
              <h2 className=\"text-4xl font-bold text-[#0A2463] mb-6\">
                Overview
              </h2>
              <p className=\"text-lg text-gray-600 leading-relaxed mb-6\">
                {details.overview}
              </p>
              <Link to=\"#contact-form\">
                <Button
                  size=\"lg\"
                  className=\"bg-[#2E5BFF] hover:bg-[#1e4bd6] text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105\"
                >
                  Get Started Now
                  <ArrowRight className=\"ml-2\" size={20} />
                </Button>
              </Link>
            </div>
            <div>
              <Card className=\"border-0 shadow-2xl\">
                <CardContent className=\"p-8\">
                  <h3 className=\"text-2xl font-bold text-[#0A2463] mb-6\">Key Benefits</h3>
                  <div className=\"space-y-4\">
                    {details.benefits.map((benefit, index) => (
                      <div key={index} className=\"flex items-start space-x-3\">
                        <CheckCircle2 size={24} className=\"text-[#10B981] flex-shrink-0 mt-1\" />
                        <span className=\"text-gray-700\">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-[#0A2463] mb-4\">
              What We Offer
            </h2>
            <p className=\"text-xl text-gray-600\">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            {service.features.map((feature, index) => (
              <Card key={index} className=\"border-0 shadow-xl hover:shadow-2xl transition-shadow\">
                <CardContent className=\"p-6\">
                  <div className=\"w-12 h-12 bg-[#2E5BFF]/10 rounded-lg flex items-center justify-center mb-4\">
                    <CheckCircle2 className=\"text-[#2E5BFF]\" size={24} />
                  </div>
                  <h3 className=\"text-xl font-bold text-[#0A2463] mb-2\">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className=\"py-20 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-[#0A2463] mb-4\">
              Our Process
            </h2>
            <p className=\"text-xl text-gray-600\">
              A proven approach to deliver exceptional results
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            {details.process.map((step, index) => (
              <Card key={index} className=\"border-0 shadow-xl\">
                <CardContent className=\"p-6\">
                  <div className=\"w-12 h-12 bg-gradient-to-br from-[#2E5BFF] to-[#06D6A0] rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg\">
                    {index + 1}
                  </div>
                  <h3 className=\"text-xl font-bold text-[#0A2463] mb-2\">{step.title}</h3>
                  <p className=\"text-gray-600\">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className=\"py-20 bg-[#0A2463] text-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-4xl font-bold mb-4\">
              Technologies We Use
            </h2>
            <p className=\"text-xl text-gray-300\">
              Industry-leading tools and technologies
            </p>
          </div>

          <div className=\"flex flex-wrap justify-center gap-4\">
            {details.technologies.map((tech, index) => (
              <Badge
                key={index}
                className=\"bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 text-lg\"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div id=\"contact-form\">
        <ServiceContactForm serviceName={service.title} />
      </div>

      {/* Back to Services */}
      <section className=\"py-12 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">
          <Link to=\"/services\">
            <Button
              variant=\"outline\"
              className=\"border-2 border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300\"
            >
              <ArrowLeft className=\"mr-2\" size={20} />
              Back to All Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
