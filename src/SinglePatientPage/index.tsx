import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { apiBaseUrl } from '../constants';

import { useStateValue } from '../state';
import { Patient } from '../types';

const SinglePatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [{ singlePatient }, dispatch] = useStateValue();
  React.useEffect(() => {
    const fetchPatientList = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch({ type: 'SINGLE_PAIENT', payload: patientFromApi });
      } catch (e) {
        console.error(e);
      }
    };
    fetchPatientList();
  }, [dispatch, id]);

  const patient = Object.values(singlePatient)[0];
  console.log(patient);
  return (
    <>
      {patient && (
        <div>
          <h1>
            {patient.name}{' '}
            {patient.gender === 'male' ? (
              <Icon disabled name='venus' />
            ) : (
              <Icon disabled name='mars' />
            )}
          </h1>
          <h3>ssn: {patient.ssn}</h3>
          <h3>occupation: {patient.occupation}</h3>
        </div>
      )}
    </>
  );
};

export default SinglePatientPage;
