let todos =

JSON.parse(localStorage.getItem("todos"))

||

[];



const form =
document.getElementById("form");


const input =
document.getElementById("input");

const time =
document.getElementById("time");


const list =
document.getElementById("list");


const total =
document.getElementById("total");


const done =
document.getElementById("done");


const left =
document.getElementById("left");


const bar =
document.getElementById("bar");


const message =
document.getElementById("success-message");





form.addEventListener(
"submit",
function(e){


e.preventDefault();



if(input.value.trim()){


todos.push({

id:Date.now(),

text:input.value,
duration:time.value,

complete:false


});



input.value="";

time.value="";

save();


render();


}


});







function render(){


list.innerHTML="";



todos.forEach(todo=>{


let li=document.createElement("li");



if(todo.complete){


li.classList.add("done");


}




li.innerHTML=

`

<div>


<span>

${todo.text}

</span>



<p class="duration">

⏰ ${todo.duration || "No time set"}

</p>



</div>




<button class="delete">
Delete
</button>


`;





li.querySelector("span")
.onclick=()=>{


todo.complete =
!todo.complete;



save();


render();


}




li.querySelector(".delete")
.onclick=()=>{


todos =

todos.filter(

t=>t.id!==todo.id

);



save();


render();


}





list.appendChild(li);



});



update();


}





function update(){



total.innerHTML=todos.length;



let completed =

todos.filter(

t=>t.complete

).length;



done.innerHTML=completed;



left.innerHTML=

todos.length-completed;





let percent =


todos.length ?


(completed/todos.length)*100


:


0;



bar.style.width =

percent+"%";





if(

todos.length>0 &&

completed===todos.length

){



message.classList.add("show");


}

else{


message.classList.remove("show");


}



}






function save(){


localStorage.setItem(

"todos",

JSON.stringify(todos)

);


}






document.getElementById("theme")
.onclick=function(){


document.body.classList.toggle("dark");


}






render();