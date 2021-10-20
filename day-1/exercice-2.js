import { my_display_alpha } from "./exercice-1.js"

export const reverse_string = (str) => {
    var result = "";
    let i = 0;

    while (str[i] !== undefined)
    {
        result = str[i] + result;
        ++i;
    }   

    return result;
}

export const my_display_alpha_reverse = () => {
    return reverse_string(my_display_alpha());
}