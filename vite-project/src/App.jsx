import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
{/*import { Services } from './components/Services'; */}
import './App.css';

export function App  () {
  return (
    <div className="App">
      <Navbar />
      <Hero />
     {/*   <Services /> */}
    </div>
  );
};
export default App;