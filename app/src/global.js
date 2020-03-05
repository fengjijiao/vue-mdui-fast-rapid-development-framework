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

export default {
    changeBodyClass,
    toggleBodyClass,
    formSerializeArrayToDict
}