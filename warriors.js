//This is a simple game of warriors fighting
function Warrior(name, gender) {
    var possessive;
    var subject;
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random() * 100 )+ 1;
    this.fight = function() {
        if (gender === "M") {
             possessive = "his";
        }
        else {
             possessive = "her";
        }
        console.log(this.name + " rushes to the arena with " + possessive + " " + this.weapon);
    };
    this.faceoff = function(opponent) {
        if (gender === "M") {
                subject = "He";
            }
            else {
                subject = "She";
            }
        if (this.power > opponent.power) {
            return (this.name + " won the battle! " + subject + " has " + (this.power - opponent.power) + " more power level than " + opponent.name);
        }
        else if (this.power < opponent.power) {
            return (opponent.name + " won the battle with a nivel of power of " + opponent.power + ". Since " + this.name + " has only " + this.power);
        } 
        else {
            return ("After hours of combat, neither of the warriors won....They decided that is better to throw their sword and to go take a beer.");
        }
    };
}

var bunchOfWarriors = new Array();
bunchOfWarriors[0] = new Warrior("David", "M");
bunchOfWarriors[1] = new Warrior("Goliath", "M");
bunchOfWarriors[2] = new Warrior("Arthemis", "F");
bunchOfWarriors[3] = new Warrior("Athena", "F");

console.log(bunchOfWarriors[0].faceoff(bunchOfWarriors[2]));