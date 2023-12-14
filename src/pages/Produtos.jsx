import { useEffect, useState } from "react";
import Menu from "./Menu";
import Card from "react-bootstrap/Card";

function Produtos() {
    const [users, setProdutos] = useState([]);

    function data() {
        fetch('http://localhost/api/pizzas').then((response) => response.json()).then((json) => setProdutos(json));
    }

    useEffect(() => {
        data();

    }, []);

    return(
        <div>
            <h1>Produtos</h1>
            <Menu/>
            <br />
            <br />
            <br />
            <ul>
                {users.map( pizzas =>
                    <Card key={pizzas.id} className="card-restaurante">
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <div className="conteudo-restaurante">
                          <Card.Title className="titulo-card">{pizzas.nome}</Card.Title>
                          <Card.Text className="texto-cardRestaurante">{pizzas.descricao}</Card.Text>
                          <p>A partir de</p>
                          <h6><b>{pizzas.preco}</b></h6>
                        </div>
                        <div className="div-imgRestaurante">
                          {/* <img className="image-restaurante" src={entradinha.image} alt="" /> */}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                    // <li key={pizzas.id}>{pizzas.nome}<br></br>{pizzas.descricao} <br />{pizzas.preco}</li>
                    )}
            </ul>
        </div>
    )
}

export default Produtos