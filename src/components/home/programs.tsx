"use client";

import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { motion } from "framer-motion";

export default function Programs() {
  return (
    <ul className="flex justify-center space-x-20 text-[80px] text-center text-white">
      <motion.li
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hover:text-main duration-200 ease-out hover:text-hover"
      >
        <CgFigma />
      </motion.li>
      <motion.li
        initial={{ x: -200, y: 270, opacity: 0 }}
        whileInView={{ x: -20, y: 120, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hover:text-main duration-300 ease-out hover:text-hover"
      >
        <SiAdobephotoshop />
      </motion.li>
      <motion.li
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 200, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hover:text-main duration-200 ease-out hover:text-hover"
      >
        <SiKrita />
      </motion.li>
      <motion.li
        initial={{ x: 200, y: 270, opacity: 0 }}
        whileInView={{ x: 20, y: 120, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hover:text-main duration-200 ease-out hover:text-hover"
      >
        <SiAdobeillustrator />
      </motion.li>
      <motion.li
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hover:text-main duration-200 ease-out hover:text-hover"
      >
        <SiInkscape />
      </motion.li>
    </ul>
  );
}
