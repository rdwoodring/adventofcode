import inputs from "./day3-inputs";

import FabricGrid from "./grids/FabricGrid";
import PrototypeFabric from "./fabrics/PrototypeFabric";

import ClaimFactory from "./claims/ClaimFactory";

const claimFactory = new ClaimFactory(),
  fabricGrid = new FabricGrid(1000, 1000),
  fabric = new PrototypeFabric(fabricGrid),
  claims = inputs.map(input => {
    return claimFactory.getClaim(input);
  });

fabric.addClaims(claims);

let singleClaimSquares = Object.keys(fabric.getGrid().squares).filter(
    (id: string) => {
        if (fabric.getGrid().squares[id].length === 1) {
            return true;
        }
    }),
    multiClaimSquares = Object.keys(fabric.getGrid().squares).filter(
        (id: string) => {
            if (fabric.getGrid().squares[id].length > 1) {
                return true;
            }
        }),
    singleClaimIds = singleClaimSquares.reduce((accumulator: {[s:string]: string}, squareId: string) => {
        fabric.getGrid().squares[squareId].forEach((id) => {
            accumulator[id] = 'merry xmas';
        });

        return accumulator;
    }, {}),
    multiClaimIds: {[s:string]: string} = multiClaimSquares.reduce((accumulator: { [s: string]: string }, squareId: string) => {
        fabric.getGrid().squares[squareId].forEach((id) => {
            accumulator[id] = 'merry xmas';
        });

        return accumulator;
    }, {}),
    lonelyClaim = Object.keys(singleClaimIds).filter((claimId: string) => {
        if (!multiClaimIds[claimId]) {
            return claimId;
        }
    });

console.log(lonelyClaim);