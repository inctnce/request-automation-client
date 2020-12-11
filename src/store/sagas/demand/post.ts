import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import userLS from "../../../localStorage/user";
import Action from "../../../types/Action";
import Demand from "../../../types/Demand";
import ACTION from "../../ACTION";
import appAC from "../../actionCreators/app";
import catalogAC from "../../actionCreators/catalog";

async function postDemand(demand: Demand) {
  const data = {
    name: demand.name,
    products: JSON.stringify(demand.products),
    total_cost: demand.total_cost,
    deadlines: demand.deadlines,
    address: demand.address,
    financing_source: demand.financing_source,
    contact_person: demand.contact_person,
    responsible_person: demand.responsible_person,
    creator_id: demand.creator_id,
  };

  return await Axios.post("https://request-automation-api.herokuapp.com/demands/post", data, {
    headers: {
      Authorization: "Bearer " + userLS.get()?.accessToken, //the token is a variable which holds the token
    },
  })
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      } else {
        return "error";
      }
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

function* workerPostDemand(action: Action) {
  const data = yield call(postDemand, action.payload);

  if (data !== undefined) {
    console.log(data);
    yield put(
      appAC.setAlert({
        message: "Заявка отправлена",
        severity: "success",
      })
    );
    yield put(catalogAC.setProduct(data));
  } else {
    yield put(
      appAC.setAlert({
        message: "Ошибка отправления заявки",
        severity: "error",
      })
    );
  }
}

function* watchPostDemand() {
  yield takeEvery(ACTION.POST_DEMAND, workerPostDemand);
}

export default watchPostDemand;
