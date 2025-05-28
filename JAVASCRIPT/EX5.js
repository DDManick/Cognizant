// Event constructor function
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

// Add method to prototype
Event.prototype.checkAvailability = function () {
  const today = new Date();
  const eventDate = new Date(this.date);
  return eventDate > today && this.seats > 0;
};

// Create events
const e1 = new Event("Tech Talk", "2025-08-01", 25, "Technology");
const e2 = new Event("Design Workshop", "2024-09-15", 0, "Design");

// Check availability
console.log(`${e1.name} Available?`, e1.checkAvailability()); // true
console.log(`${e2.name} Available?`, e2.checkAvailability()); // false

// List properties and values using Object.entries
console.log("\n📝 Event Details:");
Object.entries(e1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
