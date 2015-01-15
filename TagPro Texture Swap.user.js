// ==UserScript==
// @name          TagPro Texture Swap
// @description   Edit the links to add your own textures.
// @version       0.1
// @grant         none
// @require       https://gist.githubusercontent.com/Holcomb227/50acb5fd2ccb93bb9cdb/raw/0c816b2dffad7edb5da1fb29a57f4f1875444419/refresh.js
// @include       http://tagpro-*.koalabeast.com:*
// @include       http://tangent.jukejuice.com:*
// @include       http://*.newcompte.fr:*
// @license       2014
// ==/UserScript==
 
tagpro.ready(function() {
    var textures = [
		'http://i.imgur.com/LgQzVYF.png', // tiles
		'http://i.imgur.com/PJEMNnN.png', // splats
		'http://i.imgur.com/V8D62iX.png', // speedpad
		'http://i.imgur.com/2Y8FREi.png', // speedpadred
		'http://i.imgur.com/61yNlAe.png', // speedpadblue
		'http://i.imgur.com/AAknDsI.png'  // portal
    ],
        assetLoader = new PIXI.AssetLoader(textures, 'Anonymous');
    
    assetLoader.load();
    assetLoader.onAssetLoaded(replaceTextures());
    
    function replaceTextures() {
        $('#tiles')[0].src = textures[0];
        $('#splats')[0].src = textures[1];
        $('#speedpad')[0].src = textures[2];
        $('#speedpadred')[0].src = textures[3];
        $('#speedpadblue')[0].src = textures[4];
        $('#portal')[0].src = textures[5];
        refreshTextures();
    }
    
    function refreshTextures() {
        if (!tagpro.renderer.refresh) {
            return setTimeout(refreshTextures, 100);
        }
        window.requestAnimationFrame(tagpro.renderer.refresh);
    }
});