import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";


const cliente = new Cliente("Leonardo", "1726252727", "1233342");

const cliente2 = new Cliente("Maria", "365437152", "984746");

console.log(cliente);
console.log(cliente2);

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(130);
console.log('El saldo actual (CuentaLeonardo)' + saldo);

console.log(CuentaCorriente.cantidadCuentas);
new CuentaCorriente(cliente2, "2", "002");
new CuentaCorriente(cliente2, "2", "002");
new CuentaCorriente(cliente2, "2", "002");
new CuentaCorriente(cliente2, "2", "002");
console.log(CuentaCorriente.cantidadCuentas);


/*
console.log(cuentaDeMaria.getCliente);
console.log(cuentaDeMaria);
console.log(cuentaDeLeonardo.getCliente);
*/
// let parametroValor = 100;
// cuentaDeLeonardo.transferirParaCuenta(parametroValor, cuentaDeMaria);


