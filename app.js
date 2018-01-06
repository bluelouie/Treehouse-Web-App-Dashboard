

var closeButton = document.querySelector('.alert button');
var send = document.querySelector('.send');

function messageConfirm() {
  var user = document.querySelector('.user');
  var userMessage = document.querySelector('.message');
  var errorMessage = document.querySelector('selector');
  var para = document.createElement("h4");
  var element = document.querySelector('.data--messager');

  if (user.value == '' || userMessage.value == '') {
    var node = document.createTextNode("Error, please check your message again!");
    para.appendChild(node);
    para.classList.add('error')

    element.appendChild(para);
  } else {
    var node = document.createTextNode("Message succesful!");
    para.appendChild(node);
    para.classList.add('success')

    element.appendChild(para);
  }
  setTimeout(function () { para.remove(para); }, 3000);
}




send.addEventListener('click', messageConfirm);

window.addEventListener('load', function() {
  const a = document.querySelector('.alert');
  setTimeout(function () {a.style.display = 'flex';}, 2000);
});

closeButton.addEventListener('click', function() {
  const a = document.querySelector('.alert');
  a.style.display = 'none';
});



// LineChart-----------------------------------------------------------------------------------------------------------------------------------------------

//---x-axis
var days = [ '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31' ]

//---y-axis
var traffic = [ 500, 1000, 1500, 2000, 2500 ]

//---data
var trafficData = [ 768, 1000, 800, 1500, 2000, 1680, 1800, 1300, 1700, 2500, 2300, 2200]


var ctx = document.getElementById("myLineChart");

var data = {
  labels: days,
  datasets: [{
    label: "'Weekly'",
    backgroundColor: 'rgba(221, 219, 234, .7)',
    borderColor: 'rgba(221, 219, 234, .7)',
    borderWidth: 2,
    hoverBackgroundColor: 'rgba(221, 219, 234, .7)',
    hoverBorderColor: 'rgba(221, 219, 234, .7)',
    data: trafficData,
    lineTension : 0,
    pointBackgroundColor: 'white',
  }]
};

var options = {
  maintainAspectRatio: false
};

var myLineChart = new Chart(ctx, {
  type: 'line',
  options: options,
  data: data
});

// LineChart-----------------------------------------------------------------------------------------------------------------------------------------------

// Bar chart-----------------------------------------------------------------------------------------------------------------------------------------------

//---x-axis
var mobile = [ 'S', 'M', 'T', 'W', 'Th', 'F', 'Sat' ]

//---data
var mobileData = [ 150, 250, 500, 300, 400, 200, 180 ]



var ctxBar = document.getElementById("myBarChart");

var dataBar = {
  labels: mobile,
  datasets: [{
    backgroundColor: '#7477bf',
    borderColor: 'rgba(221, 219, 234, .7)',
    borderWidth: 2,
    hoverBackgroundColor: 'rgba(221, 219, 234, .7)',
    hoverBorderColor: 'rgba(221, 219, 234, .7)',
    data: mobileData,
    pointBackgroundColor: 'white',
  }]
};

var optionsBar = {
  maintainAspectRatio: false,
  legend: {
    display: false
  }
};

var myBarChart = new Chart(ctxBar, {
  type: 'bar',
  options: optionsBar,
  data: dataBar
});

// Bar chart-----------------------------------------------------------------------------------------------------------------------------------------------

// Circle chart-----------------------------------------------------------------------------------------------------------------------------------------------

//---x-axis
var mobile = [ 'Phones', 'Tablets', 'Desktop', ]

//---data
var mobileData = [ 100, 250, 500]



var ctxCircle = document.getElementById("myCircleChart");

var dataCircle = {
  labels: mobile,
  datasets: [{
    backgroundColor: [ '#7477bf', '#ff002d', '#12dfdf' ],
    borderColor: 'rgba(221, 219, 234, .7)',
    borderWidth: 2,
    hoverBackgroundColor: 'rgba(221, 219, 234, .7)',
    hoverBorderColor: 'rgba(221, 219, 234, .7)',
    data: mobileData,
    pointBackgroundColor: 'white',
  }]
};

var optionsCircle = {
  maintainAspectRatio: false
};

// And for a doughnut chart
var myDoughnutChart = new Chart(ctxCircle, {
    type: 'doughnut',
    data: dataCircle,
    options: optionsCircle
});

// Circle chart-----------------------------------------------------------------------------------------------------------------------------------------------
