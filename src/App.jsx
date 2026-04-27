import { Suspense } from 'react';
import './App.css';
// import DaisyNav from './components/DaisyNav/DaisyNav';
import Navbar from './components/DaisyNav/Navbar/Navbar';
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultsCharts from './ResultsCharts/ResultsCharts';
import axios from 'axios';
import MarksCharts from './components/MarksChats/MarksCharts';

// 2. pricing promise
const pricingPromise = fetch('pricingData.json')
  .then(res => res.json());

// axios use 
const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          {/* 1. suspense */}
          {/* promise props pathalam */}
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        {/* marksCharts er jonno - axios use */}
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <MarksCharts marksPromise={marksPromise}></MarksCharts>
        </Suspense>


        <ResultsCharts></ResultsCharts>
      </main>
    </>
  )
}

export default App
