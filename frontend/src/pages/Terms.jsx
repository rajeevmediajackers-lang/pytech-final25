import React from 'react';
import SEO from '../components/SEO';
import { FileText, AlertCircle, Scale, DollarSign, ShieldCheck, XCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Terms and Conditions - PyTech Digital Pvt. Ltd."
        description="Read PyTech Digital's terms and conditions for using our services and website."
        keywords="terms and conditions, terms of service, user agreement, PyTech Digital"
        url="/terms"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="mx-auto mb-6" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <p className="mt-4 text-gray-300">Last Updated: January 23, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <AlertCircle className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-4">
                    By accessing and using the services provided by PyTech Digital Pvt. Ltd. ("we," "us," or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Scale className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">2. Services Description</h2>
                  <p className="text-gray-600 mb-4">
                    PyTech Digital provides IT services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Web development and design</li>
                    <li>Mobile application development</li>
                    <li>Custom software development</li>
                    <li>Digital marketing services</li>
                    <li>Branding and creative services</li>
                    <li>Cybersecurity services</li>
                    <li>Cloud services</li>
                    <li>IT consulting and support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <DollarSign className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">3. Payment Terms</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Payment terms will be specified in individual project agreements</li>
                    <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                    <li>Payment must be made according to the agreed schedule</li>
                    <li>Late payments may incur additional charges</li>
                    <li>We reserve the right to suspend services for non-payment</li>
                    <li>All payments are processed through secure payment gateways</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <ShieldCheck className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">4. Intellectual Property Rights</h2>
                  <p className="text-gray-600 mb-4">
                    Upon full payment, clients receive the agreed-upon rights to deliverables. However:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>We retain rights to our methodologies, tools, and frameworks</li>
                    <li>Portfolio rights: We may showcase completed work (with client permission)</li>
                    <li>Third-party licenses remain with their respective owners</li>
                    <li>Custom code ownership is transferred upon final payment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">5. Client Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide timely feedback and approvals</li>
                <li>Supply necessary content, assets, and access</li>
                <li>Ensure accuracy of information provided</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Make payments according to agreed schedule</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">6. Project Timeline and Delays</h2>
              <p className="text-gray-600 mb-4">
                Project timelines are estimates and may be affected by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Delays in client feedback or approvals</li>
                <li>Scope changes or additional requirements</li>
                <li>Third-party dependencies</li>
                <li>Force majeure events</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">7. Warranties and Disclaimers</h2>
              <p className="text-gray-600 mb-4">
                We warrant that our services will be performed with professional skill and care. However:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>We do not guarantee specific business outcomes</li>
                <li>Third-party services and platforms are subject to their own terms</li>
                <li>We are not responsible for issues beyond our control</li>
                <li>All services are provided "as is" unless otherwise specified</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <XCircle className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    Our liability is limited to the amount paid for the specific service. We are not liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Issues caused by client's failure to follow recommendations</li>
                    <li>Third-party actions or failures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">9. Termination</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate services under certain conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Written notice as per agreement terms</li>
                <li>Immediate termination for material breach</li>
                <li>Payment of fees for work completed up to termination date</li>
                <li>Return of client materials and data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">10. Confidentiality</h2>
              <p className="text-gray-600">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of engagement. This obligation survives termination of services.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">11. Governing Law</h2>
              <p className="text-gray-600">
                These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Noida, Uttar Pradesh.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">12. Modifications</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-[#2E5BFF]/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">13. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms and Conditions, contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@pytechdigital.com</p>
                <p><strong>Phone:</strong> +91 9205 222 170</p>
                <p><strong>Address:</strong> 2nd Floor, Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;