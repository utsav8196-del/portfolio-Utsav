"use client";

import { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Input } from "@/app/src/components/ui/input";
import { Textarea } from "@/app/src/components/ui/textarea";
import { Button } from "@/app/src/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9904988263",
    action: () => (window.location.href = "tel:+919904988263"),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "utsav8196@gmail.com",
    action: () => (window.location.href = "mailto:utsav8196@gmail.com"),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Surat, Gujarat, India",
    action: () =>
      window.open("https://www.google.com/maps?q=Surat,+Gujarat", "_blank"),
  },
];

const Contact = () => {
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "error",
      });
      return;
    }

    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error!",
        text: "Invalid email format.",
        icon: "error",
      });
      return;
    }

    formData.append("access_key", "c83ad2be-7bc5-4273-9457-6524f5deda36");
    const json = JSON.stringify(Object.fromEntries(formData));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      formRef.current.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  }

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 px-4"
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {/* Left section: Info & message */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Message */}
            <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-6 sm:p-8 bg-black/10 text-white">
              <h3 className="text-2xl font-semibold text-center w-full">Let's connect!</h3>
              <p className="text-center text-white/80 max-w-md">
                Reach out to discuss opportunities, projects, or simply to start a conversation.
              </p>
            </div>
            {/* Contact Info */}
            <div className="flex flex-col gap-4 rounded-xl p-6 sm:p-8 bg-black/10 text-white">
              <ul className="flex flex-col gap-4">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-300"
                      onClick={item.action}
                    >
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div>
                      <p className="uppercase text-accent text-sm">{item.title}</p>
                      <h3 className="text-base text-white/70">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right section: Form */}
          <div className="w-full md:w-1/2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-6 sm:p-8 bg-secondary rounded-xl"
            >
              <p className="text-sm uppercase text-white/60 mb-2">
                Fill out the form below to get in touch:
              </p>
              <Input name="name" type="text" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Your email" required />
              <Textarea
                name="message"
                className="h-40"
                placeholder="Type your message here!"
                required
              />
              <Button
                type="submit"
                variant="outline"
                className="max-w-[150px] uppercase mt-2 self-start"
              >
                Send email
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
