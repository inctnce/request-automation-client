import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import authAC from "../../actionCreators/auth";
import ACTION from "../../ACTION";

async function login(email: string, password: string) {
  const data = {
    email: email,
    password: password,
  };

  return await Axios.post("https://request-automation-api.herokuapp.com/users/login", data)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      alert(err.response.data);
    });
}

function* workerLogin(action: Action) {
  const data = yield call(login, action.payload.email, action.payload.password);

  if (data !== undefined) {
    yield put(authAC.setUser(data));
  }
}

function* watchLogin() {
  yield takeEvery(ACTION.LOGIN, workerLogin);
}

export default watchLogin;
