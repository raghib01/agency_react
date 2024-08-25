import React from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import { Cover } from "./components/Cover/Cover";
import {Sponsore} from "./components/Sponsore/Sponsore"
import { Service } from './components/Service/Service';
import { Banner } from './components/Banner/Banner';
import { Input } from './components/Input/Input';

const App = () => {
  return (
    <main className="overflow-x-hidden text-dark bg-slate-50">
      <Navbar />
      <Cover />
      <Sponsore/>
      <Service />
      <Banner />
      <Input />
    </main>
  )
}

export default App