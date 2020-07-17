import streams from '../apis/streams'
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from './types'
import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const createStreams = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth
    const resposne = await streams.post('/streams', { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: resposne.data });
    history.push('/')
};

export const fetchStreams = () => async dispatch => {
    const resposne = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: resposne.data });
};

export const fetchStream = id => async dispatch => {
    const resposne = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: resposne.data });
}

export const editStream = (id, formValues) => async dispatch => {
    const resposne = await streams.put(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: resposne.data });
};

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id })
}