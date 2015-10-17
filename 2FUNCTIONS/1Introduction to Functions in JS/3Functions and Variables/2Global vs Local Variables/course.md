#Global vs Local Variables
Let's talk about an important concept: scope. **Scope**   
can be global or local.

Variables defined** outside** a function are  
accessible anywhere once they have been  
declared. They are called **global variables**  
and their scope is **global**.

For example:

    var globalVar = "hello";
    
    var foo = function() {
        console.log(globalVar);  // prints "hello"
    }

The variable `globalVar` can be accessed  
anywhere, even inside the function `foo`.

Variables defined **inside** a function are **local**  
**variables**. They cannot be accessed outside  
of that function.

    For example:
    
    var bar = function() {
        var localVar = "howdy";
    }
    
    console.log(localVar);  // error

The variable `localVar` only exists inside the  
function `bar`. Trying to print `localVar` outside  
the function gives a error.

Check out the code in the editor. Until now  
you've been using the `var` keyword without  
really understanding why. The `var` keyword  
creates a new variable **in the current scope.**  
That means if `var` is used outside a function,   
that variable has a global scope. If `var` is used   
inside a function, that variable has a local   
scope.

On line 4 we have not used the `var` keyword,  
so when we log `my_number` to the console  
outside of the function, it will be 14.
***
##Instructions

Change line 4 to use the `var` keyword. Notice  
that the value of `my_number` in the function is  
now 14 and outside the function is 7.

Using my_number without the var keyword  
refers to the **global** variable that has already  
been declared outside the function in line 1.  
However, if you use the var keyword inside a   
function, it declares a new **local** variable that  
only exists within that function.