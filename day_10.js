function main() {
    const n = parseInt(readLine(), 10);
    const binary = n.toString(2)
    const onesArray = binary.split('0')
    let max = 0

    for (var i = 0; i < onesArray.length; i++){
        if (onesArray[i].length > max) {
            max = onesArray[i].length
        } 
    }
    return max
}

