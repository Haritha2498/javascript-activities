function name1()
        {
            console.log(event);
            let a=document.getElementById("id1").value;
            let b=document.getElementById("id2").value;
            let c=document.getElementById("id3").value;
            let d=document.getElementById("id4").value;
            let e=document.getElementById("id5").value;
            
            document.getElementById("pid1").innerHTML="Name :"+a+" "+b;
            
            document.getElementById("pid3").innerHTML="Address :"+c;
            document.getElementById("pid4").innerHTML="Email id :"+d;
            document.getElementById("pid5").innerHTML="Phone number :"+e;
            
        }