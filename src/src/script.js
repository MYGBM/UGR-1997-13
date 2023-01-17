function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }

const form=document.getElementById('form');
var error=[]


form.addEventListener('submit',(e)=> {
    if(error.length>0){
        e.preventDefault()
    }
    const name=document.getElementById('name')
    const email=document.getElementById('email')
    const phonenumber=document.getElementById('phonenumber')
    if(name.value.length<8){
        error.push("name has to be a least 8 characters")
    }
    if(email.value.length<10){
        error.push("name has to be a least 10 characters")
    }
    if(phonenumber.value.length<15){
        error.push("name has to be a least 15 characters")
    }
    var message=document.getElementById('message')
    message.innerText=error
    
})
const form1=document.getElementById('form1');
const username=document.getElementById('username');
const email1=document.getElementById('email1');
const error1Element=document.getElementById('error1');
form.addEventListener('submit',(e)=> {
    let messages1=[];

    if(email1.value.length<9){
        messages1.push('email has to be longer than 9 characters');
    }
    if(username.value.length<8){
        messages1.push('enter your full name');
    }
    
    if(messages1.length>0){
     e.preventDefault();
     errorElement.innerText=messages1.join(',');
    }
})
