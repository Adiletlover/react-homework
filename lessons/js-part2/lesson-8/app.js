const numberList = [1,2,3,4,5,6,7,8,9,10];
const getTwiceDigits = (arraylist) => {
    const result = [];
    for (let numberValue of arraylist){
        if(numberValue%2==0){
            result.push(numberValue)
        }
    }
    return result ;
}

const twiceDigits = getTwiceDigits(numberList)
// console.log(twiceDigits);

const moviedata = [
    {
        title: "Harry Poter",
        type: "film",
        id: 11
    },
    {
        title: "God of War",
        type: "game",
        id: 12

    },
    {
        title: "War and Piece",
        type: "book",
        id: 13

    }, 
    {
        title: "Avatar",
        type: "film",
        id: 14

    },
    {
        title: "Elden Ring",
        type: "game",
        id: 15

    },
    {
        title: "Martin Eden",
        type: "book",
        id: 16

    }
]
const getFilteredItems = (datalist, category) => {
    const movies = datalist.filter(element => element.type === category);
    return movies;
};
const films = getFilteredItems(moviedata, "game");
console.log(films);
const changeItem = (datalist, dataId) => {
    const result = []
    const titleText = "Change";
    for(let item of datalist){
        if(item.id === dataId){
            const newItem ={
                ...item,
                title:titleText
            }
            result.push(newItem)
            continue;
        }

        result.push(item)
    }

    return result;
}
const changeItems = changeItem(moviedata, 12)
console.log(changeItems);
const changed = changeItem(moviedata, 11)
console.log(changed);