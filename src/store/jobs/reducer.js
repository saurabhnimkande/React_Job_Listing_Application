import { ADD_JOB, APPLY_JOB, WHO_APPLIED } from "./actionTypes";

const init = {
  jobs: [
    {
      id: "sdafkljadsfweoiruew",
      company: "Paytm",
      title: "SDE I",
      salary: "1234564-4654654 RS",
      description: "SDE 1 wanted apply now",
      location: "Mumbai",
      type: "Remote",
    },
    {
      id: "sdafkljasaddsfweoiruew",
      company: "Dream 11",
      title: "SDE II",
      salary: "12343264-46543654 RS",
      description: "SDE 2 wanted apply now",
      location: "Mumbai",
      type: "Office",
    },
    {
      id: "sdafkljadsfwfdsffdeoiruew",
      company: "Google",
      title: "SDE III",
      salary: "1234562344-4654623454 Rs",
      description: "SDE 3 wanted apply now",
      location: "London",
      type: "Remote",
    },
  ],
  appliedJobs: [],
  whoApplied: [],
};

export const jobReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, payload] };
    case APPLY_JOB:
      return { ...state, appliedJobs: [...state.appliedJobs, payload] };
    case WHO_APPLIED:
      return { ...state, whoApplied: [...state.whoApplied, payload] };
    default:
      return state;
  }
};
