import React, { Component } from "react";
import R from "ramda";
import { Row, Block, Flex, InlineBlock } from "jsxstyle";
import Gravatar from "react-gravatar";
import { colorTheme } from "./styleConstants";

const Avatar = ({ email }) => (
  <Gravatar email={email} size={40} style={{ borderRadius: 8 }} />
);
const Name = ({ name }) => (
  <Block fontSize={20} color={colorTheme.grey6} fontWeight={"bold"}>
    {name}
  </Block>
);
const Email = ({ email }) => (
  <Block fontSize={16} color={colorTheme.grey3}>{email}</Block>
);

const NameAndEmail = ({ name, email }) => (
  <Block paddingLeft={16}>
    <Name name={name} />
    <Email email={email} />
  </Block>
);
const Status = () => <Block />;

const TopRow = ({ name, email }) => (
  <Row height={82} alignItems={"center"} paddingLeft={20}>
    <Avatar email={email} />
    <NameAndEmail {...{ name, email }} />
    <Status />
  </Row>
);

const Address = ({ street, suite, city, zipcode }) => (
  <Block color={colorTheme.grey3} fontSize={14} whiteSpace={"pre"}>
    <InlineBlock fontWeight={"bold"}>
      {"Address: "}
    </InlineBlock>
    {`${street}, ${suite}, ${city}, ${zipcode}`}
  </Block>
);

const BottomRow = ({ address }) => (
  <Row
    backgroundColor={colorTheme.grey1}
    height={27}
    alignItems={"center"}
    justifyContent={"flex-end"}
    paddingRight={36}
  >
    <Address
      street={address.street}
      suite={address.suite}
      city={address.city}
      zipcode={address.zipcode}
      />
  </Row>
);

const Item = ({ name, address, email, expand, expanded }) => (
  <Block
    props={{ onClick: expand }}
    borderBottom={`solid 1px ${colorTheme.grey2}`}
  >
    <TopRow {...{ name, email }} />
    {expanded && <BottomRow address={address} />}
  </Block>
);

const List = ({ people, expandPerson, expandedPerson }) => (
  <Block backgroundColor={colorTheme.white}>
    {R.map(person => {
      const expanded = expandedPerson === person.id;
      return (
        <Item
          key={person.id}
          name={person.name}
          address={person.address}
          email={person.email}
          expand={() =>
            expanded ? expandPerson(null) : expandPerson(person.id)}
          expanded={expanded}
        />
      );
    }, R.values(people))}
  </Block>
);

export default List;
