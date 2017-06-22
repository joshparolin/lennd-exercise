import React, { Component } from "react";
import { Row, InlineBlock, Block } from "jsxstyle";
import { colorTheme } from "./styleConstants";


const Input = ({value, handleChange, placeholder, ...props}) => (
  <InlineBlock
    component={"input"}
    props={{
      type: "text",
      value: value || "",
      onChange: e => handleChange(e.target.value),
      placeholder
    }}
    cursor={"text"}
    outline={"none"}
    border={"none"}
    color={"inherit"}
    backgroundColor={"inherit"}
    {...props}
  />
)

const SearchIcon = (props) => <Block
  component={'i'}
  className="fa fa-flip-horizontal fa-search"
  {...props}
  />

const RaisedRow = ({height, width, children}) => (
  <Row
    height={height}
    width={width}
    alignItems={'center'}
    borderRadius={3}
    color={"black"}
    backgroundColor={"white"}
    boxShadow={`inset 0px 1px 3px 0px ${colorTheme.grey3}`}
    >
    {children}
  </Row>
)

const FilterInput = ({ value, handleChange }) => (
  <RaisedRow
    height={34}
    width={238}
    >
    <SearchIcon
      fontSize={15}
      marginLeft={12}
      color={"#888"}
      />
    <Input
      value={value}
      handleChange={handleChange}
      placeholder={"Find by name"}
      fontSize={15}
      paddingLeft={8}
      marginRight={4}
      flex={1}
      />
  </RaisedRow>

);

export default FilterInput
