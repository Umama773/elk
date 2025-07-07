
$(document).ready(function() {
    $('.card-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
           arrows: false,
           slidesToShow: 2,
           slidesToScroll: 1
        }
     },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});

// toggle btn pricing
$(document).ready(function(){
  $("#checbox").click(function(){
    var mon = $(".text10").attr("monthly");
    console.log(mon);
    var checkBox = document.getElementById('checbox');
      if(checkBox.checked == true){
        $(".text1").addClass("d-none");
        $(".text2").removeClass("d-none");
      }
      else{
        $(".text1").removeClass("d-none");
        $(".text2").addClass("d-none");
      }
    });
});
// news searcg
$(document).ready(function(){
  $('input#filtersearch').bind('keyup change', function () {
      if ($(this).val().trim().length !== 0) {
  
          $('#list .card').show().hide().each(function () {
              if ($(this).is(':icontains(' + $('input#filtersearch').val() + ')'))
                  $(this).show();
          });
      }
      else {
          $('#list .card').show().hide().each(function () {
              $(this).show();
          });
      }
  });

  $.expr[':'].icontains = function (obj, index, meta, stack) {
      return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
  };
});






// function check(){
//   var checkBox = document.getElementById('checbox');
//   var text1 = document.getElementsByClassName('text1');
//   var text2 = document.getElementsByClassName('text2');

//   for(var i = 0; i < text1.length; i++){
//     if(checkBox.checked == true){
//       text1[i].style.display = "block";
//       text2[i].style.display = "none";
//     }
//     else if(checkBox.checked == false){
//       text1[i].style.display = "none";
//       text2[i].style.display = "block";
//     }
//   }
// }

//check();


// $("input").click(function(event){
//   event.preventDefault();
//   // $('input').removeAttr("aria-invalid")
//   $('input').attr('aria-invalid',false);
//   // $(this).on(function(){
//   //   $('input').attr('aria-invalid',false);
//   //   $('input').css('color','red')
//   // })
// })








// PASSWORD SHOW HIDE
$(".toggle-password").click(function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});

$("input").click(function(){
  $(this).removeAttr("-aria-invalid");
});



$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$("#signin").validate({
 rules: {
   email: {
     required: true,
     email: true
   },
   password: {
     required: true,
     minlength: 5
   }
 },
 messages: {
   fname: {
    required: "Please enter a full name",
    letters: "Please specify your name (only letters and spaces are allowed)"
   },
   lname: {
    required: "Please enter a full name",
    letters: "Please specify your name (only letters and spaces are allowed)"
   },
   email: {
    required: "Please enter a email address",
    email: "Please enter a valid email address"
   },
   password: {
    required: "Please enter a password"
   }
 },

 submitHandler: function() {
  
 }
});
$("#signup").validate({
 rules: {
   fname: {
     required: true,
     letters: true,
     minlength: 5
   },
   lname: {
     required: true,
     letters: true,
     minlength: 5
   },
   email: {
     required: true,
     email: true
   },
   password: {
     required: true,
     minlength: 5
   },
   textarea: {
    required: true
   }
 },
 messages: {
   fname: {
    required: "Please enter a full name",
    letters: "Please specify your name (only letters and spaces are allowed)"
   },
   lname: {
    required: "Please enter a full name",
    letters: "Please specify your name (only letters and spaces are allowed)"
   },
   email: {
    required: "Please enter a email address",
    email: "Please enter a valid email address"
   },
   password: {
    required: "Please enter a password"
   },
   textarea: {
    required: "Please enter a message"
   }
 },

 submitHandler: function() {
  
 }
});
$("#contact").validate({
 rules: {
   name: {
     required: true,
     letters: true,
     minlength: 5
   },
   email: {
     required: true,
     email: true
   },
   textarea: {
    required: true
   }
 },
 messages: {
   name: {
    required: "Please enter a full name",
    letters: "Please specify your name (only letters and spaces are allowed)"
   },
   email: {
    required: "Please enter a email address",
    email: "Please enter a valid email address"
   },
   password: {
    required: "Please enter a password"
   },
   textarea: {
    required: "Please enter a message"
   }
 },

 submitHandler: function() {
  
 }
});