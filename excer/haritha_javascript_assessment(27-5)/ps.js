function sub()
{
    let project=["Certificate home page","id card design","notice design","receipt design","login page"];
    let name=document.getElementById("id1").value;
    let ind=document.getElementById("id2").value;

    ind=Number.parseInt(ind);
    ind=ind-1;
    let z=project[ind];


    // document.getElementById("pid1").innerHTML="The person named " +name+ " was assigned with project title "+z;
    document.write("<br><br>The person named  " +name.toUpperCase()+ " was assigned with project title "+z.toUpperCase());


}