import { Em } from "components/typography";
import Link from "next/link";
import * as React from "react";

const faq = {
  title: "Frequently asked questions",
  // description: '',
  items: [
    {
      q: "How Cogniz works?",
      a: (
        <>
          Cogniz works by harnessing the power of internal data ecosystems
          within your organization, including reports, emails, and customer
          interactions. It retrieves relevant data, performs in-depth analysis,
          and presents users with clear summaries and actionable insights to
          make informed decisions.
        </>
      ),
    },
    {
      q: "How can I schedule a demo of Cogniz?",
      a: (
        <>
          You can schedule a demo of Cogniz by contacting our team at{" "}
          <Link
            href="mailto:vip@cogniz.co."
            target="_blank"
            className="hover:underline"
          >
            <Em>vip@cogniz.co</Em>
          </Link>
        </>
      ),
    },
    {
      q: "Which departments can benefit from using Cogniz?",
      a: "Cogniz is designed to benefit departments across the organization, including sales, marketing, finance, and human resources.",
    },
    {
      q: "Is Cogniz suitable for businesses of all sizes?",
      a: "Yes, Cogniz is suitable for businesses of all sizes, from startups to large enterprises. Its scalable solutions can be customized to fit the needs and budget of any organization, helping them unlock new levels of efficiency and productivity.",
    },
  ],
};

export default faq;
