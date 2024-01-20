//Break statement is to stop the further execution of programm and passes the control outside the scope

//it will print till 5 only after that break
for (let i = 0; i <=10; i++) {
    if(i==5){
        console.log("breaked at 5");
        break
    }
    console.log(i);
}





//CONTINUE: means it executes the flow and continues the execution of programee

//printing odd number between 1 to 20 using continue
for(let i=0;i<=20;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}