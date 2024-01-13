import { SelectIconsType } from "./select-icons.type";
import { FaWindows, FaLinux } from "react-icons/fa6";
import { MacosIcon } from "@/components/UI/icons";

const selectIcons: SelectIconsType[] = [
  { text: "Macos", icon: MacosIcon, query: "macos" },
  { text: "Windows", icon: FaWindows, query: "windows" },
  { text: "Linux", icon: FaLinux, query: "linux" },
];

export default selectIcons;