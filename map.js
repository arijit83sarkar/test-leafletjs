<script>
    var mymap = L.map('map_streets').setView([22.564, 88.343], 13);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q'
    }).addTo(mymap);
    
    var marker = L.marker([22.564, 88.343]).addTo(mymap);
	marker.bindPopup("<b>Hello</b><br>I am Eden Gardens.").openPopup();
	
	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);
	
	var mymap2 = L.map('map_light').setView([22.564, 88.343], 13);    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q', {
      maxZoom: 18,
      id: 'mapbox.light',
      accessToken: 'pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q'
    }).addTo(mymap2);
	var marker2 = L.marker([22.564, 88.343]).addTo(mymap2);
	//marker2.bindPopup("<b>Hello</b><br>I am Eden Gardens.").openPopup();
	
	var mymap3 = L.map('map_dark').setView([22.564, 88.343], 13);    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q', {
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: 'pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q'
    }).addTo(mymap3);
	var marker3 = L.marker([22.564, 88.343]).addTo(mymap3);
	
	var mymap4 = L.map('map_satellite').setView([22.564, 88.343], 13);    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q', {
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q'
    }).addTo(mymap4);
	var marker4 = L.marker([22.564, 88.343]).addTo(mymap4);
	
	var mymap5 = L.map('map_streets_satellite').setView([22.564, 88.343], 13);    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q', {
      maxZoom: 18,
      id: 'mapbox.streets-satellite',
      accessToken: 'pk.eyJ1IjoiYXJpaml0ODNzYXJrYXIiLCJhIjoiY2plbHFoeWxjNHN4azMzbzEzd2NwbG5leiJ9.SMsEl9MDkXoqxaqcRp_K8Q'
    }).addTo(mymap5);
	var marker5 = L.marker([22.564, 88.343]).addTo(mymap5);
	
  </script>