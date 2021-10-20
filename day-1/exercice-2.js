export const my_display_alpha_reverse = () => {
    let result = "";
    const start = "a".charCodeAt(0);
    const end = "z".charCodeAt(0);

    for (let c = end; c >= start; --c) {
        result += String.fromCharCode(c);
    }

    console.log(result);
}