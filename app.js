var app = new Vue({
  el: "#app",
  data: {
    cards: [
      {
        title: "Approval",
        link: "http://system.omega.approval.loc",
        img: "/assets/img/Capture3.PNG"
      },
      {
        title: "Report Front Office",
        link: "http://system.omega.front-office.loc",
        img: "/assets/img/Capture1.PNG"
      },
      {
        title: "Report Back Office",
        link: "http://system.omega.back-office.loc",
        img: "/assets/img/Capture.PNG"
      }
    ]
  }
});

$(document).ready(function() {
  $("[vue-data]").fadeIn("slow");
});
