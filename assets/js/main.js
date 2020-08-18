$(document).ready(function() {
   $('#fullpage').fullpage({
       scrollOverflow: true
    });



   $('.section2').particleground({
    dotColor: '#000',
    lineColor: 'transparent',
    particleRadius: 25,
    parallaxMultiplier: 3
});
   
 
    $("#owl1").owlCarousel({
   	items: 1,
   	loop: true,
   	nav: true,
   	dots: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
        });

    $(".section3__form").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    surname: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: "Это поле должно быть заполнено!",
                        minlength: "Введите более 2 символов!"
                    },
                     surname: {
                        required: "Это поле должно быть заполнено!",
                        minlength: "Введите более 2 символов!"
                    },
                    email: {
                        required: "Это поле должно быть заполнено!",
                        email: "Неверный email!"
                    },
                    phone: {
                        required: "Это поле должно быть заполнено!"
                    },
                    message: {
                        required: "Это поле должно быть заполнено!"
                    }
                },
                submitHandler: function (form) {
                    var th = $(form);
        $.ajax({
            type: "POST",
            url: th.attr("action"), 
            data: th.serialize()
        }).done(function() {
            alert("Ваш заказ принят! Спасибо!");
            setTimeout(function() {
                th.trigger("reset");
            }, 2000);
        });
        return false;
                        }
        });
   
     });   
