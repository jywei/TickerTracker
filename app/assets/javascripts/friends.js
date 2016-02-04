var init_friend_lookup;

init_friend_lookup = function() {
  $('#friend-lookup-form').on('ajax:before', function(event, date, status){
    show_spinner();
  });

  $('#friend-lookup-form').on('ajax:after', function(event, date, status){
    hide_spinner();
  });

  $('#friend-lookup-form').on('ajax:success', function(event, data, status){
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  });

  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('Nobody is home.');
  });
}


$(document).ready(function(){
  init_friend_lookup();
})
