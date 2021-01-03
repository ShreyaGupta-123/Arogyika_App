class About{
    constructor(){
        this.heading1=createElement("h1");
        this.back=createButton("BACK");
        this.content1=createElement("p");
        this.content2=createElement("p");
        this.content3=createElement("p");
        this.content4=createElement("p");
        this.heading2=createElement("h1");
        this.content5=createElement("p");
        this.by=createElement("h4");
    }
    display(){
        this.heading1.position(displayWidth/20,displayHeight/20);
        this.heading1.html("Why health is Important?");

        this.back.position(displayWidth-100,displayHeight/20);

        this.content1.position(displayWidth/20,displayHeight/20+50);
        this.content1.html("It is said that a healthy body has a healthy mind. A person whose body and mind are healthy is a happy man. For the mind to work properly the healthy environment is must. We must therefore pay great attention to need to keep our bodies healthy all the time.");

        this.content2.position(displayWidth/20,displayHeight/20+120);
        this.content2.html("The first requirement of a healthy body is proper nutrition. It is not necessary that everything we eat should be only tasty because most certainly we would fall sick. We must eat balanced like our Indian meal of roti/rice, dal (pulses) and vegetables. A balanced diet includes proteins, carbohydrates, fats and vitamins in requisite proportions. Milk, fruits, leafy vegetables, jaggery, meat, citrus, Indian gooseberry (amla) are good for health. Chips and packed or tinned snacks, though very tasty should never replace regular meals as they do not have adequate nutritional value.");

        this.content3.position(displayWidth/20,displayHeight/20+260);
        this.content3.html("The second requirement for a healthy body is regular outdoor games or exercise. Exercise helps our bodies to grow strong. It helps our bodies to resist disease germs and thus prevent us from falling sick.");

        this.content4.position(displayWidth/20,displayHeight/20+330);
        this.content4.html("The value of good health is well expressed in the proverb- “A sound mind in a sound body”. Thirdly it is only natural for our bodies to tire after work and by the end of the day. Our body requires proper rest in the form of sleep for eight hours a day");

        this.heading2.position(displayWidth/20,displayHeight/2+40);
        this.heading2.html("About app");

        this.content5.position(displayWidth/20,displayHeight/2+100);
        this.content5.html("In this app you will get map of all the hospitals near you and also you will get to know about Different types of diseases, symptoms and their treatment. Thirdly, you can checkout the videos for you physical wellness.");

        this.by.position(displayWidth/20,displayHeight/2+180);
        this.by.html("Written By-Agamya Misra");

        this.back.mousePressed(()=>{
            state=1
        })

    }
}