
let btn = document.querySelector(".add");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

let add = function(){
    if(input.value != ""){
    let l = document.createElement("li");
    l.innerText = input.value+" ";

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("del");

    l.appendChild(delbtn);
    ul.appendChild(l);

    input.value ="";
    }
};


btn.addEventListener("click",add);

input.addEventListener("keypress",function(event){
    if(event.code == "Enter"){
        add();
    }
    
    
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let li = event.target.parentElement;
        li.remove();
        console.log(`${li.innerText}d !!`)
    }
    
    
});





