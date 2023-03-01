import { StaticImageData } from 'next/image';

interface ICategoryMap {
  featured: 'Featured',
  sites: 'Website',
  interactive: 'Interactive',
  prototype: 'Prototype',
  dataViz: 'Data Visualization',
  react: 'React',
  vue: 'Vue.js',
}

export interface IProject {
  slug: string;
  categories: string[]; // TODO: Change to specific values of ICategoryMap
  title: string;
  subtitle: string;
  url?: string;
  features: string[];
  duration?: string;
  date: string;
  about: string[];
  images: StaticImageData[];
}


export const categoryMap: ICategoryMap = {
  featured: 'Featured',
  sites: 'Website',
  interactive: 'Interactive',
  prototype: 'Prototype',
  dataViz: 'Data Visualization',
  react: 'React',
  vue: 'Vue.js',
}

// Images
import welireg1 from './images/work/welireg/welireg1.webp';
import welireg2 from './images/work/welireg/welireg2.webp';
import welireg3 from './images/work/welireg/welireg3.webp';
import welireg4 from './images/work/welireg/welireg4.webp';

import uamap1 from './images/work/unite-america-maps/unite-maps1.webp';
import uamap2 from './images/work/unite-america-maps/unite-maps2.webp';
import uamap3 from './images/work/unite-america-maps/unite-maps3.webp';

import start2 from './images/work/spectrum-start/spectrum-start2.webp';
import start3 from './images/work/spectrum-start/spectrum-start3.webp';
import start4 from './images/work/spectrum-start/spectrum-start4.webp';
import start5 from './images/work/spectrum-start/spectrum-start5.webp';
import start6 from './images/work/spectrum-start/spectrum-start6.webp';
import start7 from './images/work/spectrum-start/spectrum-start7.webp';
import start8 from './images/work/spectrum-start/spectrum-start8.webp';

import msa1 from './images/work/caso-msa/msa1.webp';
import msa2 from './images/work/caso-msa/msa2.webp';
import msa3 from './images/work/caso-msa/msa3.webp';
import msa4 from './images/work/caso-msa/msa4.webp';
import msa5 from './images/work/caso-msa/msa5.webp';
import msa6 from './images/work/caso-msa/msa6.webp';

import tastyPic1 from './images/work/tastymade_desktop.jpg';
import tastyPic2 from './images/work/tastymade_desktop2.jpg';
import tastyPic3 from './images/work/tastymade_desktop3.jpg';
import tastyPic4 from './images/work/tastymade_mobile.jpg';

import ibill1 from './images/work/ibill/ibill1.webp';
import ibill2 from './images/work/ibill/ibill2.webp';
import ibill3 from './images/work/ibill/ibill3.webp';
import ibill4 from './images/work/ibill/ibill4.webp';

import sketchup1 from './images/work/sketchup_desktop1.jpg';
import sketchup2 from './images/work/sketchup_desktop2.jpg';
import sketchup3 from './images/work/sketchup_desktop3.jpg';

import techron1 from './images/work/techron_desktop1.jpg';
import techron2 from './images/work/techron_desktop2.jpg';
import techron3 from './images/work/techron_desktop3.jpg';
import techron4 from './images/work/techron_mobile1.jpg';

import guac1 from './images/work/guac_desktop1.jpg';
import guac2 from './images/work/guac_desktop2.jpg';
import guac3 from './images/work/guac_desktop3.jpg';

import riddle1 from './images/work/riddle/desktop1.jpg';
import riddle2 from './images/work/riddle/desktop2.jpg';
import riddle3 from './images/work/riddle/mobile1.jpg';
import riddle4 from './images/work/riddle/mobile2.jpg';

import imageGame1 from './images/work/image-prototype/image-game1.webp';
import imageGame2 from './images/work/image-prototype/image-game2.webp';
import imageGame3 from './images/work/image-prototype/image-game3.webp';

import pizzeria1 from './images/work/pizzeria_desktop1.jpg';
import pizzeria2 from './images/work/pizzeria_desktop2.jpg';
import pizzeria3 from './images/work/pizzeria_desktop3.jpg';
import pizzeria4 from './images/work/pizzeria_desktop4.jpg';

