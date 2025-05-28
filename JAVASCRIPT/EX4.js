// Event store
let events = [];

// 1️⃣ Add Event Function
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// 2️⃣ Register User Function with Closure to track category registrations
function createRegistrationTracker() {
  const registrationCount = {}; // Private object

  return function registerUser(eventName) {
    const event = events.find(e => e.name === eventName);
    const today = new Date();

    if (!event) {
      console.error(`❌ Event '${eventName}' not found.`);
      return;
    }

    if (new Date(event.date) <= today) {
      console.error(`❌ Cannot register for past event: ${event.name}`);
      return;
    }

    if (event.seats <= 0) {
      console.error(`❌ No seats left for ${event.name}`);
      return;
    }

    // Register user
    event.seats--;

    // Track registration per category
    registrationCount[event.category] = (registrationCount[event.category] || 0) + 1;

    console.log(`✅ Registered for ${event.name}. Remaining seats: ${event.seats}`);
  };
}

const registerUser = createRegistrationTracker(); // Closure in action

// 3️⃣ Filter Events by Category using Higher-Order Function
function filterEventsByCategory(category, callback) {
  return events.filter(event => {
    return event.category === category && callback(event);
  });
}
