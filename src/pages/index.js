import * as React from "react";
import Card from '../components/Card';

import ToDoImg from '../images/todo_list_notebook_coffee.jpg';

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
    link: 'https://mdn-todo-react.netlify.app/',
    thumbnail: ToDoImg,
    title: 'MDN React To Do List',
    description: "Followed MDN's React To Do List tutorial to create a list of to do items with editing & filtering.",
    date: '16 January 2021'
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
    </main>
  )
}

export default IndexPage
