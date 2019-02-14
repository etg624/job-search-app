import React from 'react';
import '../../setupTest';
import { API_BASE_URL } from '../../config';
import {
  GET_JOB_ERROR,
  GET_JOB_SUCCESS,
  GET_JOB_REQUEST,
  getJobRequest,
  getJobError,
  getJobSuccess,
  fetchJobs
} from '../../actions/job-actions/getJobs';

describe('getJobRequest', () => {
  it('should return the action', () => {
    const action = getJobRequest();

    expect(action.type).toEqual(GET_JOB_REQUEST);
  });
});
describe('getJobSuccess', () => {
  it('should return the action', () => {
    const action = getJobSuccess();
    const payload = action.jobs;
    expect(action.type).toEqual(GET_JOB_SUCCESS);

    expect(action.jobs).toEqual(payload);
  });
});
describe('getJobRequest', () => {
  it('should return the action', () => {
    const action = getJobError();
    const payload = action.error;

    expect(action.type).toEqual(GET_JOB_ERROR);
    expect(action.error).toEqual(payload);
  });

  describe('fetchJobs', () => {
    it('should dispatch getJobsSuccess', () => {
      const jobs = [{ title: 'job1' }, { title: 'job2' }];

      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json() {
            return jobs;
          }
        })
      );

      const dispatch = jest.fn();
      const getState = jest.fn().mockImplementation(() => {
        return {
          auth: {
            authToken: 'adjfljadflj'
          }
        };
      });
      return fetchJobs()(dispatch, getState).then(() => {
        console.log(fetch);
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/jobs`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getState().auth.authToken}`,
            'Content-Type': 'application/json'
          }
        });
      });
    });
  });
});
