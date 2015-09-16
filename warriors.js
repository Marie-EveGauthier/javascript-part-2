//Let's go! The warriors are coming!

function Warriors(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random() * (100)) + 1;
};
    
Warriors.prototype = {
    fight: function(){
        console.log(this.name +" rushes to the arena with " + this.weapon);
    },
    faceoff: function(opponent){
        if(this.power > opponent.power){
            console.log("Hourra!" + this.name + ", you're so powerful! You won");
        }
        else if(this.power < opponent.power){
            console.log("Hourra!" + opponent.name + ", you're so powerful! You won");
        }
        else if (this.power === opponent.power){
            console.log("Unbelievable! After hours of combat, you're still alive both of you.") 
        }
    }
};


var robin = new Warriors("Robin", "M");
var arthur = new Warriors("Arthur", "M");
var jeanne = new Warriors("Jeanne", "F");

robin.fight();
arthur.fight();
robin.faceoff(arthur);
arthur.faceoff(jeanne);
    