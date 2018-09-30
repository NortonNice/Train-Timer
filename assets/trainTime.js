alert("linked");
var trainRef = firebase.database().ref("trains/");

trainRef.set ({
        Steamer: {
            destination: "Boston",
            startTime: 0100, 
            frequency: 60
    },

        Cruiser: {
            destination: "Provencetown",
            startTime: 0230,
            frequency: 120
        },
        Streamliner: {
            destination: "Los Angeles",
            startTime: 2359,
            frequency: 720

        }
});