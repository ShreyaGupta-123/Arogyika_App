class Login{
    constructor(){
        this.username=createInput("Username");
        this.login=createButton("Login");
        this.info=createElement("h4");
    }

    hide(){
        this.login.hide();
        this.username.hide();
    }

    display(){
        this.username.position(displayWidth/2-100,displayHeight/2);
        this.login.position(displayWidth/2-20,displayHeight/2+70);
        this.info.position(displayWidth/2-100,displayHeight-200);
        this.info.html("© Birla Balika Vidyapeeth, Pilani, Raj. (© Shreya Gupta & Agamya Misra)");

        this.login.mousePressed(()=>{
            this.login.hide();
            this.username.hide();
            user=new User();
            user.name=this.username.value();
            user.update(this.name);
            logo.visible=false;
            stethoscope.visible=false;
            plus.visible=false;
            injection.visible=false;
            syrup.visible=false;
            state=1;
        });

    }
}