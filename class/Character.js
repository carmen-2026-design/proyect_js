class Character{
    constructor(data){
        this.name = data.name;
        this.alternate_names = data.alternate_names; //array
        this.species = data.species;
        this.gender = data.gender;
        this.house = data.house;
        this.dateOfBirth = data.dateOfBirth;
        this.yearOfBirth = data.yearOfBirth;
        this.ancestry = data.ancestry;
        this.eyeColour = data.eyeColour;
        this.hairColour = data.hairColour;
        this.wand = data.wand;   //array
        this.patronus = data.patronus;
        this.hogwartsStudent = data.hogwartsStudent;
        this.hogwartsStaff = data.hogwartsStaff;
        this.actor = data.actor;
        this.image = data.image;
    }
}