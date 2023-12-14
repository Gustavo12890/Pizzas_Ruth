import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from "react-bootstrap/Container";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';

function Cadarpio() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pizzas, setPizzas] = useState([]);
    const [massas, setMassas] = useState([]);
    const [entradinhas, setEntradinhas] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    const [getPizzas, setPizza] = useState([]);
    const [getMassas, setMassa] = useState([]);
    const [getEntradinhas, setEntradinha] = useState([]);
    const [getBebidas, setBebida] = useState([]);

    const [modalShow, setModalShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [activeButton, setActiveButton] = useState("btn-pizzas");

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

    // Novas funções

    function mostrarPizzas() {
        fetch('http://localhost/api/categoriaPizzas').then((response) => response.json()).then((json) => setPizza(json));
    }

    function mostrarMassas() {
        fetch('http://localhost/api/categoriaMassas').then((response) => response.json()).then((json) => setMassa(json));
    }

    function mostrarEntradinhas() {
        fetch('http://localhost/api/categoriaEntradinhas').then((response) => response.json()).then((json) => setEntradinha(json));
    }

    function mostrarBebidas() {
        fetch('http://localhost/api/categoriaBebidas').then((response) => response.json()).then((json) => setBebida(json));
    }

    useEffect(() => {
        dataPizzas();
        dataMassas();
        dataEntradinhas();
        dataBebidas();

        mostrarPizzas();
        mostrarMassas();
        mostrarEntradinhas();
        mostrarBebidas();
    }, []);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const handleCardClickModal = (item) => {
        setSelectedItem(item);
        setModalShow(true);
    };

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
                                <Nav.Link className="link-restaurante me-3" href="restaurantes">Início</Nav.Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <a href="#"><img className="icone-restaurantes me-2" src="/image/img-restaurante/cardapio.png" alt="" /></a>
                                <Nav.Link className="text-black me-3" href="#link">Cardápio</Nav.Link>
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
                                        <Dropdown.Item className="menu-dropdown" href="/logout">Sair</Dropdown.Item>
                                        <Dropdown.Item className="menu-dropdown" href="/CadastrarProdutos">Cadastrar produtos</Dropdown.Item>
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

            <Container>
                <Row>
                    <Col>
                        <div className="d-flex gap-3 justify-content-center">
                            <Button id="btn-pizzas" className="botao-destaque" onClick={() => handleButtonClick("btn-pizzas")}>🍕 Pizzas</Button>
                            <Button id="btn-massas" className="botao-categoria" onClick={() => handleButtonClick("btn-massas")}>🍝 Massas</Button>
                            <Button id="btn-entradinhas" className="botao-categoria" onClick={() => handleButtonClick("btn-entradinhas")}>🤤 Entradinhas</Button>
                            <Button id="btn-bebidas" className="botao-categoria" onClick={() => handleButtonClick("btn-bebidas")}>🍻 Bebidas</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="d-flex flex-column mt-5">
                {activeButton === "btn-pizzas" && (
                    <Container>
                        <Row>
                            <Col>
                                <Container className="d-flex gap-5">
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
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(pizzas)}>Adicionar +</Button>
                                                        </div>
                                                    </div>
                                                    <div className="div-imgRestaurante">
                                                        <img className="image-restaurante" src={pizzas.imagem} alt="" />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    )}
                                </Container>

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
                                <div className="d-flex gap-5 mt-5">
                                    {getPizzas.map(pizzas =>
                                        <Card key={pizzas.id} className="card-restaurante">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between">
                                                    <div className="conteudo-restaurante">
                                                        <Card.Title className="titulo-card">{pizzas.nome}</Card.Title>
                                                        <Card.Text className="texto-cardRestaurante">{pizzas.descricao}</Card.Text>
                                                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                                                        <h6><b>R$</b> <b>{pizzas.preco}</b></h6>
                                                        <div className="pt-4">
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(pizzas)}>Adicionar +</Button>
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
                            </Col>
                        </Row>
                    </Container>
                )}

                {activeButton === "btn-massas" && (
                    <div>
                        <Row>
                            <Col>
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
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(massas)}>Adicionar +</Button>
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
                                <div className="d-flex gap-5 mt-5">
                                    {getMassas.map(massas =>
                                        <Card key={massas.id} className="card-restaurante">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between">
                                                    <div className="conteudo-restaurante">
                                                        <Card.Title className="titulo-card">{massas.nome}</Card.Title>
                                                        <Card.Text className="texto-cardRestaurante">{massas.descricao}</Card.Text>
                                                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                                                        <h6><b>R$</b> <b>{massas.preco}</b></h6>
                                                        <div className="pt-4">
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(massas)}>Adicionar +</Button>
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
                    </div>
                )}

                {activeButton === "btn-entradinhas" && (
                    <div>
                        <Row>
                            <Col>
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
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(entradinhas)}>Adicionar +</Button>
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
                                <div className="d-flex gap-5 mt-5">
                                    {getEntradinhas.map(entradinhas =>
                                        <Card key={entradinhas.id} className="card-restaurante">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between">
                                                    <div className="conteudo-restaurante">
                                                        <Card.Title className="titulo-card">{entradinhas.nome}</Card.Title>
                                                        <Card.Text className="texto-cardRestaurante">{entradinhas.descricao}</Card.Text>
                                                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                                                        <h6><b>R$</b> <b>{entradinhas.preco}</b></h6>
                                                        <div className="pt-4">
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(entradinhas)}>Adicionar +</Button>
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
                    </div>
                )}

                {activeButton === "btn-bebidas" && (
                    <div>
                        <Row>
                            <Col>
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
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(bebidas)}>Adicionar +</Button>
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

                        <Row>
                            <Col>
                                <div className="d-flex gap-5 mt-5">
                                    {getBebidas.map(bebidas =>
                                        <Card key={bebidas.id} className="card-restaurante">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between">
                                                    <div className="conteudo-restaurante">
                                                        <Card.Title className="titulo-card">{bebidas.nome}</Card.Title>
                                                        <Card.Text className="texto-cardRestaurante">{bebidas.descricao}</Card.Text>
                                                        <p style={{ fontSize: '0.80rem' }}>A partir de</p>
                                                        <h6><b>R$</b> <b>{bebidas.preco}</b></h6>
                                                        <div className="pt-4">
                                                            <Button className="botao-restaurantes" onClick={() => handleCardClickModal(bebidas)}>Adicionar +</Button>
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
                    </div>
                )}
            </Container>
        </div>
    )
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

export default Cadarpio