$(function () {
    tab($('.nav'), $('.content'), 'click')

    function tab(nav, content, event) {
        var li = $('.nav').children()
        li.each(function (index) {
            $(this).on(event, function () {
                li.eq(index).addClass('current').siblings().removeClass('current')
                content.eq(index).addClass('active').siblings().removeClass('active')
            })
        })
    }

    $('aside .menu').on('click',function(){
        $('aside').toggleClass('active')
    })

    $('#nav').on('click', 'li', function () {
        setTimeout(function () {
            $('.aside').removeClass('active')
        })

    })

})