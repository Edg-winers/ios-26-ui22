import { CVData, SkillNode } from '../types';

import profilePhoto from '../assets/images/dev_muhammad_photo_1786308428605.jpg';
import developerAbstract from '../assets/images/developer_abstract_1786305316809.jpg';
import projectKowaguru from '../assets/images/project_kowaguru_1786305329554.jpg';
import projectGraphicLab from '../assets/images/project_graphic_lab_1786305340835.jpg';

export { profilePhoto, developerAbstract, projectKowaguru, projectGraphicLab };

export const cvData: CVData = {
  personalInfo: {
    surname: 'Abubakar',
    firstName: 'Muhammad',
    otherNames: 'Auwal',
    fullName: 'Dev. Muhammad Auwal Abubakar',
    title: 'Senior Web Developer',
    subtitle: 'UI/UX Specialist & Full-Stack Creative Engineer',
    yearsOfExperience: 2,
    sex: 'Male',
    maritalStatus: 'Single',
    dateOfBirth: '13th January, 2007',
    nationality: 'Nigeria',
    address1: 'Opposite Freedom Radio Dutse, Jigawa State Polytechnic Dutse, Nigeria',
    address2: 'No 23, Zarenawa Outpost Birnin Kudu, Jigawa State, Nigeria',
    phones: ['+234 7067962658', '+234 8137834828'],
    email: 'muhammadbindaddy@gmail.com',
    github: 'https://github.com/Muhammadumma',
  },
  summary:
    'I am a professional Senior Web Developer with 2 years of hands-on experience in high-performance digital engineering. My core expertise encompasses front-end and back-end development, UX/UI design, and web content strategy. Proficient in modern JavaScript/TypeScript ecosystems, Adobe Creative Suite, photography, videography, and print production. Skilled in technical leadership, teamwork, pressure management, and delivering robust digital solutions.',
  
  education: [
    {
      id: 'edu-1',
      degree: 'Diploma in Computer Engineering Technology',
      institution: 'Jigawa State Polytechnic Dutse',
      location: 'Dutse, Jigawa State, Nigeria',
      years: '2024 – 2026',
      description: 'Specializing in hardware systems, computer engineering fundamentals, network protocols, system architecture, and software development methodologies.',
    },
    {
      id: 'edu-2',
      degree: 'SSCE in Science',
      institution: 'Al-Hikmah International School',
      location: 'Birnin Kudu, Jigawa State, Nigeria',
      years: '2022 – 2024',
      description: 'Secondary education with high distinction in Mathematics, Physics, Chemistry, Computer Studies, and Technical Drawing.',
    },
    {
      id: 'edu-3',
      degree: 'Primary School Leaving Certificate in Science',
      institution: 'Great Albarka International School',
      location: 'Birnin Kudu, Jigawa State, Nigeria',
      years: '2010 – 2016',
      description: 'Foundational elementary science education and initial computer literacy program.',
    },
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Software Operator & Web Developer',
      company: 'KowaGuru Technology Limited',
      location: 'Nigeria',
      period: '2025 – 2026',
      responsibilities: [
        'Developed and deployed client websites and responsive web applications utilizing modern JavaScript/TypeScript frameworks.',
        'Built functional front-end interfaces and back-end systems engineered directly from modern design concepts and specifications.',
        'Collaborated with clients, project stakeholders, and cross-functional teams to meet technical performance and strategic business requirements.',
        'Optimized web performance, accessibility, SEO, and secure server-side interactions across client platforms.',
      ],
    },
  ],

  otherTraining: [
    {
      id: 'tr-1',
      title: 'Company Management and Branding',
      organization: 'Mastercard EDC (Pan Atlantic University)',
      year: '2023',
    },
    {
      id: 'tr-2',
      title: 'Graphics Design With Pixel Lab',
      organization: 'Ellabbasee Graphics',
      year: '2024',
    },
  ],

  memberships: [
    {
      id: 'mem-1',
      name: 'Information Management Specialist',
      organization: 'Jigawa State Nigeria Graphic Designers',
    },
    {
      id: 'mem-2',
      name: 'Professional Creative Member',
      organization: 'African Pixel Lab Designers',
    },
  ],

  certificates: [
    {
      id: 'cert-1',
      year: '2024',
      title: 'Certificate of Award for Best Sport Graphic Designer',
      issuer: 'BICA Nigeria',
      icon: 'Award',
    },
    {
      id: 'cert-2',
      year: '2022',
      title: 'Train Nigerian Youth Entrepreneurship Certification',
      issuer: 'Mastercard EDC Pan Atlantic University',
      icon: 'GraduationCap',
    },
    {
      id: 'cert-3',
      year: '2022',
      title: 'Basic Arabic Language Certificate',
      issuer: 'ICLR, USA',
      icon: 'BookOpen',
    },
  ],

  conferences: [
    {
      id: 'conf-1',
      title: 'NITDA International Conference (Digital Nigeria)',
      location: 'Abuja, Nigeria',
      year: '2023',
    },
    {
      id: 'conf-2',
      title: 'Jigawa State Youth Empowerment Awards',
      location: 'Jigawa State, Nigeria',
      year: '2023',
    },
    {
      id: 'conf-3',
      title: 'Youth Day 2023 Celebration & Tech Summit',
      location: 'Jigawa State, Nigeria',
      year: '2023',
    },
  ],

  skills: {
    development: [
      'Front-End Engineering (React, TypeScript, Next.js, HTML5, CSS3, Tailwind CSS)',
      'Back-End Development (Node.js, Express, REST APIs)',
      'Web Architecture & Responsive Design',
      'Git & GitHub Version Control',
      'Computer Engineering & Hardware Systems',
    ],
    design: [
      'UI/UX Prototyping & Visual Design Theory',
      'Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro)',
      'Pixel Lab & Vector Branding',
      'Design Systems & Grid Layouts',
    ],
    multimedia: [
      'Photography & Studio Lighting',
      'Videography & Motion Editing',
      'Print Production & Layout Formatting',
      'Web Content Strategy & Copywriting',
    ],
    softSkills: [
      'Technical Leadership & Team Collaboration',
      'High-Pressure Problem Solving',
      'Adaptability & Flexibility',
      'Diversity Value & Clear Communication',
    ],
  },

  hobbies: [
    {
      category: 'Designing',
      details: 'UI/UX Design & Interactive Wireframing',
    },
    {
      category: 'Content Creation',
      details: 'Web Content Strategy & Multimedia Production',
    },
    {
      category: 'Book Writing',
      details: 'Technical Documentation & Technology Articles',
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Business Tracking System',
      category: 'web',
      description: 'Comprehensive web application for enterprise inventory, sales analytics, and business tracking with relational data security.',
      tags: ['Laravel', 'MySQL', 'Tailwind', 'REST API'],
      image: projectKowaguru,
      liveUrl: 'https://github.com/Muhammadumma',
      githubUrl: 'https://github.com/Muhammadumma',
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'KowaGuru Tech Website',
      category: 'web',
      description: 'Official corporate web platform for KowaGuru Technology Limited, featuring high-performance React front-end architecture.',
      tags: ['Next.js', 'Tailwind', 'TypeScript', 'Node.js'],
      image: projectKowaguru,
      liveUrl: 'https://github.com/Muhammadumma',
      githubUrl: 'https://github.com/Muhammadumma',
      featured: true,
    },
    {
      id: 'proj-3',
      title: 'EHR System (Concept)',
      category: 'uiux',
      description: 'Electronic Health Record concept application engineered for seamless clinical workflow, patient records, and encrypted auth.',
      tags: ['React.js', 'Firebase', 'Tailwind', 'UI/UX'],
      image: developerAbstract,
      liveUrl: 'https://github.com/Muhammadumma',
      githubUrl: 'https://github.com/Muhammadumma',
      featured: true,
    },
    {
      id: 'proj-4',
      title: 'African Pixel & Sport Graphics Studio',
      category: 'design',
      description: 'Award-winning sports branding and graphic design suite (BICA Award Winner 2024), featuring high-impact visual media.',
      tags: ['UI/UX', 'Adobe Photoshop', 'Illustrator', 'Pixel Lab'],
      image: projectGraphicLab,
      liveUrl: 'https://github.com/Muhammadumma',
      githubUrl: 'https://github.com/Muhammadumma',
      featured: true,
    },
  ],

  stats: [
    { label: 'Certificates', value: 5, suffix: '+' },
    { label: 'Trainings', value: 3, suffix: '+' },
    { label: 'Memberships', value: 3, suffix: '+' },
    { label: 'Conferences', value: 3, suffix: '+' },
  ],
};

