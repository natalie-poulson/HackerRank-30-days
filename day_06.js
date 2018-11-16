function processData(input) {

    var words = input.split('\n').slice(1);

    words.forEach( word => {
        let even = "";
        let odd = "";
        for (let i = 0; i < word.length; i++) {
                i % 2 ? odd += word[i] : even += word[i]
        }
        console.log(`${even} ${odd}`)
    })
    
}
