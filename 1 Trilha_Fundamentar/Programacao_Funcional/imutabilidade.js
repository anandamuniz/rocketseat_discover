const cart = {          //Objeto
    quantity: 2,
    total: 200
}

//o que não pode fazer:
cart.quantity = 3  //ou seja, mudar o valor da propriedade

//como fazer:
const newCart = {...cart, quantity:3}       //cria uma nova variável que irá pegar as mesmas características do objeto cart e mudar a propriedade quantity
//a nova variável terá as mesmas propriedades do objeto cart com o valor diferente

//Exemplo em ReactJS(biblioteca para criar front-end)
const [amount, setAmount] = useState(0) //cria-se a variável amount e uma função steAmount 

//o que não pode fazer:
amount = 2

//como fazer:
setAmount(2)
