export const my_size_alpha = (str) => {
    if (typeof str != 'string') {
        return 0;
    } else {
        let i = 0;
        while (str[i++] !== undefined);
        return i - 1;
    }
}