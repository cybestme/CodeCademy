#Functions with two parameters
So far we've only looked at functions with one  
parameter. But often it is useful to write  
functions with more than one parameter. For  
example, we can have the following function:

    var areaBox = function(length, width) {
        return length * width;
    };

With more than one parameter, we can create  
more useful functions

To call a function with more than one  
parameter, just enter a value for each  
parameter in the parentheses. For example,  
`areaBox(3,9);` would return the area of a box  
with a length of 3 and a width of 9.
***
##Instructions
**01.** Write a function called `perimeterBox` that  
returns the perimeter of a rectangle.

**02.** It should have two parameters.

**03.** One formula for perimeter is length + `length +`  
`width + width;`

**04.** Call the function and pass in any value for  
length and width you like.