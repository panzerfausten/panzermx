



function PhotoJSViewer(_divID, _photosJSON) {
    this._divID = _divID;
    this._photosJSON = _photosJSON;
    this._photoViewerContent = "<span class='photoJSPhotoholder'></span><footer class='photoJSCaption'></footer>";
    this._img = '<img src="?" width="_w" height="_h" alt="_a" />';
    this._buttons = '<div id="photoJSButtonL" ><</div> <div id="photoJSButtonR">></div> ';
    var obj = this;
    initPhotoJS(obj);




    function nextPhoto() {
        //console.log(this.parentNode.getAttribute("PhotoJSViewer"));
        var parent = this.parentNode;
        var _photoviewerHolder = parent.childNodes[0];
        var _photoviewerCaption = parent.childNodes[1];
        var photosJSON = this.parentNode.getAttribute("PhotoJSViewer");
        var photoNumber = parseInt(this.parentNode.getAttribute("photo_number"));

        var photosJSON = eval("(" + photosJSON + ")");
        var max_index = photosJSON.length - 1;

        if (photoNumber < max_index) {
            this._w = parent.clientWidth;
            this._h = parent.clientHeight;
            _photoviewerHolder.innerHTML = getImgString(photosJSON[photoNumber + 1].url, this._w - 2,
                    this._h - 50, photosJSON[photoNumber + 1].caption);
            _photoviewerCaption.innerHTML = photosJSON[photoNumber + 1].caption;
            parent.setAttribute("photo_number", photoNumber + 1);

        }

    }
    function prevPhoto() {
        //console.log(this.parentNode.getAttribute("PhotoJSViewer"));
        var parent = this.parentNode;
        var _photoviewerHolder = parent.childNodes[0];
        var _photoviewerCaption = parent.childNodes[1];
        var photosJSON = this.parentNode.getAttribute("PhotoJSViewer");
        var photoNumber = parseInt(this.parentNode.getAttribute("photo_number"));

        var photosJSON = eval("(" + photosJSON + ")");
        

        if (photoNumber > 0) {
            this._w = parent.clientWidth;
            this._h = parent.clientHeight;
            _photoviewerHolder.innerHTML = getImgString(photosJSON[photoNumber - 1].url, this._w - 2,
                    this._h - 50, photosJSON[photoNumber - 1].caption);
            _photoviewerCaption.innerHTML = photosJSON[photoNumber - 1].caption;
            parent.setAttribute("photo_number", photoNumber - 1);

        }

    }

    function getImgString(_src, _w, _h, _a) {
        return _img.replace("?", _src).replace("_w", _w).replace("_h", _h).replace("_a", _a);
    }
    function initPhotoJS(PJSObject) {
        this._photoviewerDiv = document.getElementById(this._divID);
        this._photoviewerDiv.data = this._photosJSON;
        this._w = this._photoviewerDiv.clientWidth;
        this._h = this._photoviewerDiv.clientHeight;
        this._photoviewerDiv.innerHTML = this._photoViewerContent;
        this._photoviewerHolder = this._photoviewerDiv.childNodes[0];
        this._photoviewerCaption = this._photoviewerDiv.childNodes[1];

        this._photoviewerHolder.style.height = _h - 50;



        this._caption = this._photosJSON.photos[0].caption;
        this._photoviewerHolder.innerHTML = getImgString(this._photosJSON.photos[0].url, _w - 2,
                _h - 50, this._caption);
        this._photoviewerCaption.innerHTML = this._caption;
        if (this._photosJSON.photos.length > 1) { //add controls for multiphotos
            this._photoviewerDiv.innerHTML += _buttons;
            this._buttonL = this._photoviewerDiv.childNodes[2];
            this._buttonR = this._photoviewerDiv.childNodes[4];
            this._buttonL.addEventListener("click", prevPhoto);
            this._buttonR.addEventListener("click", nextPhoto);
        }


        this._photoviewerDiv.setAttribute("PhotoJSViewer", JSON.stringify(this._photosJSON.photos));
        this._photoviewerDiv.setAttribute("photo_number", "0");


    }
}