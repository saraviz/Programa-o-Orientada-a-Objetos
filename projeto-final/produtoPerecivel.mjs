import Produto from "./produto.mjs";

class ProdutoPerecivel extends Produto {
	#dataValidade;

	constructor(id, nome, quantidade, preco, dataValidade) {
		super(id, nome, quantidade, preco);
		this.#dataValidade = dataValidade;
	}

	get dataValidade() {
		return this.#dataValidade;
	}

	set dataValidade(novaDataValidade) {
		this.#dataValidade = novaDataValidade;
	}

	checarProdutos() {
		const dataAtual = new Date();
		if (this.#dataValidade > dataAtual) {
			return 'Produto dentro da data de validade!';
		}
		return 'Produto vencido!';
	}
	
}

export default ProdutoPerecivel