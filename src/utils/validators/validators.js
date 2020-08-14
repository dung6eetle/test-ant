
export const required = (value) => {
  if (value) return undefined;
  return "required";
};
export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `max ${maxLength} simbols`;
  return undefined;
};
