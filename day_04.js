function Person(initialAge){

    if (initialAge < 0) {
        age = 0
        console.log("Age is not valid, setting age to 0.")
    } else {
        age = initialAge
    }
    
    this.amIOld=function(){
        if (age < 13) {
        console.log("You are young.")
        } else if (age >= 13 && age < 18) {
            console.log("You are a teenager.")
        } else {
            console.log("You are old.")
        }
    };

    this.yearPasses=function(){
        age += 1
    };
}


// Class
// A blueprint used to create objects

// Instance
// Describes a relationship
// An object created by a constructor is an instance of that constructor

// Object
// An object is an instance of a class