// Event details
const eventName = "Tech Conference 2025";
const eventDate = "June 15, 2025";
let availableSeats = 50;

// Display event info using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Simulate a registration
console.log("\nRegistering a participant...");
availableSeats--;  // Decrease seat count by 1

// Display updated seats
console.log(`Updated Seats after registration: ${availableSeats}`);
