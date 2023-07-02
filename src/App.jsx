import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>


        {/* <Tech /> */}
        <About />

        <Experience />


        <div>
          {/* <StarsCanvas /> */}

          <Works />
          {/* <Feedbacks /> */}
        </div>
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}

        </div>
        <div className="calendly-inline-widget min-w-[320px] h-[700px]" data-url="https://calendly.com/btrex-media/30min"></div>

      </div>
    </BrowserRouter>
  );
}

export default App;
