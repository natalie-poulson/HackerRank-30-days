function factorial(n) {
    return (n > 1 ? n * factorial(n-1) : n)
}

// Recursion 
// is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. 
// A function that calls itself from within its own code
// made up of one or more base cases (terminating case) and one or more recursive cases (calls itself)
// Not writing a base case or testing for it incorrectly can cause an infinite loop