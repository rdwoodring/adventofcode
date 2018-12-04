import inputs from './day2-inputs';

interface IChecksumInputs {
    twos: number;
    threes: number;
}

interface ICharacterCounts {
    [s: string]: number
}

let checksumInputs : IChecksumInputs = {
        twos: 0,
        threes: 0
    },
    checksum;

checksumInputs = inputs.reduce((accumulator: IChecksumInputs, id: string) => {
    const split: Array<string> = id.split(''),
        counts: ICharacterCounts = split.reduce((countsAccumulator: ICharacterCounts, character: string) => {
            if (countsAccumulator[character]) {
                countsAccumulator[character]++;
            } else {
                countsAccumulator[character] = 1;
            }

            return countsAccumulator;
        }, {});

        let hasTwo = false,
            hasThree = false;

        console.log(counts);

        Object.keys(counts)
            .forEach((character) => {
                if (counts[character] === 2) {
                    hasTwo = true;
                } else if (counts[character] === 3) {
                    hasThree = true;
                }
            });

        if (hasTwo) {
            checksumInputs.twos++;
        }

        if (hasThree) {
            checksumInputs.threes++;
        }

        return checksumInputs;
}, checksumInputs);

console.log(checksumInputs);
checksum = checksumInputs.twos * checksumInputs.threes;

console.log(checksum);