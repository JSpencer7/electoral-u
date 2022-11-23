
var votes=[];
var total = 0;
for (i=0;i<4;i++){
  votes[i] = Math.floor(Math.random()*100);
  total = total + votes[i];
}

var canvas  = document.getElementById('FPTPChart').getContext('2d');
var chart = new Chart(canvas,{
  type:'bar',
  data: {
    labels: ['', 'George', 'Sam', 'Callumina'],
    datasets:[{
      label: ' # of Votes',
      data: [votes[0],votes[1],votes[2],votes[3]],
      backgroundColor:[
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});

// document.getElementById('C1-percent').innerHTML= Math.floor(((votes[0]/total)*100));
// document.getElementById('C2-percent').innerHTML= Math.floor(((votes[1]/total)*100));
// document.getElementById('C3-percent').innerHTML= Math.floor(((votes[2]/total)*100));
// document.getElementById('C4-percent').innerHTML= Math.floor(((votes[3]/total)*100));
var seats=[];
var tseats = 0;
var q=[0,0,0,0];
var seats= [0,0,0,0];
var maxparty = null;


while (tseats < 200){
  var maxq=0
  for (i=0; i<4; i++){
    q[i] = votes[i]/((2*seats[i])+1);
    if (q[i] > maxq){
      maxq= q[i];
      maxparty = i;

    }
  }
  seats[maxparty]= seats[maxparty]+1;
  tseats = tseats + 1;
}
document.getElementById('C1-percent').innerHTML= Math.floor(((votes[0]/total)*100));
document.getElementById('C2-percent').innerHTML= Math.floor(((votes[1]/total)*100));
document.getElementById('C3-percent').innerHTML= Math.floor(((votes[2]/total)*100));
document.getElementById('C4-percent').innerHTML= Math.floor(((votes[3]/total)*100));
document.getElementById('C1-seats').innerHTML = seats[0];
document.getElementById('C2-seats').innerHTML = seats[1];
document.getElementById('C3-seats').innerHTML = seats[2];
document.getElementById('C4-seats').innerHTML = seats[3];
