<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$app = new \Slim\App;
$app->get('/', function (Request $request, Response $response, array $args) {
    
    $response->getBody()->write("API DE PIZZAS");

    return $response;
});

// $app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
//     $name = $args['name'];
//     $response->getBody()->write("Hello, $name");

//     return $response;
// });

$app->get('/pizzas','getPizzas');
$app->get('/pizzas/{id}','getPizza');

$app->get('/massas','getMassas');
$app->get('/massas/{id}','getMassa');

$app->get('/entradinhas','getEntradinhas');
$app->get('/entradinhas/{id}','getEntradinha');

$app->get('/bebidas','getBebidas');
$app->get('/bebidas/{id}','getBebida');

$app->post('/usuarios', 'cadastrarUsuario');
$app->post('/login', 'realizarLogin');
$app->get('/logout', 'realizarLogout');

$app->post('/produtos', 'cadastrarProduto');

$app->get('/mostrarProdutos', 'getProdutos');
$app->get('/categoriaPizzas', 'mostrarPizzas');
$app->get('/categoriaMassas', 'mostrarMassas');
$app->get('/categoriaEntradinhas', 'mostrarEntradinhas');
$app->get('/categoriaBebidas', 'mostrarBebidas');

function getConn() //Fazendo a conexão com o banco de dados
{
 return new PDO('mysql:host=localhost:3306;dbname=pizzasruth',
  'root',
  '',
  array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
  );
}

function getPizzas(Request $request, Response $response, array $args)
{      
    $sql = "SELECT * FROM pizzas";
    $stmt = getConn()->query($sql);
    $pizzas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($pizzas));
    return $response;
}

function getPizza(Request $request, Response $response, array $args)
{
    $id = $args['id'];      
    $conn = getConn();
    $sql = "SELECT * FROM pizzas WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $pizzas = $stmt->fetchObject();
    
    $response->getBody()->write(json_encode($pizzas));
    return $response;
}

function getMassas(Request $request, Response $response, array $args)
{      
    $sql = "SELECT * FROM massas";
    $stmt = getConn()->query($sql);
    $massas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($massas));
    return $response;
}

function getMassa(Request $request, Response $response, array $args)
{
    $id = $args['id'];      
    $conn = getConn();
    $sql = "SELECT * FROM massas WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $massas = $stmt->fetchObject();
    
    $response->getBody()->write(json_encode($massas));
    return $response;
}

function getEntradinhas(Request $request, Response $response, array $args)
{      
    $sql = "SELECT * FROM entradinhas";
    $stmt = getConn()->query($sql);
    $entradinhas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($entradinhas));
    return $response;
}

function getEntradinha(Request $request, Response $response, array $args)
{
    $id = $args['id'];      
    $conn = getConn();
    $sql = "SELECT * FROM entradinhas WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $entradinhas = $stmt->fetchObject();
    
    $response->getBody()->write(json_encode($entradinhas));
    return $response;
}

function getBebidas(Request $request, Response $response, array $args)
{      
    $sql = "SELECT * FROM bebidas";
    $stmt = getConn()->query($sql);
    $bebidas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($bebidas));
    return $response;
}

function getBebida(Request $request, Response $response, array $args)
{
    $id = $args['id'];      
    $conn = getConn();
    $sql = "SELECT * FROM bebidas WHERE ID=:id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("id",$id);
    $stmt->execute();
    $bebidas = $stmt->fetchObject();
    
    $response->getBody()->write(json_encode($bebidas));
    return $response;
}

//Novas funções para ajudar no envio dos cards dos produtos no Front.

function getProdutos(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM produtos";
    $stmt = getConn()->query($sql);
    $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);

    $response->getBody()->write(json_encode($produtos));
    return $response;
}

function mostrarPizzas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM produtos WHERE categoria = 'Pizzas'";
    $stmt = getConn()->query($sql);
    $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);

    $response->getBody()->write(json_encode($produtos));
    return $response;
}

function mostrarMassas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM produtos WHERE categoria = 'Massas'";
    $stmt = getConn()->query($sql);
    $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);

    $response->getBody()->write(json_encode($produtos));
    return $response;
}

function mostrarEntradinhas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM produtos WHERE categoria = 'Entradinhas'";
    $stmt = getConn()->query($sql);
    $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);

    $response->getBody()->write(json_encode($produtos));
    return $response;
}

function mostrarBebidas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM produtos WHERE categoria = 'Bebidas'";
    $stmt = getConn()->query($sql);
    $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);

    $response->getBody()->write(json_encode($produtos));
    return $response;
}

//Novas funções para ajudar no envio dos cards dos produtos no Front.

