"use client";

import {
  SiAdobephotoshop,
  SiKrita,
  SiInkscape,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Programs = () => {
  const router = useRouter();

  return (
    <>
      <ul className="justify-center space-x-20 text-[80px] text-center text-white md:flex hidden">
        <motion.li
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hover:text-main duration-200 ease-out hover:text-hover cursor-pointer"
          onClick={() => router.push("/programs/figma")}
        >
          <CgFigma />
        </motion.li>
        <motion.li
          initial={{ x: -200, y: 270, opacity: 0 }}
          whileInView={{ x: -20, y: 120, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hover:text-main duration-300 ease-out hover:text-hover cursor-pointer"
          onClick={() => router.push("/programs/adobe photoshop")}
        >
          <SiAdobephotoshop />
        </motion.li>
        <motion.li
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 200, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hover:text-main duration-200 ease-out hover:text-hover cursor-pointer"
          onClick={() => router.push("/programs/krita")}
        >
          <SiKrita />
        </motion.li>
        <motion.li
          initial={{ x: 200, y: 270, opacity: 0 }}
          whileInView={{ x: 20, y: 120, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hover:text-main duration-200 ease-out hover:text-hover cursor-pointer"
          onClick={() => router.push("/programs/adobe illustrator")}
        >
          <SiAdobeillustrator />
        </motion.li>
        <motion.li
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hover:text-main duration-200 ease-out hover:text-hover cursor-pointer"
          onClick={() => router.push("/programs/inkscape")}
        >
          <SiInkscape />
        </motion.li>
      </ul>
      <motion.ul
        className="flex justify-center space-x-4 text-[50px] text-center text-white md:hidden mt-[30px]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <li
          onClick={() => router.push("/programs/figma")}
          className="hover:text-hover"
        >
          <CgFigma />
        </li>
        <li
          onClick={() => router.push("/programs/adobe photoshop")}
          className="hover:text-hover"
        >
          <SiAdobephotoshop />
        </li>
        <li
          onClick={() => router.push("/programs/krita")}
          className="hover:text-hover"
        >
          <SiKrita />
        </li>
        <li
          onClick={() => router.push("/programs/adobe illustrator")}
          className="hover:text-hover"
        >
          <SiAdobeillustrator />
        </li>
        <li
          onClick={() => router.push("/programs/inkscape")}
          className="hover:text-hover"
        >
          <SiInkscape />
        </li>
      </motion.ul>
    </>
  );
};

export default Programs;
