import anime from 'animejs';

export const startupAnimations = () => {
  anime({
    targets: '.anim',
    translateX: () => [-200, 0],
    opacity: [0, 1],
    translateY: () => [200, 0],
    delay: anime.stagger(150, { grid: [4, 4], from: 'center' }),
    easing: 'spring(1.3, 70, 7, 0)',
  });
};
