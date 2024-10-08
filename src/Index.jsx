import { HiOutlineHomeModern } from "react-icons/hi2";
import { WiLightning } from "react-icons/wi";
import { LiaIndustrySolid } from "react-icons/lia";
import { BsLightbulb } from "react-icons/bs";
import headerimage from './assets/headerimage.jpg';
import user1 from "./assets/profile-pictures/user1.jpg";
import user2 from "./assets/profile-pictures/user2.jpg";
import user3 from "./assets/profile-pictures/user3.jpg";
import user4 from "./assets/profile-pictures/user4.jpg";
import user5 from "./assets/profile-pictures/user5.jpg";
import user6 from "./assets/profile-pictures/user6.jpg";
export const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#" },
  { label: "SERVICES", href: "#" },
  { label: "TESTIMONIAL", href: "#" },
  { label: "CONTACT US", href: "#" },

];
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.The team was responsive, professional, and delivered results beyond my expectations.",
  },
];


export const features = [
    {
      icon: <HiOutlineHomeModern />,
      text: "Residential Services",
      button: "Read More",
      description:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      icon: <WiLightning />,
      text: "Commercial Services",
      button: "Read More",
      description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",    },
    {
      icon: <LiaIndustrySolid />,
      text: "Industrial Services",
      button: "Read More",
      description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",    },
    {
      icon: <BsLightbulb />,
      text: "Electrical Services",
      button: "Read More",
      description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",    },
  ];

  export const headslide = [
    {
      image:headerimage,
      heading : 'ELECTRICITY SERVICE',
      text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis.',
      button : 'Read More',
    },
    {
      image:headerimage,
      heading : 'ELECTRICITY SERVICE',
      text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis.',
      button : 'Read More',
    },   {
      image:headerimage,
      heading : 'ELECTRICITY SERVICE',
      text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis.',
      button : 'Read More',
    },   {
      image:headerimage,
      heading : 'ELECTRICITY SERVICE',
      text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis.',
      button : 'Read More',
    },
  ]