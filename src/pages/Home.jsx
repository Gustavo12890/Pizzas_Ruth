import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Home() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navBar">
        <Container>
          <div className="d-flex align-items-center">
            <img className="logo" src="/image/img-home/logo.png" alt="" />
            <Navbar.Brand className="logotipo" href="#home">Pizzas Ruth</Navbar.Brand>
          </div>
          <div className="ms-auto">
            <Stack direction="horizontal" gap={4}>
              <a href="/Login"><Button className="btnLogin" variant="link">Entrar</Button></a>
              <a href="/Cadastro"><Button className="btnCadastro" variant="primary">Criar Conta</Button></a>
            </Stack>
          </div>
        </Container>
      </Navbar>


      <div className="fundo">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto" className="card-branco">
              <div className="textosCard">
                <h4 className="tituloCard">Peça sua pizza em casa ou retire na loja mais próxima</h4>
                <p className="textCard">Informe seu endereço para encontrarmos a Pizza Ruth mais próxima de você</p>
              </div>
              <div className="d-flex align-items-center">
                <img className="icone-input" src="/image/img-home/localizacao.png" alt="" />
                <Form.Control className="barraPesquisa" placeholder="Informar endereço e número" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
              </div>
              <div className="text-center mt-5">
                <img src="/image/img-home/mapa.png" alt="" />
                <a href="#" className="text-center textLocalizacao ms-3">Usar minha localização atual</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="textos-home">
              <div className="d-flex justify-content-center">
                <img className="image-pizza2" src="/image/img-home/pizza.png" alt="" />
              </div>
              <h2 className="text-center titulo">Temos novidades saindo do forno</h2>
              <p className="text-center mb-4">Aproveite! peça agora nossas novidades informando seu endereço acima e dê um <b>Hut</b> no seu dia</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <img className="banner-home mb-5" src="/image/img-home/banner.png" alt="" />
            </Col>
          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
        </Container>


        <div className="container-fluid">

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
              <hr className="linha-footer"/>
            </div>

            <div className="fs-6 mt-4 mb-4 d-flex justify-content-center align-items-center">
              <img className="logo" src="/image/img-home/logo2.png" alt="" />
              <div className="text-container">
                <p className="mt-3">Copyright © @2023 PIMENTA VERDE ALIMENTOS LTDA. – CNPJ :09.060.964/0001-08 - AVENIDA DRA RUTH CARDOSO Nº: 4777 – <br /> JARDIM UNIVERSIDADE PINHEIROS – SÃO PAULO/SP. Todos os direitos reservados.</p>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <hr className="linha-footer"/>
            </div>
          </footer>
        </div>

      </div>

    </div>
  );
}

export default Home;
