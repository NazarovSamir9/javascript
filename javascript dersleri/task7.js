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