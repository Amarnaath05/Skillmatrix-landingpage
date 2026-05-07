import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="pt-20 pb-10 px-6 bg-[#1A1A2E] text-gray-400"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold font-sans text-white">Infospark Technologies</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Empowering students worldwide with real-world internship experiences and industry-recognized certifications.
            </p>
          </motion.div>

          {/* Column 2: Explore */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4 font-sans text-white">Explore</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition cursor-pointer">Home</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Internships</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Certificates</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Companies</li>
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4 font-sans text-white">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition cursor-pointer">About Us</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Careers</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Blog</li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium mb-4 font-sans text-white">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                info@codealpha.tech
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                Bangalore, India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-white/20"
        >
          {/* Copyright */}
          <p className="text-sm">
            2026 Infospark Technologies. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-600 transition cursor-pointer"
            >
              <span className="text-white">in</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-600 transition cursor-pointer"
            >
              <span className="text-white">X</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-600 transition cursor-pointer"
            >
              <span className="text-white">IG</span>
            </motion.div>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <span className="transition cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="transition cursor-pointer hover:text-white">Terms</span>
            <span className="transition cursor-pointer hover:text-white">Cookies</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
