import React from 'react';
import { Button, useThemeUI, Row, useColorMode } from './core';

export const Dimmer = (): JSX.Element => {
  const {
    theme: { rawColors },
    setColorMode,
  } = useThemeUI();
  const [currentMode] = useColorMode();

  return (
    <Row sx={{}}>
      {Object.entries(rawColors?.modes || {}).map(([mode, values]) => (
        <Button
          key={mode}
          variant={mode === currentMode ? 'active' : 'default'}
          sx={{ bg: values.secondary, color: values.text }}
          onClick={() => setColorMode && setColorMode(mode)}
        >
          {mode}
        </Button>
      ))}
    </Row>
  );
};
