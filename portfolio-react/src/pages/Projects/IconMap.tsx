// IconMap.tsx
import {
  FaReact,
  FaSass,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

import { SiGoogledrive, SiCanva } from 'react-icons/si';

const iconMap: Record<string, React.ElementType> = {
  FaReact,
  FaSass,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  GoogleDrive: SiGoogledrive, // <- c’est le nom que tu utilises dans le JSON
  Canva: SiCanva,             // <- idem ici
};

export default iconMap;
