console.log("Hello world!")



function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");
    let userAge = AGE_FIELD.value;
    let userMoney = MONEY_FIELD.value;
    let userName = NAME_FIELD.value;} 
    
    
    function calculatePay() {
        const OUTPUT = document.getElementById("output");
        const MONEY_FIELD = document.getElementById("moneyField");
    
        let _price = 4;
        let _money = Number(MONEY_FIELD.value);
        let balance = _money - _price;
        OUTPUT.innerHTML += "<p>you have "+balance+" dollars</p>";
    }
    