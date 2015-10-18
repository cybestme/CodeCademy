#Brevity is the soul of programming
You may have noticed that when we give a variable the boolean `value` true, we check that variable directly—we don't bother with `===`. For instance,

    var bool = true;
    while(bool){
        //Do something
    }
    
is the same thing as

    var bool = true;
    while(bool === true){
        //Do something
    }

but the first one is faster to type. Get in the habit of typing exactly as much as you need to, and no more!

If you happen to be using numbers, as we did earlier, you could even do:

    var myNumber = 1;
    while(myNumber) {
        // Do something!
    }
***
##Instructions
We've written the less succinct version in the editor. Correct it to the more elegant version!