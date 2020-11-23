import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import Action from "../../../types/Action";
import ACTION from "../../ACTION";
import appAC from "../../actionCreators/app";
import catalogAC from "../../actionCreators/catalog";

async function postCategory(creator_id: string, name: string) {
  const data = {
    creator_id: creator_id,
    name: name,
  };

  return await Axios.post(
    "https://request-automation-api.herokuapp.com/categories/post",
    data
  )
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch(() => {
      return;
    });
}

function* workerPostCategory(action: Action) {
  const data = yield call(
    postCategory,
    action.payload.creator_id,
    action.payload.name
  );

  if (data !== undefined) {
    console.log(data);
    yield put(
      appAC.setAlert({
        message: "Категория добавлена",
        severity: "success",
      })
    );
    yield put(catalogAC.setCategory(data));
  } else
    yield put(
      appAC.setAlert({
        message: "Ошибка добавления категории",
        severity: "error",
      })
    );
}

function* watchPostCategory() {
  yield takeEvery(ACTION.POST_CATEGORY, workerPostCategory);
}

export default watchPostCategory;
