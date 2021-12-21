const todoForm=document.querySelector('.form-todo');
const todoInput=document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
const todoList=document.querySelector('.todo-list');



// todoForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const newTodoText = todoInput.value;
//     const newLi=document.createElement('li');
//     const newLiInnerHtml=`
//         <span class="text">${newTodoText}</span>
//         <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//         </div>`;
//     newLi.innerHTML=newLiInnerHtml;
//     // console.log(newLi);
//     todoList.append(newLi);
//     todoInput.value="";
// })

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    let i;
    for(i=0;i<newTodoText.length;i++){
        if(newTodoText[i]==' ')
            continue;
        else
            break;
    }
    if(i<newTodoText.length){
        const newLi=document.createElement('li');
        const newLiInnerHtml=`
            <span class="text">${newTodoText}</span>
            <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>`;
        newLi.innerHTML=newLiInnerHtml;
        // console.log(newLi);
        todoList.append(newLi);
    }
    todoInput.value="";
})

todoList.addEventListener('click',(e)=>{
    // console.log(e.target);
    //check if user clicked on done button
    if(e.target.classList.contains('done')){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration='line-through';
        e.target.style.display='none';
    }else if(e.target.classList.contains('remove')){
        // console.log('You have removed something!!!');
        const targetedLi=e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
})


const currentDateTime=document.querySelector('.btn');
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// currentDate.textContent=today;

d = new Date();
let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
let nd = new Date(utc + (3600000*+5.5));
let ist =  nd.toLocaleString();

// console.log(ist);
let time=ist.slice(12,)
let date=ist.slice(0,10)
// console.log(time);
// console.log(date);


const mainHeading=document.querySelector('#main-heading');

let i=18,f=0,b=0,count=0;
const obj1={
    18:"Sourav Adhikari..#",
    17:"Sourav Adhikari.#",
    16:"Sourav Adhikari#",
    15:"Sourav Adhikar#",
    14:"Sourav Adhika#",
    13:"Sourav Adhik#",
    12:"Sourav Adhi#",
    11:"Sourav Adh#",
    10:"Sourav Ad#",
    9:"Sourav A#",
    8:"Sourav #",
    7:"Sourav#",
    6:"Soura#",
    5:"Sour#",
    4:"Sou#",
    3:"So#",
    2:"S#",
    1:"#",
}
const obj2={
    18:"I am a Developer.#",
    17:"I am a Developer#",
    16:"I am a Develope#",
    15:"I am a Develop#",
    14:"I am a Develo#",
    13:"I am a Devel#",
    12:"I am a Deve#",
    11:"I am a Dev#",
    10:"I am a De#",
    9:"I am a D#",
    8:"I am a #",
    7:"I am a#",
    6:"I am #",
    5:"I am#",
    4:"I a#",
    3:"I #",
    2:"I#",
    1:"#",
}

currentDateTime.textContent=date;
let timeToggler = false,dateToggler = true

function customizedFunc(){
    // console.log(i);
    if(i==1){
        b=0;
        f=1;
        if(count%2 ==0){
            // console.log(obj1[i]);
            mainHeading.textContent=obj1[i];
            
        }else{
            mainHeading.textContent=obj2[i];
            
        }
        if(dateToggler){
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=time;
            dateToggler=false;
            timeToggler=true;
        }else{
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=date;
            dateToggler=true;
            timeToggler=false;            
        }
        i++;
        count++;
    }else if(i==18){
        b=1;
        f=0;
        if(count%2 ==0){
            mainHeading.textContent=obj1[i];
            
        }else{
            mainHeading.textContent=obj2[i];
            
        }
        if(dateToggler){
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=time;
            dateToggler=false;
            timeToggler=true;
        }else{
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=date;
            dateToggler=true;
            timeToggler=false;            
        }
        i--;
    }else if(b==1){
        if(count%2 ==0){
            mainHeading.textContent=obj1[i];
        }else{
            mainHeading.textContent=obj2[i];
        }
        if(dateToggler){
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=date;            
        }else{
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=time;
        }
        i--;
    }else if(f==1){
        if(count%2 ==0){
            mainHeading.textContent=obj1[i];
        }else{
            mainHeading.textContent=obj2[i];
        }
        if(dateToggler){
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=date;            
        }else{
            d = new Date();
            let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            let nd = new Date(utc + (3600000*+5.5));
            let ist =  nd.toLocaleString();
            
            // console.log(ist);
            let time=ist.slice(12,)
            let date=ist.slice(0,10)
            // console.log(time);
            // console.log(date);
            currentDateTime.textContent=time;
        }
        i++;
    }
}

setInterval(customizedFunc,200)

