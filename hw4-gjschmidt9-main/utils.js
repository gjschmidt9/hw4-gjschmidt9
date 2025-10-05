/**
 * Gets the number in the specified input box.
 * @returns The number if it exists, else null
 */
function getAttributeValue(name) {
    const inp = document.getElementById(name).value.trim();
    if (inp === '') {
        return null;
    } else {
        return parseInt(inp);
    }
}

function timeToDie(health, armor, enemyDPS) {
  const armorTime = (armor * 2) / enemyDPS;
  const healthTime = health / enemyDPS;
  return armorTime + healthTime;
}