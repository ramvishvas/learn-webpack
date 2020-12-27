import './styles.scss';

class HelloWorldButton {
    render() {
        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = 'Hello World';
        buttonElement.className = 'hello-world-button';
        buttonElement.onclick = function () {
            const pElement = document.createElement('p');
            pElement.innerText = 'Hello World';
            pElement.className = 'hello-world-text';
            const body = document.querySelector('body');
            body.appendChild(pElement);
        };

        const body = document.querySelector('body');
        body.appendChild(buttonElement);
    }
}

export default HelloWorldButton;
