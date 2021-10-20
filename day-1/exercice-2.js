import { my_display_alpha } from "./exercice-1.js"

export const reverseString = (str) => {
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
    return reverseString(my_display_alpha());
}