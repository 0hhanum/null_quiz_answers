function generateRandomUID(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let uid = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uid += characters[randomIndex];
  }

  return uid;
}

console.log(generateRandomUID(12));
