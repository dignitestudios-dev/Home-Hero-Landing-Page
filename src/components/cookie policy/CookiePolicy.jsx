import React from "react";
import { styles } from "../../styles/styles";

const CookiePolicy = () => {
  return (
    <div>
      <div
        className={`w-full flex flex-col py-6 lg:pt-12 gap-3 ${styles.paddingHorizontal}`}
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-start">
          Cookie Policy{" "}
        </h1>
        <p className="text-xl font-semibold pt-10">
          Effective Date: <span className="font-normal">October 5, 2024</span>
        </p>
        <p className="text-xl font-semibold">
          Last Updated: <span className="font-normal">October 5, 2024</span>
        </p>
        <p>
          This Cookie Policy explains how HomeHero ("we," "us," or "our") uses
          cookies and similar tracking technologies on our Platform. By using
          the Platform, you consent to the use of cookies as described below. If
          you do not agree, you may disable cookies through your browser
          settings, though this may affect your ability to use the Platform.
        </p>
        <h3 className="text-2xl font-bold">1. What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They allow the website to recognize your device and store
          information about your preferences or actions over time.
        </p>
        <h3 className="text-2xl font-bold">2. Types of Cookies We Use</h3>
        <p>We use the following types of cookies on the Platform:</p>
        <ul className="list-disc px-10 space-y-4">
          <li>
            <p className="font-bold">
              {" "}
              Essential Cookies:
              <span className="font-normal">
                These cookies are necessary for the website to function
                properly. Without them, some services may not be available.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Performance Cookies:
              <span className="font-normal">
                These cookies collect information about how you use the
                Platform, such as which pages you visit most often. This data
                helps us improve the website’s functionality. requirements.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Functional Cookies:
              <span className="font-normal">
                These cookies allow the website to remember your preferences,
                such as language or region, and provide enhanced, personalized
                features.
              </span>
            </p>
          </li>
          <li>
            <p className="font-bold">
              Targeting/Advertising Cookies:
              <span className="font-normal">
                These cookies track your browsing habits to show relevant
                advertisements and measure the effectiveness of ad campaigns.
              </span>
            </p>
          </li>
        </ul>

        <h3 className="text-2xl font-bold">3. Third-Party Cookies</h3>
        <p>
          We may allow third-party service providers, such as Google Analytics
          or advertising partners, to place cookies on your device. These third
          parties may collect data about your online activities across websites
          and over time to deliver targeted advertisements. We do not control
          third-party cookies, and you should refer to their privacy policies
          for information on how they manage cookies.
        </p>
        <h3 className="text-2xl font-bold">4. How You Can Control Cookies</h3>
        <p>
          You can control or disable cookies through your browser settings. Each
          browser is different, so consult your browser's help section for
          instructions on how to manage cookies. Please note that if you disable
          certain cookies, some functionality on the Platform may be limited.
        </p>
        <h3 className="text-2xl font-bold">5. Changes to This Cookie Policy</h3>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or applicable laws. Any changes will be posted on
          this page, and the "Last Updated" date will be revised accordingly.
        </p>

        <h3 className="text-2xl font-bold">6. Contact Us</h3>
        <p>
          If you have any questions about this Cookie Policy or our use of
          cookies, please write us at:
        </p>
        <ul className="list-disc px-10 space-y-4">
          <li>Email: Info@HomeHero.com</li>
          <li>
            Address: HomeHero LLC 382 NE 191ST ST NUM857346, Miami, FL 33179
          </li>
        </ul>
        <br />
        <p>
          By using HomeHero, you agree to the terms of this Privacy Policy and
          Cookie Policy.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
