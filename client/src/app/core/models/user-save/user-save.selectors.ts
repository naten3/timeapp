import { State } from 'app/core/models/user-save';

export const getPendingUpdate = (state: State) => state ? state.pendingUpdate : null;
export const getSubmitted = (state: State) => state ? state.submitted : null;
export const getSuccess = (state: State) => state ? state.success : null;
export const getErrors = (state: State) => {
    return state.errors;
};
