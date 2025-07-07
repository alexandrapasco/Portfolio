// src/components/Projects/IconMap.tsx (ou adapte le chemin à ton projet)

import {
  FaReact,
  FaSass,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const iconMap: Record<string, JSX.Element> = {
  FaReact: <FaReact />,
  FaSass: <FaSass />,
  FaJs: <FaJs />,
  FaNodeJs: <FaNodeJs />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiMongodb: <SiMongodb />
};

export default iconMap;
