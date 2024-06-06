function func()
{
    alert('successfully registed with login and password');
    let a=document.getElementById("id1").value;
    let b=document.getElementById("id2").value;
    
    let up={
        user:a,
        pass:b
    }
    
    localStorage.setItem("Username",up.user);
    localStorage.setItem("Password",up.pass);
    

    
}


