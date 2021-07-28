 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.eu/rest/v2/all",true);
 request.send();
 request.onload = function(){
     var data = JSON.parse(this.response);
     console.log(data);
//1
     let casia = data.filter((ele) => ele.region==="Asia");
       console.log(casia);
       //2
       let total = data.filter((ele) =>ele.population<200000);
       console.log(total);
       //4
       let totpop= data.reduce((acc,currentvalue) =>acc+currentvalue.population,0);
       console.log(totpop);
       //3
       let cusd = data.filter((x)=> {
           for ( var i in x.currencies){
               if(x.currencies[i].code==="USD"){
                   return true;
               }
           }

       });
       console.log(cusd);

          }
 
