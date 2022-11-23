


var votes=[];
var total = 0;
for (i=0;i<5;i++){
  votes[i] = Math.floor(Math.random()*100);
  total = total + votes[i];
};

var canvas  = document.getElementById('FPTPChart').getContext('2d');
var chart = new Chart(canvas,{
  type:'bar',
  data: {
    labels: ['Chris', 'George', 'Sam', 'Callumina'],
    datasets:[{
      label: ' # of Votes',
      data: [votes[0],votes[1],votes[2],votes[4]],
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
})
var Cans = ['Chris', 'George', 'Sam', 'Callumina'];
var WinVotes= 0;
for (i=0;i<4;i++){
  if (votes[i] > WinVotes){
    WinCandidate = Cans[i];
    WinVotes = votes[i];
  }
};
document.getElementById('Win').innerHTML= WinCandidate;
document.getElementById('WinVote').innerHTML = WinVotes;
