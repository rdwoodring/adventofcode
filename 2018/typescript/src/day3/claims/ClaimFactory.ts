import IClaim from '../claims/IClaim';
import ElfClaim from '../claims/ElfClaim';

class ClaimFactory {
    getClaim(claimDetails: string): IClaim {
        const formattedClaim = claimDetails.split('#')
            .join('')
            .split(', ')
            .join(',')
            .split(': ')
            .join('|')
            .split(' @')
            .join('|')
            .split('x')
            .join(',')
            .split('|'),
            id = formattedClaim[0],
            x = Number(formattedClaim[1].split(',')[0]),
            y = Number(formattedClaim[1].split(',')[1]),
            height = Number(formattedClaim[2].split(',')[0]),
            width = Number(formattedClaim[2].split(',')[1]);

        // console.log(claimDetails);
        return new ElfClaim(id, x, y, height, width);
    }
}

export default ClaimFactory;