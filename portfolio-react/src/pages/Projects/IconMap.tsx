import {
  FaReact,
  FaSass,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

import {
  SiGoogledrive,
  SiCanva,
  SiAdobephotoshop
} from 'react-icons/si';

const iconMap: Record<string, JSX.Element> = {
  FaReact: <FaReact />,
  FaSass: <FaSass />,
  FaJs: <FaJs />,
  FaNodeJs: <FaNodeJs />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiGoogleDrive: <SiGoogledrive />,
  SiCanva: <SiCanva />,
  FaFacebook: <FaFacebook />,
  FaInstagram: <FaInstagram />,
  FaLinkedin: <FaLinkedin />,
  SiAdobephotoshop: <SiAdobephotoshop />,
};

export default iconMap;
