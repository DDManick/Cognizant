function submitRegistration(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      Math.random() < 0.8 ? resolve("Success!") : reject("Failed to register.");
    }, 1500);
  });
}

async function registerUser(userData) {
  try {
    const response = await submitRegistration(userData);
    alert(response);
  } catch (error) {
    alert(error);
  }
}

