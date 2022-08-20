import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams} from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

export const States = () => {
  const result = useSelector((state) => state.data);
  const states = result.states;
  const {stateId} = useParams();
  return (
    <ul>
      {
        result.length === 0 ? '':
        states.map(
          (state) => (
            <li key={state.state}>
              {state.state}
              <Link to={`/${state.state}`} exact="true">
                <BsArrowRightCircle />
              </Link>
            </li>
          )
        )
      }
    </ul>
  )
}
