
$('document').ready(function() {

	$.get('http://localhost/wordpress/wp-json/wp/v2/posts',
		function(data) {
			
			console.log(data);

			// check for things to do with arrays
			if (data.length > 0) {

				$('#wrap').html('');

				//loop through the data
				var step;
                for (step = 0; step < data.length; step++){ 

	                var post = data[step];

	                var title = $('<h2 />').html(post.title.rendered);
	                // var title = "<h2>" + post.title.rendered + "</h2>";

	                $('#wrap').append(title);
					$('#wrap').append(post.content.rendered);
				}
                
			} else {

				$('#wrap').html('No posts, sorry!');
				
			}; 
		}
	)
	.fail(function(){
		$("#wrap").html('Something went wrong')
	});


});
