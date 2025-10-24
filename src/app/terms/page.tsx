import { LegalPageLayout } from '../../components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Velovate',
  description: 'Velovate Terms of Service - The terms and conditions for using our cycling platform.',
};

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'description', title: '2. Description of Service' },
  { id: 'account', title: '3. Account Registration and Security' },
  { id: 'user-content', title: '4. User Content and Conduct' },
  { id: 'subscriptions', title: '5. Subscriptions and Payment' },
  { id: 'intellectual-property', title: '6. Intellectual Property Rights' },
  { id: 'third-party', title: '7. Third-Party Services and Content' },
  { id: 'disclaimers', title: '8. Disclaimers and Limitations' },
  { id: 'indemnification', title: '9. Indemnification' },
  { id: 'termination', title: '10. Termination' },
  { id: 'dispute-resolution', title: '11. Dispute Resolution' },
  { id: 'general', title: '12. General Provisions' },
  { id: 'contact', title: '13. Contact Information' },
];

export default function TermsOfService() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="January 2025"
      sections={sections}
    >
      <section id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to Velovate! These Terms of Service ("Terms") constitute a legally binding agreement between you
          and Sassy Dog Enterprises LLC ("Velovate," "we," "us," or "our") governing your access to and use of the
          Velovate platform, including our website, mobile applications, and all related services (collectively, the "Services").
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
          If you do not agree to these Terms, you may not access or use our Services.
        </p>
        <div className="highlight-box">
          <p>
            <strong>Important:</strong> These Terms contain an arbitration clause and class action waiver that
            affect your legal rights. Please read Section 11 carefully.
          </p>
        </div>
      </section>

      <section id="description">
        <h2>2. Description of Service</h2>
        <p>
          Velovate is a cycling platform that enables users to:
        </p>
        <ul>
          <li>Create and join cycling teams</li>
          <li>Track rides and cycling activities</li>
          <li>Participate in team challenges and events</li>
          <li>Organize and contribute to fundraising campaigns</li>
          <li>Connect with other cyclists and share experiences</li>
        </ul>
        <p>
          We offer both free and premium subscription tiers. Premium features may include advanced analytics,
          enhanced team management tools, and priority support.
        </p>
      </section>

      <section id="account">
        <h2>3. Account Registration and Security</h2>

        <h3>3.1 Eligibility</h3>
        <p>
          You must be at least 13 years old to use our Services (or 16 years old if you reside in the European Economic Area).
          By using our Services, you represent and warrant that you meet this age requirement.
        </p>

        <h3>3.2 Account Creation</h3>
        <p>
          To access certain features, you must create an account. You agree to:
        </p>
        <ul>
          <li>Provide accurate, current, and complete information during registration</li>
          <li>Maintain and promptly update your account information</li>
          <li>Maintain the security of your password and account</li>
          <li>Accept all responsibility for activity that occurs under your account</li>
          <li>Notify us immediately of any unauthorized access or security breach</li>
        </ul>

        <h3>3.3 Account Responsibility</h3>
        <p>
          You are responsible for all activities that occur under your account. You may not:
        </p>
        <ul>
          <li>Share your account credentials with others</li>
          <li>Create multiple accounts to evade restrictions</li>
          <li>Impersonate any person or entity</li>
          <li>Use another user's account without permission</li>
        </ul>

        <h3>3.4 Account Termination</h3>
        <p>
          We reserve the right to suspend or terminate your account at any time if we believe you have violated
          these Terms or engaged in conduct harmful to other users or our Services.
        </p>
      </section>

      <section id="user-content">
        <h2>4. User Content and Conduct</h2>

        <h3>4.1 User Content</h3>
        <p>
          Our Services allow you to post, upload, and share content, including ride data, photos, comments, and
          messages ("User Content"). You retain ownership of your User Content, but you grant us a license as described below.
        </p>

        <h3>4.2 License to User Content</h3>
        <p>
          By posting User Content, you grant Velovate a worldwide, non-exclusive, royalty-free, sublicensable,
          and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform
          your User Content in connection with operating and providing the Services.
        </p>

        <h3>4.3 Content Standards</h3>
        <p>
          You agree that your User Content will not:
        </p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights of others</li>
          <li>Contain hateful, threatening, or discriminatory content</li>
          <li>Include spam, advertising, or promotional material</li>
          <li>Contain malware, viruses, or harmful code</li>
          <li>Include private information of others without consent</li>
          <li>Be misleading, fraudulent, or deceptive</li>
        </ul>

        <h3>4.4 Prohibited Conduct</h3>
        <p>
          You agree not to:
        </p>
        <ul>
          <li>Use the Services for any illegal purpose</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Manipulate or falsify ride data or achievements</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Scrape, data mine, or use automated tools without permission</li>
          <li>Interfere with or disrupt the Services</li>
          <li>Reverse engineer or decompile our software</li>
        </ul>

        <h3>4.5 Content Moderation</h3>
        <p>
          We reserve the right (but have no obligation) to monitor, review, and remove User Content that violates
          these Terms or is otherwise objectionable. We do not endorse any User Content and are not responsible
          for the accuracy or reliability of any User Content.
        </p>
      </section>

      <section id="subscriptions">
        <h2>5. Subscriptions and Payment</h2>

        <h3>5.1 Free and Premium Tiers</h3>
        <p>
          Velovate offers both free and premium subscription plans. Premium subscriptions provide access to
          enhanced features and functionality. Current pricing and features are available on our website.
        </p>

        <h3>5.2 Subscription Terms</h3>
        <p>
          Premium subscriptions are billed on a recurring basis (monthly or annually) until cancelled. By
          subscribing, you authorize us to charge your payment method automatically at the start of each billing period.
        </p>

        <h3>5.3 Payment Information</h3>
        <p>
          You agree to provide current, complete, and accurate billing information. You are responsible for all
          charges incurred under your account. We use third-party payment processors and do not store your
          full credit card information.
        </p>

        <h3>5.4 Price Changes</h3>
        <p>
          We reserve the right to change our subscription prices. We will notify you of any price changes at least
          30 days in advance. Continued use of the premium Services after a price change constitutes acceptance
          of the new price.
        </p>

        <h3>5.5 Cancellation</h3>
        <p>
          You may cancel your premium subscription at any time through your account settings. Cancellation will
          take effect at the end of your current billing period. See our Refund Policy for information about refunds.
        </p>

        <h3>5.6 Taxes</h3>
        <p>
          All fees are exclusive of applicable taxes, which will be added to your bill where required by law.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>6. Intellectual Property Rights</h2>

        <h3>6.1 Velovate Property</h3>
        <p>
          The Services, including all software, text, images, graphics, logos, and other content provided by
          Velovate (excluding User Content), are owned by Sassy Dog Enterprises LLC or its licensors and are
          protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h3>6.2 Limited License</h3>
        <p>
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to
          access and use the Services for your personal, non-commercial use.
        </p>

        <h3>6.3 Restrictions</h3>
        <p>
          You may not:
        </p>
        <ul>
          <li>Copy, modify, or create derivative works of our Services</li>
          <li>Sell, rent, lease, or sublicense our Services</li>
          <li>Reverse engineer, decompile, or disassemble our software</li>
          <li>Remove or modify any copyright, trademark, or proprietary notices</li>
          <li>Use our trademarks or branding without written permission</li>
        </ul>

        <h3>6.4 Feedback</h3>
        <p>
          If you provide us with feedback, suggestions, or ideas about our Services, you grant us the right to
          use such feedback without compensation or attribution.
        </p>
      </section>

      <section id="third-party">
        <h2>7. Third-Party Services and Content</h2>

        <h3>7.1 Third-Party Integrations</h3>
        <p>
          Our Services may integrate with third-party platforms (e.g., Strava, Garmin, payment processors).
          Your use of these third-party services is subject to their respective terms and privacy policies.
          We are not responsible for third-party services or content.
        </p>

        <h3>7.2 Links to External Sites</h3>
        <p>
          Our Services may contain links to third-party websites. We do not endorse or control these external
          sites and are not responsible for their content or practices.
        </p>
      </section>

      <section id="disclaimers">
        <h2>8. Disclaimers and Limitations</h2>

        <h3>8.1 "AS IS" and "AS AVAILABLE"</h3>
        <p>
          THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
          OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
          OR NON-INFRINGEMENT.
        </p>

        <h3>8.2 No Guarantee of Availability</h3>
        <p>
          We do not guarantee that the Services will be uninterrupted, secure, or error-free. We may suspend or
          discontinue any part of the Services at any time without notice.
        </p>

        <h3>8.3 Safety Disclaimer</h3>
        <div className="highlight-box">
          <p>
            <strong>Important Safety Notice:</strong> Cycling and outdoor activities involve inherent risks.
            You are solely responsible for your safety while participating in activities facilitated by our platform.
            Always follow traffic laws, wear appropriate safety equipment, and use good judgment. Velovate is not
            responsible for any injuries, accidents, or damages that may occur during your rides or activities.
          </p>
        </div>

        <h3>8.4 Limitation of Liability</h3>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, VELOVATE AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
          AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
          GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul>
          <li>Your use or inability to use the Services</li>
          <li>Any unauthorized access to or use of our servers or personal information</li>
          <li>Any interruption or cessation of the Services</li>
          <li>Any bugs, viruses, or harmful code transmitted through the Services</li>
          <li>Any errors or omissions in content or User Content</li>
          <li>Any conduct or content of third parties on the Services</li>
        </ul>
        <p>
          IN NO EVENT SHALL VELOVATE'S TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12)
          MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
        </p>

        <h3>8.5 Jurisdictional Limitations</h3>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability
          for incidental or consequential damages. In such jurisdictions, our liability will be limited to the
          maximum extent permitted by law.
        </p>
      </section>

      <section id="indemnification">
        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Velovate and its affiliates, officers, directors,
          employees, agents, and licensors from and against any claims, liabilities, damages, losses, and expenses,
          including reasonable attorneys' fees, arising out of or in any way connected with:
        </p>
        <ul>
          <li>Your use of or access to the Services</li>
          <li>Your User Content</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of another party</li>
          <li>Your violation of any applicable laws or regulations</li>
        </ul>
      </section>

      <section id="termination">
        <h2>10. Termination</h2>

        <h3>10.1 Termination by You</h3>
        <p>
          You may terminate your account at any time by deleting your account through your account settings
          or by contacting us at support@velovate.app.
        </p>

        <h3>10.2 Termination by Us</h3>
        <p>
          We may suspend or terminate your access to the Services at any time, with or without cause, with or
          without notice, effective immediately. Reasons for termination may include, but are not limited to:
        </p>
        <ul>
          <li>Violation of these Terms</li>
          <li>Fraudulent, abusive, or illegal activity</li>
          <li>Extended periods of inactivity</li>
          <li>Requests from law enforcement or government agencies</li>
        </ul>

        <h3>10.3 Effect of Termination</h3>
        <p>
          Upon termination, your right to use the Services will immediately cease. We may delete your account
          and User Content. Provisions of these Terms that by their nature should survive termination will
          survive, including ownership provisions, warranty disclaimers, and limitations of liability.
        </p>
      </section>

      <section id="dispute-resolution">
        <h2>11. Dispute Resolution</h2>

        <h3>11.1 Informal Resolution</h3>
        <p>
          If you have a dispute with Velovate, please first contact us at support@velovate.app and attempt to
          resolve the dispute informally. We will work with you in good faith to resolve the issue.
        </p>

        <h3>11.2 Binding Arbitration</h3>
        <p>
          If we cannot resolve a dispute informally, you and Velovate agree that any dispute, claim, or controversy
          arising out of or relating to these Terms or the Services will be settled by binding arbitration,
          rather than in court, except that you may assert claims in small claims court if your claims qualify.
        </p>
        <p>
          The arbitration will be conducted by the American Arbitration Association (AAA) under its Consumer
          Arbitration Rules. The arbitrator's decision will be final and binding, and judgment on the award
          may be entered in any court having jurisdiction.
        </p>

        <h3>11.3 Class Action Waiver</h3>
        <div className="highlight-box">
          <p>
            <strong>Important:</strong> YOU AND VELOVATE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
            ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED
            CLASS OR REPRESENTATIVE PROCEEDING.
          </p>
        </div>

        <h3>11.4 Exceptions</h3>
        <p>
          Either party may seek equitable relief in court for infringement or misuse of intellectual property rights.
        </p>

        <h3>11.5 Opt-Out</h3>
        <p>
          You have the right to opt out of binding arbitration within 30 days of first accepting these Terms
          by sending written notice to legal@velovate.app with "Arbitration Opt-Out" in the subject line.
        </p>

        <h3>11.6 Governing Law</h3>
        <p>
          These Terms are governed by the laws of the State of [State to be added], without regard to conflict
          of law principles.
        </p>
      </section>

      <section id="general">
        <h2>12. General Provisions</h2>

        <h3>12.1 Changes to Terms</h3>
        <p>
          We may modify these Terms at any time. We will notify you of material changes by posting the updated
          Terms on our website and updating the "Last Updated" date. Your continued use of the Services after
          changes become effective constitutes acceptance of the modified Terms.
        </p>

        <h3>12.2 Entire Agreement</h3>
        <p>
          These Terms, together with our Privacy Policy and any other legal notices published by us, constitute
          the entire agreement between you and Velovate regarding the Services.
        </p>

        <h3>12.3 Severability</h3>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions will remain
          in full force and effect.
        </p>

        <h3>12.4 Waiver</h3>
        <p>
          No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or
          any other term.
        </p>

        <h3>12.5 Assignment</h3>
        <p>
          You may not assign or transfer these Terms or your rights under these Terms without our prior written
          consent. We may assign these Terms without restriction.
        </p>

        <h3>12.6 Force Majeure</h3>
        <p>
          We will not be liable for any delay or failure to perform resulting from causes beyond our reasonable
          control, including but not limited to acts of God, natural disasters, war, terrorism, riots, pandemics,
          or failures of telecommunications or internet infrastructure.
        </p>

        <h3>12.7 Export Control</h3>
        <p>
          You agree to comply with all applicable export and import control laws and regulations in your use
          of the Services.
        </p>
      </section>

      <section id="contact">
        <h2>13. Contact Information</h2>
        <p>
          If you have questions about these Terms, please contact us:
        </p>
        <div className="highlight-box">
          <p>
            <strong>Sassy Dog Enterprises LLC</strong><br />
            Email: legal@velovate.app<br />
            General Support: support@velovate.app<br />
            Address: [To be added - company address]
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
