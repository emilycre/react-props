import React from 'react';
import Header from './Header';
import Dog from './Dog';
import './index.css';

export default function App() {
  return (
    <>
      <img src="https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1"></img>
      <Header />
      <Dog name="Neil" age={3} weight="15lbs"/>
    </>
  );
}
