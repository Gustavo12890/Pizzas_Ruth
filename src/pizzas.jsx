import { useState } from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';


const pizzas = [
  {
    id: 1,
    sabor: "Portuguesa",
    valor: 40,
  },
  {
    id: 2,
    sabor: "Paulista",
    valor: 30,
  },
];

function App2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {pizzas.map((pizza, index) => (
        <div key={pizza.id}>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{pizza.sabor}</Card.Title>
              <Card.Text>R$ {pizza.valor}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App2;
