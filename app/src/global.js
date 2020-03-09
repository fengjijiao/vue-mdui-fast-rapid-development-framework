function changeBodyClass(addRemoveClass, className) {
    const el = document.body
    if (addRemoveClass === 'addClass') {
        el.classList.add(className)
    } else {
        el.classList.remove(className)
    }
}

function toggleBodyClass(className) {
    const el = document.body
    el.classList.toggle(className)
}

//从[{"name":"golang","value":"456"}，...]到{name:"value"}
function formSerializeArrayToDict(formData) {
    var Dict = {};
    for(var i=0;i<formData.length;i++) {
        if(formData[i].value === "true") Dict[formData[i].name] = true
        else if(formData[i].value === "false") Dict[formData[i].name] = false
        else Dict[formData[i].name] = formData[i].value
    }
    return Dict
}

function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = window.innerWidth + window.scrollMaxX;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else {
        if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer
        if (document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body) { // other Explorers
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }
        }
    }
    var pageHeight, pageWidth;
    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }    
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = xScroll;
    } else {
        pageWidth = windowWidth;
    }
    var arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
    return arrayPageSize;
}

const isDesktop = getPageSize()[0] > 1000

export default {
    visitor: {
        isDesktop
    },
    changeBodyClass,
    toggleBodyClass,
    formSerializeArrayToDict,
    getPageSize
}