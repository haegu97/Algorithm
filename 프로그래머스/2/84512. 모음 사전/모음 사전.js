function solution(word) {
  let vowel = ["A", "E", "I", "O", "U"];
  let arr = [];

  const dfs = (cur) => {
    if (cur.length > 5) return;

    arr.push(cur);

    for (let i = 0; i < vowel.length; i++) {
      dfs(cur + vowel[i]);
    }
  };

  dfs("");

  return arr.indexOf(word);
}
