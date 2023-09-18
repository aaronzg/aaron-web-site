const contacts = [{
    'firstName': 'Akira',
    'likes': ['coding','pizza','videogames'],
    'email': 'Akira@gmail.com'
},
{
    'firstName': 'Akira',
    'likes': ['Swim','football','Music'],
    'email': 'Luna@gmail.com'
},
{
    'firstName': 'Maria',
    'likes': ['coding','beach','read'],
    'email': 'Maria@gmail.com'
},
{
    'firstName': 'Luis',
    'likes': ['Hamburguer','tomtato','Warzone'],
    'email': 'Luis@gmail.com'
},

];

function lookUpProfile (name, prop) {
    for (i = 0; i < contacts.length; i++) {
        if (name === contacts[i][firstName]) {
            if (contacts[i].hasOwnProperty(prop) === true) {
                return contacts[i][prop];
            } else {
                return "No such property"
            }
        } else {
            return "No such contact"
        }
    }
};

console.log(lookUpProfile(Akira, likes))

