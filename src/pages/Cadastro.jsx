import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";


function Cadastro() {
    const [cep, setCep] = useState([]);

    function checkCEP(meucep) {
        fetch(`https://viacep.com.br/ws/${meucep}/json/`)
        .then((response) => response.json())
        .then((json) => setCep(json))
    }

    const handleChange = (event) => {
        checkCEP(event.target.value);
      };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar-login">
                <Container className="nav-login justify-content-between align-items-center">
                    <a href="/"><img className="me-3" src="/image/img-cadastro/seta-esquerda.png" alt="" /></a>
                    <a href="/" className="text-decoration-none link-login">Voltar para Home</a>
                    <div className="mx-auto">
                        <img className="logo" src="/image/img-cadastro/logo.png" alt="" />
                        <Navbar.Brand className="logotipo" href="/">Pizzas Ruth</Navbar.Brand>
                    </div>
                </Container>
            </Navbar>

            <div className="padding-cadastro d-flex justify-content-center">
                <div>
                    <img className="image-cadastro" src="/image/img-cadastro/ilustracao2.png" alt="" />
                </div>
                
                <form className="form-cadastro" action="http://localhost/api/usuarios" method="post">
                    <h4 className="">Criar minha conta</h4>
                    <p className="mb-4">Prencha seus dados para fazer o cadastro</p>
                    <p>Qual seu nome e sobrenome?</p>
                        <Form.Control className="input-login mb-3" placeholder="Informa pra gente seu nome completo" type="text" name="nome"/>
                    <p>Email</p>
                        <Form.Control className="input-login mb-3" placeholder="Endereço de email" type="text" name="email"/>
                    <p>Senha</p>
                        <Form.Control className="input-login mb-3" placeholder="Senha" type="password" name="senha"/>
                    <p>CEP</p>
                        <Form.Control className="input-login mb-3" placeholder="CEP" type="text" name="cep" value={cep.cep} onChange={handleChange}/>
                    <p>Cidade</p>
                        <Form.Control className="input-login mb-3" placeholder="Cidade" type="text" name="cidade" value={cep.localidade}/>
                    <p>Endereço</p>
                        <Form.Control className="input-login mb-3" placeholder="Endereço" type="text" name="endereco" value={cep.logradouro}/>
                    <p>Estado</p>
                        <Form.Control className="input-login mb-3" placeholder="Estado" type="text" name="estado" value={cep.uf}/>
                    <p>Bairro</p>
                        <Form.Control className="input-login" placeholder="Bairro" type="text" name="bairro" value={cep.bairro}/>
                        <div className="mt-4 mb-4 d-flex justify-content-end">
                            <a className="link-login" href="">Esqueci minha senha</a>
                        </div>
                        <Button className="botao-login" variant="primary" type="submit">Cadastrar</Button>
                        <p className="text-center mt-4">Já tem uma conta? <a className="link-login" href="/Login">Acesse</a></p>
                </form>
            </div>

        </div>
    )
}

export default Cadastro