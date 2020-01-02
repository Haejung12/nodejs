let now = new Date();

//2020-01-02  13:24
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

let currentHour =12;
//let currentHour = now.getHours();
if(currentHour >= 12) {
    console.log('오후' + (currentHour-12) + '시');
}
else {
    console.log('오전' + correntHour + '시')
}

if(currentHour >= 12) {
    console.log('오후 ${currentHour-12} 시');
}
else {
    console.log('오전 ${correntHour}시');
}



let apm = '오전';
if(currentHour >= 12) {
  apm = '오후';
  if(currentHour >= 13) {
    currentHour -= 12;
  }
    
}
apm = currentHour >= 12 ? '오후' : '오전';
currentHour = currentHour >= 13 ? currentHour-12 : currentHour;
    console.log(` ${apm} ${currentHour} 시`);
