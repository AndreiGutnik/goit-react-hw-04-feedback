import React from 'react';
import { Title } from './Section.styled';
import { SectionWrap } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
}
