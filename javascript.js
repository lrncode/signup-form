const x = document.getElementById('password');
const y = document.getElementById('confirm-password');
const p = document.getElementById('message');
//const btn1 = document.getElementById('btn-pass');
const btn = document.getElementById('btn-create-account');



btn.addEventListener('click' , (e) => {
    if(x.value != y.value){
        e.preventDefault();
        p.innerHTML = '* Passwords do not match'; 
        y.style.border = ('1px solid red');
        y.style['border-radius'] = ('3px');
        x.style.border = ('1px solid red');
        x.style['border-radius'] = ('3px');         
    }
    else{
        p.innerHTML = '';
    }
});



