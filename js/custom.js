
// GOOGLE MAP
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

$(function(){
  loadGoogleMap();
});

// NIVO LIGHTBOX
$('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
  //  $('.navbar-collapse a').click(function(){
  //       $(".navbar-collapse").collapse('hide');
  //   });

document.querySelectorAll(".drop").forEach(btn=>{
  
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".drop").forEach(
      s=>s===btn?"" :s.classList.remove("show")
    )

      btn.classList.toggle("show");

    
  })
})

// Slider


const letter = ["Make Your Life Easy", "hi"];
let index =0;
let count = 0;
let time=200;
async function spin() {
  const heading = document.querySelector(".pfo__heading");
  
  heading.textContent += letter[index][count];
  count++;
  if(count === letter[index].length){
    count=0;
    
      clearInterval(timer);
      setTimeout(()=>{
        timer = setInterval(() => {
          spin();
        }, time);
        heading.textContent = "";
         index++;
         if (index === letter.length) {
           index = 0;
         }
      } ,3000)
    
    
   
    
    
    
  }else{
    time=200;
  }
  if(index === letter.length){
    index=0;
  }
 
}

let timer= setInterval(()=>{
  spin()
  
}, time);


