class Catalogo {
	#produtos;

	constructor() {
		this.#produtos = [];
	}

	adicionarProduto(produto) {
		this.#produtos.push(produto);
	}

	editarProduto(id, novoNome, novaQuantidade, novoPreco) {
		const produto = this.buscarProdutoPorId(id)

		if (produto) {
			produto.nome = novoNome;
			produto.quantidade = novaQuantidade;
			produto.preco = novoPreco;

			return produto
		} else {
			return `Produto não encontrado!`;
		}
	}

	excluirProduto(id) {
		this.#produtos = this.#produtos.filter((elemento) => elemento.id !== id);
	}

	listarProdutos() {
		return this.#produtos.map((produto) => {
			if (produto.dataValidade) {
				return {
					id: produto.id,
					nome: produto.nome,
					quantidade: produto.quantidade,
					preco: produto.preco,
					dataValidade: produto.formatarDataValidade(),
				};
			}
			return {
				id: produto.id,
				nome: produto.nome,
				quantidade: produto.quantidade,
				preco: produto.preco,
			};
		});
	}

	buscarProdutoPorId(id){
		return this.#produtos.find((produto) => produto.id === id)
	}
}

export default Catalogo