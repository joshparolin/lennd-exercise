import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getPeople, getFilterText, filterPeople } from "../reducers";
import Input from './Input'

const Top = ({
  filterText,
  updateFilterText
}) => <div>
  <Input
    value={filterText}
    handleChange={updateFilterText}
    />
</div>

const List = () => <div></div>

const Main = ({
  people,
  expandPerson,
  filterText,
  updateFilterText
}) => <div>
  <Top
    filterText={filterText}
    updateFilterText={updateFilterText}
    />
  <List/>
</div>


const mapStateToProps = state => {
  const filterText = getFilterText(state)
  return {
    people: filterPeople(filterText, getPeople(state)),
    filterText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    expandPerson: id => {
      dispatch(actions.expandPerson(id));
    },
    updateFilterText: text => {
      dispatch(actions.updateFilterText(text))
    }
  };
};

const ConnectedComp = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectedComp;
