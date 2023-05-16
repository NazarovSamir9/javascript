
/*   
  ? bilgilendirme mesaji
  ! vacib seyler yazilir
*/
/*let a;
let b;
for(a=0;a<=100;a++){

  if(a==0){

    console.log("bu eded sifirdir:" + (a))
  }
  
  if(a%2==1){
    console.log("tek eded:" + (a));
  }

  if(a%2==0 && a!=0){
    console.log("cut eded:" + (a));


  }

}
*/


/*
let ad=prompt("adinizi daxil edin");
let soyad=prompt("Soyadinizi daxil edin:");
console.log("istifadecinin adi ve soyadi:" + (ad+soyad))


let sonuc=confirm("Davam etmeye eminsiniz?");
console.log(sonuc);
? --> eger tamam edersek true iptal edersek false dondurur


let qeyd=alert("Biraz narmalni!");
console.log(qeyd);
*/





/*
!----------------Suruculuk vesiqesi alma--------------------------
let yas=Number(prompt("Yasinizi daxil edin:"));
let budce=Number(prompt("Budcenizi daxil edin:"));
if(yas>=18 && budce>=1000){
  alert("Siz suruculuk vesiqesi ala bilersiz.")
}
else{
  if(yas<18){
     alert("Yasiniz 18-i kecmediyi ucun suruculuk vesiqesi ala bilmezsiniz.")
  }
  else{
    alert("Budceniz catmadigi ucun suruculuk vesiqesi ala bilmezsiniz.")
  }
}
*/



/*
!-------------Imtahan balinin hesablanmasi-----------------------
let Midterm=Number(prompt("Midterm balinizi daxil edin:"));
let Teqdimat=Number(prompt("Teqdimat balinizi daxil edin:"));
let Aktivlik=Number(prompt("Aktivlik balinizi daxil edin:"));
let Imtahan=Number(prompt("Imtahan balinizi daxil edin:"));
let UmumiBal=Midterm+Teqdimat+Aktivlik+Imtahan;
if(UmumiBal>=51 && Imtahan>=17){
  alert("Tebrikler siz imtahandan kecdiniz.Smestr boyu umumi baliniz:"+(UmumiBal))
}
else{
  if(UmumiBal<51){
    alert("Sizin smestr boyu topladiginiz bal 51-i kecmediyi ucun kesilirsiniz.")
  } 
  else if(UmumiBal<51 && Imtahan<17){
    alert("Sizin hem umumi baliniz imtahanda 51-i kecmediyiniz ucun hem de imtahan baliniz 17-den asagi oldugu ucun imtahandan kesilirsiniz.")
  }
  else{
    alert("Sizin imtahan neticeniz 17-i kecmediyi ucun kesilirsiniz.")
  }
  
 
}
*/

/*
!---------------Sisteme Giris----------------
let ad=prompt("Adinizi daxil edin:");
let FinKod=prompt("FIN daxil edin:");
if(ad!=""){
  if(FinKod.length ==7){
    alert("Sisteme giris olunur,zehmet olmasa gozleyin...");
  }
}

else{
  if(FinKod.lenght!=7){
    alert("Zehmet olmasa FIN duzgun daxil edin. ");
  }
  else{
    alert("Zehmet olmazsa adinizi daxil edin.");
  }
  }
*/


/*  
!------------Yanacaq doldurma merkezi--------------
let yenisetir="\r\n";
const YanacaqNovleri=prompt("1.Benzin-->1.5 Azn"+ yenisetir + "2.Dizel-->1Azn"+ yenisetir+
"3.Qaz-->0.6Azn" + yenisetir+"Yanacaq novunu secin...")
if(YanacaqNovleri==1){
  let hecmi=prompt("Nece litr benzin isteyirsiz?");
  let qiymet=hecmi*1.5;
  let budce=prompt("Budcenizi daxil edin.");
  if(budce>qiymet){
   let OdenecekMebleg=qiymet;
   let QaliqPul=budce-OdenecekMebleg;
   alert("Odeyeceyiniz megleg:" + (OdenecekMebleg) + "Azn" + yenisetir + "Pulunuzun Qaligi:" + (QaliqPul) + "Azn")
  }
   else{
     alert("Sizin budceniz benzin almaqa catmir.")
   }
}
else if(YanacaqNovleri==2){
 let hecmi=prompt("Nece litr dizel isteyirsiz?");
 let qiymet=hecmi*1;
 let budce=prompt("Budcenizi daxil edin.");
 if(budce>qiymet){
  let OdenecekMebleg=qiymet;
  let QaliqPul=budce-OdenecekMebleg;
  alert("Odeyeceyiniz megleg:" + (OdenecekMebleg) + "Azn" + yenisetir + "Pulunuzun Qaligi:" + (QaliqPul) + "Azn")
 }
  else{
    alert("Sizin budceniz Dizel almaqa catmir.")
  }
}
else if(YanacaqNovleri==3){
 let hecmi=prompt("Nece litr qaz isteyirsiz?");
 let qiymet=hecmi*0.63;
 let budce=prompt("Budcenizi daxil edin.");
 if(budce>qiymet){
  let OdenecekMebleg=qiymet;
  let QaliqPul=budce-OdenecekMebleg;
  alert("Odeyeceyiniz megleg:" + (OdenecekMebleg) + "Azn" + yenisetir + "Pulunuzun Qaligi:" + (QaliqPul) + "Azn")
 }
  else{
    alert("Sizin budceniz qaz almaqa catmir.")
  }
}
*/




