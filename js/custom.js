jQuery(document).ready(function(){
	var id = 0;
	for (var key in localStorage) {
	   id = key;
	   jQuery("#to-do-list").append("<div class='data-parent'><div class='local-data'>"+localStorage[key]+"</div><span class='remove' data-key='"+key+"'>X</span></div>");
	}
	jQuery("#save").hide();
	jQuery("body").on("click","#add-new", function(){
		for (var key in localStorage) {
		   id = key;
		}
		id++;
		console.log(id);
		jQuery("#add-task").append("<div class='input-parent'><input type='text' class='task-title' data-id='"+id+"' placeholder='Enter the title' /></div>");
		jQuery("#save").show();
		jQuery("#to-do-list").hide();
		jQuery(this).hide();
	});

	jQuery("body").on("click", ".remove", function(){
		jQuery(this).parent().remove();
		localStorage.removeItem(jQuery(this).attr("data-key"));
	});

	jQuery("body").on("click", "#save", function(){
		if(!jQuery(".task-title").val()){
			jQuery("#error").show();
			return false;
		}else{
			jQuery("#error").hide();
			var title = jQuery(".task-title").val();
			var id = jQuery(".task-title").attr("data-id");
			localStorage.setItem(id,title);
			jQuery(this).hide();
			jQuery(".input-parent").hide();
			jQuery("#add-new").show();
			jQuery("#to-do-list").show();
			jQuery(".input-parent").html("");
			jQuery("#to-do-list").html("");
			for (var key in localStorage) {
			   jQuery("#to-do-list").append("<div class='data-parent'><div class='local-data' data-key='"+key+"'>"+localStorage[key]+"</div><span class='remove' data-key='"+key+"'>X</span></div>");
			}
		}
	});
});