class Form {

    constructor() {
      this.input = createInput("Enter Your Name");
      this.input1 = createInput("Your Answer Number");
      this.button = createButton('Submit');
      this.greeting = createElement('h2');
      this.greeting2 = createElement('h2');
      this.title = createElement('h2');
      this.question = createElement('h1');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3= createElement('h2');
      this.option4= createElement('h2')
    }
    hide(){
      //this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.input1.hide();
      this.title.hide();
    }
  
    display(){
      this.question.html("Question:Which is the biggest sundial in the world?");
      this.question.position(60,70)

     

      this.title.html("My Quiz Game");
      this.title.position(320,25);

      this.option1.html("1: Banaras");
      this.option1.position(70,125)

      this.option2.html("2: Varanasi");
      this.option2.position(70,150)

      this.option3.html("3: Jaipur");
      this.option3.position(70,175)

      this.option4.html("4: Delhi");
      this.option4.position(70,200)
  
  
      this.input.position(100,300);
      this.input1.position(300,300);

      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.input1.hide();
        this.button.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.question.hide();
        this.title.hide();
        this.greeting.html("The Correct Answer is : 3-Jaipur")
        this.greeting.position(200,150);
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello")
        this.greeting.position(320,25);
      });
  
    }
  }
  