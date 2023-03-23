import data from "./players2.js";
// 컨텐츠 반응
let old = $(".card").get(0);

$(".card").click(function () {
  if (old != null && $(old).hasClass("open")) $(old).toggleClass("open");
  $(this).toggleClass("open");
  old = this;
});
// 팝업 창
// background to info //
var $view = $(".view"),
  $modalContainer = $("#modal-container"),
  $body = $("body"),
  $close = $(".close"),
  btnId,
  number,
  player;

$view.on("click", function (e) {
  // 창 띄우기
  btnId = e.target.id;
  $modalContainer.removeAttr("class").addClass("act");
  $body.addClass("modal-active");
  console.log(btnId);

  // 그래프 그리기
  for (let p of data) {
    if (Object.values(p.number).join("") == btnId) {
      player = p;
      break;
    }
  }
  console.log(player);

  const App = new Vue({
    el: "#app",
    data() {
      return {
        average: player.ovr,
        graphData: [
          player.pac,
          player.sho,
          player.pas,
          player.dri,
          player.def,
          player.phy,
        ],
      };
    },
    // created(){
    // 	this.getAverage();
    // },
    mounted() {
      this.drawGraph();
    },
    methods: {
      // getAverage(){	// 평균값 구하기
      // 	this.average = `${Math.round(this.graphData.reduce((cur,pre)=>cur*1+pre*1)/6*100)/100}%`
      // },
      graphDataInput(event, i) {
        // input 입력시 동작
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
        if (event.target.value <= 0 || event.target.value == "") {
          this.graphData[i - 1] = 0;
          event.target.value = 0;
        } else if (event.target.value > 100) {
          this.graphData[i - 1] = 100;
          event.target.value = 100;
        } else {
          this.graphData[i - 1] = event.target.value * 1;
        }
        this.average = event.target.value;
        this.drawGraph();
      },
      drawGraph() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, 500, 800); // input 변경시 그리기 전 지우기

        const r = 200;
        const center = 250;

        drawData(ctx, center, r, this.graphData);
        drawBackground(ctx, r, center, this.average);
        drawStateTags(ctx, this.graphData);
        // drawCircles(ctx, center, r, 20);

        // 입력 데이터 그리는 함수
        function drawData(ctx, center, r, data) {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const dataPercent = data[i] / 100;

            ctx.lineTo(
              center +
                r *
                  Math.cos((Math.PI / 3) * i - Math.PI / 2) *
                  (4 / 7) *
                  dataPercent +
                r * Math.cos((Math.PI / 3) * i - Math.PI / 2) * (3 / 7),
              center +
                r *
                  Math.sin((Math.PI / 3) * i - Math.PI / 2) *
                  (4 / 7) *
                  dataPercent +
                r * Math.sin((Math.PI / 3) * i - Math.PI / 2) * (3 / 7)
            );
          }
          ctx.closePath();
          ctx.strokeStyle = "#3b89db";
          ctx.fillStyle = "rgba(59,137,219, 0.7)";
          ctx.stroke();
          ctx.fill();
        }

        // 그래프 배경 그리는 함수
        function drawBackground(ctx, r, center, average) {
          drawHexagonMain(ctx, r);
          drawHexagon(ctx, r * (6 / 7));
          drawHexagon(ctx, r * (5 / 7));
          drawHexagon(ctx, r * (4 / 7));
          drawHexagon(ctx, r * (3 / 7));

          drawTags(ctx, r + 20, center, average);
          drawTagsOvr(ctx, r + 20, center, average);
        }

        // 육각형 그리기
        function drawHexagon(ctx, r) {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            ctx.lineTo(
              250 + r * Math.cos((Math.PI / 3) * i - Math.PI / 2),
              250 + r * Math.sin((Math.PI / 3) * i - Math.PI / 2)
            );
          }
          ctx.closePath();
          ctx.setLineDash([8]);
          ctx.strokeStyle = "#eee";
          ctx.stroke();
        }
        function drawHexagonMain(ctx, r) {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            ctx.lineTo(
              250 + r * Math.cos((Math.PI / 3) * i - Math.PI / 2),
              250 + r * Math.sin((Math.PI / 3) * i - Math.PI / 2)
            );
          }
          ctx.closePath();
          ctx.strokeStyle = "#eee";
          ctx.stroke();
        }

        // 각 지표 동그라미 그리기
        // function drawCircles(ctx, center, r, size){
        //   for (let i = 0; i < 6; i++) {
        //     ctx.beginPath();
        //     ctx.arc(center + r * Math.cos(Math.PI/3*i - Math.PI/2),
        //     	center + r * Math.sin(Math.PI/3*i - Math.PI/2),
        //       size, 0, Math.PI*2);
        //     ctx.closePath();
        //     ctx.fillStyle = "#b0b0b0";
        //     ctx.fill();

        //     ctx.beginPath();
        //     ctx.fillStyle = "#fff";
        //     ctx.font = '20px san-serif';
        //     ctx.fillText(
        //     	`${Object.keys(player)[i+4]}`,
        //     	center + r * Math.cos(Math.PI/3*i - Math.PI/2) - size/2 + 4.5,
        //     	center + r * Math.sin(Math.PI/3*i - Math.PI/2) + size/2 - 3.5
        //     );
        //     ctx.fill();
        //     ctx.closePath();
        //   }
        // }

        // 각 태그 그리기
        function drawTags(ctx, r, center, average) {
          ctx.fillStyle = "#fff";
          ctx.font = "20px san-serif";

          ctx.beginPath();
          ctx.fillText(
            "pac",
            center + r * Math.cos((Math.PI / 3) * 0 - Math.PI / 2) - 19,
            center + r * Math.sin((Math.PI / 3) * 0 - Math.PI / 2) - 5
          );
          ctx.fillText(
            "sho",
            center + r * Math.cos((Math.PI / 3) * 1 - Math.PI / 2) - 35,
            center + r * Math.sin((Math.PI / 3) * 1 - Math.PI / 2) - 19
          );
          ctx.fillText(
            "pas",
            center + r * Math.cos((Math.PI / 3) * 2 - Math.PI / 2) - 38,
            center + r * Math.sin((Math.PI / 3) * 2 - Math.PI / 2) + 32
          );
          ctx.fillText(
            "dri",
            center + r * Math.cos((Math.PI / 3) * 3 - Math.PI / 2) - 19,
            center + r * Math.sin((Math.PI / 3) * 3 - Math.PI / 2) + 20
          );
          ctx.fillText(
            "def",
            center + r * Math.cos((Math.PI / 3) * 4 - Math.PI / 2) - 5,
            center + r * Math.sin((Math.PI / 3) * 4 - Math.PI / 2) + 32
          );
          ctx.fillText(
            "phy",
            center + r * Math.cos((Math.PI / 3) * 5 - Math.PI / 2) - 2,
            center + r * Math.sin((Math.PI / 3) * 5 - Math.PI / 2) - 19
          );

          ctx.fill();
          ctx.closePath();
        }
        function drawTagsOvr(ctx, r, center, average) {
          ctx.fillStyle = "white";
          ctx.font = "50px san-serif";

          ctx.beginPath();

          ctx.fillText(average, center - 25, center + 30);
          ctx.fill();
          ctx.closePath();
        }

        // 각 태그 그리기
        function drawStateTags(ctx, data) {
          ctx.fillStyle = "#fff";
          ctx.font = "25px san-serif";

          ctx.beginPath();
          ctx.fillText("pac : ", 110, 550);
          ctx.fillText(data[0], 170, 550);
          ctx.fillText("sho : ", 110, 650);
          ctx.fillText(data[1], 170, 650);
          ctx.fillText("pas : ", 110, 750);
          ctx.fillText(data[2], 170, 750);
          ctx.fillText("dri : ", 290, 550);
          ctx.fillText(data[3], 350, 550);
          ctx.fillText("def : ", 290, 650);
          ctx.fillText(data[4], 350, 650);
          ctx.fillText("phy : ", 290, 750);
          ctx.fillText(data[5], 350, 750);
          ctx.fill();
          ctx.closePath();
        }
      },
    },
  });
});

// x 클릭시 닫음
$close.on("click", function () {
  $modalContainer.addClass("out");
  $body.removeClass("modal-active");
});
// esc 누를시 닫음
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    $modalContainer.addClass("out");
    $body.removeClass("modal-active");
  }
});

// // info career 간 이동
// var $infoBtn = $(".btn .info-btn"),
//   $careerBtn = $(".btn .career-btn"),
//   $modalContainerCareer = $("#modal-container-career")
//   $close = $(".close-career");

// $careerBtn.on("click", function () {
//   $modalContainer.addClass("out");
//   $body.removeClass("modal-active").addClass("modal-active-career");
//   $modalContainerCareer.removeAttr("class").addClass("act");
// });
// // x 클릭시 닫음
// $close.on("click", function () {
//   $modalContainerCareer.addClass("out");
//   $body.removeClass("modal-active-career");
// });
// // esc 누를시 닫음
// document.addEventListener("keydown", function (e) {
//   if (e.keyCode == 27) {
//     $modalContainerCareer.addClass("out");
//     $body.removeClass("modal-active-career");
//   }
// });