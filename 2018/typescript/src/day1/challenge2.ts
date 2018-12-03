import inputs from './challenge1.inputs';

interface ICalibrationData {
    startingValue: number;
    calibrations: {
        [s: string]: string
    }
}

const startingValue = 0;

let firstMatch: number | null = null,
    result = {
        startingValue: startingValue,
        calibrations: {}
    };

while (firstMatch === null) {
    result = inputs.reduce((accumulator: ICalibrationData, modifierString: string) => {
        const modifier: string = modifierString.slice(0, 1),
            modifierValue: number = Number(modifierString.slice(1));
    
        let updatedValue = accumulator.startingValue,
            updatedCalibrations = accumulator.calibrations;
    
        if (modifier === "+") {
            updatedValue += modifierValue;
        } else {
            updatedValue -= modifierValue;
        }
    
        if (updatedCalibrations[updatedValue.toString()] && firstMatch === null) {
            firstMatch = updatedValue
        }
    
        updatedCalibrations[updatedValue.toString()] = 'merry xmas';
    
        return {
            startingValue: updatedValue,
            calibrations: updatedCalibrations
        };
    }, result);

    console.log('current frequency: ', result.startingValue);
}

console.log('repeated frequency: ', firstMatch);