// Hello!
function Tile(x,y){
    this.x = x;
    this.y = y;
    this.height = Math.floor(Math.random()*(3)+ 1); 
    var typesOfTile = ['grass', 'rocks', 'water'];
    this.type = typesOfTile[Math.floor(Math.random() * typesOfTile.length)];

    var conditionsOfTile = ['burning', 'normal', 'frozen'];
    this.condition = conditionsOfTile[Math.floor(Math.random() * conditionsOfTile.length)]; 
    
};

Tile.prototype = {
    freeze: function (){
        if (this.condition === "burning") {
            this.condition === "normal";
        }
        else if (this.condition === "normal"){
            this.condition === "frozen";
        }
        else if (this.condition === "frozen") {
            this.height += 1;
        }
    },
    burn: function(){
        if (this.condition === "frozen") {
            this.condition === "normal";
        }
        else if (this.condition === "normal") {
             this.condition === "burning";
        }
        else if (this.condition === "burning") {
            this.heigth -= 1; 
            this.heigth >= 0;
        }
    }
};