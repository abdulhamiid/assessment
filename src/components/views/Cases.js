import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Cases.module.css';

const State = () => {
  const result = useSelector((state) => state.data);
  const { states } = result;
  const { stateId } = useParams();
  const stateResult = states.filter((element) => element.state === stateId);
  const {
    state, confirmedCases, casesOnAdmission, discharged, death,
  } = stateResult[0];

  return (
    <>
      {
      result.length === 0 ? ''
        : (
          <div className={styles.statistics}>
            <h1>{state}</h1>
            <div className={styles.cases}>
              <ul>
                <li>Confirmed Cases</li>
                <li>Cases on Admission</li>
                <li>Discharged</li>
                <li>Deaths</li>
              </ul>
              <ul>
                <li>{confirmedCases.toLocaleString()}</li>
                <li>{casesOnAdmission.toLocaleString()}</li>
                <li>{discharged.toLocaleString()}</li>
                <li>{death.toLocaleString()}</li>
              </ul>
            </div>
          </div>
        )
    }
    </>
  );
};

export default State;
