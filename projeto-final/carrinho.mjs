class Carrinho {
	#itens

	constructor(){
		this.#itens = []
	}

	adicionarCarrinho(produto, quantidade) {        
       this.#itens.push({ produto,  quantidade });
        
       return `Produto adicionado ao carrinho: ${quantidade} x ${produto.nome}`
      }

	fazerSoma(){
		let total = 0

		this.#itens.forEach((item) => {
			total += item.produto.preco * item.quantidade
		})

		return total.toFixed(2)
	}

	mostrarItens(){
		return this.#itens
	}

}

export default Carrinho