$(document).ready(function() {
    $('#inputs input').keyup(function() {

        var empty = false;
        $('#inputs input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });
        

        phone = $('#phone_number').val().match(/^(6)[0-9-()+]{8}/)
        
        if (empty || phone == null){
          $('#mybttn').attr('disabled', 'disabled');
          $('#mybttn').css("background-color", "lightgrey");
          $('#mybttn').css("color", "grey");
         
        }
        else{
          $('#mybttn').attr('disabled', false);
          $('#mybttn').css("background-color", "#1969b9");
          $('#mybttn').css("color", "white");
          
      }
    });
});

$(document).ready(function() {
  $('#inputs input').keyup(function() {
      phone = $('#phone_number').val().match(/^(6)[0-9-()+]{8}/)
      if (phone == null){ 
        $('#phone_alert').css("display", "block");
      }
      else{     
        $('#phone_alert').css("display", "none");
    }
  });
});


$(function() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    $('.container').append('<div class="inputinfo"> <p class="inputinfotitle">Name:</p><p class="inputinfoinfo">&nbsp;'+$('#name').val()+' </p><br> <p class="inputinfotitle">Email:</p><p class="inputinfoinfo">&nbsp;'+$('#email').val()+' </p><br> <p class="inputinfotitle">Phone:</p><p class="inputinfoinfo">&nbsp;'+$('#phone_number').val()+' </p></div>');
    $('#name').val("");
    $('#email').val("");
    $('#phone_number').val("");
    $('#mybttn').attr('disabled', 'disabled');
    $('#mybttn').css("background-color", "lightgrey");
    $('#mybttn').css("color", "grey");
    $('#phone_alert').css("display", "block");
  });
});


