export const my_is_posi_neg = (nbr) => {
    if (typeof nbr !== 'number' || nbr === 0) {
        return "NEUTRAL";
    }
    else
    {
        if (nbr < 0) {
            return "NEGATIF";
        } else {
            return "POSITIF";
        }
    }
}