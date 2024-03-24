

function getStudentGrade(studentsmarks){
    if(studentsmarks>79 && studentsmarks <=100){
        return "A"
    }
    else if (studentsmarks >=60 && studentsmarks<=79){
        return "B"
    }
    else if (studentsmarks>=49 && studentsmarks<=59){
        return "C"
    }
    else if (studentsmarks>=40 && studentsmarks <=49){
        return "D"
    }
    else if(studentsmarks<40 && studentsmarks>=0){
        return "E"
    }
    else{
        return"please input between 0 and 100"
    }
}
console.log(getStudentGrade(80))
