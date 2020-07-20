//FUNÇAO

const perimetro = new Function('lado','lado * 4')
console.log(20)

function somar (n1, n2){
	return n1 + n2;
}

console.log(somar(3,3))

//estou falando com a funçao, nao com o retorno

console.log(somar.length)
console.log(somar.name)

//METODOS DE FUNÇOES

function darOI(nome){
	console.log('Oi para voce ' + nome)
}

darOI.call({}, 'Lucas')// {} referencia do this
darOI.call(null, 'Jonas')

const carro = {
	marca: 'Ford',
	ano: 2018
}

function descriçaoCarro(vel){
	console.log(this.marca+' '+this.ano+ vel)
}

				//RETORNO
descriçaoCarro()//undefined undefined
descriçaoCarro.call()//undefined
descriçaoCarro.call(carro)

descriçaoCarro.call({marca: 'honda', ano:2013}, 2000)//primeiro paremetro objeto... segundo o argumento

//call muda o this de uma funçao

const carros = ['Fiat','Uni','Kia']
const frutas = ['Maça','Pera','Uva']

carros.forEach((item)=>{
	console.log(item + ' SEM CALL')
})

carros.forEach.call(frutas,(item)=>{
	console.log(item + ' COM CALL')
})

//EXEMPLO REAL

function Dom(seletor){
	this.element = document.querySelector(seletor)
}

const h1 = new Dom('h1')
console.log(h1)
console.log(h1.element)

//exemplo

const frutax = ['Maça','Pera','Uva','Alho']

//Array.prototype.mostrarThis = function(){
//	console.log(this)
//}


//SAO IGUAIS
//Array.prototype.pop.call(frutas);
//frutas.pop()

//NodeList = objeto em formato de lista

const section = document.querySelectorAll('section')

const filtro = Array.prototype.filter.call(section, (i)=>{
	return i.classList.contains('ativo')
})

console.log(filtro)
console.log(section)

//APLY
//recebe lista dentre de uma ARRAY, ou seja vai receber os argumentos dentro de uma array

const numeros = [51,320,65,30,50,6940,870,60]

console.log(Math.max.call(null,numeros)) //call so recebe argumento passado por virugula, console.log(Math.max.call(null,51,320,65,30,50,6940,870,60))
console.log(Math.max.apply(null,numeros))

//exemplo filtro

const h1z = document.querySelectorAll('h1')

function itemPossuiAtivo(i){
	return i.classList.contains('Alho')
}

const filtro1 = Array.prototype.filter.call(h1z, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(h1z, [itemPossuiAtivo]);

console.log(filtro1)
console.log(filtro2)

//BIND
//RETORNA UMA FUNÇAO Q NAO ESTA ATIVA

const $ = document.querySelectorAll.bind(document)
console.log($('h1'))

const car = {
	marca: 'Fiat',
	ano: 2200,
	acelerar: function(aceleraçao, tempo){
		return `${this.marca} acelerou ${aceleraçao} em ${tempo}`
	}
}

const honda = {
	marca:'Honda'
}

const acelerarHonda = car.acelerar.bind(honda)

console.log(acelerarHonda(300,20))
console.log(car.acelerar(100,80))

function imc (altura, peso){
	return peso/(altura*altura)
}

const imc180 =  imc.bind(null, 1.80)

console.log(imc(1.80,70))
console.log(imc180(70))

//valor de this
function parabens(){
	console.log(this)
	console.log(this.nome +' tem '+ this.idade)
}

parabens.call({nome:'Lucas', idade:23})

const a = function(){
	console.log(this)
}

a.call({mame:'oi'})


//ESSE exemplo mostra como construir uma funçao contrutora


function Seletor(x){
	this.criarWindown = document.querySelector(x)//cria uma funçao no arquivo maior('window')
}
const h2 = new Seletor('h1')
console.log(h2)
console.log(h2.criarWindown)


Seletor.prototype.ativo = function(c){
	console.log(this)
	this.criarWindown.classList.add(c)
}

//cria um objeto novo
const s = {
	criarWindown: document.querySelector('section')
}

console.log('retorno do objeto')
console.log(s)
console.log('retorno do objeto com o prototype')
console.log(s.criarWindown )
//console.log(s.ativo('alho'))//irá dár erro pois o s ainda n reconhece o ativo, para comunicarmos com o ativo usaremos o call
//h2.ativo.call(s, 'alho')//usar assim dx confuso, entao chamamos a funçao e mudamos com o call no exemplo abaixo
Seletor.prototype.ativo.call(s,'Alho')

const span = document.querySelectorAll('span')
const p = document.querySelectorAll('p')

//EXERCICIOS
//1

const para = document.querySelectorAll('p')
const pArray = Array.prototype.reduce.call(para,(a, i)=>{
	const c = i.innerText.length
	return a += c  
}, 0)

console.log(pArray)

//2

function novosElementos(tag, classe, conteudo){
	const t =  document.createElement(tag)
	classe ? t.classList.add(classe) : '';//ternario, ?(se) classe existe, adiciona : senao fica vazia
	conteudo ? t.innerHTML = conteudo: null;
	console.log(t)
}

novosElementos('h1','alho','coma ALHO, AGORA')

//3
const sempreTitu = novosElementos.bind(null, 'h1', 'titulo')
sempreTitu('cursos de js')