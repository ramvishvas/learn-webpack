import './styles.scss';

class HelloWorldButton {
    buttonClass = 'hello-world-button';
    textClass = 'hello-world-text';

    render() {
        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = 'Hello World';
        buttonElement.classList.add(this.buttonClass);
        buttonElement.onclick = () => {
            const pElement = document.createElement('p');
            pElement.innerText = 'Hello World';
            pElement.classList.add(this.textClass);
            const body = document.querySelector('body');
            body.appendChild(pElement);
        };

        const body = document.querySelector('body');
        body.appendChild(buttonElement);
    }
}

export default HelloWorldButton;
