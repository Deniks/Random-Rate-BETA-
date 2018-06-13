import React from 'react';
import { colorGamma } from './variables/colors.js';

export class Notification extends React.Component {
  close () {
    var notification = document.querySelector('.notification');
    notification.style.backgroundColor= colorGamma.red;
    notification.style.transition=".65s";
    notification.style.transform="translateY(-100%)";
  }
  render () {
    return (
      <div className="notification">
        <div className="text">
          <p>Please to get random integer press <code>spacebar for PC</code> or <code>Click for phone</code> and agee with our privacy.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus nesciunt odit adipisci natus ipsum, in est cumque ratione recusandae. Odit fugit ab enim quisquam, cupiditate ullam impedit modi? Iusto.</p>
          <button className="close-btn" onClick={this.close}>Close</button>
        </div>
      </div>
    );
  }
}
