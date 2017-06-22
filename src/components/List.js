import React, { Component } from "react";
import R from "ramda";
import { Row, Block, Flex, InlineBlock } from "jsxstyle";
import Gravatar from "react-gravatar";
import { colorTheme } from "./styleConstants";
import { Collapse } from "react-collapse";
import { Motion, spring } from "react-motion";

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
  <Block paddingLeft={16} flex={1}>
    <Name name={name} />
    <Email email={email} />
  </Block>
);

const ChervonIcon = props => (
  <Block component={"i"} className="fa fa-chevron-right" {...props} />
);

const Status = ({ expanded }) => (
  <Row fontSize={18} color={colorTheme.grey4} alignItems={"center"}>
    Member
    <Motion style={{ x: spring(expanded ? 90 : 0) }}>
      {({ x }) => (
        <ChervonIcon
          fontSize={14}
          color={colorTheme.green}
          margin={8}
          transform={`rotate(${x}deg)`}
        />
      )}
    </Motion>
  </Row>
);

const TopRow = ({ name, email, expanded }) => (
  <Row height={82} alignItems={"center"} paddingLeft={20} paddingRight={36}>
    <Avatar email={email} />
    <NameAndEmail {...{ name, email }} />
    <Status expanded={expanded} />
  </Row>
);

const GoogleMap = ({ lat, lng }) => (
  <iframe
    src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyB3y14YDxyXlthqFGH-fxdBda-BfHrRs9c&center=${lat},${lng}&zoom=4`}
    style={{ border: 0, paddingTop: 10, paddingBottom: 10 }}
    width={300}
    height={200}
    frameBorder={"0"}
    allowFullScreen
  />
);

const Address = ({ street, suite, city, zipcode }) => (
  <Block
    color={colorTheme.grey3}
    fontSize={14}
    whiteSpace={"pre"}
    paddingTop={10}
  >
    <InlineBlock fontWeight={"bold"}>
      {"Address: "}
    </InlineBlock>
    {`${street}, ${suite}, ${city}, ${zipcode}`}
  </Block>
);

const BottomRow = ({ address }) => (
  <Flex
    backgroundColor={colorTheme.grey1}
    flexDirection={"column"}
    alignItems={"flex-end"}
    paddingRight={36}
  >
    <Address
      street={address.street}
      suite={address.suite}
      city={address.city}
      zipcode={address.zipcode}
    />
    <GoogleMap lat={address.geo.lat} lng={address.geo.lng} />

  </Flex>
);

const Item = ({ name, address, email, expand, expanded }) => (
  <Block
    props={{ onClick: expand }}
    borderBottom={`solid 1px ${colorTheme.grey2}`}
  >
    <TopRow {...{ name, email, expanded }} />
    <Collapse isOpened={expanded}>
      <BottomRow address={address} />
    </Collapse>
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
