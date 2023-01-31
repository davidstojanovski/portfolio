import React from 'react';
import { SocialMediaIconsContainer } from '../SocialMediaIconsContainer';
import { AnimatedCloud } from './AnimatedCloud';

export const Skills = () => {
  const data = [
    { value: 'JavaScript', count: 50 },
    { value: 'TypeScript', count: 50 },
    { value: 'React', count: 50 },
    { value: 'VueJS', count: 35 },
    { value: 'NodeJS', count: 40 },
    { value: 'GoLang', count: 50 },
    { value: 'Java', count: 40 },
    { value: 'JavaSpring', count: 35 },
    { value: 'CSS3', count: 30 },
    { value: 'Jest', count: 30 },
    { value: 'Tailwind', count: 30 },
    { value: 'Docker', count: 30 },
    { value: 'PostgreSQL', count: 30 },
    { value: 'MongoDB', count: 30 },
    { value: 'Cloud', count: 25 },
    { value: 'MaterialUI', count: 25 },
    { value: 'StyledComponents', count: 25 },
  ];

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <SocialMediaIconsContainer />s{' '}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          minHeight: '600px',
        }}
      >
        <AnimatedCloud />
      </div>
    </div>
  );
};
