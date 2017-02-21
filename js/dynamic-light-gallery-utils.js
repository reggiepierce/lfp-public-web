function showLightGallary(startIndex, srcToThumbMap) {
    var dynamicElArr = [];
    for (var src in srcToThumbMap) {
        var thumb = srcToThumbMap.src;
        var el = {};
        el.src = src;
        el.thumb = thumb;
        dynamicElArr.push(el);
    }
    var previousLightGallery = $(this).data('lightGallery');
    if (previousLightGallery) {
        previousLightGallery.destroy(true);
    }
    $(this).lightGallery({
        dynamic: true,
        dynamicEl: dynamicElArr,
        index: startIndex
    })
}
