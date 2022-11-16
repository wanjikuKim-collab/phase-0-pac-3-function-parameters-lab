function  introduction(name){
    return `Hi, my name is ${name}.`
}

introduction("Faith");

function   introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguage("Aki", "Ember.js")

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional("Grace", "JavaScript")