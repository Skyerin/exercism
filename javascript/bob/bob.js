var Bob = function() {};

Bob.prototype.hey = function(input) {
    var answer = Bob.prototype.parseInput(input);

    return Bob.prototype.replies[answer];
};

Bob.prototype.sanitizeInput = function(input) {
    return input.trim();
};

Bob.prototype.parseInput = function (input) {
    var cleanInput = Bob.prototype.sanitizeInput(input);

    if (cleanInput === "") {
        return "nothing";
    }

    if (Bob.prototype.getYellRegex().test(cleanInput)) {
        return "yell";
    }

    if (Bob.prototype.getQuestionRegex().test(cleanInput)) {
        return "question";
    }

    return "generic";
};

Bob.prototype.getQuestionRegex = function () {
    return new RegExp(/\?$/);
};

Bob.prototype.getYellRegex = function () {
    return new RegExp(/[A-Z]{4,}|[A-Z]+\!/);
};

Bob.prototype.replies = {
    "question": "Sure.",
    "yell": "Whoa, chill out!",
    "nothing": "Fine. Be that way!",
    "generic": "Whatever.",
};

module.exports = Bob;
