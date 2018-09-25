function showLightGallery(elementToLightGallery, startIndex, srcToThumbMap, addClassName) {
    var existing = elementToLightGallery.data('lightGallery');
    if (existing) {
        existing.destroy(true);
    }
    var dynamicElArr = [];
    if (typeof addClassName === "undefined" || addClassName === null) {
        addClassName = '';
    }
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
        index: startIndex,
        addClass: addClassName
    })
}
