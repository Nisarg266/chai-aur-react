import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
      <div>Nisarg</div>
      <h1>hello my name is nisarg</h1>
      <h1>hello my name is nisarg</h1>
    </>
  )
}

// const AnotherApp =  (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

const reactElement =  React.createElement(
  'a',
  { href: 'https://Google.com', target: '_blank' },
  'click me'
);


createRoot(document.getElementById('root')).render(
  <App/>,
  reactElement

)