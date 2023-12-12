class Produto {
	#id;
	#nome;
	#quantidade
	#preco;

	constructor(id, nome, quantidade, preco) {
		this.#id = id;
		this.#nome = nome;
		this.#quantidade = quantidade;
		this.#preco = preco;
	}

	get id() {
		return this.#id;
	}

	get nome() {
		return this.#nome;
	}

	get quantidade() {
		return this.#quantidade;
	}

	get preco() {
		return this.#preco.toFixed(2);
	}

	set nome(novoNome) {
		this.#nome = novoNome;
	}

	set quantidade(novaQuantidade) {
		this.#quantidade = novaQuantidade;
	}
	
	set preco(novoPreco) {
		this.#preco = novoPreco;
	}

	static criarNovoProduto(id, nome, quantidade, preco) {
		return new Produto(id, nome, quantidade, preco);
	}

	checarProdutos() {
		if (this.nome) {
			return 'Produto válido!';
		}
	}
}

export default Produto

