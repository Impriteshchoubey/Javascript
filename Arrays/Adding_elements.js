let list=[1,3,5,7];
//inserting elemnts

//at last
list.push(9)
console.log(list);
//[ 1, 3, 5, 7, 9 ]


//at begining
list.unshift("a")
console.log(list)
//[ 'a', 1, 3, 5, 7, 9 ]



//at middle
list.splice(2,0,6,"b")
//inserting at 2nd index, with 0(not) removing elemnts and insert 6,'b'
console.log(list);
//['a', 1, 6,'b', 3,5, 7, 9 ]