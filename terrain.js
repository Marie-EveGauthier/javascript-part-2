// Hello!
//Defining with a constructor function a prototype for each new object, new Object that belongs to the class Tile
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

/* This is a piece of code that use the Tile constructor to create a 20x20 map of Tiles. 
*The map will be a 2D array (array inside array).
*/

var mapOfTiles = [];
    
for (i=0; i<20; i++){
    mapOfTiles[i]= [];
    for (j=0; j<20; j++) {
        mapOfTiles[i][j] = new Tile(i,j);
    }
}

/*Output the map to the console in the following way:
*For each tile, output the height of the tile as an "icon" for that tile
*The map will be presented 20 lines of 20 tiles each
*/

for (i=0; i<20; i++){ 
    var line = "";
    for (j=0; j<20; j++){
        line = line + mapOfTiles[i][j].height;        
    }
    console.log(line);
}
