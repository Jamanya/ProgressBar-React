import React from "react";
import '../../assets/styles/Button.css';

class Button extends React.Component {
    render() {
        return(
            <div className="buttonHolder">
                <button className="runButton" onClick={this.props.progress}>Run</button>
            </div>
        );
    }
}

export default Button;