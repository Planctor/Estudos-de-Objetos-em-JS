//METODOS DE ARRAY
const carros = ['FIAT','FORD','KIA','HONDA']

const car = carros.forEach((item, valor, array)=>{
	console.log(item.toLowerCase())
	console.log(valor.toString())
	console.log(array)
})//OBS: forEach sempre vai retorna undefined, se por ele em uma variavel verá isso ocorrer


//MAP -> quase a mesma coisa q foreach... só funciona em array

const cars = carros.map((i,v,a)=>{
	console.log(i, 'map')
	console.log(v, 'map')
	console.log(a, 'map')
})

console.log(car)
console.log(cars)

console.log('---------------------------------------')

const numeros =[2,4,6,8,10,12,14];
const numerosX3 = numeros.map(n => n * 3)

console.log(numeros)
console.log(numerosX3)

const aulas = [
	{
		nome:'HTML 1',
		min:15
	},

	{
		nome:'HTML 2',
		min:10
	},

	{
		nome:'CSS 1',
		min:20
	},

	{
		nome:'JS 1',
		min:25
	},
]

//SELECIONAR OS MINUTOS

const aulasMinutos =  aulas.map((n) => console.log(n.min))//n faz referencia a aulas, ou seja adicinando min ele vai selecionar os minutos de cada item

const aulaFuncao = function(x){
	return x.min
}
 const aulasM = aulas.map(aulaFuncao)

console.log(aulasM)
console.log('-----------------------------------------------------------')
//reduce... acumulador
//retorna um valor unico

const clase = [10,25,30]

const reduceAulas = clase.reduce((acumulador,item,index,array)=>{//obrigado a retornar um valor
	console.log(acumulador, item)
	return acumulador + item//vai somar o valor atual(10) e somar com o acumulador (20), e em seguida o resultado com o proximo valor(25),criando um loop
}, 0)//começa com 0, necessario definir valor ou ele pula açao

console.log(reduceAulas)

const altura = [1.65,1.35,1.90,1.60,1.85]

const maisAlto = altura.reduce((acumulador, item)=>{
	if(acumulador > item){
		return acumulador
	}else{
		return item
	}
}, 0)

console.log('o mais alto é', maisAlto)

const aulas2 = aulas.reduce((c,i)=>{
	c = i.nome
	console.log(c)
}, {}) //Acumulador de objeto

const aulas3 = aulas.reduceRight((acumulador, item, posiçao)=>{
	acumulador = item.nome + ' reduce Right'
	console.log(acumulador)

}, {})


//SOME
//retorna apenas true or false
//testa se ao menos um dos elementos no array passa no teste 


const frutas = ['morango','banana','uva','maçã','pera']

const temUva = frutas.some((item)=>{
	console.log(item)
	return item === 'uva'; //obrigatorio, pois irá retora undefined, e todo valor undefined é falso
}) 

console.log(temUva)

//EVERY
//retorna apenas true or false
//testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
const every = frutas.every((item)=>{
	return item 
})

console.log(every)

//some procura o primeiro verdadeiro
//every procura o primeiro falso

//[].FIND e [].FINDINDEX()

const indexUva = frutas.findIndex((item)=>{
	return item === 'uva'
})//retora o valor da posiçao na array

const indexBanana = frutas.find((item)=>{
	return item === 'banana'
})//retora o item da posiçao na array

console.log(indexUva +' findIndex')
console.log(indexBanana + ' find')

//FILTER
//retorna uma array com os itens true

const idade = [24,4,69,53,18,17]

const arrayIdade = idade.filter((item)=>{return item > 18})
console.log(arrayIdade+' tem idade para beber')

const maiores15 = aulas.filter((aula)=>{return aula.min > 15})
console.log(maiores15)

//EXERCICIOS
//1

const curso = document.querySelectorAll('.curso')
const cursoArray = Array.from(curso)

const retornoArray = cursoArray.map((i)=>{
	const titulo = i.querySelector('h1').innerText;
	const descricao = i.querySelector('p').innerText;
	const aulas = i.querySelector('.aulas').innerText;
	const horas = i.querySelector('.horas').innerText;
	return {
		title: titulo,
		description: descricao,
		class: aulas,
		hours: horas,
	}
})

console.log(retornoArray)

//2

const number = [15,156,5,310,51,56,89,32,615,100]

const numberF = number.filter((i)=>{
	  return i >= 100 
})
console.log(numberF)

//3

const instrumentos = ['Guitarra','Baixo','Teclado','Bateria']

const verificarI = instrumentos.some((i)=>{
	return i === 'Baixo'
})

console.log(verificarI)

//4

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  },
  {
    item: 'Arroz',
    preco: 'R$ 5,50'
  }
]

const n1 = compras.reduce((acumulador, item)=>{
	 const v = +item.preco.replace(',', '.').trim().replace('R$', '');
	 return acumulador + v
}, 0)
console.log(n1)

