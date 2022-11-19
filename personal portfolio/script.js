console.log("Script running.....")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
if(document.querySelector('.slidebar').classList.contains('slidebarGo')){
    document.querySelector('.ham').style.dispaly='inline'
    document.querySelector('.cross').style.dispaly='none'
}
    else{

     document.querySelector('.ham').style.dispaly='none'
    document.querySelector('.cross').style.dispaly='inline'
    }
})