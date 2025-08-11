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
import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
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
      PSenior Full Stack Developer with 7+ years of professional experience designing, developing,
      and delivering high-quality software solutions. Adept at bridging front-end and back-end
      development, optimizing system performance, and collaborating with global teams to meet
      tight deadlines.`,
  aboutItems: [
    { label: 'Location', text: 'Tokyo, Japan', Icon: MapIcon },
    { label: 'Age', text: '29', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Japanese / Australian', Icon: FlagIcon },
    { label: 'Interests', text: 'Music, Karate', Icon: SparklesIcon },
    { label: 'Study', text: 'University of Tokyo', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'FOURDIGIT, inc.', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 5 },
      { name: 'Vue.js', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 5 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 5 },
      { name: 'Express', level: 5 },
      { name: 'PHP', level: 4 },
      { name: 'Laravel', level: 4 },
      { name: 'SQL', level: 5 },
      { name: 'Rust', level: 4 },
      { name: 'Go', level: 4 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 5 },
      { name: 'MySQL', level: 5 },
      { name: 'MongoDB', level: 5 },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 5 },
      { name: 'Flutter', level: 4 },
      { name: 'Swift', level: 3 },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 5 },
      { name: 'AWS', level: 5 },
      { name: 'GCP', level: 4 },
      { name: 'CI/CD', level: 4 },
      { name: 'REST APIs', level: 5 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Save a Childs Heart',
    description: '',
    url: 'https://25.saveachildsheart.org/',
    image: porfolioImage1,
  },
  {
    title: 'Backroads',
    description: '',
    url: 'https://www.backroads.com/',
    image: porfolioImage2,
  },
  {
    title: 'Arcreal',
    description: '',
    url: 'https://arcreal.com/',
    image: porfolioImage7,
  },
  {
    title: 'Eatstreet',
    description: '',
    url: 'https://eatstreet.com',
    image: porfolioImage3,
  },
  {
    title: 'Health at Home',
    description: '',
    url: 'https://impilo.health/',
    image: porfolioImage4,
  },
  {
    title: 'Species in Pieces',
    description: '',
    url: 'http://species-in-pieces.com/',
    image: porfolioImage5,
  },
  {
    title: 'Active Theory',
    description: '',
    url: 'https://activetheory.net/',
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
      strong technical background about Human Computer Interface and Artificial Intelligence.
    </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2020 - Present',
    location: 'Awesome Development Company',
    title: 'Senior Full Stack Developer',
    content: (
      <p>
        Led end-to-end client projects with a focus on scalability and performance. Designed RESTful APIs,
        integrated third-party services, and developed responsive front-end applications using React, Vue.js,
        and modern JavaScript frameworks. Experienced in managing cloud deployments (AWS, GCP) and CI/CD pipelines
        for efficient releases.
      </p>
    ),
  },
  {
    date: 'March 2018 - February 2020',
    location: 'Garage Startup Studio',
    title: 'Full Stack Developer',
    content: (
      <p>
        Experienced Full Stack Developer skilled in building and maintaining enterprise web applications
        using Node.js, Express, and relational databases (PostgreSQL, MySQL). Strong collaborator with
        designers and product managers to enhance UX/UI, and committed to product stability through comprehensive testing.
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
      image: avatar1,
    },
    {
      name: 'Jane Alexender',
      text: 'Before I met him, I didn\'t know what is a really innovative idea.',
      image: avatar2,
    },
    {
      name: 'Akira Nakamura',
      text: 'I truly enjoyed working with him.',
      image: avatar3,
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
