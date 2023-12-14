import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuario from "./pages/Usuario";
import Restaurantes from "./pages/Restaurantes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from "./pages/Posts";
import NovoPost from "./pages/NovoPost";
import CadastrarProdutos from "./pages/CadastrarProdutos";
import Logout from "./pages/Logout";
import Cardapio from "./pages/Cadapio";
// import App2 from "./pizzas";



function App() {
  return(
    <div>
      {/* <App2></App2> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/cadastro" element={ <Cadastro/>} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/usuario" element={ <Usuario/>} />
          <Route path="/restaurantes" element={ <Restaurantes/>}/>
          <Route path="/cardapio" element={ <Cardapio/>}/>
          <Route path="/cadastrarProdutos" element={ <CadastrarProdutos/>}/>
          <Route path="/posts" element={ <Posts/>} />
          <Route path="/novoPost" element={ <NovoPost/>} />
          <Route path="/logout" element={ <Logout/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App