function initBubble() {
    var bubbles = gsap.to('#bubbled-group-mask circle', {
        duration: 'random(1, 6)',
        y: '-=140',
        repeatRefresh: true,
        stagger: {each: 'random(0, 1)', repeat: -1}
    })
    bubbles.play();
}

$(function(){
    initBubble();
})

