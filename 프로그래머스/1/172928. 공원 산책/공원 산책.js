function solution(park, routes) {
  const row = park.length;
  const col = park[0].length;
  let a = 0;
  let b = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (park[i][j] === "S") {
        a = i;
        b = j;
        break;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    let nA = a;
    let nB = b;

    if (routes[i][0] === "N") {
      nA -= parseInt(routes[i].substring(1));
    } else if (routes[i][0] === "S") {
      nA += parseInt(routes[i].substring(1));
    } else if (routes[i][0] === "W") {
      nB -= parseInt(routes[i].substring(1));
    } else if (routes[i][0] === "E") {
      nB += parseInt(routes[i].substring(1));
    }

    if (nA < 0 || nA >= row || nB < 0 || nB >= col) {
      continue;
    }

    if (routes[i][0] === "N") {
      for (let j = 1; j <= parseInt(routes[i].substring(1)); j++) {
        if (park[a - j][b] === "X") {
          break;
        }
        if (j === parseInt(routes[i].substring(1))) {
          a = nA;
          b = nB;
        }
      }
    } else if (routes[i][0] === "S") {
      for (let j = 1; j <= parseInt(routes[i].substring(1)); j++) {
        if (park[a + j][b] === "X") {
          break;
        }
        if (j === parseInt(routes[i].substring(1))) {
          a = nA;
          b = nB;
        }
      }
    } else if (routes[i][0] === "W") {
      for (let j = 1; j <= parseInt(routes[i].substring(1)); j++) {
        if (park[a][b - j] === "X") {
          break;
        }
        if (j === parseInt(routes[i].substring(1))) {
          a = nA;
          b = nB;
        }
      }
    } else if (routes[i][0] === "E") {
      for (let j = 1; j <= parseInt(routes[i].substring(1)); j++) {
        if (park[a][b + j] === "X") {
          break;
        }
        if (j === parseInt(routes[i].substring(1))) {
          a = nA;
          b = nB;
        }
      }
    }
  }

  return [a, b];
}