import care1 from './images/work/care-portal/login1.jpg';
import care2 from './images/work/care-portal/login2.jpg';
import care3 from './images/work/care-portal/doctor-patient-editing.jpg';
import care4 from './images/work/care-portal/doctor-patients.png';
import care5 from './images/work/care-portal/doctor-profile.jpg';

import yall1 from './images/work/yall_desktop1.jpg';
import yall2 from './images/work/yall_desktop2.jpg';

import trip1 from './images/work/trump_socialimage.png';



const projects: IProject[] = [

  {
    slug: 'welireg-hcp',
    categories: [categoryMap.featured, categoryMap.sites, categoryMap.react],
    title: 'Welireg HCP',
    subtitle: 'Merck',
    url: '//www.welireghcp.com',
    features: [
      'GatsbyJS',
      'React',
      'Data Visualization',
      'Regulated Site'
    ],
    duration: '4 weeks',
    date: '2022',
    about: [
      'This is a small drug-promotional site for the cancer drug Welireg, intended for doctors and other health-care providers. While working at the agency <a href="//www.designory.com/" target="_blank">Designory</a>, I led a small team of two other developers, and together we produced the site in about a month, including QA and regulatory review.',
      'The site was built using the framework Gatsby, which was used primarily for its static-site output, while allowing for a modern developer experience and component architecture. A couple interesting parts are the custom data visualization on the "Efficacy" page and the responsive "Mechanism of Action" graphic.',
      'And as this website is for a drug, the biggest challenge was accommodating the regulatory review process, both internal and external of the client. This resulted in requirements around how "non-branded" pages appear, and specifics for how the "Indication" and "Safety Information" panels behaved.'
    ],
    images: [
      welireg4,
      welireg1,
      welireg2,
      welireg3,
    ],
  },

  {
    slug: 'guac-hunter',
    categories: [categoryMap.featured, categoryMap.interactive],
    title: 'Guac Hunter',
    subtitle: 'Chipotle',
    url: 'https://guac-hunter-game.web.app',
    // url: 'https://guac-hunter-game.joedalton.io/',
    features: [
      'Vanilla JS',
      'Highly Interactive',
      'Progressive Web App',
      '3rd Party APIs',
    ],
    duration: '6 weeks',
    date: 'Fall 2015',
    about: [
      'This was a really fun app to build, and was designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, and built my me while employed there. It was a two week promotional game, where players spot the difference between two pictures. For three rounds, the player is challenged to find the difference between two images, tapping or clicking on the differences and trying to find all five, then they can submit their phone number to get a text message with a coupon for free chips and guacamole.',
      'The game was built with no JavaScript framework, as we were trying to keep it as lightweight and speedy as possible.  There are a lot of interactions and animations, which I had a lot of fun coming up with. But, as the game was designed to only be played in a landscape orientation, we ran into challenges with smaller phones, like the iPhone4. This led to the layout being a little different on very small phones, but also led me to make the game accessible as a <a href="//developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/">progressive web app</a>. So if a player was on their phone, and they saved the page to their homescreen, like a bookmark, it would launch with an experience similar to a native app.',
      'Overall, the game was a big success, with almost 2 million plays in the first week.'
    ],
    images: [
      guac1,
      guac2,
      guac3,
    ],
  },

  {
    slug: 'unite-america-maps',
    categories: [categoryMap.featured, categoryMap.interactive, categoryMap.dataViz],
    title: 'Interactive Maps',
    subtitle: 'Unite America',
    url: '//www.uniteamerica.org',
    features: [
      'Vanilla JS',
      'Interactive',
      'Google Sheets API',
    ],
    duration: '2 weeks',
    date: '2019',
    about: [
      'Essentiall a moveable "widget" that could be inserted anywhere within the newly designed and developed Unite America site, build using the Webflow platform. This was done as a subcontract for my friends at <a href="//www.shapemaker.co/" target="_blank">Shapemaker</a>, who designed and built the rest of the site.',
      'Because this had to be inserted into a Webflow site, there were a couple unique challenges. First, the code had to be able to be consumed by a third-party site, but developed in isolation, like a plugin. And further, the map had about six different versions that had to be able to configured, depending on what data needed to be shown. And second, the data had to come from a Google Sheet, that was essentially acting as a database.',
      'If viewing the live URL, the maps are present on the homepage, and then most of the Stategy pages.',
    ],
    images: [
      uamap1,
      uamap2,
      uamap3,
    ],
  },

  {
    slug: 'interactive-bill',
    categories: [categoryMap.interactive, categoryMap.prototype, categoryMap.dataViz],
    title: 'Interactive Bill',
    subtitle: 'Spectrum',
    features: [
      'Data Visualization',
      'Prototype',
      'Interactive'
    ],
    duration: '2 weeks',
    date: '2019',
    about: [
      'A redesign of the online billing experience for Spectrum customers. Previous to this, a customer\'s monthly bill was only viewable as a PDF file. This was an effort, with a cross-function team at <a href="//www.spectrum.net" target="_blank">Spectrum</a>, to modernize the bill, allowing it to be easier to consume digitally, while addressing common customer questions around cable-company billings, such as "What are these taxes", and "What changed from last month".'
    ],
    images: [
      ibill3,
      ibill1,
      ibill2,
      ibill4,
    ],
  },

  {
    slug: 'start',
    categories: [categoryMap.featured, categoryMap.interactive, categoryMap.vue],
    title: 'Start Onboarding',
    subtitle: 'Spectrum',
    url: 'https://spectrum-start.web.app',
    // url: 'https://spectrum-start.joedalton.io/',
    features: [
      'Vue.js',
      'GSAP',
      'Vuex',
    ],
    duration: '6 weeks',
    date: 'Fall 2017',
    about: [
      'A single-page onboarding wizard built to solve a specific problem for the company: How do we increase the frequency of new customers signing up for digital accounts? This was not a requirement for new accounts, but with millions of customers, encouraging and assisting online account adoption solved a lot of problems for the company: Easier bill pay, easier upgrades, more transparency into charges on the bill, and more.',
      'This project was an internal prototype, done at <a href="//www.spectrum.net" target="_blank">Spectrum</a>, and was the result of a cross-functional team effort, with UI, UX, copywriting, and developemnt (me) all on a focused team.',
    ],
    images: [
      start3,
      start2,
      start4,
      start5,
      start6,
      start7,
      start8,
    ],
  },

  {
    slug: 'tasty-made',
    categories: [categoryMap.sites, categoryMap.interactive],
    title: 'Tasty-Made',
    subtitle: 'Chipotle',
    features: [
      'GSAP',
      'React',
    ],
    duration: '2 weeks',
    date: 'Summer 2016',
    about: [
      'A single-page website built for a new Chipotle venture, Tasty-Made, as designed by <a href="http://www.sequence.com" target="_blank">Sequence</a>. The new shops ultimately failed, but the simple site featured an animated inforgraphic that expanded with the user\'s scroll, the store menu, and finally styled Google maps of each store location.',
    ],
    images: [
      tastyPic1,
      tastyPic2,
      tastyPic3,
      tastyPic4,
    ],
  },

  {
    slug: 'techron',
    categories: [categoryMap.featured, categoryMap.sites],
    title: 'Techron',
    subtitle: 'Chevron',
    url: '//www.techron.com',
    features: [
      'CSS Animation',
      'Social Share API',
      'HTML5 Video',
    ],
    duration: '3 weeks',
    date: 'Summer 2015',
    about: [
      'Designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, and something I built while employed there, this was a project that started as just a prototype complement our design deliverables, but Chevron was so satisfied with it that they asked us to produce the production site as well.',
      'There were three challenges with the site: Getting the video experiences to work across all devices; Using the browser\'s geolocation API to direct a button to a specific, regoinal, station-finder URL (which they ended up taking out); And allowing each individual video to be shared to social media, independent from the site.  While this was a simple site to build, these features made it a more fun experience, along with the little animations that they gave me some room to run with.'
    ],
    images: [
      techron1,
      techron2,
      techron3,
      techron4,
    ],
  },

  {
    slug: 'sketchup',
    categories: [categoryMap.featured, categoryMap.interactive],
    title: 'Team Page App',
    subtitle: 'Sketchup',
    url: 'https://portfolio-c3814.web.app/',
    // url: 'https://icebreaker-team.joedalton.io/',
    features: [
      'GSAP',
      'Heavy Interactions',
      'Easter Eggs',
    ],
    duration: '3 weeks',
    date: 'Summer 2016',
    about: [
      'This was a quick project that was intended to be used by the company SketchUp as their new "Team"/"About" page. They wanted to make something fun that could also be their first step toward a more lively design language. Their design team and I brainstormed for three days to conceptualize the product, then while building it we collaborated on the final design and interactions.',
      'The result is probably the most unique app I have built. On the surface it just looks like a webpage that has some parallax scroll effects, but anyone who plays with it will find an engaging and novel "employee sorter" that then leads to cards and a game about each employee. Then we added a couple easter-eggs, like an internal employee leaderboard, reflecting the different games played around their office.',
    ],
    images: [
      sketchup1,
      sketchup2,
      sketchup3,
    ],
  },

  {
    slug: 'riddle-a-day',
    categories: [categoryMap.interactive],
    title: 'Riddle-a-Day',
    subtitle: 'ShopHouse Kitchen',
    url: 'https://riddle-game.web.app',
    // url: 'https://shophouse-riddle.joedalton.io/',
    features: [
      'Angular.js (1.x)',
      'Game',
    ],
    duration: '4 weeks',
    date: 'Fall 2015',
    about: [
      'A five-day promotion that gave a free bowl of food, each day, in return for guessing a riddle correctly.',
      'This was a pretty simple app, but was fun to build, and was excellently designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>. The user would get three guesses at the daily riddle, then would get to enter their phone number and email to recieve a coupon for a free bowl of food. The promotion ran for five days, with a new riddle each day.',
      'The game was built with the AngularJS (1.x) framework. Interesting pieces included how the JavaScript determined the day, then would populate the language throughout the game accordingly, and working with a third-party API for the coupons. I think we could have done some more animations and made the game a little more visually fun, but it was short time-frame, was well recieved, everyone was happy the way it turned out.'
    ],
    images: [
      riddle1,
      riddle2,
      riddle3,
      riddle4,
    ],
  },

  {
    slug: 'pizzeria-locale',
    categories: [categoryMap.sites],
    title: 'Pizzeria Locale',
    subtitle: 'Chipotle',
    url: '//www.pizzerialocale.com',
    features: [
      'Website',
      'Parallax Scroll Animation',
      'Google Maps API',
    ],
    duration: '6 weeks',
    date: 'Spring 2016',
    about: [
      'Built as a site redesign and from scratch, the site leveraged heavy parallax scrolling effects on each page, some unique Google Maps styling, and also integrated with their custom CMS built on Ruby on Rails.',
      'Designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, the designer had some very specific ideas about how the scrolling experience should be on the homepage and Menu page, and together we refined the motion and feel. There is also a locations page that interacts with the Google Maps API, and required me to create some specific styles for the map to match our site design.',
    ],
    images: [
      pizzeria1,
      pizzeria2,
      pizzeria3,
      pizzeria4,
    ],
  },

  {
    slug: 'care-portal',
    categories: [categoryMap.prototype],
    title: 'Care Portal',
    subtitle: 'Private',
    url: 'https://careportal-73.web.app/',
    // url: 'https://care-portal-app.joedalton.io/',
    features: [
      'Angular.js (1.x)',
      'High-Fidelity Prototype',
      'CSS Animation',
      'Video',
    ],
    duration: '2 weeks',
    date: 'Spring 2015',
    about: [
      'A short but fun project, again at <a href="http://www.sequence.com" target="_blank">Sequence</a>, where I developed this high-fidelity prototype to complement our design deliverables, which detailed an experience to allow patients and their doctors to communicate easier by allowing users (either doctors or patients) to create profiles and their own network.',
      'Easily the highlight of the project was the animations that overlays the login screen\'s video, which can be seen using the link above. This was done completely with CSS, allowing the copy to be changed anytime. Other fun parts were making almost all the information editable, creating sliders and percentage bars from HTML, and a lot of little animations throughout the app that made it feel a bit more alive.',
    ],
    images: [
      care1,
      care2,
      care3,
      care4,
      care5,
    ],
  },

  {
    slug: 'msa-prototype',
    categories: [categoryMap.prototype, categoryMap.interactive, categoryMap.vue],
    title: 'MySpectrum Mobile Web Prototype',
    subtitle: 'Spectrum',
    url: 'https://msa-app-prototype.web.app/',
    // url: 'https://my-spectrum-prototype.joedalton.io/',
    features: [
      'Vue.js',
      'Animation',
      'Heavy Interaction',
    ],
    duration: 'Ongoing',
    date: '2018 - 2020',
    about: [
      'This was web app that was buit to mimic Spectrum\'s native mobile app, MySpectrum. It was built to enable easier user testing of new features of the app, as it was easier to instruct a tester to navigate to a URL in a browser, rather than download a beta app from an app store. It was very successful, and was used for years with both moderated and unmoderated testing.',
      'While this is a web app running that runs in a browser, the most interesting part was creating the same style page-transitions and interactions that are present within a native mobile app, so the experience could feel as authentic as possible.',
    ],
    images: [
      msa1,
      msa2,
      msa3,
      msa4,
      msa5,
      msa6,
    ],
  },

  // {
  //   slug: 'spectrum-net-prototype',
  //   categories: [categoryMap.prototype, categoryMap.interactive, categoryMap.vue],
  //   title: 'Spectrum.net Interal Prototype',
  //   subtitle: 'Spectrum',
  //   features: [
  //     'Vue.js',
  //     'Animation',
  //     'Heavy Interaction',
  //   ],
  //   duration: 'Ongoing',
  //   date: '2018 - 2020',
  //   about: [
  //     'This was a lightweight client app that was buit to mimic Spectrum\'s live Spectrum.net website. Its purpose enable easier user testing of new features on the site, while within a more modern and lightweight development environment than the production code. And to enable different account data, I created a simple user document database in Firebase, with an interface for creating new custom users, which could be needed depending on the type of testing needing to be done. For instance, a common design consideration was for customers who were "Past Due" on their account, and how to appropriately maintain messaging within new features. It was very successful, and was used for years with both moderated and unmoderated testing.',
  //   ],
  //   images: [
  //     tastyPic1,
  //   ],
  // },


  {
    slug: 'image-game-prototype',
    categories: [categoryMap.prototype, categoryMap.interactive, categoryMap.vue],
    title: 'Image Game Prototype',
    subtitle: 'Personal',
    url: 'https://image-game-prototype.web.app/',
    // url: 'https://image-game-prototype.joedalton.io/',
    features: [
      'Angular.js (1.x)',
      'Animation',
      'Game',
    ],
    duration: '2 days',
    date: '2016',
    about: [
      'A small app that was a proof-of-concept for what became Chipotle\'s Guac Hunter game. It was built over the weekend to demonstrate and test the feeling of the timer, failure and success states, and general layout.',
    ],
    images: [
      imageGame1,
      imageGame2,
      imageGame3,
    ],
  },

  {
    slug: 'yall',
    categories: [categoryMap.sites],
    title: 'Yall.co',
    subtitle: 'Yall Collective',
    features: [
      'Typography',
      'Scroll Animation',
      'Wordpress Custom Theme',
    ],
    duration: '4 weeks',
    date: 'Spring 2016',
    about: [
      'This is a site built for a friend in support of his passion project: Yall Collective. This friend, who grew up in the southern US and was living in New York City, felt that other southerners who had migrated North had some, not only interesting, but inspirational stories to tell about thier journey. So he interviewed these people and wrote their stories on this site.',
      'The site was designed by this friend (who is a designer), then was built in two stages: Since the site was planned to be built as a Wordpress theme, but had a desired launch date quicker than the theme could be finished, we had to a \'soft\' launch of a static site, then a few weeks later launch the full-featured Wordpress site after the theme was finished.',
    ],
    images: [
      yall1,
      yall2,
    ],
  },

  {
    slug: 'trip',
    categories: [categoryMap.interactive],
    title: 'Trip Trump',
    subtitle: 'Personal Project',
    features: [
      'CSS Animation',
      'Mobile Device Interaction',
      'Google Firebase',
    ],
    duration: '2 weeks',
    date: 'Summer 2016',
    about: [
      'Working with my awesome friend <a href="https://www.linkedin.com/in/theko" target="_blank">Ko</a>, we came up with a site that poked fun at Trump (before he actually became President), leaning into a tactical, physical, experience on a mobile phone.',
      'Mostly, we just tried to keep the page as simple as possible, but also incorporate a live, global trip-counter and let people share the page on social media.',
      'Technically, the site sits on Google\'s Firebase platform, which uses web sockets to make the trip-counter into a live scoreboard. There is very little JavaScript on the page, and the whole mobile experience of turning the phone and having President Trump fall over is driven by just CSS.'
    ],
    images: [
      trip1,
    ],
  },
];


export default projects;