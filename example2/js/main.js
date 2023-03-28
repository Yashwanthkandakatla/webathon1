

(function onLoad()
{
    // set a function for each button
    setButtonFunctions();

    // fetch from each API when the page loads
    
    bmicalc();
})();

function setButtonFunctions()
{
   
    document.getElementById('bmi').onclick = bmicalc;
    
}

// Chuck Norris jokes


// Currency Exchange rates


// COVID 19 Data


async function bmicalc(){
    const from = document.getElementById('weight').value;
    const to = document.getElementById('height').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '925e1289d6msh5032f03e45227c3p15abedjsn943602fc98db',
            'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
        }
    };
    
    fetch('https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?&weight='+from+'&height='+to, options)
        .then(response => response.json())
        .then(response => {
            console.log("BMI CALCI");
            console.log(response);
            console.log("\n");

        // display data
        document.getElementById('currencyResult').innerHTML = 'Result: ' + response;
        })
            
        .catch(err => console.error(err));
}