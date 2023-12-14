import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" className="navbar-login">
                <Container className="nav-login justify-content-between align-items-center">
                    <a href="/"><img className="me-3" src="/image/img-login/seta-esquerda.png" alt="" /></a>
                    <a href="/" className="text-decoration-none link-login">Voltar para Home</a>
                    <div className="mx-auto">
                        <img className="logo" src="/image/img-login/logo.png" alt="" />
                        <Navbar.Brand className="logotipo" href="/">Pizzas Ruth</Navbar.Brand>
                    </div>
                </Container>
            </Navbar>

            <div className="padding-login d-flex justify-content-center">
                <img className="image-login" src="/image/img-login/ilustracao.png" alt="" />
                <form className="form-login" action="http://localhost/api/login" method="post">
                    <h4 className="mb-5">Acessar minha conta</h4>
                    <p className="mb-4">Prencha seus dados para fazer login</p>
                    <p>Qual o seu e-mail?</p>
                        <Form.Control className="input-login mb-4" placeholder="Informa pra gente o seu email" type="text" name="email"/>
                    <p>Qual sua senha?</p>
                        <Form.Control className="input-login" placeholder="Agora, digite sua senha" type="password" name="senha"/>
                        <div className="mt-4 mb-4 d-flex justify-content-end">
                            <a className="link-login" href="">Esqueci minha senha</a>
                        </div>
                        <Button className="botao-login" variant="primary" type="submit">Acessar</Button>
                        <p className="text-center mt-4">Ainda não tem conta? <a className="link-login" href="/Cadastro">Cadastre-se aqui</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login