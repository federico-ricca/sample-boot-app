$(function() {
	//twitter bootstrap script
	$(".btn").mouseup(function() {
		$(this).blur();
	});
	
	$('.page-shelf')
			.on('click', '.thrash-page', 
					function() {
						var pageId = $(this).attr('data');
						var pageItem = '.page-id-' + pageId;

						$
								.ajax({
									type : "POST",
									url : "/removeItem",
									data : {
										"_csrf" : $("input#_csrf")
												.val(),
										"pageId" : pageId
									},
									dataType: 'json',
									success : function(data) {
										$(pageItem).parent()
												.remove();
									},
									error : function() {
										$('.alert-placeholder')
												.html(
														'<div class="alert alert-warning" role="alert"> Something went wrong <strong>:(</strong> , try again in a few seconds...</div>');
										setTimeout(function() {
											$(".alert-placeholder")
													.children()
													.remove();

										}, 3000);
									}
								});
					});

	$("button.add-item").click(function() {
		$.ajax({
			type : "POST",
			url : "/addItem",
			data : {
				"_csrf" : $("input#_csrf").val(),
				"url" : $("input#item-url").val()
			},
			//$('form#add-item').serialize()
			success : function(data) {
				$("#addItemModal").modal('hide');
				$(".page-shelf").append(data);
			},
			error : function() {
				$("#addItemModal").modal('hide');
                $('.alert-placeholder')
                .html(
                        '<div class="alert alert-warning" role="alert"> Something went wrong <strong>:(</strong> , try again in a few seconds...</div>');
                setTimeout(function() {
                    $(".alert-placeholder")
                            .children()
                            .remove();

                }, 3000);
			}
		});
	});
	
	$( document ).ready(function() {
	    $.ajax({
	    	type: "GET",
	    	url: "/cards",
	    	success : function(data) {
	    		for (var i = 0; i < data.userPages.length; i++) {
	    		    var page = data.userPages[i];
	    		    var pageIdClass = "page-id-" + page.id;
	    		    $('.page-shelf').append('<div class="col-md-3"><div class="' + pageIdClass + '"></div></div>');
	    		    
	    		    var cardSelector = '.' + pageIdClass; 
	    		    $(cardSelector).append('<a href="' + page.url + '" target="_blank"><h2>' + page.title + '</h2></a>');
	    		    $(cardSelector).append('<p>' + page.contents + '</p>');
	    		    $(cardSelector).append('<p><a class="btn btn-default explore-similar" href="#" role="button" ' + 
	    		    		'data="' + page.id + '" data-toggle="modal" data-target="#myModal">Explore more »</a> <a ' +
	    		    		'class="btn btn-default thrash-page" data="' + page.id + '" href="#" ' +
	    		    		'role="button"><span class="glyphicon glyphicon-trash" ' + 
	    		    		'aria-hidden="true"></span></a></p>');
	    		}
	    		
	    		$('.page-shelf').on('click', '.explore-similar', function() {
	    			var pageId = $(this).attr('data');

	    			$('.explore-dialog-contents').load("/exploreDialog/"+pageId);
	    		});
	    	},
	    	error : function() {
                $('.alert-placeholder')
                .html(
                        '<div class="alert alert-warning" role="alert"> Could not fetch your bookmarks <strong>:(</strong> , try again in a few seconds...</div>');
                setTimeout(function() {
                    $(".alert-placeholder")
                            .children()
                            .remove();

                }, 3000);
	    	}
	    });
	});
});
