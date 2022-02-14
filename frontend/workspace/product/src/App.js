import './App.css';
import { Content } from 'reporting-system';
import Product from './pages/Products';

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
        <h2>Produk</h2>
        <hr />
        <Product />
    </Content>
  );
}

export default App;
