import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const Counter = ({
  increment, incrementIfOdd, incrementAsync, decrement, counter,
}) => (
  <p>
    Clicked: {counter} times
    {' '}
    <Button bsClass="btn btn-primary" onClick={increment}>+</Button>
    {' '}
    <Button onClick={decrement}>-</Button>
    {' '}
    <Button onClick={incrementIfOdd}>Increment if odd</Button>
    {' '}
    <button onClick={() => incrementAsync()}>Increment async</button>
  </p>
);

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};


export default Counter;
