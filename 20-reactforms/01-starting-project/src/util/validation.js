export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  if (typeof value !== 'string') {
    return false;
  }
  return value.trim() !== '';
}
export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualToOtherValue(value, otherValue) {
  return value === otherValue;
}