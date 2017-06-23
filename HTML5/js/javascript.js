/*
 * JavasScript muli-line comment.
 */

// Single line comment.
function button(element) {
    var oldInnerHTML=element.innerHTML;
    element.innerHTML="Pressed";
    setTimeout(
        function(){
            element.innerHTML=oldInnerHTML
        }, 3000
    );
}

function dragOver(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("draggable-text").innerHTML="The dragging started.";
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

function getShortCutPrefix() {
    var isFirefox=/Firefox/g;
    if (isFirefox.test(navigator.userAgent)) {
        return "Alt+Shift+";
    } else {
        return"Alt+";
    }
}

function writeShortCut(accesskey) {
    var shortCut=getShortCutPrefix() + accesskey;
    document.write(shortCut);
}

function dragEnd(event) {
    document.getElementById("draggable-text").innerHTML="The dragging finished.";
}

