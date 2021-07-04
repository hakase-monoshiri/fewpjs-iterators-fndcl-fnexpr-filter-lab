// Code your solution here
function findMatching (driversArray, stringToMatch) {
    return driversArray.filter(
        driver => driver.toLowerCase() === stringToMatch.toLowerCase()
    )
}

function fuzzyMatch (driversArray, stringToMatch) {
    return driversArray.filter(
        driver => driver.startsWith(stringToMatch)
    )
}

function matchName (driversArray, stringToMatch) {
    return driversArray.filter(
        driver => driver.name === stringToMatch
    )
}