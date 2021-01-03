var database;
var user;
var cdsc;
var cdscbuttons=0;
var button1,button2,button3,button=0;
var map;
var video1,video2,video3;
var option;
var hos,hosImg;
var qm,qmImg;
var virus,virusImg;
var yoga,yogaImg;
var stethoscope,stethoscopeImg;
var plus,plusImg;
var logo, logoImg;
var syrup,syrupImg;
var injection,injectionImg;
var login;
var about;
var bg;
var back;
var state=0;



function preload(){
 logoImg=loadImage("Logo2.png") ;
 stethoscopeImg=loadImage("stethoscope.png");
 plusImg=loadImage("plus.png");
 injectionImg=loadImage("Injection.png");
 syrupImg=loadImage("syrup.png");
 hosImg=loadImage("Hos.png");
 qmImg=loadImage("Qm.png");
 virusImg=loadImage("Virus.png");
 yogaImg=loadImage("yoga.png");
 bg=loadImage("unnamed.png")
}

function setup() {
  database=firebase.database();
  createCanvas(displayWidth, displayHeight);

  logo=createSprite(displayWidth/2,displayHeight/2-100);
  logo.addImage(logoImg);
  logo.scale=0.7;

  stethoscope=createSprite(displayWidth/2-500,displayHeight/2-250);
  stethoscope.addImage(stethoscopeImg);
  stethoscope.scale=0.5

  plus=createSprite(displayWidth-200,displayHeight-300);
  plus.addImage(plusImg);
  plus.scale=0.2;

  injection=createSprite(displayWidth/2-400,displayHeight-300);
  injection.addImage(injectionImg);
  injection.scale=0.5;

  hos=createSprite(displayWidth/2-430,displayHeight/3);
  hos.addImage(hosImg);
  hos.scale=0.5;

  qm=createSprite(displayWidth-200,displayHeight/3);
  qm.addImage(qmImg);
  qm.scale=0.5;

  virus=createSprite(displayWidth/2-100,displayHeight/3);
  virus.addImage(virusImg);
  virus.scale=0.4;

  yoga=createSprite(displayWidth/2+200,displayHeight/3);
  yoga.addImage(yogaImg);
  yoga.scale=0.7;

  syrup=createSprite(displayWidth-200,displayHeight/2-300);
  syrup.addImage(syrupImg);
  syrup.scale=0.5;

  back=createButton("BACK");
  back.position(displayWidth-100,displayHeight-200);
  back.hide();

  map=document.getElementById("ifrm").style.display="none"
  video2=document.getElementById("video2").style.display="none"
  video1=document.getElementById("video1").style.display="none"
  video3=document.getElementById("video3").style.display="none"

  defi=createElement("h1");
  button1=createButton("Introduction");
  button2=createButton("Balanced Diet");
  button3=createButton("Home Remedies");
  button1.position(displayWidth/2-500,displayHeight/2-300);
  button2.position(displayWidth/2-500,displayHeight/2-200);
  button3.position(displayWidth/2-500,displayHeight/2-100);
  defi.position(displayWidth/3,displayHeight/3);
  defi.html("Welcome to health videos section");
  button1.hide();
  button2.hide();
  button3.hide();
  defi.hide();



  cdsc=new Cdsc;
  option=new Option;
  login=new Login;
  about=new About;

  cdsc.info1.hide();
  cdsc.info11.hide();
  cdsc.info12.hide();
  cdsc.info13.hide();
  cdsc.info14.hide();
  cdsc.info15.hide();
  cdsc.info16.hide();
  
  cdsc.info2.hide();
  cdsc.info21.hide();
  cdsc.info22.hide();
  cdsc.info23.hide();
  cdsc.info24.hide();
  cdsc.info25.hide();
  cdsc.info26.hide();
  
  cdsc.info3.hide();
  cdsc.info31.hide();
  cdsc.info32.hide();
  cdsc.info33.hide();
  cdsc.info34.hide();
  cdsc.info35.hide();
  cdsc.info36.hide();
  
  cdsc.info4.hide();
  cdsc.info41.hide();
  cdsc.info42.hide();
  cdsc.info43.hide();
  cdsc.info44.hide();
  cdsc.info45.hide();
  cdsc.info46.hide();

  cdsc.info5.hide();
  cdsc.info51.hide();
  cdsc.info52.hide();
  cdsc.info53.hide();
  cdsc.info54.hide();
  cdsc.info55.hide();
  cdsc.info56.hide();
  
  cdsc.info6.hide();
  cdsc.info61.hide();
  cdsc.info62.hide();
  cdsc.info63.hide();
  cdsc.info64.hide();
  cdsc.info65.hide();
  cdsc.info66.hide();
  
  cdsc.info7.hide();
  cdsc.info71.hide();
  cdsc.info72.hide();
  cdsc.info73.hide();
  cdsc.info74.hide();
  cdsc.info75.hide();
  cdsc.info76.hide();

  cdsc.info8.hide();
  cdsc.info81.hide();
  cdsc.info82.hide();
  cdsc.info83.hide();
  cdsc.info84.hide();
  cdsc.info85.hide();
  cdsc.info86.hide();
  
  cdsc.info9.hide();
  cdsc.info91.hide();
  cdsc.info92.hide();
  cdsc.info93.hide();
  cdsc.info94.hide();
  cdsc.info95.hide();
  cdsc.info96.hide();
  
  cdsc.info10.hide();
  cdsc.info101.hide();
  cdsc.info102.hide();
  cdsc.info103.hide();
  cdsc.info104.hide();
  cdsc.info105.hide();
  cdsc.info106.hide();
  
  cdsc.by.hide();
  
}






