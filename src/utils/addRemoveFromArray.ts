export const addRemoveFromArray = <T, >(value: T, arr: T[]) => {
    const elementIndex = arr.findIndex((el) => el === value);

    if (elementIndex === -1) {
        arr.push(value);
    } else {
        arr.splice(elementIndex, 1);
    }

    return arr;
};
