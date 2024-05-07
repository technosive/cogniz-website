import { Button } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiAward, FiBarChart, FiDatabase, FiUserCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "COGNIZ",
    description: "Your Intelligent Retrieval Assistant",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      // {
      //   id: "pricing",
      //   label: "Pricing",
      // },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "Login",
        href: "https://demo.cogniz.co/auth/login",
      },
      {
        label: "Sign Up",
        href: "https://demo.cogniz.co/auth/signup",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: (
      <>&copy; {new Date().getFullYear()} - Cogniz. All rights reserved.</>
    ),
    links: [
      {
        href: "mailto:vip@cogniz.co",
        label: "Contact",
      },
      // {
      //   href: "https://twitter.com/saas_js",
      //   label: <FaTwitter size="14" />,
      // },
      // {
      //   href: "https://github.com/saas-js/saas-ui",
      //   label: <FaGithub size="14" />,
      // },
    ],
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      {
        title: "Data Mastery",
        icon: FiDatabase,
        description:
          "Dive into your company's data ecosystem for tailored insights.",
      },
      {
        title: "Simple Decision-Making",
        icon: FiAward,
        description:
          "Get clear summaries and actionable insights effortlessly.",
      },
      {
        title: "Streamlined Workflows",
        icon: FiBarChart,
        description: "Automate tasks for increased effiency and productivity.",
      },
      {
        title: "Personalized Customer Service",
        icon: FiUserCheck,
        description: "Craft accurate responses, boosting satisfaction.",
      },
    ],
  },
};

export default siteConfig;
