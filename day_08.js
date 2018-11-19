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