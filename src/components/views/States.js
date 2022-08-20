import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './States.module.css';

const States = () => {
  const result = useSelector((state) => state.data);
  const { states } = result;
  console.log(states)
  return (
    <section className={styles.sectionTwo}>
      <h2>States Statistics</h2>
      <ul className={styles.homepageList}>
      <li>
        <p>States</p>
        <p>Result</p>
      </li>
      {
        result.length === 0 ? ''
          : states.map(
            (state) => (
              <li key={state.state}>
                <p>{state.state}</p>
                <Link to={`/${state.state}`} exact="true">
                  <BsArrowRightCircle />
                </Link>
              </li>
            ),
          )
      }
    </ul>
    </section>
  );
};

export default States;
