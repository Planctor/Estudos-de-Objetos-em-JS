//funçao Contrutora, usado para separar cada objeto

function Carro(pre, mar){//padrao funçao contrutora começar com letra maiscula
	this.preco = pre;
	this.marca = mar;
}

const hilux = new Carro(2000, 'amkdmsk');
const toyota = new Carro(50000, 'Fortd');

//OBJETO ... ela apenas muda o codigo padrao, nao cria um novo
const Don = {
	//objeto
	sel: 'li',
	//metodos
	seletor(){
		return document.querySelector(this.sel) 
	},
	ativo(){
		this.seletor().classList.add('ativo')
	},
}

Don.SELETOR()
Don.ativo() // tá adicionando a class ativo na primeira li

//FUNÇAO CONTRUTORA

function dome(s){
	this.seletor = function(){
		return document.querySelector(s)
	};
	this.ativa = function(){
		this.seletor().classList.add('ATIVO')
	};
}

const dorime = new dome('li');

//EXERCICIOS


//1
function Pessoa(name, age){
	this.nome= name;
	this.idade= age;
	this.andar = function(){
		console.log(this.nome, 'andou')
	}
}

const lucas = new Pessoa('Lucas', 22)
const joao = new Pessoa ('joao', 20)
const Maria = new Pessoa ('Maria', 25)
const bruno = new Pessoa ('bruno', 15)

console.log(joao, Maria, bruno)

//2

function Domrime(i){	
	this.el = document.querySelectorAll(i);
	this.adiciona = function(){
		this.el.forEach((x)=>{
			x.classList.add('ATIVO')
		})
	};
	this.remove = function(){
		this.el.forEach((x)=>{
			x.classList.remove('ATIVO')
		})
	};
}

const lidom = new Domrime('li');
lidom.adiciona()

//PROTOTYPE

function People(name, age){
	this.nome = name;
	this.idade = age;
}

//adiciona à funçao acima esse método
People.prototype.correr = function(){
	return this.nome + ' corre'
}

const donald = new People("donald", 23);

People.prototype.correr()
console.log(donald.correr)
//console.log(donald.__proto__) codigo da engine... existe herança do prototipo

//construtores nativos

const pais = 'Brazil';//igual ao debaixo
const cidade = new String('Rio')

pais.charAt(0)//B
cidade.charAt(0)//R

String.prototype;// maneira de descobrir o q faz com uma string

const lista = document.querySelector('li')

const listaArray = Array.prototype.slice.call(lista)//fazem a mesma coisa
const listaArray2 = Array.from(lista)//fazem a mesma coisa


//diferenças entre as arrays acima
console.log(Object.getOwnPropertyNames(Array))
console.log(Object.getOwnPropertyNames(Array.prototype))


console.log(Object.getOwnPropertyNames(donald))
console.log(Object.getOwnPropertyNames(People.prototype))

//forma de saber o nome do construtor
//dado.construtor.nome
//tipo de dado.construnctor.e o nome

//APENAS METODOS DO PROTOTIPO SAO HERDADOS
//slice() - existe
//from() - nao existe


//entendendo o q está sendo retornado, para facilitar o uso de metedos e propriedades

const Carro2 = {
	marca: 'Ford',
	preco: 50000,
	acelerar(){
		return true;
	}
}

Carro2 //object
Carro2.marca //String
Carro2.preco //Number
Carro2.acelerar //Function
Carro2.acelerar() //Boolean
Carro2.marca.charAt //Function
Carro2.marca.charAt(0) //Boolean

//obs: charAt() retorat o primeiro caractere


//EXERCICIOS

//1

function P(nome, sobrenome, idade){
	this.name = nome;
	this.midleName= sobrenome;
	this.age= idade;
}

P.prototype.nomeCompleto = function(){
	console.log(this.name + ' ' + this.midleName)
}

const Alex = new P('Alex', 'alho',22);
Alex.nomeCompleto()

//2

console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

//3
const li = document.querySelector('li')

li; //HTMLLIElement 
li.click;//Function
li.innerText;//String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

console.log(li.constructor)
console.log(li.click.constructor)
console.log(li.innerText.constructor)
console.log(li.value.constructor)
console.log(li.hidden.constructor)
console.log(li.offsetLeft.constructor)
console.log(li.click())

//4
li.hidden.constructor.name //String
const teste = li.hidden.constructor.name;
console.log(teste.constructor)


