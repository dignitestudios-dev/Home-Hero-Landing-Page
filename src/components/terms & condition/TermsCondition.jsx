import React from "react";
import { styles } from "../../styles/styles";

const TermsCondition = () => {
  return (
    <div>
      <div
        className={`w-full flex flex-col py-6 lg:pt-12 gap-3 ${styles.paddingHorizontal}`}
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-start">
          Terms and Conditions{" "}
        </h1>
        <p className="text-xl font-semibold pt-10">
          Effective Date: <span className="font-normal">October 5, 2024</span>
        </p>
        <p className="text-xl font-semibold">
          Last Updated: <span className="font-normal">October 5, 2024</span>
        </p>
        <p>
          These Terms and Conditions ("Terms") govern your use of the HomeHero
          website [Insert URL] and the HomeHero mobile app (collectively
          referred to as the "Platform"). By accessing or using the Platform,
          you agree to be bound by these Terms. If you do not agree to these
          Terms, you may not use the Platform.
        </p>
        <h3 className="text-2xl font-bold">1. Acceptance of Terms</h3>
        <p>
          By accessing or using the Platform, you acknowledge that you have
          read, understood, and agree to be bound by these Terms, along with our
          Privacy Policy, which is incorporated herein by reference. Your
          continued use of the Platform signifies your acceptance of any changes
          to these Terms.
        </p>
        <h3 className="text-2xl font-bold">2. Modifications to the Terms</h3>
        <p>
          HomeHero reserves the right to modify these Terms at any time without
          prior notice. Any changes will be effective immediately upon posting
          on the Platform. It is your responsibility to review these Terms
          periodically. Your continued use of the Platform after modifications
          have been made constitutes your acceptance of the revised Terms.
        </p>
        <h3 className="text-2xl font-bold">3. Eligibility</h3>
        <p>
          By using the Platform, you represent and warrant that you are at least
          18 years old or the age of majority in your jurisdiction, and that you
          have the legal capacity to enter into this agreement. If you are using
          the Platform on behalf of a company or organization, you represent
          that you have the authority to bind that entity to these Terms.
        </p>
        <h3 className="text-2xl font-bold">4. Account Registration</h3>
        <p>
          To access certain features of the Platform, you may be required to
          register for an account. You agree to provide accurate, current, and
          complete information during the registration process and to update
          such information as necessary to keep it accurate and current.
        </p>
        <br />
        <p>
          You are responsible for safeguarding your account credentials and for
          any activity conducted under your account. You agree to notify
          HomeHero immediately of any unauthorized access or use of your
          account.
        </p>
        <h3 className="text-2xl font-bold">5. User Responsibilities</h3>
        <p>
          You agree to use the Platform in compliance with all applicable laws
          and regulations. You may not use the Platform:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li>To engage in fraudulent activities.</li>
          <li>
            {" "}
            To upload or distribute harmful software (e.g., viruses, malware).
          </li>
          <li>To infringe upon any third-party intellectual property rights</li>
          <li>
            For any purpose that violates the terms outlined in this document
          </li>
        </ul>
        <h3 className="text-2xl font-bold">6. Payment Terms</h3>
        <p>
          If applicable, users may be required to make payments for the rental
          services facilitated by the Platform. Payments must be made using one
          of the approved payment methods. By submitting payment information,
          you authorize HomeHero to charge the applicable fees to the selected
          payment method. All fees are non-refundable unless otherwise
          specified.
        </p>
        <h3 className="text-2xl font-bold">7. Intellectual Property</h3>
        <p>
          All content on the Platform, including but not limited to text,
          images, logos, trademarks, and software, is the property of HomeHero
          or its licensors and is protected by intellectual property laws. You
          may not copy, distribute, modify, or create derivative works from any
          content on the Platform without prior written consent from HomeHero.
        </p>
        <h3 className="text-2xl font-bold">8. User-Generated Content</h3>
        <p>
          If you post or upload any content to the Platform (including reviews,
          comments, or images), you grant HomeHero a worldwide, non-exclusive,
          royalty-free license to use, display, reproduce, modify, and
          distribute your content in connection with the operation of the
          Platform. You represent that you own or have the necessary rights to
          any content you post.
        </p>
        <br />

        <p>
          {" "}
          HomeHero reserves the right to remove or modify any user-generated
          content that violates these Terms or is otherwise objectionable.
        </p>

        <h3 className="text-2xl font-bold">9. Prohibited Conduct</h3>
        <p>You agree not to:</p>
        <ul className="list-disc px-10 space-y-4">
          <li>Use the Platform for any illegal or unauthorized purpose.</li>
          <li>
            {" "}
            Access or attempt to access non-public areas of the Platform or the
            underlying systems.
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Platform.
          </li>
          <li>Interfere with or disrupt the operation of the Platform.</li>
        </ul>
        <h3 className="text-2xl font-bold">10. Termination</h3>
        <p>
          HomeHero reserves the right to terminate or suspend your account at
          any time, without notice, if you violate these Terms or engage in
          prohibited conduct. Upon termination, you will no longer have access
          to the Platform, and any pending or incomplete transactions may be
          canceled at HomeHero' discretion.
        </p>
        <h3 className="text-2xl font-bold">11. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, HomeHero and its affiliates,
          directors, employees, and agents will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss
          of profits or revenues, whether incurred directly or indirectly, or
          any loss of data, use, goodwill, or other intangible losses, resulting
          from:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li>Your use or inability to use the Platform.</li>
          <li>
            {" "}
            Unauthorized access to or alteration of your content or personal
            data.
          </li>
          <li>Any other matter relating to the Platform.</li>
        </ul>

        <h3 className="text-2xl font-bold">12. Disclaimer of Warranties</h3>
        <p>
          The Platform is provided "as is" and "as available" without any
          warranties of any kind, either express or implied. HomeHero does not
          warrant that the Platform will be uninterrupted, error-free, or
          secure, or that any defects will be corrected. Use of the Platform is
          at your own risk.
        </p>
        <h3 className="text-2xl font-bold">13. Governing Law</h3>
        <p>
          These Terms will be governed by and construed in accordance with the
          laws of New York State, without regard to its conflict of law
          principles. You agree to submit to the exclusive jurisdiction of the
          courts in Erie County to resolve any disputes arising from or related
          to these Terms or your use of the Platform.
        </p>
        <h3 className="text-2xl font-bold">14. Dispute Resolution</h3>
        <p>
          Any disputes arising out of or related to these Terms or the Platform
          will be resolved through binding arbitration in New York State (Erie
          County) in accordance with the rules of the American Arbitration
          Association (AAA). You agree that any claims will be brought in your
          individual capacity and not as part of any class action or
          representative proceeding.
        </p>
        <h3 className="text-2xl font-bold">15. Indemnification</h3>
        <p>
          You agree to indemnify, defend, and hold harmless HomeHero and its
          affiliates, officers, directors, employees, and agents from any
          claims, damages, losses, liabilities, and expenses (including
          reasonable attorney’s fees) arising out of or related to your use of
          the Platform or any violation of these Terms.
        </p>
        <h3 className="text-2xl font-bold">16. Severability</h3>
        <p>
          If any provision of these Terms is found to be invalid or
          unenforceable, the remaining provisions will continue to be valid and
          enforceable to the fullest extent permitted by law.
        </p>
        <h3 className="text-2xl font-bold">17. Entire Agreement</h3>
        <p>
          These Terms, along with the Privacy Policy and any other policies
          referenced herein, constitute the entire agreement between you and
          HomeHero regarding the use of the Platform.
        </p>
        <h3 className="text-2xl font-bold">18. Contact Information</h3>
        <p>
          For any questions about these Terms or the Platform, you can contact
          us in writing at:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li>Email: Info@HomeHero.com</li>
          <li>
            Address: HomeHero LLC 382 NE 191ST ST NUM857346, Miami, FL 33179
          </li>
        </ul>
        <br />
        <p>
          By using HomeHero, you acknowledge that you have read, understood, and
          agree to be bound by these Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
