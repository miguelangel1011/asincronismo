import fetch from 'node-fetch';
const URL='https://api.coronavirus.data.gov.uk/v1/data' 
let vec =[];
fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec=Object.values(data);
    
    })

 for (let i = 0;i< vec.length;i++){
     for (let j=0; j< vec[1].length;j++){
         console.log (vec[1][j]. name);
     }
 }

async function loader(){
    const res=await fetch (URL);




    
    const data=await res .json();
    console.log('..........................................................................................')
    console.log(data)
}


//https://documenter.getpostman.com/view/10808728/SzS8rjbc
