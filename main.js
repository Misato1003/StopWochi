//タイマー部
let stop;
let progress;
let addition = 0;
const record = document.querySelector("p.counter");

//カウンター
  //1,時間を取得する（startとstop)
function timer() {
const start = new Date().getTime();//スタート時間を取得する//
  //ストップ時間を取得する//
stop = setInterval(function() {
  //2,本当の時間がわかる//
progress = new Date().getTime() - start + addition;
  //3,時間を直す作業//
const noms = progress / 1000;
const millisecond = progress ? ("0" + String(noms).split(".")[1]).slice(-2) : "00";//millisecound秒に直す//
const nos = Math.trunc(noms);
const second = nos ? ("0" + (nos % 86400 % 3600 %60)).slice(-2) : "00";//秒に直す//
const minute = nos >= 60 ? ("0" + Math.trunc(nos % 86400 % 3600 / 60)).slice(-2) : "00";//分に直す//
const hour = nos >= 360 ? ("0" + Math.trunc(nos % 86400 / 3600)).slice(-2) : "00";//時間に直す//
  //4.時間の表記の仕方を統一する//
if (progress < 86400) {
record.textContent = hour + ":" + minute + "." + second + "." + millisecond; } else {
record.textContent = "00:00.00.00"; clearInterval(stop); }}, 10); }

// ボタン部
const startButton = document.querySelector("button.start");
const stopButton = document.querySelector("button.stop");
const resetButton = document.querySelector("button.reset");
stopButton.disabled = true; resetButton.disabled = true;

// スタート
startButton.addEventListener("click", function() {
progress = 0; timer(); startButton.disabled = true; stopButton.disabled = false; resetButton.disabled = false;　});
// ストップ
stopButton.addEventListener("click", function() {
clearInterval(stop); addition = progress; startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = false; });
// リセット
resetButton.addEventListener("click", function() {
clearInterval(stop); progress = 0; record.textContent = "00:00.00.00"; addition = 0; startButton.disabled = false; stopButton.disabled = true; resetButton.disabled = true; });

//スタートボタンの画面に触れたら、色が変わる//
function m_over( ){
  document.getElementById('start').style.backgroundColor="#ffffe0";
}

function m_out( ){
  document.getElementById('start').style.backgroundColor=null;
}

function m_down( ){
  document.getElementById('start').style.backgroundColor=null;
}

