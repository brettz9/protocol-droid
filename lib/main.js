/*globals exports, require, console */
/*jslint vars:true, todo:true */
(function () {'use strict';

/*
function l (msg) {
	console.log(msg);
}
*/

var
	_ = require('sdk/l10n').get,
    data = require('sdk/self').data,
    cm = require('sdk/context-menu');

exports.main = function () {

    // Content-type handlers: on all links that do not have http/s (unless option?)

    // Protocol handlers: on all non-http/s links (though would be nice to open in other browsers too)
    cm.Menu({label: _("Open protocol handler"), context: cm.PredicateContext(function (ctx) {
        return ctx.linkURL && !(/https?:/).test(ctx.linkURL);
    }), contentScriptFile: data.url('add-protocol-handlers.js'), onMessage: function (protocol) {
        console.log('protocol:' + protocol);
    }});


};


exports.onUnload = function () { // reason
};


}());
