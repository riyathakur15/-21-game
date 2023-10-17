 var aacard=document.getElementById("card")
 var aasum=document.getElementById("sum")
 var aares=document.getElementById("res")
 var aacsum=document.getElementById("csum")
 
 var aatotal=0
 var cctotal=0
 var aastorage=[]
 var start=false
  var Player=prompt("enter your name")
  var stake=prompt("enter the amount")
 var st=document.querySelector("#start")
var bg=document.querySelector("#cont")
var body=document.querySelector("body")
 st.addEventListener("click",()=>{
    st.style.display="none"
    var aafirst=ra()
    var aasecond=ra()
    var ccfirst=ra()
    var ccsecond=ra()
    cctotal=ccfirst+ccsecond
    aatotal=aafirst+aasecond

    aastorage=[aafirst,aasecond]
  
    start=true
    main()
 })
 function startgame(){
   
  
 }
 function main(){
    aacard.innerHTML="Cards:"
   
    for(i=0;i<aastorage.length;i++){
        aacard.innerHTML+=`${aastorage[i]}   `
        aasum.innerHTML =` PlayerTotal: ${aatotal}`  
        aacsum.innerHTML=`Computer Total:${cctotal}`  }

    if(aatotal<21){
        aares.innerHTML=`do you want new card?`
    }
    else if(aatotal>21){
        aares.innerHTML=`Sorry ${Player},you lost Rs. ${stake}`
        body.style="background-image:url(./img/h3z5PZ.gif); background-size:cover"
    }
    else{
        aares.innerHTML=`Congrats!! ${Player},you won Rs.${stake}`
        body.style="background-image:url(./img/money-dance.gif); background-size:100%"
    }
 }
 function ra(){
   
    var fl= (Math.floor(Math.random()*13))+1
    if(fl>10){
        return 10
    }
    else if(fl==1){
        return 11
    }
    else{
        return fl
    }
    
    
 }
 function newCard(){

    if(aatotal<21 && start==true){
    var aathird=ra()
    aastorage.push(aathird)
    aatotal+=aathird
    main()
    }
 }
 function stand(){
   if(start==true && aatotal<21){
    while(cctotal<=17){
        var ccthird=ra()
        cctotal+=ccthird
       aacsum.innerHTML=`Computer Total:${cctotal}`
     
    
    }
    if(aatotal>cctotal && aatotal<=21 || aatotal<=21 && cctotal>21){
        aares.innerHTML=`Congrats ${Player},you won Rs. ${stake*2}`
      //  bg.style.backgroundColor="green"
        body.style="background-image:url(./img/money-dance.gif)"
    }
   else if(cctotal>aatotal && cctotal<=21){
    aares.innerHTML=`Sorry ${Player},you lost Rs. ${stake}`
    body.style="background-image:url(./img/h3z5PZ.gif); background-size:cover"
   }
   
   else{
    aares.innerHTML=`The game is draw`
   }
   start=false;
}
 }
