import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardProduto = ({ product, onCardClick }) => {
  return (
    <Card key={product.id} className="card-restaurante">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="conteudo-restaurante">
            <Card.Title className="titulo-card">{product.nome}</Card.Title>
            <Card.Text className="texto-cardRestaurante">{product.descricao}</Card.Text>
            <p style={{ fontSize: '0.80rem' }}>A partir de</p>
            <h6><b>R$</b> <b>{product.preco}</b></h6>
            <div className="pt-4">
              <Button className="botao-restaurantes" onClick={() => onCardClick(product)}>Adicionar +</Button>
            </div>
          </div>
          <div className="div-imgRestaurante">
            <img className="image-restaurante" src={product.imagem} alt="" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduto;
