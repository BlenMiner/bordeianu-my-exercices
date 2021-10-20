export const my_display_combv2 = () => {
    let a = 0;
    let b = 1;
    let c = 2;

    let res = [];

    let index = 0;

    while (a <= 7 && b <= 8 && c <= 9) {
        res[index++] = `${a} ${b} ${c}`;

        c += 1;

        if (c > 9) {
            b += 1;
            if (b >= 9) {
                a += 1;
                b = a + 1;
            }
            c = b + 1;
        }
    }

    return res;
}