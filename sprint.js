console.log('JavaScript file is successfully linked!');


// Declare global variables to store rocket data
let rocketNames = [];
let rocketNamesAndTimesFlown = [];
let nameAndStatus = [];

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});

function fetchData() {
    fetch('sprint.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            rocketNames = data.map(item => item.name);

            rocketNamesAndTimesFlown = data.map(item => {
                return {
                    name: item.name,
                    timesFlown: item["times flown"]
                };
            });

            nameAndStatus = data.map(item => {
                return {
                    name: item.name,
                    status: item["still in use"] || item["active"] || "Unknown"
                };
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
}