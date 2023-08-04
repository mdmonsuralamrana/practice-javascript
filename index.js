//radian to degree converter 

const radianToDegree = (radian) => {
    const degree = radian * 57.29;
    return degree;
}

const dataToDegree = 10;
const degreeData = radianToDegree(dataToDegree);
console.log(degreeData);

// miles to kilometer converter 

const milesToKilometer = (miles) => {
    let km = miles / 1.60934;
    return km;
}

const mile = 10;
const mileConverter = milesToKilometer(mile);
console.log(mileConverter);

// check odd and even number

const oddEvenChecker = (num) => {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false
    }
}

const isThatTrue =  oddEvenChecker(300);
console.log(isThatTrue);