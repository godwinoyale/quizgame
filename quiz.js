var quizContainer = document.getElementById('quizContainer');
var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');

var app={
            questions:[
                    {q:'If we want to define style for an unique element, then which css selector can we use ?',options:['a. Id','b. text','c. class'],answer: 1},
                        
                    {q:"If we don't want to allow a floating div to the left side of an element, which css property can we use?",options:['a. margin','b. clear','c. float'],answer:2},
                        
                    {q:'If we want to show an Arrow as cursor, then which value can we use ?',options:['a. pointer','b. default','c. arrow'],answer:2},
                        
                    {q:'If we want to use a nice looking green dotted border around an image, which css property we can use?',options:['a. border-color','b. border-decoration','c. border-style'], answer: 3},
                        
                    {q:'How can we write comment along with CSS code ?',options:['a. /* a comment */','b. // a comment //','c. / a comment /'],answer:1}
                    ],
            index:0,
            load:function(){
                    if(this.index<=this.questions.length -1){
                        quizContainer.innerHTML = this.index+1+". " +this.questions[this.index].q;
                        op1.innerHTML = this.questions[this.index].options[0];
                        op2.innerHTML = this.questions[this.index].options[1];
                        op3.innerHTML = this.questions[this.index].options[2];
                        this.scoreCard();
                    }
                    else{
                        quizContainer.innerHTML = "QUIZ OVER!!!!";
                        op1.style.display = "none";
                        op2.style.display = "none";
                        op3.style.display = "none";
                        btn.style.display = "none";

                    }
                    

            },
            next:function(){
                    this.index++;
                    this.load();
            },
            check:function(ele){
                    var id = ele.id.split('');
                    if(id[id.length-1]==this.questions[this.index].answer){
                        this.score++;
                        ele.className = "correct";
                        
                        this.scoreCard();
                    }else{
                        ele.className = "wrong";
                        
                    }

            },
            notClickable:function(){
                for(let i =0; i<ul.children.length; i++){
                    ul.children[i].style.pointerEvents = "none";
                }

            },
            clickable:function(){
                for(let i=0; i<ul.children.length; i++){
                    ul.children[i].style.pointerEvents = "auto";
                    ul.children[i].className= '';
                }

            },
            score:0,
            scoreCard:function(){
                scoreCard.innerHTML = this.score+ "/" + this.questions.length;
            }
}

window.onload = app.load();
     function button(ele){
        app.check(ele);
        app.notClickable();
   }

        function next(){
            app.next();
            app.clickable();
        }