function cadastrarUsuario(Request $request, Response $response, array $args)
{
    var_dump($_POST);

    $data = $request->getParsedBody();

    $nome = isset($data['nome']) ? $data['nome'] : '';
    $email = isset($data['email']) ? $data['email'] : '';
    $senha = isset($data['senha']) ? $data['senha'] : '';
    $cep = isset($data['cep']) ? $data['cep'] : '';
    $cidade = isset($data['cidade']) ? $data['cidade'] : '';
    $endereco = isset($data['endereco']) ? $data['endereco'] : '';
    $estado = isset($data['estado']) ? $data['estado'] : '';
    $bairro = isset($data['bairro']) ? $data['bairro'] : '';

    $conn = getConn();

    $sql = "INSERT INTO usuarios (nome, email, senha, cep, cidade, endereco, estado, bairro) VALUES (:nome, :email, :senha, :cep, :cidade, :endereco, :estado, :bairro)";

    $stmt = $conn->prepare($sql);
    
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':senha', $senha);
    $stmt->bindParam(':cep', $cep);
    $stmt->bindParam(':cidade', $cidade);
    $stmt->bindParam(':endereco', $endereco);
    $stmt->bindParam(':estado', $estado);
    $stmt->bindParam(':bairro', $bairro);

    if ($stmt->execute()) {
        return $response->withRedirect('http://localhost:5173/Login', 302);
    } else {
        $response->getBody()->write("Erro ao cadastrar usuário.");
    }
        
    return $response;
}

function realizarLogin(Request $request, Response $response, array $args)
{
    $data = $request->getParsedBody();

    $email = isset($data['email']) ? $data['email'] : '';
    $senha = isset($data['senha']) ? $data['senha'] : '';

    // Realize a verificação da senha no banco de dados
    $conn = getConn();
    $sql = "SELECT * FROM usuarios WHERE email=:email";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam("email", $email);
    $stmt->execute();
    $usuario = $stmt->fetchObject();

    if ($usuario) {
        // Verifique a senha sem usar password_hash
        if ($senha === $usuario->senha) {
            // Login bem-sucedido, redirecione para a página desejada
            return $response->withJson(['message' => 'Login bem-sucedido'])->withRedirect('http://localhost:5173/Restaurantes');
        } else {
            // Login falhou, você pode enviar uma resposta de erro
            return $response->withJson(['error' => 'Credenciais inválidas'], 401);
        }
    } else {
        // Login falhou, você pode enviar uma resposta de erro
        return $response->withJson(['error' => 'Credenciais inválidas'], 401);
    }
}

function realizarLogout(Request $request, Response $response, array $args)
{
    session_start();
    session_destroy();

    return $response->withRedirect('http://localhost:5173/Login');
}

function cadastrarProduto(Request $request, Response $response, array $args)
{
    // Obtenha os dados do produto do corpo da solicitação
    $data = $request->getParsedBody();

    $nome = isset($data['nome']) ? $data['nome'] : '';
    $descricao = isset($data['descricao']) ? $data['descricao'] : '';
    $preco = isset($data['preco']) ? $data['preco'] : '';
    $categoria = isset($data['categoria']) ? $data['categoria'] : ''; // Adicione a categoria aqui

    // Obtenha o arquivo da imagem do array $_FILES
    $imagem = $_FILES['imagem'];
    
    // Verifique se o arquivo foi enviado sem erros
    if ($imagem['error'] === UPLOAD_ERR_OK) {
        // Obtenha o caminho temporário do arquivo
        $imagemTempPath = $imagem['tmp_name'];

        // Mova o arquivo temporário para o diretório desejado
        $destinationPath = 'C:\Users\Aluno\pizzasRuth\public\image/' . $imagem['name'];
        move_uploaded_file($imagemTempPath, $destinationPath);

        $destinationPath2 = '../public/image/' . $imagem['name'];
    }

    $conn = getConn();

    $sql = "INSERT INTO produtos (nome, descricao, preco, imagem, categoria) VALUES (:nome, :descricao, :preco, :imagem, :categoria)";

    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':descricao', $descricao);
    $stmt->bindParam(':preco', $preco);
    $stmt->bindParam(':imagem', $destinationPath2); // Atualize para o caminho real da imagem
    $stmt->bindParam(':categoria', $categoria);

    if ($stmt->execute()) {
        // Incluir dados na URL de redirecionamento
        $produtoId = $conn->lastInsertId(); // obtém o ID do último produto inserido
        $response->withRedirect("http://localhost:5173/Restaurantes?produtoId=$produtoId", 302);
    } else {
        $response->getBody()->write("Erro ao cadastrar produto.");
    }    

    return $response;
}

$app->run();