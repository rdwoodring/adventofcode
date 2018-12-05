import IGrid from './IGrid';
import ISquare from './ISquare';

class FabricGrid implements IGrid {
    public squares: ISquare;

    constructor(width: number, height: number) {
        this.squares = {};

        for (let w = 0; w <= width; w++) {
            for (let h = 0; h <= height; h++) {
                this.squares[w.toString() + 'x' + h.toString()] = [];
            }
        }
    }

    addClaimToSquare(x: number, y: number, id: string) {
        const gridLocationKey = x.toString() + 'x' + y.toString();

        
        this.squares[gridLocationKey].push(id);
        // console.log(id);
    }
    // getSquare(x: number, y: number): ISquare {
    //     return this.squares[x.toString() + 'x' + y.toString()];
    // }
};

export default FabricGrid;