class Form{
  constructor(){
      this.title=createElement('h5');
      this.pizza=createButton("pizza");
      this.burger=createButton("burger");
      this.noodles=createButton("noodles");
      this.springroll=createButton("springroll");
      this.greeting1=createElement('h3');
      this.greeting2=createElement('h3');
      this.greeting3=createElement('h3');
      this.greeting4=createElement('h3');
      this.onionButton=createButton('onion');
      this.sauceButton=createButton('sauce');
      this.doughButton=createButton('dough');
      this.cheeseButton=createButton('cheese');
      this.oreganoButton=createButton('oregano');
      this.bakeButton=createButton('bake')

  }

display(){
  this.title.html("RESTAURANT");
  this.title.position(250,35);
  this.pizza.position(90,200);
  this.burger.position(190,200);
  this.noodles.position(290,200);
  this.springroll.position(390,200);

  this.pizza.mousePressed(()=>{
    this.greeting1.html("hello,start making your pizza by clicking on the items");
    this.greeting1.position(100,35);
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();

    
    //onion
    onion=createSprite(500,100,30,30);
    this.onionButton.position(500,140);
    onion.addImage("onion",onionImg);
    onion.scale=0.2;
    
    this.onionButton.mousePressed(()=>{
     onion.x=300;
     onion.y=300;
    })

    
    //sauce
    sauce=createSprite(500,200,30,30);
    sauce.addImage("sauce",sauceImg);
    this. sauceButton.position(500,240);
    sauce.scale=0.05;
    this.sauceButton.mousePressed(()=>{
      sauce.x=300;
      sauce.y=300;
     })
    
    ////dough
    dough=createSprite(500,300,30,30);
    dough.addImage("dough",doughImg);
    dough.scale=0.1;
    this. doughButton.position(500,340);
    this.doughButton.mousePressed(()=>{
      dough.x=300;
      dough.y=300;
     })
    
   
    //cheese
    cheese=createSprite(500,400,30,30);
    cheese.addImage("cheese",cheeseImg);
    cheese.scale=0.2;
    this. cheeseButton.position(500,440);
    this.cheeseButton.mousePressed(()=>{
      cheese.x=300;
      cheese.y=300;
     })
    
    //oregano
    oregano=createSprite(500,500,30,30);
    oregano.addImage("oregano",oreganoImg);
    oregano.scale=0.2;
    this. oreganoButton.position(500,540);
    this. oreganoButton.mousePressed(()=>{
      oregano.x=300;
      oregano.y=300;
     })
     
    this.bakeButton.position(300,450);
    this.bakeButton.mousePressed(()=>{
      pizza=createSprite(300,300,40,40);
      onion.visible=false
      sauce.visible=false
      dough.visible=false
      cheese.visible=false
      oregano.visible=false

      pizza.addImage("pizza",pizzaImg);
    })

  })
  this.springroll.mousePressed(()=>{
    this.greeting2.html("hello,start making your springroll by clicking on the items");
    this.greeting2.position(100,35);
    this.greeting1.hide();
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
   
    //sauce
    sauce=createSprite(500,200,30,30);
   

    //chapatidough
    chapati=createSprite(500,300,30,30);
    
    //cheese
    cheese=createSprite(500,400,30,30);
   
    //oregano
    oregano=createSprite(500,500,30,30);
    
    //panner
    panner=createSprite(500,500,30,30);
   
    //tomato
    tomato=createSprite(500,550,30,30);
   

  })
  this.burger.mousePressed(()=>{
    this.greeting3.html("hello,start making your burger by clicking on the items");
    this.greeting3.position(100,35);
    this.greeting2.hide();
    this.greeting1.hide();
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
    
    //sauce
    sauce=createSprite(500,150,30,30);
   
    //topburgerBread
    topburgerBread=createSprite(500,200,30,30);
   
    //bottomburgerbread
    bottomburgerbread=createSprite(500,450,30,30);
    
    //cheese
    cheese=createSprite(500,250,30,30);
   
    //oregano
    oregano=createSprite(500,300,30,30);
    
    //paneer
    panner=createSprite(500,350,30,30);
   
    //tomato
    tomato=createSprite(500,400,30,30);
   

  })
  this.noodles.mousePressed(()=>{
    this.greeting4.html("hello,start making your noodles by clicking on the items");
    this.greeting4.position(100,35);
    this.greeting1.hide();
    this.greeting2.hide();
    this.greeting3.hide();
    this.title.hide();
    this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
   
    //sauce
    sauce=createSprite(500,150,30,30);
    
    //cheese
    cheese=createSprite(500,250,30,30);
    
    //oregano
    oregano=createSprite(500,300,30,30);
    
    //panner
    panner=createSprite(500,350,30,30);
   
    //tomato
    tomato=createSprite(500,400,30,30);
    
    //cookednoodles
    cookednoodles=createSprite(500,450,30,30);
    
  })



}




}