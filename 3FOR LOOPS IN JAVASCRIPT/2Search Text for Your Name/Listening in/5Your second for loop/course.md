#Your second for loop
Okay! Last loopy step: add another `for` loop, this time inside the body of your `if` statement (between the `if`'s `{}`s).

This loop will make sure each character of your name gets `push`ed to the final array. The `if` statement says: "If we find the first letter of the name, start the second `for` loop!" This loop says: "I'm going to add characters to the array until I hit the length of the user's name." So if your name is 11 letters long, your loop should add 11 characters to `hits` if it ever sees the first letter of `myName` in `text`.

For your second `for` loop, keep the following in mind:

First, you'll want to set your second loop's iterator to start at the first one, so it picks up where that one left off. If your first loop starts with

    for(var i = 0; // rest of loop setup

your second should be something like

    for(var j = i; // rest of loop setup

Second, think hard about when your loop should stop. Check the Hint if you get stuck!

Finally, in the body of your loop, have your program use the `.push()` method of `hits`. Just like strings and arrays have a `.length` method, arrays have a `.push()` method that adds the thing between parentheses to the end of the array. For example,

    newArray = [];
    newArray.push('hello');
    newArray[0];   // equals 'hello'
***
##Instructions
Okay! Go ahead and add that second `for` loop inside the body of your `if` statement.