function solution(str1, str2) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let arr_same = [];
  let arr_all = [];

  const word1 = str1.toLowerCase();
  const word2 = str2.toLowerCase();

  const word1_arr = [];
  const word2_arr = [];

  for (let i = 0; i < word1.length - 1; i++) {
    const first = word1.slice(i, i + 1);
    const second = word1.slice(i + 1, i + 2);
    if (alphabet.includes(first) && alphabet.includes(second)) {
      word1_arr.push(first + second);
    }
  }
    const word1_cnt = word1_arr.length

  for (let i = 0; i < word2.length - 1; i++) {
    const first = word2.slice(i, i + 1);
    const second = word2.slice(i + 1, i + 2);
    if (alphabet.includes(first) && alphabet.includes(second)) {
      word2_arr.push(first + second);
    }
  }
    const word2_cnt = word2_arr.length

  for (let i = 0; i < word1_arr.length; i++) {
    for (let j = 0; j < word2_arr.length; j++) {
      if (word1_arr[i] === word2_arr[j]) {
        arr_same.push(word1_arr[i]);
        word1_arr.splice(i, 1);
        word2_arr.splice(j, 1);
        i--; 
        break; 
      }
    }
  }
  

    if(word1_arr.length == 0 && word2_arr.length == 0){
        return 65536
    }
    console.log(arr_same)
    console.log("word1_cnt:",word1_cnt)
    console.log("word2_cnt:",word2_cnt)
    console.log("arr_same.length:", arr_same.length)
    return Math.floor((arr_same.length / (word1_cnt + word2_cnt - arr_same.length)) * 65536)
}
