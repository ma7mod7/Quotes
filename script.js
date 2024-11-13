//https://dummyjson.com/quotes
let resp=new XMLHttpRequest();
let main=document.querySelector("main");

resp.onload=function(){
    if(resp.readyState==4){
        if(resp.status==200){

            let data=JSON.parse(resp.responseText);
            console.log(data);
                main.innerHTML+=
                `
                <div class="qo">

               <button type="button" id="btn" onclick="copyfun()">
               <ion-icon class="icon"  name="copy-outline"></ion-icon>
               </button>

                <p class="quot" ><i class="fa-solid fa-quote-left"></i> ${data.quote} <i class="fa-solid fa-quote-right"></i></p>
                
                <p class="autthor">${data.author}</p>
                </div>

             ` 

        }
        else{
            document.write("Error 404")
        }
    }
}

function copyfun(){
    let datatext=document.querySelector(".quot");
    
    // navigator => the object of website that i used
    // clipboard => الحافظه الخاصه بالمتصفح
    // write text => كده انا بكتب القيمه اللي انا عايزها جوه الحافظه دي
    navigator.clipboard.write(datatext.textContent);
    window.alert(datatext.textContent)
}
  


let random=Math.ceil(Math.random()*1000)
resp.open("GET",`https://dummyjson.com/quotes/${random}`,true);
resp.send();