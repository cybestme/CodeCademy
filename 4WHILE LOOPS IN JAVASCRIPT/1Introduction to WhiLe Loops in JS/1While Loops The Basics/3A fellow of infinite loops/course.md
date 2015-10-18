#A fellow of infinite loops
Great work!

We mentioned infinite loops in the previous exercise. If you give a `while` loop a condition that is `true` and you don't build in a way for that condition to possibly become `false`, the loop will go on forever and your program will crash. No good!

To prevent this from happening, you always need a way to ensure the condition between your `while` parentheses can change.

You'll see the same code from the last exercise in the editor to the right, only we've taken out the part that changes the loop's condition.
***
##Instructions
DON'T run the code the way it is—you'll have to reload the window to stop the infinite loop! Instead, change the value of `understand` to something other than `true` (such as `false`) on line 6 so the loop will exit.