let input = prompt(`enter your input`);
const todos = ['Kitten', 'cat'];

while (input != `quit`) {
    if (input === 'list') {
        console.log('*****************************')
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        console.log('*****************************')
    }
    else if (input === `new`) {
        let newTodos = prompt(`what do you want to add`);
        todos.push(newTodos);
        console.log(`${newTodos} added to list`);
    }
    else if (input === `delete`) {
        let index = parseInt(prompt(`which one do you want to delete?`));
        if (!Number.isNaN(index)) {
            const deleted=todos.splice(index, 1);
            console.log(`${deleted[0]} have been deleted`);
        } else {
            alert(`wrong index`);
        }
    }
    input = prompt('enter your input');
}