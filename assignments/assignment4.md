1. explaing the architecture of nodejs
2. explain the feature of nodejs like non-blocking, synchronous, single threaded.
3. create a array and object in javascript and print it.
4. Nowadays how data is transferred between server and client?(explain about json)
5. write program to show how to append, pop and sort elements in array in javascript.
6. why should we use let in place of var in our javascript programs?
7. explain about all the primitive data types in javascript.

1. it has 3 major parts:
    a. eventloop : every code goes to this event loop and then checked for its synchornous or not
    b. callbacks : every sunchronous piece of code is sent to call back part and exectud after that it goes to event loop again
    c. nodes api : every async peice of code is sent to this part and executed and fater its foes to event loop again

2. non-blocking: whole code is exectued line by line and when async part of code is encounteres it is executed later so that rest of the code is not blocked
   synchronous : code execution is synchrounous as code execution is not blocked by async part of code 
   single thereded: it is a single threaded as its is easy to maintain and free of all the complications that arises due to multi threaded code execution

3. let arr=new Array(4,5,6,7)
    for( let i=0; i < arr.length; i++ ){
        console.log(arr[i]);
    }

5. let arr=[0,1,2,3]
    arr.sort()
    arr.pop()
    arr.append(4)

6. " let " is more secure and scopeable than " var " as it stays in the memory even out of scope of its block.

7.  string - array of character
    number - real numbers
    bigint - numbers which can be used to store large numbers
    boolean - True / False
    undefined 
    symbol
    null