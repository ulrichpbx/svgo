'use strict';

exports.type = 'perItem';

exports.active = true;

/**
 * Remove attributes
 *
 * @example
 * <svg xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd">
 * <sodipodi:namedview/>
 * <path sodipodi:nodetypes="cccc"/>
 *
 * @param {Object} item current iteration item
 * @param {Object} params plugin params
 * 
 * @author Kir Belevich
 */

exports.fn = function(item, params) {
    var removeAttrs = [];
    if (Array.isArray(params.removeAttrs)) {
        removeAttrs = removeAttrs.concat(params.removeAttrs);
    }

    if (item.elem) {
        // <* sodipodi:*="">
        item.eachAttr(function(attr) {
            if (removeAttrs.indexOf(attr.name) > -1) {
                item.removeAttr(attr.name);
            }
        });
    }
};
