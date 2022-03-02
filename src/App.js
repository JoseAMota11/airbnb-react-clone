import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Cards';
import Data from "./Data";

function App() {
  const data = Data.map((dt) => {
    return (
      <Card 
        img={dt.coverImg}
        rating={dt.stats.rating}
        reviewCount={dt.stats.reviewCount}
        location={dt.location}
        title={dt.title}
        price={dt.price}
        openSpots={dt.openSpots}
    />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='card__container'>
        {data}
      </div>
    </div>
  );
}

export default App;