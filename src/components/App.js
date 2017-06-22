import React, { Component } from "react";
import { Block } from "jsxstyle";
import { connect } from "react-redux";
import * as actions from "../actions";
import apiStub from "../apiStub";
import { getLoading } from "../reducers";
import Main from './Main'
import Header from './Header'
import { colorTheme } from "./styleConstants";


class App extends Component {
  componentDidMount() {
    this.props.populatePeople(apiStub);
  }
  render() {
    return (
      <Block backgroundColor={colorTheme.grey1} height={'100%'}>
        <Header />
        <Block padding={'0 50px 50px 50px'}>
          {this.props.loading ? <div>Loading</div> : <Main />}
        </Block>

      </Block>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: getLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    populatePeople: peopleData => {
      dispatch(actions.populatePeople(peopleData));
      dispatch(actions.setLoadingFalse());
    }
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
