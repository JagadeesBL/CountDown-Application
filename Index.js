 let endDate=document.getElementById("end-Date").innerText="14 JAN 2023 10:00 PM";
  let inputs=document.querySelectorAll("input");
  


function clock(){
    let end=new Date(endDate);
    let now=new Date();
    console.log(end)
    console.log(now)
    

   //to convert to miliseconds to seconds
     let Difference=(end-now)/1000;
     if(Difference<0)
     return;

    console.log(Difference);

    //?convert to days
  inputs[0].value =Math.floor(Difference/3600/24);
  //?covert to hours
  inputs[1].value=Math.floor(Difference/3600)%24;
  //? convert to minutes
  inputs[2].value=Math.floor(Difference/60)%60;

  inputs[3].value=Math.floor(Difference)%60;

  

}




setInterval(

    ()=>{
clock()
    },
1000

)




