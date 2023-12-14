import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardProduto from "./ProdutoCadastrado";
import { useParams } from "react-router-dom";

function Restaurantes() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pizzas, setPizzas] = useState([]);
  const [massas, setMassas] = useState([]);
  const [entradinhas, setEntradinhas] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { produtoId } = useParams(); // Use useParams para obter parâmetros da URL
  const [produto, setProduto] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  function dataPizzas() {
    fetch('http://localhost/api/pizzas').then((response) => response.json()).then((json) => setPizzas(json));
  }

  function dataMassas() {
    fetch('http://localhost/api/massas').then((response) => response.json()).then((json) => setMassas(json));
  }

  function dataEntradinhas() {
    fetch('http://localhost/api/entradinhas').then((response) => response.json()).then((json) => setEntradinhas(json));
  }
  function dataBebidas() {
    fetch('http://localhost/api/bebidas').then((response) => response.json()).then((json) => setBebidas(json));
  }

  useEffect(() => {
    dataPizzas();
    dataMassas();
    dataEntradinhas();
    dataBebidas();

    if (produtoId) {
      fetch(`http://localhost/api/produtos/${produtoId}`)
        .then((response) => response.json())
        .then((json) => setProduto(json));
    }

  }, [produtoId]);

  const renderSection = (title, items, handleClick) => (
    <div className="mt-5">
      <h4 className="mb-4">{title}</h4>
      <div className="scroll-cards d-flex carousel-item">
        {renderCards(items, handleClick)}
      </div>
    </div>
  );

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navBar p-4">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
            <a href="/"><img className="logo" src="/image/img-restaurante/logo.png" alt="" /></a>
            <Navbar.Brand className="logotipo" href="/">Pizzas Ruth</Navbar.Brand>
          </div>
          <Navbar.Collapse className="collapse" id="responsive-navbar-nav">
            <Nav className="text-center align-items-center ms-4">
              <div className="d-flex align-items-center">
                <a href="#"><img className="icone-restaurantes me-2" src="/image/img-restaurante/casa.png" alt="" /></a>
                <Nav.Link className="link-restaurante me-3" href="usuario">Início</Nav.Link>
              </div>
              <div className="d-flex align-items-center">
                <a href="#"><img className="icone-restaurantes me-2" src="/image/img-restaurante/cardapio.png" alt="" /></a>
                <Nav.Link className="text-black me-3" href="cardapio">Cardápio</Nav.Link>
              </div>
              <div className="d-flex align-items-center">
                <a href="#"><img className="icone-restaurantes me-2" src="/image/img-restaurante/pizza2.png" alt="" /></a>
                <Nav.Link className="text-black" href="#link">Meio a meio</Nav.Link>
              </div>
            </Nav>
            <Nav className="ms-auto">
              <div className="d-flex align-items-center">
                <a href="#"><img className="icone-restaurantes" src="/image/img-restaurante/localizacao2.png" alt="" /></a>
                <Nav.Link className="text-black endereco" href="#">Praça Coronel Lopes, 387</Nav.Link>
                <a href="#"><img className="icone-restaurantes me-4" src="/image/img-restaurante/seta-baixo.png" alt="" /></a>
              </div>
              <div className="d-flex align-items-center">
                <a href="#"><img className="icone-restaurantes" src="/image/img-restaurante/perfil.png" alt="" /></a>
                <Dropdown>
                  <Dropdown.Toggle className="dropdown-perfil" id="dropdown-basic">
                    Meu perfil
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/logout">Sair</Dropdown.Item>
                    <Dropdown.Item href="/CadastrarProdutos">Cadastrar produtos</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      <Container>
        <Button className="botao-carrinho d-flex ms-auto align-items-center">
          <div className="box-icone">
            <img style={{ width: '1.6rem' }} src="/image/img-restaurante/carrinho.png" alt="" />
          </div>
          <div>
            <p style={{ fontWeight: 500 }} className="m-0">R$ 0,00</p>
            <p className="m-0">0 itens</p>
          </div>
        </Button>
      </Container>

      <Container className="d-flex flex-column">
        <Row>
          <Col>
            <div className="mt-5">
              <h4 className="mb-4">Tá na mão as mais recomendadas</h4>
              <h4 className="mb-4">Pizzas</h4>
            </div>

            <div className="d-flex gap-5">
              {pizzas.map(pizzas =>
                <Card key={pizzas.id} className="card-restaurante">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div className="conteudo-restaurante">
                        <Card.Title className="titulo-card">{pizzas.nome}</Card.Title>
                        <Card.Text className="texto-cardRestaurante">{pizzas.descricao}</Card.Text>
                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                        <h6><b>R$</b> <b>{pizzas.preco}</b></h6>
                        <div className="pt-4">
                          <Button className="botao-restaurantes" onClick={() => handleCardClick(pizzas)}>Adicionar +</Button>
                        </div>
                      </div>
                      <div className="div-imgRestaurante">
                        <img className="image-restaurante" src={pizzas.imagem} alt="" />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>

            {selectedItem && (
              <MyVerticallyCenteredModal show={modalShow} onHide={() => {
                setModalShow(false);
                setSelectedItem(null); // Limpe o item selecionado ao fechar o modal
              }}
                item={selectedItem} // Passe o item selecionado para o modal
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 className="mb-4 mt-4">Massas</h4>

            <div className="d-flex gap-5">
              {massas.map(massas =>
                <Card key={massas.id} className="card-restaurante">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div className="conteudo-restaurante">
                        <Card.Title className="titulo-card">{massas.nome}</Card.Title>
                        <Card.Text className="texto-cardRestaurante">{massas.descricao}</Card.Text>
                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                        <h6><b>R$</b> <b>{massas.preco}</b></h6>
                        <div className="pt-4">
                          <Button className="botao-restaurantes" onClick={() => handleCardClick(massas)}>Adicionar +</Button>
                        </div>
                      </div>
                      <div className="div-imgRestaurante">
                        <img className="image-restaurante" src={massas.imagem} alt="" />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 className="mb-4 mt-4">Entradinhas</h4>

            <div className="d-flex gap-5">
              {entradinhas.map(entradinhas =>
                <Card key={entradinhas.id} className="card-restaurante">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div className="conteudo-restaurante">
                        <Card.Title className="titulo-card">{entradinhas.nome}</Card.Title>
                        <Card.Text className="texto-cardRestaurante">{entradinhas.descricao}</Card.Text>
                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                        <h6><b>R$</b> <b>{entradinhas.preco}</b></h6>
                        <div className="pt-4">
                          <Button className="botao-restaurantes" onClick={() => handleCardClick(entradinhas)}>Adicionar +</Button>
                        </div>
                      </div>
                      <div className="div-imgRestaurante">
                        <img className="image-restaurante" src={entradinhas.imagem} alt="" />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 className="mb-4 mt-4">Bebidas</h4>

            <div className="d-flex gap-5">
              {bebidas.map(bebidas =>
                <Card key={bebidas.id} className="card-restaurante">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div className="conteudo-restaurante">
                        <Card.Title className="titulo-card">{bebidas.nome}</Card.Title>
                        <Card.Text className="texto-cardRestaurante">{bebidas.descricao}</Card.Text>
                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                        <h6><b>R$</b> <b>{bebidas.preco}</b></h6>
                        <div className="pt-4">
                          <Button className="botao-restaurantes" onClick={() => handleCardClick(bebidas)}>Adicionar +</Button>
                        </div>
                      </div>
                      <div className="div-imgRestaurante">
                        <img className="image-restaurante2" src={bebidas.imagem} alt="" />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </div>
          </Col>
        </Row>

      </Container>

      <div className="container-fluid mt-5">

        <footer className="footer text-white row">
          <div className="justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top">
            <div className="col mb-3">
              <h5 className="mb-3">Quem somos</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><a href="#" className="nav-link p-0">Nossa história</a></li>
                <li className="nav-item mb-4"><a href="#" className="nav-link p-0">Seja uma franqueado</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className="mb-3">Atendimento ao cliente</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><a href="#" className="nav-link p-0">Fale conosco</a></li>
                <li className="nav-item mb-4"><a href="#" className="nav-link p-0">Pesquisa de satisfação</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className="mb-3">Termos</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-3"><a href="#" className="nav-link p-0">Política de Privacidade</a></li>
                <li className="nav-item mb-3"><a href="#" className="nav-link p-0">Adendo à Política de Privacidade</a></li>
                <li className="nav-item mb-3"><a href="#" className="nav-link p-0">Política de cookies e anúncios</a></li>
                <li className="nav-item mb-4"><a href="#" className="nav-link p-0">Termos de uso</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5 className=" mb-4">Conecte-se com a Pizza Ruth</h5>
              <div className="d-flex justify-content-between">
                <a href="#"><img className="icone" src="/image/img-home/facebook.png" alt="icone do facebook" /></a>
                <a href="#"><img className="icone" src="/image/img-home/instagram.png" alt="icone do instagram" /></a>
                <a href="#"><img className="icone" src="/image/img-home/tik-tok.png" alt="icone do tik tok" /></a>
                <a href="#"><img className="icone" src="/image/img-home/twitter.png" alt="icone do twitter" /></a>
                <a href="#"><img className="icone" src="/image/img-home/youtube.png" alt="icone do youtube" /></a>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <hr className="linha-footer" />
          </div>

          <div className="fs-6 mt-4 mb-4 d-flex justify-content-center align-items-center">
            <img className="logo" src="/image/img-home/logo2.png" alt="" />
            <div className="text-container">
              <p className="mt-3">Copyright © @2023 PIMENTA VERDE ALIMENTOS LTDA. – CNPJ :09.060.964/0001-08 - AVENIDA DRA RUTH CARDOSO Nº: 4777 – <br /> JARDIM UNIVERSIDADE PINHEIROS – SÃO PAULO/SP. Todos os direitos reservados.</p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <hr className="linha-footer" />
          </div>
        </footer>

      </div>

    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const { item, onHide, ...rest } = props;

  return (
    <Modal {...rest} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">{item.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img src={item.imagem} alt={item.nome} className="img-modal img-fluid mb-3" />
        </div>
        <h4>Detalhes do item</h4>
        <p>{item.descricao}</p>
        <p>A partir de</p>
        <h6><b>R$ {item.preco}</b></h6>
      </Modal.Body>
      <Modal.Footer>
        <Button className="botao-modal">Adicionar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function renderCards(items, handleClick) {
  return (
    <div className="scroll-cards d-flex carousel-item">
      {items.map((item) => (
        <Card key={item.id} className="card-restaurante">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div className="conteudo-restaurante">
                <Card.Title className="titulo-card">{item.nome}</Card.Title>
                <Card.Text className="texto-cardRestaurante">{item.descricao}</Card.Text>
                <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                <h6>
                  <b>R$</b> <b>{item.preco}</b>
                </h6>
                <div className="pt-4">
                  <Button className="botao-restaurantes" onClick={() => handleClick(item)}>
                    Adicionar +
                  </Button>
                </div>
              </div>
              <div className="div-imgRestaurante">
                <img className="image-restaurante" src={item.imagem} alt="" />
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Restaurantes;