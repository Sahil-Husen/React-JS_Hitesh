    const fromAmount = document.querySelector('.amount')
    const convertedAmount = document.querySelector('.convertedAmount')
    const fromCurrancy = document.querySelector('.fromCurrancy')
    const toCurrancy = document.querySelector('.toCurrancy')
    const result = document.querySelector('.result')

    const countries = [
        {
            code:'INR',
            name:'Indian Rupees'
        },
        {
            code:'USD',
            name:'United States Dollars'
        },
        {
            code:'AED',
            name:'Dirham'
        },
        {
            code:'EURO',
            name:'Europian Dollar'
        },
        {
            code:'USD',
            name:'United States Dollars'
        }
    ]

   countries.forEach((country)=>{
    const option1 = document.createElement('option')
    const option2 = document.createElement('option')

    option1.value = country.code;   
    option1.textContent = `${country.code} (${country.name})`;
    option2.value = country.code;
    option2.textContent = `${country.code} (${country.name})`;


    fromCurrancy.appendChild(option1)
    toCurrancy.appendChild(option2)

   })


   const getExchangeRate = async()=>{

    const amount = parseFloat(fromAmount.value)
    const fromCurrancy = fromCurrancy.value;
    const toCurrancy = toCurrancy.value;

    const response = await fetch(' https://v6.exchangerate-api.com/v6/13c13207d01c94d30a55590b/latest/${fromCurrancy}')
    const data =  await response.json();
    console.log(data);
     
   }
   getExchangeRate();