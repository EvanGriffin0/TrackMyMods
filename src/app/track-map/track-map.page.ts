import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-map',
  templateUrl: './track-map.page.html',
  styleUrls: ['./track-map.page.scss'],
})
export class TrackMapPage implements OnInit {
  map!: google.maps.Map;

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map element not found');
      return;
    }
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 53.2707, lng: -9.0568 },  // Coordinates for Galway (or any location)
      zoom: 12,
    };

    this.map = new google.maps.Map(mapElement, mapOptions);

    // Add a simple marker (example)
    new google.maps.Marker({
      position: { lat: 53.2707, lng: -9.0568 },
      map: this.map,
      title: "Galway",
    });
  }
}
