function calc(ope){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    message="";
    switch(ope){
        case "add":message=num1 + " + "+num2 +" = "+(num1+num2);
                   break;
        case "sub":message=num1 + " - "+num2 +" = "+(num1-num2);
                   break;
        case "mul":message=num1 + " * "+num2 +" = "+(num1*num2);
                   break;
        case "div":message=num1 + " / "+num2 +" = "+(num1/num2);
                   break;
        case "mod":message=num1 + " % "+num2 +" = "+(num1%num2);
                   break;
    }
    document.getElementById('res').innerHTML="<h4>"+message+"<h4>";   
}