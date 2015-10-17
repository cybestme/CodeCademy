#What if choice1 is rock?

You're doing great! Now we consider the  
other scenarios. Let's break the problem  
down a little. What if `choice1` is `"rock"`?  
Given `choice1` is `"rock"`,

a. if `choice2 === "scissors"`, then `"rock"` wins.

b. if `choice2 === "paper"`, then `"paper"` wins.

How do we structure this? It's a bit different  
from what we have already seen. We will first  
have an `if` statement. And then the code  
inside that `if` statement will be... another `if`  
statement!
***
##Instructions
Let's code our outline from above:

**01.** Inside the `compare()` function under the  
existing code, write an `else if` statement  
where the condition is `choice1 === "rock"`.

**02.** Inside this `else if` statement, write an `if`  
/ `else` statement. *If* `choice2 === "scissors"`  ,  
return `"rock wins"`. Else, return `"paper wins"`.