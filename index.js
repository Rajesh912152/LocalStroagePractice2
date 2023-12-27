let inputEl=document.getElementById('areaId');
let saveBtn=document.getElementById('save');
let clearBtn=document.getElementById('clear')

saveBtn.onclick=function(){
    inputElValue=inputEl.value
    localStorage.setItem('inputValue',inputElValue)

}
clearBtn.onclick=function(){
    localStorage.removeItem('inputValue')
}
inputEl.value=localStorage.getItem('inputValue')