
function getElementByAttribute(attribute){
    var allElts = document.getElementsByTagName('*');
    var res = [];
    for(var i=0;i<allElts.length;i++){
        //allElts[i]
        if(allElts[i].getAttribute(attribute)){
            res.push(allElts[i]);
        }
    }
        return res;
    //return array of all element with this attribute
}