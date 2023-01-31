import React, { useEffect, useState } from 'react';
import { Logo } from './components/Logo';
import { Home } from './components/Home/Home';
import bg from './static/basic-bg.jpg';
import styled from 'styled-components/macro';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { AnimalAnimation } from './components/AnimalAnimation';
import { NavbarResponsive } from './components/Navbar/NavbarResponsive';
import { Skills } from './components/Skills/Skills';

const AppContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100%;
  padding: 40px;
  font-family: 'Heebo', sans-serif;
`;

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    const deleteTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(deleteTimeout);
    };
  });

  const Base = () => {
    return (
      <>
        {isLoading && <Logo />}
        {!isLoading && <Home />}
      </>
    );
  };

  return (
    <AppContainer>
      {!isMobile && <AnimalAnimation />}
      <NavbarResponsive />
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </AppContainer>
  );
};
