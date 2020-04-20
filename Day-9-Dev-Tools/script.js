const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

console.log('Hello %s', 'world');

console.log('%c I am some great text', 'font-size: 10px; background: red;');

console.warn('OH NOO');

console.error('shit');

console.info('Crocodiles eat 3-4 people per year');

console.assert(1 === 2, 'You did not select the right Element');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

console.clear();

console.log(p);
console.dir(p);

console.clear();

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

console.count('Wes');

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);