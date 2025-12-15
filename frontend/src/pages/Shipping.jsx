import React from 'react';
import SEO from '../components/SEO';
import { Package, Mail, Globe, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Shipping = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Shipping & Delivery Policy - PyTech Digital Pvt. Ltd."
        description="Learn about PyTech Digital's delivery policy for IT services and digital products."
        keywords="shipping policy, delivery policy, service delivery, PyTech Digital"
        url="/shipping"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="mx-auto mb-6" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            How we deliver our IT services and digital products
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
                <Globe className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Nature of Our Services</h2>
                  <p className="text-gray-600 mb-4">
                    PyTech Digital primarily provides digital services and products. As such, traditional physical shipping does not apply to most of our offerings. Our "delivery" refers to the digital transfer of completed work, access credentials, or deployment of services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">1. Digital Service Delivery</h2>
                  
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">1.1 How We Deliver</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                    <li><strong>Email:</strong> Source code, documentation, and credentials sent via secure email</li>
                    <li><strong>Cloud Storage:</strong> Large files shared through Google Drive, Dropbox, or similar services</li>
                    <li><strong>Version Control:</strong> GitHub, GitLab, or Bitbucket repository access</li>
                    <li><strong>Direct Deployment:</strong> Hosting and deployment to client's servers or cloud platforms</li>
                    <li><strong>Project Management Tools:</strong> Deliverables uploaded to Asana, Trello, or Jira</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">1.2 Delivery Timeframes</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Milestone deliverables: As per project timeline</li>
                    <li>Final deliverables: Within 48 hours of final payment and approval</li>
                    <li>Source code and documentation: Provided at project completion or as per agreement</li>
                    <li>Credentials and access: Transferred immediately upon request after final payment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Clock className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">2. Service-Specific Delivery</h2>
                  
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">2.1 Web & Mobile Development</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                    <li>Staging environment access during development</li>
                    <li>Live deployment upon final approval and payment</li>
                    <li>Complete source code package delivery</li>
                    <li>Technical documentation and user manuals</li>
                    <li>Training sessions (if included in package)</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">2.2 Digital Marketing Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                    <li>Campaign launch: As per agreed schedule</li>
                    <li>Monthly reports: First week of following month</li>
                    <li>Ad creatives: 48-72 hours before campaign launch</li>
                    <li>SEO reports: Monthly or as per contract</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">2.3 Branding & Design</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Initial concepts: Within agreed timeframe</li>
                    <li>Revisions: 3-5 business days per round</li>
                    <li>Final files: All formats delivered within 24 hours of approval</li>
                    <li>Brand guidelines: PDF delivered with final package</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">3. Physical Deliveries (If Applicable)</h2>
              <p className="text-gray-600 mb-4">
                In rare cases where physical items are part of the service (e.g., branded materials, documentation binders):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Delivery Method:</strong> Professional courier services</li>
                <li><strong>Delivery Area:</strong> India (specific cities as agreed)</li>
                <li><strong>Delivery Time:</strong> 5-7 business days within India</li>
                <li><strong>Shipping Costs:</strong> Borne by client unless otherwise agreed</li>
                <li><strong>Tracking:</strong> Provided once shipment is dispatched</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">4. Delivery Confirmation</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Client receives email notification upon delivery</li>
                <li>Acknowledgment receipt required for formal deliverables</li>
                <li>48-hour review period for raising delivery issues</li>
                <li>Re-delivery of corrected items: Within 24-48 hours</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">5. Delays and Issues</h2>
              <p className="text-gray-600 mb-4">
                Delivery may be delayed due to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                <li>Pending payments or approvals from client</li>
                <li>Scope changes or additional requirements</li>
                <li>Third-party service dependencies</li>
                <li>Technical issues beyond our control</li>
                <li>Force majeure events</li>
              </ul>
              <p className="text-gray-600">
                Clients will be notified immediately of any anticipated delays.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">6. Ownership Transfer</h2>
              <p className="text-gray-600 mb-4">
                Digital assets and intellectual property are transferred to the client only after:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Full payment received</li>
                <li>All deliverables approved by client</li>
                <li>Formal handover process completed</li>
                <li>Transfer agreement signed (if applicable)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">7. Post-Delivery Support</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Bug fixes: As per warranty period (typically 30-90 days)</li>
                <li>Technical support: As per maintenance agreement</li>
                <li>Training and documentation: Provided at delivery</li>
                <li>Additional support: Available through separate agreements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">8. Re-delivery Policy</h2>
              <p className="text-gray-600 mb-4">
                If deliverables don't meet agreed specifications:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Report issues within 48 hours of delivery</li>
                <li>We will review and confirm the issues</li>
                <li>Corrections made within agreed timeframe</li>
                <li>Re-delivery at no additional cost if error is on our part</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-[#2E5BFF]/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">9. Contact for Delivery Queries</h2>
              <p className="text-gray-600 mb-4">
                For questions about delivery or to report delivery issues:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> delivery@pytechdigital.com</p>
                <p><strong>Phone:</strong> +91 9205 222 170</p>
                <p><strong>Address:</strong> 2nd Floor, Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304</p>
                <p className="mt-4 text-sm italic">Please include your project ID and delivery tracking details in all communications.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Shipping;