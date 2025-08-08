import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Andrew Okamura.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Tokyo based Full Stack Software Engineer with 7+ years of experience.
        <br />
        I don't just build perfect products; I build excellent ones.
        <br />
        Do you want innovative ideas and solutions?
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
      Proficient Full Stack Developer with 10+ years of experience developing scalable web applications using JavaScript, 
      React, Node.js, and MongoDB, including game engineering. Worked at FOURDIGIT for 4 year and Rikkeisoft for 6 years, 
      gaining experience in developing innovative solutions for clients in various industries.`,
  aboutItems: [
    { label: 'Location', text: 'Tokyo, Japan', Icon: MapIcon },
    { label: 'Age', text: '29', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Japanese / Australian', Icon: FlagIcon },
    { label: 'Interests', text: 'Musics, Karate', Icon: SparklesIcon },
    { label: 'Study', text: 'University of Tokyo', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'FOURDIGIT, inc.', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Japanese',
        level: 10,
      },
      {
        name: 'English',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sumup',
    description: '',
    url: 'https://sumup.com',
    image: porfolioImage1,
  },
  {
    title: 'Wanderlog',
    description: '',
    url: 'https://wanderlog.com',
    image: porfolioImage2,
  },
  {
    title: 'Apollo Universal Starter Kit',
    description: '',
    url: 'https://sysgears.com/work/apollo-starter-kit/',
    image: porfolioImage7,
  },
  {
    title: 'Eatstreet',
    description: '',
    url: 'https://eatstreet.com',
    image: porfolioImage3,
  },
  {
    title: 'Hybrent',
    description: '',
    url: 'https://hybrent.com',
    image: porfolioImage4,
  },
  {
    title: 'Paxintrade',
    description: '',
    url: 'https://paxintrade.com',
    image: porfolioImage5,
  },
  {
    title: 'TMC Motors',
    description: '',
    url: 'https://www.tmcmotors.co.uk/',
    image: porfolioImage6,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2015',
    location: 'University of Tokyo',
    title: 'Masters in Computer Science',
    content: <p>Gained extensive understanding about overall IT field,
      strong technical background about Human Compuer Interface and Artificial Intelligence.
    </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2019 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        As a Senior Full Stack Developer at [Company Name], I led the design, development,
        and scaling of complex web applications, utilizing technologies such as React, Node.js,
        and AWS. My role involved driving both front-end and back-end architecture, ensuring high-performance,
        scalable solutions, and seamless user experiences.
      </p>
    ),
  },
  {
    date: 'March 2015 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        As a full-stack developer, I contributed to developing and scaling
        innovative web applications using React, Node.js, and AWS, driving both front-end and
        back-end solutions while ensuring a seamless user experience and system performance.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Pod',
      text: 'Andrew is highly trustable developer. He always keeps he said.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Alexender',
      text: 'Before I met him, I didn\'t know what is a really innoviate idea.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Akira Nakamura',
      text: 'I am really happy with the days I worked with him.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Tokyo, Japan',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