/* 
!-------------------HEFTENIN GUNLERI------------------------
let yenisetir = "\r\n"
let hefte = prompt("1-ci gun" + yenisetir + "2-ci gun" + yenisetir + "3-cu gun" + yenisetir + "4-cu gun" + yenisetir + "5-ci gun" + yenisetir + "6-ci gun" + yenisetir + "7-ci gun" + yenisetir + "Gunlerden birini secin:")
switch (hefte) {
  case "1":
    alert("Bazar ertesi.");
    break;

  case "2":
    alert("Cersenbe axsami");
    break;

  case "3":
    alert("Cersenbe");
    break;

  case "4":
    alert("Cume axsami");
    break;

  case "5":
    alert("Cume");
    break;

  case "6":
    alert("Senbe");
    break;

  case "7":
    alert("Bazar");
    break;

  default:
    alert("Yanlis secim");
}
*/


    
/*

for(let i=2;i<=100;i++){
  let isprime=true;
  for(let j=2;j<=Math.sqrt(i);j++){
    if(i%j==0){
      isprime=false;
      break;
    }
  }
  if(isprime){
    console.log(i + "sade ededler.")
  }
}
*/



/*
!------------ATM---------------
let budce = 1000;
let yenisetir = "\r\n"
let metin = prompt("1.Balansa baxmaq" + yenisetir +
  "2.Nagdlasdirma" + yenisetir + "3.Pul yatirmaq" + yenisetir + "4.Cixis");

switch (metin) {
  case "1":
    alert("Balans:" + (budce) + " Azn");
    break;


  case "2":
    let cixarilacaqPul = Number(prompt("Meblegi daxil edin:"));
    if (cixarilacaqPul > budce) {
      alert("Hesabinizda daxil etdiyiniz qeder mebleg yoxdur.");
    }
    else {
      budce = budce - cixarilacaqPul;
      alert("Cixarilacaq mebleg:" + (cixarilacaqPul) + yenisetir +
        "Hesabinizda qalan mebleg:" + (budce));
    }
    break;


  case "3":
    let daxilOlan = Number(prompt("Daxil edeceyiniz mebleg:"));
    yeniBudce = daxilOlan + budce;
    alert("Daxil etdiyiniz mebleg:" + (daxilOlan) + yenisetir +
      "Balans artimi:" + (yeniBudce));
    break;

    case "4":
      alert("Hesabdan cixis edilir...");


}
*/


/*
!---------DO WHILE---------
let saygac=1;
let cem=0;

do{
  if(saygac%2==1){
    cem+=saygac;
  } 
  saygac++;
   

}

while(saygac<=10);
console.log(cem);
*/


/*
!--------VURMA CEDVELI-------------
for(let i=0;i<=10;i++){
  for(let j=0;j<=10;j++){
    console.log(i+"x"+j+"="+(i*j))

  }
  console.log("---------------------------------")
}
*/

/*
let cavab=true;
let a=Number(prompt("Reqem daxil edin:"));
for(let i=2;i<=Math.floor(a/2);i++){
  if(a%i==0){
      cavab=true;
  }
}
if(cavab){
  alert(a+"-ededi murekkebdir.")
}
else{
  alert(a+"ededi sadedir.")
}
*/

/*
let eded=prompt("Eded daxil edin:");
let cem=0;
for(let i=0;i<eded.length;i++){
  let reqem = eded.charAt(i);
  cem=cem+(reqem*reqem*reqem);
}
if(Number(cem)==eded){
  alert("Daxil etdiyiniz eded armstrongdur...")
}
else{
  alert("Daxil etdiyiniz eded armstrong deyil.")
}
*/



