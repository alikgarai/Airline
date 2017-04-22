sap.ui.define([
		"airline/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("airline.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);