//obs, algumas diferenças em js... Document com o D maisculo, é a funçao q constroi o objeto document

//TIPOS DE OBJETOS

//NATIVOS
//exemplos
Object
String
Array
Function

//HOST, so vai existir no browser
//exmplo
NodeList
HTMLCollection
Element

//USER, definidos pelo usuario
//exemplo

const data = {
	dia:'segunda',
	mes:'janeiro'
}

//EXERCICIO

//1, listar 5 objetos nativos
Number
Object
String
Boolean
Array

//2, listar 5 objetos do browser
	//Window
	//getElementsByTagName
	//querySelectorAll
	//Element
	//history

//3, 2 itens q tem no chrome mas nao no firefox

if(typeof document.webkitHidden !== "undefined"){
	console.log("EXITE")
}else{
	console.log("não EXITE")
}


//STRING's

const comida = 'Lasanha';
const agua = new String('Agua');

console.log(comida, agua)
console.log(comida.length, agua.length)

comida[0]
agua[agua.length - 1]

const frase = 'A melhor comidA'
console.log(frase.length - 1)
console.log(frase.charAt(frase.length - 1))

const fraseFinal = frase.concat(' é ', comida)

	//include(procura)... retorna true e false
const fruta = 'Banana';
const frutas = 'Banana, Maça, Pera';
console.log(frutas.includes(fruta));
console.log(frutas.includes(fruta, '10'));//conta a partir do caractere 10

console.log(fruta.startsWith('B')) //verifica se começa com 'B', se sim finaliza com true
 console.log(fruta.endsWith('v')) //verifica se termina com 'v', e retorna true or false

 const trasacao1 = 'Depósito de cliete';
 const trasacao2 = 'Depósito de fornecedor';
 const trasacao3 = 'Taxa';

 console.log(trasacao3.slice(0,3)) //slice corta 

 const linguagem = 'JavaScript'

console.log(linguagem.substring(2,5))
console.log(linguagem.indexOf('a'))//primeiro a
console.log(linguagem.lastIndexOf('a'))//ultimo a

const listPreco = ['R$ 99','R$ 199','R$ 12000']

console.log(listPreco[0].padStart(10, '.'))//se nao tiver a quantidade de caractere vai prencher com ponto

listPreco.forEach(function(x){
	return console.log(x.padStart(50,'-'))
})

const r = 'KEK '
console.log(r.repeat(5))

 //regexp, Regular Expression

 let items = "Agua Alho abacate au au"
 console.log(items = items.replace(/[ ]+/g, ','))//vai pegar todos os espaçoes e trocar por virgula

 let preco = "RS 15000,00"
 console.log(preco.replace('S', '$'))

const i = items.split('') // divide tudo
console.log(i)

	//array list

const htmlText = '<div>dmasmdkçlamldsadam,dm,sdçklam,dlkçsmda<div>'
const htmlArray = htmlText.split('div')

console.log(htmlText)
console.log(htmlArray)

const novoHtml = htmlArray.join('section')
console.log(novoHtml)

const sexo = 'Feminino'
const sexo2 = 'Masculino'

console.log(sexo.toUpperCase())
console.log(sexo2.toLowerCase())

 //trim, remove espaço

const n1 = '   KEK    '
console.log(n1.trim())
console.log(n1.trimEnd())
console.log(n1.trimStart())

//EXERCICIOS
//1
 const trasacoes = [
 	{
 		descricao: 'Taxa do Pão',
 		valor: 'R$39',
 	},
 	{
 		descricao: 'Taxa do Mercado',
 		valor: 'R$129',
 	},
 	{
 		descricao: 'Recebimento de Cliete',
 		valor: 'R$99',
 	},
 	{
 		descricao: 'Taxa do Banco',
 		valor: 'R$129',
 	},
 	{
 		descricao: 'Recebimento do Pão',
 		valor: 'R$39',
 	},
 ]

let taxa = 0;
let recebimento = 0;
 trasacoes.forEach((x)=>{
 	const limpo = x.valor.replace('R$', ' ')
 	//console.log(+limpo)//+ transforma String q é só numero... transforma string em numero
 	if (x.descricao.slice(0,4) === 'Taxa'){
 		taxa += (+limpo) 
 	}else{
 		recebimento += (+limpo) 
 	}
 })
 console.log(taxa)
 console.log(recebimento)

