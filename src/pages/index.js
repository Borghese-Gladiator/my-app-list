import React, { useEffect, useState } from "react";

// package to add meta
import { Helmet } from "react-helmet";

// CUSTOM
import Loading from '../components/Loading';
import Card from '../components/Card';
import SortButton from '../components/SortButton';

// PAGE STYLING
import '../styles/index.css';

// IMAGE ASSETS
import ToDoImg from '../images/todo_list_notebook_coffee.jpg';
import MERNImg from '../images/mern-logos.png';
// import FlaskTutorialImg from '../images/Screenshot 2021-01-19 051837.png';
import PWAImg from '../images/pwa_app.png';
import HTMLCSSJSImg from '../images/htmlCssJS-1140x515.jpg'
import ECommerceLogoImg from '../images/e-commerce-logo.jpg';
import ErrorReactImg from '../images/error_handling_react.jpg';
import ReactConcurrentImg from '../images/react-concurrent-img.jpeg'
import TensorflowKerasLogoImg from '../images/tensorflow-keras-logo.png';
import TwoFAImg from '../images/2fa_shutterstock_image.jpg';
import VueLogoImg from '../images/logo-vuejs-min.png';
import React360Img from '../images/react-360-logo.png';
import GoogleDocsImg from '../images/120618_GoogleDocs-Blog.png';
import MusicPlayerImg from '../images/VectorPortal-Winged-Music-Icon.jpg';
import TensorTradeImg from '../images/tensortrade_algorithm.png';
import CoinMarketCapImg from '../images/coinmarketcap_logo.png';
import BouncingBallImg from '../images/Bouncing_Ball_Game.png';
import ViteLogoImg from '../images/what-is-vue-vite.jpeg';
import SnowpackLogoImg from '../images/snowpack_logo.jpg';
import GoogleCloneImg from '../images/Google_Homepage_Clone_Screenshot.png';
import NextJSImg from '../images/nextjs.png';
import WebRTCLogoImg from '../images/0370-01_webrtc_logo_thumbnail.png';
import MusicVisualizationImg from '../images/music-visualization.jpg';
import InfiniteScrollImg from '../images/infinite-scroll-shift.png';
import OnionLogoImg from '../images/the-onion-logo.jpg';
import DoczLogoImg from '../images/docz_logo.png';
import NetlifyCMSLogoImg from '../images/post-netlifycms-1200x630.jpg';
import PWALogoImg from '../images/pwa_logo.png';
import NoteTakingImg from '../images/note-taking-1400x1050.png';
import SocketIOImg from '../images/socket-io.png';
import MicrophoneSpeakImg from '../images/microphone-speak.png';
import OpenCVLogoImg from '../images/opencv_logo.jpg';
import DLibThumbnailImg from '../images/dlib_article_thumbnail.jpg';
import GitHubActionsDockerLogoImg from '../images/docker_github_actions.png';
import IotaLogoImg from '../images/iota-logo.jpg';
import VercelLogoImg from '../images/vercel-inc-logo-vector.png';
import OpenAPILogoImg from '../images/openapi-whats-new.png';
import CompleteReactTutorialImg from '../images/the-complete-react-tutorial-2021.png';
import ContactsStockImage from '../images/contacts-SpecPage-1024x496.jpg';
import SpamClassifierImage from '../images/spam_classifier.png';
import ChromeExtensionImage from '../images/chrome_extension_image.jpeg';
import PersonWalkingImage from '../images/person_walking_acceloremeter_signal.png';
import ReduxLogoImage from '../images/redux_logo.png';
import AutomateBoringStuffPythonImg from '../images/automate_the_boring_stuff_book_cover.jpg';
import NLTKLogoImage from '../images/nltk_logo.png';
import DiscordLogoImage from '../images/Discord-Logo.png';
import GCPLogoImage from '../images/Google-Cloud-Platform-900x400-1.jpg';
import GenieLogoImage from '../images/genie.png';
import ValorantLogoImage from '../images/valorant_logo.png';
import OtakuListImage from '../images/otaku_list_image.jpg';
import RedisLogoImage from '../images/Redis-Logo.png';
import ResumeComputerIconImage from '../images/computer-icons-resume-blue-text.png';
import MicroFrontendImage from '../images/Micro_Frontends.png';
import ReactQueryIconImage from '../images/react-query.png';
import EthereumLogoImage from '../images/ethereum-logo-portrait-black-gray.png';
import CreaticlesLogoImage from '../images/creaticles-logo-w-name.png';
import DockerPostgresPgAdminImage from '../images/docker_postgres_pgadmin.png';
import AngularTourOfHeroesImage from '../images/angular_tour_of_heroes.jpg';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// custom styles
const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
}
const sortContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
}
const smartShadowStyles = {
  textShadow: '0 -0.5rem 0.5rem #901a00, 0 0.5rem 1rem #999'
}

function formatDateCreated(date) {
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${da} ${mo} ${ye}`;
}

function formatDateUpdated(date) {
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${da} ${mo} ${ye}`;
}

