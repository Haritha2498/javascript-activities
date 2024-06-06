function fun()
        {
            
            let a=[];
            let b=document.getElementById("id1").value;
            a.push(b);
            
            let c=document.getElementById("id2").value;
            a.push(c);
            let d=document.getElementById("id3").value;
            a.push(d);
            let e=document.getElementById("id4").value;
            a.push(e);
            let f=document.getElementById("id5").value;
            a.push(f);

            let n=[];
            n=a.sort();
            
            let roll=document.getElementById("id6").value;
            roll=Number.parseInt(roll);
            let r=roll+1;
            let name=n[roll];
            name=name.toUpperCase();
            document.getElementById("id7").innerHTML="Student with roll no "+r+ " is "+name;
            
            
        }