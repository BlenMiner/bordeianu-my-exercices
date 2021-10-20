import { my_display_alpha } from "./exercice-1.js"

export const reverseString = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

export const my_display_alpha_reverse = () => {
    return reverseString(my_display_alpha());
}