// data
const apps = [
  {
    link: 'https://mdn-todo-react.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/todo-react',
    thumbnail: ToDoImg,
    title: 'MDN React To Do List',
    description: "Followed MDN's React To Do List tutorial to create a list of to do items with editing & filtering.",
    keywords: ["Netlify", "React", "Filter"],
    date: '16 January 2021',
    dateCreated: new Date(2021, 0, 16),
    dateLastUpdated: new Date(2021, 0, 16)
  },
  {
    link: 'https://mern-app-template-000.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/mern-material-demo',
    thumbnail: MERNImg,
    title: 'MERN App Template',
    description: `Forked mern-material-demo - rewrote to deploy to Heroku (build ES6 backend & build React frontend), rewrote signin/signup pages, added mobile support, upgraded package versions: Babel (5.x ⟶ 7.x), Material UI (3.x ⟶ 4.x), React Router (4.x ⟶ 5.x)`,
    keywords: ["Heroku", "Node.js", "React"],
    date: '18 January 2021',
    dateCreated: new Date(2021, 0, 18),
    dateLastUpdated: new Date(2021, 0, 18)
  },
  {
    link: 'https://cool-components.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/Cool-Components',
    thumbnail: HTMLCSSJSImg,
    title: 'Cool Components',
    description: "Track and Experiment with cool components from blog posts (made with just HTML + CSS). eg: Particle Smoke Animation, Tag Cloud, Play/Pause Animations",
    keywords: ["Netlify", "React", "CSS3", "Media Queries"],
    date: '20 January 2021',
    dateCreated: new Date(2021, 0, 20),
    dateLastUpdated: new Date(2021, 0, 20)
  },
  {
    link: 'https://tutorial-pushercoins.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/pushercoins',
    thumbnail: PWAImg,
    title: 'React Realtime PWA',
    description: "Progressive Web App (PWA) with lighthouse audit & bundle analyzer scripts. React UI to track cryptocurrency prices with Pusher in realtime",
    keywords: ["Heroku", "PWA", "React", "Lighthouse Audit", "Pusher (API)"],
    date: '23 January 2021',
    dateCreated: new Date(2021, 0, 23),
    dateLastUpdated: new Date(2021, 0, 23)
  },
  {
    link: 'https://react-shopping-cart-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-shopping-cart',
    thumbnail: ECommerceLogoImg,
    title: 'React Shopping Cart',
    description: "Forked React Typescript & learned to deploy TypeScript apps (same method except tsconfig.json).",
    keywords: ["Netlify", "React", "TypeScript"],
    date: '24 January 2021',
    dateCreated: new Date(2021, 0, 24),
    dateLastUpdated: new Date(2021, 0, 24)
  },
  {
    link: 'https://react-error-boundary-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-error-boundaries',
    thumbnail: ErrorReactImg,
    title: 'React Error Boundaries',
    description: "Tried out error boundaries with code from official React docs (& Dan Abramov's codepen) and added a custom reload component.",
    keywords: ["Netlify", "React", "React Error Boundaries"],
    date: '25 January 2021',
    dateCreated: new Date(2021, 0, 25),
    dateLastUpdated: new Date(2021, 0, 25)
  },
  {
    link: 'https://react-concurrent-example-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-concurrent-example',
    thumbnail: ReactConcurrentImg,
    title: 'React Concurrent Mode',
    description: "Used React.lazy() and Suspense to lazy load components. Used React error boundaries to catch if loading failed.",
    keywords: ["Netlify", "React", "React Lazy"],
    date: '25 January 2021',
    dateCreated: new Date(2021, 0, 25),
    dateLastUpdated: new Date(2021, 0, 25)
  },
  {
    link: 'https://simple-keras-rest-api.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/simple-keras-rest-api',
    thumbnail: TensorflowKerasLogoImg,
    title: 'Keras REST API',
    description: "Forked example & rewrote to work on Heroku. Flask app exposes pre-trained Keras model for image classification to API requests (given image - returns labels classifying the image)",
    keywords: ["Herokou", "Flask", "Keras"],
    date: '26 January 2021',
    dateCreated: new Date(2021, 0, 26),
    dateLastUpdated: new Date(2021, 0, 26)
  },
  {
    link: 'https://two-fa-speakeasy-example.herokuapp.com/api',
    github_link: 'https://github.com/Borghese-Gladiator/2fa-speakeasy-example',
    thumbnail: TwoFAImg,
    title: 'Implement 2FA',
    description: "Forked LogRocket example & rewrote to work on Heroku. Node.js app that authenticates registered users with 2FA app like Google Authenticator (uses JSON file rather than proper database)",
    keywords: ["Heroku", "Node.js", "Speakeasy"],
    date: '27 January 2021',
    dateCreated: new Date(2021, 0, 27),
    dateLastUpdated: new Date(2021, 0, 27)
  },
  {
    link: 'https://first-vue-app-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-vue-app',
    thumbnail: VueLogoImg,
    title: 'First Vue.js App',
    description: "Used @vue/cli to generate Vue project & push to netlify. Note that vue-cli (2.X) does not build with index.html & doesn't deploy correctly!",
    keywords: ["Netlify", "Vue.js"],
    date: '27 January 2021',
    dateCreated: new Date(2021, 0, 27),
    dateLastUpdated: new Date(2021, 0, 27)
  },
  {
    link: 'https://first-react-360-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-react-360',
    thumbnail: React360Img,
    title: 'First React 360 App',
    description: "I fixed build node v12.11.0 vs v12.10.0 issue and deployed to Netlify a sample VR project with React. React 360 creates VR framework for the creation of interactive 360 experiences that run in your web browser.",
    keywords: ["Netlify", "React 360 (VR)"],
    date: '28 January 2021',
    dateCreated: new Date(2021, 0, 28),
    dateLastUpdated: new Date(2021, 0, 28)
  },
  {
    link: 'https://google-doc-editor-clone.netlify.app/editor.html',
    github_link: 'https://github.com/Borghese-Gladiator/GEditor',
    thumbnail: GoogleDocsImg,
    title: 'Google Doc Clone',
    description: "I forked & learned how to dynamically apply CSS onto text and div elements with JavaScript. HTML, CSS, and JavaScript for frontend and I also set up a Firebase backend for this app to store.",
    keywords: ["Netlify", "HTML/CSS/JS", "Firebase"],
    date: '5 February 2021',
    dateCreated: new Date(2021, 1, 5),
    dateLastUpdated: new Date(2021, 1, 5)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/python-mp3-player',
    thumbnail: MusicPlayerImg,
    title: 'Python MP3 Player - Windows app',
    description: "I wrote a Python desktop with tkinter for GUI & pygame to manage audio commands & cx_Freeze to create the MSI installer. Since it's a desktop app, there is no online demo.",
    keywords: ["Python", "tkinter", "pygame", "cx_Freeze"],
    date: '6 February 2021',
    dateCreated: new Date(2021, 1, 6),
    dateLastUpdated: new Date(2021, 1, 6)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/simple-sine-curve/tree/main',
    thumbnail: TensorTradeImg,
    title: 'TensorTrade - Reinforcement Learning Trading Algorithm',
    description: "Forked tutorial & used Docker to build/run TensorTrade script - script used Ray with TensorTrade (TT) in order to create a profitable algorithm on a predictable sine curve. No online demo included",
    keywords: ["Python", "TensorTrade", "Docker"],
    date: '7 February 2021',
    dateCreated: new Date(2021, 1, 7),
    dateLastUpdated: new Date(2021, 1, 7)
  },
  {
    link: 'https://streamlit-crypto-price.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/streamlit_freecodecamp',
    thumbnail: CoinMarketCapImg,
    title: 'Current Crypto Price with Streamlit',
    description: "Streamlit enables to quickly build a Python web UI (as opposed to Flask which needs templates). Uses Beautiful Soup to scrape https://coinmarketcap.com and load into Pandas dataframe. Streamlit UI that applies filters on dataframe (Streamlit also enables downloading).",
    keywords: ["Python", "Streamlit", "BeautifulSoup", "Pandas"],
    date: '8 February 2021',
    dateCreated: new Date(2021, 1, 8),
    dateLastUpdated: new Date(2021, 1, 8)
  },
  {
    link: 'https://phaser-bouncing-ball.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/phaser-bouncing-ball',
    thumbnail: BouncingBallImg,
    title: 'Phaser3 Bouncing Ball Game',
    description: "The Phaser3 physics engine is super great to use to create browser games and works smoothly when deploying since it's just JavaScript. Followed tutorial & fixed up some code, but Phaser3 works very smoothly.",
    keywords: ["Phaser3", "JavaScript"],
    date: '12 February 2021',
    dateCreated: new Date(2021, 1, 12),
    dateLastUpdated: new Date(2021, 1, 12)
  },
  {
    link: 'https://first-vite-project.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-vite-project',
    thumbnail: ViteLogoImg,
    title: 'First Vite App',
    description: "Vite is a frontend build tool, a replacement for Webpack. Vite has seamless integration with Vue and has SUPER fast HMR (Hot Module Replacement), especially when compared with webpack or webpack-dev-server (uses native ES modules to get this speed). Deploying to Netlify was super easy and required no extra steps.",
    keywords: ["Netlify", "Vue.js", "Vite"],
    date: '13 February 2021',
    dateCreated: new Date(2021, 1, 13),
    dateLastUpdated: new Date(2021, 1, 13)
  },
  {
    link: 'https://first-snowpack-app.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-snowpack-app',
    thumbnail: SnowpackLogoImg,
    title: 'First Snowpack App',
    description: "Snowpack is a frontend build tool, replacement for Webpack. AMAZING number of templates available at https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/cli and wider support than Vite with community templates as well.",
    keywords: ["Netlify", "Vue.js", "Snowpack"],
    date: '13 February 2021',
    dateCreated: new Date(2021, 1, 13),
    dateLastUpdated: new Date(2021, 1, 13)
  },
  {
    link: 'https://google-homepage-clone-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/google-homepage-clone',
    thumbnail: GoogleCloneImg,
    title: 'Google Homepage Clone',
    description: "Used HTML Templates, CSS Selectors, Vanilla JS, and Font Awesome 4 (from Bootstrap CDN) to reimplement the Google Homepage. Did this practice to brush up on basics as suggested by tutorial site shown on GitHub.",
    keywords: ["Netlify", "<template>", "HTML/CSS/JS", "Bootstrap", "Font Awesome 4"],
    date: '14 February 2021',
    dateCreated: new Date(2021, 1, 14),
    dateLastUpdated: new Date(2021, 1, 14)
  },
  {
    link: 'https://first-nextjs-app-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-nextjs-blog',
    thumbnail: NextJSImg,
    title: 'First NextJS App',
    description: "NextJS is a React framework with page-based routing, pre-rendering, SSG, SSR, and API endpoints (https://nextjs.org/learn/basics/create-nextjs-app). Since React is just a library, you need to bundle with webpack and transform with Babel, so NextJS standardizes solutions to those problems as a framework. FURTHERMORE, deploying to Netlify was not hard, though documentation was kind of lacking since official docs did not work.",
    keywords: ["Netlify", "Next.js"],
    date: '16 February 2021',
    dateCreated: new Date(2021, 1, 16),
    dateLastUpdated: new Date(2021, 1, 16)
  },
  {
    link: 'https://webrtc-video-call-0791.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/videoChat-WebFrontend',
    thumbnail: WebRTCLogoImg,
    title: 'WebRTC Peer-to-Peer Video',
    description: "Forked tutorial and cemented WebRTC signal RTCPeerConnection understanding and how two users can agree to call. Added ICE Candidate Trickling with Xirsys, TURN server cloud provider.",
    keywords: ["Heroku", "WebRTC", "Xirsys"],
    date: '18 February 2021',
    dateCreated: new Date(2021, 1, 18),
    dateLastUpdated: new Date(2021, 1, 18)
  },
  {
    link: 'https://music-list-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/music-list',
    thumbnail: MusicVisualizationImg,
    title: 'Custom Music Lists',
    description: "Wrote from scratch list of song lists. Wrote custom InlineEdit titles, DropdownMenu delete function, ToDo items added on enter, Upload song lists from text file, and Download song lists as a text file. Used useLocalStorage hook to prevent sync issues & save to cache. Updated to Masonry layout with CSS media queries & grid-columns.",
    keywords: ["Netlify", "React", "Masonry Layout w/ CSS Media Queries"],
    date: '23 February 2021',
    dateCreated: new Date(2021, 1, 23),
    dateLastUpdated: new Date(2021, 1, 28)
  },
  {
    link: 'https://react-infinite-scroll-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-infinite-scroll',
    thumbnail: InfiniteScrollImg,
    title: 'React Infinite Scroll',
    description: "Followed four different tutorials to figure out React Infinite Scroll best practices. In general, make sure you lazy load your images or there will serious performance issues and loading icons make it feel like loadtime is longer.",
    keywords: ["Netlify", "React"],
    date: '25 February 2021',
    dateCreated: new Date(2021, 1, 23),
    dateLastUpdated: new Date(2021, 1, 25)
  },
  {
    link: 'https://django-news-aggregator-0791.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/django-news-aggregator',
    thumbnail: OnionLogoImg,
    title: 'Django News Aggregator',
    description: "Followed tutorial for simple news aggregator. Scrapes Onion website with BeautifulSoup4 and displays with Django HTML template. I configured and deployed the Django to Heroku (first time!).",
    keywords: ["Heroku", "Django", "BeautifulSoup4"],
    date: '2 March 2021',
    dateCreated: new Date(2021, 2, 2),
    dateLastUpdated: new Date(2021, 2, 2)
  },
  {
    link: 'https://docz-mdx-documentation.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-docz-site',
    thumbnail: DoczLogoImg,
    title: 'First Docz Documentation Site',
    description: "Docz simplifies writing documentation sites for your React components - it makes a route at each MDX file (MDX enables rendering a React component in markdown files). Learned about Docz from article in GitHub README and works well! (npx create-docz-app and start editing MDX files)",
    keywords: ["Netlify", "React", "Docz (MDX)"],
    date: '3 March 2021',
    dateCreated: new Date(2021, 2, 3),
    dateLastUpdated: new Date(2021, 2, 3)
  },
  {
    link: 'https://first-gatsby-headless-cms.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/netlify-cms-gatsby-1',
    thumbnail: NetlifyCMSLogoImg,
    title: 'Headless Netlify CMS + GatsbyJS',
    description: "Initialized Gatsby blog site and added Headless CMS, so users are able to create markdown files through a Netlify UI at the /admin route. Used tutorial to add gatsby/netlify plugins and adjust change createPost schema to have tags property: https://blog.bitsrc.io/use-netlify-cms-with-gatsby-blogs-8bb73ab2e0cf ",
    keywords: ["Netlify", "GatsbyJS", "Netlify Headless CMS"],
    date: '6 March 2021',
    dateCreated: new Date(2021, 2, 6),
    dateLastUpdated: new Date(2021, 2, 6)
  },
  {
    link: 'https://pwa-react-weight-converter.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/pwa-react-weight-converter',
    thumbnail: PWALogoImg,
    title: 'First PWA (React)',
    description: "Built weight converter app by using HTML/CSS/Vanilla JS code from tutorial in GitHub repo link and putting into create-react-app React template.",
    keywords: ["Netlify", "PWA", "React"],
    date: '8 March 2021',
    dateCreated: new Date(2021, 2, 8),
    dateLastUpdated: new Date(2021, 2, 8)
  },
  {
    link: 'https://contact-list-notes.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/contact-notes-list',
    thumbnail: NoteTakingImg,
    title: 'Custom Contact Notes',
    description: "Built off of Custom Music Lists + Bootstrap 4 styling - also store dates for every conversation (each time new item is created). Can save them as text files & send them to myself on Discord to get cloud storage - though version problems.",
    keywords: ["Netlify", "React", "Bootstrap 4", "File Blobs (Upload)"],
    date: '10 March 2021',
    dateCreated: new Date(2021, 2, 8),
    dateLastUpdated: new Date(2021, 2, 8)
  },
  {
    link: 'https://nextjs-nodejs-chatroom.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/nextjs-nodejs-chatroom',
    thumbnail: SocketIOImg,
    title: 'Next.js + Node.js + SocketIO Chatroom',
    description: "Chatroom showing connected users and chat from those users. Built using multiple tutorials described in README.md. Deployed Next.js frontend to Netlify and Node.js backend to Heroku. Connected server SocketIO to client with SocketIO-Client.",
    keywords: ["Heroku", "Netlify", "Node.js", "SocketIO", "Next.js"],
    date: '12 March 2021',
    dateCreated: new Date(2021, 2, 12),
    dateLastUpdated: new Date(2021, 2, 12)
  },

  {
    link: 'https://react-speech-recognition.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-react-speech-recognition',
    thumbnail: MicrophoneSpeakImg,
    title: 'React Speech Recognition',
    description: "Used hook from react-speech-recognition library to convert speech to text in the browser (which uses the broweser's Web Speech API). Built off of LogRocket Blog tutorial listed in README.md",
    keywords: ["Netlify", "React", "react-speech-recognition (Web Speech API)"],
    date: '13 March 2021',
    dateCreated: new Date(2021, 2, 13),
    dateLastUpdated: new Date(2021, 2, 13)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/python-qr-code-reader',
    thumbnail: OpenCVLogoImg,
    title: 'OpenCV + pyzbar QR Code Reader',
    description: "(No Demo - did not write Flask webapp) Followed tutorial code to build QR Code Reader. Every second, OpenCV passes the camera frame to pyzbar which scans for a QR Code.",
    keywords: ["Python", "OpenCV", "pyzbar"],
    date: '26 March 2021',
    dateCreated: new Date(2021, 2, 26),
    dateLastUpdated: new Date(2021, 2, 26)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/python-face-recognizer',
    thumbnail: DLibThumbnailImg,
    title: 'First Face Recognition',
    description: "(No Demo - did not write Flask webapp) Followed tutorial code to use face-recognition library & OpenCV to label faces shown by the camera livefeed given one image to train on.",
    keywords: ["Python", "OpenCV", "face-recognition"],
    date: '26 March 2021',
    dateCreated: new Date(2021, 2, 26),
    dateLastUpdated: new Date(2021, 2, 26)
  },
  {
    link: 'https://first-yarn-typescript.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/first-yarn-typescript',
    thumbnail: GitHubActionsDockerLogoImg,
    title: 'Yarn + TypeScript (Built with Docker)',
    description: "Followed tutorial to divide into Yarn packages: common, app, and server - React frontend in app & Express backend in server. Transpiled TypeScript with ESBuild. Used GitHub Actions + Dockerfile to automatatically push to container registry in GitHub Packages & automatically deploy to Heroku using GitHub Action in Marketplace.",
    keywords: ["Heroku", "Yarn", "Typescript", "Docker", "React", "Node.js (Express)"],
    date: '27 March 2021',
    dateCreated: new Date(2021, 2, 27),
    dateLastUpdated: new Date(2021, 2, 27)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/first-iota-node',
    thumbnail: IotaLogoImg,
    title: 'First IOTA Node',
    description: "Followed tutorial and sent my first transaction (\"hello world\") to an IOTA node in the Tangle. IOTA is a third generation cryptocurrency uses a DAG (the Tangle) and has no blockchain/miners. To do this, every issuer for a transaction must authenticate two other transactions.",
    keywords: ["IOTA (3rd gen crypto)"],
    date: '31 March 2021',
    dateCreated: new Date(2021, 2, 31),
    dateLastUpdated: new Date(2021, 2, 31)
  },
  {
    link: 'https://first-next-auth-nnb1gm76v-borghese-gladiator.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-next-auth',
    thumbnail: VercelLogoImg,
    title: 'Next-Auth Login on Vercel',
    description: "Forked Next-Auth example and learned to use Next-Auth through Providers. You can easily customize your login needs by adding Providers (eg: Google, GitHub, etc.) as needed in api/[...nextauth.js]. Unlike Netlify, Vercel exposes Node.js functions in the API folder as serverless functions, so simple frontend apps can use a basic backend easily where I could expose the JWT & session info as API calls. Vercel's dashboard matches Netlify in ease to use and also sets up Continuous Deployment with my GitHub repo.",
    keywords: ["Vercel", "Next.js"],
    date: '7 April 2021',
    dateCreated: new Date(2021, 3, 7),
    dateLastUpdated: new Date(2021, 3, 7)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/express-open-api',
    thumbnail: OpenAPILogoImg,
    title: 'First OpenAPI (formerly Swagger)',
    description: "Forked express-open-api after reading article in GitHub README. APIs require frequent updates to code and then documentation and then tests. With an API standardization (like OpenAPI/Swagger), client SDKs, tests, mock servers, and documentation can be auto generated from specifications like seen in the screenshots of the GitHub README (no demo since rather than an app, it's documentation + testing automation).",
    keywords: ["Node.js", "OpenAPI"],
    date: '7 April 2021',
    dateCreated: new Date(2021, 3, 7),
    dateLastUpdated: new Date(2021, 3, 7)
  },
  {
    link: 'https://quirky-edison-90fc05.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-tutorial-refresher',
    thumbnail: CompleteReactTutorialImg,
    title: 'React Tutorial Refresher',
    description: "Yesterday, I presented for 320 college class and did not do a good job conveying React and how to use it. Used tutorial from freecodecamp (linked in GitHub README) to refresh knowledge. Super clean code to present data with TodoList, DeleteTodo, and AddTodo where setState was passed to child components to mutate data. Also used inputRef to clean input after submit. Did another tutorial in this repo to learn Progressive && Responsive Video Loading in React. Used VLC Media Player to create thumbnails and generate 480p && 720p versions of original MP4 video.",
    keywords: ["Netlify", "React", "VLC Media Player"],
    date: '14 April 2021',
    dateCreated: new Date(2021, 3, 14),
    dateLastUpdated: new Date(2021, 3, 14)
  },
  {
    link: 'https://www.udemy.com/course/automate/',
    github_link: 'https://github.com/Borghese-Gladiator/notebook-compilation/tree/master/automating_the_boring_stuff',
    thumbnail: AutomateBoringStuffPythonImg,
    title: 'Udemy - Automate the Boring Stuff',
    description: "Free Udemy Python course offer. (10 Regex) - used VERBOSE mode to write phone number and email Regex with comments. (11 Files) - used shelve for persistent Python object storage, shutil for deleting, and os for walking directory trees. (12 Debugging) -  Python assertions, logging library to control number of logs with mode. (13 Web Scraping) - requests, beautifulsoup4, and selenium methods. (14 - Excel/Word/PDF) -Automatically read/edit Excel, Word, PDFs. (15 - Email) - Send emails with SMTP & read inbox with IMAP. (16 - GUI Automation) - Used PyAutoGUI to automate mouse, keyboard, and screenshots - tried out playing SushiGoRound w/ script.",
    keywords: ["Python", "openpyxl / PyPDF2 / docx", "smtplib / imapclient", "pyautogui"],
    date: '12 May 2021',
    dateCreated: new Date(2021, 3, 15),
    dateLastUpdated: new Date(2021, 4, 12)
  },
  {
    link: 'https://contact-manager.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/contact-manager',
    thumbnail: ContactsStockImage,
    title: 'Next.js Custom Contact List',
    description: "Utility to track when I talked to people and take notes on it. Wrote this since CRM tools were overboard and I couldn't find a small utility. Used custom CSS for all components - Sidebar, LazyBackgroundImage, AbsoluteDropdownMenu, UserTable, etc. All info saved in localStorage (workaround since using Next.js). 140 commits total due to rewrites and bug fixes",
    keywords: ["Next.js", "localStorage"],
    date: '27 April 2021',
    dateCreated: new Date(2021, 3, 27),
    dateLastUpdated: new Date(2021, 3, 27)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/spam-classification',
    thumbnail: SpamClassifierImage,
    title: 'Python Spam Classification',
    description: "Trained SKLearn DecisionTree, GradientBoost, RandomForest classifiers based on extracted text features found in features.py (count of misspelled words, count of known spam phrases, count of exclamation points). Used NLTK library  to find valid words. Loaded CSV from Kaggle dataset. Used JS to scrape a known spam words list from website. Saved best classification model as pickle object. Also, wrote up utilities to tokenize, lemmatize, and remove stop words, however, runtime was FAR too long to be usable.",
    keywords: ["Python", "SKLearn", "NLTK", "Numpy"],
    date: '30 April 2021',
    dateCreated: new Date(2021, 3, 30),
    dateLastUpdated: new Date(2021, 3, 30)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/auto-scroller-chrome-extension',
    thumbnail: ChromeExtensionImage,
    title: 'Chrome Auto Scroller',
    description: "Chrome extension to automatically scroll web page down (especially useful for reading novels online) for https://www.51shucheng.net/ => removes advertisements & script goes to next page when at bottom of text content.",
    keywords: ["Chrome Extension", "Vanilla JS", "HTML/CSS/JavaScript"],
    date: '3 May 2021',
    dateCreated: new Date(2021, 4, 3),
    dateLastUpdated: new Date(2021, 4, 9)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/classify-gender-by-walking',
    thumbnail: PersonWalkingImage,
    title: 'Python Classifying Gender by Gait',
    description: "Gait is manner of walking. Collected accelerometer data from 3 subjects (2M 1F) and filtered signal. Extracted features from filtered signal - Mean, Variance, Entropy (scipy.stats), Peak Count (scipy.signal), Dominant Frequency (numpy.fft). Train SKLearn DecisionTree, GradientBoost, RandomForest classifiers. ",
    keywords: ["Python", "SKLearn", "Pandas", "Numpy"],
    date: '6 May 2021',
    dateCreated: new Date(2021, 4, 6),
    dateLastUpdated: new Date(2021, 4, 6)
  },
  {
    link: 'https://priceless-roentgen-022985.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/redux-dark-mode',
    thumbnail: ReduxLogoImage,
    title: 'First Redux App',
    description: "Used CRA Redux template and created first redux app. Wrote my first reducer + selectors to toggle between dark mode and light mode. Leanred that reducer state MUST be an object (cannot simply be a True/False primitive)",
    keywords: ["Netlify", "React", "React-Redux"],
    date: '10 May 2021',
    dateCreated: new Date(2021, 4, 10),
    dateLastUpdated: new Date(2021, 4, 10)
  },
  {
    link: 'https://flask-api-sentiment-analysis.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/flask-api-sentiment-analysis',
    thumbnail: NLTKLogoImage,
    title: 'Deploy NLTK Model with Flask',
    description: "Created REST API with Flask to expose my Multinomial Naive Bayes sentiment analysis classifier written with NLTK and deployed to Heroku",
    keywords: ["Heroku", "Flask", "NLTK"],
    date: '21 May 2021',
    dateCreated: new Date(2021, 4, 21),
    dateLastUpdated: new Date(2021, 4, 22)
  },
  {
    link: 'https://discord-word-wolf-bot.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/discord-word-wolf-bot',
    thumbnail: DiscordLogoImage,
    title: 'Discord Bot - Word Wolf',
    description: "Created Discord bot to play game Word Wolf with friends on Heroku using Python and discord.py. Loaded Discord secrets with python-dotenv and .env file. Managed dependencies with requirements.in and pip-tools (pip-compile & pip-sync). Wrote up unit tests with unittest and generated coverage reports with coverage",
    keywords: ["Heroku", "discord.py", "python-dotenv", "pip-tools", "unittest"],
    date: '4 Aug 2021',
    dateCreated: new Date(2021, 7, 4),
    dateLastUpdated: new Date(2021, 7, 4)
  },
  {
    link: 'http://34.75.232.117:80',
    github_link: 'https://github.com/Borghese-Gladiator/first-docker-gcp',
    thumbnail: GCPLogoImage,
    title: 'First GCP Docker App',
    description: "(NO DEMO - costs money to host) Deployed example containerized Express (Node.js) server to Google Cloud Platform. Pushed custom Docker image to Artifact Registry; Created a Google Kubernetes Engine cluster and deployed sample app there. Exposed app to internet and updated app using Kubernetes commands",
    keywords: ["GCP", "Docker", "GKE", "Kubernetes", "Express"],
    date: '30 Aug 2021',
    dateCreated: new Date(2021, 7, 30),
    dateLastUpdated: new Date(2021, 7, 30)
  },
  {
    link: 'https://first-julia-genie-app.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/MyFirstGenieApp',
    thumbnail: GenieLogoImage,
    title: 'First Genie App',
    description: "Genie is a web framework (like Django) written for Julia. In this app, I learned Julia through JuliaAcademy and applied my learnings to create & deploy the basic web app with Genie.",
    keywords: ["Heroku", "Genie", "Julia"],
    date: '6 September 2021',
    dateCreated: new Date(2021, 8, 6),
    dateLastUpdated: new Date(2021, 8, 6)
  },
  {
    link: 'https://valorant-lineups-six.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/valorant-lineups',
    thumbnail: ValorantLogoImage,
    title: 'Valorant Lineups',
    description: "Next.js + Chakra UI components on Vercel to create Valorant Lineups app that enables me to quickly filter by map, agent, and attackDefense to find corresponding images from the public folder. These paths are stored in a directory structure /map/agent/attackDefense and loaded using a pathsObject created at buildtime using getStaticProps",
    keywords: ["Vercel", "Next.js", "Chakra UI"],
    date: '19 September 2021',
    dateCreated: new Date(2021, 8, 19),
    dateLastUpdated: new Date(2021, 9, 26)
  },
  {
    link: 'https://next-otaku-list.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/next-otaku-list',
    thumbnail: OtakuListImage,
    title: 'Otaku List',
    description: "Next.js + MongoDB Atlas app to save anime/manga/oneshot title into cloud. If given an anime or manga title, this app loads further info from Jikan - API for retrieving series info from MAL. Uses Storybook to view UI components in isoluation & Swagger to view API documentation using OpenAPI specifications. Uses Jest for mocking & React Testing Libraty to validate page content.",
    keywords: ["Vercel", "Next.js", "MongoDB Atlas", "Chakra UI", "Storybook", "Swagger", "Jest", "React Testing Library"],
    date: '8 October 2021',
    dateCreated: new Date(2021, 9, 8),
    dateLastUpdated: new Date(2021, 9, 26)
  },
  {
    link: 'https://first-redis-server.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/next-otaku-list',
    thumbnail: RedisLogoImage,
    title: 'First Redis Server',
    description: "First time setting up redis myself on Heroku (chose to use npm package over paying for Redis plugin). Redis enables you to cache responses in a datastore and expedite server speeds significantly - used at work for a two-layered cache with Redis & PostgreSQL.",
    keywords: ["Heroku", "Redis"],
    date: '14 October 2021',
    dateCreated: new Date(2021, 9, 14),
    dateLastUpdated: new Date(2021, 9, 15)
  },
  {
    link: 'https://resume-skills-roadmapper.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/next-otaku-list',
    thumbnail: ResumeComputerIconImage,
    title: 'Resume Skill Tree',
    description: "Next.js + Geist UI component library to create skill tree that lists all technologies I have worked with. Mostly a refresher as I wrote down technologies I worked with a long time ago and how they are related.",
    keywords: ["Vercel", "Next.js", "Geist UI"],
    date: '25 November 2021',
    dateCreated: new Date(2021, 10, 25),
    dateLastUpdated: new Date(2021, 10, 25)
  },
  {
    link: 'https://first-react-query.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-react-query',
    thumbnail: ReactQueryIconImage,
    title: 'First React Query',
    description: "Gets list of users from jsonplaceholder and uses React Query to manage state. React Query enables users to to fetch, synchronize, update, and cache your remote data while also reducing the amount of code you need to write by providing you two simple hooks and one utility function. Used the given useQuery and useMutations hooks to cache data",
    keywords: ["Netlify", "React", "React Query"],
    date: '11 January 2022',
    dateCreated: new Date(2022, 0, 11),
    dateLastUpdated: new Date(2022, 0, 11)
  },
  {
    link: 'https://first-nextjs-hardhat.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-nextjs-hardhat',
    thumbnail: EthereumLogoImage,
    title: 'First Web 3.0 DApp',
    description: "Investigation project about Web 3.0, Blockchain, P2P, Proof of Stakes, Proof of Work, Smart Contract, Solidity, NFT, HardHat, Ethereum Test Networks, MetaMask (hot wallet vs cold wallet). Deployed sample contract and wrote up sample frontend to use contract functions. Used ENV variables to hold contract addresses and used Greeter and SimpleStorage",
    keywords: ["Vercel", "Web 3.0", "Ethereum", "MetaMask", "Ethers.js", "Hardhat.js", "Next.js", "Chakra UI" ],
    date: '25 January 2022',
    dateCreated: new Date(2022, 0, 25),
    dateLastUpdated: new Date(2022, 0, 28)
  },
  {
    link: 'https://pay-to-vote-dapp.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/pay-to-vote-dapp',
    thumbnail: CreaticlesLogoImage,
    title: 'Creaticles - Money Auction DApp',
    description: "(Creaticles contract work) Every voter contributes an amount to play and the voter with the highest contribution takes the whole pool home at the end of the auction! Smart contract deployed to Ropsten Testnet. Calls backend using Ethers.js and saves to MongoDB Atlas. Developed and deployed Solidity smart contract using Hardhat.js. Interacts with users using Metamask.",
    keywords: ["Vercel", "Web 3.0", "Ethereum", "MetaMask", "Ethers.js", "Hardhat.js", "Next.js", "Chakra UI", "MongoDB Atlas" ],
    date: '13 February 2022',
    dateCreated: new Date(2022, 0, 29),
    dateLastUpdated: new Date(2022, 1, 13)
  },
  {
    github_link: 'https://github.com/Borghese-Gladiator/sql-learning',
    thumbnail: DockerPostgresPgAdminImage,
    title: 'SQL Learning',
    description: "Used Docker to simplify Postgres installation locally. Went through online courses to learn SQL and what tables to create for my own projects.",
    keywords: ["Docker", "Postgres", "SQL"],
    date: '8 April 2022',
    dateCreated: new Date(2022, 3, 8),
    dateLastUpdated: new Date(2022, 3, 27)
  },
  {
    link: 'https://ts-angular-tour-of-heroes.netlify.app',
    github_link: 'https://github.com/Borghese-Gladiator/angular-tour-of-heroes',
    thumbnail: AngularTourOfHeroesImage,
    title: 'Angular Tour of Heroes',
    description: "Followed default Angular tutorial and deployed the content to Netlify. Followed tutorial to learn TypeScript and RxJS observer library. Angular Workflow - App module imports components & modules -> TypeScript component calls service methods for data -> HTML component calls imported components using CSS element selector.",
    keywords: ["Angular", "TypeScript", "RxJS"],
    date: '15 April 2022',
    dateCreated: new Date(2022, 3, 15),
    dateLastUpdated: new Date(2022, 3, 15)
  },
  /*
  {
    link: 'https://resume-skills-roadmapper.vercel.app/',
    github_link: 'https://github.com/Borghese-Gladiator/next-otaku-list',
    thumbnail: MicroFrontendImage,
    title: 'First React Micro Frontends',
    description: "Implemented micro frontends using CRACO override for CRA - wrote Dashboard Page, Admin Page, & Client Hub which loads the other two standalone frontend apps. Implemented by hosting three apps on Vercel where Client Hub loads the other two apps",
    keywords: ["Vercel", "CRACO", "create-react-app"],
    date: '26 November 2021',
    dateCreated: new Date(2021, 10, 26),
    dateLastUpdated: new Date(2021, 10, 26)
  },
  {
    link: 'http://34.75.232.117:80',
    github_link: 'https://github.com/Borghese-Gladiator/first-docker-gcp',
    thumbnail: GCPLogoImage,
    title: 'First GCP Multi-Docker App',
    description: "(NO DEMO - costs money to host) Deployed MERN app using YAML configurations (<ba>.yml for PRD and docker-compose.yml for DEV)",
    keywords: ["GCP", "Docker", "GKE", "Kubernetes", "Express"],
    date: '31 Aug 2021',
    dateCreated: new Date(2021, 8, 31),
    dateLastUpdated: new Date(2021, 8, 31)
  },
  {
    link: 'https://python-text-processing.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/Python-Text-Processing',
    thumbnail: FlaskTutorialImg,
    title: 'NLTK Text Processing',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: '25 January 2021',
    dateCreated: new Date(2021, 0, 25),
    dateLastUpdated: new Date(2021, 0, 25)
  },
  */
]

