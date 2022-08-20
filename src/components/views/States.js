import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const States = () => {
  const result = useSelector((state) => state.data);
  const { states } = result;
  return (
    <ul>
      {
        result.length === 0 ? ''
          : states.map(
            (state) => (
              <li key={state.state}>
                {state.state}
                <Link to={`/${state.state}`} exact="true">
                  <BsArrowRightCircle />
                </Link>
              </li>
            ),
          )
      }
    </ul>
  );
};

export default States;
