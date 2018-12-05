import IClaim from '../claims/IClaim';
import IGrid from '../grids/IGrid';

export default interface IFabric {
    addClaim(claim: IClaim): void;
    addClaims(claims: Array<IClaim>): void;
    getGrid(): IGrid;
};