function draw() {
  background(bg);
  //console.log(state);
  if(state===0){ 
  login.display();
  login.login.show();
  login.username.show();
  logo.visible=true;
  stethoscope.visible=true;
  plus.visible=true;
  injection.visible=true;
  syrup.visible=true;
  hos.visible=false;
  qm.visible=false;
  virus.visible=false;
  yoga.visible=false;
  option.map.hide();
    option.about.hide();
    option.cd.hide();
    option.video.hide();
    option.greeting.hide();
    about.back.hide();
    about.content1.hide();
    about.content2.hide();
    about.content3.hide();
    about.content4.hide();
    about.heading2.hide();
    about.content5.hide();
    about.by.hide();
    back.hide();
    button1.hide();
  button2.hide();
  defi.hide();
   map=document.getElementById("ifrm").style.display="none"
   video2=document.getElementById("video2").style.display="none"
   video1=document.getElementById("video1").style.display="none"
   video3=document.getElementById("video3").style.display="none"
   cdsc.button1.hide();
   cdsc.button2.hide();
   cdsc.button3.hide();
   cdsc.button4.hide();
   cdsc.button5.hide();
   cdsc.button6.hide();
   cdsc.button7.hide();
   cdsc.button8.hide();
   cdsc.button9.hide();
   cdsc.button10.hide();
   cdsc.hello.hide();
   button3.hide();
   cdsc.by.hide();

  }
  if(state===1){
    cdscbuttons=0;
    button=0;
    option.display();
    option.map.show();
    option.about.show();
    option.cd.show();
    option.video.show();
    option.greeting.show();
    login.info.show();
    about.heading1.hide();
    about.back.hide();
    about.content1.hide();
    about.content2.hide();
    about.content3.hide();
    about.content4.hide();
    about.heading2.hide();
    about.content5.hide();
    about.by.hide();
    back.hide();
    button1.hide();
    defi.hide();
  button2.hide();
    map=document.getElementById("ifrm").style.display="none"
    video2=document.getElementById("video2").style.display="none"
    video1=document.getElementById("video1").style.display="none"
    video3=document.getElementById("video3").style.display="none"

    cdsc.info1.hide();
  cdsc.info11.hide();
  cdsc.info12.hide();
  cdsc.info13.hide();
  cdsc.info14.hide();
  cdsc.info15.hide();
  cdsc.info16.hide();
  
  cdsc.info2.hide();
  cdsc.info21.hide();
  cdsc.info22.hide();
  cdsc.info23.hide();
  cdsc.info24.hide();
  cdsc.info25.hide();
  cdsc.info26.hide();
  
  cdsc.info3.hide();
  cdsc.info31.hide();
  cdsc.info32.hide();
  cdsc.info33.hide();
  cdsc.info34.hide();
  cdsc.info35.hide();
  cdsc.info36.hide();
  
  cdsc.info4.hide();
  cdsc.info41.hide();
  cdsc.info42.hide();
  cdsc.info43.hide();
  cdsc.info44.hide();
  cdsc.info45.hide();
  cdsc.info46.hide();

  cdsc.info5.hide();
  cdsc.info51.hide();
  cdsc.info52.hide();
  cdsc.info53.hide();
  cdsc.info54.hide();
  cdsc.info55.hide();
  cdsc.info56.hide();
  
  cdsc.info6.hide();
  cdsc.info61.hide();
  cdsc.info62.hide();
  cdsc.info63.hide();
  cdsc.info64.hide();
  cdsc.info65.hide();
  cdsc.info66.hide();
  
  cdsc.info7.hide();
  cdsc.info71.hide();
  cdsc.info72.hide();
  cdsc.info73.hide();
  cdsc.info74.hide();
  cdsc.info75.hide();
  cdsc.info76.hide();

  cdsc.info8.hide();
  cdsc.info81.hide();
  cdsc.info82.hide();
  cdsc.info83.hide();
  cdsc.info84.hide();
  cdsc.info85.hide();
  cdsc.info86.hide();
  
  cdsc.info9.hide();
  cdsc.info91.hide();
  cdsc.info92.hide();
  cdsc.info93.hide();
  cdsc.info94.hide();
  cdsc.info95.hide();
  cdsc.info96.hide();
  
  cdsc.info10.hide();
  cdsc.info101.hide();
  cdsc.info102.hide();
  cdsc.info103.hide();
  cdsc.info104.hide();
  cdsc.info105.hide();
  cdsc.info106.hide();
  cdsc.by.hide();

    button3.hide();

    cdsc.button1.hide();
    cdsc.button2.hide();
    cdsc.button3.hide();
    cdsc.button4.hide();
    cdsc.button5.hide();
    cdsc.button6.hide();
    cdsc.button7.hide();
    cdsc.button8.hide();
    cdsc.button9.hide();
    cdsc.button10.hide();
    cdsc.hello.hide();


    hos.visible=true;
    qm.visible=true;
    virus.visible=true;
    yoga.visible=true;
  }
  if(state===2){
   about.display();
   option.map.hide();
   option.about.hide();
   option.cd.hide();
   option.video.hide();
   option.greeting.hide();
   login.info.hide();
   about.heading1.show()
   about.back.show();
   about.content1.show();
   about.content2.show();
   about.content3.show();
   about.content4.show();
   about.heading2.show();
   defi.hide();
   about.content5.show();
   map=document.getElementById("ifrm").style.display="none"
   video2=document.getElementById("video2").style.display="none"
   video1=document.getElementById("video1").style.display="none"
   video3=document.getElementById("video3").style.display="none"
   button1.hide();
   button2.hide();
   button3.hide();

   cdsc.info1.hide();
  cdsc.info11.hide();
  cdsc.info12.hide();
  cdsc.info13.hide();
  cdsc.info14.hide();
  cdsc.info15.hide();
  cdsc.info16.hide();
  
  cdsc.info2.hide();
  cdsc.info21.hide();
  cdsc.info22.hide();
  cdsc.info23.hide();
  cdsc.info24.hide();
  cdsc.info25.hide();
  cdsc.info26.hide();
  
  cdsc.info3.hide();
  cdsc.info31.hide();
  cdsc.info32.hide();
  cdsc.info33.hide();
  cdsc.info34.hide();
  cdsc.info35.hide();
  cdsc.info36.hide();
  
  cdsc.info4.hide();
  cdsc.info41.hide();
  cdsc.info42.hide();
  cdsc.info43.hide();
  cdsc.info44.hide();
  cdsc.info45.hide();
  cdsc.info46.hide();

  cdsc.info5.hide();
  cdsc.info51.hide();
  cdsc.info52.hide();
  cdsc.info53.hide();
  cdsc.info54.hide();
  cdsc.info55.hide();
  cdsc.info56.hide();
  
  cdsc.info6.hide();
  cdsc.info61.hide();
  cdsc.info62.hide();
  cdsc.info63.hide();
  cdsc.info64.hide();
  cdsc.info65.hide();
  cdsc.info66.hide();
  
  cdsc.info7.hide();
  cdsc.info71.hide();
  cdsc.info72.hide();
  cdsc.info73.hide();
  cdsc.info74.hide();
  cdsc.info75.hide();
  cdsc.info76.hide();

  cdsc.info8.hide();
  cdsc.info81.hide();
  cdsc.info82.hide();
  cdsc.info83.hide();
  cdsc.info84.hide();
  cdsc.info85.hide();
  cdsc.info86.hide();
  
  cdsc.info9.hide();
  cdsc.info91.hide();
  cdsc.info92.hide();
  cdsc.info93.hide();
  cdsc.info94.hide();
  cdsc.info95.hide();
  cdsc.info96.hide();
  
  cdsc.info10.hide();
  cdsc.info101.hide();
  cdsc.info102.hide();
  cdsc.info103.hide();
  cdsc.info104.hide();
  cdsc.info105.hide();
  cdsc.info106.hide();
  cdsc.by.hide();
  

   about.by.show();
   back.hide();
   cdsc.button1.hide();
   cdsc.button2.hide();
   cdsc.button3.hide();
   cdsc.button4.hide();
   cdsc.button5.hide();
   cdsc.button6.hide();
   cdsc.button7.hide();
   cdsc.button8.hide();
   cdsc.button9.hide();
   cdsc.button10.hide();
   cdsc.hello.hide();

   hos.visible=false;
  qm.visible=false;
  virus.visible=false;
  yoga.visible=false;
  }
  if(state===3){
    option.map.hide();
    option.about.hide();
    option.cd.hide();
    option.video.hide();
    option.greeting.hide();
    map=document.getElementById("ifrm").style.display="block"
    video2=document.getElementById("video2").style.display="none"
    video1=document.getElementById("video1").style.display="none"
    video3=document.getElementById("video3").style.display="none"

    button1.hide();
    button2.hide();
    button3.hide();
    defi.hide();

    about.back.hide();
    about.content1.hide();
    about.content2.hide();
    about.content3.hide();
    about.content4.hide();
    about.heading2.hide();
    about.content5.hide();
    cdsc.button1.hide();
   cdsc.button2.hide();
   cdsc.button3.hide();
   cdsc.button4.hide();
   cdsc.button5.hide();
   cdsc.button6.hide();
   cdsc.button7.hide();
   cdsc.button8.hide();
   cdsc.button9.hide();
   cdsc.button10.hide();
   cdsc.hello.hide();

   cdsc.info1.hide();
  cdsc.info11.hide();
  cdsc.info12.hide();
  cdsc.info13.hide();
  cdsc.info14.hide();
  cdsc.info15.hide();
  cdsc.info16.hide();
  
  cdsc.info2.hide();
  cdsc.info21.hide();
  cdsc.info22.hide();
  cdsc.info23.hide();
  cdsc.info24.hide();
  cdsc.info25.hide();
  cdsc.info26.hide();
  
  cdsc.info3.hide();
  cdsc.info31.hide();
  cdsc.info32.hide();
  cdsc.info33.hide();
  cdsc.info34.hide();
  cdsc.info35.hide();
  cdsc.info36.hide();
  
  cdsc.info4.hide();
  cdsc.info41.hide();
  cdsc.info42.hide();
  cdsc.info43.hide();
  cdsc.info44.hide();
  cdsc.info45.hide();
  cdsc.info46.hide();

  cdsc.info5.hide();
  cdsc.info51.hide();
  cdsc.info52.hide();
  cdsc.info53.hide();
  cdsc.info54.hide();
  cdsc.info55.hide();
  cdsc.info56.hide();
  
  cdsc.info6.hide();
  cdsc.info61.hide();
  cdsc.info62.hide();
  cdsc.info63.hide();
  cdsc.info64.hide();
  cdsc.info65.hide();
  cdsc.info66.hide();
  
  cdsc.info7.hide();
  cdsc.info71.hide();
  cdsc.info72.hide();
  cdsc.info73.hide();
  cdsc.info74.hide();
  cdsc.info75.hide();
  cdsc.info76.hide();

  cdsc.info8.hide();
  cdsc.info81.hide();
  cdsc.info82.hide();
  cdsc.info83.hide();
  cdsc.info84.hide();
  cdsc.info85.hide();
  cdsc.info86.hide();
  
  cdsc.info9.hide();
  cdsc.info91.hide();
  cdsc.info92.hide();
  cdsc.info93.hide();
  cdsc.info94.hide();
  cdsc.info95.hide();
  cdsc.info96.hide();
  
  cdsc.info10.hide();
  cdsc.info101.hide();
  cdsc.info102.hide();
  cdsc.info103.hide();
  cdsc.info104.hide();
  cdsc.info105.hide();
  cdsc.info106.hide();
  cdsc.by.hide();

    hos.visible=false;
    qm.visible=false;
    virus.visible=false;
    yoga.visible=false;
    about.by.hide();
    back.show();
    back.mousePressed(()=>{
      state=1
  })


  }

  if(state===4){
    option.map.hide();
    option.about.hide();
    option.cd.hide();
    option.video.hide();
    option.greeting.hide();
    map=document.getElementById("ifrm").style.display="none";
    button1.show();
  button2.show();
  button3.show();
 
  cdsc.info1.hide();
  cdsc.info11.hide();
  cdsc.info12.hide();
  cdsc.info13.hide();
  cdsc.info14.hide();
  cdsc.info15.hide();
  cdsc.info16.hide();
  
  cdsc.info2.hide();
  cdsc.info21.hide();
  cdsc.info22.hide();
  cdsc.info23.hide();
  cdsc.info24.hide();
  cdsc.info25.hide();
  cdsc.info26.hide();
  
  cdsc.info3.hide();
  cdsc.info31.hide();
  cdsc.info32.hide();
  cdsc.info33.hide();
  cdsc.info34.hide();
  cdsc.info35.hide();
  cdsc.info36.hide();
  
  cdsc.info4.hide();
  cdsc.info41.hide();
  cdsc.info42.hide();
  cdsc.info43.hide();
  cdsc.info44.hide();
  cdsc.info45.hide();
  cdsc.info46.hide();

  cdsc.info5.hide();
  cdsc.info51.hide();
  cdsc.info52.hide();
  cdsc.info53.hide();
  cdsc.info54.hide();
  cdsc.info55.hide();
  cdsc.info56.hide();
  
  cdsc.info6.hide();
  cdsc.info61.hide();
  cdsc.info62.hide();
  cdsc.info63.hide();
  cdsc.info64.hide();
  cdsc.info65.hide();
  cdsc.info66.hide();
  
  cdsc.info7.hide();
  cdsc.info71.hide();
  cdsc.info72.hide();
  cdsc.info73.hide();
  cdsc.info74.hide();
  cdsc.info75.hide();
  cdsc.info76.hide();

  cdsc.info8.hide();
  cdsc.info81.hide();
  cdsc.info82.hide();
  cdsc.info83.hide();
  cdsc.info84.hide();
  cdsc.info85.hide();
  cdsc.info86.hide();
  
  cdsc.info9.hide();
  cdsc.info91.hide();
  cdsc.info92.hide();
  cdsc.info93.hide();
  cdsc.info94.hide();
  cdsc.info95.hide();
  cdsc.info96.hide();
  
  cdsc.info10.hide();
  cdsc.info101.hide();
  cdsc.info102.hide();
  cdsc.info103.hide();
  cdsc.info104.hide();
  cdsc.info105.hide();
  cdsc.info106.hide();
  cdsc.by.hide();

    video2=document.getElementById("video2").style.display="none";
    video1=document.getElementById("video1").style.display="none";
    video3=document.getElementById("video3").style.display="none";

    button1.mousePressed(()=>{
      button=1;
    });

    button2.mousePressed(()=>{
      button=2;
    });
    button3.mousePressed(()=>{
      button=3;
    });
    about.back.hide();
    about.content1.hide();
    about.content2.hide();
    about.content3.hide();
    about.content4.hide();
    about.heading2.hide();
    about.content5.hide();
    hos.visible=false;
    qm.visible=false;
    virus.visible=false;
    yoga.visible=false;
    about.by.hide();
    back.show();
    back.mousePressed(()=>{
      state=1
  })
  
  cdsc.button1.hide();
   cdsc.button2.hide();
   cdsc.button3.hide();
   cdsc.button4.hide();
   cdsc.button5.hide();
   cdsc.button6.hide();
   cdsc.button7.hide();
   cdsc.button8.hide();
   cdsc.button9.hide();
   cdsc.button10.hide();
   cdsc.hello.hide();
   if(button===0){
    defi.show();
   }
  if(button===1){
    video2=document.getElementById("video2").style.display="none"
    video1=document.getElementById("video1").style.display="block"
    video3=document.getElementById("video3").style.display="none"
    defi.hide();
  }

  if(button===2){
    video2=document.getElementById("video2").style.display="block"
    video1=document.getElementById("video1").style.display="none"
    video3=document.getElementById("video3").style.display="none"
    defi.hide();
  }

  if(button===3){
    video2=document.getElementById("video2").style.display="none"
    video1=document.getElementById("video1").style.display="none"
    video3=document.getElementById("video3").style.display="block"
    defi.hide();
  }

  }
  if(state===5){
    console.log(cdscbuttons);
    cdsc.display();
    option.map.hide();
    option.about.hide();
    option.cd.hide();
    option.video.hide();
    option.greeting.hide();
    login.info.hide();
    map=document.getElementById("ifrm").style.display="none"
    video2=document.getElementById("video2").style.display="none"
    video1=document.getElementById("video1").style.display="none"
    video3=document.getElementById("video3").style.display="none"
   cdsc.button1.show();
   cdsc.button2.show();
   cdsc.button3.show();
   cdsc.button4.show();
   cdsc.button5.show();
   cdsc.button6.show();
   cdsc.button7.show();
   cdsc.button8.show();
   cdsc.button9.show();
   cdsc.button10.show();
   defi.hide();
   cdsc.by.show();

   cdsc.info1.hide();
  cdsc.info11.hide();
  cdsc.info12.hide();
  cdsc.info13.hide();
  cdsc.info14.hide();
  cdsc.info15.hide();
  cdsc.info16.hide();
  
  cdsc.info2.hide();
  cdsc.info21.hide();
  cdsc.info22.hide();
  cdsc.info23.hide();
  cdsc.info24.hide();
  cdsc.info25.hide();
  cdsc.info26.hide();
  
  cdsc.info3.hide();
  cdsc.info31.hide();
  cdsc.info32.hide();
  cdsc.info33.hide();
  cdsc.info34.hide();
  cdsc.info35.hide();
  cdsc.info36.hide();
  
  cdsc.info4.hide();
  cdsc.info41.hide();
  cdsc.info42.hide();
  cdsc.info43.hide();
  cdsc.info44.hide();
  cdsc.info45.hide();
  cdsc.info46.hide();

  cdsc.info5.hide();
  cdsc.info51.hide();
  cdsc.info52.hide();
  cdsc.info53.hide();
  cdsc.info54.hide();
  cdsc.info55.hide();
  cdsc.info56.hide();
  
  cdsc.info6.hide();
  cdsc.info61.hide();
  cdsc.info62.hide();
  cdsc.info63.hide();
  cdsc.info64.hide();
  cdsc.info65.hide();
  cdsc.info66.hide();
  
  cdsc.info7.hide();
  cdsc.info71.hide();
  cdsc.info72.hide();
  cdsc.info73.hide();
  cdsc.info74.hide();
  cdsc.info75.hide();
  cdsc.info76.hide();

  cdsc.info8.hide();
  cdsc.info81.hide();
  cdsc.info82.hide();
  cdsc.info83.hide();
  cdsc.info84.hide();
  cdsc.info85.hide();
  cdsc.info86.hide();
  
  cdsc.info9.hide();
  cdsc.info91.hide();
  cdsc.info92.hide();
  cdsc.info93.hide();
  cdsc.info94.hide();
  cdsc.info95.hide();
  cdsc.info96.hide();
  
  cdsc.info10.hide();
  cdsc.info101.hide();
  cdsc.info102.hide();
  cdsc.info103.hide();
  cdsc.info104.hide();
  cdsc.info105.hide();
  cdsc.info106.hide();
  

   if(cdscbuttons===0){
   cdsc.hello.show();

   cdsc.info1.hide();
   cdsc.info11.hide();
   cdsc.info12.hide();
   cdsc.info13.hide();
   cdsc.info14.hide();
   cdsc.info15.hide();
   cdsc.info16.hide();
   
   cdsc.info2.hide();
   cdsc.info21.hide();
   cdsc.info22.hide();
   cdsc.info23.hide();
   cdsc.info24.hide();
   cdsc.info25.hide();
   cdsc.info26.hide();
   
   cdsc.info3.hide();
   cdsc.info31.hide();
   cdsc.info32.hide();
   cdsc.info33.hide();
   cdsc.info34.hide();
   cdsc.info35.hide();
   cdsc.info36.hide();
   
   cdsc.info4.hide();
   cdsc.info41.hide();
   cdsc.info42.hide();
   cdsc.info43.hide();
   cdsc.info44.hide();
   cdsc.info45.hide();
   cdsc.info46.hide();
 
   cdsc.info5.hide();
   cdsc.info51.hide();
   cdsc.info52.hide();
   cdsc.info53.hide();
   cdsc.info54.hide();
   cdsc.info55.hide();
   cdsc.info56.hide();
   
   cdsc.info6.hide();
   cdsc.info61.hide();
   cdsc.info62.hide();
   cdsc.info63.hide();
   cdsc.info64.hide();
   cdsc.info65.hide();
   cdsc.info66.hide();
   
   cdsc.info7.hide();
   cdsc.info71.hide();
   cdsc.info72.hide();
   cdsc.info73.hide();
   cdsc.info74.hide();
   cdsc.info75.hide();
   cdsc.info76.hide();
 
   cdsc.info8.hide();
   cdsc.info81.hide();
   cdsc.info82.hide();
   cdsc.info83.hide();
   cdsc.info84.hide();
   cdsc.info85.hide();
   cdsc.info86.hide();
   
   cdsc.info9.hide();
   cdsc.info91.hide();
   cdsc.info92.hide();
   cdsc.info93.hide();
   cdsc.info94.hide();
   cdsc.info95.hide();
   cdsc.info96.hide();
   
   cdsc.info10.hide();
   cdsc.info101.hide();
   cdsc.info102.hide();
   cdsc.info103.hide();
   cdsc.info104.hide();
   cdsc.info105.hide();
   cdsc.info106.hide();
   }

   if(cdscbuttons===1){
    cdsc.hello.hide();

    cdsc.info1.show();
    cdsc.info11.show();
    cdsc.info12.show();
    cdsc.info13.show();
    cdsc.info14.show();
    cdsc.info15.show();
    cdsc.info16.show();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
    
   if(cdscbuttons===2){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.show();
    cdsc.info21.show();
    cdsc.info22.show();
    cdsc.info23.show();
    cdsc.info24.show();
    cdsc.info25.show();
    cdsc.info26.show();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
    
   if(cdscbuttons===3){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.show();
    cdsc.info31.show();
    cdsc.info32.show();
    cdsc.info33.show();
    cdsc.info34.show();
    cdsc.info35.show();
    cdsc.info36.show();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
    
   if(cdscbuttons===4){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.show();
    cdsc.info41.show();
    cdsc.info42.show();
    cdsc.info43.show();
    cdsc.info44.show();
    cdsc.info45.show();
    cdsc.info46.show();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
    
   if(cdscbuttons===5){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.show();
    cdsc.info51.show();
    cdsc.info52.show();
    cdsc.info53.show();
    cdsc.info54.show();
    cdsc.info55.show();
    cdsc.info56.show();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
    
   if(cdscbuttons===6){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.show();
    cdsc.info61.show();
    cdsc.info62.show();
    cdsc.info63.show();
    cdsc.info64.show();
    cdsc.info65.show();
    cdsc.info66.show();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }

  if(cdscbuttons===7){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.show();
    cdsc.info71.show();
    cdsc.info72.show();
    cdsc.info73.show();
    cdsc.info74.show();
    cdsc.info75.show();
    cdsc.info76.show();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
      
   if(cdscbuttons===8){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.show();
    cdsc.info81.show();
    cdsc.info82.show();
    cdsc.info83.show();
    cdsc.info84.show();
    cdsc.info85.show();
    cdsc.info86.show();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
    
   if(cdscbuttons===9){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.show();
    cdsc.info91.show();
    cdsc.info92.show();
    cdsc.info93.show();
    cdsc.info94.show();
    cdsc.info95.show();
    cdsc.info96.show();
    
    cdsc.info10.hide();
    cdsc.info101.hide();
    cdsc.info102.hide();
    cdsc.info103.hide();
    cdsc.info104.hide();
    cdsc.info105.hide();
    cdsc.info106.hide();
    }
    
   if(cdscbuttons===10){
    cdsc.hello.hide();

    cdsc.info1.hide();
    cdsc.info11.hide();
    cdsc.info12.hide();
    cdsc.info13.hide();
    cdsc.info14.hide();
    cdsc.info15.hide();
    cdsc.info16.hide();
    
    cdsc.info2.hide();
    cdsc.info21.hide();
    cdsc.info22.hide();
    cdsc.info23.hide();
    cdsc.info24.hide();
    cdsc.info25.hide();
    cdsc.info26.hide();
    
    cdsc.info3.hide();
    cdsc.info31.hide();
    cdsc.info32.hide();
    cdsc.info33.hide();
    cdsc.info34.hide();
    cdsc.info35.hide();
    cdsc.info36.hide();
    
    cdsc.info4.hide();
    cdsc.info41.hide();
    cdsc.info42.hide();
    cdsc.info43.hide();
    cdsc.info44.hide();
    cdsc.info45.hide();
    cdsc.info46.hide();
  
    cdsc.info5.hide();
    cdsc.info51.hide();
    cdsc.info52.hide();
    cdsc.info53.hide();
    cdsc.info54.hide();
    cdsc.info55.hide();
    cdsc.info56.hide();
    
    cdsc.info6.hide();
    cdsc.info61.hide();
    cdsc.info62.hide();
    cdsc.info63.hide();
    cdsc.info64.hide();
    cdsc.info65.hide();
    cdsc.info66.hide();
    
    cdsc.info7.hide();
    cdsc.info71.hide();
    cdsc.info72.hide();
    cdsc.info73.hide();
    cdsc.info74.hide();
    cdsc.info75.hide();
    cdsc.info76.hide();
  
    cdsc.info8.hide();
    cdsc.info81.hide();
    cdsc.info82.hide();
    cdsc.info83.hide();
    cdsc.info84.hide();
    cdsc.info85.hide();
    cdsc.info86.hide();
    
    cdsc.info9.hide();
    cdsc.info91.hide();
    cdsc.info92.hide();
    cdsc.info93.hide();
    cdsc.info94.hide();
    cdsc.info95.hide();
    cdsc.info96.hide();
    
    cdsc.info10.show();
    cdsc.info101.show();
    cdsc.info102.show();
    cdsc.info103.show();
    cdsc.info104.show();
    cdsc.info105.show();
    cdsc.info106.show();
    }

    about.back.hide();
    about.content1.hide();
    about.content2.hide();
    about.content3.hide();
    about.content4.hide();
    about.heading2.hide();
    about.content5.hide();
    hos.visible=false;
    qm.visible=false;
    virus.visible=false;
    yoga.visible=false;
    about.by.hide();
    back.show();
    back.mousePressed(()=>{
      state=1
  })
  }



  drawSprites();
}
