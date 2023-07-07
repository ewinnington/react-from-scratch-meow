import * as React from 'react'
import ReactDOM from 'react-dom'

import Profile from './components/Profile'
import Greeting from './components/Greeting';
import ShoutName from './components/ShoutName';

function App() {
    console.log("App");
    return (
        <div>
        <h1>hello world</h1>
        <br/>

        <ShoutName name="James Taylor" />
        
        <Profile />
        <Profile />
        <Profile />
        
        <Greeting />

        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))