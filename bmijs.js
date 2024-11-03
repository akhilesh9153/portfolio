const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#Height').value)
    const weight=parseInt(document.querySelector('#weight').value)

    const result=document.querySelector('#results')
    const guide=document.querySelector('#weightguide')

    if(height ===''|| height<0|| isNaN(height)){
        result.innerHTML=`Please give a valid height ${height}`

    }
    else if(weight ===''|| weight<0|| isNaN(weight)){
        result.innerHTML=`Please give a valid height ${weight}`

    }
    else {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        let weight1;

        if(bmi<18.6){
            weight1='Under weight';
        }
        else if(bmi>24.9){
             weight1='over weight';
        }
        else {
             weight1='normal weight';
        }
        //show the result
        result.innerHTML=`<span>${bmi}  </span> `
        guide.innerHTML=`<span> ${weight1}</span>`

    }

    

})

