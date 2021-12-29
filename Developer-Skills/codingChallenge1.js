const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}C in ${i + 1} days `;
  }
  str += ' ...';
  console.log(str);
};

data1 = [17, 21, 23];
data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
