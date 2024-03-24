getNetSalary(90000)
function calculateTax(basicsalary){
    if(basicsalary<=24000){
        tax=0.01*basicsalary
        return tax
    }else if(basicsalary>=24001 && basicsalary<=32333){
        tax=0.25*basicsalary
        return tax
    }else if(basicsalary>=32334&&basicsalary<=500000){
        tax=0.3*basicsalary
        return tax
    }else if(basicsalary>=500001&&basicsalary<=800000){
        tax=0.325*basicsalary
        return tax
    }else if(basicsalary>800000){
        tax=0.35*basicsalary
        return tax
    }
}

function getNHIFDeductions(basicsalary){
    if(basicsalary<=5999){
        NHIF=150
        return NHIF
    }
    else if(basicsalary>=6000&&basicsalary<=7999){
        NHIF=300
        return NHIF
    }
    else if(basicsalary>=8000&&basicsalary<=11999){
        NHIF=400
        return NHIF
    }
    else if(basicsalary>=12000&&basicsalary<=14999){
        NHIF=500
        return NHIF
    }
    else if(basicsalary>=15000&&basicsalary<=19999){
        NHIF=600
        return NHIF
    }
    else if(basicsalary>=20000&&basicsalary<=24999){
        NHIF=750
        return NHIF
    }
    else if(basicsalary>=25000&&basicsalary<=2999){
        NHIF=850
        return NHIF
    }
    else if(basicsalary>=30000&&basicsalary<=34999){
        NHIF=900
        return NHIF
    }
    else if(basicsalary>=35000&&basicsalary<=3999){
        NHIF=950
        return NHIF
    }
    else if(basicsalary>=40000&&basicsalary<=44999){
        NHIF=1000
        return NHIF
    }
    else if(basicsalary>=45000&&basicsalary<=49999){
        NHIF=1100
        return NHIF
    }
    else if(basicsalary>=50000&&basicsalary<=59999){
        NHIF=1200
        return NHIF
    }
    else if(basicsalary>=60000&&basicsalary<=69999){
        NHIF=1300
        return NHIF
    } else if(basicsalary>=70000&&basicsalary<=79999){
        NHIF=1400
        return NHIF
    } else if(basicsalary>=80000&&basicsalary<=89999){
        NHIF=1500
        return NHIF
    } else if(basicsalary>=90000&&basicsalary<=99999){
        NHIF=1600
        return NHIF
    } else if(basicsalary>=100000){
        NHIF=1700
        return NHIF
    }

}

function getNSSFDeduction(basicsalary){
 NSSF = 0.06*basicsalary
return NSSF
}


function getGrossSalary(basicsalary){
    const personalMonthlytRelief = 5000
    const personalInsuaranceRelief = 5000
    monthlygrosssalary=basicsalary+personalInsuaranceRelief+personalInsuaranceRelief
    return monthlygrosssalary
}


function getNetSalary(basicsalary){
    let grosssalary=getGrossSalary(basicsalary)
    let NSSF=getNSSFDeduction(basicsalary)
    let NHIF=getNHIFDeductions(basicsalary)
    let tax=calculateTax(basicsalary)
    netsalary=((monthlygrosssalary)-(NHIF+NSSF+tax))
    return netsalary

}
console.log("TAX:",tax,"NHIF:",NHIF,"NSSF:",NSSF,"GROSS SALARY:",monthlygrosssalary,"NET SALARY:",netsalary)