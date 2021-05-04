export const formatDate = (value?: Date) => {
  return value && value
    .toString()
    .split(/T/)
    .join(' à ')
    .replace(/\.(\w)+/, '');
}