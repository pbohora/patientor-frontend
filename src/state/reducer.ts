import { State } from './state';
import { Patient, Diagnosis } from '../types';

export const SET_PATIENT_LIST = 'SET_PATIENT_LIST';
export const ADD_PATIENT = 'ADD_PATIENT';
export const SINGLE_PATIENT = 'SINGLE_PATIENT';
export const SET_DIAGNOSIS = 'SET_DISGNOSIS';
export const ADD_ENTRY = 'ADD_ENTRY';

export type Action =
  | {
      type: typeof SET_PATIENT_LIST;
      payload: Patient[];
    }
  | {
      type: typeof ADD_PATIENT;
      payload: Patient;
    }
  | {
      type: typeof SINGLE_PATIENT;
      payload: Patient;
    }
  | {
      type: typeof SET_DIAGNOSIS;
      payload: Diagnosis[];
    }
  | {
      type: typeof ADD_ENTRY;
      payload: Patient;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_PATIENT_LIST:
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case ADD_PATIENT:
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case SINGLE_PATIENT:
      return {
        ...state,
        singlePatient: {
          [action.payload.id]: action.payload,
        },
      };
    case ADD_ENTRY:
      return {
        ...state,
        singlePatient: {
          [action.payload.id]: action.payload,
        },
      };
    case SET_DIAGNOSIS:
      return {
        ...state,
        diagnosisList: {
          ...action.payload.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            {}
          ),
          ...state.diagnosisList,
        },
      };
    default:
      return state;
  }
};

export const setPatientList = (patients: Patient[]): Action => {
  return {
    type: SET_PATIENT_LIST,
    payload: patients,
  };
};

export const addPatient = (patient: Patient): Action => {
  return {
    type: ADD_PATIENT,
    payload: patient,
  };
};
export const setSinglePatient = (patient: Patient): Action => {
  return {
    type: SINGLE_PATIENT,
    payload: patient,
  };
};

export const setDiagnosis = (diagnosis: Diagnosis[]): Action => {
  return {
    type: SET_DIAGNOSIS,
    payload: diagnosis,
  };
};

export const addEntry = (updatedPatient: Patient): Action => {
  return {
    type: ADD_ENTRY,
    payload: updatedPatient,
  };
};
