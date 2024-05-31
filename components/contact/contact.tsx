import { Box } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Field, Form, FormLayout, SubmitButton } from "@saas-ui/react";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Section, SectionTitle, SectionTitleProps } from "components/section";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

interface ContactProps {
  title: string;
}

// emailjs Configuration
const TEMPLATE_ID = "template_j7l3cqa"; // Cogniz Template in EmailJS
const SERVICE_ID = "service_ch4fxkh"; // Cogniz Service in EmailJS
const PUBLIC_KEY = "zswr27pZsZktE5jOw";

const ContactForm: React.FC<ContactProps> = (props) => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  };

  //info@cogniz.co

  const [formData, setFormData] = React.useState(initialForm);
  const { title, ...rest } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    const templateParams = {
      lead_name: formData.name,
      lead_email: formData.email,
      lead_phone_Number: formData.phone,
      lead_organization: formData.organization,
      lead_message: formData.message,
    };

    const emailPromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    toast.promise(
      emailPromise,
      {
        loading: "Sending Your Message...",
        success: "Successfully Sent Your Message.",
        error: "Unable To Send Your Message.",
      },
      {
        position: "bottom-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 3000,
      }
    );

    emailPromise
      .then((res) => {
        setFormData(initialForm);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Section {...rest} position="relative" id="contact">
        <BackgroundGradient height="100%" />
        <Box zIndex="2" pos="relative">
          <SectionTitle title={title} />
          <Form onSubmit={onSubmit}>
            <FormLayout>
              <Field
                name="name"
                type="text"
                label="Your Name"
                value={formData.name}
                autoComplete="off"
                onChange={handleChange}
                placeholder="Enter Your Name"
                rules={{ required: true }}
              />
              <Field
                name="email"
                type="email"
                autoComplete="off"
                label="Your Email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your email"
                rules={{ required: true }}
              />
              <Field
                name="phone"
                type="text"
                autoComplete="off"
                label="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                rules={{ required: true }}
              />
              <Field
                name="organization"
                type="text"
                autoComplete="off"
                label="Your Organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter Your Organization"
              />
              <Field
                name="message"
                type="textarea"
                autoComplete="off"
                label="Your Message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your message"
              />

              <SubmitButton size={"md"}>Submit</SubmitButton>
            </FormLayout>
          </Form>
        </Box>
      </Section>
      <Toaster />
    </>
  );
};

export default ContactForm;
