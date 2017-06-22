import { combineReducers } from "redux";
import R from "ramda";

const logAndPass = a => {
  console.log(a);
  return a;
};

////////////////////////////////////////////////////
// session reducer

const session = (
  state = {
    loading: true,
    expandedPerson: null,
    filterText: ""
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_FILTER_TEXT":
      return {
        ...state,
        filterText: action.text
      };
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

////////////////////////////////////////////////////
// people reducer

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
      );
      return populatePeople(action.peopleData);
    default:
      return state;
  }
};

////////////////////////////////////////////////////
// root reducer

export const getPeople = R.path(["people"]);

export const getLoading = R.path(["session", "loading"]);

export const getFilterText = R.path(["session", "filterText"]);

export const getExpandedPerson = R.path(["session", "expandedPerson"]);

const matchTextRegExp = text => new RegExp(text, "gi");

export const filterPeople = (filterText, people) => {
  if (filterText === "") {
    return people;
  } else {
    const hasTextInName = R.compose(
      R.test(matchTextRegExp(filterText)),
      R.path(["name"])
    );
    return R.filter(hasTextInName, people);
  }
};

const rootReducer = combineReducers({
  session,
  people
});

export default rootReducer;
