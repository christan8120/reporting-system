import './App.css';
import { Content } from 'reporting-system';

function App() {
  const subMenuList = [
    {
      id: "1",
      link: "/dashboard/abc",
      description: "Menu 1"
    },
    {
      id: "2",
      link: "/dashboard/bcd",
      description: "Menu 2"
    },
    {
      id: "3",
      link: "/dashboard/cde",
      description: "Menu 3"
    },
  ];

  const breadcrumb = [
    {
      id: 1,
      level: 1,
      description: "Dashboard"
    },
    {
      id: 2,
      level: 2,
      description: "Menu 1"
    }
  ]
  return (
      <Content subMenuList={subMenuList} breadcrumb={breadcrumb}>
        Content
      </Content>
  );
}

export default App;
