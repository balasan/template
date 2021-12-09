import React from 'react';
import { Column } from '@components/core';
import { Dimmer } from '@components';
import { Themed } from 'theme-ui';
import {
  TypeScale,
  TypeStyle,
  ColorPalette,
  ThemeCard,
} from '@theme-ui/style-guide';

export const Home = (): JSX.Element => {
  return (
    <Column>
      <Dimmer />
      <Themed.h1>Style Guide</Themed.h1>
      <ThemeCard />
      <ColorPalette />
      <TypeScale />
      <TypeStyle
        fontFamily="heading"
        fontWeight="heading"
        lineHeight="heading"
      />
      <TypeStyle
        fontFamily="heading"
        fontWeight="heading"
        lineHeight="heading"
      />
      <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
      <TypeStyle
        fontFamily="monospace"
        fontWeight="display"
        lineHeight="display"
      />
    </Column>
  );
};
