import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0); // la palabra super se usa para referenciar las cosas del padre, como metodos y atributos.
        CuentaCorriente.cantidadCuentas++;  // los atributos estaticos se atribuyen directamente a la clase
    }

    retirarDeCuenta(valor){  
        super._retirarDeCuenta(valor, 5);
    }  // aqui estamos sobre escribiento el metodo padre.



}