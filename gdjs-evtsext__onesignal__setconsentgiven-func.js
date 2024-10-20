
if (typeof gdjs.evtsExt__OneSignal__SetConsentGiven !== "undefined") {
  gdjs.evtsExt__OneSignal__SetConsentGiven.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__OneSignal__SetConsentGiven = {};


gdjs.evtsExt__OneSignal__SetConsentGiven.userFunc0xb67290 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var consent = eventsFunctionContext.getArgument("consent")

document.addEventListener('deviceready', () => {
window.plugins.OneSignal.setConsentGiven(consent);

}
    , false);
};
gdjs.evtsExt__OneSignal__SetConsentGiven.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__OneSignal__SetConsentGiven.userFunc0xb67290(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__OneSignal__SetConsentGiven.func = function(runtimeScene, consent, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("OneSignal"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("OneSignal"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "consent") return consent;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__OneSignal__SetConsentGiven.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__OneSignal__SetConsentGiven.registeredGdjsCallbacks = [];