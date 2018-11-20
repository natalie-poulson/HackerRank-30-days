process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

function processData(input) {
    input = input.split("\n");
    var enteries = parseInt(input[0])
    var phoneBook = {};

    for (var i = 1; i <= enteries; i++) {
        let entry = input[i].split(" ");
        phoneBook[entry[0]] = entry[1];
    }

    for (i = enteries +1; i < input.length; i++) {
        let query = phoneBook[input[i]];
        console.log(
            (query != undefined) ? input[i] + "=" + query : "Not found"
        );
    }
} 

// Map (JavaScript) or Dictionary (Python)
// An object that holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value

// Syntax
// new Map([iterable])

// How Maps are different than Objects
// Objects are Strings and Symbols, Maps can be any value
// Keys are not ordered in Objects, but are ordered in Maps
// Maps are iterable, but iterating over an object requires obtaining its keys in some fashion and iterating over them. 
