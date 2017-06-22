import React, { Component } from "react";
import R from "ramda";
import FilterInput from "./FilterInput";
import { Row, Block } from "jsxstyle";

const NumberOfPeople = ({ num }) => (
  <Block>{`${num} ${num === 1 ? "Person" : "People"}`}</Block>
);

const FilterBar = ({ filterText, updateFilterText, numberOfPeople, }) => (
  <Row justifyContent={"space-between"}>
    <FilterInput value={filterText} handleChange={updateFilterText} />
    <NumberOfPeople num={numberOfPeople} />
  </Row>
);

export default FilterBar
