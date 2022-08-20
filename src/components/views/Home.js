import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoadedData } from '../redux/loadApi';
import States from './States';

let isFetching = true;

function Home() {
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
    <>
      <div>
        <h1>
          COVID CASES IN NIGERIA
        </h1>
        {
          result.length === 0 ? <h1>Loading...</h1>
            : (
              <>
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
              </>
            )
        }
      </div>
      <States />
    </>
  );
}

export default Home;
