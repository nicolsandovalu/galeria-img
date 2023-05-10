
import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import data from './data/cardData';
  function App() {
    function handleBuy() {
      alert('Compraste esta imagen');
    }
    return (
      <div>
        <Header title="Galería de Imágenes con React" />
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              url={card.url}
              title={card.title}
              description={card.description}
              onBuyClick={handleBuy}
            />
          );
        })
        }

        {/* Repite Card con otras imágenes */}
        <Footer />
      </div>
    );
  }

export default App;