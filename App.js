import React from 'react';
import { StatusBar } from 'react-native';
import Menu from './src/components/Menu';
import { DoctorsContextProvider } from './src/hooks/doctorContext';
import { FavoritesContextProvider } from './src/hooks/favoritesContext';

export default function App() {
  return (
    <>
      <FavoritesContextProvider>
        <DoctorsContextProvider>
          <Menu />
        </DoctorsContextProvider>
      </FavoritesContextProvider>
      <StatusBar />
    </>
  );
}

