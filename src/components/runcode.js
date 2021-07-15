/**
 * 
 * @param {number} num 转换数字
 * @param {number} stg 进制位数
 * @returns (*)(*) 结果形式
 */
 var convertToBaseStg = function(num, stg) {
  const result = (tonum, stg)=>{
    let nums = Math.abs(tonum);
    let str = ''
    if(tonum<0) {
      str = '-'
    }
    if(nums<stg) {
      return `(${tonum})`;
    }
    let arr = []
    while(nums/stg>=1) {
      arr.unshift(`(${nums%stg})`);
      nums /= stg
      nums = ~~nums;
    }
    arr.unshift(`(${nums})`)
    return `${str}${arr.join('')}`;
  }
  if(`${num}`.indexOf('.')!=-1) {
    let numArr = `${num}`.split('.');
    return `${result(Number(numArr[0]),stg)}.${result(Number(numArr[1]),stg)}`
  } else {
    return result(num, stg)
  }
};

console.log(convertToBaseStg(100, 7));


var a = {
  fn: function () {
    console.log(this);
  }
}

a.fn()

b =a.fn
b()