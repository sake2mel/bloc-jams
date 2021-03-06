var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {           
        point.style.opacity = 1;
        point.style.transform = "scaleX(1) translateY(0)";
        point.style.msTransform = "scaleX(1) translateY(0)";
        point.style.WebkitTransform = "scaleX(1) translateY(0)";                
    }

var animatePoints = function(points) {       //Old for loop before creating forEach function in Assignment 9 for(var i = 0; i < points.length; i++){revealPoint(i);}
    forEach(points,revealPoint);
};

window.onload = function() {
    //Automatically animate the points on a tall screen where scrolling can't trigger the animation
    if(window.innherHeight > 950) {
        animatePoints(pointsArray);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}