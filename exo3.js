let someOne = {
    Name: "Bouchareb",
    surname: "Ramy",
    Matricule: "541685413545742",
    FullName : function (){
        return `${this.Name} ${this.surname}` ;
    },
    Level: "L1",
    Hobbies : ["Gaming", "Beatbox", "cars", "IT"],
    Skills : ["Html", "CSS", "JS", "C#"],
};
console.log(someOne.Hobbies[0] + " " + someOne.Skills + " " + someOne.FullName());