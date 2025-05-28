// Sample event data
const events = [
  { id: 1, name: "Rock Concert", date: "2025-06-10", seats: 10 },
  { id: 2, name: "Yoga Session", date: "2025-07-05", seats: 5 },
  { id: 3, name: "Painting Class", date: "2025-08-15", seats: 0 }
];

// DOM reference
const container = document.querySelector('#events-container');

// Render all event cards
function renderEvents() {
  container.innerHTML = ""; // Clear existing content

  events.forEach(event => {
    const card = document.createElement('div');
    card.className = "card";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: <span id="seats-${event.id}">${event.seats}</span></p>
      <button class="btn" onclick="register(${event.id})">Register</button>
      <button class="btn" onclick="cancel(${event.id})">Cancel</button>
    `;

    container.appendChild(card);
  });
}

// Register for an event
function register(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event && event.seats > 0) {
    event.seats--;
    updateSeats(eventId);
  } else {
    alert("No seats available.");
  }
}

// Cancel registration
function cancel(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event) {
    event.seats++;
    updateSeats(eventId);
  }
}

// Update seat count in the UI
function updateSeats(id) {
  const seatSpan = document.querySelector(`#seats-${id}`);
  const event = events.find(e => e.id === id);
  seatSpan.textContent = event.seats;
}

// Initial render
renderEvents();
