gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects2= [];
gdjs.Untitled_32sceneCode.GDGPSDKObjects1= [];
gdjs.Untitled_32sceneCode.GDGPSDKObjects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects2= [];
gdjs.Untitled_32sceneCode.GDGPSDK2Objects1= [];
gdjs.Untitled_32sceneCode.GDGPSDK2Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects2= [];
gdjs.Untitled_32sceneCode.GDbalanceObjects1= [];
gdjs.Untitled_32sceneCode.GDbalanceObjects2= [];
gdjs.Untitled_32sceneCode.GDGPSDK3Objects1= [];
gdjs.Untitled_32sceneCode.GDGPSDK3Objects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "telegram-clicker", "https://gd.games/", 720, 1280, 0, 0, true, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__OneSignal__Initialize.func(runtimeScene, "", false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__GamePushAds__Initialization.func(runtimeScene, "17515", "AMI2KwNIiSv1kxFPMdl3N23bh2b1Yqt5", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton3"), gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1[k] = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__OneSignal__RequestPermission.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton4"), gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1[k] = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__OneSignal__OptInPushNotifications.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton2"), gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1[k] = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__GamePushAds__ShowFullscreen.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton5"), gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1[k] = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__GamePushAds__ShowRewardedVideo.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton6"), gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1[k] = gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__GamePushAds__ShowSticky.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamePushAds__RewardedVideo.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20652980);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(100);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("balance"), gdjs.Untitled_32sceneCode.GDbalanceObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbalanceObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbalanceObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDKObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButton6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbalanceObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGPSDK3Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
