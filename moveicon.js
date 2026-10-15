const invbox1 = document.querySelector('.trigger1');
const hmm = document.querySelector('.hmm');
const btn1 = document.getElementById('Help1');
const btn2 = document.getElementById('Close1');
const tg1 = document.getElementById('toggle1');
const cimg1 = document.getElementById('cimg1');
const dupe1 = document.getElementById('dupe1')
let count1=0
btn1.addEventListener('click', () => {
    tg1.classList.toggle('hidetest');
    count1=(count1+1)%2;
});

btn2.addEventListener('click', () => {
    tg1.classList.toggle('hidetest');
    count1=(count1+1)%2;
});

invbox1.addEventListener('mouseenter', () => {
    hmm.classList.add('move');
});

invbox1.addEventListener('mouseleave', () => {
    hmm.classList.remove('move');
});


let list001= ["image/icon/W95i3.png","image/icon/W95i4.png"];
function mgif(listx, id){
  let i = 0;
  return () => {
    i = (i + 1) % listx.length;
    id.src = listx[i];
  };
}
const gimg1 = mgif(list001, cimg1);
setInterval(gimg1, 1000);
setInterval(()=>{
    console.log(count1);
    if (count1==0) {
        document.querySelectorAll('.temp001').forEach(el=>el.remove());
    } else {
        const W951 = document.createElement('img');
        W951.src = 'image/icon/W95!.png';
        W951.style.height = '15px';
        W951.style.flex= '0 0 auto';
        W951.className = 'temp001';
        dupe1.appendChild(W951);
    }
}, 50);
console.log('SCRIPT LOADED');
//function changingimage1(){
 //   if (switch1==true){
  //      document.getElementById("cimg1").innerHTML = '<img style="flex:0 0 auto;height:15px;" src="image/icon/W95i3.png">';
   //     switch1=false;
     //    console.log(switch1);
   // } else{
   //     document.getElementById("cimg1").innerHTML = '<img style="flex:0 0 auto;height:15px;" src="image/icon/W95i4.png">';
   //     switch1=true;
   //    console.log(switch1);
  //  } 
//}