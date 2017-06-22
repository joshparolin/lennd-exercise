import React from "react";
import FilterInput from "./FilterInput";
import { Row, Block } from "jsxstyle";
import { colorTheme } from "./styleConstants";

const NumberOfPeople = ({ num }) => (
  <Block
    color={colorTheme.grey6}
    fontSize={20}
    fontWeight={"bold"}
  >{`${num} ${num === 1 ? "Person" : "People"}`}</Block>
);

const FilterBar = ({ filterText, updateFilterText, numberOfPeople }) => (
  <Row
    justifyContent={"space-between"}
    alignItems={"center"}
    height={71}
    backgroundColor={colorTheme.grey1}
    paddingLeft={28}
    paddingRight={36}
    borderBottom={`solid 2px ${colorTheme.grey2}`}
  >
    <FilterInput value={filterText} handleChange={updateFilterText} />
    <NumberOfPeople num={numberOfPeople} />
  </Row>
);

export default FilterBar;