export const skillNodes: SkillNode[] = [
  {
    id: 's-react',
    name: 'React',
    category: 'Development',
    level: 92,
    iconName: 'Code2',
    color: '#38bdf8',
    radius: 120,
    speed: 0.008,
    angle: 0,
    description: 'Building reactive, component-driven user interfaces with hooks and state management.',
  },
  {
    id: 's-ts',
    name: 'TypeScript',
    category: 'Development',
    level: 90,
    iconName: 'FileCode2',
    color: '#3b82f6',
    radius: 170,
    speed: -0.006,
    angle: 1.1,
    description: 'Type-safe scalable application development with strict static type checking.',
  },
  {
    id: 's-node',
    name: 'Node / Express',
    category: 'Development',
    level: 85,
    iconName: 'Server',
    color: '#22c55e',
    radius: 220,
    speed: 0.005,
    angle: 2.2,
    description: 'RESTful API construction, server routing, and backend database integrations.',
  },
  {
    id: 's-uiux',
    name: 'UI/UX Design',
    category: 'Design',
    level: 95,
    iconName: 'Layout',
    color: '#a855f7',
    radius: 140,
    speed: -0.007,
    angle: 3.3,
    description: 'User-centered design theory, wireframing, high-fidelity prototypes, and glassmorphism.',
  },
  {
    id: 's-adobe',
    name: 'Adobe Suite',
    category: 'Multimedia',
    level: 88,
    iconName: 'Palette',
    color: '#ec4899',
    radius: 190,
    speed: 0.006,
    angle: 4.4,
    description: 'Photoshop, Illustrator, Premiere Pro for branding, graphic design, and video editing.',
  },
  {
    id: 's-tailwind',
    name: 'Tailwind CSS',
    category: 'Development',
    level: 96,
    iconName: 'Sparkles',
    color: '#06b6d4',
    radius: 240,
    speed: -0.004,
    angle: 5.2,
    description: 'Utility-first CSS, custom themes, dark mode palettes, and responsive layouts.',
  },
  {
    id: 's-content',
    name: 'Content Strategy',
    category: 'Multimedia',
    level: 87,
    iconName: 'PenTool',
    color: '#f59e0b',
    radius: 160,
    speed: 0.007,
    angle: 1.8,
    description: 'Technical copywriting, documentation, and digital marketing strategy.',
  },
  {
    id: 's-compeng',
    name: 'Hardware & Systems',
    category: 'Engineering',
    level: 84,
    iconName: 'Cpu',
    color: '#6366f1',
    radius: 210,
    speed: -0.005,
    angle: 3.9,
    description: 'Computer Engineering principles, hardware maintenance, and embedded logic.',
  },
];
