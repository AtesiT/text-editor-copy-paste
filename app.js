// Элементы
const elements = document.querySelectorAll('.btn'); // выбрать все классы с .btn












// События

// метод Foreach позволяет запускать функцию для каждого элемента массива
elements.forEach(element => { 
    // если щелчок по кнопке, то запускается один из методов
    element.addEventListener('click', () => {
        // 
        let command = element.dataset['element']

        if (command == 'createLink' || command == 'insertImage') {
            let url = prompt('Введите ссылочку:', 'http://')
            document.execCommand(command, false, url);
        } else { // если ссылка, срабатывает сверху и просит ввести ссылку, если нет снизу
            document.execCommand(command, false, null);
        }      
    });
})