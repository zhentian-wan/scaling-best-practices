/**
 * @fileoverview Rule to disallow if as the only statement in an if block
 * @author Will Klein
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

  return {
    "IfStatement": function(node) {
      var ancestors = context.getAncestors(),
          parent = ancestors.pop(),
          grandparent = ancestors.pop();

      if (parent.consequent === node ||
          (parent.type === "BlockStatement" &&
           parent.body.length === 1 &&
           grandparent.type === "IfStatement")) {
        context.report(node, "Unexpected if as the only statement in an if block.");
      }
    }
  };

};

module.exports.schema = [];
