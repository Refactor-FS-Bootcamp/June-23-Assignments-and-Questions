import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import store from './redux/store';
import HookEggContainer from './components/HookEggContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
        <HookEggContainer />
      </Provider>
    </div>
  );
}

export default App;
