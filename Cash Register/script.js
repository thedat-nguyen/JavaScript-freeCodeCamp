function checkCashRegister(price, cash, cid) {
    let currencyUnit = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .1,
      "QUARTER": .25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }
    let changeDue = cash - price
    let totalCID = Number(cid.reduce((sum,element) => sum + element[1],0).toFixed(2))
  
    if(totalCID < changeDue){
      return {status:"INSUFFICIENT_FUNDS", change: []}
    }else if(totalCID == changeDue){
      return {status: "CLOSED", change: cid}
    }else{
      let changeArr = []
  
      for(let i = cid.length - 1; i >= 0; i--){
        let currencyUnitName = cid[i][0]
        let currencyUnitValueTotal = cid[i][1]
        let currencyUnitValue = currencyUnit[currencyUnitName]
        let currencyUnitAmount = Number((currencyUnitValueTotal / currencyUnitValue).toFixed(0))
        let currencyUnitsToReturn = 0
  
        while(changeDue >= currencyUnitValue && currencyUnitAmount > 0){
          changeDue -= currencyUnitValue
          changeDue = Number(changeDue.toFixed(2))
          currencyUnitAmount--
          currencyUnitsToReturn++
        }
        if(currencyUnitsToReturn > 0){
          changeArr.push([currencyUnitName,currencyUnitsToReturn *  currencyUnitValue])
        }
      }
      if(changeDue > 0){
            return {status:"INSUFFICIENT_FUNDS", change: []}
      }
      return {status:"OPEN", change: changeArr}
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);