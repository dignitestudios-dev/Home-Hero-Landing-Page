import React from "react";
import { styles } from "../styles/styles";

const OptIn = () => {
  return (
    <div className={`w-full ${styles.paddingHorizontal} py-6 lg:pt-12`}>
      <div className="w-full flex flex-col items-start gap-4">
        <h2 className="blue-text font-bold text-xl">HomeHero Opt-in Process</h2>
        <p>
          Our app's opt-in process ensures secure user authentication by
          incorporating Two-Factor Authentication (2FA). During sign-up, users
          explicitly give consent to receive messages for 2FA purposes on their
          phone number. This is achieved through a clear and transparent flow
          with a combination of consent collection, verification steps, and
          confirmation screens. If users require more information, they can
          access our detailed{" "}
          <a className="light-blue-text font-semibold" href="/privacy">
            Privacy Policy
          </a>{" "}
          to understand how their data is handled. Below is an overview of the
          workflow and individual screens:
        </p>

        <div className="w-full">
          <span className="font-semibold">1. Splash Screen</span>
          <p className="flex items-center gap-1 lg:px-5 my-2">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            The first screen introduces users to the app with branding and a
            welcoming interface, signaling the start of the sign-up process.
          </p>
          <div className="w-full lg:px-4">
            <img
              src="/splash.png"
              alt="splash-screen"
              className="object-contain h-[320px] rounded-xl mt-2"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-2 mt-5">
          <span className="font-semibold">2. Sign-Up Screen</span>
          <p className="flex items-center gap-1 lg:px-5">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            Users enter their name, email, phone number, and password.
          </p>
          <p className="flex items-center gap-1 lg:px-5">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            A checkbox with the text:
          </p>
          <p className="flex items-center gap-1 lg:px-5 font-semibold">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-sm text-gray-400 invisible"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            "I agree to the Terms of Service and Privacy Policy and authorize
            the collection and use of my phone number for Two-Factor
            Authentication."
          </p>
          <p className="flex items-center gap-1 lg:px-5">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            Users must check this box to proceed, ensuring clear opt-in consent
            for 2FA.
          </p>
          <div className="w-full lg:px-4">
            <img
              src="/sign-up.png"
              alt="signup-screen"
              className="object-contain h-[320px] rounded-xl mt-2"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-2 mt-5">
          <span className="font-semibold">
            3. Verify Email and Phone Number Screen (Initial)
          </span>
          <p className="flex items-center gap-1 lg:px-5">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            This screen shows both email and phone number awaiting verification.
            Users are prompted to verify each individually.
          </p>
          <div className="w-full lg:px-4">
            <img
              src="/verification.png"
              alt="verification-screen"
              className="object-contain h-[320px] mt-2"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-2 mt-5">
          <span className="font-semibold">
            4. Verification Code Entry Screen (Email)
          </span>
          <p className="flex items-center gap-1 lg:px-5">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            Users enter the code sent to their email to verify it. This ensures
            their email address is valid and accessible.
          </p>
          <div className="w-full lg:px-4 flex items-center gap-5">
            <img
              src="/email-in.png"
              alt="email-verification-screen-1"
              className="object-contain h-[320px] mt-2"
            />
            <img
              src="/email-out.png"
              alt="email-verification-screen-2"
              className="object-contain h-[320px] mt-2"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-2 mt-5">
          <span className="font-semibold">
            7. Verify Email and Phone Number Screen (Both Verified)
          </span>
          <p className="flex items-center gap-1 lg:px-5">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-xs text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
              </svg>
            </span>
            The final verification screen displays both email and phone number
            as successfully verified. This ensures users have completed the 2FA
            setup process.
          </p>

          <div className="w-full lg:px-4 flex items-center gap-5">
            <img
              src="/verified.png"
              alt="splash-screen"
              className="object-contain h-[320px] mt-2"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-2 mt-5">
          <h3 className="font-semibold">
            How Consent is Collected and 2FA is Implemented
          </h3>
          <ul className="list-disc lg:px-4">
            <li>
              During the sign-up process, the user is explicitly informed about
              the collection and use of their phone number for 2FA. Consent is
              obtained via a mandatory checkbox with clear language.
            </li>
            <li>
              Verification ensures that the provided contact details are
              accurate and accessible.
            </li>
            <li>
              2FA works by sending unique codes to the verified email and phone
              number, which the user must enter to complete the verification
              process, adding an essential layer of security.
            </li>
            <li>
              For further details, users can review our{" "}
              <a className="light-blue-text font-semibold" href="/privacy">
                Privacy Policy
              </a>
              , which provides comprehensive information on data collection and
              usage practices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OptIn;
