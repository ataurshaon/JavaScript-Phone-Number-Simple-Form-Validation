var phone = document.getElementById('phoneNumberValidation');

phone.addEventListener('input', function(){
    if(phone.value.length > 11 || phone.value.length < 11){
        phone.style.color = 'red';
    }
    else{
        phone.style.color = 'black';
    }
})