import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cash,
  agent,
  connect,
  interactive,
  money,
  flowChart,
  rocket,
  shield,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Community Building",
    icon: connect,
  },
  {
    title: "Directing Leads",
    icon: interactive,
  },
  {
    title: "Nurturing Leads",
    icon: agent,
  },
  {
    title: "Converting Leads",
    icon: money,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Pillar of Commitment",
    company_name: "We shield clients from risks, whilst ensuring results",
    icon: shield,
    iconBg: "#383E56",
    date: "Step 1",
    points: [
      "Empowering coaches as the pinnacle of results-driven excellence.",
      "Nurturing sustainable success through proven expertise and methodologies.",
      "Instilling confidence in your growth investment with demonstrated results.",
      "Embrace a promising future, leaving behind past disappointment.",
    ],
  },
  {
    title: "The Cornerstone Principle",
    company_name:
      "Scaling coaching businesses – that's our daily bread and butter.",
    icon: flowChart,
    iconBg: "#E6DEDD",
    date: "Step 2",
    points: [
      "Fostering business growth necessitates the establishment of a robust and distinctive identity that distinguishes you from market competitors.",
      "Each client at Btrex Media benefits from a dedicated customer acquisition engine, specifically designed and constructed for their needs.",
      "This includes a rigorously vetted appointment-setting team and dependable systems meticulously set in place.",
      "The result is an automated system for booking meetings and effectively monetizing their audience.",
    ],
  },
  {
    title: "Growth Alliance Framework",
    company_name: "Your Strategic Growth Allies",
    icon: rocket,
    iconBg: "#383E56",
    date: "Step 3",
    points: [
      "Achieving six to seven-figure success extends beyond excelling in a single medium, a principle we at Btrex Media understand deeply.",
      "This realization has led us to serve as Growth Allies for our clients, providing comprehensive, holistic support for their businesses.",
      "As a Growth Ally, we go beyond offering a singular service, focusing instead on comprehensive business enhancement.",
      "This approach often cultivates a personalized, long-term relationship between our clients and the Btrex Media team, fostering a partnership built on shared growth and success.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Core",
    description:
      'Our initial stage, "Foundational Copywriting, Analysis, and Research," provides an in-depth understanding of your customer base, industry, and key metrics. We also scrutinize your sales process for potential enhancements, aiming to promptly address gaps, boost your conversion rates, and maximize your client acquisition system\'s efficiency.',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Marketing Optimization",
    description:
      "After conducting a thorough investigation of your sector, scrutinizing your competitors, understanding the essential metrics, and discerning the key attributes of your target customers, we assist in formulating an appealing proposition that resonates with your audience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Profitable Community Transformation",
    description:
      "Turn your social media followers into a profitable engine with our specialized monetization services. Our professionals will harness your existing audience from platforms like Instagram, TikTok, or LinkedIn, directing traffic to a meticulously designed private SKOOL or Discord community, facilitated by AI-powered Dynamic Video Sales Letters. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
