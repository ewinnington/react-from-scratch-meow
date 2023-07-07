import * as React from 'react'
import ReactDOM from 'react-dom'

import Profile from './components/Profile'

/*function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
    )
  }
*/

function App() {
    console.log("App");
    return (
        <div>
        <h1>hello world</h1>
        <br/>
        <Profile />
        <Profile />
        <Profile />
        
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))