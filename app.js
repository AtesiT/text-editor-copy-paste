// Элементы
const elements = document.querySelectorAll('.btn'); // выбрать все классы с .btn












// События

// метод Foreach позволяет запускать функцию для каждого элемента массива
elements.forEach(element => { 
    // если щелчок по кнопке, то запускается один из методов
    element.addEventListener('click', () => {
        // 
        let command = element.dataset['element']

        document.execCommand(command, false, null)
    });
})