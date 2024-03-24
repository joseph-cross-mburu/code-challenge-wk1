function getDemeritPoints(speedofcar){
    const speedlimit = 70
    let demeritpoints = Math.floor((speedofcar-speedlimit)/5);
    if(speedofcar <= speedlimit){
        return "Ok"
    }else if(demeritpoints>12){
        return "license suspended"
    }else if(demeritpoints>0){
        return `${demeritpoints} points`
    }
}
console.log(getDemeritPoints(456273687))
