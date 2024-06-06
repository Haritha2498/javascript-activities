
// var flim={
//     name:null,
//     flim:null,
//     ticket:null,
// }


function gent()
{
    let a=document.getElementById("id1").value ;
    let b=document.getElementById("id2").value;
    let c=document.getElementById("id3").value;
    c=Number.parseInt(c);

    document.getElementById("pid").innerHTML=a+""+b+""+c;
    localStorage.setItem("NAME",a);
    localStorage.setItem("FLIM",b);
    localStorage.setItem("TICKET",c);

    var flim={
        "name":a,
        "film":b,
        "ticket":c,
    }
}
// function f(){

// let x=localStorage.getItem("NAME");
// let y=localStorage.getItem("FLIM");
// let z=localStorage.getItem("TICKET");
// z=Number.parseInt(z);

// // var flim={
// //     "name":x,
// //     "film":y,
// //     "ticket":z,
// // }


// document.getElementById("id1").innerHTML=x;
// document.getElementById("id2").innerHTML=y;
// document.getElementById("id3").innerHTML=z;



// }