const SORT_MAP = {
  Recent: ((a, b) => b.dateCreated - a.dateCreated),
  Oldest: ((a, b) => a.dateCreated - b.dateCreated)
//  Alphabetical: ((a, b) => a.title.localeCompare(b.title)),
//  ReverseAlphabetical: ((a, b) => b.title.localeCompare(a.title))
};

const SORT_NAMES = Object.keys(SORT_MAP);

// markup
const IndexPage = () => {
  const [sort, setSort] = useState('Recent');
  const [hasLoaded, setHasLoaded] = useState(false);

  const sortList = SORT_NAMES.map(name => (
    <SortButton
      key={name}
      name={name}
      isPressed={name === sort}
      setFilter={setSort}
    />
  ));

  const appList = apps
  .sort(SORT_MAP[sort])
  .map((appObj, idx) => {
    const {
      link,
      github_link,
      thumbnail,
      title,
      description,
      keywords,
      dateCreated,
      dateLastUpdated
    } = appObj;
    return (
      <Card
        key={idx}
        link={link}
        github_link={github_link}
        thumbnail={thumbnail}
        title={title}
        description={description}
        keywords={keywords}
        dateCreated={formatDateCreated(dateCreated)}
        dateLastUpdated={formatDateUpdated(dateLastUpdated)}
      />
    );
  });

  useEffect(() => {
    setHasLoaded(true)
  }, [hasLoaded])

  if (!hasLoaded) {
    return <Loading />
  }
  
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>App List - Hosted on Netlify</title>
        <meta name="description" content="Track new tech I have learned and tried to continuously improve. This static Gatsby site on Netlify compiles all of Borghese-Gladiator's latest projects to show off to friends and self."></meta>
      </Helmet>
      <div style={rootStyles}>
        <h1 style={headingStyles}>
          <span>Borghese-Gladiator{" "}<span className={"header_animated_mesh_gradient"} >App List</span></span>
          <span role="img" aria-label="Party popper emojis" style={smartShadowStyles}>🎉</span>
        </h1>
        <p>
          <span className={"neonText"}>Track</span><span> apps I've been making</span>
          <span role="img" aria-label="Sunglasses smiley emoji">
            {' 😎 '}
          </span>
          <code style={codeStyles}>Made with GatsbyJS</code>
        </p>
        <p>
          <span>Click to see deployed app</span>
        </p>
      </div>
      <div style={sortContainerStyle}>
        {sortList}
      </div>
      <div style={cardContainerStyle}>
        {appList}
      </div>
    </main>
  )
}

export default IndexPage
