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

#### Collisions

Collisions occur when the hashing function returns the same array index value for two or more key value pairs. There are two methods to handle this scenario. Either separate chaining or linear probing.

In separate chaining this is handled by inserting another data structure in that index of the array. Commonly used data structures include linked lists or another array.

In linear probing this is handled by inserting the key value pairing into the next empty spot in the array.

For example if we had the following array `[], [blue, "#0000FF"], []`. We called our hashing function to insert the key value pair `green: "#00FF00"` and the hashing function returned the index 1. At index 1 we already have `blue, "#0000FF"]`. So we would look to the next empty index which in this case would be index 2. So the updated array would be `[], [blue, "#0000FF"], [green: "#00FF00"]`.

Linear probing limits the maximum number of elements to the size of the array while separate chaining allows for more elements to be store then the size of the array.
