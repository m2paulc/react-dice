import { Component } from 'react';
import Die from './Die';
import './RollDice.css';

type diceProps = typeof RollDice.defaultProps & {
  sides: string[];
};
type diceStates = {
  die1: string,
  die2: string,
  rolling: boolean;
};

class RollDice extends Component<diceProps, diceStates> {
  constructor(props: diceProps) {
    super(props);
    this.state = { die1: 'one', die2: 'one', rolling: false };
    this.roll = this.roll.bind(this);
  }
  //list all sides of the die in an array 
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  roll () {
    //roll dice
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //setState with rolled dice
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });
    //wait 1 second then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render () {
    return (
      <div className='RollDice'>
        <div>
          <Die face={ this.state.die1 } rolling={ this.state.rolling } />
          <Die face={ this.state.die2 } rolling={ this.state.rolling } />
        </div>
        <button onClick={ this.roll } disabled={ this.state.rolling }>
          { this.state.rolling ? 'Rolling...' : 'Roll Dice!' }
        </button>
      </div>
    );
  }
}

export default RollDice;
