class Conta {
    #numeroConta
    #nomeTitular
    #saldo
  
    constructor(numeroConta, nomeTitular, saldo = 0){
      this.#numeroConta = numeroConta
      this.#nomeTitular = nomeTitular
      this.#saldo = saldo
    }
  
    get numeroConta(){
      return this.#numeroConta
    }
  
    get nomeTitular() {
      return this.#nomeTitular
    }
  
    get saldo(){
      return this.#saldo
    }
  
    depositar(valor){
      this.#saldo += valor
      console.log(`Deposito de R$ ${valor} realizado com sucesso! Seu saldo é de R$ ${this.#saldo} `)
    }
  
    sacar(valor) {
      if (this.#validarSaldo(valor)){
        this.#saldo -= valor
        console.log(`Saque de ${valor} efetuado com sucesso! Seu saldo é de R$ ${this.#saldo}`)
      } else{
        console.log(`Saque não permitido. Saldo insuficiente!`)
      }
    }
  
      #validarSaldo(valor){
        return this.#saldo >= valor
        }
      } 
  
    const minhaConta = new Conta(589, "João")
  
    console.log(minhaConta)
    minhaConta.depositar(500)
    minhaConta.sacar(300)
    minhaConta.sacar(500)