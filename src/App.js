import {Card} from "./components/cards/Card";
import {GameCard} from './components/cards/GameCard';
import Game from "./components/games/Game";
function App() {
  return (
    <div className="App">
      <header>Моя игра</header>
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
