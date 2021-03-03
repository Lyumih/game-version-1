import {Card} from "./components/cards/Card";
import {GameCard} from './components/cards/GameCard';
function App() {
  return (
    <div className="App">
      <header>Моя игра</header>
      <div>
        <Card>123</Card>
        <GameCard>456</GameCard>
      </div>
    </div>
  );
}

export default App;
