export const isValidPk = (value: string) => {
  // TODO: Algoritmo de formato
  const regex = /^pk_test/;
  return regex.test(value);
}