import React, { Component } from "react";
import R from "ramda";
import { Row, Block, Flex } from "jsxstyle";

const Col = ({children, ...props}) => <Flex flexDirection={'column'} {...props}>{children}</Flex>

const Avatar = () => <Block />;
const Name = ({name}) => <Block >{name}</Block>;
const Email = ({email}) => <Block >{email}</Block>;


const NameAndEmail = ({name, email}) => <Col >
  <Name name={name}/>
  <Email email={email}/>
</Col>
const Status = () => <Block />;

const TopRow = ({name, email}) => (
  <Row>
    <Avatar />
    <NameAndEmail {...{name, email}}/>
    <Status />
  </Row>
);

const Address = ({address}) => <Block >{address.street}</Block>

const BottomRow = ({address}) => (
  <Row>
    <Address address={address}/>
  </Row>
);

const Item = ({ name, address, email, expand, expanded }) => (
  <Block props={{ onClick: expand }}>
    <TopRow {...{name, email}}/>
    {expanded && <BottomRow address={address}/>}
  </Block>
);

const List = ({ people, expandPerson, expandedPerson }) => (
  <Block>
    {R.map(
      (person) => {
        const expanded = expandedPerson === person.id
        return (
          <Item
            key={person.id}
            name={person.name}
            address={person.address}
            email={person.email}
            expand={() => expanded ? expandPerson(null) : expandPerson(person.id)}
            expanded={expanded}
          />
        )
      },
      R.values(people)
    )}
  </Block>
);

export default List;
