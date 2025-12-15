import React from 'react';
import SEO from '../components/SEO';
import { Shield, Lock, Eye, UserCheck, Database, Bell } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Privacy Policy - PyTech Digital Pvt. Ltd."
        description="Read PyTech Digital's privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, GDPR, information security, PyTech Digital"
        url="/privacy"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto mb-6" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
                <Lock className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">1. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Name, email address, phone number, and company information</li>
                    <li>Project requirements and business details</li>
                    <li>Communication preferences and feedback</li>
                    <li>Payment and billing information (processed securely through third-party providers)</li>
                    <li>Technical information such as IP address, browser type, and device information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Eye className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, prevent, and address technical issues and security threats</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Database className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">3. Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>With your consent or at your direction</li>
                    <li>With service providers who assist in our operations</li>
                    <li>To comply with legal obligations or respond to lawful requests</li>
                    <li>To protect the rights, property, and safety of PyTech Digital, our users, or others</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Shield className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection practices</li>
                    <li>Secure backup and disaster recovery procedures</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <UserCheck className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">5. Your Rights and Choices</h2>
                  <p className="text-gray-600 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    To exercise these rights, please contact us at privacy@pytechdigital.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Bell className="text-[#2E5BFF] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2463] mb-4">6. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">7. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-[#2E5BFF]/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A2463] mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@pytechdigital.com</p>
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

export default Privacy;