import elementCreator from "./virtualDom/elementCreator";
import render from "./virtualDom/render";
import mount from "./virtualDom/mount"
const virtualApp = elementCreator("div",{
    attributes:{
        id:"app"
    },
    children:[
        elementCreator("img",{attributes:{
            src:"https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif"
           }})
    ]
});

const appEntry = render(virtualApp);
mount(appEntry,document.getElementById("entryPoint"));
console.log(appEntry);
    
