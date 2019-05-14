import React from 'react';
import Header from './Header';
import Color from './Color';

export default function App() {
  return (
    <>
      <Header />
      <Color name="Navy" hex="#000080" red={0} green={0} blue={128}/>
    </>
  );
}
