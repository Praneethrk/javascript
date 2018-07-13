/*2.html Script*/
function cal(){
    var amount = document.getElementById('amt').value;
    var time = document.getElementById('time').value;
    var rate = document.getElementById('rate').value;
    var si = (amount*time*rate)/100;
                
    document.getElementById('result').innerHTML='SI='+si;
        msg='Amount='+amount;        
            }
            
  /*2.html Script Ends*/  

/*3.html Script*/
function isEven() {
    var num = document.getElementById('num').value;
    var message;
    if(num%2 == 0){
       message = "number"+num+" is even";
    } 
    else{
       message = "number"+num+" is odd";
    }
    document.getElementById('r').innerHTML=message;
}


function bill(){
    var units = document.getElementById('units').value;
    var min_amount = 50;
    var amount = 0;
    var total_amount = 0;
    
    if(units>=0&&units<100)
        {
            amount=units * 5;
        }else if(units>=100&&units<500)
        {
            amount=units * 6;
        }else
        {
            amount=units * 10;
        }
     
    var total_amount = amount+min_amount;
    msg='bill amount='+total_amount;
    document.getElementById('bills').innerHTML=total_amount;
    

}
/*3.html Script Ends*/