function checkPrime(){
   var num = getInput();
  flag=true;
  if(num<2){    
    flag=false;
  }
  for( var i=2;i<=Math.sqrt(num);i++)
    {
      if(num %i==0)
        {
          flag=false;
          break;
        }
     
    }
    if(flag)
        showResult(num+" is Prime");
    else
        showResult(num+" is not Prime");
}



function fact(){
    num=getInput();
    var res=1;
    for(var i=1;i<=num;i++)
        {
            res *= i;
        }
    showResult("Fact of "+num +" is " +res);
    
}
 
function factors(){
    num=getInput();
    var output = "";
    for(i=1;i<=num;i++)
        {
            if(num%i==0)
                output += i +" ";
        }
     showResult("Factors are  " +output);
    
    
}
function fibonacci(){
    num=getInput();
    output="";
    if(num == 1)
        showResult("0");
    else if(num == 2)
        showResult("0 1");
    else
        {
            var a=0,b=1;
            output="0 1";
            for(var i=3;i<=num;i++) 
                {
                   c=a+b
                   a=b;
                    b=c;
                    output+= " "+c;
                }
            showResult(output);
        }
}

function getInput(){
    var n = document.getElementById('num').value;
    return n;
}
function showResult(message){
      document.getElementById('result').innerHTML="<h4>"+message+"<h4>"; 
}