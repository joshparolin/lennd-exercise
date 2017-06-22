import React, { Component } from "react";
import { Flex } from "jsxstyle";
import { colorTheme } from "./styleConstants";


const Header = () => {
  return <Flex
    width={'100%'}
    height={162}
    fontSize={28}
    alignItems={'center'}
    fontWeight={'bold'}
    paddingLeft={50}
    color={'white'}
    background={`linear-gradient( 90deg, ${colorTheme.purple}, ${colorTheme.indigo} )`}>
    Team Members
  </Flex>
}
export default Header
