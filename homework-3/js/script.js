const arrStudents = [
    {
        name: 'Kirill',
        yearStart: 2006,
        yearEnd: 2009
    },
    {
        name: 'David',
        yearStart: 2003,
        yearEnd: 2008
    },
    {
        name: 'Petya',
        yearStart: 2006,
        yearEnd: 2009
    },
    {
        name: 'Ivan',
        yearStart: 2006,
        yearEnd: 2007
    },
    {
        name: 'Jora',
        yearStart: 2002,
        yearEnd: 2004
    }
];

function getResultOfStudents (arr) {
    if(arr.length === 0) {
        return 'matches is not found';
    } else {
        return arr;
    }
}

function getStudentFromYears (yearStart, yearEnd) {
    if (yearEnd >= yearStart) {
        let arrNamesStudents = arrStudents.map(item => {
            if(item.yearStart <= yearEnd && item.yearEnd >= yearStart ) {
                return item.name;
            }
        }).filter(item => item !== undefined);
        return getResultOfStudents(arrNamesStudents);
    }
    return 'param is not valid';
}

function getResultOfMax (obj) {
    if(Object.keys(obj).length === 0) {
        return 'object is empty, matches is not found'
    } else {
        return obj;
    }
}

function getMaxStudentFromYears (yearStart, yearEnd) {
    let objResult = {};
    let currentArrOfNames = [];
    let arrMaxValue = [];
    if (yearEnd >= yearStart) {
        for(let i = yearStart; i <= yearEnd; i += 1) {
                if (getStudentFromYears(i, i).length > 0 && typeof(getStudentFromYears(i, i)) !== 'string') {
                    currentArrOfNames = getStudentFromYears(i, i);
                } else {
                    continue;
                }
                if(arrMaxValue.length < currentArrOfNames.length) {
                    arrMaxValue = currentArrOfNames;
                    objResult = {};
                    objResult[i] = arrMaxValue;
                }
                if (arrMaxValue.length === currentArrOfNames.length) {
                    objResult[i] = arrMaxValue;
                }
            }
            return getResultOfMax(objResult);
        }
    return 'param is not valid'
}

