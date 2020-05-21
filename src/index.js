import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

class App extends React.Component {

    onButtonPress() {
        // Play a sound
        let audio = new Audio('./MissyBeats.wav')
        audio.play()
        console.log("Button pressed")
    }

    render() {
        return(
            <div className="machine" id="display" onClick={this.onButtonPress}>
                <h1>Drop the beat</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));