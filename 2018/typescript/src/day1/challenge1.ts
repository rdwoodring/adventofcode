import inputs from './challenge1.inputs';

const startingValue = 0,
    result = inputs.reduce((accumulator: number, modifierString: string) => {
    const modifier: string = modifierString.slice(0, 1),
        modifierValue: number = Number(modifierString.slice(1));

    let updatedValue = accumulator;

    if (modifier === '+') {
        updatedValue += modifierValue;
    } else {
        updatedValue -= modifierValue;
    }
    
    return updatedValue;
}, startingValue);

console.log(result);