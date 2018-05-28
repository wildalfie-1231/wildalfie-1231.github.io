$(document).ready(function(){
	
	var form = $("#revert-account");
	var submit = $(form).find("button[type=submit]");
	$(form).on("submit", (function(e){
		e.preventDefault();
		$.ajax({
			url : $(this).attr("action") || window.location.pathname,
			type: $(this).attr("method") || "GET",
			data: $(this).serialize(),
			success: function (data) {
				$(form).find("p.form-error").text("");
				if (typeof(data) == "object"){
					if (data["Error"] != undefined){
						$.each(data["Error"], (function(i, v){
							$(form).find("p.form-error[for=" + i + "]").text(v);
						}));
					}
					if (data["Location"] != undefined){
						window.location.replace(data["Location"]);
					}
				}
			},
		});
	}));
});