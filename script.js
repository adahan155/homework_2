const student = "Айдарбеков Адахан Таалайбекович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ... 
const ticket = 120
const desire  = 23500 
let ride = prompt('Деньги за проезд')
let sum = ride-ticket
let lunch = prompt('Деньги на обед')  
const p1 = Array(16).fill([4,1,2,5,2,2,0]);
 j1 = Array(1).fill ([0,0,2,2,0,0,0]);
 p2 = Array(23).fill ([1,4,4,2,5,0,0]);
 j2 = Array(1).fill ([0,0,2,2,2,0,0]);
 n  = Array(2).fill ([0,0,0,0,0,0,0]);
 const array =[p1,j1, n, p2,  j2, ];
 //console.log (array);
let den =0
let ned =0 
let a =0     
let b =0
let c =0
let cash = 0
for(let i =0; i< array.length ; i++  ) { 
     for ( let j =0; j < array[i].length ; j++){
     ned = ned + 1 ;
     console.log ('номер недели: ' + ned);
     for ( let n=0; n < array[i][j].length ;n++){
      let element= array[i][j][n] 

      den = den  + 1;
     
      if ( element > 0 ) { c++; a=c*sum
      if ( element <=3&& element>0 ){
      b++;       mony = a+lunch*b
      console.log (den , 'день' , 'можем отложить так как'+ element ,'пар', cash,"rub" )      
    } 
      else
      { console.log (den , 'день',' не можем отложить так как'+ element ,'пар',cash)}    

}
else {console.log ('не получится',cash); c==0 }
   
} 
}
}
if (desire<=cash){
  console.log ('Congrats!')
}
else{
  console.log ('dont cry!' , den, cash )
     
}
console.log (b)      
console.log (c)
console.log (cash) 