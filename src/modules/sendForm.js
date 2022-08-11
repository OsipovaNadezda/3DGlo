const sendForm = ({
    formId,
    someElement = []
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const successText = 'Спасибо! В ближайшее время с Вами свяжется наш менеджер.';
    const errorText = 'Ошабка загрузки...';

    const validate = (list) => {
        let success = true;

        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    };

    const submitForm = () => {

        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        someElement.forEach(e => {
            const element = document.getElementById(e.id);

            if (e.type === 'block') {
                formBody[e.id] = element.textContent;
            } else if (e.type === 'input') {
                formBody[e.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    formElements.forEach(e => {
                        e.value = '';
                    });
                    statusBlock.textContent = successText;
                }).catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert('Данные  не валидны!!!');
        }
    };

    try {
        if (!form) {
            throw new Error('Упс, а формы нет ):');
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;