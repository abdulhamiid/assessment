/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaViruses } from 'react-icons/fa';
import styles from './Showcase.module.css';
import { fetchLoadedData } from '../redux/loadApi';
import flag from './assets/images/flag-nigeria.jpg';

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
        <h1>COVID-19 NIGERIA</h1>
      </header>
      <p>
        This data on this website shows statistics of the corona virus pandemic in Nigeria showing the details for all states
      </p>
      <h2>Country Statistics</h2>
      {
      result.length === 0 ? <p className={styles.load}>Loading data...</p>
        : (
          <div className={styles.countryStat}>
            <div className={styles.blue}>
              <p>Total Confirmed Cases</p>
              <h4>
                <FaViruses />
                <span>{totalConfirmedCases.toLocaleString()}</span>
              </h4>
            </div>
            <div className={styles.yellow}>
              <p>Total Active Cases</p>
              <h4>
                <FaViruses />
                <span>{totalActiveCases.toLocaleString()}</span>
              </h4>
            </div>
            <div className={styles.green}>
              <p>Discharged</p>
              <h4>
                <FaViruses />
                <span>{discharged.toLocaleString()}</span>
              </h4>
            </div>
            <div className={styles.red}>
              <p>Deaths</p>
              <h4>
                <FaViruses />
                <span>{death.toLocaleString()}</span>
              </h4>
            </div>
          </div>
        )
    }
    </div>
  );
};

export default Showcase;
