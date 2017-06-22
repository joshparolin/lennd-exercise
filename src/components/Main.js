import React, { Component } from "react";
import R from "ramda";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getPeople, getFilterText, filterPeople, getExpandedPerson } from "../reducers";
import { Row, Block } from "jsxstyle";
import FilterBar from './FilterBar'
import List from './List'
import { colorTheme } from "./styleConstants";


const Main = ({
  people,
  expandPerson,
  searching,
  filterText,
  updateFilterText,
  numberOfPeople,
  expandedPerson
}) => (
  <Block border={`solid 1px ${colorTheme.grey2}`} borderRadius={'0 0 10px 10px'} >
    <FilterBar
      filterText={filterText}
      updateFilterText={updateFilterText}
      numberOfPeople={numberOfPeople}
    />
    <List people={people} expandPerson={expandPerson} expandedPerson={expandedPerson}/>
  </Block>
);

const mapStateToProps = state => {
  const filterText = getFilterText(state);
  const people = filterPeople(filterText, getPeople(state));
  return {
    people,
    filterText,
    numberOfPeople: R.length(R.keys(people)),
    searching: filterText !== '',
    expandedPerson: getExpandedPerson(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    expandPerson: id => {
      dispatch(actions.expandPerson(id));
    },
    updateFilterText: text => {
      dispatch(actions.updateFilterText(text));
    }
  };
};

const ConnectedComp = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectedComp;
