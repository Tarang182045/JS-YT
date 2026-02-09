const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());    it will give evry second time interval 
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);