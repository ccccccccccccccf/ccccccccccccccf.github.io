const sot= new Date();
let year = String(sot.getYear()+1900);
//let year=Math.floor(sot/(365*24*60*60*1000)+1970);
let month= String(sot.getMonth()+1);
let d =String(sot.getDate());
let hr = String(sot.getHours());
let min = String(sot.getMinutes());
let sec = String(sot.getSeconds());
if (min.length==1){
    min="0"+min;
}
if (sec.length==1){
    sec ="0"+sec;
}
if (hr.length==1){
    hr="0"+String(hr);
}
if (month.length==1){
    month="0"+month;
}
if (d.length==1){
    d="0"+d;
}
let pre = `${year}-${month}-${d} ${hr}:${min}:${sec} `;
list0 = ["ad-lib", "paradigm", "reminiscence", "dream", "wake up", "bpemr", "nocturne", "cafe-de-coral", "erika", "minecampf", "meinkraft", "alt-f4", "ctrl-alt-tab", "left-to-right", "einfach-lustig", "petard-be-hoist", "cogito-ergo-sum", "test1"];
list64 = ["110100100001001110011011001001110100001011001011000010010011100110101100001001001100111011000111010110000000000","10010110000100100001101101100110010011110010110000101001000010011011011001100110111101101001111001011011001100110000101001000011010010000101100100110000101001111010011011001100111101001001000111101011000010100110110011001100101000010000110100110000101001100001001010111100100", "01111011011011110010010111100100101001111001001000011010011001101101111001001000010011010110010000100110011011000010011010110000100100001001101001011000010000101001100110011011010000110010011010000101000100011"];
pre = pre+list0[Math.floor(Math.random()*(list0.length+1))];
if (Math.random()>=0.99){
    pre = list64[Math.floor(Math.random()*(list64.length+0.1))];
}
let list1 = [...pre];
//104 initial value
let testvalue= 104;
let list2 = [];
let list3=['11010010000'];
const cbig = {
  " ":  0,":":  26,
  "-":  13,
  "0":  16,
  "1":  17,
  "2":  18,
  "3":  19,
  "4":  20,
  "5":  21,
  "6":  22,
  "7":  23,
  "8":  24,
  "9":  25,
  "a":  65,
  "b":  66,
  "c":  67,
  "d":  68,
  "e":  69,
  "f":  70,
  "g":  71,
  "h":  72,
  "i":  73,
  "j":  74,
  "k":  75,
  "l":  76,
  "m":  77,
  "n":  78,
  "o":  79,
  "p":  80,
  "q":  81,
  "r":  82,
  "s":  83,
  "t":  84,
  "u":  85,
  "v":  86,
  "w":  87,
  "x":  88,
  "y":  89,
  "z":  90,
}
const cBin = [
  "11011001100",
  "11001101100",
  "11001100110",
  "10010011000",
  "10010001100",
  "10001001100",
  "10011001000",
  "10011000100",
  "10001100100",
  "11001001000",
  "11001000100",
  "11000100100",
  "10110011100",
  "10011011100",
  "10011001110",
  "10111001100",
  "10011101100",
  "10011100110",
  "11001110010",
  "11001011100",
  "11001001110",
  "11011100100",
  "11001110100",
  "11101101110",
  "11101001100",
  "11100101100",
  "11100100110",
  "11101100100",
  "11100110100",
  "11100110010",
  "11011011000",
  "11011000110",
  "11000110110",
  "10100011000",
  "10001011000",
  "10001000110",
  "10110001000",
  "10001101000",
  "10001100010",
  "11010001000",
  "11000101000",
  "11000100010",
  "10110111000",
  "10110001110",
  "10001101110",
  "10111011000",
  "10111000110",
  "10001110110",
  "11101110110",
  "11010001110",
  "11000101110",
  "11011101000",
  "11011100010",
  "11011101110",
  "11101011000",
  "11101000110",
  "11100010110",
  "11101101000",
  "11101100010",
  "11100011010",
  "11101111010",
  "11001000010",
  "11110001010",
  "10100110000",
  "10100001100",
  "10010110000",
  "10010000110",
  "10000101100",
  "10000100110",
  "10110010000",
  "10110000100",
  "10011010000",
  "10011000010",
  "10000110100",
  "10000110010",
  "11000010010",
  "11001010000",
  "11110111010",
  "11000010100",
  "10001111010",
  "10100111100",
  "10010111100",
  "10010011110",
  "10111100100",
  "10011110100",
  "10011110010",
  "11110100100",
  "11110010100",
  "11110010010",
  "11011011110",
  "11011110110",
  "11110110110",
  "10101111000",
  "10100011110",
  "10001011110",
  "10111101000",
  "10111100010",
  "11110101000",
  "11110100010",
  "10111011110",
  "10111101110",
  "11101011110",
  "11110101110"
];
for (const [i,x] of list1.entries()){
    testvalue += (i+1)*cbig[x];
    list2.push(cbig[x]);
    console.log(i+1);
}
testvalue = testvalue%103;
list2.push(testvalue);
//list2.push(106);
console.log(list2);
for (const y of list2){
    list3.push(cBin[y]);
}
list3.push("1100011101011");
list3.push("0000000000");
const output1 = list3.join("");
console.log(output1);
let a=0;
let temp="";
const canvas1 = document.getElementById("test1");
const ctx1 = canvas1.getContext("2d");
const canvas2 = document.getElementById("test2");
const ctx2 = canvas2.getContext("2d");
let w = 3;
console.log(list3.length);
console.log(pre.length);
canvas1.width=(output1.length+10)*w;
canvas2.width=(output1.length+10)*w;

let h=300;
function draw(){
    ctx1.fillStyle="white";
    ctx2.fillStyle="black";
    while (a<output1.length){
        if (output1[a]==1){
            ctx1.fillRect((10+a)*w, 0, w, h);
            ctx2.fillRect((10+a)*w, 0, w, h);
        } 
        a+=1;
    }
}
draw()
//function resize() {
    //const rect2 = canvas2.parentElement.getBoundingClientRect();
    //const rect1 = canvas1.parentElement.getBoundingClientRect();
    //canvas2.width  = rect2.width;   
    //anvas1.width  = rect1.width;   
    //canvas.height = 80;
    //draw();}
//resize();
//setInterval(resize(),1000);
//window.addEventListener("resize", resize);