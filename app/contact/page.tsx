"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { 
  FaPhoneAlt,
  FaEnvelope, 
  FaMapMarkedAlt,
  FaWhatsapp,
  FaFlag,
} from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jabiring@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+966-534316472",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    description: "+91-9446767604",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Current Location",
    description: "Dammam, KSA",
  },
  {
    icon: <FaFlag />,
    title: "State, Country",
    description: "Kerala, India",
  },
]

export default function Contact() {

  return (
    <motion.section initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4, duration: 0.5 }}
                    className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Contact Me</h3>
              <p className="text-white/60">
                This is a sample form. Submitting will not result in any action. Thanks!!!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="wds">Web Development</SelectItem>
                    <SelectItem value="mad">Mobile Application Development</SelectItem>
                    <SelectItem value="tdw">3D Website</SelectItem>
                    <SelectItem value="ods">Odoo Development/ Support</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]"
                        placeholder="Your message for me" />
              <Button size="md" className="max-w-40">
                Contact Me
              </Button>
            </form>
          </div> */}

          <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[2]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}