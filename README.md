# Blinkr Mobile App

Blinkr is an anonymous chat app that allows you to connect with strangers within 10km of your location. When users move outside that radius, the chat is destroyed.

### NB: Hint on the build flow

- For getting the users location, I used [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service) library.

- Then, I calculate the distance between the user and other users using their latitude and longitude. For this, you can use [haversine formula](https://en.wikipedia.org/wiki/Haversine_formula). Libraries like; [geopy](https://github.com/geopy/geopy) and [geolib](https://github.com/manuelbieh/geolib) can be to implement this.

- Next, I filter the users who are beyond the desired distance (e.g., 500 meters) from the current user's location.

  --- In consideration ---

- Instead of filtering all users down to those within 500m, I am considering a way to only query for nearby users to begin with using a geoquery library or database geospatial features as I will be storing user locations. Libraries like geokdbush or react-native-geospatial for efficient geospatial queries

- For updating locations, a background geolocation tracker that regularly fetches the user's location and updates their coordinates in the database like react-native-background-geolocation could be useful.

- To optimize map rendering, implement pagination or infinite scrolling when displaying user markers. Only loading a subset of nearby users at a time as the user scrolls/zooms on the map.

  --- In consideration ---

- Finally, display the users on the map using [react-native-maps](https://github.com/react-native-maps/react-native-maps#customizing-the-map-style)

## Features

- Anonymous profiles - No personal information is ever shared.

- Location based - Only match with people within 10km of your location.

- Instant messaging - Send texts, photos, videos and more.

- Temporary connections - Chats are destroyed when users move apart.

- Reporting - Easily report and block abusive users.

## Getting Started

### Prerequisites

- iOS 12.0+ / Android 8.0+
- Location services enabled

```
git clone https://github.com/trillionclues/blinkr-mobile-app.git
```

```
cd blinkr
```

```
npm install && npm start
```

### Installing

Download Blinkr from the App Store or Google Play Store. Sign up with your phone number and enable location services when prompted. That's it! You're ready to start chatting.

## Usage

- Open the app and Blinkr will automatically search for nearby users and display on the map.

- Click on a nearby user and start chatting right away. Share anything from messages to photos.

- Like a chat? Keep the conversation going. Dislike it? Block the user easily.

- Never feel obligated to share personal information. You're anonymous!

## Built With

- [React Native](https://reactnative.dev/) - Mobile app framework used
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) - Map library used
- [Expo Location](https://docs.expo.io/versions/latest/sdk/location/) - Location library used
- [Socket.io](https://socket.io/) - Real-time communication library used
- [Gorhom Bottom Sheet](https://ui.gorhom.dev/) - Bottom sheet library used

## Contributing

Blinkr is open source and welcomes contributions. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## License

Blinkr is licensed under the MIT license. See LICENSE for more details.

## Contact

Reach out at hello@blinkr.com with any questions, feedback or suggestions.

Let me know what you think!
