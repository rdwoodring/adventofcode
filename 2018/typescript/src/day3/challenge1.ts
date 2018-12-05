import inputs from './day3-inputs';

import FabricGrid from './grids/FabricGrid';
import PrototypeFabric from './fabrics/PrototypeFabric';

import ClaimFactory from './claims/ClaimFactory';

const claimFactory = new ClaimFactory(),
    fabricGrid = new FabricGrid(1000, 1000),
    fabric = new PrototypeFabric(fabricGrid),
    claims = inputs.map((input) => {
        return claimFactory.getClaim(input);
    });

fabric.addClaims(claims);

// console.log(fabric.getGrid().squares);

let multiClaimSquares = Object.keys(fabric.getGrid().squares)
    .filter((id: string) => {
        if (fabric.getGrid().squares[id].length > 1) {
            return true
        }
    });

console.log(multiClaimSquares);
console.log(multiClaimSquares.length);
// console.log(fabric.getGrid());

// console.log(claims);