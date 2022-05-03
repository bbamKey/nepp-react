// map함수: 배열을 수정해서 새로운 배열을 만들 때
// filter함수 : 배열에서 특정 조건을 만족하는
//              요소만 뽑아서 새로운 배열을 만들때
// forEach, reduce

const map = (cb) => {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i));
  }
  return arr;
};

const arr = [1, 2, 3];

const callback = (e, i) => {
  return e * 2;
};

const newArr = arr.map(callback);
// [2,4,6]

const filter = (cb) => {
  const array = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      array.push(this[i]);
    }
  }

  return array;
};

const newArr2 = arr.filter((e) => {
  return e === 3;
});
// [3];

const forEach = (cb) => {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i);
  }
};
