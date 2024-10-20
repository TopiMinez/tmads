
if (typeof gdjs.evtsExt__GamePushAds__Initialization !== "undefined") {
  gdjs.evtsExt__GamePushAds__Initialization.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamePushAds__Initialization = {};


gdjs.evtsExt__GamePushAds__Initialization.userFunc0x984f60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const project_ID = eventsFunctionContext.getArgument('Project_ID');
const token = eventsFunctionContext.getArgument('Public_Token');

var gpSDK = document.getElementById("gpSDK");

if (!gpSDK) {
var main_script = document.createElement("script");
main_script.async = true;
main_script.src = "https://gamepush.com/sdk/game-score.js?projectId=" + project_ID + "&publicToken=" + token + "&callback=onGPInit";
main_script.id = "gpSDK";
document.head.appendChild(main_script);
}

window.onGPInit = async (gp) => {
    gp.player.ready;
    gdjs.__GP = gp; 
};

gdjs.__RewardedVideo = {};
gdjs.__RewardedVideo.bull = false;
};
gdjs.evtsExt__GamePushAds__Initialization.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GamePushAds__Initialization.userFunc0x984f60(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GamePushAds__Initialization.func = function(runtimeScene, Project_ID, Public_Token, parentEventsFunctionContext) {
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
if (argName === "Project_ID") return Project_ID;
if (argName === "Public_Token") return Public_Token;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamePushAds__Initialization.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__GamePushAds__Initialization.registeredGdjsCallbacks = [];