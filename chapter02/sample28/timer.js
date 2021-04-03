let timer = () => {
  let now = new Date();
  document.getElementById('timer').innerHTML =
    `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }
  //setIntervalの２番目の引数はミリビョウ。この時は、0.5秒になる。
  //やりたい処理を関数にまとめて、やりたい間隔を指定する。
  let timerID = setInterval(timer, 500);
  // clearInterval(timerID);
