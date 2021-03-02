import React, { useState } from "react";
// package to add meta
import { Helmet } from "react-helmet";
// custom components
import Card from '../components/Card';
import SortButton from '../components/SortButton';

// image assets
import ToDoImg from '../images/todo_list_notebook_coffee.jpg';
import MERNImg from '../images/mern-logos.png';
import FlaskTutorialImg from '../images/Screenshot 2021-01-19 051837.png';
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

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0
}
const headingAccentStyles = {
  color: "#663399",
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
    dateCreated: new Date(2021, 0, 16),
    dateLastUpdated: new Date(2021, 0, 16)
  },
  {
    link: 'https://mern-app-template-000.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/mern-material-demo',
    thumbnail: MERNImg,
    title: 'MERN App Template',
    description: `Forked mern-material-demo - rewrote to deploy to Heroku (build ES6 backend & build React frontend), rewrote signin/signup pages, added mobile support, upgraded package versions: Babel (5.x ⟶ 7.x), Material UI (3.x ⟶ 4.x), React Router (4.x ⟶ 5.x)`,
    dateCreated: new Date(2021, 0, 18),
    dateLastUpdated: new Date(2021, 0, 18)
  },
  {
    link: 'https://cool-components.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/Cool-Components',
    thumbnail: HTMLCSSJSImg,
    title: 'Cool Components',
    description: "Track and Experiment with cool components from blog posts (made with just HTML + CSS). eg: Particle Smoke Animation, Tag Cloud, Play/Pause Animations",
    dateCreated: new Date(2021, 0, 20),
    dateLastUpdated: new Date(2021, 0, 20)
  },
  {
    link: 'https://tutorial-pushercoins.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/pushercoins',
    thumbnail: PWAImg,
    title: 'React Realtime PWA',
    description: "Progressive Web App (PWA) with lighthouse audit & bundle analyzer scripts. React UI to track cryptocurrency prices with Pusher in realtime",
    dateCreated: new Date(2021, 0, 23),
    dateLastUpdated: new Date(2021, 0, 23)
  },
  {
    link: 'https://react-shopping-cart-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-shopping-cart',
    thumbnail: ECommerceLogoImg,
    title: 'React Shopping Cart',
    description: "Forked React Typescript & learned to deploy TypeScript apps (same method except tsconfig.json).",
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
    date: '5 February 2021',
    dateCreated: new Date(2021, 1, 5),
    dateLastUpdated: new Date(2021, 1, 5)
  },
  {
    link: 'https://github.com/Borghese-Gladiator/python-mp3-player',
    github_link: 'https://github.com/Borghese-Gladiator/python-mp3-player',
    thumbnail: MusicPlayerImg,
    title: 'Python MP3 Player - Windows app',
    description: "I wrote a Python desktop with tkinter for GUI & pygame to manage audio commands & cx_Freeze to create the MSI installer. Since it's a desktop app, there is no online demo.",
    date: '6 February 2021',
    dateCreated: new Date(2021, 1, 6),
    dateLastUpdated: new Date(2021, 1, 6)
  },
  {
    link: 'https://github.com/Borghese-Gladiator/simple-sine-curve/tree/main',
    github_link: 'https://github.com/Borghese-Gladiator/simple-sine-curve/tree/main',
    thumbnail: TensorTradeImg,
    title: 'TensorTrade - Reinforcement Learning Trading Algorithm',
    description: "Forked tutorial & used Docker to build/run TensorTrade script - script used Ray with TensorTrade (TT) in order to create a profitable algorithm on a predictable sine curve. No online demo included",
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
    date: '14 February 2021',
    dateCreated: new Date(2021, 1, 14),
    dateLastUpdated: new Date(2021, 1, 14)
  },
  {
    link: 'https://first-nextjs-blog-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-nextjs-blog',
    thumbnail: NextJSImg,
    title: 'First NextJS App',
    description: "NextJS is a React framework with page-based routing, pre-rendering, SSG, SSR, and API endpoints (https://nextjs.org/learn/basics/create-nextjs-app). Since React is just a library, you need to bundle with webpack and transform with Babel, so NextJS standardizes solutions to those problems as a framework. FURTHERMORE, deploying to Netlify was not hard, though documentation was kind of lacking since official docs did not work.",
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
    date: '2 March 2021',
    dateCreated: new Date(2021, 2, 2),
    dateLastUpdated: new Date(2021, 2, 2)
  },
  /*
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
    const { link, github_link, thumbnail, title, description, dateCreated, dateLastUpdated } = appObj;
    return (
      <Card
        key={idx}
        link={link}
        github_link={github_link}
        thumbnail={thumbnail}
        title={title}
        description={description}
        date={formatDateCreated(dateCreated)}
        lastUpdated={formatDateUpdated(dateLastUpdated)}
      />
    );
  })
  
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>App List - Hosted on Netlify</title>
        <meta name="description" content="Track new tech I have learned and tried to continuously improve. This static Gatsby site on Netlify compiles all of Borghese-Gladiator's latest projects to show off to friends and self."></meta>
      </Helmet>
      <div style={rootStyles}>
        <h1 style={headingStyles}>
          <span>Borghese-Gladiator{" "}<span style={headingAccentStyles}>App List</span></span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p>
          <span>Track apps I've been making</span>
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
