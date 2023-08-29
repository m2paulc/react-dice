import { Component } from 'react';
import './Die.css';

type MyProps = {
  face: string,
  rolling: boolean;
};

class Die extends Component<MyProps> {

  render () {
    return (
      <i className={ `Die fas fa-dice-${ this.props.face } ${ this.props.rolling && 'animate' }` } />
    );
  }
}

export default Die;