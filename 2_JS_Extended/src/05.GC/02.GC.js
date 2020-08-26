const { create, memory } = require('./00.helpers');

memory('(GC) init');

let family = {
    father: {
        name: "John",
        data: create(),
    },
    mother: {
        name: "Ann",
        data: create(),
    },
};

family.father.wife = family.mother;
family.mother.husband = family.father;

memory('(GC) family created');

delete family.father.wife;
delete family.mother;

memory('(GC)');

family = null;

console.log(family);

memory('(GC)');