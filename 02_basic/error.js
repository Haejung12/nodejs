function callThreeTimes(callback)  {
    for (let i = 0; i< 3; i++)  {
        callback();
    }    
}

//정상실행
callThreeTimes(function  ()  { 
    console.log('안녕하세요');});

//예외발생
callThreeTimes();