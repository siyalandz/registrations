function FactoryReg() {
    var regList = [];

    function addReg(reg) {
        
        regList.push(reg);
    }

    function getList() {
    return regList
    }

    function filter(towns) {
        console.log(towns);
        var newList = [];
        for (var i = 0; i < regList.length; i++) {
            let currentReg = regList[i];
            if (currentReg.startsWith(towns)) {
                newList.push(currentReg);
            }
        }
        return newList;
    }
   

    function getRegN() {
        return regN;
    }

    return {
        addReg,
        getList,
        filter,
        getRegN
    }


}