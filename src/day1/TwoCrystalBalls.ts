export default function two_crystal_balls(breaks: boolean[]): number {
    /**
     * Square root of n  = JumpAmount
     * then we jump the amount until we hit a true value in the array
     * then we lineary walk through the current jump until we meet the first true value in the array
     */
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        //Looking for the true value
        if (breaks[i]) {
            break;
        }
    }
    // Removes a jump to lineary walk up until the true value
    i -= jmpAmount;
    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
