// problem 1
function gariThelaCondition(age, height) {
    if (age>18 && height>60) {
        console.log(`${age} ar ${height} tai gari thelbe`);
    } else {
        console.log("gari te bose thakbe");
    }
}
gariThelaCondition(20,90)

//problem two 
function admissionQualify(mathScore,englishScore) {
    if (mathScore>80 || englishScore>85) {
        console.log("admission er joggota ache");
    } else {
        console.log("toke biye diye dibo");
    }
}
admissionQualify(5,90)

//problem 3
function kormaRanna(numberOfDim,isMurgi) {
    if (numberOfDim>12||isMurgi==false) {
        console.log("korma ranna korbo");
    } else {
        console.log("pouruti korma khabo");
    }
}
kormaRanna(23,true)