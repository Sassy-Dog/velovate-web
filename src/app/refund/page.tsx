import { LegalPageLayout } from '../../components/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - Velovate',
  description: 'Velovate Refund Policy - Learn about our refund and cancellation policies for premium subscriptions.',
};

const sections = [
  { id: 'overview', title: '1. Overview' },
  { id: 'subscription-refunds', title: '2. Premium Subscription Refunds' },
  { id: 'cancellation', title: '3. Subscription Cancellation' },
  { id: 'non-refundable', title: '4. Non-Refundable Items' },
  { id: 'processing', title: '5. Refund Processing' },
  { id: 'disputes', title: '6. Billing Disputes' },
  { id: 'modifications', title: '7. Policy Modifications' },
  { id: 'contact', title: '8. Contact Information' },
];

export default function RefundPolicy() {
  return (
    <LegalPageLayout
      title="Refund Policy"
      lastUpdated="January 2025"
      sections={sections}
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          This Refund Policy explains our policies regarding refunds, cancellations, and billing for Velovate's
          premium subscription services. This policy is part of our Terms of Service and should be read in
          conjunction with those terms.
        </p>
        <p>
          Velovate operates on a freemium model: our basic services are free, and we offer premium subscriptions
          with enhanced features. This policy applies specifically to premium subscription purchases.
        </p>
        <div className="highlight-box">
          <p>
            <strong>Quick Summary:</strong> You can cancel your premium subscription at any time. Refunds are
            available within 7 days of purchase for new subscriptions. No refunds are provided for partial
            billing periods after the 7-day window.
          </p>
        </div>
      </section>

      <section id="subscription-refunds">
        <h2>2. Premium Subscription Refunds</h2>

        <h3>2.1 7-Day Satisfaction Guarantee</h3>
        <p>
          We offer a 7-day satisfaction guarantee for new premium subscriptions. If you're not satisfied with
          your premium subscription, you may request a full refund within 7 days of your initial purchase.
        </p>
        <p>
          <strong>Eligibility criteria:</strong>
        </p>
        <ul>
          <li>Request must be made within 7 calendar days of your initial subscription purchase</li>
          <li>Applies only to first-time premium subscribers</li>
          <li>Account must not have violated our Terms of Service</li>
          <li>Excessive refund requests may result in refund denial</li>
        </ul>

        <h3>2.2 Renewal Refunds</h3>
        <p>
          Subscription renewals (monthly or annual) are <strong>non-refundable</strong> after the 7-day window
          from the renewal date. We strongly recommend disabling auto-renewal if you do not wish to continue
          your subscription.
        </p>
        <p>
          <strong>Exception:</strong> If you were charged in error due to a billing system malfunction, we will
          provide a full refund. Please contact us immediately if you believe you were charged incorrectly.
        </p>

        <h3>2.3 Partial Refunds</h3>
        <p>
          We do not provide partial or pro-rated refunds for unused portions of a subscription period. If you
          cancel mid-cycle, you will continue to have access to premium features until the end of your current
          billing period.
        </p>

        <h3>2.4 Upgrade/Downgrade Refunds</h3>
        <p>
          If you upgrade from a monthly to an annual subscription (or vice versa), the change will take effect
          at the end of your current billing period. No refunds are provided for the difference in pricing when
          changing subscription tiers.
        </p>
      </section>

      <section id="cancellation">
        <h2>3. Subscription Cancellation</h2>

        <h3>3.1 How to Cancel</h3>
        <p>
          You can cancel your premium subscription at any time through:
        </p>
        <ul>
          <li><strong>Account Settings:</strong> Navigate to Settings &gt; Subscription &gt; Cancel Subscription</li>
          <li><strong>Email Request:</strong> Send a cancellation request to support@velovate.app</li>
          <li><strong>Payment Provider:</strong> Cancel through your Apple App Store or Google Play Store account settings</li>
        </ul>

        <h3>3.2 Cancellation Effective Date</h3>
        <p>
          When you cancel your subscription:
        </p>
        <ul>
          <li>Your cancellation takes effect at the end of your current billing period</li>
          <li>You will continue to have access to premium features until that date</li>
          <li>You will not be charged for subsequent billing periods</li>
          <li>Your account will automatically revert to the free tier after the paid period ends</li>
        </ul>

        <h3>3.3 Reactivation</h3>
        <p>
          You may reactivate your premium subscription at any time. If you reactivate within 30 days of
          cancellation, your previous settings and preferences will be restored. After 30 days, you will be
          treated as a new subscriber.
        </p>

        <h3>3.4 Data After Cancellation</h3>
        <p>
          When you downgrade to the free tier:
        </p>
        <ul>
          <li>Your ride data and account information are retained</li>
          <li>Access to premium-only features is removed</li>
          <li>Some advanced analytics may become unavailable but historical data is preserved</li>
          <li>You can request complete account deletion separately if desired</li>
        </ul>
      </section>

      <section id="non-refundable">
        <h2>4. Non-Refundable Items</h2>
        <p>
          The following are <strong>not eligible for refunds</strong> under any circumstances:
        </p>

        <h3>4.1 Free Services</h3>
        <p>
          Our free tier services are provided at no cost and are not subject to refunds.
        </p>

        <h3>4.2 Third-Party Purchases</h3>
        <p>
          Purchases or donations made to third parties through our platform (such as fundraising contributions
          to charities) are governed by those third parties' refund policies, not ours. Contact the respective
          organization directly for refund requests.
        </p>

        <h3>4.3 Past Billing Periods</h3>
        <p>
          Refunds are not available for charges from previous billing periods beyond the current period,
          except in cases of clear billing errors.
        </p>

        <h3>4.4 Accounts Terminated for Violations</h3>
        <p>
          If your account is terminated for violating our Terms of Service, you forfeit any refund eligibility.
          This includes but is not limited to fraudulent activity, abusive behavior, or illegal use of the platform.
        </p>

        <h3>4.5 Digital Content and Services</h3>
        <p>
          Once you have accessed or used premium features during your subscription period, the subscription is
          considered "consumed" and is non-refundable beyond the 7-day satisfaction guarantee period.
        </p>
      </section>

      <section id="processing">
        <h2>5. Refund Processing</h2>

        <h3>5.1 How to Request a Refund</h3>
        <p>
          To request a refund, please contact us at:
        </p>
        <div className="highlight-box">
          <p>
            <strong>Email:</strong> support@velovate.app<br />
            <strong>Subject:</strong> Refund Request<br />
            <strong>Include:</strong> Account email, subscription details, reason for refund
          </p>
        </div>

        <h3>5.2 Processing Time</h3>
        <p>
          Approved refund requests are processed as follows:
        </p>
        <ul>
          <li><strong>Review Period:</strong> We will review your request within 2-3 business days</li>
          <li><strong>Approval Notification:</strong> You will receive an email confirming approval or denial</li>
          <li><strong>Refund Issuance:</strong> Approved refunds are issued within 5-7 business days</li>
          <li><strong>Credit Appearance:</strong> Depending on your payment method, it may take an additional 3-10 business days for the refund to appear in your account</li>
        </ul>

        <h3>5.3 Refund Method</h3>
        <p>
          Refunds are issued to the original payment method used for the purchase:
        </p>
        <ul>
          <li>Credit card refunds appear as a credit on your statement</li>
          <li>PayPal refunds are returned to your PayPal balance</li>
          <li>App Store purchases are refunded through Apple (contact Apple Support)</li>
          <li>Google Play purchases are refunded through Google (contact Google Play Support)</li>
        </ul>

        <h3>5.4 Currency and Exchange Rates</h3>
        <p>
          Refunds are processed in the original currency of purchase. Any currency conversion fees or exchange
          rate differences between the purchase and refund date are the responsibility of the subscriber.
        </p>
      </section>

      <section id="disputes">
        <h2>6. Billing Disputes</h2>

        <h3>6.1 Unauthorized Charges</h3>
        <p>
          If you believe you were charged without authorization or that charges are incorrect:
        </p>
        <ul>
          <li>Contact us immediately at support@velovate.app</li>
          <li>Provide details of the disputed charge (date, amount, description)</li>
          <li>We will investigate and respond within 5 business days</li>
          <li>Confirmed unauthorized charges will be refunded in full</li>
        </ul>

        <h3>6.2 Duplicate Charges</h3>
        <p>
          If you were charged multiple times for the same subscription period, please contact us immediately.
          We will investigate and refund duplicate charges promptly.
        </p>

        <h3>6.3 Chargebacks</h3>
        <div className="highlight-box">
          <p>
            <strong>Important:</strong> Filing a chargeback with your credit card company before contacting us
            may result in immediate suspension of your account and loss of all premium features. Please contact
            us first to resolve billing disputes directly.
          </p>
        </div>
        <p>
          If a chargeback is filed:
        </p>
        <ul>
          <li>Your account will be suspended pending resolution</li>
          <li>You will lose access to all premium features</li>
          <li>We reserve the right to permanently ban accounts that abuse the chargeback process</li>
          <li>Fraudulent chargebacks may be reported to credit bureaus and law enforcement</li>
        </ul>
      </section>

      <section id="modifications">
        <h2>7. Policy Modifications</h2>
        <p>
          We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately
          upon posting to our website. We will notify users of material changes via:
        </p>
        <ul>
          <li>Email notification to registered users</li>
          <li>In-app notification</li>
          <li>Notice on our website</li>
        </ul>
        <p>
          Your continued use of our premium services after changes to this policy constitutes acceptance of
          the modified policy. Refund requests for purchases made before a policy change will be evaluated
          under the policy in effect at the time of purchase.
        </p>
      </section>

      <section id="contact">
        <h2>8. Contact Information</h2>
        <p>
          If you have questions about this Refund Policy or need assistance with billing, refunds, or cancellations,
          please contact us:
        </p>
        <div className="highlight-box">
          <p>
            <strong>Sassy Dog Enterprises LLC</strong><br />
            Email: support@velovate.app<br />
            Billing Inquiries: billing@velovate.app<br />
            Phone: [To be added]<br />
            Address: [To be added - company address]
          </p>
          <p className="mt-4">
            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM [Timezone to be added]<br />
            <strong>Response Time:</strong> We aim to respond to all inquiries within 24-48 hours
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
