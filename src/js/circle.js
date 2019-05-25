export const area = function(r){  //모듈화 방법 1 - name으로 모듈화
  return Math.PI * r * r;
}

export const circumference = function(r) {
  return 2 * Math.PI * r;
}

//export {area,circumference}; 모듈화 방법 2