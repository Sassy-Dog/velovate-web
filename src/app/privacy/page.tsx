import { LegalPageLayout } from '../../components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Velovate',
  description: 'Velovate Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use-information', title: '3. How We Use Your Information' },
  { id: 'information-sharing', title: '4. Information Sharing and Disclosure' },
  { id: 'data-retention', title: '5. Data Retention' },
  { id: 'your-rights', title: '6. Your Rights and Choices' },
  { id: 'gdpr-rights', title: '7. GDPR Rights (European Users)' },
  { id: 'california-rights', title: '8. California Privacy Rights' },
  { id: 'cookies', title: '9. Cookies and Tracking Technologies' },
  { id: 'data-security', title: '10. Data Security' },
  { id: 'children-privacy', title: '11. Children\'s Privacy' },
  { id: 'international-transfers', title: '12. International Data Transfers' },
  { id: 'changes', title: '13. Changes to This Policy' },
  { id: 'contact', title: '14. Contact Us' },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 2025"
      sections={sections}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Velovate, a cycling platform operated by Sassy Dog Enterprises LLC ("we," "us," or "our").
          We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you use our platform, including our
          website, mobile applications, and related services (collectively, the "Services").
        </p>
        <p>
          Please read this Privacy Policy carefully. By using our Services, you agree to the collection and use
          of information in accordance with this policy. If you do not agree with our policies and practices,
          please do not use our Services.
        </p>
        <div className="highlight-box">
          <p>
            <strong>Data Controller:</strong> Sassy Dog Enterprises LLC<br />
            <strong>Contact:</strong> privacy@velovate.app
          </p>
        </div>
      </section>

      <section id="information-we-collect">
        <h2>2. Information We Collect</h2>

        <h3>2.1 Information You Provide Directly</h3>
        <ul>
          <li><strong>Account Information:</strong> Name, email address, password, profile photo, and biographical information</li>
          <li><strong>Team Information:</strong> Team names, descriptions, member roles, and organizational details</li>
          <li><strong>Activity Data:</strong> Ride details, GPS tracks, distance, duration, elevation, and performance metrics</li>
          <li><strong>Fundraising Data:</strong> Campaign details, donation information (processed by third-party payment processors)</li>
          <li><strong>Communications:</strong> Messages sent through our platform, support requests, and feedback</li>
          <li><strong>Payment Information:</strong> Billing details for premium subscriptions (processed securely by third-party payment processors)</li>
        </ul>

        <h3>2.2 Information Collected Automatically</h3>
        <ul>
          <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform, click patterns</li>
          <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address, unique device identifiers</li>
          <li><strong>Location Data:</strong> GPS coordinates during ride tracking (only when you explicitly enable location services)</li>
          <li><strong>Cookies and Similar Technologies:</strong> See Section 9 for details</li>
        </ul>

        <h3>2.3 Information from Third Parties</h3>
        <ul>
          <li><strong>Authentication Services:</strong> When you sign in using third-party services (e.g., Google, Apple), we receive basic profile information</li>
          <li><strong>Fitness Platforms:</strong> Activity data from connected services like Strava or Garmin (with your permission)</li>
          <li><strong>Social Media:</strong> Public profile information if you connect your social media accounts</li>
        </ul>
      </section>

      <section id="how-we-use-information">
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>

        <h3>3.1 Service Provision</h3>
        <ul>
          <li>Create and manage your account</li>
          <li>Provide and maintain our Services</li>
          <li>Process your ride tracking and activity data</li>
          <li>Enable team collaboration and communication</li>
          <li>Facilitate fundraising campaigns and events</li>
        </ul>

        <h3>3.2 Communication</h3>
        <ul>
          <li>Send you service-related notifications and updates</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Send newsletters and marketing communications (with your consent)</li>
          <li>Notify you about team activities, rides, and fundraising updates</li>
        </ul>

        <h3>3.3 Improvement and Analytics</h3>
        <ul>
          <li>Analyze usage patterns to improve our Services</li>
          <li>Conduct research and development</li>
          <li>Debug and fix technical issues</li>
          <li>Personalize your experience</li>
        </ul>

        <h3>3.4 Safety and Security</h3>
        <ul>
          <li>Detect and prevent fraud, spam, and abuse</li>
          <li>Enforce our Terms of Service</li>
          <li>Protect the rights and safety of our users</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h3>3.5 Legal Basis for Processing (GDPR)</h3>
        <p>For users in the European Economic Area (EEA), we process your data based on:</p>
        <ul>
          <li><strong>Contract:</strong> Processing necessary to provide our Services</li>
          <li><strong>Consent:</strong> You have given clear consent for specific purposes</li>
          <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
          <li><strong>Legal Obligation:</strong> Processing required by law</li>
        </ul>
      </section>

      <section id="information-sharing">
        <h2>4. Information Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share your information in the following circumstances:</p>

        <h3>4.1 With Your Consent</h3>
        <p>We share information when you explicitly consent, such as when you share a ride with your team or make your profile public.</p>

        <h3>4.2 Service Providers</h3>
        <p>We share information with third-party vendors who perform services on our behalf:</p>
        <ul>
          <li>Cloud hosting providers (e.g., Microsoft Azure, Cloudflare)</li>
          <li>Payment processors for premium subscriptions</li>
          <li>Analytics services</li>
          <li>Email and communication services</li>
          <li>Customer support tools</li>
        </ul>

        <h3>4.3 Team Members</h3>
        <p>When you join a team, certain information (name, profile photo, ride data) may be visible to other team members based on team privacy settings.</p>

        <h3>4.4 Legal Requirements</h3>
        <p>We may disclose information if required by law or if we believe it is necessary to:</p>
        <ul>
          <li>Comply with legal obligations, court orders, or government requests</li>
          <li>Enforce our Terms of Service or other agreements</li>
          <li>Protect the rights, property, or safety of Velovate, our users, or others</li>
          <li>Detect, prevent, or address fraud or security issues</li>
        </ul>

        <h3>4.5 Business Transfers</h3>
        <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
      </section>

      <section id="data-retention">
        <h2>5. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to provide our Services and fulfill the purposes
          outlined in this Privacy Policy. Specific retention periods include:
        </p>
        <ul>
          <li><strong>Account Data:</strong> Retained while your account is active and for up to 90 days after deletion</li>
          <li><strong>Activity Data:</strong> Retained indefinitely unless you request deletion</li>
          <li><strong>Usage Logs:</strong> Retained for up to 24 months</li>
          <li><strong>Payment Records:</strong> Retained for 7 years for tax and accounting purposes</li>
        </ul>
        <p>
          You may request deletion of your data at any time. Some information may be retained in backup systems
          for up to 90 days after deletion requests.
        </p>
      </section>

      <section id="your-rights">
        <h2>6. Your Rights and Choices</h2>
        <p>You have the following rights regarding your personal information:</p>

        <h3>6.1 Access and Portability</h3>
        <p>You can access and download your personal data through your account settings or by contacting us.</p>

        <h3>6.2 Correction</h3>
        <p>You can update or correct your account information at any time through your profile settings.</p>

        <h3>6.3 Deletion</h3>
        <p>You can request deletion of your account and associated data. Note that some information may be retained as described in Section 5.</p>

        <h3>6.4 Marketing Opt-Out</h3>
        <p>You can unsubscribe from marketing emails using the unsubscribe link in our emails or through your account preferences.</p>

        <h3>6.5 Location Services</h3>
        <p>You can disable location tracking at any time through your device settings or app preferences.</p>

        <h3>6.6 Cookie Management</h3>
        <p>You can manage cookie preferences through your browser settings. See Section 9 for more details.</p>
      </section>

      <section id="gdpr-rights">
        <h2>7. GDPR Rights (European Users)</h2>
        <p>
          If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional
          rights under the General Data Protection Regulation (GDPR):
        </p>

        <h3>7.1 Right to Access</h3>
        <p>You have the right to request confirmation of whether we process your personal data and to access that data.</p>

        <h3>7.2 Right to Rectification</h3>
        <p>You have the right to request correction of inaccurate or incomplete personal data.</p>

        <h3>7.3 Right to Erasure ("Right to be Forgotten")</h3>
        <p>You have the right to request deletion of your personal data in certain circumstances.</p>

        <h3>7.4 Right to Restriction of Processing</h3>
        <p>You have the right to request that we restrict processing of your personal data in certain situations.</p>

        <h3>7.5 Right to Data Portability</h3>
        <p>You have the right to receive your personal data in a structured, commonly used, machine-readable format.</p>

        <h3>7.6 Right to Object</h3>
        <p>You have the right to object to processing of your personal data based on legitimate interests or for direct marketing.</p>

        <h3>7.7 Right to Withdraw Consent</h3>
        <p>Where we process your data based on consent, you have the right to withdraw that consent at any time.</p>

        <h3>7.8 Right to Lodge a Complaint</h3>
        <p>You have the right to lodge a complaint with your local data protection authority.</p>

        <div className="highlight-box">
          <p>
            <strong>To exercise your GDPR rights:</strong><br />
            Email us at privacy@velovate.app with "GDPR Request" in the subject line.
            We will respond within 30 days.
          </p>
        </div>
      </section>

      <section id="california-rights">
        <h2>8. California Privacy Rights</h2>
        <p>
          If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
        </p>

        <h3>8.1 Right to Know</h3>
        <p>You have the right to request information about the personal data we have collected about you in the past 12 months.</p>

        <h3>8.2 Right to Delete</h3>
        <p>You have the right to request deletion of your personal data, subject to certain exceptions.</p>

        <h3>8.3 Right to Opt-Out</h3>
        <p>
          We do not sell personal information. If our practices change, we will update this policy and provide
          an opt-out mechanism.
        </p>

        <h3>8.4 Right to Non-Discrimination</h3>
        <p>We will not discriminate against you for exercising your CCPA rights.</p>

        <h3>8.5 Authorized Agent</h3>
        <p>You may designate an authorized agent to make requests on your behalf.</p>

        <div className="highlight-box">
          <p>
            <strong>To exercise your California privacy rights:</strong><br />
            Email us at privacy@velovate.app or call our toll-free number (to be added).
            We will verify your identity and respond within 45 days.
          </p>
        </div>
      </section>

      <section id="cookies">
        <h2>9. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to enhance your experience:</p>

        <h3>9.1 Essential Cookies</h3>
        <p>Required for the Services to function properly (e.g., authentication, security).</p>

        <h3>9.2 Analytics Cookies</h3>
        <p>Help us understand how users interact with our Services (e.g., Google Analytics).</p>

        <h3>9.3 Preference Cookies</h3>
        <p>Remember your settings and preferences.</p>

        <h3>9.4 Marketing Cookies</h3>
        <p>Used to deliver relevant advertisements (only with your consent).</p>

        <h3>9.5 Managing Cookies</h3>
        <p>
          You can control cookies through your browser settings. Note that disabling certain cookies may
          limit your ability to use some features of our Services.
        </p>
      </section>

      <section id="data-security">
        <h2>10. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against
          unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and penetration testing</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Employee training on data protection</li>
          <li>Incident response procedures</li>
        </ul>
        <p>
          However, no method of transmission over the Internet or electronic storage is 100% secure.
          While we strive to protect your personal data, we cannot guarantee absolute security.
        </p>
      </section>

      <section id="children-privacy">
        <h2>11. Children's Privacy</h2>
        <p>
          Our Services are not intended for children under the age of 13 (or 16 in the EEA). We do not knowingly
          collect personal information from children under these ages. If you are a parent or guardian and believe
          your child has provided us with personal information, please contact us at privacy@velovate.app, and we
          will delete such information.
        </p>
      </section>

      <section id="international-transfers">
        <h2>12. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country of residence.
          These countries may have data protection laws that are different from your country's laws.
        </p>
        <p>
          When we transfer personal data from the EEA to other countries, we ensure appropriate safeguards are in place,
          such as:
        </p>
        <ul>
          <li>Standard Contractual Clauses approved by the European Commission</li>
          <li>Adequacy decisions by the European Commission</li>
          <li>Privacy Shield certification (where applicable)</li>
        </ul>
      </section>

      <section id="changes">
        <h2>13. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
          When we make material changes, we will notify you by:
        </p>
        <ul>
          <li>Posting the updated policy on our website</li>
          <li>Updating the "Last Updated" date at the top of this policy</li>
          <li>Sending you an email notification (for significant changes)</li>
        </ul>
        <p>
          Your continued use of our Services after the effective date of the updated policy constitutes acceptance
          of the changes.
        </p>
      </section>

      <section id="contact">
        <h2>14. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or our data practices,
          please contact us:
        </p>
        <div className="highlight-box">
          <p>
            <strong>Sassy Dog Enterprises LLC</strong><br />
            Email: privacy@velovate.app<br />
            General Support: support@velovate.app<br />
            Address: [To be added - company address]
          </p>
          <p className="mt-4">
            <strong>Data Protection Officer:</strong> dpo@velovate.app (for GDPR-related inquiries)
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
