import './App.css';
import { Content } from 'reporting-system';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom'
import TransactionList from './pages/TransactionList';
import AddTransaction from './pages/AddTransaction';

function App() {
  return (
      <Content>
        <Switch>
          <Route path='/report' element={<TransactionList />}/>
          <Route path='/report/add' element={<AddTransaction />}/>
        </Switch>
      </Content>
  );
}

export default App;
