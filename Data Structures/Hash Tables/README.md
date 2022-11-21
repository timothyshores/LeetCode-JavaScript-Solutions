# Hash Tables

-----

#### What is a hash table?

Hash tables are data structures that store key value pairs

Similar to an array but the keys are not ordered like the indexes of an array

#### Example

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

#### Implementing Hash Table using an array

We'll need to convert the string value of the key to an index between 0 and `array.length - 1`. To do this we'll create a hash function or hashing functions.

Hashing functions must be a deterministic algorithm. As an example if we call `hashFunction("red")` it must always produce that same output every time. 

There can't be any randomness to it where maybe sometimes it returns the first index 0, other times it returns index 3 but occasionally it returns the last element in the array. 

Regardless of the index it returns it must always return the same output every time.

#### Hash Functions Requirements

Hash functions should be fast, they should distribute data uniformly rather than always returning the same integer output value and deterministic.
