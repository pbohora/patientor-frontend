import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { apiBaseUrl } from '../constants';
import { Button } from 'semantic-ui-react';

import { useStateValue, setSinglePatient, addEntry } from '../state';
import { Patient } from '../types';
import { EntryFormValues } from '../AddEntryModal/AddEntryForm';
import EntryDetails from '../components/EntryDetails';
import AddEntryModal from '../AddEntryModal';

const SinglePatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [{ singlePatient, diagnosisList }, dispatch] = useStateValue();

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

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

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };
  const submitNewEntry = async (values: EntryFormValues) => {
    try {
      const { data: updatedPatient } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      dispatch(addEntry(updatedPatient));
      closeModal();
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data.error);
    }
  };

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
            <EntryDetails key={entry.id} entry={entry} />
          ))}
          <AddEntryModal
            modalOpen={modalOpen}
            onSubmit={submitNewEntry}
            error={error}
            onClose={closeModal}
          />
          <Button onClick={() => openModal()}>Add New Entry</Button>
        </div>
      )}
    </>
  );
};

export default SinglePatientPage;
