export const my_display_comb = () => {
    const TOP = 100;
    let index = 0;
    let res = [];

    for (let i = 0; i < TOP; ++i) {
        for (let j = 0; j < TOP; ++j) {
            res[index++] = `${i} ${j}`;
        }
    }

    return res;
}