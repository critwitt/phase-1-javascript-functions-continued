// code your solution here
function saturdayFun (activity = 'roller-skate') {
    const quote = `This Saturday, I want to ${activity}!`;
    return quote
}

function mondayWork (activity = 'go to the office') {
    const quote = `This Monday, I will ${activity}.`;
    return quote
}

function wrapAdjective (highlight) {
    const inner = (adjective = "special") => `You are ${highlight}${adjective}${highlight}!`
    return inner
}