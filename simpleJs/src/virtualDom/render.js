const render =(virtualNode) => {
    const element = document.createElement(virtualNode.tagName);

    //setting the attributes taken from virtualNode
    Object.entries(virtualNode.attributes).forEach(([key,value]) => {
        element.setAttribute(key,value);
    });
   
    
    //setting the children of the virtualNode
    virtualNode.children?.forEach(child =>{
        const childrenOnDom = render(child);
        element.appendChild(childrenOnDom); 

    });
    return element;

}

export default render;