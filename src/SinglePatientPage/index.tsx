import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { apiBaseUrl } from '../constants';

import { useStateValue, setSinglePatient } from '../state';
import { Patient, Diagnosis } from '../types';

const SinglePatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [{ singlePatient, diagnosisList }, dispatch] = useStateValue();
  React.useEffect(() => {
    const fetchPatientList = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setSinglePatient(patientFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    fetchPatientList();
  }, [dispatch, id]);

  const patient = Object.values(singlePatient)[0];
  console.log(diagnosisList);
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
          <h2>Entries: </h2>
          {patient.entries.map((entry) => (
            <div key={entry.id}>
              <p>
                {entry.date} {entry.description}
              </p>
              <ul>
                {entry.diagnosisCodes &&
                  entry.diagnosisCodes.map((diagnosisCode: string) => {
                    const diagnosis = Object.values(diagnosisList).find(
                      (diagnosis: Diagnosis) => diagnosis.code === diagnosisCode
                    );
                    return (
                      <li key={diagnosisCode}>
                        {diagnosisCode} {diagnosis && diagnosis.name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SinglePatientPage;
