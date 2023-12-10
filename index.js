function quote() {
    var quotes=[
        q1={
        q:"Be yourself; everyone else is already taken.",
        a:"Oscar Wilde"
        },
        q2={
        q:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." ,
        a:"― Marilyn Monroe"
        },
        q3={
            q:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            a:"― Albert Einstein"
        },
        q4={
            q:"“It is better to be hated for what you are than to be loved for what you are not.”",
            a:"― Andre Gide, Autumn Leaves"
        },
        
        q5={
            q:"A room without books is like a body without a soul.",
            a:"― Marcus Tullius Cicero"
        },
        q6={
            q:"“You only live once, but if you do it right, once is enough.”",
            a:"― Mae West"
        },
        q7={
            q:"“Be the change that you wish to see in the world.”",
            a:"― Mahatma Gandhi"
        },
        q8={
            q:"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
            a:"― Albert Camus"
        }
    ]

    

        var o=  Math.floor(Math.random()*quotes.length);

        var lq=quotes[o];

        document.getElementById('quote').innerHTML=lq.q;

        document.getElementById('auther').innerHTML=lq.a;


}