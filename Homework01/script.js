'use strict';

// Task 1
console.log('Task 1');
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Task 2
console.log('\n\nTask 2');
const createCounter = () => {
    return {
        count: 0,
        increment() { this.count++ },
        decrement() { this.count-- },
        printLog() { console.log(`Count: ${this.count}`) }
    };
}

const counter = createCounter();
counter.increment();
counter.printLog();
counter.increment();
counter.printLog();
counter.decrement();
counter.printLog();

// Task 3
console.log('\n\nTask 3');
const findElementByClass = (root, findClass) => {
    if (root.classList.contains(findClass)) {
        return root;
    };
    const children = Array.from(root.children);
    for (let i = 0; i < children.length; i++) {
        const findEl = findElementByClass(children[i], findClass);
        if (findEl != undefined) {
            i = children.length;
            return findEl;
        };
    }
};

const rootElement = document.querySelector('.container');
const targetElement = findElementByClass(rootElement, 'text');
console.log(targetElement);