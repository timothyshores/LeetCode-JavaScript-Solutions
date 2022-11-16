# Heap
-----

What are heaps?

A heap is a type of tree data structure with specific rules. 

In a binary search tree (BST) if a parent node has a left child node than the value of the left child node must be less than the value of the parent node. 

In a BST ff a parent node has a right child the value of the right child's node is greater than the value. 

Heaps are trees with a different set of rules or requirements 

----

### Max Binary Heap
- Parent nodes are always larger than child nodes
- Also phrased as parent nodes are always smaller than child nodes

### Min Binary Heap

- Parent nodes are always smaller than child nodes
- Also phrased as parent nodes are always greater than than child nodes

---

The name max or min heap can be determined by looking at the root node at which is located visually at the top of the tree. 

In the case of a max heap the largest value in the heap will be at top. Conversely, in a min heap the smallest value in the heap will be the root node at the top of the tree.

Both max and min binary heaps share the following rules

- Each parent can can have a maximum of two nodes. Hence the term binary meaning two.
- There are no guarantee between sibling nodes that one will be higher than another. The left child could be either greater than or less than the right child. Both scenarios are valid binary heaps.
- The left child is filled before the right child