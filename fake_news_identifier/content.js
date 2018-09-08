var picture_lib = ["_2a2q _65sr", "_5cq3 _1ktf", "_1ktf", "_6ks"];

var add_link = function(source, _link){
	var time_position = source.getElementsByClassName("_5pcp _5lel _2jyu _232_");
	var node = document.createTextNode("Description.");
	var newlink = document.createElement("a");
	newlink.setAttribute("herf", _link);
	newlink.appendChild(node);
	time_position[0].appendChild(newlink);
}


var find_text = function(source, class_name){
	var text_positions = source.getElementsByClassName(class_name);
	for (var j=0, len=text_positions.length; j<len; j++){
		console.log(text_positions[j].textContent); 
	}
}

var find_img = function(source){
	var srclist = [];
	var imgs = [];
	for (var k=0; k<picture_lib.length; k++){
		var prob_imgs = source.getElementsByClassName(picture_lib[k]);
		if (!prob_imgs.length==0){
			imgs = prob_imgs
		}
	}
	var pictures = imgs[0].getElementsByTagName("img");
	for (var j=0; j<imgs.length; j++){
		srclist.push(pictures[j].src);
	}
	console.log(srclist[0]);
	return srclist[0]
}
var find_video = function(source){
	var srclist = [];
	var pictures = source[0].getElementsByTagName("img");
	for (var l=0; l<pictures.length; l++){
		srclist.push(pictures[l].src);
	}
	return srclist[0]
}
var posts = new Set();
var find_post = function(){
	var new_posts = document.getElementsByClassName("_4-u2 mbm _4mrt _5jmm _5pat _5v3q _4-u8");
	for (var i=0; i<new_posts.length; i++){
		var post = new_posts[i];
		if (!posts.has(post)){
			posts.add(post);
			
			var is_video = post.getElementsByClassName("_150c");

			
			var shared = post.getElementsByClassName("mtm _5pcm");
			if (!shared.length==0){
				find_text(post, "mtm _5pco _2zpv")
				if (is_video.length==0){
					var photo = find_img(post);
				}else{
					var photo = find_video(is_video);
				}
				console.log(photo);
				add_link(shared[0], photo);
			}
			
			
			
			var multiple_shared = post.getElementsByClassName("_5ya");
						
			
			
			if (shared.length==0 && multiple_shared.length==0){
				find_text(post, "_5pbx userContent _3576");
				if (is_video.length==0){
					var photo = find_img(post);					
				}else{
					var photo = find_video(is_video);
				}
				console.log(photo);
				add_link(post, photo);
			}
		}
	}
}

setInterval(find_post, 1000);