// --- Start your code here ---

// 1. Create the 'pet' object
const pet = {
    name: "Rex",
    happiness: 50,
    hunger: 50,
    isAwake: true
};// --- Start your code here ---

// 1. Create the 'feed' function
function feed(petObject) {
    petObject.hunger -= 10;
    petObject.happiness += 5;
    console.log(`${petObject.name} is eating. Hunger down, happiness up!`);
}

// 2. Create the 'play' function
function play(petObject) {
    petObject.happiness += 10;
    petObject.hunger += 5;
    console.log(`You are playing with ${petObject.name}. It seems happy!`);
}

// 3. Create the 'goToSleep' function
function goToSleep(petObject) {
    petObject.isAwake = false;
    console.log(`${petObject.name} is now sleeping.`);
}// --- Start your code here ---

// 1. Create the 'for' loop (from 1 to 5)
for (let i = 1; i <= 5; i++) {

    // 2. Log the current hour
    console.log(`--- Hour ${i} ---`);

    // 3. Check if hunger is >= 60
    if (pet.hunger >= 60) {
        feed(pet);
    }

    // 4. Check if happiness is <= 50
    if (pet.happiness <= 50) {
        play(pet);
    }

    // 5. Simulate time passing
    pet.happiness -= 2;
    pet.hunger += 2;

    console.log(`Hunger: ${pet.hunger}`);
    console.log(`Happiness: ${pet.happiness}`);
}

// Final status
console.log(`The day is over! ${pet.name}'s final status:`);
console.log(`Final Hunger: ${pet.hunger}`);
console.log(`Final Happiness: ${pet.happiness}`);