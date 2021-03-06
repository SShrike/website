import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import { breakpoint, color } from '../constants';

const Container = styled('header')({ padding: '0.8em' });

const Avatar = styled('img')({
  position: 'absolute',
  right: '0.8em',
  width: '3em',
  height: '3em',

  borderRadius: '60px',

  [breakpoint.desktop]: {
    right: 'auto',
    width: '6em',
    height: '6em',
  },
});

const Title = styled('h1')({
  display: 'inline-block',
  marginBottom: '0.5em',
  textTransform: 'uppercase',

  [breakpoint.desktop]: {
    marginTop: '0.4em',
    marginLeft: '3.4em',
  },
});

const Subtitle = styled('small')({
  display: 'block',
  maxWidth: '85%',
  paddingTop: '0.4em',
  borderTop: `0.18em solid ${color.border}`,
  fontSize: '50%',
  textTransform: 'initial',

  '@media only screen and (min-width: 30em)': {
    maxWidth: '100%',
  },
});

interface Props {
  title: string;
  subtitle: string;
  avatar: string;
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
