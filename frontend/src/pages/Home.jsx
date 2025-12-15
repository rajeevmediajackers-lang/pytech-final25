import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import {
  companyStats,
  services,
  whyChooseUs,
  portfolioProjects,
  technologies,
  testimonials,
  blogPosts,
  clientLogos
} from '../data/mock';

const Home = () => {
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const getIconComponent = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={32} /> : null;
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PyTech Digital Pvt. Ltd.",
    "url": "https://pytechdigital.com",
    "logo": "https://pytechdigital.com/logo.png",
    "description": "Leading IT services company offering web development, mobile apps, custom software, digital marketing, and more.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Plot No. 21 & 21A, Sector 142",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201304",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9205-222-170",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/pytechdigital",
      "https://twitter.com/pytechdigital",
      "https://www.facebook.com/pytechdigital"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="PyTech Digital - Leading IT Services Company in Noida | Web & Mobile Development"
        description="PyTech Digital offers comprehensive IT services including web development, mobile app development, custom software, digital marketing, cybersecurity, and cloud solutions. 500+ projects delivered with 98% client satisfaction."
        keywords="IT services company Noida, web development India, mobile app development, custom software development, digital marketing services, cybersecurity, cloud services, PyTech Digital"
        url="/"
        schema={organizationSchema}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Desktop/Tablet Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block w-full h-full object-cover"
          >
            <source
              src="https://customer-assets.emergentagent.com/job_webtech-masters/artifacts/xskr1q1l_gits%20digital%20%281%29.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block md:hidden w-full h-full object-cover"
          >
            <source
              src="https://customer-assets.emergentagent.com/job_webtech-masters/artifacts/qz8u3mmu_gits%20digital%20-%20mobile%20%28Mobile%20Video%29%20%281%29.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E5BFF]/10 to-[#06D6A0]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#2E5BFF]">
                      {getIconComponent(service.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 group-hover:text-[#2E5BFF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#2E5BFF] font-semibold hover:gap-2 transition-all"
                  >
                    Know More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-6">
                Why Choose PyTech Digital?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine technical expertise with strategic thinking to deliver solutions that drive real business results.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#2E5BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-[#2E5BFF]">
                        {getIconComponent(item.icon)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0A2463] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_webtech-masters/artifacts/vk46it16_image%20%281%29.png"
                alt="Why Choose Us"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our best work across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-[#2E5BFF]/10 text-[#2E5BFF] hover:bg-[#2E5BFF]/20">
                    {project.industry}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle2 size={20} className="text-[#10B981]" />
                    <span className="text-[#10B981] font-semibold">
                      {project.results}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-[#0A2463] hover:bg-[#081b4d] text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                View All Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging cutting-edge tools and frameworks to build future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-sm text-gray-300 mb-2">{tech.category}</div>
                <div className="font-bold text-lg">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
            <p className="text-lg text-gray-500">Clients from India, USA, Canada, Ghana & More</p>
          </div>

          {/* Auto-sliding Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-testimonials">
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-[#F59E0B] fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic line-clamp-4">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div>
                        <div className="font-bold text-[#0A2463] text-lg">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and best practices in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-[#2E5BFF]/10 text-[#2E5BFF] hover:bg-[#2E5BFF]/20">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 group-hover:text-[#2E5BFF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              Read All Insights
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let&apos;s discuss how we can help you achieve your digital goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0A2463] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2463] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-gray-300">Response within 24 hours guaranteed</p>
        </div>
      </section>
    </div>
  );
};

export default Home;