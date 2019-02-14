import { jobReducer } from '../../reducers/jobReducer';
import {
  getJobRequest,
  getJobSuccess,
  getJobError
} from '../../actions/job-actions/getJobs';

describe('jobReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = jobReducer(undefined, {});
    expect(state).toEqual({ jobs: [], loading: false, error: null });
  });

  it('should return the current state of an unknown action', () => {
    const state = jobReducer(undefined, { type: 'UNKOWN' });

    expect(state).toEqual({ jobs: [], loading: false, error: null });
  });

  it('should handle the getJobRequest action', () => {
    const state = jobReducer(undefined, getJobRequest());

    expect(state).toEqual({ jobs: [], loading: true, error: null });
  });

  it('should handle the getJobSuccess action', () => {
    const state = jobReducer(undefined, getJobSuccess([{ title: 'job' }]));
    expect(state).toEqual({
      jobs: [{ title: 'job' }],
      loading: false,
      error: null
    });
  });

  it('should handle the getJobError action', () => {
    const state = jobReducer(undefined, getJobError(true));
    expect(state).toEqual({ error: true, loading: false, jobs: [] });
  });
});
