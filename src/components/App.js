import React, { Component } from "react";
import { Block } from "jsxstyle";
import { connect } from "react-redux";
import * as actions from "../actions";
// import apiStub from "../apiStub";
import { getLoading } from "../reducers";
import Main from "./Main";
import Header from "./Header";
import { colorTheme } from "./styleConstants";
const endpoint = "http://jsonplaceholder.typicode.com/users";

const Loading = () => <Block padding={50}>Loading</Block>;
const ErrorMessage = () => (
  <Block padding={50}>{`Sorry, there's been an error`}</Block>
);

class App extends Component {
  componentDidMount() {
    var myRequest = new Request(endpoint);
    fetch(myRequest)
      .then(response => {
        if (response.ok) {
          var contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
          } else {
            throw new Error("Oops, we haven't got JSON!");
          }
        }
        throw new Error("Network response was not ok.");
      })
      .then(json => {
        this.props.populatePeople(json);
      })
      .catch(error => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        this.props.reportError();
      });
  }
  render() {
    return (
      <Block backgroundColor={colorTheme.grey1} height={"100%"}>
        <Header />
        <Block padding={"0 50px 50px 50px"}>
          {this.props.error
            ? <ErrorMessage />
            : this.props.loading ? <Loading /> : <Main />}
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
    },
    reportError: _ => {
      dispatch(actions.reportError());
    }
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
