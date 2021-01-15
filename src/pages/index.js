import * as React from "react";
import Card from '../components/Card';

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

// data
const appList = [
  {
    link: 'https://github.com/nukeop',
    thumbnail: 'https://i.imgur.com/yCch7GN.jpg',
    title: 'Cheesecake',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: '15 January 2021'
  },
  {
    link: 'https://github.com/nukeop',
    thumbnail: 'https://i.imgur.com/yCch7GN.jpg',
    title: 'Cheesecake',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: '15 January 2021'
  },
  {
    link: 'https://github.com/nukeop',
    thumbnail: 'https://i.imgur.com/yCch7GN.jpg',
    title: 'Cheesecake',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: '15 January 2021'
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={rootStyles}>
        <h1 style={headingStyles}>
          <span>Borghese-Gladiator{" "}<span style={headingAccentStyles}>App List</span></span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p>
          <span>Track apps I made using tutorials </span>
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
          <code style={codeStyles}>Made with GatsbyJS</code>
        </p>
        <p>
          <span>Click to see deployed app</span>
        </p>
      </div>
      <div style={cardContainerStyle}>
        {
          appList.map((appObj) => {
            const { link, thumbnail, title, description, date } = appObj;
            return (
              <Card
                link={link}
                thumbnail={thumbnail}
                title={title}
                description={description}
                date={date}
              />
            );
          })
        }
      </div>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
