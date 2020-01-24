(function () {
    const quotes = [
        {
            quote: "I don't want to die without any scars.",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "Only after disaster can we be resurrected. It's only after you've lost everything that you're free to do anything. Nothing is static, everything is evolving, everything is falling apart.",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "You buy furniture. You tell yourself, this is the last sofa I will ever need in my life. Buy the sofa, then for a couple years you're satisfied that no matter what goes wrong, at least you've got your sofa issue handled. Then the right set of dishes. Then the perfect bed. The drapes. The rug. Then you're trapped in your lovely nest, and the things you used to own, now they own you.",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "If you could be either God’s worst enemy or nothing, which would you choose?",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "Sticking feathers up your butt does not make you a chicken!",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "Remember this. The people you're trying to step on, we're everyone you depend on. We're the people who do your laundry and cook your food and serve your dinner. We make your bed. We guard you while you're asleep. We drive the ambulances. We direct your call. We are cooks and taxi drivers and we know everything about you. We process your insurance claims and credit card charges. We control every part of your life. We are the middle children of history, raised by television to believe that someday we'll be millionaires and movie stars and rock stars, but we won't. And we're just learning this fact. So don't fuck with us.",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "Reject the basic assumptions of civilization, especially the importance of material possessions.",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "The liberator who destroys my property is fighting to save my spirit. The teacher who clears all possessions from my path will set me free.",
            author: "― Chuck Palahniuk, Fight Club"
            },
            
            {
            quote: "Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need. We're the middle children of history. No purpose or place. We have no Great War, No Great Depression. Our great war is a spiritual war. Our great depression is our lives. We've all been raised on television to believe that one day we'd all be millionaires and movie gods and rock stars, but we won't. We're slowly learning that fact. And we're very, very pissed off.",
            author: "― Chuck Palahniuk, Fight Club"
            },
    ];

    const btn = document.getElementById("get-btn")

    btn.addEventListener("click", function(){
        let randomQ = Math.floor(Math.random() * quotes.length)
        console.log(randomQ)

    document.getElementById("quote").textContent = quotes[randomQ].quote
    document.getElementById("author").textContent = quotes[randomQ].author
        
    })

})()