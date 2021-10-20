export const my_string_is_number = (str) => {
    return !isNaN(str) && !isNaN(parseInt("" + str));
}