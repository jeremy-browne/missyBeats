import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

class App extends React.Component {
    onButtonPress() {
        console.log("Button pressed");
        // Play a sound
        let audio = new Audio('./MissyBeats.wav');

        if (document.getElementById("loop").checked === true) {
            audio.loop = true;
        } else {
            audio.loop = false;
        }

        audio.play();
    }

    render() {
        return (
            <div>
                <div className="machine" id="display" onClick={this.onButtonPress}>
                    <h1>Drop the beat</h1>
                </div>
                <div className="controls">
                    <label htmlFor="loop">Loop - </label>
                    <input className="checkBox" type="checkbox" id="loop"/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));