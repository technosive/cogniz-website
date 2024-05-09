import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import Image from "next/legacy/image";
import * as React from "react";

import { Br, Link } from "@saas-ui/react";
import { Faq } from "components/faq";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import { ChakraLogo, NextjsLogo } from "components/logos";
import { FallInPlace } from "components/motion/fall-in-place";
import { Pricing } from "components/pricing/pricing";
import { Em } from "components/typography";
import { AiOutlineProject } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";
import {
  FiArrowRight,
  FiAward,
  FiBarChart,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiDatabase,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserCheck,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import { GoWorkflow } from "react-icons/go";
import { IoBusinessOutline } from "react-icons/io5";
import { PiToolbox } from "react-icons/pi";
import { TbBuildingStadium, TbSettingsAutomation } from "react-icons/tb";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import pricing from "data/pricing";
import testimonials from "data/testimonials";

import CookieBanner from "components/cookie-banner";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <meta
          name="keywords"
          content="cogniz, ai, machine learning, chatbot, assistant, saas,retrieval augmentation, generative app, text generation, large language models (LLMs), published LLMs, local LLMs, creative writing, content creation, AI Chatbots, Natural Language Processing (NLP), Artificial Intelligence (AI), Chatbot Solutions, Conversational AI, Knowledge Management, Customer Support Automation, Personalized Responses, Real-Time Information Retrieval, Advanced Language Models, Intelligent Virtual Assistants, Enhanced Customer Experience, Business Intelligence Solutions, Innovation in Customer Service, Data-Driven Decision Making, Accelerated Product Development, Innovative AI Technology, Contextual Understanding, Optimized Knowledge Sharing, Cutting-Edge Technology Solutions"
        />
      </Head>
      <SEO
        title="Cogniz | Your Intelligent Retrieval Assistant"
        description="Your Intelligent Retrieval Assistant"
        canonical="https://cogniz.co"
      />
      <Box>
        <HeroSection />
        <HighlightsSection />
        <FeaturesSection />
        <TestimonialsSection />
        {/* <PricingSection /> */}
        <FaqSection />

        <CookieBanner />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Your Intelligent <Br /> Retrieval Assistant
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Cogniz, a revolutionary <Em>Retrieval-Augmented Generation</Em>{" "}
                (RAG) application designed to transform the way you work
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} pt="4" alignItems="center">
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="https://demo.cogniz.co/auth/signup"
                >
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.cogniz.co"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box
                overflow="hidden"
                height="100%"
                className="rounded-lg flex items-center justify-center shadow-md !p-0"
              >
                <Image
                  src="/static/screenshots/hero.png"
                  layout="fixed"
                  width={1320}
                  height={500}
                  alt="Screenshot of a Cogniz Chat page"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Data Mastery",
            icon: FiDatabase,
            description:
              "Dive into your company's data ecosystem for tailored insights.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Simple Decision-Making",
            icon: FiAward,
            description:
              "Get clear summaries and actionable insights effortlessly.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Streamlined Workflows",
            icon: GoWorkflow,
            description:
              "Automate tasks for increased effiency and productivity.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Personalized Customer Service",
            icon: FiUserCheck,
            description: "Craft accurate responses, boosting satisfaction.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core Features">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Cogniz goes beyond traditional AI assistants, empowering business
            users across all departments to make smarter decisions, save time,
            and achieve exceptional results.
          </Text>

          {/* <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex> */}
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          This revolutionary application, utilizing Retrieval-Augmented
          Generation (RAG) technology, reshapes workflows, enabling smarter
          decisions, automated tasks, and superior results
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “ With Cogniz, we've been able to streamline our processes, save
        valuable time, and enhance productivity across all departments, from
        sales to human resources. Its unique ability to harness internal data
        ecosystems and provide tailored insights has revolutionized the way we
        operate. ”
      </HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, null, 2]} title="All in one assistant">
        <Text color="muted" fontSize="lg">
          From sales to human resources, Cogniz enhances efficiency and
          productivity, becoming an indispensable asset for thriving in today's
          competitive landscape.
        </Text>
        <Wrap mt="8">
          {[
            "Retrieval-Augmented Generation",
            "RAG",
            "revolutionary",
            "workflows",
            "departments",
            "data-driven decisions",
            "automation",
            "efficiency",
            "productivity",
            "tailored insights",
            "customer service",
            "sales",
            "marketing",
            "finance",
            "human resources",
            "competitive landscape",
            "business success",
            "demo",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> AI Assistant.
        </Heading>
      }
      description={
        <>
          Cogniz includes everything you need to build.
          <Br />
          Use it as working buddy or foundation for your system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Workflows.",
          icon: GoWorkflow,
          description:
            "Cogniz streamlines your organization's workflows, empowering your team to work more effectively and achieve greater results.",
          variant: "inline",
        },
        {
          title: "Automation.",
          icon: TbSettingsAutomation,
          description:
            "Cogniz automates repetitive tasks and processes, freeing up your team to focus on more strategic initiatives and high-value activities.",
          variant: "inline",
        },
        {
          title: "Efficiency.",
          icon: AiOutlineProject,
          description:
            "Our platform enhances efficiency across your organization, helping you accomplish more in less time and with fewer resources.",
          variant: "inline",
        },
        {
          title: "Productivity.",
          icon: FaNetworkWired,
          description:
            "Cogniz boosts productivity by enabling your team to work smarter, not harder, and achieve better results in less time.",
          variant: "inline",
        },
        {
          title: "Customer service.",
          icon: FiUsers,
          description:
            "With Cogniz, you can deliver exceptional customer service by providing personalized, accurate responses to customer inquiries and requests.",
          variant: "inline",
        },
        {
          title: "Competitive landscape.",
          icon: IoBusinessOutline,
          description:
            "In today's competitive business environment, Cogniz gives you the edge you need to stay ahead of the competition and thrive.",
          variant: "inline",
        },
        {
          title: "Business success.",
          icon: BsGraphUpArrow,
          description:
            "Cogniz is the key to unlocking your organization's full potential and achieving greater success in today's fast-paced business world.",
          variant: "inline",
        },
        {
          title: "Departments.",
          icon: TbBuildingStadium,
          description:
            "From sales to human resources, every department in your organization can benefit from Cogniz's powerful features and tailored solutions.",
          variant: "inline",
        },
        {
          title: "Revolutionary.",
          icon: PiToolbox,
          description:
            "Our platform represents a new era in business solutions, providing innovative tools and features that set us apart from the competition.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

// export async function getStaticProps() {
//   return {
//     props: {
//       announcement: {
//         title: "Support us by becoming a stargazer! 🚀 ",
//         description:
//           '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
//         href: "https://github.com/saas-js/saas-ui",
//         action: false,
//       },
//     },
//   };
// }
