"use client";
import type React from "react";
import Link from "next/link";
import { ChevronUp } from "react-feather";
import CommonHeader from "@/components/common/CommonHeader";
import AppButton from "@/helpers/ui/AppButton";
import CommonTitle from "@/helpers/ui/CommonTitle";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <CommonHeader
        title="Privacy"
        secondarySubTitle="Policy"
        componentTitle="Privacy policy"
      />
      <div className="container w-full px-4 py-12 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          {/* <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1> */}
          <CommonTitle title="Privacy Policy" />
          <p className="text-gray-500">Last updated: April 19, 2025</p>
        </div>

        {/* Table of Contents */}
        <div className="p-6 mb-10 bg-white rounded-xl shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Table of Contents</h2>
          <nav className="space-y-1">
            {[
              { id: "introduction", label: "Introduction" },
              { id: "information-collection", label: "Information We Collect" },
              { id: "information-use", label: "How We Use Your Information" },
              {
                id: "information-sharing",
                label: "Information Sharing and Disclosure",
              },
              { id: "your-rights", label: "Your Rights and Choices" },
              { id: "data-security", label: "Data Security" },
              { id: "children-privacy", label: "Children's Privacy" },
              {
                id: "international-transfers",
                label: "International Data Transfers",
              },
              { id: "policy-changes", label: "Changes to This Privacy Policy" },
              { id: "contact-us", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="flex px-4 py-2 text-gray-700 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <Section id="introduction" title="Introduction">
            <p>
              Welcome to our Privacy Policy. This document explains how we
              collect, use, and protect your personal information when you use
              our services. We are committed to ensuring the privacy and
              security of your data.
            </p>
            <p className="mt-4">
              By accessing or using our services, you agree to the collection
              and use of information in accordance with this policy. If you do
              not agree with our policies and practices, please do not use our
              services.
            </p>
          </Section>

          <Section id="information-collection" title="Information We Collect">
            <p>
              We collect several types of information from and about users of
              our services, including:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>
                <span className="font-medium">Personal Information:</span> Such
                as your name, email address, postal address, phone number, and
                other identifiers by which you may be contacted online or
                offline.
              </li>
              <li>
                <span className="font-medium">Usage Information:</span> Details
                of your visits to our services, including traffic data, location
                data, logs, and other communication data and the resources that
                you access and use.
              </li>
              <li>
                <span className="font-medium">Device Information:</span>{" "}
                Information about your computer, internet connection, and mobile
                device, including your IP address, operating system, and browser
                type.
              </li>
            </ul>
          </Section>

          <Section id="information-use" title="How We Use Your Information">
            <p>
              We use the information we collect about you or that you provide to
              us, including any personal information:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>To present our services and their contents to you.</li>
              <li>
                To provide you with information, products, or services that you
                request from us.
              </li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights.</li>
              <li>
                To notify you about changes to our services or any products or
                services we offer.
              </li>
              <li>
                In any other way we may describe when you provide the
                information.
              </li>
              <li>For any other purpose with your consent.</li>
            </ul>
          </Section>

          <Section
            id="information-sharing"
            title="Information Sharing and Disclosure"
          >
            <p>
              We may disclose aggregated information about our users, and
              information that does not identify any individual, without
              restriction.
            </p>
            <p className="mt-4">
              We may disclose personal information that we collect or you
              provide as described in this privacy policy:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>To our subsidiaries and affiliates.</li>
              <li>
                To contractors, service providers, and other third parties we
                use to support our business.
              </li>
              <li>
                To a buyer or other successor in the event of a merger,
                divestiture, restructuring, reorganization, dissolution, or
                other sale or transfer of some or all of our assets.
              </li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>
                For any other purpose disclosed by us when you provide the
                information.
              </li>
              <li>With your consent.</li>
            </ul>
          </Section>

          <Section id="your-rights" title="Your Rights and Choices">
            <p>
              You have certain rights regarding the personal information we
              collect about you:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>
                <span className="font-medium">Access:</span> You can request
                access to your personal information.
              </li>
              <li>
                <span className="font-medium">Correction:</span> You can request
                that we correct inaccurate or incomplete information.
              </li>
              <li>
                <span className="font-medium">Deletion:</span> You can request
                that we delete your personal information.
              </li>
              <li>
                <span className="font-medium">Restriction:</span> You can
                request that we restrict the processing of your data.
              </li>
              <li>
                <span className="font-medium">Data Portability:</span> You can
                request a copy of your data in a structured, commonly used, and
                machine-readable format.
              </li>
              <li>
                <span className="font-medium">Objection:</span> You can object
                to our processing of your personal information.
              </li>
            </ul>
          </Section>

          <Section id="data-security" title="Data Security">
            <p>
              We have implemented measures designed to secure your personal
              information from accidental loss and from unauthorized access,
              use, alteration, and disclosure. All information you provide to us
              is stored on secure servers behind firewalls.
            </p>
            <p className="mt-4">
              The safety and security of your information also depends on you.
              We urge you to be careful about sharing your personal information
              with others. We cannot guarantee the security of your personal
              information transmitted to our services. Any transmission of
              personal information is at your own risk.
            </p>
          </Section>

          <Section id="children-privacy" title="Children's Privacy">
            <p>
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If you are under 13, do not use or provide any
              information on our services. If we learn we have collected or
              received personal information from a child under 13 without
              verification of parental consent, we will delete that information.
            </p>
          </Section>

          <Section
            id="international-transfers"
            title="International Data Transfers"
          >
            <p>
              Your information may be transferred to — and maintained on —
              computers located outside of your state, province, country, or
              other governmental jurisdiction where the data protection laws may
              differ from those of your jurisdiction.
            </p>
            <p className="mt-4">
              If you are located outside the United States and choose to provide
              information to us, please note that we transfer the data to the
              United States and process it there. Your consent to this Privacy
              Policy followed by your submission of such information represents
              your agreement to that transfer.
            </p>
          </Section>

          <Section id="policy-changes" title="Changes to This Privacy Policy">
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the Last updated date at the top of this Privacy
              Policy.
            </p>
            <p className="mt-4">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </Section>

          <Section id="contact-us" title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="p-4 mt-4 bg-gray-50 rounded-lg">
              <p className="font-medium">By email: Info@rapidsmarterp.com</p>
              <p className="mt-2 font-medium">
                By phone: +971 56 20 15 468 || +966 56 71 79 72
              </p>
              <p className="mt-2 font-medium">
                By mail: Fish Round About Deira, Dubai , UAE
              </p>
            </div>
          </Section>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-16">
          <Link href="#">
            <AppButton title="Back to top" showIcon btnIcon={ChevronUp} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Section component with collapsible functionality
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="pb-2 mb-4 border-b">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="prose max-w-none text-gray-700">{children}</div>
    </section>
  );
}
