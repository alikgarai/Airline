jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"airline/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"airline/test/integration/pages/Worklist",
		"airline/test/integration/pages/Object",
		"airline/test/integration/pages/NotFound",
		"airline/test/integration/pages/Browser",
		"airline/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "airline.view."
	});

	sap.ui.require([
		"airline/test/integration/WorklistJourney",
		"airline/test/integration/ObjectJourney",
		"airline/test/integration/NavigationJourney",
		"airline/test/integration/NotFoundJourney",
		"airline/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});