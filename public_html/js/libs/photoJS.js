

_photoViewerContent = "<span class='photoJSPhotoholder'></span><footer class='photoJSCaption'></footer>";
_img = '<img src="?" width="_w" height="_h" alt="_a" />'
function getImgString(_src,_w,_h,_a){
	return _img.replace("?",_src).replace("_w",_w).replace("_h",_h).replace("_a",_a);
}
function initPhotoJS(_divID,photoURL,caption)   {
	_photoviewerDiv = document.getElementById(_divID);
	_h = _photoviewerDiv.clientHeight;
	_w = _photoviewerDiv.clientWidth;
	_photoviewerDiv.innerHTML = _photoViewerContent;
	_photoviewerHolder =  _photoviewerDiv.childNodes[0];
	_photoviewerCaption =  _photoviewerDiv.childNodes[1];
	_photoviewerHolder.style.height = _h - 50;
	_photoviewerHolder.innerHTML = getImgString(photoURL,_w - 2,
					_h -50,caption);
	_photoviewerCaption.innerHTML = caption;
}
