// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'flemton',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/example, then set base to '/example/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 15,
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['my-portfolio', 'flemton.github.io', 'flemton', 'flemton/flemton'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'STG Triage',
          description:
            'Offline mobile triage app based on the Ghana Standard Treatment Guidelines with on-device matching, treatment suggestions, and source references.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://apps.apple.com/us/app/stg-triage/id6760623593',
        },
        {
          title: 'NMC CBT Practice Pro',
          description:
            'Private exam practice and computer-based testing app currently included as a featured portfolio project.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://apps.apple.com/us/app/nmc-cbt-practice-pro/id6756345733',
        },
        {
          title: 'Hormesis Elite',
          description:
            'Production mobile app for competitive paintball rankings, engagement, and live user workflows.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://apps.apple.com/gh/app/hormesis-elite/id6449320338',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Newton (Alhassan Osman)',
    description: 'Full-Stack & Mobile Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'newtongh',
    twitter: 'newtonf',
    facebook: 'newtonghf',
    instagram: '',
    youtube: 'flemton',
    dribbble: '',
    behance: '',
    medium: 'oalhassan847',
    stackoverflow: '17204311/newton',
    website: 'https://flemton.github.io/',
    phone: '+233554374251',
    email: 'oalhassan847@gmail.com',
  },
  resume: {
    fileUrl: 'Osman_ATS.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'React.js',
    'React Native',
    'Expo',
    'Node.js',
    'Firebase',
    'Google Cloud',
    'Python',
    'PostgreSQL',
    'MySQL',
    'Git',
    'REST APIs',
    'CSS',
  ],
  experiences: [
    {
      company: 'Gallimore Software',
      position: 'Full-Stack Developer',
      from: 'Oct 2022',
      to: 'Apr 2024',
      companyLink: 'https://gallimoresoftware.com',
    },
    {
      company: 'Upwork',
      position: 'Freelance Software Programmer',
      from: 'Jun 2021',
      to: 'Oct 2022',
      companyLink: 'https://upwork.com',
    },
    {
      company: 'Microverse',
      position: 'Mentor (Volunteer)',
      from: 'Jan 2023',
      to: 'Mar 2023',
      companyLink: 'https://www.microverse.org',
    },
  ],
  certifications: [
    {
      name: 'Microverse Software Development Program',
      body: 'Full-stack software development program covering collaborative product development and production-ready engineering practices.',
      year: '2023',
      link: 'https://www.microverse.org',
    },
    {
      name: "HarvardX: CS50's Introduction to Computer Science",
      body: 'Foundational computer science coursework covering problem solving, programming, and core software engineering concepts.',
      year: '2021',
      link: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
    },
    {
      name: 'Coursera: Introduction to Mobile Development',
      body: 'Mobile development fundamentals with a focus on app architecture, user experience, and practical implementation.',
      year: '',
      link: 'https://www.coursera.org',
    },
  ],
  educations: [
    {
      institution: 'University of Cape Coast',
      degree: 'Bachelor of Science in Computer Science',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Microverse',
      degree: 'Full-Stack Software Development Program',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'HarvardX',
      degree: "CS50's Introduction to Computer Science",
      from: '2021',
      to: '2021',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'oalhassan847', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],
    customTheme: {
      primary: '#2A72D4',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with ❤️ by Newton`,
  enablePWA: true,
};

export default CONFIG;
