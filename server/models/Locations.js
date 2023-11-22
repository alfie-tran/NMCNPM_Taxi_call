// src/models/Locations.js
class Location {
  constructor(location_id, booking_id, latitude, longitude, timestamp) {
    this.location_id = location_id;
    this.booking_id = booking_id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.timestamp = timestamp;
  }
}

export default Location;
