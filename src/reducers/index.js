import { combineReducers } from "redux";
import R from "ramda";

const logAndPass = a => {
  console.log(a);
  return a
}

const session = (
  state = {
    loading: true,
    expandedPerson: null
  },
  action
) => {
  switch (action.type) {
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false
      };
    case "EXPAND_PERSON":
      return {
        ...state,
        expandedPerson: action.id
      };
    default:
      return state;
  }
};

const personAttrs = ["id", "name", "email", "address"];

const person = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PERSON":
      return {
        ...state,
        ...R.pick(personAttrs, action.personData)
      };
    default:
      return state;
  }
};

const arrToObjWithKeyId = arr => R.zipObj(R.map(R.path(["id"]), arr), arr);


const omitIfNoId = R.filter(R.has("id"));


const people = (state = {}, action) => {
  switch (action.type) {
    case "POPULATION_PEOPLE":
      const updatePerson = personData =>
        person(state[personData.id], {
          type: "UPDATE_PERSON",
          personData
        });
      const populatePeople = R.compose(
        arrToObjWithKeyId,
        R.map(updatePerson),
        omitIfNoId
      )
      return populatePeople(action.peopleData)
    default:
      return state;
  }
};

export const getLoading = R.path(['session', 'loading'])

const rootReducer = combineReducers({
  session,
  people
});

export default rootReducer;
