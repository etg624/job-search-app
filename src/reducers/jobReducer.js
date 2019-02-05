import {
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
  ADD_JOB
} from '../actions/jobs';

const initialState = {
  jobs: [
    {
      _id: '000000000000000000000000',
      title: 'New Job 1',
      description: 'Lorem ipsum dolor .',
      comments: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'],
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: true,
      pay: '$30-$45 an hr'
    },
    {
      _id: '000000000000000000000001',
      title: 'New Job 2',
      description: 'Posuere sollicitudin.',
      comments: ['Holy moly a comment'],
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: false,
      pay: '$30-$45 an hr'
    },
    {
      _id: '000000000000000000000002',
      title: 'New Job 3',
      description: 'Lorem ipsum dolor sit amet.',
      comments: ['Call Billy Bob', 'Super Awesome'],
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: false,
      pay: '$30-$45 an hr'
    },
    {
      _id: '000000000000000000000003',
      title: 'Crazy Job',
      description: 'Posuere sollicitudin.',
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: false,
      pay: '$30-$45 an hr'
    },
    {
      _id: '000000000000000000000004',
      title: 'New Job 4',
      description: 'Lorem ipsum dolor sit amet,.',
      comments: ['Helllllooooooo'],
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: false,
      pay: '$30-$45 an hr'
    },
    {
      _id: '000000000000000000000005',
      title: 'New Job 5',
      description: 'Posuere sollicitudin',

      comments: ['Cool catz'],
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: false,
      pay: '$30-$45 an hr'
    },
    {
      _id: '000000000000000000000006',
      title: 'New Job 6',
      description: 'Lorem ipsum dolor sit amet,',

      comments: ['Insane in the brain'],
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: false,
      pay: '$30-$45 an hr'
    },
    {
      _id: '000000000000000000000007',
      title: 'New Job 7',
      description: 'Posuere sollicitudin aliquam ultrices',
      userId: '333333333333333333333301',
      location: 'Los Angeles',
      applied: false,
      pay: '$30-$45 an hr'
    }
  ],
  loading: false,
  error: null
};

export function jobReducer(state = initialState, action) {
  if (action.type === GET_JOB_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (action.type === GET_JOB_SUCCESS) {
    console.log(...state.jobs);
    return {
      ...state,
      jobs: [...state.jobs, action.jobs],
      loading: false,
      error: null
    };
  } else if (action.type === GET_JOB_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  } else if (action.type === ADD_JOB) {
    return {
      ...state,
      jobs: [...state.jobs, action.newJob]
    };
  }
  return state;
}
