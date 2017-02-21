function showLightGallary(elementToLightGallery, startIndex, srcToThumbMap) {
    var dynamicElArr = [];
    for (var src in srcToThumbMap) {
        var thumb = srcToThumbMap[src];
        var el = {};
        el.src = src;
        el.thumb = thumb;
        dynamicElArr.push(el);
    }
    elementToLightGallery.lightGallery({
        dynamic: true,
        dynamicEl: dynamicElArr,
        index: startIndex
    })
}
