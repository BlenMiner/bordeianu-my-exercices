export const my_length_array = (arr) => {
    let len = 0;
    for (const _ in arr) ++len;
    return len;
}