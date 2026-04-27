import { Suspense } from 'react';
import './App.css';
// import DaisyNav from './components/DaisyNav/DaisyNav';
import Navbar from './components/DaisyNav/Navbar/Navbar';
import PricingOptions from './components/PricingOptions/PricingOptions';

// 2. pricing promise
const pricingPromise = fetch('pricingData.json')
  .then(res => res.json());

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
      </main>
    </>
  )
}

export default App
