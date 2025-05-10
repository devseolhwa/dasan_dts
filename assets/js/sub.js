$(function(){
    
    // snb
	/* $(".snbList li button").on("click", function(){
		$(this).parent("li").toggleClass("active").siblings("li").removeClass("active");
		$(this).next(".depth02").stop().slideToggle();
		$(this).parents().siblings("li").find(".depth02").slideUp();
	}); */

    // 토글 기능
    $(".toggleGroup dl").each(function() {
        if (!$(this).hasClass("on")) {
            $(this).children("dd").hide();
        } else {
            $(this).children("dd").show();
        }
    });
    $(".toggleGroup dt a").on("click", function(e) {
        e.preventDefault();
        const $parent = $(this).closest("dl");

        if ($parent.hasClass("on")) {
            $parent.removeClass("on").children("dd").stop().slideUp();
        } else {
            $parent.addClass("on").children("dd").stop().slideDown();
        }
    });

	// 상단으로
	let btnTop = document.querySelector("#btnTop"),
        headerH = 70;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerH) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });
    $("#btnTop").on("click", function(){
		$("html, body").stop().animate({ scrollTop: 0 });
	});

});