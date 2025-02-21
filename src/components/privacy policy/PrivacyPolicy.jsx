import React from "react";
import { styles } from "../../styles/styles";

const PrivacyPolicy = () => {
  return (
    <div>
      <div
        className={`w-full flex flex-col py-6 lg:pt-12 gap-3 ${styles.paddingHorizontal}`}
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-start">
          Privacy Policy{" "}
        </h1>
        <p className="text-xl font-semibold pt-10">
          Effective Date: <span className="font-normal">October 5, 2024</span>
        </p>
        <p className="text-xl font-semibold">
          Last Updated: <span className="font-normal">October 5, 2024</span>
        </p>
        <p>
          At HomeHero, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your data when you use the
          HomeHero website and mobile app (collectively, the "Platform"). This
          policy is in compliance with applicable data protection laws in New
          York State, specifically Erie County.
        </p>
        <p>
          By accessing or using the Platform, you agree to the collection and
          use of your personal information as described in this Privacy Policy.
          If you do not agree with the terms, please discontinue use of the
          Platform.
        </p>
        <h3 className="text-2xl font-bold">1. Information We Collect</h3>
        <p>
          We collect information that identifies, relates to, describes, or is
          capable of being associated with you ("Personal Information"). This
          includes:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li>
            <p className="font-bold">
              Personal Identifiers:{" "}
              <span className="font-normal">
                Name, email address, postal address, phone number, date of
                birth.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              Account Information:{" "}
              <span className="font-normal">
                Username, password, profile picture, rental preferences.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Transaction Information:{" "}
              <span className="font-normal">
                Payment details, billing address, rental history.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              Device Information:{" "}
              <span className="font-normal">
                : IP address, browser type, device type, operating system, and
                other technical details.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              Geolocation Data:{" "}
              <span className="font-normal">
                When using location-based services.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              Cookies and Tracking Data:{" "}
              <span className="font-normal">
                As explained in our Cookie Policy below.
              </span>
            </p>
          </li>
        </ul>

        <h3 className="text-2xl font-bold">2. How We Use Your Information</h3>
        <p>We use the collected information for the following purposes:</p>
        <ul className="list-disc px-10 space-y-4">
          <li>
            <p className="font-bold">
              {" "}
              To provide and maintain the Platform:
              <span className="font-normal">
                Personal Information helps us operate the Platform efficiently.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              To communicate with you:
              <span className="font-normal">
                We may send updates, notifications, and information regarding
                your account or services.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              For marketing purposes:
              <span className="font-normal">
                If you have opted in, we may send promotional materials or
                advertisements.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              To comply with legal obligations:
              <span className="font-normal">
                We may use your data as required by law, or to protect our legal
                interests.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              To improve our services:
              <span className="font-normal">
                Data analysis helps us enhance the Platform’s performance and
                user experience.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              To process transactions:
              <span className="font-normal">
                Including the rental of goods or services and related customer
                support.
              </span>
            </p>
          </li>
        </ul>

        <h3 className="text-2xl font-bold">3. How We Share Your Information</h3>
        <p>
          We may share your Personal Information with third parties under the
          following circumstances:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li>
            <p className="font-bold">
              Service Providers:
              <span className="font-normal">
                {" "}
                Third parties we engage to perform functions on our behalf, such
                as payment processing, hosting, and customer service.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              Business Transfers:
              <span className="font-normal">
                If HomeHero is involved in a merger, acquisition, or asset sale,
                your information may be transferred as part of that transaction.
                .
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Legal Obligations:
              <span className="font-normal">
                We may disclose information as required by law, including to
                comply with subpoenas, court orders, or other legal processes.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Protection of Rights:
              <span className="font-normal">
                {" "}
                We may share information to protect our rights, property, or
                safety, or the rights, property, or safety of others.
              </span>
            </p>
          </li>
        </ul>

        <h3 className="text-2xl font-bold">4. Your Data Protection Rights</h3>
        <p>
          You have certain rights regarding your Personal Information,
          including:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li>
            <p className="font-bold">
              {" "}
              Access and Correction:
              <span className="font-normal">
                You may request access to or corrections of your Personal
                Information.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              Deletion:
              <span className="font-normal">
                You may request that we delete your Personal Information,
                subject to legal retention requirements.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              {" "}
              Opt-Out of Marketing:
              <span className="font-normal">
                You may opt out of receiving marketing communications by
                following the unsubscribe instructions in our emails.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Data Portability:
              <span className="font-normal">
                You can request a copy of your Personal Information in a
                structured, machine-readable format.
              </span>
            </p>
          </li>
        </ul>

        <p>
          To exercise these rights, please contact us at [Insert Contact Email
          or Phone Number]. We will respond to your request in accordance with
          applicable law.
        </p>
        <h3 className="text-2xl font-bold">5. Security of Your Information</h3>
        <p>
          We implement appropriate technical and organizational measures to
          protect your Personal Information from unauthorized access, use, or
          disclosure. However, no method of transmission over the Internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h3 className="text-2xl font-bold">6. Data Retention</h3>
        <p>
          We retain your Personal Information for as long as necessary to
          provide our services and to comply with our legal obligations. The
          retention period may vary depending on the type of information and the
          applicable legal or operational requirements.
        </p>

        <h3 className="text-2xl font-bold">7. Children’s Privacy</h3>
        <p>
          The Platform is not intended for use by individuals under the age of
          18. We do not knowingly collect Personal Information from minors. If
          we learn that we have inadvertently collected data from a minor, we
          will take steps to delete such information promptly.
        </p>
        <h3 className="text-2xl font-bold">
          8. Changes to This Privacy Policy
        </h3>
        <p>
          We reserve the right to modify this Privacy Policy at any time. If we
          make material changes, we will notify you by updating the "Last
          Updated" date at the top of this policy and, if necessary, via email.
          Your continued use of the Platform constitutes your acceptance of the
          updated policy.
        </p>
        <h3 className="text-2xl font-bold">9. Contact Information</h3>
        <p>
          If you have any questions about this Privacy Policy or your data,
          please contact us:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li> Email: Info@HomeHero.com</li>
          <li>
            {" "}
            Address: HomeHero LLC 382 NE 191ST ST NUM 857346, Miami, FL 33179
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
