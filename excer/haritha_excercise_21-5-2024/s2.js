function text()
    {
        let x=document.getElementById("id1").value;
        document.getElementById("pid1").innerHTML= x+ "  <br>type of data = "+typeof x;
    
    }
    function text1()
    {
        let x=document.getElementById("id2").value;
        x=Number.parseInt(x);
        document.getElementById("pid2").innerHTML= x+ "  <br>type of data = "+typeof x;
    
    }

    function name1()
    {
        let fn=document.getElementById("id3").value;
        let ln=document.getElementById("id4").value;
        
        let name=fn+"  "+ln;
        document.getElementById("pid3").innerHTML=name;

    }