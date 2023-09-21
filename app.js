// $("img").click(function(){
//     alert('DONKEY KONG')
// })

$('h1').click(function(){
    console.log('you clicked me boi')
})

$('img').on('mouseleave', function(){
    console.log('leaving image!')
})

$('img').on('mouseenter', function(){
    $(this).css('border', '5px double red')
})

$('img').on('click', function(){
    // $(this).fadeOut(3000, function(){
    //     $(this).remove()
    // }) 
    $(this).animate({
        opacity: 0,
        width: '50px',
    }, 3000, function(){
        $(this).remove()
    })
})

$('#add-input').on('click', function(){
    $('form').append('<input type="text"/>')
})

$('form').on('focus', 'input', function(){
    $(this).val('BAMBOOZELD')
})