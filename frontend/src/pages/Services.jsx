import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { services } from '../data/mock';

const Services = () => {
  const getIconComponent = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={48} /> : null;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to transform your business and drive digital success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2E5BFF]/10 to-[#06D6A0]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#2E5BFF]">
                      {getIconComponent(service.icon)}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4 group-hover:text-[#2E5BFF] transition-colors">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 size={20} className="text-[#10B981] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/services/${service.slug}`}>
                    <Button
                      className="w-full bg-[#2E5BFF] hover:bg-[#1e4bd6] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Know More
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LucideIcons.Award className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">Proven Expertise</h3>
                <p className="text-gray-600">Years of experience delivering successful projects across diverse industries</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LucideIcons.Zap className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Agile methodology ensures quick turnaround without compromising quality</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#2E5BFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LucideIcons.HeadphonesIcon className="text-[#2E5BFF]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2463] mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support to keep your business running smoothly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2463] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how our services can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0A2463] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2463] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;