function customRender(reactElement, container) {
    //   const domElemnt = document.createElement(reactElement.type);
    //   domElemnt.innerHTML = reactElement.children;
    //   domElemnt.setAttribute('href',reactElement.prompt.href);
    //   domElemnt.setAttribute("target",reactElement.prompt.target);
    //   container.appendChild(domElemnt);

    const domElemnt = document.createElement(reactElement.type);
    domElemnt.innerHTML = reactElement.children;
    for (const prop in props) {
        if (prop === 'children') continue;
        domElemnt.setAttribute(prop, reactElement.prompt[prop]);
    }
    container.appendChild(domElemnt);
}

const reactElement = {
    type: 'a',
    prompt: {
        href: 'http://google.com',
        target: '_blank',
    },
    children: 'click me'
}

const mainContainer = document.querySelector('.root');

customRender(reactElement, mainContainer);