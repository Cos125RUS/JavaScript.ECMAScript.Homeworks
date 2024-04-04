const url = 'https://dog.ceo/api/breeds/image/random'
const containerEl = document.querySelector('div.container');

const getDog = async (url) => {
    try {
        const response = await fetch(url);
        const dogs = response.json();
        return dogs;
    } catch (error) {
        console.error(error.message);
    }
}

const printDog = (dog) => {
    if (containerEl.children.length > 0) 
        containerEl.removeChild(containerEl.children[0]);
    containerEl.insertAdjacentHTML('beforeend', `<img src="${dog.message}">`)
}

for (let index = 0; index < 10; index++) {
    const dog = await getDog(url);
    setTimeout(() => printDog(dog), 3000 * index);
}

