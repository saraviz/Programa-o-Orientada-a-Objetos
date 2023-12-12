import Produto from "./produto.mjs";
import ProdutoPerecivel from "./produtoPerecivel.mjs";
import Catalogo from "./catalogo.mjs";
import Carrinho from "./carrinho.mjs";

const carrinho = new Carrinho();
const catalogo = new Catalogo();

ProdutoPerecivel.prototype.formatarDataValidade = function () {
	const dia = this.dataValidade.getDate();
	const mes = this.dataValidade.getMonth() + 1;
	const ano = this.dataValidade.getFullYear();
	return `${dia}/${mes}/${ano}`;
};

function verificarEstoque (produto, quantidade) {
	const produtoCatalogo = catalogo.buscarProdutoPorId(produto.id);
    
	if (!produtoCatalogo) {
		return 'Produto não encontrado no catálogo.';
	}

	if (quantidade > produtoCatalogo.quantidade) {
		return 'Quantidade insuficiente em estoque.';
	}

	produtoCatalogo.quantidade -= quantidade;
	return carrinho.adicionarCarrinho(produto, quantidade);
}

function init() {
	const produto1 = new Produto(1, 'Sabonete', 10, 5.00);
	const produto2 = Produto.criarNovoProduto(2, 'Shampo', 10, 55.00);

	catalogo.adicionarProduto(produto1);
	catalogo.adicionarProduto(produto2);


	catalogo.editarProduto(1, 'Desodorante', 10, 4.00);

	catalogo.excluirProduto(2);

	const produto3 = new ProdutoPerecivel(3, 'Leite', 10, 2.50, new Date('2023/12/20'));
	catalogo.adicionarProduto(produto3);
  console.log(produto3.checarProdutos())

  console.log(catalogo.listarProdutos())

 
	console.log(verificarEstoque(produto1, 2));
	console.log(verificarEstoque(produto2, 3));
  console.log(verificarEstoque(produto3, 3));

	console.log('Itens no carrinho:');
	carrinho.mostrarItens().map((item) => {
		console.log(`- ${item.quantidade} ${item.produto.nome}`)
	})

	console.log(`Total da compra: R$ ${carrinho.fazerSoma()}`);

	console.log(verificarEstoque(produto1, 3));

	console.log(catalogo.listarProdutos())
}

init();
