import {
  Hero,
  Stats,
  Feature
} from './components'

function App() {
  return (
    <div className="mx-auto w-full max-w-[1240px]
        bg-white ">
      <Hero />
      <Stats />
      <Feature />
    </div>
  );
}

export default App;
