import React, { Component } from "react";
import { Block } from "jsxstyle";
import { connect } from "react-redux";
import * as actions from "../actions";
import apiStub from "../apiStub";
import { getLoading } from "../reducers";

const Header = () => <div>Header</div>;

const Main = () => <div>Main</div>;

class App extends Component {
  componentDidMount() {
    this.props.populatePeople(apiStub);
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.loading ? <div>Loading</div> : <Main />}
        </div>
      </div>
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