//2, retorne uma Array

const transporte = 'Carro,Moto,Navio,Aviao,Alho'
const e = transporte.split(',')
console.log(e)

//3 substituir

const html = `
	<ul>
		<li><span>Produtos</span></li>
		<li><span>Sobre</span></li>
		<li><span>Contato</span></li>
	</ul>`

const subHtml = html.split('span').join('a')
console.log(subHtml)

//4 retornar o ultimo caracter

const phrase = 'Coma alho, é muito bom'
console.log(phrase[phrase.length - 1])

//5 retornar o total de taxa

const trans = ['Taxa de Banco','TAXA DO PÃO','Taxa do Mercado','Depósito Bancário','TARIFA especial']

let cont = 0;
trans.forEach(function(item){
	const low = item.toLowerCase()
	if(low.slice(0,4) === 'taxa'){
		cont++
	}
})
console.log(cont)


//NUMBER & MATH(Objeto Nativo)

console.log(Number.isNaN(NaN))
console.log(Number.isNaN(5))

//isInteger, verifica se o numero é inteiro, e retorna true or false
console.log(Number.isInteger(10.53))
console.log(Number.isInteger(10))

  //parseFloat... retorna um número

 parseFloat('42.50')//mesmma coisa
 Number.parseFloat('24.240') //só muda a forma q chama

 console.log(parseInt('99.5', 10)) //99 ... a partir de virgula conta as casas décimais
 console.log(Number.parseInt(5.6564654165, 10))//5 

const preso = 2.99;
console.log(preso.toFixed());//arredonda

const preso2 = 2.99142141541515;
console.log(preso2.toFixed(2));//2.99

preso.toString()

 //toLocaleString ... formata o numero de acordo com a lingua
 	//consigo transformar um numero 
 	//passam 2 parametros... 1° linguagem 2° o estilo(um objeto)
 let vallue = 24.99;
 let vallue2 = 24.99;
 console.log(vallue = vallue.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})) //brl sigla para real
 console.log(vallue2 = vallue2.toLocaleString('en-US', {style: 'currency', currency:'BRL'}))//usd sigla para dolar


//MATH
//geralmente usado em projeçao matematica

console.log(Math.PI)
console.log(Math.abs(-300))//RETORNA UM VALOR POSITIVO
console.log(Math.ceil(4.3),' +')//ARREDENDA PARA CIMA
console.log(Math.floor(4.9), ' -')//ARREDENDA PARA BAIXO
console.log(Math.round(4.5))//ARREDENDA O NUMERO NORMALMENTE
console.log(Math.max(4,1465,41,4,6541,451,651,54156,561,15,15))//RETORNA O VALOR MAXIMO
console.log(Math.min(4,1465,41,4,6541,451,651,54156,561,15,15))//RETORNA O VALOR MINIMO
console.log(Math.random())//RETORNA UM VALOR ALEATORIO ENTRE 0 E 1

const gerarNumero = Math.floor(Math.random() * 100)
console.log(gerarNumero)
 
const max = 40;
const min = 39;

//flor sempre vai arredondar para baixo, random sempre vai gerar um numero entre 1 e 0 (mas nunca 1 e 0 sempre entre esse valor)... +1 para o numero nao ser menor q o minimo... ou seja sempre vai dá um numero entre os 2  
const aleatorio = Math.floor(Math.random() * (max - min + 1) + min)//codigo q fazer valores entre numeros
console.log(aleatorio)

//EXERCICIOS
//1

const mex = 2000;
const miin = 1050;
const numeroAleatorio = Math.floor(Math.random() * (mex - miin + 1) + miin) 
console.log(numeroAleatorio)

//2

const num = '4, 9, 45, 32, 415, 15'
const numArray = num.split(', ')
const spread = Math.max(...numArray)//procurar spread, q é esses 3 pontos(vai isolar cada array)

//3

const listaPrecoz = ['R$ 59.99  ','R$ 100.222   ','R$  230','R$ 200']


//para ser numero em js prescisa ter ponto
function limpa(x){

	x = +x.replace('R$ ', '').trim()// + na frente transforma string em numero
	x = +x.toFixed(2)
	return x;
}

limpa(listaPrecoz[0])

let xiz = 0
listaPrecoz.forEach((i)=>{
	xiz += Math.round(limpa(i))
})
console.log(xiz.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}))

