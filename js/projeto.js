const display=document.getElementById("display");
const numeros=document.querySelectorAll("[id*=tecla]");
const operadores=document.querySelectorAll("[id*=operador]");

let novoNumero=true;
let operador;
let numeroAnterior;

const operacaoPendente=()=>operador !== undefined;

const calcular=()=>{
    if(operacaoPendente()){
        const numeroAtual=parseFloat(display.textContent.replace(",","."));
        novoNumero=true;
        const resultado=eval(`${numeroAnterior}${operador}${numeroAtual}`)
        atualizarDisplay(resultado);
        
    }

}

const atualizarDisplay = (texto) => {
    if(novoNumero){
     display.textContent = texto.toLocaleString("BR");
     novoNumero=false;
    }else{
        display.textContent += texto.toLocaleString("BR");
    }

}

const inserirNumero=(evento)=> atualizarDisplay(evento.target.textContent);

const selecionarOperador=(evento) => {
    if(!novoNumero){
        calcular();
    novoNumero=true; 
    operador=evento.target.textContent;
    numeroAnterior=parseFloat(display.textContent.replace(",","."));
    }
}

numeros.forEach(numero =>
                numero.addEventListener('click',inserirNumero));

operadores.forEach(operador => operador.addEventListener("click",selecionarOperador));

const ativarIgual= () =>{
    calcular();
    operador=undefined;
}

const limparDisplay=()=>display.textContent="";

const limparCalculo=()=>{
    limparDisplay();
    operador=undefined;
    novoNumero=true;
    numeroAnterior=undefined;
}
const inverterSinal=()=>{
    novoNumero=true;
    atualizarDisplay(display.textContent * -1);


}

const removerUltimo=()=>display.textContent =display.textContent.slice(0,-1);

const existeDecimal = () =>display.textContent.indexOf(",") !== -1;
const existeValor = () =>display.textContent.length > 0;


const inserirDecimal=()=>{
    if(!existeDecimal()){
        if(existeValor()){
            atualizarDisplay(",");
            
        }else{
            atualizarDisplay("0,");
        }
    }
}

const mapaTeclado={
    '0' : "tecla0",
    '1' : "tecla1",
    '2' : "tecla2",
    '3' : "tecla3",
    '4' : "tecla4",
    '5' : "tecla5",
    '6' : "tecla6",
    '7' : "tecla7",
    '8' : "tecla8",
    '9' : "tecla9",
    "/" : "operadorDividir",
    "*" : "operadorMultiplicar",
    "-" : "operadorSubtrair",
    "+" : "operadorAdicionar",
    "=" : "igual",
    "Enter" :"igual",
    "backspace": "backspace",
    "c" : "limparDisplay",
    "Escape" :"limparCalculo",
    "," : "decimal" 
    

}
const mapearTeclado=(evento)=>{
    const tecla=evento.key;
    const teclaPermitida=()=>Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    
    if(teclaPermitida){

        
    const mapa=document.getElementById(mapaTeclado[tecla]).click();
    } 
    
}

document.addEventListener("keydown",mapearTeclado);



document.getElementById("igual").addEventListener("click",ativarIgual);

document.getElementById("limparDisplay").addEventListener("click",limparDisplay);

document.getElementById("limparCalculo").addEventListener("click",limparCalculo);

document.getElementById("backspace").addEventListener("click",removerUltimo);

document.getElementById("inverter").addEventListener("click",inverterSinal);

document.getElementById("decimal").addEventListener("click",inserirDecimal);

































