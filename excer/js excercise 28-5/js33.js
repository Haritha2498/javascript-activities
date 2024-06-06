

function func2()
{
    let x=localStorage.getItem("Username");
    let y=localStorage.getItem("Password");

    let u=document.getElementById("id3").value;
    let p=document.getElementById("id4").value;

    if(x==u&&y==p)
    {
        document.getElementById("id5").innerHTML="Login successful"
    }
    else{
        document.getElementById("id5").innerHTML="invalid login and password"
    }
}