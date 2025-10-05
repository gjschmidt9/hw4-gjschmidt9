console.log("Hello world!")

function duel() {
    const p1Health = getAttributeValue("p1-health");
    const p1Armor = getAttributeValue("p1-armor");
    const p1DPS = getAttributeValue("p1-attack");

    const p2Health = getAttributeValue("p2-health");
    const p2Armor = getAttributeValue("p2-armor");
    const p2DPS = getAttributeValue("p2-attack");

    if (!p1Health || !p1Armor || !p1DPS || !p2Health || !p2Armor || !p2DPS) {
    alert("Please fill out all fields before continuing.");
    return;
    }

    const p1Survival = timeToDie(p1Health, p1Armor, p2DPS);
    const p2Survival = timeToDie(p2Health, p2Armor, p1DPS);

    const diff = Math.abs(p1Survival - p2Survival);

    if (diff < 0.1) {
        alert("It's a draw!");
    } else if (p1Survival > p2Survival) {
          alert(`Player 1 wins in ${p2Survival.toFixed(1)} seconds!`);
    } else {
        alert(`Player 2 wins in ${p1Survival.toFixed(1)} seconds!`);
    }

}
