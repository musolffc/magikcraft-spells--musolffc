const magik = magikcraft.io;

function remember(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}


function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}