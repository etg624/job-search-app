import '../../setupTest';
import { API_BASE_URL } from '../../config';
import {
  ADD_JOB_ERROR,
  ADD_JOB_SUCCESS,
  ADD_JOB_REQUEST,
  addJobRequest,
  addJobError,
  addJobSuccess,
  addJob
} from '../../actions/job-actions/postJobs';

describe('addJobRequest', () => {
  it('should return the action', () => {
    const action = addJobRequest();
    expect(action.type).toEqual(ADD_JOB_REQUEST);
  });
});
describe('addJobSuccess', () => {
  it('should return the action', () => {
    const newJob = {
      title: 'Job'
    };
    const action = addJobSuccess(newJob);
    expect(action.type).toEqual(ADD_JOB_SUCCESS);
    expect(action.newJob).toEqual(newJob);
  });
});
describe('addJobError', () => {
  it('should return the action', () => {
    const error = 'error';
    const action = addJobError(error);

    expect(action.type).toEqual(ADD_JOB_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('addJob', () => {
  it('should dispatch addJobSuccess', () => {
    const newJob = {
      title: 'job'
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return newJob;
        }
      })
    );

    const getState = jest.fn().mockImplementation(() => {
      return {
        auth: {
          authToken: 'AUTH'
        }
      };
    });

    const dispatch = jest.fn();

    return addJob(newJob)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/jobs`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getState().auth.authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      });
      expect(dispatch).toHaveBeenCalledWith(addJobSuccess(newJob));
    });
  });
});
