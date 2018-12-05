import ISquare from './ISquare';

export default interface IGrid {
    squares: ISquare;
    // getSquare(x: number, y: number): ISquare;
    addClaimToSquare(x: number, y: number, id: string): void;
};