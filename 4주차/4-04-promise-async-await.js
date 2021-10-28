/*
    React 심화 1
    01 비동기 통신과 Promise
*/

/* Promise.Any */
const testData = [1,2,3,4,5];

const fetchDataSuccess = (data) => data;
const fetchDataFail = (data) => {
    throw 'fetch error'
}

const getAnyData = (dataList, fetchFunc) => {
    Promise.any(dataList) 
    .then((data) => {
        const getData = fetchFunc(data);
        console.log(`가져온 데이터: ${getData}`)
    })
    .catch((exception) => {
        console.log(exception);
    });
}

// 성공
getAnyData(testData, fetchDataSuccess);

// 실패
getAnyData(testData, fetchDataFail);

// 한개라도 성공하면 success


/* async / await Pattern */


