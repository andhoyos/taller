AOS.init();


let modal = document.getElementById('dialog')
let btnEj = document.getElementById('btnEj')
function openModal(){
  modal.style.display = "initial";
  btnEj.style.animation = "unset";
  const chartBar = document.getElementById('chartBar');

new Chart(chartBar, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Cantidad de votos',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(0, 0, 255, 0.7)',
        'rgba(128, 128, 128, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const chartPie = document.getElementById('chartPie');

new Chart(chartPie, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(0, 0, 255, 0.7)',
        'rgba(128, 128, 128, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
    }]
  },

});
}

function closeModal(){
  modal.style.display = "none";
}



// var i = 0;
// let slideIndex = 1;

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function showDivs(n) {
//   let i;
//   const slide = document.getElementsByClassName("sliders");

//   if (n > slide.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slide.length;
//   }

//   for (i = 0; i < slide.length; i++) {
//     slide[i].style.display = "none";
//   }

//   slide[slideIndex - 1].style.display = "block";
// }

// function callDivs() {
//   plusDivs(1);
// }
// showDivs(slideIndex);
// setInterval(callDivs, 20000);
