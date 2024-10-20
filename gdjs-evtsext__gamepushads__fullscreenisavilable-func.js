
if (typeof gdjs.evtsExt__GamePushAds__FullscreenIsAvilable !== "undefined") {
  gdjs.evtsExt__GamePushAds__FullscreenIsAvilable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamePushAds__FullscreenIsAvilable = {};


gdjs.evtsExt__GamePushAds__FullscreenIsAvilable.userFunc0x11fb728 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.__GP !== undefined) {
    let gp = gdjs.__GP;
    if (gp.ads.isFullscreenAvailable) {
        eventsFunctionContext.returnValue = true;
    } else {
        eventsFunctionContext.returnValue = false;
    }
}
};
gdjs.evtsExt__GamePushAds__FullscreenIsAvilable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GamePushAds__FullscreenIsAvilable.userFunc0x11fb728(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GamePushAds__FullscreenIsAvilable.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GamePushAds"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GamePushAds"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamePushAds__FullscreenIsAvilable.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__GamePushAds__FullscreenIsAvilable.registeredGdjsCallbacks = [];