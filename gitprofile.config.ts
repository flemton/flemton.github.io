// gitprofile.config.ts

const CONFIG = {
  github: {
<<<<<<< HEAD:gitprofile.config.js
    username: 'flemton', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 15, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['my-portfolio', 'flemton.github.io', 'flemton'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
=======
    username: 'arifszn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/example, then set base to '/example/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
>>>>>>> Migrate to TypeScript:gitprofile.config.ts
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'newtongh',
    twitter: 'newt0nghf',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
<<<<<<< HEAD:gitprofile.config.js
    medium: 'oalhassan847',
    stackoverflow: '17204311/newton', // example: '1/jeff-atwood'
    website: 'https://flemton.github.io/',
    phone: '+233554374251',
    email: 'oalhassan847@gmail.com',
=======
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',
    email: 'arifulalamszn@gmail.com',
>>>>>>> Migrate to TypeScript:gitprofile.config.ts
  },
  resume: {
    fileUrl:
      'https://drive.usercontent.google.com/download?id=1xCBIC1fRW-NWWpIBd64uhqDoI4b_Int0&export=download&authuser=0&confirm=t&uuid=5b948354-6a84-4c13-a4ec-ee653d5a8ddb&at=APZUnTVLkAFnUc7agnJRn5V5U6Rm:1704248631909', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Ruby',
    'React.js',
    'Node.js',
    'Ruby on Rails',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Redux.js',
    'CSS',
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
<<<<<<< HEAD:gitprofile.config.js
      name: 'Microverse Ruby on Rails Module',
      body: 'This demonstrates mastery of Ruby on Rails by building multiple real-world Rails applications alongside software developers from all over the world',
      year: 'December 2023',
      link: 'https://www.credential.net/d5fa78eb-5d2c-4233-adb7-1cd2d87d7452'
    },
    {
      name: 'Microverse Ruby/Databases Module',
      body: 'This demonstrates thorough and complete understanding of Ruby and databases by building multiple projects while collaborating and pair programming remotely with developers across the world.',
      year: 'July 2023',
      link: 'https://www.credential.net/91ebe6e5-c5f5-40de-80e5-7ca11778964f'
    },
  ],
  education: [
=======
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
>>>>>>> Migrate to TypeScript:gitprofile.config.ts
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
<<<<<<< HEAD:gitprofile.config.js

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    /*{
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },*/
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /*blog: {
    source: 'medium', // medium | dev
    username: 'newtongh', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },*/
=======
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
>>>>>>> Migrate to TypeScript:gitprofile.config.ts
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
