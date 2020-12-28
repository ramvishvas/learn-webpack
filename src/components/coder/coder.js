import CoderImage from '../../../assets/coder.jpg';
import './styles.scss';

class Coder {
    render() {
        const imgElement = document.createElement('img');
        imgElement.src = CoderImage;
        imgElement.alt = 'coder-image';
        imgElement.classList.add('coder-image');
        const body = document.querySelector('body');
        body.appendChild(imgElement);
    }
}

export default Coder;
