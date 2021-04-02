import React from 'react';
import { StatusBar } from 'react-native';
import Menu from './src/components/Menu';
import { DoctorsContextProvider } from './src/hooks/doctorContext';

export default function App() {
  return (
    <>
      <DoctorsContextProvider>
        <Menu />
      </DoctorsContextProvider>
      <StatusBar />
    </>
  );
}

