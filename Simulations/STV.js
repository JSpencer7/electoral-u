var seat= [];
var seats =3;
var votes=[];
var total = 0;
for (i=0;i<=7;i++){
  votes[i] = Math.floor(Math.random()*100);
  total = total + votes[i];
}

var canvas  = document.getElementById('FPTPChart').getContext('2d');
var chart = new Chart(canvas,{
  type:'bar',
  data: {
    labels: ['Chris', 'George', 'Sam', 'Callumina','Jamie','Holt', 'Mya', 'Lilia'],
    datasets:[{
      label: ' # of Votes',
      data: [votes[0],votes[1],votes[2],votes[3],votes[4],votes[5],votes[6],votes[7]],
      backgroundColor:[
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(54,225,72, 0.2)',
              'rgba(75,121, 89, 0.2)',
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
var wonseats=0;
function lol(){
  var Cans = ['Chris', 'George', 'Sam', 'Callumina','Jamie','Holt', 'Mya', 'Lilia'];
  var WinVotes= 0;
  var LessVotes=100;
  if (wonseats==3){
    document.getElementById('Seat1Win').innerHTML=seat[0];
    document.getElementById('Seat2Win').innerHTML=seat[1];
    document.getElementById('Seat3Win').innerHTML=seat[2];
    document.getElementById('startStage').style.display='none';
    document.getElementById('AVStage').style.display='none';
    document.getElementById('SeatEx').style.display='none';
    document.getElementById('WinEx').style.display='block';
  }
  else{
    for (i=0;i<=7;i++){
      if (votes[i] > WinVotes){
        var W=i;
        WinVotes=votes[i]
      }
      if ((votes[i] < LessVotes) && (votes[i] !=0)){
        LessVotes=votes[i];
        var L=i;

      }

    };
    var quota = Math.floor((total/(seats+1))+1)

    var i =0

    if (votes[W]>=quota){//If anyone has won a seat
      seat[wonseats] =Cans[W];//sets the seat that has been won to the candidates name
      document.getElementById('startStage').style.display='none';
      wonseats=wonseats+1;
      document.getElementById('seatnum').innerHTML=wonseats;
      document.getElementById('seatcan').innerHTML=Cans[W];

      votes[W]=votes[W] - quota;
      document.getElementById('quotavotes').innerHTML=quota;
      document.getElementById('surplus').innerHTML=votes[W];
      document.getElementById('AVStage').style.display='none';
      document.getElementById('SeatEx').style.display='block';
      var left = Math.floor(votes[W] - (votes[W] *0.7));//Calculating votes to be distributed
      for (a=0;a<=7;a++){//distributing surplus Votes
        if ((a!= W) && (votes[a]!=0)){
          var addvotes = Math.floor((Math.random()*(left)));
          votes[a] = votes[a] + addvotes;
          left = votes[W] - addvotes;

        };
      };

    }
    else {
      document.getElementById('quotavotes_').innerHTML=quota;
      document.getElementById('startStage').style.display='none';
      document.getElementById('SeatEx').style.display='none';
      document.getElementById('AVStage').style.display='block';
      document.getElementById('Loser').innerHTML = Cans[L];
      document.getElementById('LVotes').innerHTML = votes[L];

      var left = Math.floor(votes[L] - (votes[L] *0.7));//Calculating votes to be distributed
      for (i=0;i<=7;i++){//distributing Votes
        if ((i!= L) && (votes[i]!=0)){
          var a = Math.floor((Math.random()*(left)));
          votes[i] = votes[i] + a;
          var b = 0;
          b=b+a;
          left = votes[L] - b;

        }

      }
      //Set votes of eliminated candidate to 0
      votes[L]=0;


    }
  }
  //UPDATE CHART
  chart.data.datasets[0].data= [votes[0], votes[1], votes[2], votes[3],votes[4],votes[5],votes[6],votes[7]];
  chart.update();
};



// function h1(){
//   var a= 'A fox';
//   return a;
// };
//
// function h2(a){
//   alert(a);
// };
