const invbox1 = document.querySelector('.trigger1');
const hmm = document.querySelector('.hmm');
const btn1 = document.getElementById('Help1');
const btn2 = document.getElementById('Close1');
const tg1 = document.getElementById('toggle1');
const cimg1 = document.getElementById('cimg1');
const dupe1 = document.getElementById('dupe1');
const btn3 = document.getElementById('displacement1');


let count1=0
let count2=0
btn1.addEventListener('click', () => {
    tg1.classList.toggle('hidetest');
    count1=(count1+1)%2;
});

btn2.addEventListener('click', () => {
    tg1.classList.toggle('hidetest');
    count1=(count1+1)%2;
});
function randxy(x,y){
    return Math.random()*(y-x)+x;
}
btn3.addEventListener('click', () => {
    count2= (count2+1)%2;
    document.querySelectorAll('.box1, .box2, .box3, .box4, .box5').forEach(el=>{
        if (count2==1){
            el.style.transform =`translate(${randxy(-400,100)}px, ${randxy(-45,450)}px) rotate(${randxy(-90,90)}deg)`;
        } else {
            el.style.transform = 'translate(0,0) rotate(0)';
        }}
    );
    document.querySelectorAll('.box6, .box7, .box8').forEach(el=>{
        if (count2==1){
            el.style.transform =`translate(${randxy(-400,100)}px, ${randxy(-25,200)}px) rotate(${randxy(-45,45)}deg)`;
        } else {
            el.style.transform = 'translate(0,0) rotate(0)';
        }}
    );
    document.querySelectorAll('.box0').forEach(el=>{
        el.style.zIndex = '101';
        if (count2==1){
            el.style.transform =`translate(${randxy(-1000,100)}px, ${randxy(-45,450)}px) rotate(${randxy(0,360)}deg)`;
        } else {
            el.style.transform = 'translate(0,0) rotate(0)';
        }}
    );
    document.querySelectorAll('.box9, .box13, .box14, .box15').forEach(el=>{
        if (count2==1){
            el.style.transform =`translate(${randxy(-300,1200)}px, ${randxy(-30,800)}px) rotate(${randxy(0,360)}deg)`;
        } else {
            el.style.transform = 'translate(0,0) rotate(0)';
        }}
    );
    document.querySelectorAll('.box10, .box11, .box12').forEach(el=>{
        if (count2==1){
            el.style.transform =`translate(${randxy(-500,600)}px, ${randxy(-100,800)}px) rotate(${randxy(0,360)}deg)`;
        } else {
            el.style.transform = 'translate(0,0) rotate(0)';
        }}
    );
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