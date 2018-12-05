import IClaim from './IClaim';

class ElfClaim implements IClaim {
    public id: string;
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor(id: string, x: number, y: number, width: number, height: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
};

export default ElfClaim;