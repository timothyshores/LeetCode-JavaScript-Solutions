# Hash Tables

-----

#### What is a hash table?

Hash tables are data structures that store key value pairs

Similar to an array but the keys are not ordered like the indexes of an array

#### Examples

Say we want to store three different CSS hexadecimal colors in a single variable.


```javascript
const colors = ["##FF0000", "#0000FF", "#00FF00"]
```

 The issue with this data structure is that it's not very clear or readable for other programs to know what these hexadecimal values correspond to. 
 
 Instead we could use the built in object data structure in JavaScript that is a hash map and rewrite this as

```javascript
const colors = {red: "#FF0000", blue, "#0000FF", green: "#00FF00"}
``` 

This second version using an object is easier for other programmers to understand and easier to read.

If we want to use the red color we can access it using `colors[red]` or `colors.red` rather than `colors[0]`. Same with `colors[blue]` rather than `colors[1]` and `colors.green` verses `colors[2]`.
