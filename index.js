function generatePassword(){
   const length=10;
   const lowercaseChars ="abcdefghijklmnopqrstuvwxyz"
   const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars="0123456789";
   const symbolChars ="!@#$%^&*()_+=-";
      
      let password="";
     
     for(let i=0;i<length;i++){

        if(i==0 || i==2 || i==5){
         password+= lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
      }
      else if(i==6 || i==1 || i==9){
         password+= uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
      }
      else if(i==4 || i==8){
         password+= numberChars[Math.floor(Math.random() * numberChars.length)];
      }
      else{
         password+= symbolChars[Math.floor(Math.random() * symbolChars.length)];
      }
     }
    document.getElementById("generatedPassword").value=password;
}

function checkPassword(){
   const password= document.getElementById("checker").value;
   let result="";
   let percentage=0;
   if(password.length>=8) percentage+=20;
   for(let i=0;i<password.length;i++){
      if(password.charAt(i)>='a' && password.charAt(i)<='z'){
         percentage+=20;
         break;
      }
   }
   for(let i=0;i<password.length;i++){
      if(password.charAt(i)>='A' && password.charAt(i)<='B'){
         percentage+=20;
         break;
      }
   }
   for(let i=0;i<password.length;i++){
      if(password.charAt(i)>='0' && password.charAt(i)<='9'){
         percentage+=20;
         break;
      }
   }
   for(let i=0;i<password.length;i++){
      if(password.charAt(i)>='!' || password.charAt(i)<='@' || password.charAt(i)>='#' || password.charAt(i)<='$' || password.charAt(i)>='%' || password.charAt(i)<='^' || password.charAt(i)>='&' || password.charAt(i)<='*' || password.charAt(i)>='(' || password.charAt(i)<=')' || password.charAt(i)>='_' || password.charAt(i)<='+' || password.charAt(i)<='=' || password.charAt(i)<='-'){
         percentage+=20;
         break;
      }
   }

   if(password.length==0){
      result = "Enter a password."
   }
   else if(percentage<=20){
      result = `Password strength is very Weak`
   }
   else if(percentage>=40 && percentage<=60){
      result = `Password strength is Medium`
   }
   else if(percentage>60 && percentage<=80){
      result = `Password strength is Strong`
   }
   else{
      result = `Password strength is very Strong`
   }
   
   document.getElementById("message").innerText=result;
}

function copyCode(){
   let Text = document.getElementById("generatedPassword");
   Text.select();
   navigator.clipboard.writeText(Text.value);
}
