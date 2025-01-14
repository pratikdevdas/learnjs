function mergeObjects<T extends object>(
    target: T,
    ...sources: Partial<T>[]
): T {
    return sources.reduce((acc, source) => {
        return Object.assign(acc, source);
    }, { ...target });
}

export default mergeObjects;
