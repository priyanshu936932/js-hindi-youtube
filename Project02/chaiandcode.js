const form=document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault();
    const weight=parseInt(document.getElementById('weight').value);
    const height=parseInt(document.getElementById('height').value);
    const result=document.getElementById('result');
    if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter valid weight! Given weight is: ${weight}`;
    }
    else if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=(`Please enter valid height! Given weight is: ${height}`);

    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>Your BMI is ${bmi} kg/m2.</span>`;
        const weightGuide=document.getElementById('weight-guide');
        if(bmi<18.6){
            weightGuide.innerHTML=`You are underweight with BMI ${bmi}`;
        }
        else if(bmi>=18.6 && bmi<=24.9){
           weightGuide.innerHTML=`You are in normal range with BMI ${bmi}`;
        }
        else {
           weightGuide.innerHTML=`You are overweight  with BMI ${bmi}`;

        }
    }

})