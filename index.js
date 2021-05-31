// Code your solution here

function findMatching(drivers, string) {
    let array = [];
    drivers.filter(driver => {
        if (driver.toLowerCase() === string.toLowerCase()) {
            array.push(driver);
        };
    });
    return array; 
};

function fuzzyMatch(drivers, string) {
    let array = [];
    drivers.filter(driver => {
        if (driver.slice(0, 2) === string ) {
            array.push(driver);
        };
    });
    return array;
};

function matchName(drivers, string) {
    let array = [];
    drivers.filter(driver => {
        if (driver.name === string) {
            array.push(driver);
        };
    });
    return array; 
};