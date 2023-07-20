function find(array, toFindItem) {
    const [idenf, operator, content] = toFindItem.split(' ')
    let findedElement;
    for (const item of array) {
        const condition = eval(`item${idenf ? `.${idenf}` : ''} ${operator} ${content}`)
        if (condition) {
            findedElement = item;
            break;
        }
    }
    return findedElement;
}

const array = [
    { id: 1, content: "1" }, // tony
    { id: 2, content: "2" }, // tony
    { id: 1, content: "2" }, // tony
];
const finded = array.find(
    (
        tony // задаем имя
    ) => tony.id !== 1 // задаем условия поиска
);
const finded2 = find(array, 'id !== 1');
console.log(finded, finded2);
