let count=0;

function counter(){
    count++;
    console.clear();
    console.log(count);
    setTimeout(counter,1000);   //recursion

}

setTimeout(counter,1000);

