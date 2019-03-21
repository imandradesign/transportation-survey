$(document).ready(function(){
  $(".results").hide();

  $("form#trans-survey").submit(function(event){
    event.preventDefault();

    $(".results").show();
    $("input:checkbox[name=worktrans]:checked").each(function(){
      var workTransport = $(this).val();
      $("#work-list").append(workTransport + "<br>");
    });
    
    $('input:checkbox[name=funtrans]:checked').each(function(){
      var funTransport = $(this).val();
      $('#fun-list').append(funTransport + '<br>');
    });

    $("#trans-survey").hide();
  });

  $('#reloadbtn').click(function(event){
    $("#trans-survey input").prop("checked", false)
    $('.results').hide();
    $('#trans-survey').show();
  });
});
