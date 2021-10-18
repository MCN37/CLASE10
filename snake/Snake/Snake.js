class Snake{
  
  constructor(){
    
    //propiedades y funciones
    
    this.body=[];    //tiene un cuerpo, estamos creando un arreglo
    
    //cabeza: crea un vector en la posision x(w) e y(h),w y h son las variables globales declaradas en setup, estamos indicando que se cree un vector en la posición cero que es la cabeza de la vibora
    this.body[0] = createVector(floor(w/2),floor(h/2));  
    
    //direccion
    
    this.xdir =0;
    this.ydir =0;
    this.len =0;  
    
    
  }
  
  
  // este en un evento que configurara la direccion de la serpiente
  
  setDir(x,y){
    
    this.xdir =x;
    this.ydir = y;
  }
  
  update(){
    
    //al tamaño del cuerpo le restamos uno, para obtener constantemente la cabeza de la vibora
    //let head
    var head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x+=this.xdir;   //es lo mismo a: head.x = head.x + this.xdir
    head.y+=this.ydir;
    this.body.push(head)  //desplazamos para siempre al principio ubicar la cabeza
  }
  
  //efecto de crecer
  
  grow(){
  //let head= ...
   var head = this.body[this.body.length-1].copy();
    this.len++;    //incremento para el largo de  la vibora
    this.body.push(head);
    
  }
  
  //si la vibora choca y así se termina el juego
  endGame(){
    
    //let x =...
    var x = this.body[this.body.length-1].x;
    //let y = ...
    var y = this.body[this.body.length-1].y;
    
    
    //para saber si finalizo el juego si se cumple alguna de estas condiciones que son si choca con los bordes del canvas
    
    if(x>w-1  || x<0 || y>h-1 || y<0 )
      
      {
        return true;
      }
    
    
    
    //para saber si choco con si misma (snake)
         //let i
    for (var i =0; i< this.body.length-1; i++){
      
      
      //let part
      var part = this.body[i];
      if(part.x == x && part.y==y){
        
        return true;
      }
      
    }
    
    return false;
    
  }
  
  
  eat(pos){
    //let x
    //let y
    var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
    
    // si la coordenada en x de la cabeza, coincide con la coordenada de la comida en x 
    //y Si la coordenada de la cabeza en Y coincide con la coordenada de la comida en y
    //o sea que si eso pasa aumentara su tamaño
    if(x==pos.x &&  y==pos.x){
       
       this.grow();
      return true;
       }
    
    return false;   // en caso de no cumplirse no crece y ya
  }
  
  
  show(){
    //for (let i =0)
    for(var i=0; i<this.body.length; i ++){
      
      fill(0);
      noStroke();
      rect(this.body[i].x,this.body[i].y,1,1);
    }
  }
}