import IFabric from './IFabric';
import IGrid from '../grids/IGrid';
import IClaim from '../claims/IClaim';

class PrototypeFabric implements IFabric {
    private grid: IGrid;

    constructor(grid: IGrid) {
        this.grid = grid;
    }

    addClaim(claim: IClaim) {
        // console.log('adding claim ', claim.id);

        // console.log(claim.id, claim.x, claim.width, claim.y, claim.height);
        for (let x = claim.x; x < claim.x + claim.width; x++) {
            for (let y = claim.y; y < claim.y + claim.height; y++) {
                this.grid.addClaimToSquare(x, y, claim.id);
            }
        }
    }

    addClaims(claims: Array<IClaim>) {
        // console.log(claims.length)
        claims.forEach((claim) => {
            this.addClaim(claim);
        });
    }

    getGrid() {
        return this.grid;
    }
};

export default PrototypeFabric;