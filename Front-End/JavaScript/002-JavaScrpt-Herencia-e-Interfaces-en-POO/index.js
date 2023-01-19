import { Cliente } from "./Cliente.js";
// import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
// import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
// import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Director } from "./Empleados/Director.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";


//const cliente2 = new Cliente("Maria", "365437152", "984746");


const empleado = new Empleado("Saray", "09", 300);
empleado.asignarClave("12345");
const director = new Director("Emir", "122", 5000);

const gerente = new Gerente("Sonia", "12", 12000);
gerente.asignarClave("1230");
console.log(SistemaAutenticacion.login(gerente, "1230"));

const cliente = new Cliente("Leonardo", "1726252727", "1233342");
cliente.asignarClave("1230");
console.log(SistemaAutenticacion.login(cliente, "1230"));


/*
const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaAhorro(cliente2, "2", "002", 0);
const cuentaNominaLeonardo = new CuentaNomina(cliente, "1", "001", 0);


console.log(cuentaNominaLeonardo);
cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaDeMaria);
cuentaDeMaria.depositoEnCuenta(100);
console.log(cuentaDeMaria.verSaldo());
cuentaDeMaria.retirarDeCuenta(10);
console.log(cuentaDeMaria.verSaldo());

*/