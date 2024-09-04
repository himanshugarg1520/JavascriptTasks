document.addEventListener('DOMContentLoaded', ()=>{
    
    const form  = document.getElementById('myForm')
    const subbutton = document.getElementById('submitBtn');

    function validateForm(){
        let isValid=true;

        const name = document.getElementById('name')
        const mobile = document.getElementById('mobile')
        const email = document.getElementById('email')
        const dob = document.getElementById('dob')


        if(!name.value.trim()){
            document.getElementById('nameError').textContent = 'Name is Required';
            isValid=false
        }
        else{
            document.getElementById('nameError').textContent = '';
        }

        if(!mobile.value.match(/^\d{10}$/)){
            document.getElementById('mobileError').textContent = 'Enter Valid Mobile Number';
            isValid=false
        }
        else{
            document.getElementById('mobileError').textContent = '';
        }

        if(!email.validity.valid){
            document.getElementById('emailError').textContent = 'Email Address is Required';
            isValid=false
        }
        else{
            document.getElementById('emailError').textContent = '';
        }

        if(!dob.value){
            document.getElementById('dobError').textContent = 'Date of Birth is Required';
            isValid=false
        }
        else{
            document.getElementById('dobError').textContent = '';
        }


            // address details add
        const addressLine = document.getElementById('addressLine');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const pincode = document.getElementById('pincode');

        if(!addressLine.value.trim()){
            document.getElementById('addressLineError').textContent='Address is Required';
            isValid=false;
        }
        else{
            document.getElementById('addressLineError').textContent = '';
        }
        
        if(!city.valid.trim()){
            document.getElementById('cityError').textContent = 'City is Required';
            isValid=false;
        }
        else{
            document.getElementById('cityError').textContent = '';
        }

        if(!state.valid.trim()){
            document.getElementById('stateError').textContent = "State is Required";
            isValid=false;
        }
        else{
            document.getElementById('stateError').textContent = ''
        }

        if(!pincode.value.match(/^\d{10}$/)){
            document.getElementById('pincodeError').textContent = 'Pincode is Required';
            isValid=false;
        }
        else{
            document.getElementById('pincodeError').textContent = '';
        }

        submitBtn.style.display = invalid ? "inline-block": 'none';
        return invalid;
    }

    form.addEventListener('input',validateForm);
    
    form.addEventListener('submit',(event) => {
        event.preventDefault();
        if(validateForm()){
            alert("Form Submit Successfully");
        }
    });

    validateForm();

});