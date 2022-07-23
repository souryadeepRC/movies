import './App.css';
import Header from './components/Header/Header';
import Routing from './components/Routing/Routing';
import { MovieContextProvider } from './store/MovieContext';

function App() {
  return (
    <MovieContextProvider>
      <Header />
      <Routing />
    </MovieContextProvider>
  );
}

export default App;
