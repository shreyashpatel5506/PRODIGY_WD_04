
window.onscroll = function(){
    scroll()
};


function scroll(){
    if(window.scrollY > 350){
        

        document.getElementById("upimage").style.opacity="1"; 
    } else{
        document.getElementById("upimage").style.opacity="0";
    }
}

document.getElementById("upimage").onclick = function (){
    window.scrollTo({top:0, behavior:'smooth'});
};


 document.getElementById("s1").onclick  = function (){
    window.scrollTo({top:970,behavior:'smooth'})
 };

 document.getElementById("s2").onclick  = function (){
    window.scrollTo({top:1500,behavior:'smooth'})
 };
 document.getElementById("s3").onclick  = function (){
    window.scrollTo({top:2000,behavior:'smooth'})
 };
 document.getElementById("s4").onclick  = function (){
    window.scrollTo({top:2400,behavior:'smooth'})
 };
 document.getElementById("s5").onclick  = function (){
    window.scrollTo({top:3200,behavior:'smooth'})
 };
 document.getElementById("s6").onclick  = function (){
    window.scrollTo({top:3200,behavior:'smooth'})
 };
 document.getElementById("f1").onclick  = function (){
    window.scrollTo({top:970,behavior:'smooth'})
 };

 document.getElementById("f2").onclick  = function (){
    window.scrollTo({top:1500,behavior:'smooth'})
 };
 document.getElementById("f3").onclick  = function (){
    window.scrollTo({top:2000,behavior:'smooth'})
 };
 document.getElementById("f4").onclick  = function (){
    window.scrollTo({top:2400,behavior:'smooth'})
 };
 document.getElementById("f5").onclick  = function (){
    window.scrollTo({top:3200,behavior:'smooth'})
 };


 window.addEventListener("scroll",myFunction);
 window.addEventListener("scroll",myFunction1);
 function myFunction(){
    if(window.scrollY > 1150){
        document.getElementById("Proficiency1").className='p1';
        document.getElementById("Proficiency2").className='p2';
    }

    else if(window.scrollY>750){
      document.getElementById("button").className='b1';
    }

    else{
        document.getElementById("Proficiency1").className='p456';
        document.getElementById("Proficiency2").className='p658';
        
    }
  
 }
 function myFunction1(){
   if(window.scrollY>2400){
      document.getElementById("hackathon").className="hack21";
      document.getElementById("certificate1").className="hack21";
      document.getElementById("certificate2").className="hack22";
    }
    else{
      document.getElementById("hackathon").className="hack2is1";
      document.getElementById("certificate1").className="hackdd21";
      document.getElementById("certificate2").className="hack22sds";
    }
 }

 function fu(){
   
   let hide=document.getElementById("hide1");
      hide.classList.remove("hide");
      hide.classList.add("show"); 
      document.getElementById("up").innerHTML = "x";
      let hide2=document.getElementById("hide3");
      hide2.classList.remove("show"); 
      hide2.classList.add("hide"); 
      document.getElementById("up1").innerHTML=" + ";
 }
 function up(){
   let hide=document.getElementById("hide1");
      hide.classList.remove("show"); 
      hide.classList.add("hide"); 
      document.getElementById("up").innerHTML=" + ";
 }
 function fu1(){
   
   let hide2=document.getElementById("hide3");
      hide2.classList.remove("hide");
      hide2.classList.add("show"); 
      document.getElementById("up1").innerHTML = "x";
      let hide=document.getElementById("hide1");
      hide.classList.remove("show"); 
      hide.classList.add("hide");  
      document.getElementById("up").innerHTML=" + ";
 }
 function up1(){
   let hide2=document.getElementById("hide3");
      hide2.classList.remove("show"); 
      hide2.classList.add("hide"); 
      document.getElementById("up1").innerHTML=" + ";
 }
 function dark(){
   let dark=document.getElementById("dark");
   dark.classList.add("dark");
   let nav1=document.getElementById("nav1");
   nav1.classList.add("dark1");
   nav1.classList.remove("nav");
   let light=document.getElementById("darkimage1");
   light.classList.add("darkimage122");
   light.classList.remove("darkimage12");
   let moon=document.getElementById("darkimage");
   moon.classList.add("darkimage11");
 }

 function light(){
   let dark=document.getElementById("dark");
   dark.classList.remove("dark");
   let nav1=document.getElementById("nav1");
   nav1.classList.add("nav");
   nav1.classList.remove("dark1")
   let moon=document.getElementById("darkimage");
   moon.classList.remove("darkimage11");
   let light=document.getElementById("darkimage1");
   light.classList.remove("darkimage122");
   light.classList.add("darkimage12");
 }
 function sub(){
   let mobuile=document.getElementById('mobile').value;
  
   if(isNaN(mobuile)){
      alert("enter a valid number")
   }
 }
console.log(Math.random())
   