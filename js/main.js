const button = document.querySelector('.sidebar__btn')

const sidebar = document.querySelector('.sidebar')

button.addEventListener('click', () => {
  sidebar.classList.toggle('toggled')
})
var options = {
  series: [{
  name: ' Closed deals',
  data: [49, 100, 99, 170,65,146, 150]
},],
  chart: {
  height: 200,
  type: 'area',
  toolbar: false,
  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  categories: ["1 Dec", "5 Dec", "8 Dec", "12 Dec", "16 Dec", "20 Dec", "31 Dec"]
},
tooltip:{
  x: {
    show: false,
},
z: {
  formatter: undefined,
  title: 'Size: '
},
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
  series: [60, 30, 10],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 100,
    },
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart__radiol-bar"), options);
chart.render();