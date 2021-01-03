class Option{
    constructor(){
this.map=createButton("Hospitals");
this.about=createButton("About app");
this.cd=createButton("common diseases, symptoms and cures");
this.video=createButton("Health videos");

this.greeting=createElement("h1")

    }

    hide(){
        this.map.hide();
        this.about.hide();
        this.cd.hide();
        this.video.hide();
        this.greeting.hide();
    }

    display(){
      this.map.position(displayWidth/4-150,displayHeight/2);
      this.about.position(displayWidth-250,displayHeight/2);
      this.cd.position(displayWidth/2-250,displayHeight/2);
      this.video.position(displayWidth/2+150,displayHeight/2);

      this.greeting.position(displayWidth/30,displayHeight/30);
      this.greeting.html("Welcome "+user.name);

      this.about.mousePressed(()=>{
          state=2
      })

      
      this.map.mousePressed(()=>{
        state=3
      })

      this.video.mousePressed(()=>{
        state=4
      })
  
      this.cd.mousePressed(()=>{
        state=5
      })
    }

    

}