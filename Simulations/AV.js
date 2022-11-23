
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
    labels: ['Chris', 'George', 'Sam', 'Callumina'],
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
})

function lol(){
  var Cans = ['Chris', 'George', 'Sam', 'Callumina'];
  var WinVotes= 0;
  var LessVotes=100;
  var total = 0;
  for (i=0;i<4;i++){
    if (votes[i] > WinVotes){
      WinCandidate = Cans[i];
      WinVotes = votes[i];
    }
    if ((votes[i] < LessVotes) && (votes[i] !=0)){
      LessVotes=votes[i];
      var L=i;

    }
    total = total + votes[i];
  };
  if (WinVotes> total/2){
    document.getElementById('Win').innerHTML= WinCandidate;
    document.getElementById('WinVote').innerHTML = WinVotes;
    document.getElementById('startStage').style.display='none';
    document.getElementById('AVStage').style.display='none';
    document.getElementById('WinEx').style.display='block';
  }
  else{
    document.getElementById('startStage').style.display='none';
    document.getElementById('AVStage').style.display='block';
    document.getElementById('Loser').innerHTML = Cans[L];
    document.getElementById('LVotes').innerHTML = votes[L];

    var left = Math.floor(votes[L] - (votes[L] *0.7));
    for (i=0;i<4;i++){
      if ((i!= L) && (votes[i]!=0)){
        var a = Math.floor((Math.random()*(left)));
        votes[i] = votes[i] + a;
        var b = 0;
        b=b+a;
        left = votes[L] - b;

      }

    }
    votes[L]=0;
    chart.data.datasets[0].data= [votes[0], votes[1], votes[2], votes[3]];
    chart.update();
  }
};



// function h1(){
//   var a= 'A fox';
//   return a;
// };
//
// function h2(a){
//   alert(a);
// };
