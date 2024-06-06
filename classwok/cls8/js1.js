function f1()
{
    let x=document.getElementById("id1").value;
    let y=document.getElementById("id2").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    let z=x+y;
    document.getElementById("pid1").innerHTML="value of x and y : "+x+"and "+y+"<br> type of values :"+typeof x+" and "+typeof y+"<br>Sum ="+z+"<br> type of sum :"+typeof z  ;
    return z;
}
function mul()
{
    let a=document.getElementById("id4").value;
    let b=document.getElementById("id5").value;
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    let c=a*b;
    document.getElementById("pid2").innerHTML="value of x and y : "+a+"and "+b+"<br>product="+c;

}
function div()
{
    let x=document.getElementById("id4").value;
    let y=document.getElementById("id5").value;
    x=Number.parseInt(x);
    y=Number.parseInt(y);
    let z=x/y;
    document.getElementById("pid3").innerHTML="value of x and y : "+x+" and "+y+"<br> qoutient = "+z;

}