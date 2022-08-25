export default (virtualNode,actualNode) =>{
    actualNode.replaceWith(virtualNode);
    return virtualNode;
}