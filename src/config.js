module.exports = {
  siteTitle: 'Edwin Gichuhi | Software Engineer',
  siteDescription:
    'Edwin Gichuhi is a software engineer based in Nairobi, Kenya who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Edwin Gichuhi, Edwin, Gichuhi, egichuhi, software engineer, front-end engineer, web developer, javascript, nairobi',
  siteUrl: 'https://edwingichuhi.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-175568822-1',
  googleVerification: 'Mn3T7hh3I_adTgNsrA-qA0HjzF9JTXfggIt-uJvarFQ',
  name: 'Edwin Gichuhi',
  location: 'Nairobi, Kenya',
  email: 'edwingichuhis@gmail.com',
  github: 'https://github.com/egichuhis',
  twitterHandle: '@egichuhis',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/egichuhis',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/edwin-gichuhi',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/egichuhis',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
