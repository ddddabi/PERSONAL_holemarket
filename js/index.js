function openNav(){
    jQuery('#mySidenav').css('width',200)
}

function closeNav(){
    jQuery('#mySidenav').css('width',0)
} 


jQuery(document).ready(function(){

    /*$('.ment').css({
        'text-align' : 'center',
        'padding-top' : 200,
        'color' : 'white',
        'font-size' : 30,
        'line-height' : '1.5em',
    })*/
        // 타이핑효과
        var typingIdx=0
        var typingTxt="구멍가게에 오신 것을 환영합니다."
        typingTxt = typingTxt.split('')
        var typingInt = setInterval(typing,100)
        function typing(){
            if(typingIdx <typingTxt.length){
                $('.ment').append(typingTxt[typingIdx])
                typingIdx++
            }else{
                clearInterval(typingInt)
            }
        }
    //차트 그리기
    var ctx = $('#myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ["2017", "2018", "2019"],
        datasets: [{
            label: "Customers (unit: million)",
            backgroundColor: "#08C7BD",
            data: [75, 82, 94],
            barThickness : 30,
        }]
        },
        options: {
        scales: {
            yAxes: [{
            ticks: {
                beginAtZero: true
            }
            }]
        },
        animation: {
            duration: 3000 
        },
        },
    });

})




