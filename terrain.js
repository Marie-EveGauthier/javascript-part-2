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
                if(this.height<3){
                    this.height += 1;
                }
                break;
            default: 
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
                if(this.height>0){
                    this.heigth -= 1;
                }
                break;
            default: 
                break;
         }
     }
};
/* This is a piece of code that use the Tile constructor to create a 20x20 map of Tiles. 
*The map will be a 2D array (array inside array).
*/

var mapOfTiles = [];
    
for (x=0; x<20; x++){
    mapOfTiles[x]= [];
    for (y=0; y<20; y++) {
        mapOfTiles[x][y] = new Tile(x,y);
    }
}

/*Output the map to the console in the following way:
*For each tile, output the height of the tile as an "icon" for that tile
*The map will be presented 20 lines of 20 tiles each
*/

function printMapOfTiles(){
    for (x=0; x<20; x++){ 
        var line = "";
        for (y=0; y<20; y++){
            line = line + mapOfTiles[x][y].height;        
        }
        console.log(line);
    }
}

//Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again
var randomTilesAffected = Math.floor(Math.random() * (400 - 10 +1)) + 10;
var x = 0;
var y = 0;
for (var i=0; i<randomTilesAffected; i++) {
    x = Math.floor(Math.random() * (19 + 1));
    y = Math.floor(Math.random() * (19 + 1));

    if(Math.random() < 0.5) {
        mapOfTiles[x][y].burn();
    } else {
        mapOfTiles[x][y].freeze();
    }
}

printMapOfTiles(); 