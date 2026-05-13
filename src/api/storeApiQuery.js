export const apiQuery = `{
    items(types: [injectors, meds]) {
        id
        name
        description
        basePrice
        iconLink
        image512pxLink
        types
    }
}`;
