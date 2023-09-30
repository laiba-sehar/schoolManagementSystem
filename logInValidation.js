const toggle=document.querySelector(".toggle"),
input1=document.querySelector("#PASSWORD");
toggle.addEventListener("click",()=>{
    
    if(input1.type=="password"){
        input1.type="text";
        toggle.classList.replace("uil-eye-slash","uil-eye");
    }
    else{
        input1.type="password";
        toggle.classList.replace("uil-eye","uil-eye-slash");
    }
})
// const showPassword=document.querySelector('#show-password');
// const passwordField=document.querySelector('#PASSWORD');
// showPassword.addEventListener("click",function(){
   
//     this.classList.toggle("fa-eye-slash");
//     const type=passwordField.getAttribute("type")
//     ==="password" ? "text" : "password";
//     passwordField.setAttribute("type",type);
// })
const form=document.getElementById('form');
const EMail=document.getElementById('EMail');
const password=document.getElementById('PASSWORD');
form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const setError=(element,message)=>{
  
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('eror');
    inputControl.classList.remove('success')
}
const setSucess = element =>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}
const validateInputs = () =>{
    const EmailValue=EMail.value.trim();
    const passwordValue=password.value.trim();
    if(EmailValue === ''){
        setError(EMail, 'Email is required');
        EMail.style.border='1px solid  #ff3860';
    }
    else if (!isValidEmail(EmailValue)){
        setError(EMail, 'Provide a valid email address');
        EMail.style.border='1px solid  #ff3860';
    }
    else{
        setSucess(EMail);
        EMail.style.border='1px solid #000';
    }
    if(passwordValue === ''){
        
        setError(password, 'Password is required');
        password.style.border='1px solid  #ff3860';
    }
    else if(passwordValue.length<8){
        setError(password, 'Password must be at least 8 characters');
        password.style.border='1px solid  #ff3860';

    }
    else{
        setSucess(password);
        password.style.border='1px solid #000';

    }
};
// const uName=document.getElementById('USERNAME');
// const pass=document.getElementById('PASSWORD');
// const form=document.getElementById('form');
// form.addEventListener('click',(event)=>{
//     event.preventDefault();
//     if(uName.value.trim()==''){
//         error(uName,'username cannot be empty');
//     }
// });
// function error(element, message){
//     element.style.border='1px solid red';
// }