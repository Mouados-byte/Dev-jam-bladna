import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero from './components/Hero';

function App() {
  const cards = [
    { title: "Card 1", description: "This is card 1" },
    { title: "Card 2", description: "This is card 2" },
    { title: "Card 3", description: "This is card 3" },
    { title: "Card 4", description: "This is card 4" },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='w-screen grid grid-cols-4 p-4 gap-x-2'>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
