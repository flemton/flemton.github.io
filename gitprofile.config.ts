// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'flemton',
    sortBy: 'stars',
    limit: 15,
    exclude: {
      forks: false,
      projects: ['my-portfolio', 'flemton.github.io', 'flemton'],
    },
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 15,
        exclude: {
          forks: false,
          projects: ['my-portfolio', 'flemton.github.io', 'flemton'],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Newton (Alhassan Osman)',
    description: 'Full-Stack & Mobile Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'newtongh',
    twitter: 'newt0nghf',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: 'oalhassan847',
    dev: '',
    stackoverflow: '17204311/newton',
    skype: '',
    telegram: '',
    website: 'https://flemton.github.io/',
    phone: '+233554374251',
    email: 'oalhassan847@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.usercontent.google.com/download?id=1xCBIC1fRW-NWWpIBd64uhqDoI4b_Int0&export=download&authuser=0&confirm=t&uuid=5b948354-6a84-4c13-a4ec-ee653d5a8ddb&at=APZUnTVLkAFnUc7agnJRn5V5U6Rm:1704248631909',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Node.js',
    'Ruby',
    'Ruby on Rails',
    'Python',
    'Firebase',
    'PostgreSQL',
    'Git',
    'Expo',
  ],
  experiences: [
    {
      company: 'Gallimore Software',
      position: 'Full Stack Developer',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://gallimoresoftware.com',
    },
    {
      company: 'Upwork',
      position: 'Remote Software Developer',
      from: 'June 2021',
      to: 'October 2022',
      companyLink: 'https://upwork.com',
    },
  ],
  certifications: [
    {
      name: 'Microverse Ruby on Rails Module',
      body: 'Mastery of Ruby on Rails by building multiple real-world Rails applications alongside developers worldwide',
      year: 'December 2023',
      link: 'https://www.credential.net/d5fa78eb-5d2c-4233-adb7-1cd2d87d7452'
    },
    {
      name: 'Microverse Ruby/Databases Module',
      body: 'Thorough understanding of Ruby and databases by building multiple projects while pair programming remotely',
      year: 'July 2023',
      link: 'https://www.credential.net/91ebe6e5-c5f5-40de-80e5-7ca11778964f'
    },
  ],
  education: [
    {
      institution: 'Microverse',
      degree: 'Full Stack Development',
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
  externalProjects: [],
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
