const clientes = [
  { nombre: "Mali", saldo: 200, password: "1234" },
  { nombre: "Gera", saldo: 290, password: "5678" },
  { nombre: "Maui", saldo: 67, password: "abcd" }
];

function inicio() {
  
  const userName = prompt("Ingresa tu nombre de usuario:"):
  const password = prompt("Ingresa tu contraseña:");
  
  /*
  validar credenciales(userName, passwor) === true;
  ||
  validar credenciales(userName, password) === false;
  */
   if(validarCredenciales(userName, password)){
    alert('Ingreso Exitoso!! :)');
  }else{
    alert('Error en usuario o en contraseña :(');
  }
}

/*verdadero si las credenciales coinciden o falso -> si no coinciden */
function validarCredenciales(name, pass){ //AND
  return clientes.some((cliente) => cliente.nombre=== name && cliente.password===pass)
}

inicio();