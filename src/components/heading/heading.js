import './styles.scss';

class Heading {
    h1Class = 'heading';

    render(pageName) {
        const h1Element = document.createElement('h1');
        h1Element.innerHTML = 'Webpack is Awesome : ' + pageName;
        h1Element.classList.add(this.h1Class);
        const body = document.querySelector('body');
        body.appendChild(h1Element);
    }
}

export default Heading;
