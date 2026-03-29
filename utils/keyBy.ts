export default function keyBy<T>(
  collection: T[],
  iteratee: keyof T | ((item: T) => string | number | symbol),
): Record<string, T> {
  return collection.reduce(
    (result, item) => {
      const key =
        typeof iteratee === "function"
          ? iteratee(item)
          : (item[iteratee] as unknown as string | number | symbol);

      result[key.toString()] = item;
      return result;
    },
    {} as Record<string, T>,
  );
}
