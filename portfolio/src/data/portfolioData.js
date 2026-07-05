// Single source of truth for all portfolio content.
// Edit this file to update copy across the entire site.

export const profile = {
  name: 'Satyam Kumar Jha',
  role: 'Full Stack Developer',
  headline: 'Building scalable web applications with modern technologies, AI, and cloud-powered solutions.',
  location: 'Patna, Bihar, India',
  email: 'satyam.ac.in@gmail.com',
  phone: '+91 81029 23947',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  resumeUrl: '/satyam_cv (1).pdf',
  summary: `Full Stack Developer with hands-on experience building scalable web applications using React.js, Node.js, Express.js, PostgreSQL, and MongoDB. Skilled in developing REST APIs, implementing JWT authentication, integrating AI-powered features using Gemini and OpenAI APIs, and building responsive user interfaces. Strong foundation in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP, and Software Engineering — passionate about solving real-world problems through clean architecture, scalable backend systems, intuitive experiences, and AI integration.`,
  taglines: [
    'Full Stack Developer',
    'AI Integration Engineer',
    'React & Node.js Specialist',
    'Problem Solver',
  ],
}

export const achievements = [
  { title: 'Fast Learner', detail: 'Picks up new stacks and tools quickly under real deadlines.' },
  { title: 'Problem Solver', detail: 'Strong DSA foundation applied to real production bugs.' },
  { title: 'Tech Lead', detail: 'Led multiple hackathon teams from idea to demo.' },
  { title: 'AI Enthusiast', detail: 'Ships features powered by Gemini and OpenAI APIs.' },
  { title: 'Full Stack Developer', detail: 'Comfortable across React, Node.js, and both SQL & NoSQL.' },
  { title: 'Social Impact Builder', detail: 'Builds assistive and community-first technology.' },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    level: 90,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
    level: 88,
  },
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C'],
    level: 85,
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL'],
    level: 82,
  },
  {
    category: 'Authentication',
    items: ['JWT', 'bcrypt'],
    level: 80,
  },
  {
    category: 'AI',
    items: ['Gemini API', 'OpenAI API'],
    level: 78,
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Cloudinary', 'Vercel'],
    level: 85,
  },
  {
    category: 'Core CS',
    items: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP', 'SE'],
    level: 88,
  },
]

export const experience = [
  {
    role: 'Technical Intern',
    company: 'Gulmohar Maitri Foundation',
    period: 'June 2026 – July 2026',
    points: [
      'Conducted a full website audit and proposed UI/UX improvements.',
      'Improved SEO strategy to increase organic discoverability.',
      'Led technical execution for the Operation Sindoor theatre event.',
      'Coordinated cross-functional teams across design, content, and tech.',
      'Demonstrated leadership and clear communication under tight timelines.',
    ],
  },
]

