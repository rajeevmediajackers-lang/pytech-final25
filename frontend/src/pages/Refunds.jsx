import React from 'react';
import SEO from '../components/SEO';
import { RefreshCw, Clock, XCircle, CheckCircle, AlertTriangle, CreditCard } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Refunds = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Cancellation & Refund Policy - PyTech Digital Pvt. Ltd."
        description="Read PyTech Digital's cancellation and refund policy for our IT services."
        keywords="cancellation policy, refund policy, payment refund, PyTech Digital"
        url="/refunds"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RefreshCw className="mx-auto mb-6" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Our policy on cancellations and refunds for IT services
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
                <AlertTriangle className="text-[#F59E0B] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">Important Notice</h2>
                  <p className="text-gray-600 mb-4">
                    Due to the nature of IT services and custom development work, our cancellation and refund policy is structured to protect both parties' interests. Please read carefully before engaging our services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <XCircle className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">1. Cancellation Policy</h2>
                  
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">1.1 Before Project Commencement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                    <li>Cancellation within 48 hours of agreement: 100% refund of advance payment</li>
                    <li>Cancellation after 48 hours but before work starts: 90% refund (10% administrative fee)</li>
                    <li>Cancellation after project kickoff meeting: Subject to work completed</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">1.2 After Project Commencement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Client must provide written cancellation notice</li>
                    <li>Payment required for all work completed up to cancellation date</li>
                    <li>Client receives deliverables for work completed and paid for</li>
                    <li>No refund for milestone payments already released</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <CreditCard className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">2. Refund Policy</h2>
                  
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">2.1 Refund Eligibility</h3>
                  <p className="text-gray-600 mb-4">Refunds may be considered in the following situations:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                    <li>Services not delivered as per agreed specifications</li>
                    <li>Major deviation from project requirements without client approval</li>
                    <li>Complete failure to commence work within agreed timeline</li>
                    <li>Breach of contract by PyTech Digital</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">2.2 Non-Refundable Items</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Discovery and consultation fees</li>
                    <li>Design concepts and wireframes once delivered</li>
                    <li>Third-party service costs (domains, hosting, licenses, etc.)</li>
                    <li>Marketing campaigns already launched</li>
                    <li>Work hours already invested and reported</li>
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
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">3. Refund Process Timeline</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Refund request must be submitted in writing via email</li>
                    <li>Review of refund request: 5-7 business days</li>
                    <li>Refund approval notification: Within 2 business days of review completion</li>
                    <li>Processing of approved refund: 7-14 business days</li>
                    <li>Credit to original payment method: 5-10 business days (depending on bank)</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    <strong>Total timeline:</strong> Typically 3-4 weeks from request to credit
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <CheckCircle className="text-[#10B981] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">4. Service-Specific Policies</h2>
                  
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">4.1 Web & Mobile Development</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                    <li>Refunds calculated based on completed milestones</li>
                    <li>Source code transfer upon full payment of completed work</li>
                    <li>No refund for approved phases/modules</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">4.2 Digital Marketing Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
                    <li>Monthly retainers: Cancellation requires 30 days notice</li>
                    <li>Ad spend is non-refundable</li>
                    <li>Current month charges apply even after cancellation notice</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#0A2463] mb-3 mt-6">4.3 Maintenance & Support</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Annual plans: Prorated refund for unused months (after 30-day period)</li>
                    <li>Monthly plans: 15 days notice required for cancellation</li>
                    <li>No refund for current service period</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">5. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                If you're not satisfied with our services:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>Contact your project manager immediately</li>
                <li>Escalate to management if issue persists: support@pytechdigital.com</li>
                <li>We will work to resolve issues within 5 business days</li>
                <li>Formal refund request only after exhausting resolution attempts</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">6. Refund Method</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Refunds processed to original payment method</li>
                <li>Bank transfer for large amounts (upon request)</li>
                <li>Refund processing fees (if any) deducted from refund amount</li>
                <li>Currency conversion rates at time of refund apply</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">7. Force Majeure</h2>
              <p className="text-gray-600">
                No refunds will be provided for delays or inability to perform due to circumstances beyond our control, including but not limited to natural disasters, government actions, pandemics, or technical failures of third-party services.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">8. Modifications</h2>
              <p className="text-gray-600">
                We reserve the right to modify this policy at any time. Changes will be posted on this page with an updated revision date. For ongoing projects, the policy in effect at project start applies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-[#2E5BFF]/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">9. Contact for Cancellations & Refunds</h2>
              <p className="text-gray-600 mb-4">
                For cancellation requests or refund inquiries:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> refunds@pytechdigital.com</p>
                <p><strong>Phone:</strong> +91 9205 222 170</p>
                <p><strong>Address:</strong> 2nd Floor, Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304</p>
                <p className="mt-4 text-sm italic">Include your project ID, invoice number, and detailed reason for refund request.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Refunds;