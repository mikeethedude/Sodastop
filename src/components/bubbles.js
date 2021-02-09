import React from 'react';
import anime from 'animejs/lib/anime.es.js'

class Bubbles extends React.Component {

  componentDidMount() {
    const colors = [
      '#FF52b4',
      '#1ed5c3',
      '#ee8aa8',
      '#cb6ce6'
    ];
    anime({
      targets: '.bubble',
      translateY: function() {
        const variety = anime.random(50, 300);
        return -window.innerHeight - variety;
      },
      loop: true,
      easing: 'easeInOutQuad',
      delay: anime.stagger([10, 1010]),
      scale: anime.stagger([.5, 1.15]),
      loopComplete: function (anim) {
        const option = anime.random(0,4);
        anime.set('.bubble', {color: colors[Math.floor(option)]})
      }
    });
  }

  render() {
    return (
        <div className={"bubblewrap"}>
          {[...Array(14)].map((k) => (
              <div key={k} className={'bubble'} style={{left: (Math.random() % 2) * 100 + "%"}}></div>
          ))}
        </div>
    )
  }
}
export default Bubbles;
