import React from 'react';
import '../../assets/styles/App.css';

class ProgressBar extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <h1>Progress Bar Example</h1>
                <div className="progressContainer">
                    <div id="progressBar"></div>
                </div>
            </div>
        );
    }
}

export default ProgressBar;