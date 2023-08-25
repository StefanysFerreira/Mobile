//variaveis

var global = 10;

let local = 10;

const imutavel = [10];

imutavel.push(20); 

//funcões 

function soma (a,b){
   return soma;
}

//arrow function 
const soma2 = (a,b) => a + b;

console.log(soma(2,3));
console.log(soma2(2,3));


//arrays

const frutas = []
frutas.push(...["uva", "maça", "abacaxi"]);
console.log(frutas);

frutas.forEach(fruta => console.log(fruta));
const arrow frutas.find((fruta) => fruta == "uva");
const achou = frutas.find(fruta) => fruta == "banana";
console.log(achou);

//objetos 
const pessoa = (id:1, nome: "Stefany", sexo: "F");
console.log(pessoa.nome)
const { nome, sexo} = pessoa;
console.log(nome, sexo);


//modulos
export default frutas;
export {achou, soma}

import frutas from 'revisao.js'
import {achou} from 'revisao.js'

//
const app = () => {
    return {
        <View> 
             <Text> Olá Mundo </Text>
        </View>
    }; 
}