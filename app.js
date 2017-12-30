

const closeButton = document.querySelector('.alert button');

//---x-axis
var days = [ '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31' ]

//---y-axis
var traffic = [ 500, 1000, 1500, 2000, 2500 ]

//---data
var trafficData = [ 768, 1000, 800, 1500, 2000, 1680, 1800, 1300, 1700, 2500, 2300, 2200]



var ctx = document.getElementById("myChart");



function chart() {
  var myChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    maintainAspectRatio: 'false',

    data: {

      labels: days,
      datasets: [
        {
          label: 'Weekly',
          label: 'monthly',

          data: trafficData,
          lineTension: 0,
          backgroundColor: 'rgba(221, 219, 234, .7)',
        }
      ]
    }
  });
}
chart();



//
// function chartLoad() {
//   var chartDiv = document.querySelector('#myChart');
//
//   if (window.innerWidth > 600) {
//     chartDiv.setAttribute('width', 1000);
//     chartDiv.setAttribute('height', 250);
//
//   } else {
//     chartDiv.setAttribute('width', 500);
//     chartDiv.setAttribute('height', 250);
//
//   }
// }
//
// function chartResize() {
//   var chartDiv = document.querySelector('#myChart');
//
//   if (window.innerWidth > 600) {
//     chartDiv.setAttribute('width', 1000);
//     chartDiv.setAttribute('height', 250);
//     chart();
//
//
//   } else {
//     chartDiv.setAttribute('width', 500);
//     chartDiv.setAttribute('height', 250);
//     chart();
//   }
// }
//
// chartLoad();
// chart();
//
// window.onresize = chartResize;


window.addEventListener('load', setTimeout(function (e) {
  const a = document.querySelector('.alert');
  a.style.display = 'flex';
}, 2000));

closeButton.addEventListener('click', function() {
  const a = document.querySelector('.alert');
  a.style.display = 'none';
});
