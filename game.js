import React from 'react';
import { colorGamma } from './variables/colors';
import { HTML } from './variables/tegs';

export class Game extends React.Component {
  componentDidMount () {
    return (console.log(HTML.body, ' i am DenisMount'));
  }
  focus() {
    HTML.body.style.transition = '1s';

    HTML.btn.style.backgroundColor= colorGamma.teal;
    HTML.number.innerHTML = {/*String*/}(HTML.numbers[Math
                            .floor(Math.random() * HTML.numbers.length)])/*+','*/;

    if (HTML.number.innerHTML == 10) {
      HTML.rate.innerHTML = 'WELL  DONE';
      HTML.body.style.animation = 'none';
      HTML.app.style.background = `url(${HTML.win_url}) 100% 100% no-repeat`;
      HTML.app.style.backgroundSize = 'cover';
      HTML.app.style.boxSizing = 'border-box';
      HTML.app.style.backgroundPosition = '50% 50%';
      HTML.body.style.backgroundColor = colorGamma.light_blue;
      HTML.btn.style.display = 'none';
    {/*  ui.style.display = 'block';*/}
    }
    else if (HTML.number.innerHTML >= 6){
      HTML.btn.style.backgroundColor = colorGamma.green;
      HTML.rate.innerHTML = 'GOOD!'
    }
    else if (HTML.number.innerHTML >= 4) {
      HTML.btn.style.backgroundColor = colorGamma.yellow;
      HTML.rate.innerHTML = 'NORMAL'
    }

    else if (HTML.number.innerHTML == 1) {
      HTML.btn.style.display = 'none';
      HTML.body.style.animation = 'none';
      HTML.body.style.background = `url(${HTML.defeat_url}) 100% no-repeat`;
      HTML.body.style.backgroundColor = '#000';
      HTML.body.style.boxSizing = 'border-box';
      HTML.body.style.backgroundSize = 'cover';
      HTML.rate.style.color = '#fff';
      HTML.rate.innerHTML = 'GAME  OVER';
      console.log('ITS 1!!!!!!!!!!');
    }

    else{
      HTML.btn.style.backgroundColor = colorGamma.red;
      HTML.rate.innerHTML = 'PFFFF'
    }
    //number.value += grade_list;
    HTML.grade_list += HTML.number.innerHTML;
   // console.log(grade_list);
   // var ready_grade_list = grade_list.split(',').map(function(item){return parseInt(item,10)});
    console.log(HTML.grade_list);
   // var super_ready_grade_list = ready_grade_list.reduce(sum,0);
   // function sum(a, b) {
    //  return a+b;
   // }
    //console.log(/*eval(*/super_ready_grade_list/*).join('+')*/);
  }
  render () {
    return (
      <div className="app">
        <div className="game">
          <button className="btn" onClick={this.focus}><span >Random</span></button>
          <div className="integer"></div>
          <div className="rate"></div>
          <div className="statistics">EJJ</div>
        </div>
      </div>
    );
  }
}
