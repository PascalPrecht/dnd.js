window.dnd=Object.create({on:function(c,b){with(document.querySelector(c)){addEventListener("dragenter",function(a){a.stopPropagation();a.preventDefault();b.enter&&b.enter(element)},false);addEventListener("dragover",function(a){a.stopPropagation();a.preventDefault();b.over&&b.over(element)},false);addEventListener("dragleave",function(a){a.stopPropagation();a.preventDefault();b.leave&&b.leave(element)},false);addEventListener("drop",function(a){a.stopPropagation();a.preventDefault();b.drop&&b.drop(a.dataTransfer.files,element)},false)}}});
