type FilterFunction<T> = (key: keyof T, value: T[keyof T]) => boolean;

function filterKeys<T extends object>(
    obj: T,
    filterFn: FilterFunction<T>
): Partial<T> {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (filterFn(key as keyof T, value)) {
            acc[key as keyof T] = value;
        }
        return acc;
    }, {} as Partial<T>);
}

export default filterKeys;
