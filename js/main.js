/* 
1. tab의 btn을 클릭하면
2. click 이벤트의 기본 클릭 이동 금지
3. 해당박스를 보이게 한다
  1> 클릭한 버튼의 순번을 구한다 .index();
  2> 다른 박스는 안보이게 처리
  3> 해당 순번 박스는 보이게

4. 클릭한 버튼은 활성화

.index() 순번을 구하는 방법
.eq(순번) 순번째를 찾는 방법
*/


/////////////////////////event binding


$("#tab ul li a").on("click", function(e){
    e.preventDefault();

    let i = $(this).parent().index();
    $("#tab .group div").hide();
    $("#tab .group div").eq(i).show();

    $("#tab ul li a").removeClass("on");
    $("#tab ul li").eq(i).children("a").addClass("on");


})



/*
1. 버튼을 클릭하면
2. 링크이동 금지
3. 클릭한 버튼의 href값 구해서
4. 해당박스는 보이게 / 다른박스는 비활성화
*/





