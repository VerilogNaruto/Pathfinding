/**
 * JavaScript Programmed By SOULEYMANE DEMBELE 09/20/2019
 */
class Cell{
    constructor(xPos,yPos){
    this.x = xPos
    this.y = yPos
    this.exploredBy = null
    this.status = 'unexplored'
    this.id = this.x.toString()+','+this.y.toString()
    this.weight = 0
    this.parent = null
    this.direction = 'UP'
    this.distance = Infinity
    this.heuristicDistance = 0
    this.totalDistance = Infinity
    this.previousStatus = 'unexplored'
  }
  }
  Cell.prototype.getCellStatus = function(){
    return this.status
  }
  
  export default Cell
  