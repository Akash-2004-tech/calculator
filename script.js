let display=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let buttonsarray=Array.from(buttons);
let string='';
buttonsarray.forEach(function(btn){
    btn.addEventListener('click' ,function(event){
        if(event.target.innerHTML=='DEL'){
            
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else if(event.target.innerHTML=='AC'){
            string='';
            display.value=string;
        }
        else if(event.target.innerHTML=='='){
            try{
            string=eval(string);
            display.value=string;}
            catch(e){
                display.value="error";
                string='';
            }
        }
        else {
        string+=event.target.innerHTML;

        display.value=string;
        }
        
    });
});

//console.log(buttonsarray);
