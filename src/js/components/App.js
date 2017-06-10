import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Button from './Button';
import '../../assets/styles/App.css';

class App extends Component {

    moveProgressBar() {
    let elem = document.getElementById('progressBar')
    let width = 0;
    let id = setInterval(frame, 10);
    console.log(width);

    function frame(){
        if (width >= 100) {
            clearInterval(id);
        } else {
            width += 1;
            elem.style.width = width + '%';
            elem.innerHTML = width + '%';
        }
    }
}


  render() {
    return (
        <div>
            <ProgressBar />
            <Button progress={this.moveProgressBar}/>
        </div>
    );
  }
}

export default App;
