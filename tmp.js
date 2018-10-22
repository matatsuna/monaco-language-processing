const fs = require('fs');
let tmp = [
    "createShape", "loadShape", "arc", "ellipse", "line", "point", "quad", "rect", "triangle", "bezier", "bezierDetail", "bezierPoint", "bezierTangent", "curve", "curveDetail", "curvePoint", "curveTangent", "curveTightness", "box", "sphere", "sphereDetail", "ellipseMode", "rectMode", "strokeCap", "strokeJoin", "strokeWeight", "beginContour", "beginShape", "bezierVertex", "curveVertex", "endContour", "endShape", "quadraticVertex", "vertex", "shape", "shapeMode", "mouseClicked", "mouseDragged", "mouseMoved", "mousePressed", "mouseReleased", "mouseWheel", "keyPressed", "keyReleased", "keyTyped", "createInput", "createReader", "launch", "loadBytes", "loadJSONArray", "loadJSONObject", "loadStrings", "loadTable", "loadXML", "parseJSONArray", "parseJSONObject", "parseXML", "selectFolder", "selectInput", "day", "hour", "millis", "minute", "month", "second", "year", "print", "printArray", "println", "save", "saveFrame", "beginRaw", "beginRecord", "createOutput", "createWriter", "endRaw", "endRecord", "saveBytes", "saveJSONArray", "saveJSONObject", "saveStream", "saveStrings", "saveTable", "saveXML", "selectOutput", "applyMatrix", "popMatrix", "printMatrix", "pushMatrix", "resetMatrix", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "shearX", "shearY", "translate", "ambientLight", "directionalLight", "lightFalloff", "lights", "lightSpecular", "noLights", "normal", "pointLight", "spotLight", "beginCamera", "camera", "endCamera", "frustum", "ortho", "perspective", "printCamera", "printProjection", "modelX", "modelY", "modelZ", "screenX", "screenY", "screenZ", "ambient", "emissive", "shininess", "specular",
    "background", "clear", "colorMode", "fill", "noFill", "noStroke", "stroke", "alpha", "blue", "brightness", "color", "green", "hue", "lerpColor", "red", "saturation", "createImage", "image", "imageMode", "loadImage", "noTint", "requestImage", "tint", "texture", "textureMode", "textureWrap", "blend", "copy", "filter", "get", "loadPixels", "set", "updatePixels", "blendMode", "clip", "createGraphics", "noClip", "loadShader", "resetShader", "shader", "createFont", "loadFont", "text", "textFont", "textAlign", "textLeading", "textMode", "textSize", "textWidth", "textAscent", "textDescent", "abs", "ceil", "constrain", "dist", "exp", "floor", "lerp", "log", "mag", "map", "max", "min", "norm", "pow", "round", "sq", "sqrt", "acos", "asin", "atan", "atan2", "cos", "degrees", "radians", "sin", "tan", "noise", "noiseDetail", "noiseSeed", "random", "randomGaussian", "randomSeed"
]
let tmpjson = tmp.map((a) => {
    return {
        "label": a,
        "kind": 2,
        "documentation": "",
        "insertText": a
    };
})
// console.log(tmpjson);
fs.writeFile('./tmp.json', JSON.stringify(tmpjson));

