function showLightGallary(startIndex, srcToThumbMap) {
	var dynamicElArr = [];
	for ( var src in srcToThumbMap) {
		var thumb = srcToThumbMap.src;
		var el = {};
		el.src = src;
		el.thumb = thumb;
		dynamicElArr.push(el);
		if (clickedSrc === src) {
			startIndex = srcs.length - 1;
		}
	}
	$(this).lightGallery({
		dynamic : true,
		dynamicEl : dynamicElArr,
		index : startIndex
	})
}
