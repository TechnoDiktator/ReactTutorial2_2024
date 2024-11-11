
export function isEmail(value) {
    return value.iscludes('@')
}


export function isNotEmpty(value) {
    return value.trim() !== ''
}


export function hasMinLength(value , minLength) {
    return value.trim().length > minLength
}


export function isEqualToOtherValues(value , othervalue) {

    return value === othervalue
}