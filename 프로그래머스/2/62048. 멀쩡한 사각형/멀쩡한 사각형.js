function solution(w, h) {
  const small = w > h ? w : h
  
    let num = 0;
    for (let i = 1; i <= small; i++) {
      if (w % i == 0 && h % i == 0) {
        num = i;
      }
    }
    return w * h - (w / num + h / num - 1) * num;
  } 
