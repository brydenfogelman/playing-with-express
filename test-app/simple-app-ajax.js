$(document).on('ready', function() {
   $('#btn').on('click', function(e) {
       e.preventDefault();
       $.ajax({
            url: 'http://localhost:3000/people',
            type: 'get',
            dataType: 'json',
            //dataType: 'jsonp',
            //jsonp: 'callback',
            /*data: {
                format: 'json'
            },
            */

            success: function(data) {
                console.log(data);
                $('#json').html(data);
            }
        });
   });
});

