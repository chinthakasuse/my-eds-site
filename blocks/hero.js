export default function decorate(block) {
    const [title, subtitle] = block.children;

    const container = document.createElement('div');
    container.className = 'hero-container';

    const h1 = document.createElement('h1');
    h1.textContent = title.textContent;

    const p = document.createElement('p');
    p.textContent = subtitle.textContent;

    container.append(h1, p);
    block.replaceWith(container);
}
