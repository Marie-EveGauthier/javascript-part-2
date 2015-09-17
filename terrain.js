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
        switch(this.condition) {
            case "burning":
                this.condition === "normal";
                break;
            case "normal":
                this.condition === "frozen";
                break;
            case "frozen":
                this.height += 1;
                break;
        }
    },
    burn: function(){
        switch(this.condition) {
            case "frozen":
                this.condition === "normal";
                break;
            case "normal":
                this.condition === "burning";
                break;
            case "burning":
                this.heigth -= 1; 
                this.heigth >= 0;
                break;
         }
     }
};