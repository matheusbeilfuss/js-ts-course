import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

// Função geradora
function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  console.log('continua');
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest), // qual ação vai ouvir e qual função vai disparar
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
