function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(arr.reverse().join(' '))
}

// Array
// High-level, list-like objects
// Must use integers as element indexes