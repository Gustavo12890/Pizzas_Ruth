import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from 'react-bootstrap/Dropdown';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CadastrarProdutos() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('nome', produto.nome);
            formData.append('descricao', produto.descricao);
            formData.append('preco', produto.preco);
            formData.append('imagem', produto.imagem);
            formData.append('categoria', produto.categoria);

            const response = await fetch("http://localhost/api/produtos", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("Produto cadastrado com sucesso!");
                // Adicione aqui o redirecionamento ou qualquer outra ação necessária
            } else {
                console.error("Erro ao cadastrar o produto");
            }
        } catch (error) {
            console.error("Erro ao processar a solicitação:", error);
        }
    };

    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        preco: '',
        imagem: null,
        categoria:'',
    });

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'file'|| name === 'categoria') {
            // Se o tipo é um arquivo, atualize o estado com o arquivo selecionado
            setProduto({
                ...produto,
                [name]: type === 'file' ? event.target.files[0] : value,
            });
        } else {
            // Se não é um arquivo, atualize o estado normalmente
            setProduto({
                ...produto,
                [name]: value,
            });
        }
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
                <Row>
                    <Col>
                        <h6 className="titulo text-center">Cadastro de produtos</h6>
                        <div className="d-flex justify-content-center">
                            <Form className="form-produtos" onSubmit={handleSubmit}>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Nome do Produto</Form.Label>
                                    <Form.Control className="input-produtos mb-3" type="text" placeholder="Digite o nome do produto" name="nome" value={produto.nome} onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group controlId="formDescricao">
                                    <Form.Label>Descrição do Produto</Form.Label>
                                    <Form.Control className="input-produtos mb-3" as="textarea" rows={3} placeholder="Digite a descrição do produto" name="descricao" value={produto.descricao} onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group controlId="formPreco">
                                    <Form.Label>Preço do Produto</Form.Label>
                                    <Form.Control className="input-produtos mb-3" type="text" placeholder="Digite o preço do produto" name="preco" value={produto.preco} onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group controlId="formImagem">
                                    <Form.Label>Imagem do Produto</Form.Label>
                                    <Form.Control className="input-produtos mb-3" type="file" placeholder="Digite a URL da imagem do produto" name="imagem" onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group controlId="formImagem">
                                    <Form.Label>Tipo de Produto</Form.Label>
                                    <Form.Select className="input-produtos mb-3" name="categoria" onChange={handleInputChange} aria-label="Default select example">
                                        <option>Selecione o tipo de produto</option>
                                        <option value="Pizzas">Pizzas</option>
                                        <option value="Massas">Massas</option>
                                        <option value="Entradinhas">Entradinhas</option>
                                        <option value="Bebidas">Bebidas</option>
                                    </Form.Select>
                                </Form.Group>

                                <Button className="botao-produtos" variant="primary" type="submit">Cadastrar Produto</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default CadastrarProdutos