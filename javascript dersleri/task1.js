/*
!------1-10 ededlerin cemi-----

let cem = 0;
for( let i = 1; i<=10; i++){
    cem+=i;
}
alert(cem)
*/

/*
!------1-10 ededlerin hasili------

let hasil = 1;
for( let i=1;i<=10;i++){
    hasil=hasil*i;
}
console.log(hasil)
*/

/*
!-------task2------------
 
for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log("1-100 arasi cut ededler:" + i)
    }
}
*/


/*
!-------task3-------------

cem=0;
saygac=0;
for(let i=100;i<=999;i++){
 cem+=i;
 saygac++;
}

let edediOrta=cem/saygac;
console.log("3 reqemli ededlerin ededi ortasi:" + edediOrta)
*/

 /*
 !--------------task4----------------


for(let i=100; i<=999; i++){
    if(i%7==0 && i%8==0){
        console.log("ucreqemli ededlerden 7 ve 8-e bolunen ededler:" + i)
    }
}
*/


/*
!------------task5-------------------

let cem=0;
for(let i=100; i<=999; i++){
    if(i%7==0 && i%8==0){
        cem+=i;
    }
}
alert("ucreqemli ededlerden 7 ve 8-e bolunen ededlerin cemi:" + cem);
*/

/*
!--------------task6---------------


let saygac=0;
for(let i=100; i<=999; i++){
    if(i%7==0 && i%8==0){
        saygac++;
        console.log(i)
        if(saygac===1){
          break; 
          

        }
       
    }
}

*/

/*

!---------------task7-----------------
let cavab=true;
for(let i=1;i<=100;i++){
    for(let j=2;j<=Math.floor(i/2);j++){
        if(i%j==0){
            cavab=true;
            break;
        }
    }

} 
if(cavab){
    console.log(i+"-ededi murekkebdir.")
}
else{
    console.log(i+"-ededi sadedir.")
} 

*/


/*
!-----------task8----------------

let a1 = prompt("Massivin 1-ci ededini daxil:")
let a2 = prompt("Massivin 2-ci ededini daxil edin:")
let a3 = prompt("Massivin 3-cu ededini daxil edin:")

console.log("3 eded arasinda en boyuyunu tapin:" + Math.max(a1,a2,a3))
*/



/*
!---------task9----------------

let cem = 0;
let a = [];
let arrayLenght = prompt("Massivin uzunlugunu daxil edin:")
for(let j=0;j<=arrayLenght-1;j++){
     a[j] = Number(prompt(j + "-ci qiymeti daxil edin:"))
    
}

for(let i=0;i<=arrayLenght-1;i++){
    cem = cem + a[i];
}

console.log("Massivdeki ededlerin cemi:"+cem) 
*/


/*
let a = [1,2,3,5,6,7,8]
let b = [1,2,3,12,13,14]
console.log(a)
console.log(b)


for(let i=0;i<=a.length-1;i++){
    for(let j=0;j<=a.length-1;j++){
        if(a[i]===b[j]){
           b.splice(j,1) 
        }
    }
}
console.log(b)
*/


/*
let a = [11,2,"salam",5,true,7,8]
console.log(a)


for(let i=0;i<=a.length-1;i++){
   if(typeof a[i]!=='Number'){
    a.splice(i,1)
   }
}
console.log(a)
*/


/*
!---------------task14------------------
let eded = prompt("Eded daxil edin:")
let teklikler = [' ' , 'bir' , 'iki' , 'uc' , 'dord' , 'bes' , 'alti' , 'yeddi' , 'sekkiz' , 'doqquz' , 'on']
let onluqlar = [' ' , 'on' , 'iyirmi' , 'otuz' , 'qirx' , 'elli' , 'altimis' , 'yetmis' , 'seksen' , 'dogsan']


function edediSozleYaz(eded){
if(eded==0){
    return "Sifir";
}
else if(eded<=10){
    return teklikler[eded];
}

else if(eded<=100){
    return onluqlar[Math.floor(eded / 10)] + ' ' + edediSozleYaz(eded%10);
}
else if(eded<=1000){
    return teklikler[Math.floor(eded/100)] + " yuz " + edediSozleYaz(eded%100);
}
else if(eded<=10000){
    return teklikler[Math.floor(eded/1000)] + " min " + edediSozleYaz(eded%1000);
}
else if(eded<=100000){
    return edediSozleYaz(eded/1000) + "min" + edediSozleYaz(eded%1000)
}
else if(eded<=1000000){
    return edediSozleYaz(eded/1000) + "min" + edediSozleYaz(eded%1000)
}


}
let reqemIle = edediSozleYaz(eded);
document.write(reqemIle)
*/


let cumle = prompt("Bir cumle daxil edin:");
let yeniCumle = cumle.replace(/\s/g, ''); // replace metodu ile bosluqlari silirik
document.write(yeniCumle); 
