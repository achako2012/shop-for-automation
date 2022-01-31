import {take, takeEvery, put,call} from 'redux-saga/effects'

const getPeople = async () => {
    const request = await fetch('http://swapi.dev/api/people')

    return await request.json();
}


export function* workerSaga() {
    // @ts-ignore
    const data = yield call(getPeople)

    yield put({type: 'SET_PEOPLE', payload: data.results})
}

export function* watchClickSaga() {
    // while (true) {
    //     yield take('CLICK')
    //
    //     yield workerSaga();
    // }

    yield takeEvery('LOAD_DATA', workerSaga)
}

export default function* rootSaga() {
    yield watchClickSaga();
}
