import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import authAC from "../../actionCreators/auth";
import ACTION from "../../ACTION";
import userLS from "../../../localStorage/user";

async function refreshToken(token: string) {
  return await Axios.post("https://request-automation-api.herokuapp.com/users/login", token, {
    headers: {
      Authorization: "Bearer " + userLS.get()?.accessToken,
    },
  })
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

function* workerRefreshToken(action: Action) {
  const data = yield call(refreshToken, action.payload);

  if (data !== undefined) {
    yield put(authAC.setAccessToken(data));
  }
}

function* watchLogin() {
  yield takeEvery(ACTION.REFRESH_TOKEN, workerRefreshToken);
}

export default watchLogin;
