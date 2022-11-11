import { Provider } from 'react-redux';
import Navigation from './src/navigations/Navigation';
import { store } from './src/reducers/store';
export default function App() {
  return (
    <Provider store={store} >
        <Navigation />
    </Provider>
  );
}

