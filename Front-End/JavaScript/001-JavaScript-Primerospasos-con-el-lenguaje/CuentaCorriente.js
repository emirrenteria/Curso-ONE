import { Cliente } from "./Cliente.js";

export class CuentaCorriente{

    #cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCuentas = 0;

    set setCliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get getCliente(){
        return this.#cliente;
    }

    // Los metodos setter y getter no son metodos, pero tienen parecido.

    constructor(cliente, numero, agencia) {
        this.setCliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;  // los atributos estaticos se atribuyen directamente a la clase
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
            return this.#saldo;
        }
    }
    
    retirarDeCuenta(valor){
        if(valor > 0){
            this.#saldo -= valor;
            return this.#saldo;
        }
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