/*
function yaz(ad,soyad){
     console.log(ad+" "+Soyad);
}
yaz("Samir","Nəzərov");
yaz("Ramin")
*/



/*
!---------------------return---------------------------
let donenDeyer=kub(3);
console.log(donenDeyer);

function kub(reqem){
  let cavab=reqem*reqem*reqem;
return cavab;

}
*/

/* 
!------------------Herif sayi-------------------------
let metin = prompt("Metin daxil edin:")
let herif = prompt("Axtarmaq istəyiniz hərifi daxil edin:");
let cavab = tap(herif);
alert(cavab);

function tap(herif){
  let cem=0;
for(let i=0;i<metin.length;i++){
  if(metin.charAt(i)===herif){
      cem+=1;
  }
}
  return cem;
}
*/



/*
mukemmelEded(28);
 
function mukemmelEded(eded){
  let cem=0;
for(let i=2;i<=eded/2;i++){
  if(eded%i==0){
    cem+=i;
  }
}
 cem+=eded+1;
 if(cem==eded*2){
  console.log("Daxil etdiyiniz eded mukemmel ededdir...")
 }
 else{
  console.log("Daxil etdiyiniz eded mukemmel deyil...")
 }
}
*/

/*
!-------from binary to decimal---------------

 let binary = "10101";
 
 function  binaryToDecimal(binary){
 let ust=0;
 let decimal=0;
  for(let i=binary.lenght-1;i>=0;i--){
   decimal+=Number(binary.charAt(i)) * Math.pow(2,ust);
   ust++;
  }
  console.log(decimal);
 }

binaryToDecimal(binary);



});
*/


/*
let qruplar = [691.22 , 693.22 , 695.22 , 697.22]

let saygac=0;
while(saygac<qruplar.lenght){
  console.log(qruplar[saygac]);
  saygac++;
}
 
for( let i=0; i<qruplar.length; i++){
  console.log(qruplar[i]);
}
qruplar.forEach(function(qrup){
    console.log(qrup);
    
*/
/*
let meyveler = ["alma" , "heyva" , "nar" , "banan"]
let elaveEt = meyveler.push("Gilas");
console.log(meyveler);
let axtar = prompt("Axtardiginiz meyveni daxil edin:")
let axtarmaq=meyveler.includes(axtar);
if(axtarmaq==true){
  alert("Axtardaginiz meyve var.")
}
else{
  alert("axtardiginiz meyveden yoxdu")
}
*/

/*
let komputer1{
  ad:ACER,
  model:Nitro 5,
  kateqoriya:komputer,
  qiymeti:1300
}
let komputer2{
  ad:ACER,
  model:Gaming,
  kateqoriya:komputer,
  qiymeti:1500
}
*/


/*
!-----------String tipinde verilmis yazinin tersine cevrilmesi--------------------
let ad = "Menim adim Samirdi.";
let yeniMassiv = ad.split("").reverse().join("")


console.log(yeniMassiv);
*/





/*
!------------array elementlerinin cemi------------------
let array=[1,2,3,4,5,6,7,8,9];
let cem=0;
for(let i=0;i<=array.length-1;i++){
  cem=cem+array[i];
}
console.log("Massivdeki ededlerin cemi:"+cem)
*/


/*
!------------array elementlerinin hasili----------------
let array = [1,2,3,4,5,6,7,8,9];
let hasil = 1;
for(let i=0;i<=array.lenght-1;i++){
  hasil=hasil*array[i];
}
console.log("Massivdeki ededlerin hasili:"+ hasil);
*/

/*let array = [1,2,4,6,12,"Samir",34,76,"Nazarov"]

for(let i=0; i<=array.lenght-1; i++){
  if(array[i]!=typeof 12){
    array.splice(i-1,1)

  }
  console.log(array);
}
*/


/*
!--------------verilmis ededin tam eded olub olmadigini yoxla----------------
let eded = Number(prompt("Eded daxil edin"));
if((eded*10)%10==0){
  alert("Daxil etdiyiniz eded tam ededdir...")
}
else{
  alert("Daxil etdiyiniz tam eded deyil...")
}
*/


//!-----------cumledeki boslugu silin--------------
let cumle = Array(prompt("Cumle daxil edin:"));

for(let i=0;i<=cumle.length-1;i++){
  if(cumle[i]==" "){
    cumle.splice(i-1,1).join("");
  }
}
console.log(cumle)

