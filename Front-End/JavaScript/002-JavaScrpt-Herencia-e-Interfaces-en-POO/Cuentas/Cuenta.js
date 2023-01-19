export class Cuenta{  // las clases abstratas no se deben instanciar solo se deben extender, es decir no deberiamos crear instancias de estas clases sino solo extenderlas

    #cliente;
    #saldo;
    
    constructor(cliente, numero, agencia, saldo){

        if(this.constructor == Cuenta){
            throw new Error('No se debe instanciar objetos de la clase Cuenta');  // para que cuenta no se instanciada solo extendida.
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
 
    set setCliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get getCliente(){
        return this.#cliente;
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
            return this.#saldo;
        }
    }
    
    retirarDeCuenta(valor){  // esto nos permite un retiro sin comision.
        throw new Error("Debe implementar el metodo retirarDeCuenta en su clase");
    }

    _retirarDeCuenta(valor, comision){  // metodo privado con el _ no tiene restrincion tecnica, como el # para los atributos, pero se hace como cultura para saber que es un metodo privado
        valor = valor * (1+comision/100);
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
    /*   cuentaDestino.ciudad  = "francia";  los parametros por referencia si tienen la capacidad de modificar porque acceden a al lugar del espacio en memoria NO SE RECOMIENDA*/
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    /* valor = 200; los parametros por valor no tienen la capacidad de mmodificar el valor externamente, porque el valor fue copiado NO SE RECOMIENDA*/
    }


}