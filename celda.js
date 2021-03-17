import React from 'react';
import snkhd from './assets/snkhead.png'
import snktail from './assets/snktail.png'
import snkpart from './assets/snkpart.png'
import mushroom from './assets/Mushroom.png'
import rock from './assets/Stone.png'

class Celda extends React.Component {
  constructor(props) {
    super(props);

    this.chooser = this.chooser.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.ocupadoPor !== nextProps.ocupadoPor)
      return true;
    return false;
  }

  chooser() {
    let rotation;
    if (this.props.dir)
      switch (this.props.dir) {
        case 'RIGHT':
          rotation = 'rotate0';
          break;
        case 'LEFT':
          rotation = 'rotate180';
          break;
        case 'DOWN':
          rotation = 'rotate270';
          break;
        case 'UP':
          rotation = 'rotate90';
          break;
          default: break;
      }

    switch (this.props.ocupadoPor) {
      case 'C':
        if (this.props.dir === 'UP')
          rotation = 'rotate270';
        if (this.props.dir === 'DOWN')
          rotation = 'rotate90';
        return (<img src={snkhd} className={rotation} alt='snkhead'></img>)
      case 'i':
        if (this.props.dir === 'UP')
          rotation = 'rotate270';
        if (this.props.dir === 'DOWN')
          rotation = 'rotate90';
        return (<img src={snktail} className={rotation} alt='snktail'></img>)
      case 'c':
        return (<img src={snkpart} className={rotation} alt='snkpart'></img>)
      case 'M':
        return (<img src={mushroom} className={rotation} alt='mushroom'></img>)
      case 'r':
        return (<img src={rock} className={rotation} alt='rock'></img>)
      default:
        return this.props.ocupadoPor;
    }
  }

  render() {
    const rending = this.chooser();
    return (
      <div className='celda'>
        {rending}
      </div>
    );
  }
};
//this.props.ocupadoPor === 'C' ?<img src={snkhd}></img>: this.props.ocupadoPor
export default Celda;