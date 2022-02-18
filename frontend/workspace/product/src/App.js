import './App.css';
import { Content } from 'reporting-system';
import Product from './pages/Products';
import Add from './pages/Add';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom'

function App() {

  const subMenuList = [
    {
      id: "1",
      link: "/product",
      description: "List of products"
    }
  ];

  const breadcrumb = [
    {
      id: 1,
      level: 1,
      description: "Product"
    },
    {
      id: 2,
      level: 2,
      description: "Menu 1"
    }
  ]

  return (
    <Content> 
        <Switch>
          <Route path='/product' element={<Product />} />
          <Route path='/product/add' element={<Add />} />
        </Switch>
    </Content>
  );
}

export default App;
