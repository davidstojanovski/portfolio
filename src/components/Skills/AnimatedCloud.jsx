import React from 'react';
import allIcons from 'simple-icons';
import { v4 } from 'uuid';
import { IconCloud } from 'react-icon-cloud';

export const AnimatedCloud = () => {
  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native', // null | 'div'
    tooltipDelay: 0,
    wheelZoom: false,
  };

  const iconSlugs = [
    'typescript',
    'javascript',
    'java',
    'react',
    'html5',
    'css3',
    'nodedotjs',
    'postgresql',
    'testinglibrary',
    'jest',
    'docker',
    'git',
    'jira',
    'github',
    'figma',
    'spring',
    'vuedotjs',
    'go',
    'mongodb',
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));
  return (
    <div>
      <IconCloud
        key={v4()}
        id={'icon'}
        minContrastRatio={1}
        iconSize={50}
        backgroundHexColor={'#fff'}
        fallbackHexColor={'#000'}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};
