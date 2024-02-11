/**
 * By default, 
 * JavaScript is a old school SYNCHRONOUS language.it means
 * Line By Line Execution:mtlb Ek kaam khatam hoga pehle fir dusra kaam khatam hoga
 * 
 * JavaScript is A SINGLE THREADED LANGUAGE,means all the tasks are performed on single thread and  at a time only 1 task can be performed by JS engine
 * 
 * 
 * Execution Context:basicaaly, ek execution tab tak wait karega jab tak pichla execution nahin hoga. niche jo line hai wo Single thread hai.
 * Execute  | one line of code at a time
 * for ex:  | console.log(1)   //pehle ye execute hoga
 *          | console.log(2)   // fir ye hoga
 *         \/  
 * output: 1 ,2  
 * 
 * BLOCKING CODE:-
 * It blocks the flow of executions of programe.
 *  if we have any blocking code then other lines will not be executed until that block gets completed.
 * 
 * FILE READING SYNCHRONOUS:
 * jab tak file system acess/read hone me jitna bhi time lagta hai maan lo 2sec,2mint jo bhi lagega tab tak baaki ka code execute nahin hoga.
 * 
 * File system co hum NODE JS me  access krte hai
 * NON-BLOCKING CODE
 * It doesnot block the flow of execution of programme
 * FILE READING ASYNCHRONOUS
 * 
 * 
 * 
 * 
 * ASYNCHRONOUS APIS:
 * SET TIMEOUT
 * SET INTERVAL
 * DOM API
 * FETCH()=>PROMISES ,HAVE HIGH PRIORITY
 * 
 * jo bhi time lagega file read krne me us samay me baaki ka code execute hoga
 */