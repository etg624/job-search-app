import {
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
  DELETE_JOB_ERROR,
  deleteJobRequest,
  deleteJobSuccess,
  deleteJobError,
  deleteJob
} from '../../actions/job-actions/deleteJob';
import { API_BASE_URL } from '../../config';

describe('deleteJobRequest', () => {
  it('should return the action', () => {
    const action = deleteJobRequest();
    expect(action.type).toEqual(DELETE_JOB_REQUEST);
  });
});

describe('deleteJobSuccess', () => {
  it('should return the action', () => {
    const action = deleteJobSuccess('SOME_ID');

    expect(action.type).toEqual(DELETE_JOB_SUCCESS);

    expect(action.deletedJobId).toEqual('SOME_ID');
  });
});
describe('deleteJobError', () => {
  it('should return the action', () => {
    const action = deleteJobError('error');
    expect(action.type).toEqual(DELETE_JOB_ERROR);

    expect(action.error).toEqual('error');
  });
});

describe('deleteJob', () => {
  it('should dispatch getJobsSuccess', () => {
    const id = 'JOB_TO_BE_DELETED';
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return id;
        }
      })
    );

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => {
      return {
        auth: {
          authToken: 'AUTH'
        }
      };
    });

    return deleteJob(id)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().auth.authToken}`
        }
      });
      expect(dispatch).toHaveBeenCalledWith(deleteJobSuccess(id));
    });
  });
});
