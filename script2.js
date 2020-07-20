//ARRAYS

const instrumentos = ['Guitarra','Baixo','Violão'];
const precos = [24,48,72,96,120];
const dados = [new String('Tipo 1'),['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome){console.log(nome)}];
const carros = new Array('ford','fiat','mustang')


console.log(carros[0])
console.log(carros.length)

const li = document.querySelectorAll('li')
const arrayLi = Array.from(li) // transforma em array

console.log(li)
console.log(arrayLi)

const obj = {
	0: 'Lucas',
	1: 'Nave',
	2: 'Maria',
	3: 'Joao',
	length:4, //nescessario pois retornaria uma array vazia
}

const objArray = Array.from(obj)
console.log(objArray)//retornará uma array vazia

console.log(Array.isArray(li))//retorna se é array ou não
console.log(Array.isArray(objArray))

console.log(Array.of('A','L','H','O'))//CRIA UMA ARRAY COM 4 ITENS
console.log(Array(20))//cria uma array com 20 itens vazios

const frutas = ['Banana', 'pera', ['Uva roxa', 'Uva Verde']];
console.log(frutas[2][0].length)//está chamando a array dentro da array, e mostrand a quantidade de caracter no primeiro item

 //METODOS MODIFICADORES

const idade = [24,23,48,2,4]
console.log(idade.sort());//organizar por caractere

const cars = ['Ford','Fiat','Uno','Pegeout','Chevrolet','Mitsubishi']
cars.unshift('Kia')//adiciona um valor no começo da array
cars.push('Ferrari')//adiciona um valor no final da array

console.log(cars)

console.log(cars.pop())//remove a ultima array e retorna
console.log(cars.shift())//remove o primeiro array e retorna

console.log(cars.reverse())//inverte a array


//splice
//a partir do item 2, removera 0 arquivo e adicionara 'fusca'
console.log(cars.splice(2,0, 'fusca'))
console.log(cars)

//copyWithin()
//sintaxe(alvo, inicio, final)

//a partir do item 3 copie o item 0 ate o 3 
//funciona com valor negativo
console.log(cars.copyWithin(3,0,3))

//fill

//vai prencher com batata a partir do item 3 até o 4
console.log(['item','item','item','item','item','item','item'].fill('Batata', 3, 4))

//ARRAYS/METODOS DE ACESSO

const trans1 = ['agua', 'coco']
const trans2 = ['gelo', 'fogo']

const trans3 = trans1.concat(trans2)//junta as 2 arrays

const ling = ['html','css','js','php','python','vue','js']

console.log(ling.includes('css'))//verefica se existe
console.log(ling.includes('ruby'))
console.log(ling.indexOf('python'))//retorna o valor de onde a array esta
console.log(ling.indexOf('js'))//retorna o primeiro js
console.log(ling.lastIndexOf('js'))//retorna o ultimo js

//join vai juntar tudo em uma string

console.log(ling.join())
console.log(ling.join(' '))
console.log(ling.join('-|-'))


const ling2 = ling.slice(3)//clona, o valor da array a partir da 5
console.log(ling)
console.log(ling2)

//EXERCIOS
//1

const comidas = ['Pizza','Frango','Carne','Macarrão']

console.log(comidas)
console.log(comidas.shift())
const ultimaComida = comidas.pop()
console.log(ultimaComida)
console.log(comidas.push('Arroz'))
console.log(comidas.unshift('Peixe'))
console.log(comidas)

//2
const estudantes = ['Marcio','Brenda','Joana','Kleber','Julia']

console.log(estudantes)
console.log(estudantes.sort())
console.log(estudantes.reverse())
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

//3
let html = `<section>
				<div>Sobre</div>
				<div>Produtos</div>
				<div>Contatos</div>
			</section>`
console.log(html)			
const sem = html.split('section').join('ul') && html.split('div').join('li') 
console.log(sem)

//4
const carrus = ['Ford','Fiat','Kia','Honda']
const savaCarrus = carrus.slice()

console.log(carrus.pop())
console.log(carrus)
console.log(savaCarrus)
