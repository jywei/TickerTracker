var init_stock_lookup;

init_stock_lookup = function() {
  $('#stock-lookup-form').on('ajax:before', function(event, date, status){
    show_spinner();
  });

  $('#stock-lookup-form').on('ajax:after', function(event, date, status){
    hide_spinner();
  });

  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  });

  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock Was Not Fount.');
  });
}


$(document).ready(function(){
  init_stock_lookup();
})
