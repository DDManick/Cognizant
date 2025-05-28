const events = [
  { id: 1, name: "Jazz Night", date: "2025-07-15", seats: 20, category: "Music" },
  { id: 2, name: "Art Expo", date: "2025-08-01", seats: 10, category: "Art" },
];

// Default parameter & destructuring
function filterEvents(eventsList = [], category = "All") {
  // Clone array using spread operator
  const clonedEvents = [...eventsList];
  
  return clonedEvents.filter(({ category: cat }) => category === "All" || cat === category);
}

const musicEvents = filterEvents(events, "Music");
console.log(musicEvents);
