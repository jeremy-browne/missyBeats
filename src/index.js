import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonStatus: "Drop the beat",
            playAudio: true,
        }
    }

    togglePlay() {
        if (this.state.playAudio === false) {
            this.setState({
                buttonStatus: "Stop",
                playAudio: false,
            })
        } else {
            this.setState({
                buttonStatus: "Drop the beat",
                playAudio: true,
            })
        }
    }

    playAudio() {
        console.log("Button pressed");
        let audio = new Audio('./MissyBeats.wav');
        
        this.togglePlay();
        
        // Play a sound
        if (document.getElementById("loop").checked === true) {
            audio.loop = true;
        } else {
            audio.loop = false;
        }

        if(this.state.playAudio === true) {
            audio.play();
        }
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div className="machine" id="display" onClick={() => this.playAudio()}>
                    <h1>{this.state.buttonStatus}</h1>
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