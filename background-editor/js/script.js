// JavaScript Document

 $(document).ready(function() {
		
    	$('#bg1').click(function(){
				var backgroundCss = {'background-image': 
					'url(../img/bg_cad_blue_money.jpg)', 
					'background-repeat': 'no-repeat',
					'background-attachment': 'fixed',
					'background-color': '#4698a3',
				}
					
	        	$('body').css(backgroundCss);
				
				if (localStorage) {
					localStorage.setItem('background-image', 
					   JSON.stringify(backgroundCss)
					);
				}
    	});
		
		
		
		
		$('#bg2').click(function(){
				var backgroundCss = {'background-image': 
					'url(../img/bg_cad_summer.jpg)', 
					'background-repeat': 'no-repeat',
					'background-attachment': 'fixed',
					'background-color': '#fff7a4',
				}
					
	        	$('body').css(backgroundCss);
				
				if (localStorage) {
					localStorage.setItem('background-image', 
					   JSON.stringify(backgroundCss)
					);
				}
    	});
		
		
		
		
		$('#bg3').click(function(){
				var backgroundCss = {'background-image': 
					'url(../img/bg_vegas.jpg)', 
					'background-repeat': 'no-repeat',
					'background-attachment': 'fixed',
					'background-color': '#13669a',
				}
					
	        	$('body').css(backgroundCss);
				
				if (localStorage) {
					localStorage.setItem('background-image', 
					   JSON.stringify(backgroundCss)
					);
				}
    	});
	
		
		
		$('#bg4').click(function(){
				var backgroundCss = {'background-image': 
					'url(../img/body_bg.jpg)', 
					'background-repeat': 'repeat',
					'background-attachment': 'fixed',
					'background-color': '#6e0e00',
				}
					
	        	$('body').css(backgroundCss);
				
				if (localStorage) {
					localStorage.setItem('background-image', 
					   JSON.stringify(backgroundCss)
					);
				}
    	});
		
		
		
		
		
		if (localStorage) {
			var backgroundJsonString = localStorage.getItem('background-image');
			console.log('backgroundJsonString', backgroundJsonString);
		    if (backgroundJsonString ) {
				
				var background = JSON.parse(backgroundJsonString);
				
			    console.log('background in', background);
				$('body').css(background);
			} else {
				
			   $('body').css({'background-image': 
					'url(../img/bg_vegas.jpg)', 
					'background-repeat': 'no-repeat',
					'background-attachment': 'fixed',
					'background-color': '#4698a3',
				});
			}              
		} else {
			  $('body').css({'background-image': 
					'url(../img/bg_vegas.jpg)', 
					'background-repeat': 'no-repeat', 
					'background-attachment': 'fixed',
					'background-color': '#4698a3',
				});
		}   
		
	});

		
	