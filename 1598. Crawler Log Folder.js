/*

1598. Crawler Log Folder

The Leetcode file system keeps a log each time some user performs a change folder operation.

The operations are described below:

"../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
"./" : Remain in the same folder.
"x/" : Move to the child folder named x (This folder is guaranteed to always exist).

You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

The file system starts in the main folder, then the operations in logs are performed.

Return the minimum number of operations needed to go back to the main folder after the change folder operations.

Example 1:
    Input: logs = ["d1/","d2/","../","d21/","./"]
    Output: 2
    Explanation: Use this change folder operation "../" 2 times and go back to the main folder.

Example 2:
    Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
    Output: 3

Example 3:
    Input: logs = ["d1/","../","../","../"]
    Output: 0

Constraints:
    1 <= logs.length <= 103
    2 <= logs[i].length <= 10
    logs[i] contains lowercase English letters, digits, '.', and '/'.
    logs[i] follows the format described in the statement.
    Folder names consist of lowercase English letters and digits.

*/

/*

Summarize the problem

    Types of operations
        "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
        "./" : Remain in the same folder.
        "x/" : Move to the child folder named x (This folder is guaranteed to always exist).

    Input is an array of strings

    Output is the minimum number of operations it takes to retun back to the root drive

High Level Plan 

    Want to track the current depth that we're in from the first element until the last element in the logs input array

Example Line By Line Execution and Logic

    Example logs = ["folder1/", "./", "../", "../", "folder1/", "subfolderOfFolder1/"]

    Before looking at the first element "folder1/" we start in the main or root folder
    We'll call this depth 0

    The first element is "folder1/". We navigate from the main root directory into 'folder1'.
    We're now at depth 1

    The second element is "./" we remain at depth 1.

    Next is "../" we move from our current child 'folder1' back up to the main root directory at depth 0

    Another "../" since we're already in the main root directory we stay at depth 0

    We go into 'folder1' at depth 1.

    We go from 'folder1' into 'subfolderOfFolder1' at depth 2 and return the integer 2.

    Look at input array logs from the first element, then the second, third, forth, ... , until the final element

    If the current element is "../" we subtract 1 from the depth unless we're already in the main root directory then we remain at 0

    If the current element is "./" we remain at the same depth

    If the current element is anything else then we add 1 to the depth

*/

/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = (logs) => {};
