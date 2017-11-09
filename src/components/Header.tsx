import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const Container = styled('header')`
  padding: 0.8em;
`;

const Avatar = styled('img')`
  position: absolute;
  right: 0.8em;
  width: 3em;
  height: 3em;

  border-radius: 60px;

  @media only screen and (min-width: 48em) {
    right: auto;
    width: 6em;
    height: 6em;
  }
`;

const Title = styled('h1')`
  display: inline-block;
  margin-bottom: 0.5em;
  text-transform: uppercase;

  @media only screen and (min-width: 48em) {
    margin-top: 0.4em;
    margin-left: 3.4em;
  }
`;

const Subtitle = styled('small')`
  display: block;
  max-width: 85%;
  padding-top: 0.4em;
  border-top: 0.18em solid hsl(183, 31%, 34%);
  font-size: 50%;
  text-transform: initial;

  @media only screen and (min-width: 30em) {
    max-width: 100%;
  }
`;

interface Props {
  title: string,
  subtitle: string,
  avatar: string,
}

const Header = ({ title, subtitle, avatar }: Props) => (
  <Container>
    <Link to="/">
      <Avatar src={avatar} alt="" />

      <Title>
        {title}

        <Subtitle>{subtitle}</Subtitle>
      </Title>
    </Link>
  </Container>
);

export default Header;
