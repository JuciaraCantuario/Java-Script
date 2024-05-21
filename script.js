// Método simples para adicionar elementos ao DOM

// Adicionando um título ao site
const tituloSimples = document.createElement('h1');
tituloSimples.id = 'titulo';
tituloSimples.innerText = 'Confeitaria Delícia - Método Simples';
document.body.appendChild(tituloSimples);

// Adicionando um produto à venda
const produtoSimples = document.createElement('div');
produtoSimples.id = 'produto';
produtoSimples.innerHTML = `
    <h2>Nome do Produto: Bolo de Chocolate</h2>
    <p>Descrição: Um delicioso bolo de chocolate com cobertura de ganache.</p>
    <p>Preço: R$ 45,00</p>
    <img src="https://www.example.com/bolo-chocolate.jpg" alt="Imagem do Bolo de Chocolate">
`;
document.body.appendChild(produtoSimples);

// Método complexo para adicionar elementos ao DOM

// Criando e adicionando o título
const tituloComplexo = document.createElement('h1');
tituloComplexo.id = 'titulo-complexo';
const tituloTexto = document.createTextNode('Confeitaria Delícia - Método Complexo');
tituloComplexo.appendChild(tituloTexto);
document.body.appendChild(tituloComplexo);

// Criando e adicionando o produto
const produtoComplexo = document.createElement('div');
produtoComplexo.id = 'produto-complexo';

const nomeProduto = document.createElement('h2');
const nomeTexto = document.createTextNode('Nome do Produto: Torta de Limão');
nomeProduto.appendChild(nomeTexto);

const descricaoProduto = document.createElement('p');
const descricaoTexto = document.createTextNode('Descrição: Uma torta refrescante de limão com merengue.');
descricaoProduto.appendChild(descricaoTexto);

const precoProduto = document.createElement('p');
const precoTexto = document.createTextNode('Preço: R$ 30,00');
precoProduto.appendChild(precoTexto);

const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://www.example.com/torta-limao.jpg';
imagemProduto.alt = 'Imagem da Torta de Limão';

// Anexando os elementos ao produto
produtoComplexo.appendChild(nomeProduto);
produtoComplexo.appendChild(descricaoProduto);
produtoComplexo.appendChild(precoProduto);
produtoComplexo.appendChild(imagemProduto);

// Adicionando o produto ao body
document.body.appendChild(produtoComplexo);