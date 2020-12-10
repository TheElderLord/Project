$(document).ready(function(){
    $(".nav-items a").mouseover(function(){
        $(this).css("font-size", "24px");
    });
    $(".nav-items a").mouseout(function(){
        $(this).css("font-size", "20px");
    });
    $(".Register a").mouseover(function(){
        $(this).css("font-size", "22px");
    });
    $(".Register a").mouseout(function(){
        $(this).css("font-size", "16px");
    });




    $("#mainb").click(function(){
      $(".GENRE").hide();
      $(".BLOG").hide();
      $(".CONTACTS").hide();
      $(".HOME").fadeIn(1000);
    });
    $("#genreb").click(function(){
      $(".HOME").hide();
      $(".BLOG").hide();
      $(".CONTACTS").hide();
      $(".GENRE").fadeIn(1000);
    });
    $("#blogb").click(function(){
      $(".GENRE").hide();
      $(".HOME").hide();
      $(".CONTACTS").hide();
      $(".BLOG").fadeIn(1000);
    });
    $("#contactb").click(function(){
      $(".GENRE").hide();
      $(".HOME").hide();
      $(".BLOG").hide();
      $(".CONTACTS").fadeIn(1000);
      $(".Kyz").css({"display": "flex"});
      $(".Alm").css({"display": "flex"});
      $(".Kost").css({"display": "flex"});
      $(".ctext").css({"padding-left": "200px"});
      $(".parg").css({"padding-left": "250px"});
    });
  
  
  
  });

  window.addEventListener("scroll",function(){
     var header = document.querySelector(".nav-container");
     header.classList.toggle("sticky",window.scrollY >0)
  })

  
  function register() {
    var x = document.getElementById("reg");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function menu() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

 

  $("#myModal").modal();


  
// map

function myMap() {
  
  const origin = { lat: 44.81491770615942, lng: 65.52010305268523 };
  const origin1 = { lat:43.227920879714, lng:76.90519811136512};
  const origin2 = { lat:53.21315382799344, lng:63.62611062523043};
  // var mapProp= {

  //   center:origin,
  //   zoom:15,
    
  // };
 
  // var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 15,
    center: origin,
  });
  const map1 = new google.maps.Map(document.getElementById("googleMap1"), {
    zoom: 15,
    center: origin1,
  });
  const map2 = new google.maps.Map(document.getElementById("googleMap2"), {
    zoom: 15,
    center: origin2,
  });

  infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.textContent = "Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
    // first marker
    var image = {
    url: "assets/style/images/110-1104400_circle-icons-bookshelf-library-icon-png-transparent-png.png",
    size: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(30, 30)
  };
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h4 id="firstHeading" class="firstHeading">BindMind</h4>' +
      '<div id="bodyContent">' +
      "<p> Our office</p>" 
      
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    const marker = new google.maps.Marker({
      position: origin,
      map,
      icon: image,
      title: "BindMind",
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    // second map
    var markerl = new google.maps.Marker({
      position:origin1,
      icon:image
    });
    
    markerl.setMap(map1);

    var markerk = new google.maps.Marker({
      position:origin2,
      icon:image
    });
    
    markerk.setMap(map2);
    
   
    
  
    // second marker
    var image2 = {
    url: "assets/style/images/univer.png",
    size: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(30, 30)
  };
    var  contentString2 ="5th department Korkyt Unviersity";
    const infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
    });
    
    const marker2 = new google.maps.Marker({
      position: { lat:44.814324484439176,   lng:  65.5155945916458 },
      map,
      icon: image2,
      title: "Korkyt University",
    });
    marker2.addListener("click", () => {
      infowindow2.open(map, marker2);
    });


  // third mark


  var image3 = {
    url: "assets/style/images/college.png",
    size: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(30, 30)
  };
    var  contentString3 ="College Ulagat is a technical college. The main direction of fire fighting";
    const infowindow3 = new google.maps.InfoWindow({
      content: contentString3,
    });
    
    const marker3 = new google.maps.Marker({
      position: { lat:44.814974749947,   lng:   65.51784673764145 },
      map,
      icon: image3,
      title: "College Ulagat",
    });
    marker3.addListener("click", () => {
      infowindow3.open(map, marker3);
    });



    // fourth mark


    var image4 = {
      url: "assets/style/images/college.png",
      size: new google.maps.Size(40, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(30, 30)
    };
      var  contentString4 ="College Orkeniet is a medical college";
      const infowindow4 = new google.maps.InfoWindow({
        content: contentString4,
      });
      
      const marker4 = new google.maps.Marker({
        position: { lat:44.81556197100181,   lng:   65.51757726808883 },
        map,
        icon: image4,
        title: "College Orkeniet",
      });
      marker4.addListener("click", () => {
        infowindow4.open(map, marker4);
      });

      
      
      // fifth marker
      var image5 = {
        url: "assets/style/images/hospital.png",
        size: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(30, 30)
      };
        var  contentString5 ="Regional Hospital was built in 1998. Аccommodates 20,000 people";
        const infowindow5 = new google.maps.InfoWindow({
          content: contentString5,
        });
        
        const marker5 = new google.maps.Marker({
          position: { lat:44.81869210196348,     lng:  65.51742851168572 },
          map,
          icon: image5,
          title: "Regional Hospital",
        });
        marker5.addListener("click", () => {
          infowindow5.open(map, marker5);
        });
        const flightPlanCoordinates = [
          { lat: 44.81889627371072, lng:  65.51991609661914 },
          { lat: 44.81369150631161,  lng: 65.51301450324087 },
          { lat: 44.80894509912408,  lng: 65.52334438514706 },
          { lat:44.8144865797218,  lng: 65.53128158284143 },
          { lat: 44.81889627371072, lng:  65.51991609661914 },
        ];
        const flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: "#6C6AE1",
          strokeOpacity: 0.7,
          strokeWeight: 5,
        });
        flightPath.setMap(map);
        map.addListener("click", (e) => {
          placeMarkerAndPanTo(e.latLng, map);
        });
        for (const city in citymap) {
          // Add the circle for this city to the map.
          const cityCircle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: "#C95722",
            fillOpacity: 0.35,
            map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].population) * 100,
          });
        }
  
      }
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }
  
  const citymap = {
    piece1: {
      center: { lat: 44.8067061331576,  lng: 65.51992044052996 },
      population: 1,
    },
    piece2: {
      center: { lat: 44.789834378064334,  lng: 65.52359331534043 },
      population: 1,
    },
    
  };



  








  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  
