export const my_display_alpha = () => {
    let result = "";
    const start = "a".charCodeAt(0);
    const end = "z".charCodeAt(0);

    for (let c = start; c <= end; ++c) {
        result += String.fromCharCode(c);
    }

    return result;
}