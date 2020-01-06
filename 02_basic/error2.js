function callThreeTimes(callback)  {
    if(callback)  {
    for (let i = 0; i< 3; i++)  {
        callback();
    }    
}  else  {
    console.log('매개 변수 callback이 지정되지 않았습니다');
}
}

//정상실행
callThreeTimes(function  ()  { 
    console.log('안녕하세요');});

//예외발생
callThreeTimes();