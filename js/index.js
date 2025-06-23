$(function () {
  let con01 = $("#con01").offset().top;
  let con02 = $("#con02").offset().top;
  let con03 = $("#con03").offset().top;

  // scroll
  const content =
    "안녕하세요.\n 책임감과 성실함으로 디자인을 완성하는 웹디자이너 안미나 입니다. \n 보기 좋고 실용적인 웹사이트를 만들고 싶은 마음으로 웹디자이너가 되고싶습니다. 앞으로도 꾸준히 배우고 성장하면 저만의 색을 담은  웹디자이너를 해 나가고 싶습니다.";
  const text = document.querySelector(".text");
  let i = 0;
  let start = false;
  let stop;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i >= content.length) {
      clearInterval(stop);
    }
  }

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);
    base = -100;

    let project = $(".project").offset().top;
    let project01 = $(".project01").offset().top;
    let project02 = $(".project02").offset().top;
    if (sc >= project + base) {
      $(".project .folio").addClass("active");
    } else {
      $(".project .folio").removeClass("active");
    }

    if (sc >= project01 + base) {
      $(".project01 .folio").addClass("active");
    } else {
      $(".project01 .folio").removeClass("active");
    }

    if (sc >= project02 + base) {
      $(".project02 .folio").addClass("active");
    } else {
      $(".project02 .folio").removeClass("active");
    }

    if (sc >= con01 && sc < con02 && !start) {
      start = true;
      stop = setInterval(typing, 80);
    }
  });
  // header bar
  $(" .bar").on("click", function () {
    $("header .modal_menu").fadeIn(200);
    $("header .modal_menu").css({ display: "flex" });
  });
  $(" .close").on("click", function () {
    $("header .modal_menu").fadeOut(200);
  });
  gsap.registerPlugin(ScrollTrigger);
  //con01
  gsap.fromTo(
    "#con01",
    { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
    {
      "clip-path": "inset(0% 0% 0% 0% round 0%",
      ease: "none",
      duration: 2,
    }
  );
  gsap.fromTo(
    "#con01 .title h2",
    { y: "0px", opacity: 0 },
    {
      y: "-50px",
      opacity: 1,
      ease: "none",
      duration: 2,
    }
  );
  // con02 con03 반응형
  ScrollTrigger.matchMedia({
    "(min-width:1024px)": function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#con02",
            start: "0% 50%",
            end: "0% 50%",
            scrub: 2,
            // markers: true,
          },
        })
        .fromTo(
          "#con02 .left",
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        )
        .fromTo(
          "#con02 .right",
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#con03",
            start: "0% 50%",
            end: "50% 50%",
            scrub: 2,
            // markers: true,
          },
        })
        .fromTo(
          "#con03 .profile",
          { y: "50%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "none", duration: 5 },
          1
        )
        .fromTo(
          "#con03 .profileTop",
          { y: "50%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "none", duration: 5 },
          5
        )
        .fromTo(
          "#con03 .profileBottom",
          { y: "50%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "none", duration: 5 },
          10
        );
    },

    "(max-width:950px)": function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#con01",
            start: "10% 0%",
            end: "10% 0%",
            scrub: 2,
            // markers: true,
          },
        })
        .fromTo(
          "#con02 .left",
          { x: "-80%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        )
        .fromTo(
          "#con02 .right",
          { x: "80%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#con02",
            start: "50% 20%",
            end: "100% 20%",
            scrub: 2,
            // markers: true,
          },
        })
        .fromTo(
          "#con03 .profile",
          { y: "50%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "none", duration: 5 },
          1
        )
        .fromTo(
          "#con03 .profileTop",
          { y: "50%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "none", duration: 5 },
          5
        )
        .fromTo(
          "#con03 .profileBottom",
          { y: "50%", opacity: 0 },
          { y: "0%", opacity: 1, ease: "none", duration: 5 },
          10
        );
    },
  });
  // con03
  $("#con03 .txtBox03 img   ").on("click", function () {
    $("#con03 .modalCareer").show();
  });
  $("#con03 .modalCareer ").on("click", function () {
    $("#con03 .modalCareer").hide();
  });

  // con04
  let list = gsap.utils.toArray("#con04 .ilust01 > li");
  let listA = gsap.utils.toArray("#con04 .ilust01 > li.a");
  let listB = gsap.utils.toArray("#con04 .ilust01 > li.b");
  let listC = gsap.utils.toArray("#con04 .ilust01 > li.c");
  gsap.to(list, {
    scrollTrigger: {
      trigger: "#con04",
      pin: true,
      scrub: 2,
      start: "center center",
      end: "100% 0%",
      // markers: true,
    },
    xPercent: -530,
    ease: "none",
  });

  gsap.to(listA, {
    rotation: -30,
    scrollTrigger: {
      trigger: "#con04",
      scrub: 2,
      start: "center center",
      end: "100%",
    },
  });
  gsap.to(listB, {
    rotation: 50,
    scrollTrigger: {
      trigger: "#con04",
      scrub: 2,
      start: "center center",
      end: "100%",
    },
  });
  gsap.to(listC, {
    rotation: -50,
    scrollTrigger: {
      trigger: "#con04",
      scrub: 2,
      start: "center center",
      end: "100%",
    },
  });
  $("#con04 .ilust01 li").on("click", function () {
    let j = $(this).index();
    $("#con04 .ilustModal ").show();
    $("#con04 .ilust02 > li").eq(j).animate({ width: "100%", height: "100%" });
  });
  $("#con04 .ilust02 > li").on("click", function () {
    $("#con04 .ilustModal").hide();
    $("#con04 .ilust02 > li").animate({
      width: "0%",
      height: "0%",
    });
  });

  //con05
  slide();
  function slide() {
    start01 = setInterval(function () {
      $("#con05 .contBox01").animate(
        { "margin-left": "-100%" },
        1000,
        function () {
          $(" #con05 .contBox01 > li:first-child").appendTo(
            "#con05 .contBox01"
          );
          $("#con05 .contBox01").css({ "margin-left": "0" });
        }
      );
    }, 3000);
  }
  $("#con05 .next").on("click", function () {
    clearInterval(start01);
    $("#con05 .contBox01").animate(
      { "margin-left": "-100%" },
      200,
      function () {
        $("#con05 .contBox01 > li:first-child").appendTo("ul");
        $("#con05 .contBox01").css({ "margin-left": "0" });
      }
    );
    slide();
  });
  $("#con05 .prev").on("click", function () {
    clearInterval(start01);
    $("#con05 .contBox01 > li:last-child").prependTo("#con05 .contBox01");
    $("#con05 .contBox01").css({ "margin-left": "-100%" });
    $("#con05 .contBox01").animate({ "margin-left": "0" });
    slide();
  });
  //con06
  gsap.utils.toArray("section").forEach((section, k) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: k === 2 ? true : false,
        // markers: true,
      },
    });
  });

  $("#con06 .view01  ").on("click", function () {
    $("#con06 .proposalModal").show();
  });
  $("#con06 .proposalModal .close").on("click", function () {
    $("#con06 .proposalModal").hide();
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#con07",
        start: "0% 50%",
        end: "50% 50%",
        scrub: 2,
        // markers: true,
      },
    })
    .fromTo(
      "#con07 h2",
      { y: "50%", opacity: 0 },
      { y: "0%", opacity: 1, ease: "none", duration: 5 },
      1
    )
    .fromTo(
      "#con07 .telContact",
      { y: "50%", opacity: 0 },
      { y: "0%", opacity: 1, ease: "none", duration: 5 },
      2
    )
    .fromTo(
      "#con07 .textBox02",
      { y: "50%", opacity: 0 },
      { y: "0%", opacity: 1, ease: "none", duration: 5 },
      3
    );
});