export const projects = [
  {
    title: 'Hospital Resource Management System',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description:
      'A full-stack hospital management platform to manage patient records, doctor appointments, hospital resources, and role-based authentication.',
    problem:
      'Hospitals often juggle patient records, appointments, and staff access across disconnected tools, slowing down care coordination.',
    features: [
      'Responsive UI across devices',
      'REST APIs for core hospital workflows',
      'Role-based authentication',
      'MongoDB data modelling',
      'Secure login with hashed credentials',
      'Scalable, modular architecture',
    ],
    architecture: 'React SPA → Express REST API → MongoDB, secured with JWT-based role access for admins, doctors, and staff.',
    github: '#',
    demo: '#',
    caseStudy: '#',
    accent: '#2563EB',
  },
  {
    title: 'PulsePlay AI',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Gemini AI'],
    description:
      'An AI-powered sports engagement platform delivering intelligent match conversations, live insights, and personalized fan experiences.',
    problem:
      'Fans want more than scores — they want context, conversation, and insight in the moment a match is happening.',
    features: [
      'Gemini AI-powered match chat',
      'JWT authentication',
      'REST APIs for live data',
      'Responsive dashboard UI',
      'Personalized AI insights',
      'Modern, data-dense dashboard',
    ],
    architecture: 'React dashboard ↔ Express API ↔ PostgreSQL, with Gemini AI in the request path for real-time conversational insight.',
    github: '#',
    demo: '#',
    caseStudy: '#',
    accent: '#7C3AED',
  },
  {
    title: 'Smart Blind Assistance Stick',
    stack: ['Arduino UNO', 'Embedded C', 'Sensors'],
    description:
      'An assistive hardware device for visually impaired users, combining multiple sensors with real-time feedback.',
    problem:
      'Visually impaired individuals need low-cost, immediate obstacle and hazard detection while navigating everyday environments.',
    features: [
      'Ultrasonic sensor for obstacle detection',
      'IR sensor for edge/step detection',
      'Water sensor for hazard detection',
      'LDR for light-level awareness',
      'Real-time buzzer and vibration alerts',
    ],
    architecture: 'Arduino UNO reads sensor array in a polling loop and triggers buzzer/vibration motor feedback in real time.',
    github: '#',
    demo: null,
    caseStudy: '#',
    accent: '#0EA5E9',
  },
]

export const leadership = [
  { title: 'Team Leader', org: 'Smart India Hackathon' },
  { title: 'Team Leader', org: 'Google Build with AI Hackathon' },
  { title: 'Team Leader', org: 'College Internal Hackathon' },
  { title: 'Winning Captain', org: 'Inter-School Cricket Championship' },
]

export const certifications = [
  { title: 'Google Build with AI', issuer: 'Google' },
  { title: 'Google Cloud Skills Boost', issuer: 'Google Cloud' },
  { title: 'Data Science / AI Track', issuer: 'Analytics Vidhya' },
  { title: 'Full Stack Web Development', issuer: 'Udemy' },
]

export const conferences = [
  'GDG Patna DevFest',
  'AI Impact Summit',
  'Google Cloud Hackathon',
  'Google Build with AI',
]

export const beyondCode = [
  'Technology for Social Impact',
  'Open Source Learning',
  'AI Communities',
  'Hackathons',
  'Developer Events',
  'Cricket',
  'Leadership',
]

export const education = [
  {
    degree: 'Master of Computer Applications',
    school: 'IIT Patna × IIIT Ranchi',
    period: '2026–2028',
    note: 'Pursuing',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'Patna Science College',
    period: '2023–2026',
    note: 'CGPA: 9.0',
  },
  {
    degree: 'Class XII, CBSE',
    school: '',
    period: '',
    note: '90.4%',
  },
  {
    degree: 'Class X, ICSE',
    school: '',
    period: '',
    note: '87%',
  },
]

export const timeline = [
  { year: '2023', title: 'Started BCA', desc: 'Began Bachelor of Computer Applications at Patna Science College.', type: 'education' },
  { year: '2024', title: 'First Hackathons', desc: 'Led teams through college internal hackathons, building rapid prototypes.', type: 'hackathon' },
  { year: '2026', title: 'Smart India Hackathon & Google Build with AI', desc: 'Led teams at national and Google-run hackathons.', type: 'achievement' },
  { year: '2025', title: 'AI-Powered Projects', desc: 'Built PulsePlay AI and the Hospital Resource Management System.', type: 'project' },
  { year: '2026', title: 'Technical Internship', desc: 'Interned at Gulmohar Maitri Foundation — audits, SEO, and event tech leadership.', type: 'experience' },
  { year: '2026', title: 'MCA at IIT Patna × IIIT Ranchi', desc: 'Began Master of Computer Applications, deepening systems and AI foundations.', type: 'education' },
  { year: 'Next', title: 'Goal: Ship AI-native products at scale', desc: 'Aiming to build production systems where AI is a core primitive, not a bolt-on.', type: 'goal' },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]
