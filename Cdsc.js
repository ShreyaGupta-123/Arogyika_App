class Cdsc{
    constructor(){
        this.hello=createElement("h1");
        this.by=createElement("p")

        this.button1=createButton("-----Allergies-----");
        this.button2=createButton("-Common Cold-");
        this.button3=createButton("----Diarrhoea----");
        this.button4=createButton("--Dengue fever-");
        this.button5=createButton("----Viral fever----");
        this.button6=createButton("--Head Aches--");
        this.button7=createButton("----Diabetes----");
        this.button8=createButton("Blood Pressure");
        this.button9=createButton("Muscle cramps");
       this.button10=createButton("----Joint Pain---");

       this.info1=createElement("h1");
       this.info11=createElement("h3");
       this.info12=createElement("p");
       this.info13=createElement("h3");
       this.info14=createElement("p");
       this.info15=createElement("h3");
       this.info16=createElement("p");

       
       this.info2=createElement("h1");
       this.info21=createElement("h3");
       this.info22=createElement("p");
       this.info23=createElement("h3");
       this.info24=createElement("p");
       this.info25=createElement("h3");
       this.info26=createElement("p");

       
       this.info3=createElement("h1");
       this.info31=createElement("h3");
       this.info32=createElement("p");
       this.info33=createElement("h3");
       this.info34=createElement("p");
       this.info35=createElement("h3");
       this.info36=createElement("p");

       
       this.info4=createElement("h1");
       this.info41=createElement("h3");
       this.info42=createElement("p");
       this.info43=createElement("h3");
       this.info44=createElement("p");
       this.info45=createElement("h3");
       this.info46=createElement("p");

       
       this.info5=createElement("h1");
       this.info51=createElement("h3");
       this.info52=createElement("p");
       this.info53=createElement("h3");
       this.info54=createElement("p");
       this.info55=createElement("h3");
       this.info56=createElement("p");

       
       this.info6=createElement("h1");
       this.info61=createElement("h3");
       this.info62=createElement("p");
       this.info63=createElement("h3");
       this.info64=createElement("p");
       this.info65=createElement("h3");
       this.info66=createElement("p");

       
       this.info7=createElement("h1");
       this.info71=createElement("h3");
       this.info72=createElement("p");
       this.info73=createElement("h3");
       this.info74=createElement("p");
       this.info75=createElement("h3");
       this.info76=createElement("p");

       
       this.info8=createElement("h1");
       this.info81=createElement("h3");
       this.info82=createElement("p");
       this.info83=createElement("h3");
       this.info84=createElement("p");
       this.info85=createElement("h3");
       this.info86=createElement("p");

       
       this.info9=createElement("h1");
       this.info91=createElement("h3");
       this.info92=createElement("p");
       this.info93=createElement("h3");
       this.info94=createElement("p");
       this.info95=createElement("h3");
       this.info96=createElement("p");

       
       this.info10=createElement("h1");
       this.info101=createElement("h3");
       this.info102=createElement("p");
       this.info103=createElement("h3");
       this.info104=createElement("p");
       this.info105=createElement("h3");
       this.info106=createElement("p");

       
      
    }

    display(){
        this.button1.mousePressed(()=>{
            cdscbuttons=1;
        })
        this.button2.mousePressed(()=>{
            cdscbuttons=2;
        })
        this.button3.mousePressed(()=>{
            cdscbuttons=3;
        })
        this.button4.mousePressed(()=>{
            cdscbuttons=4;
        })
        this.button5.mousePressed(()=>{
            cdscbuttons=5;
        })
        this.button6.mousePressed(()=>{
            cdscbuttons=6;
        })
        this.button7.mousePressed(()=>{
            cdscbuttons=7;
        })
        this.button8.mousePressed(()=>{
            cdscbuttons=8;
        })
        this.button9.mousePressed(()=>{
            cdscbuttons=9;
        })
        this.button10.mousePressed(()=>{
            cdscbuttons=10;
        })

        this.button1.position(displayWidth/20,displayHeight/20)
        this.button2.position(displayWidth/20,displayHeight/20+50)
        this.button3.position(displayWidth/20,displayHeight/20+100)
        this.button4.position(displayWidth/20,displayHeight/20+150)
        this.button5.position(displayWidth/20,displayHeight/20+200)
        this.button6.position(displayWidth/20,displayHeight/20+250)
        this.button7.position(displayWidth/20,displayHeight/20+300)
        this.button8.position(displayWidth/20,displayHeight/20+350)
        this.button9.position(displayWidth/20,displayHeight/20+400)
        this.button10.position(displayWidth/20,displayHeight/20+450)

        this.hello.position(displayWidth/3,displayHeight/3);
        this.hello.html("Welcome To Common diseases, symptoms and cures section");

        this.by.position(displayWidth-350,displayHeight-200);
        this.by.html("-Written by Shreya Gupta VIII")

        this.info1.position(displayWidth/4,displayHeight/20);
        this.info1.html("Allergies");
        this.info11.position(displayWidth/4,displayHeight/20+100);
        this.info11.html("Causes");
        this.info12.position(displayWidth/4,displayHeight/20+150);
        this.info12.html("Allergy refers to body being sensitive to particular foreign objects. It can be hereditary or can  be developed in certain surroundings. The following can trigger allergy- dust, pollen, milk, nuts, wheat, bees etc.");
        this.info13.position(displayWidth/4,displayHeight/20+250);
        this.info13.html("Symptoms");
        this.info14.position(displayWidth/4,displayHeight/20+300);
        this.info14.html("Symptoms of allergy, on exposing to foreign particles may include- Runny or stuffy nose, continious sneezing, rashes, swelling, vomiting, nausea. ");       
        this.info15.position(displayWidth/4,displayHeight/20+400);
        this.info15.html("Cures");
        this.info16.position(displayWidth/4,displayHeight/20+450);
        this.info16.html("Allergy can't be fully cured, though for relieving symptoms, lubricate nose with lubricating oil, to reduce pollen allergy, eat locally produced honey, at least once a day. Vitamin C can also help. Also consult a doctor, and use the prescribed medicines.");

        this.info2.position(displayWidth/4,displayHeight/20);
        this.info2.html("Common Cold");
        this.info21.position(displayWidth/4,displayHeight/20+100);
        this.info21.html("Causes");
        this.info22.position(displayWidth/4,displayHeight/20+150);
        this.info22.html("Although there may be several causes for catching cold, the main cause of catching a common cold is a virus named rhinovirus which enters in the body through eyes, nose or mouth. It spreads through contaminated air.");
        this.info23.position(displayWidth/4,displayHeight/20+250);
        this.info23.html("Symptoms");
        this.info24.position(displayWidth/4,displayHeight/20+300);
        this.info24.html("The following might be symptoms of cold- Cough, sore throat, runny or stuffy nose, watery eyes, sinus pressure, body ache.");       
        this.info25.position(displayWidth/4,displayHeight/20+400);
        this.info25.html("Cures");
        this.info26.position(displayWidth/4,displayHeight/20+450);
        this.info26.html("To cure common cold gargle thrice a day. Drink water and warm liquids, take one spoon of honey also. Use medications prescribed by doctor as well");

        this.info3.position(displayWidth/4,displayHeight/20);
        this.info3.html("Diarrhoea");
        this.info31.position(displayWidth/4,displayHeight/20+100);
        this.info31.html("Causes");
        this.info32.position(displayWidth/4,displayHeight/20+150);
        this.info32.html("Diarrhoea can be caused by bacteria(Samonella) or virus(rotavirus). It is spread through contaminatted food or drinking water.");
        this.info33.position(displayWidth/4,displayHeight/20+250);
        this.info33.html("Symptoms");
        this.info34.position(displayWidth/4,displayHeight/20+300);
        this.info34.html("The symptoms of diarrhoea may include- Abdominal cramps, urgency to go to the toilet, passing frequent and watery faeces, nausea, vomiting etc.");       
        this.info35.position(displayWidth/4,displayHeight/20+400);
        this.info35.html("Cures");
        this.info36.position(displayWidth/4,displayHeight/20+450);
        this.info36.html("Add a pinch of salt and sugar to luke warm water and drink as ORS solution for rehydrating. Use medications as prescribed by doctor");

        this.info4.position(displayWidth/4,displayHeight/20);
        this.info4.html("Dengue Fever");
        this.info41.position(displayWidth/4,displayHeight/20+100);
        this.info41.html("Causes");
        this.info42.position(displayWidth/4,displayHeight/20+150);
        this.info42.html("Dengue is caused by viruses which is mainly spread through bite of Aedes mosquito.");
        this.info43.position(displayWidth/4,displayHeight/20+250);
        this.info43.html("Symptoms");
        this.info44.position(displayWidth/4,displayHeight/20+300);
        this.info44.html("Symptoms may include- Chills, fatigue, muscle pain, nausea, vomiting, rise in temperature rashes etc.");       
        this.info45.position(displayWidth/4,displayHeight/20+400);
        this.info45.html("Cures");
        this.info46.position(displayWidth/4,displayHeight/20+450);
        this.info46.html("Drink lots of fluid and rest, use medications as prescribed by the doctor.");

        this.info5.position(displayWidth/4,displayHeight/20);
        this.info5.html("Viral Fever");
        this.info51.position(displayWidth/4,displayHeight/20+100);
        this.info51.html("Causes");
        this.info52.position(displayWidth/4,displayHeight/20+150);
        this.info52.html("Viral fever is caused by virus. It spreads through a infected peron to a healthy person");
        this.info53.position(displayWidth/4,displayHeight/20+250);
        this.info53.html("Symptoms");
        this.info54.position(displayWidth/4,displayHeight/20+300);
        this.info54.html("The symptoms of fever may include- Chills, rise in body temperature, sweating, dehydration, muscle aches.");       
        this.info55.position(displayWidth/4,displayHeight/20+400);
        this.info55.html("Cures");
        this.info56.position(displayWidth/4,displayHeight/20+450);
        this.info56.html("Drink plenty of fluids, rest. Don't use many blankets for chills, nasal decongestant can provide relief from a stuffy or runny nose, use the medication as prescribed by doctor.");

        this.info6.position(displayWidth/4,displayHeight/20);
        this.info6.html("Head Ache");
        this.info61.position(displayWidth/4,displayHeight/20+100);
        this.info61.html("Causes");
        this.info62.position(displayWidth/4,displayHeight/20+150);
        this.info62.html("Head ache is caused by several different reasons. Some may be due to excessive work, others might be due to some other diseases.");
        this.info63.position(displayWidth/4,displayHeight/20+250);
        this.info63.html("Symptoms");
        this.info64.position(displayWidth/4,displayHeight/20+300);
        this.info64.html("Pain in head, sense of tightening and pressure in head.");       
        this.info65.position(displayWidth/4,displayHeight/20+400);
        this.info65.html("Cures");
        this.info66.position(displayWidth/4,displayHeight/20+450);
        this.info66.html("Drink adequate water, get adequate sleep, take a paracetamol for excessive head ache.");

        this.info7.position(displayWidth/4,displayHeight/20);
        this.info7.html("Diabetes");
        this.info71.position(displayWidth/4,displayHeight/20+100);
        this.info71.html("Causes");
        this.info72.position(displayWidth/4,displayHeight/20+150);
        this.info72.html("Diabetes is caused when pancreas is not able to produce adequate insulin to balance sugar levels in blood. It might be hereditary or may be caused due to some other side effects. ");
        this.info73.position(displayWidth/4,displayHeight/20+250);
        this.info73.html("Symptoms");
        this.info74.position(displayWidth/4,displayHeight/20+300);
        this.info74.html("Symptoms of diabetes may include- increased thirst, frequent urination, Extreme hunger, Fatigue etc.");       
        this.info75.position(displayWidth/4,displayHeight/20+400);
        this.info75.html("Cures");
        this.info76.position(displayWidth/4,displayHeight/20+450);
        this.info76.html("Although there is no cure for diabetes till now, but the sugar levels can be balanced by having particular diets. Cinnamon, aloe vera and fenugreek can be also used to balance blood sugar. Also use medications as prescribed by doctor.");

        this.info8.position(displayWidth/4,displayHeight/20);
        this.info8.html("Blood Pressure");
        this.info81.position(displayWidth/4,displayHeight/20+100);
        this.info81.html("Causes");
        this.info82.position(displayWidth/4,displayHeight/20+150);
        this.info82.html("Blood pressure might be hereditary or can develop with time due to imbalanced eating habit.");
        this.info83.position(displayWidth/4,displayHeight/20+250);
        this.info83.html("Symptoms");
        this.info84.position(displayWidth/4,displayHeight/20+300);
        this.info84.html("The symptoms might include- Irregular heartbeat, headaches, uneasiness, fatigue and confusion");       
        this.info85.position(displayWidth/4,displayHeight/20+400);
        this.info85.html("Cures");
        this.info86.position(displayWidth/4,displayHeight/20+450);
        this.info86.html("Eat food adequate with sodium. Regular exercising and yoga may help. Reduce food rich with caffeine.");

        this.info9.position(displayWidth/4,displayHeight/20);
        this.info9.html("Muscle cramp");
        this.info91.position(displayWidth/4,displayHeight/20+100);
        this.info91.html("Causes");
        this.info92.position(displayWidth/4,displayHeight/20+150);
        this.info92.html("Causes of muscle cramp may be excessive exercise, or cold sensitive muscle.");
        this.info93.position(displayWidth/4,displayHeight/20+250);
        this.info93.html("Symptoms");
        this.info94.position(displayWidth/4,displayHeight/20+300);
        this.info94.html("excessive pain in legs or arms. Twitching of muscle etc.");       
        this.info95.position(displayWidth/4,displayHeight/20+400);
        this.info95.html("Cures");
        this.info96.position(displayWidth/4,displayHeight/20+450);
        this.info96.html("Light stretching and massaging may help. Vitamin D and magnesium supplements can also help. If conditions don't improve, try consulting a doctor.");

        this.info10.position(displayWidth/4,displayHeight/20);
        this.info10.html("Joint Pain");
        this.info101.position(displayWidth/4,displayHeight/20+100);
        this.info101.html("Causes");
        this.info102.position(displayWidth/4,displayHeight/20+150);
        this.info102.html("Joint pain might be caused by several different reasons. Some might include injury, arthritis, heavy physical activities or sprains");
        this.info103.position(displayWidth/4,displayHeight/20+250);
        this.info103.html("Symptoms");
        this.info104.position(displayWidth/4,displayHeight/20+300);
        this.info104.html("Pain in joint with movement or at rest, Stiffness or swelling near joints.");       
        this.info105.position(displayWidth/4,displayHeight/20+400);
        this.info105.html("Cures");
        this.info106.position(displayWidth/4,displayHeight/20+450);
        this.info106.html("Try massaging with oils to relief pain. Try light excercises to relief pain. consult a specialist if required.");
       

    }
}