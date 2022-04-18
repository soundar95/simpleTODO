function fun(){
   let text=document.getElementById("text");
   console.log(text.value);
   let newList=document.createElement("li");
   newList.innerHTML=text.value;
   let result=document.getElementById("lists");
   result.appendChild(newList);
   text.value="";
}
