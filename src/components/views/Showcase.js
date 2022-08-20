import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Showcase.module.css';
import { fetchLoadedData } from '../redux/loadApi';
import flag from './assets/images/flag.png';

let isFetching = true;

const Showcase = () => {
  const dispatch = useDispatch();
  if (isFetching === true) {
    isFetching = false;
    dispatch(fetchLoadedData());
  }
  const result = useSelector((state) => state.data);
  const {
    death, discharged, totalActiveCases, totalConfirmedCases,
  } = result;
  return (
    <div className={styles.showcase}>
      <header className={styles.header}>
        <img src={flag} alt="flag_ng" />
        <h1>NIGERIA</h1>
      </header>
      <p>
        This data on this website is on the corona virus pandemic in Nigeria showing the statistics for all states
      </p>
      <h2>Country Statistics</h2>
      {
      result.length === 0 ? <h1>Loading...</h1>
        : (
          <div className={styles.countryStat}>
            <ul>
              <li>Deaths</li>
              <li>Discharged</li>
              <li>Total Active Cases</li>
              <li>Total Confirmed Cases</li>
            </ul>
            <ul>
              <li>{death.toLocaleString()}</li>
              <li>{discharged.toLocaleString()}</li>
              <li>{totalActiveCases.toLocaleString()}</li>
              <li>{totalConfirmedCases.toLocaleString()}</li>
            </ul>
          </div>
        )
    }
    </div>
  );
};

export default Showcase;
