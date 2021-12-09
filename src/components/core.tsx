import React, { forwardRef, memo } from 'react';
import { Flex } from '@theme-ui/components';
import { BoxProps } from 'theme-ui';
export * from 'theme-ui';
export * from './nav';

export const Column = memo(
  forwardRef<HTMLDivElement, BoxProps>(
    ({ children, variant = 'column', ...props }, ref) => (
      <Flex
        {...props}
        ref={ref}
        variant={variant.match(/\./) ? variant : `flex.${variant}`}
      >
        {children}
      </Flex>
    )
  )
);

export const Row = memo(
  forwardRef<HTMLDivElement, BoxProps>(
    ({ children, variant = 'row', ...props }, ref) => (
      <Flex
        {...props}
        ref={ref}
        variant={variant.match(/\./) ? variant : `flex.${variant}`}
      >
        {' '}
        {children}
      </Flex>
    )
  )
);
