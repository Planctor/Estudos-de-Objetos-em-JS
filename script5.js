//OBJETOS
const pessoas = new Object({
	nome:'Lucas',
	sobrenome:'Fernandes',
	idade:24,
	info : function(){
		console.log(`${this.nome} ${this.sobrenome} com ${this.idade} anos`)
	},
	andar: function(valor){
		this.nome = valor 
		return this
	}
})

console.log(pessoas.info())

const joao = Object.create(pessoas)
joao.nome = 'Joao'
joao.sobrenome = 'Silva'
joao.idade = 89
joao.andar()

const Lucas = Object.create(pessoas).andar('lucas')
console.log(Lucas)

	//comando assing

const funcAutomovel = {
	acelerar(){
		return this.marca +' Acelerou'
	},
	buzinar(){
		return this.marca +' Buzinou'
	},
}

const carro ={
	marca:'Kia',
	ano:97,
}

//adiciona à objeto carro a funçao de funcAutomovel
//adiciona objeto a outros objetos
Object.assign(carro, funcAutomovel)
console.log(carro.acelerar())
console.log(carro.buzinar())


	//defineProperties definir propriedades

const objeto = {}

//passando primeiro paramentro, o objeto (precisa existir), segundo as modificaçoes 
Object.defineProperties(objeto, {
	tamanho: {
		//por padrao é passado tudo como falso
		value: 14,
		enumerable: false,
     	writable: true,//configura o objeto, permite a mudança de valor
     	configurable: false, //configura o objeto, impede o delete do objeto
	},
	peso: {
		enumerable: true, //torna o obejeto enumerável
		get(){
			return this.type
		},
		set(valor){
			return this.type = valor * 4
		}
	},
})

delete objeto.tamanho //deleta o objeto
objeto.tamanho = 32

console.log(objeto)
console.log(objeto.tamanho)

objeto.peso = 3
console.log(objeto.peso)

	//getOwnPropertyDescritors
console.log(Object.getOwnPropertyDescriptors(Array))//lista com metodos e propriedades Array
console.log(Object.getOwnPropertyDescriptors(Array.prototype))//Lista com metodos e propriedades do prototipo de Array
console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'))//mostra uma unica propriedade


//RETORNA APENAS PROPRIEDADES 'ENUMERADAS'

const cars = {
	marca:'Chevrolet',
	ano: 2004,
}

console.log(Object.keys(Array))

//Retorna uma array, com chaves de todas as propriedades
console.log(Object.keys(cars))

//Retorna uma array, com valores das propriedades de um dado objeto
console.log(Object.values(cars))

//Retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades 
console.log(Object.entries(cars))


console.log(Object.getOwnPropertyNames(Array))//lista com todas as propriedades da Array

console.log(Object.getOwnPropertyNames(Array.prototype))//lista com todas as propriedades do prototipo da array

const frutas = ['Alho']
const frutas2 =['Alho']
console.log(Object.getPrototypeOf(frutas))//retorta o prototipo do objeto
console.log(Array.prototype)

console.log(Object.is(frutas, frutas2))//retorna true/false, se o objeto for igual
console.log(Object.is(frutas, frutas))

console.log('------------------------------')
const caro = {
	marca:'Ford',
	ano:2004,
}

Object.freeze(caro)//impede qualquer mudança nas propriedades
caro.marca = 'Chevrolet'

Object.seal(caro)//previne a adiçao de novas propriedades e que elas sejam apagadas
caro.portas = 4
delete caro.marca

Object.preventExtensions(caro)//previne a adiçao de novas propriedades

console.log(Object.isFrozen(caro))//verifica se esta comgelado 'freeze'
console.log(Object.isSealed(caro))//verifica se esta com 'seal'
console.log(Object.isExtensible(carro))//esse é diferente, ele pegunta se é extensivel, e se for extensivel ele vai dá false

console.log(caro)
console.log('------------------------------')

	//Objetos e metodos do prototipo
		//já queem JS tudo é Objeto todos os metodos do Objeto estão disponiveis em todos os objetos criados

const Alhu = {
	fazer: 'comer'
}
console.log(Alhu.constructor)

const agua = ['Gelada','Quente','Plasma']

//hasOwnProperty, verifica se tem a propriedade

agua.hasOwnProperty('map')//false
//propriedade map é do prototipo do Array =>(Array.prototype)
console.log(Array.prototype.hasOwnProperty('map'))//true
//lembrando nao é de Array e sim de Array.prototype


console.log('------------------------------')
//propertyIsEnumerable verifica se é enumerado
console.log(Array.prototype.propertyIsEnumerable('map'))
console.log(window.propertyIsEnumerable('innerHeight'))

console.log('------------------------------')
//{}.isPrototypeOf()
//checa se um objeto existe em na cadeia de protótipos de um outro objeto.

console.log(Array.prototype.isPrototypeOf(Alhu))
console.log(Array.prototype.isPrototypeOf(agua))

console.log('------------------------------')

//Strings em objetos
const comer = 'Coma Alho'
const s = function(){
	return 'Coma alho'
}
const o = {
	comer:'Alho',
}

console.log(s.toString())//acessa o prototypo de String
console.log(o.toString())

console.log(Object.prototype.toString.call(s))//acessa o prototypo do Objeto String
console.log(Object.prototype.toString.call(comer))

//Object.prototype.toString.call te passa qual tipo de objeto é

console.log('------------------------------')
//EXERCICIOS
//1

function verificaTipoDeDado(value){
	return Object.prototype.toString.call(value)
}

console.log(verificaTipoDeDado('Array'))
console.log(verificaTipoDeDado({}))

//2
const quadrado = {}
Object.defineProperties(quadrado,{
	lados:{
		value:4,
		configurable:false,
	}
})

quadrado.lados = 2
console.log(quadrado.lados)

//3
const configuracao = {
	width: 800,
	Height: 600,
	background: '#833'
}

Object.freeze(configuracao)
configuracao.width = 300
configuracao.algo = 900
console.log(configuracao.width)
delete configuracao.width

//4
console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))
