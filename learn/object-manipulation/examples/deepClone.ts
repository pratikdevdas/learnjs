function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if obj is not an object
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)) as unknown as T; // Recursively clone array items
    }

    const clonedObj = {} as T; // Create a new object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone((obj as { [key: string]: unknown })[key]); // Recursively clone properties
        }
    }
    return clonedObj;
}
