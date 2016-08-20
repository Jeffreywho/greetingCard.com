/**
 * Created by helsingVan on 2016/8/15.
 */
$(function(){

    setBtn();
    getBtn();
    function setBtn(){
        $(".set-btn").on("click",function(){
            var blessValue = $(".set-blessinfo").val().trim();
            var blessName = $(".set-blessname").val().trim();

            $(".set").removeClass("bl").addClass("no");
            $(".get").removeClass("no").addClass("bl");
            $(".bless-top").text(blessValue);
            $(".getbless-name").text(blessName);
        })
    }

    function getBtn(){
        $(".get-more").on("click",function(){
            $(".set-blessinfo").val("");
            $(".set-blessname").val("");
            $(".get").removeClass("bl").addClass("no");
            $(".set").removeClass("no").addClass("bl");
        })
    }


})