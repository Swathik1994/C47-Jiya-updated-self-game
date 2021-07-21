class Obs{
  constructor(xPosition,yPosition,width,height)
  {
    this.height= height;
    this.xPosition= xPosition;    
    this.yPosition= yPosition;
    this.width= width;
   
  }  
  display()
  {
    rectMode(CENTER);
    strokeWeight(4);
    stroke("cyan");
    fill("cyan");
   rect(this.xPosition,this.yPosition, this.width, this.height); 
   
  }  
  
}
