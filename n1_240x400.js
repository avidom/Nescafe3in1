(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/packs.png", id:"packs"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.packs = function() {
	this.initialize(img.packs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,262);


(lib.Symbol201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5BBC2B").s().p("AgoAvQgBgNAYg9QgJgEgDABQgDgCgLAIQgKgEgCgJQgCgGAPgHQALgGAFAAQAbgFACAdQACASgQApIABADQAKgEAngaIAOAAIADAIQABAKgaATQgZARgPADIgKABQgSAAgDgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.8,11.3,11.6);


(lib.Symbol200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5BBC2B").s().p("Ag0A9IgHgdQgDgXAGghQAIg0AdgFQASgCAHAdIABAHQACAEgJAAQgFACgGgFIgGgGQgHAHgFAiQgHAeABAJQAEAZAGABIBFgNIANAAIADAIQAFAXg7AIIgQACQgeAAgMgVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-8.2,12.3,16.5);


(lib.Symbol199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5BBC2B").s().p("AA4ARIgdhXQgMA/gRAaIACADIAAAGQgFAFgFAAQgVACghgyIgHgLIgRCbQAHACgNABQgLABgCgLIgEgOQgDgUALhSIAKhDIgEgIQAAgJAKgHQAAgEAEgHIAHABQAFAAABAHQABAKgBALQAJAIATAaIAWAeIAJgoQAMg3APgTIgBgGQgCgHAFgFIgCAAQgBgBAIAAQATgDAPA1QAGATALA7IAjB8IADARIgJAFQgNgWgihjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-13.8,22.6,27.6);


(lib.Symbol198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5BBC2B").s().p("AgPAeQAOgXAngHIAGAHQgIAWgcAEIgJABQgKAAgEgEgAgoAAIgDgIQANgOAfgHIAbgEIAGAMIAAAIIgRABQgcAMgNACQgIgCgIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-3.4,8.9,6.9);


(lib.Symbol197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5BBC2B").s().p("AgrCBIgrAKQgBAAgBgIQgCgLAVgJQAIgDALgDIgCgIIgGguIgeALQgQADgFgGQAEgLAtgQQgHg6ADguIgmAOQgIgDgJgLQALgFBQghQBHgdAKgBQAHgCAGAGIADAEQgJALhEAbIgoAQIANBkQASgHBAgTQAAgDAZgDQAmgGADARIACAJQgYgCgLADQgtAGg9AXQgDAAgEADQAFAeACAbQAcgJBEgMIAAgDIArgGIAEABQACAAAAAIQAEATgKACQgZgCgMACQgeAEhFAUIABAIIgLAJQgHgEgDgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-14.2,24.1,28.4);


(lib.Symbol195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3B3B").s().p("ABrBGQgHgEgDgHQgDgHAEgHQAEgGAHgDQAHgCAGADQAHADACAHQADAGgDAIIgDAFQgBgDgEgBQgDABAAAEIABAEIgBAAIgFABQgEAAgEgCgAh5gjQgHgEgCgHQgDgGADgIQADgHAHgDQAIgCAGADQAHAEADAHQACAGgDAIIgCACQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgHAAAAAIIABACIgDAAQgFAAgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-7.2,26.6,14.5);


(lib.Symbol194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJA6IgBgRIAFAAIAAALIAFAAIAAgJIACAAIAAAIIAEAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIgBgFIAEAAIABAGQAAAGgCADQgDACgFAAgAgIAlQgCgCAAgFIABgHIAEAAIgBAGIABADIABABIACgBIACgJQACgCADAAQADAAACACQACACAAAGIgBAHIgFAAIABgHIAAgDQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgCAHgCACQAAACgDAAIgFgCgAgIAQQgCgBgBgHIABgFIAEAAIAAAEQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQABABAEAAIAGgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIgBgFIAFABIAAAFQAAAGgCACQgDADgGAAQgGAAgCgDgAgKgEIAAgHQAIgFANgDIAAAHIgFABIAAAHIAFABIAAAEQgQgCgFgDgAgFgHIAHADIAAgGIgHADgAgLglIAFAAIAAAKIAFAAIAAgKIACAAIAAAKIAJAAQAAAGgDAAIgRAAgAgLg4IAEAAIABAKIAEAAIAAgJIADAAIAAAJIAEgBQABgBAAgEIAAgFIAEAAIABAGQAAAHgDACQgBACgGAAIgMAAg");
	this.shape.setTransform(-5,-2.2,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOA7QAAgEAFgCIAPgKIgTAAIgChoQABAAAAAAQAAAAABAAQAAAAABABQAAAAABABIABAEIABBcIAYAAIABADQAAAEgFADIgOAKIASgBIAAAGIgcABg");
	this.shape_1.setTransform(-5.7,2.1,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEAEQgCgCgDgBQgFgBAAgCIAAgEQAHABADADQACACABACIAAAFg");
	this.shape_2.setTransform(-9.1,-11.4,1.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0927").s().p("AhaBbQgFgDgCgHIgJiMIgEgXIAAgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAGgCAYgBQBJgDAiAAIAKABIADAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAJIAAARIACABIA2gBIAJABQAGAEAAAFIgBANIgHAqQgIAagQALQgJAJgUAFIgKACIgBAAIgBADIAAASQAAALgNACQgUAEgqAAIgdABQgUAAgEgDgABDguQgHAAgEABIgDACQgHADgFAVIgDATIAAAnIABACQAHgBAKgEQAOgGAKgNQAEgHACgGQAEgHADgaIABgRIgBgBg");
	this.shape_3.setTransform(0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-16.9,40.2,33.9);


(lib.Symbol193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD8C31").s().p("AhvAZIAAgxQAAgGAEgEQAFgEAGAAIDJAAQAEAAADABIjHAJQgHABgEAEQgEAEAAAGIACAyIABACQgMgDAAgLg");
	this.shape.setTransform(-0.8,-0.1,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEDD1").s().p("AgDAZIAAgxIAIAAIAAAxg");
	this.shape_1.setTransform(-0.8,0,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBEDD1").s().p("AgDAZIAAgxIAIAAIAAAxg");
	this.shape_2.setTransform(-3.8,0,1.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBEDD1").s().p("AgDAZIAAgxIAHAAIAAAxg");
	this.shape_3.setTransform(-6.7,0,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E4F2C").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_4.setTransform(-13.6,0,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3B557").s().p("AhkAnQgGAAgFgEQgFgEAAgGIAAgxQAAgGAFgEQAFgEAGAAIDJAAQAHAAAEAEQAFAEgBAGIAAAxQABAGgFAEQgEAEgHAAg");
	this.shape_5.setTransform(0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-7.1,42.1,14.3);


(lib.Symbol192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B8D42").s().p("AhwApIAAgBQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBIDJgQQAHAAADgFQAFgEAAgGIgFgxIABgCQAIAEAAAHIACAyQABAGgFAEQgEAEgGABIjJAJQgFAAgEgCg");
	this.shape.setTransform(0.9,0.2,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1DDB1").s().p("AgFgXIAIgBIACAwIgHABg");
	this.shape_1.setTransform(-0.9,0,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1DDB1").s().p("AgDAZIgCgxIAIAAIADAxg");
	this.shape_2.setTransform(-3.8,0.2,1.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1DDB1").s().p("AgEgYIAHAAIACAxIgHAAg");
	this.shape_3.setTransform(-6.7,0.3,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E4F2C").s().p("AgLANQgGgFAAgIQgBgGAGgFQAFgGAHAAQAGgBAGAGQAGAFAAAHQABAGgGAGQgFAGgIAAIAAAAQgGAAgFgFg");
	this.shape_4.setTransform(-13.6,0.6,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FB868").s().p("AhtAoQgFgEAAgFIgDgyQAAgGAFgEQAEgEAHgBIDIgJQAHAAAEAEQAFAEAAAFIADAyQAAAGgFAEQgEAEgGABIjJAJIgBAAQgGAAgEgEg");
	this.shape_5.setTransform(0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,-8,42.6,16);


(lib.Symbol191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEgYIAFgBIAEAzIgFAAg");
	this.shape.setTransform(-4.5,-12.9,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAKQgFgEAAgGQgBgDAFgFQADgDAFgBQADgBAFAEQAEAEABAFQABADgEAFQgEAEgGABIAAAAQgEAAgDgDg");
	this.shape_1.setTransform(13.3,4.8,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4A973").s().p("AhQgNICegOIAEApIifAOg");
	this.shape_2.setTransform(3.9,5.7,1.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHgHIANgBIACAPIgNACg");
	this.shape_3.setTransform(-20.2,13.3,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDgNIAEAAIADAaIgEABg");
	this.shape_4.setTransform(12.3,14.4,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGgMIAKgCIADAbIgLACg");
	this.shape_5.setTransform(15.7,14.2,1.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F382F").s().p("AhtgDIDZgUIACAbIjYAUg");
	this.shape_6.setTransform(2.1,15.4,1.8,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A978").s().p("AiFADIEJgWIACARIkJAWg");
	this.shape_7.setTransform(-0.1,11.4,1.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFgZIAFAAIAGAyIgGABg");
	this.shape_8.setTransform(-6.6,-12.6,1.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEgYIAEgBIAGAzIgGAAg");
	this.shape_9.setTransform(-8.5,-12.5,1.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDgLIAFgBIACAZIgFAAg");
	this.shape_10.setTransform(-17.1,-4.5,1.8,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCgOIACgBIADAeIgDABg");
	this.shape_11.setTransform(-12.3,0.3,1.8,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOgNIAagDIADAeIgaADg");
	this.shape_12.setTransform(-16.2,0.6,1.8,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A978").s().p("Ah3gEIDsgVIADAeIjsAVg");
	this.shape_13.setTransform(-1.1,-0.7,1.8,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2480A6").s().p("Ah9AAID5gXIACAZIj5AWg");
	this.shape_14.setTransform(1.5,-6.3,1.8,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4A973").s().p("AhhgQIC/gSIAFAzIjAARg");
	this.shape_15.setTransform(1.8,-13.5,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-19.7,48.5,39.5);


(lib.Symbol190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNgOIAWgEIAFAhIgVAEg");
	this.shape.setTransform(14.7,-13.5,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIgKIAOgCIAEAXIgOACg");
	this.shape_1.setTransform(-20.6,14.9,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKgNIAQgDIAFAeIgQADg");
	this.shape_2.setTransform(10.4,4.4,1.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFgRIAFgCIAGAmIgGABg");
	this.shape_3.setTransform(-17.8,-1.2,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEgRIAEgBIAFAlIgFAAg");
	this.shape_4.setTransform(-20,-0.9,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A978").s().p("AiNAKIEWgsIAFAZIkWAsg");
	this.shape_5.setTransform(0.5,11.4,1.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7C66B").s().p("Ah2ADIDnglIAGAgIjoAlg");
	this.shape_6.setTransform(2.1,5.8,1.8,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4A973").s().p("AhdADIC3gcIAEAWIi3Adg");
	this.shape_7.setTransform(7.4,0.3,1.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F382F").s().p("AiCABID+goIAHAnIj+Aog");
	this.shape_8.setTransform(-2.6,-3.7,1.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A978").s().p("AhsAAIDUgiIAFAiIjUAjg");
	this.shape_9.setTransform(2.4,-11.4,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-17.8,52.3,35.7);


(lib.Symbol189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AgjAPIgkgNIACgBIAegKIABAAQAFAAAGgDIAKgIIAJgHIAFgEIARAMIAUAKIAAgDQAHAGALADIAUADIgeAIIgKADQgPAFgJAHIgKAJQgMgKgVgHg");
	this.shape.setTransform(0,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-11.2,10.3,22.5);


(lib.Symbol188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AAAAcIgBgBIgQgJIgggNIgIgCIAfgPIAEgDQAKgEAFgHQAEgEAEAEQASAPAYAHIAPAEIgLADIgTAGIgHAFIgDACQgEABgEADIgGAHQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgBgBg");
	this.shape.setTransform(0,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-9.1,9.1,18.3);


(lib.Symbol187 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AgBAJQgCAEgDAAIgHgDIgSgIIAIgCIATgNQACgCACABQAIAHAGADIASAEIgQAFIgQAKg");
	this.shape.setTransform(0,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-5.1,4.8,10.2);


(lib.Symbol186 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AgEAcIgMgHIgGgCQgJgDgEgDQgFgEgPgCIgFgBIgDgDIADgCIAHAAIAagNIALgHQAHgEADgEQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABABIAOAKIANAGIAGADQAFABACADQABACAGABIAPABIABACIADgBIAAABIgXAIQgRAFgNAIIgJADIgBABQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAAAAAIgEgBg");
	this.shape.setTransform(0,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-10.1,9.3,20.2);


(lib.Symbol185 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AgEAQQgCgEgDgBIgWgLIAAAAIANgFQAHgDAEgEQADgDADAAQACgCABADQAEAGAIAEIAOAEIAEABIAAABIgXAIIgJAGIgCABIgCgBg");
	this.shape.setTransform(0,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-5.1,5.5,10.1);


(lib.Symbol184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AgGAWIgqgVIAugWIANAJIAPAGIAIACQAGABACADIAHAAIAAABIgGACIgZAHIgMAFIgHAHIgEAAIgBAAgAgNAMQgFgHgMgDIgBACIASAIIAAAAg");
	this.shape.setTransform(0,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-7.7,7.1,15.5);


(lib.Symbol183 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("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AKAOIABgBIgJgQgADiEXIALAPIACgBIgMgPgAAKgYIhjApQgFABgCAIQgDAIADAEIAEAKQABAHADAEQADABAAAGQAAAGAEABQAAAEAGAKIAdA/IBACGQADAGAGgDIAjgRIAlgOQAXgIAMgKQAHgEAAgDQACgDgEgHQgMgVAAgKQAAgJgLgIQgFgCgEgGQgFgEgGADIglARIAJAaQACADgDACQgFACgBABQgDALgMACIgBgDIgMgdIgMgYIgEgMIgghPIgBgIIABAAIAFAHQAAgMgPgSIARgJQACAAADABIAKANQADAHACAAQADABAGgDQAPgIAJgCQALgFgGgJQgSghgGgUQgCgIgIAAIgGABgAJ+DPQgHAMgBABQgDADgGAKIgIASQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQADAGgHAKIgEAJQAFgCAKgIIAFgGQADgEADgCIAEgDQABgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQgCgFADgDIAEgGIALgbIABgKIABAAIACAHIACAAQAKgWgCgKIgFAHIgCgBIAHgaIACAAIABAKIADAAIABgIIABgQQAFgOgEgHQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAFgEgHgEIgDAIIABgNQABgDADgDQAGgGgDgHIgDgHIACgFQgGgKAAgQQAAgTgDgHIAAANIAAAPIgEASQgBAdgDAOQgDAcgGAcQAAACgGAIIgCAEIAAAAIAEgBQgEAOgHAPgAHIENQAIACAGgBIgNgEIAHgBIABgCIgVAAQAEABAIAFgAFCD8IAMACIACgCIgGgKgAHIDiIAKAEIADgCIgDgEIgIgBgACcDRIAJAOIAPgDIALgGIAZgJIBIglQAGgEgDgHIgag1QgDgJgIAEIgaAIIgFACIgEAFIACAJQgDANAIAGQgMAIgGABQgKADgEgEQgIgFgCgLIgKgdIgEgOIgGgWQgEgJgKgRIgWgpQgFgIAJgHIgCgBIAkgSIAAAIQAGAFADALQADAIAJgCIAVgHQALgCgFgJIgbg7QgDgIgEgBQgDgCgHABIgSAGIglASIg3AUIgDACQACAEgDACIgFADIAhBQQAMAZAFANQANAUAAANIABABQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIABAFQACAHAFAHIAEAEQADADA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-66.8,138.1,133.6);


(lib.Symbol182 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AAAAkIgFgEIAEgBIgFgEIgDAEIgcgPIgBAAQgEgBgFgCIgJgFIgHgCQgKgBgEgCIgNgDIAVgBIAGgDIAGgDIAOgCIACAAQADgEAGgDIAKgFIAHgEQADgCACgDIAJgGQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAVAMIAOAFIAOAFIASAHQAEACAFAAIAIABIAHAEQgOAAgGABIgKADQgFABgDAEQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgRAEIAAABIADACQgJABgIAGIgPAMIgCABIgBgBg");
	this.shape.setTransform(0.1,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-14.3,11.8,28.6);


(lib.Symbol181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79B934").s().p("AgNAfIgJgHQgOgJgIgCIgPgHIASgJIARgOIAIgGIAIgKIAFAGIABgDIAKAIQAIAJAYAIIAUAHIgyAUIgQALIgCABQgCAAgDgDg");
	this.shape.setTransform(0,0,1.558,1.558,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-9.4,10.6,18.9);


(lib.Symbol180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#88AEAE").s().p("AgVgpIAFgDIAmBWIgGADg");
	this.shape.setTransform(-14,28.9,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88AEAE").s().p("AgVgpIAEgDIAoBWIgHACg");
	this.shape_1.setTransform(-11.8,27.9,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#88AEAE").s().p("AgXgoIAGgDIApBUIgGADg");
	this.shape_2.setTransform(-9.7,26.9,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88AEAE").s().p("AgXgoIAEgDIArBUIgFADg");
	this.shape_3.setTransform(-7.6,25.9,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#88AEAE").s().p("AgYgoIAFgCIAsBSIgFADg");
	this.shape_4.setTransform(-5.6,24.8,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#88AEAE").s().p("AgZgnIAEgDIAvBRIgFAEg");
	this.shape_5.setTransform(-3.5,23.7,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#88AEAE").s().p("AgagnIAEgCIAxBQIgGADg");
	this.shape_6.setTransform(-1.5,22.5,2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88AEAE").s().p("AgbgmIAFgDIAyBPIgGAEg");
	this.shape_7.setTransform(0.5,21.2,2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#88AEAE").s().p("AgcglIAFgDIA0BOIgGADg");
	this.shape_8.setTransform(2.4,20,2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#88AEAE").s().p("AgdglIAFgDIA2BNIgGAEg");
	this.shape_9.setTransform(4.4,18.7,2,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#88AEAE").s().p("AgegkIAFgDIA3BLIgFAEg");
	this.shape_10.setTransform(6.3,17.3,2,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#88AEAE").s().p("AgegjIAEgEIA5BLIgFAEg");
	this.shape_11.setTransform(8.2,15.9,2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#88AEAE").s().p("AgfgjIAEgDIA7BJIgFAEg");
	this.shape_12.setTransform(10,14.4,2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCE2E2").s().p("Ah3gQQBTgfBBg9IBbBlQhUBLhsApg");
	this.shape_13.setTransform(0,21.9,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,0,48.3,43.8);


(lib.Symbol179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00AAE9").ss(6,1,1,3,true).p("AAAGZIAAsx");
	this.shape.setTransform(0,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,6,87.9);


(lib.Symbol177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A0015").s().p("AhYAnQgIgfAegyQAgg4AiAjQBPBLAKAiQAHAbglgGQgQgCgbAEQgdAGgOACIgKAAQgpAAgKgmg");
	this.shape.setTransform(0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-14,32.7,28.1);


(lib.Symbol175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDAD28").s().p("AgaAcIAag7IAbAMIgpAzg");
	this.shape.setTransform(-4.6,8,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDAD28").s().p("AgcBIIAsiSIANACIgwCTg");
	this.shape_1.setTransform(-4.9,-0.2,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#665935").s().p("AgsAmIAdhYQAiAJACgBIAKADIAOAtIgdACIgnArg");
	this.shape_2.setTransform(2.2,-4,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-13.9,20.7,27.9);


(lib.Symbol174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDAD28").s().p("AgOgeIAdgDIgOBBIgLACg");
	this.shape.setTransform(-0.4,8.6,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDAD28").s().p("AgQhJIANgEIAUCZIgKACg");
	this.shape_1.setTransform(-4.8,0.7,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#665935").s().p("AgYAzIgPhbQAkgJACgCIAIgBIAhAkIgZAOIgPA3g");
	this.shape_2.setTransform(0.7,-5.2,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-14.8,15.9,29.8);


(lib.Symbol173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#517070").s().p("AgrgSIALgPIBMA4IgLALg");
	this.shape.setTransform(-29.1,9.6,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#364F52").s().p("Ai7BYIBihsIBhhBIBKgnIBEgOIAmB4IhfARIg0ARIgtAaIh1Bhg");
	this.shape_1.setTransform(-0.5,-11,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],2.3,-10.8,0,2.3,-10.8,30.4).s().p("Ag+B7QgGgCACgPQACgNAFgHIgRAPQgOAKgFgHQgDgFAKgMIAOgNIgUAKQgQAHgDgHQgCgHAOgIIASgLQgVACADgLQABgEAOAAIAHgBIAEgGQAWgoAsgsIAagcQARgPAQgHQgFgKAGgFQAHgEAIAHIAcgPIATBOIgBABIACAGQgJAGgaAZQgcAYgmAcQgGAFgTAKQgQAJABALIAFALQAEAIgFADQgJAFgLgWQgDAFgEAVQgEANgFAAIgDgBg");
	this.shape_2.setTransform(-24.1,5,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.7,-36,78.2,63.4);


(lib.Symbol172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKApIAEgCIAFAIIAEgCIgEgHIADgCIAFAHIADgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgDgEIADgCQADACABADQADAGgBACQgBADgFACIgLAHgAAKAkQgDgBgDgEIgCgHIAEgCIACAHIACACIABAAIABgBQgBgIABgDQABgCADgBQADgCACABQACABADAFIACAGIgEACIgCgGIgCgDQgBAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIABAFIAAAFQAAACgEABIgEABIAAAAgAAAASQgBgBgDgFIgBgFIADgCIACAFIABACIAGgCQAEgCABgCIgBgEIgDgCIAEgBIADACQADAFgBADQgBADgGAEQgFACgDAAIgCAAgAgKAAIgDgFQAFgGAJgLIAEAGIgEADIAEAHIAEgCIACAFQgNADgHAAIgBAAgAgGgEIAHgBIgBgFgAgZgbIAEgCIAFAJIAEgCIgFgJIAEgCIAFAJIAIgFQAAAGgBABIgQAJgAgigsIAEgCIAFAJIAEgCIgEgIIAEgCIAEAIIADgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgDgEIAEgCIADAFQADAFgBADQAAACgFADIgMAHg");
	this.shape.setTransform(37.1,-25.1,1.798,1.798);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAzQgCgEADgEIAKgQIgSAKIgvhaQACgBAFAFIApBPIAXgMIACACQACAEgDAFIgKAQIASgKIADAEIgbAPg");
	this.shape_1.setTransform(38.7,-19.8,1.798,1.798);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFACQgEgBgBACQgEABgCgDIgCgCQAIgDABABQADABADACIACAEIAAAAIgEgCg");
	this.shape_2.setTransform(29.7,-31.4,1.798,1.798);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9D3A4").s().p("AgNAQQgEgBgDgEQgCgDACgEQABgEAEAAIAVgOQAEgCAEABQAEABACAEQADADgCAEQgBADgEABIgVAOQgDABgDAAIgCAAg");
	this.shape_3.setTransform(14.5,-15.6,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9D3A4").s().p("AgQARQgDgDABgEQAAgFADgDIARgRQAIgHAHAHQACADAAAEQAAAEgDADIgRARQgEADgEAAQgEAAgDgCg");
	this.shape_4.setTransform(17,-13.2,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9D3A4").s().p("AgQAQQgCgCAAgFQgBgEAEgDIARgRQADgDAFAAQAEAAADADQACACAAAFQAAAEgDADIgRARQgEADgDAAQgFAAgDgDg");
	this.shape_5.setTransform(19.2,-10.5,1.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9D3A4").s().p("AgNAOQgGgGAGgHIAPgOQADgDAEAAQAEAAACADQACACAAAEQAAAEgDACIgOAPQgEADgDAAQgEAAgCgDg");
	this.shape_6.setTransform(21.5,-8.2,1.8,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF0024").s().p("AAFBnIgIgQQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAIgJAEQgPAFgRgDQgTgCgTgRIgPgSIgMgPIgIgLQgCgDABgEQABgFAFgCIAygaQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgNgSIgCgDQAAAAgBgBQAAAAAAAAQAAgBABAAQAAAAAAAAQADgEA8giQA4ggAIgCQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAJAYQALAXA0BiQADAGgEAGQgDAFgwAbQgwAagGAAQgGAAgEgGgAhDAJQgGAAgHAEIgVAMIgCACIAKAOIAXAZQAUAQAVgEQALgBAFgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIgTggQgJgPgKgIQgJgIgHAAIgBAAg");
	this.shape_7.setTransform(30.3,-20.8,1.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#517070").s().p("AgkgnIAPgLIA6BNIgSAYg");
	this.shape_8.setTransform(-0.2,3.2,1.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#364F52").s().p("AiZApQD9iZAHgHQAAADAWAeIAYAiIhvBeIhwBOg");
	this.shape_9.setTransform(-24.6,18.8,1.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5B087").s().p("AgSgSIAAgCQAAgEAEgDQADgDAFAAIAgAEQAFAAADAEQADAEgBAEQAAAFgEADQgEADgEgBIgYgCQAAAPgSANIgRAJg");
	this.shape_10.setTransform(9.8,-15.3,1.8,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7896D").s().p("AAJAkIgXgYQgTgRgBgLQAAgGAKgLQAKgKAPANQAIAGAHAIIAOAQQAKAPgMAPQgGAIgHAAQgDAAgDgCg");
	this.shape_11.setTransform(16,-11.2,1.8,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],-2.8,5.1,0,-2.8,5.1,33).s().p("AisBVIA8gyICgh1IAJgKIATg7IASAGQATAAAWARQAKAIAHAIIAOAIQAMALgLAOQgUAZgUAIQgMAFgFgCIgBAAQgBgBiUCHIhhA9g");
	this.shape_12.setTransform(-7.3,7.6,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-40.5,104.8,81.1);


(lib.Symbol171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6001B").s().p("AhKAzQAegFAQgIQAwgZAmg6QAKgCAHgDQguBDg6AYQgWAKgSAAIgFAAg");
	this.shape.setTransform(2.3,0.1,1.799,1.799);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF0024").s().p("AhJAxQgJgBgFACIAFgGQAJAEAPgIIAXgNQAegSAMgUQAEgHgCgQQgCgKAKACQAMADAXgDQAWgCAOgGQguBDg6AYQgVAJgWABIgOgCg");
	this.shape_1.setTransform(0,-0.2,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-9.4,31.8,18.8);


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594E42").s().p("AAmgQIAAAaIhLAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-1.7,7.7,3.5);


(lib.Symbol169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594E42").s().p("AhAAPICBgdIAAAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-1.5,13.2,3.1);


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594E42").s().p("ABbgVIAAAbIi1AQIC1grg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-2.2,18.4,4.5);


(lib.Symbol167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594E42").s().p("ABLgYIAAAfIgEAAIgIAAIAAABIgBAAIiIARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-2.5,15.1,5.1);


(lib.Symbol165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3B3B").s().p("Ah/AqQgEgDgCgFQgDgPAOgDQAMgCAFAMQADAPgOACIgEABQgDAAgEgCgABxgRQgEgCgCgHQgBgFADgFQADgFAFgCQAOgCADANQACAFgEAGQgCAFgGABIgDABQgEAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-4.4,27,8.9);


(lib.Symbol163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AAGBSQgNgOgEgbQgQAAgUAMQgWAMgHgWIgEgIQgOgRAUgHIA0gRIgEgLQgMgSABgXQACgHgDgBQgKgHAJgQIACgDIAaAAIAFAFQAEADADAAQACgBACAJIAMAmIAIARIALgJQANgLAJAGIAIACQASAAACASQACANgDACQgBADgNAFIgeAKIAOAgIACAHQgCAWAHANIgbABIgBAAQgOAAgOgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-9.4,17.5,18.8);


(lib.Symbol162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AAPAmIgQgQQgLAHgFAFQgKAKgNgIQgMgIAKgKIASgSIgLgMQgIgIAAgEQAAgDAHgJIAIgHIAYAVIAKgMQAIgJAMAGIAWAMIgdAZIAPAUQAKALgJAJQgDAEgEAAQgGAAgHgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-4.4,9.6,8.8);


(lib.Symbol161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AgSA0QgSgGAGgRIAHgXIgjgTIAIgLQAGgLAEgBQAFgDAKADIASAEIAGgFQAMgdAZAVQAHAEgFAKIgGAUIABAEIASAJQAHAGABAEQAAAEgGAIIgJAIIgagEIgEAEQgEASgGAEIgFABQgHAAgKgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-5.5,11.9,11.1);


(lib.Symbol160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AgMA4QgFgBgDgLIgCgXIgkgFIgIgWQgFgTAWgCIAXAAQADgSAFgIQAGgHAMgBQALgCAIANQAEAGABAQQAcAFAHAFQAKAJgCASIgqAJIgCAqQgHACgHAAQgJAAgMgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-6.3,13.7,12.6);


(lib.Symbol159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AgLAaQgQAEgEgBQgLgFgHgKQgIgJAMgFIAVgMIgBgIQgDgKABgFQADgDAJgEQAPgIAHAQIAIALIAmALQACAMgJAEQgMAEgFAEIAAAeQgIAEgIAAQgOAAgKgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.6,10.8,9.3);


(lib.Symbol158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AAAA3QgFgCgDgOQgEgPgDgDQgEgBgMAEQgLAGgGgCIAAgdQAHgBAOgEQgFgTAAgKQAAgDANgHQAOgGACgEQAEAHACAIIAFAQQAIACAKgGQANgFAGAAIAEAfQgCACgKADQgLADgEACIAIAeQgFAKgLAFQgHADgFAAIgCgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-5.6,9.9,11.3);


(lib.Symbol157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AAJAwQgEAAgFgLIgKgRQgTAOgGgBQgHAAgKgWQgEgLAPgGIAPgIIgEgMQgGgLAJgGQALgIAKAHIAMAPQAEgBAMgIQALgIADACQAGgBAEAKQAGAHACAHIgiATQAFAOANAQQgFAJgJAGQgIAFgFAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.8,10.9,9.7);


(lib.Symbol156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AgQBIIgYgEIAMgyIgkgNQgMgFgBgBQgCgDAGgMIACgKQADgLACgBQACgCALACIAnAKQAJgUAGgLQAGgKALgCQALgBAJAKQAJAJgIALQgEAHgEASIAeALQAMAFAEAGQAFAIgKAUQgCADgIgBIgwgGIgHAZQgGASgNAAIgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-7.2,15.8,14.5);


(lib.Symbol155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AgzBbIgKgFQgYgGAMgUQADgJAZglIAJgNIgNgEQgcgKgOgWQgFgGgDgBQgOABgEgWIABgEIAZgVIAIACQAGACAEgFQABgDAKAHIAmAbIAWAKIACgRQAFgUAMgBQADABAFgFQASgLAQAOQALAJABAHQAAAFgIAOIgWAgIAnAUQAFAAABACQAOAWASAJIgaAWQgOAMgVgCQgYgBgZgYQgRAPgHAYQgGARgNAAQgHAAgJgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-9.6,23.7,19.3);


(lib.Symbol154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A8EC").s().p("AgEAGIABgLQAGABACAEQABAEgEABIgCABg");
	this.shape.setTransform(12.5,7.9,2.371,2.371,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A8EC").s().p("AgEgGQADgEACAEQADADABADQABAEgCABIgJAEg");
	this.shape_1.setTransform(16.5,18.1,2.371,2.371,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A8EC").s().p("AgCAGIACgNIACgCIABAEIgCAGIAAAJIAAAAQgDAAAAgEg");
	this.shape_2.setTransform(-15.2,-10.5,2.371,2.371,-15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A8EC").s().p("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");
	this.shape_3.setTransform(-2.7,-9.4,2.371,2.371,-15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A8EC").s().p("AgCAeIgCgTQgBgVADgOIACgKIAEABIABA+QAAADgDACIgCABQgBAAgBgFg");
	this.shape_4.setTransform(27,10.7,2.371,2.371,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A8EC").s().p("AA7AlQgDgEgBgGQgBgFgGgOIgLgZQgCgHgGgIQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIgQABIgeADQgJABggACIgKAAIADgCIALgGQAFgCADAAIAqgHQAXgDARAAIALgCIAEAFIACAGQAAAIAGAWIAKAfQABgEgBgDIgCgHIgMgzIAFgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQABAUALAkIAEALQAEAKgCALIgDACQgJgIgDgFg");
	this.shape_5.setTransform(38.7,-27.9,2.371,2.371,-15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A8EC").s().p("AhrBXQgFgBgBgCQgDgGAAgCQAAgIgDgOIgIgwIgCgUIgEgsIgDgZIAAgEQAJAAAHAIIgFABQgBAIACALIAEATIANBAIAGAbIALAFIgMAFIAEACIAggDIADAAQAFgCAJAAIAOgBIAFgBQADgBACgCIADgBIAWgGQAEABAMgEQAIgDAFAIQAJAAAmgGQAmgFAEgCIgHgiIABgCIAMAFQAEAEACAKIADAOQADADAAAGIABAKIgKADIg0AGIgUADIgVAEIgVADIhtAQQgFAAgBACIgBAAIgEgBg");
	this.shape_6.setTransform(51.4,47.8,2.371,2.371,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-74.6,185.5,149.3);


(lib.Symbol153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAHQgFgHAFgFQAGgGAGAGQAHAFgHAHQgCACgEAAQgDAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,2,1.9);


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgGgGAGgFQAFgGAGAGQAGAFgGAGQgEADgCAAQgCAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,2,2);


(lib.Symbol151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgGgHAAgIQAAgIAGgHQAHgFAHAAQAIAAAGAGQAHAHAAAHQAAAJgHAGQgGAGgIAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.2,4.4,4.4);


(lib.Symbol150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAPQgHgGABgJQAAgIAHgHQAGgGAIAAQAIAAAHAGQAHAIAAAHQAAAJgHAGQgHAHgIAAQgIAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.5);


(lib.Symbol149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgFgGAFgGQAHgGAFAHQAHAFgHAGQgEAEgCAAQgCAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.Symbol148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAPQgGgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAHAIgBAHQAAAJgHAGQgGAHgJAAQgIAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.5);


(lib.Symbol147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgHgGAHgFQAFgIAGAIQAIAFgIAHQgDADgDAAQgBAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2.1,2.1);


(lib.Symbol146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAPQgFgGAAgJQAAgIAFgHQAHgHAIABQAJAAAGAHQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.4,4.5);


(lib.Symbol145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAVQgJAAgGgHQgGgGAAgIQAAgJAHgGQAHgGAHAAQAKAAAGAGQAGAHAAAIQAAAJgGAGQgHAHgIAAIgBgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.4);


(lib.Symbol144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgGgGAGgFQAGgIAGAIQAIAFgIAGQgDAEgDAAQgCAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2.1,2.1);


(lib.Symbol143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgGgGAGgFQAFgHAHAHQACACAAADQAAAEgCACQgEADgDAAQgCAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.Symbol142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAHQgGgHAGgFQAGgHAGAHQAHAFgHAHQgDACgDAAQgCAAgEgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.Symbol141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAHQgHgHAHgFQAFgHAHAHQAFAFgFAHQgEACgDAAQgCAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.Symbol140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAWQgIAAgHgHQgGgGAAgJQAAgIAGgHQAIgGAHAAQAJAAAGAHQAHAHAAAHQAAAKgHAGQgGAGgIAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.5);


(lib.Symbol139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgIgGAIgGQAFgGAGAHQAHAFgHAHQgDADgDAAQgCAAgDgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2.1,2.1);


(lib.Symbol138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAPQgGgHAAgIQAAgJAHgGQAHgHAHABQAKAAAGAHQAGAHAAAHQAAAJgGAGQgHAHgJAAQgIAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.6);


(lib.Symbol137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGQgGgGAHgFQAFgGAHAGQAGAFgHAGQgDADgDAAQgCAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.9,2.1,2);


(lib.Symbol136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAPQgFgGAAgJQAAgIAGgHQAHgFAIAAQAJAAAGAFQAHAHAAAIQAAAJgHAHQgHAFgIAAQgIABgIgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.4);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgGgGAGgGQAFgFAGAFQAGAGgGAGQgEADgCAAQgCAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.Symbol134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAHQgHgHAHgFQADgDACAAQAEAAADADQAFAFgFAHQgEACgDAAQgCAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.Symbol133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAVQgIAAgGgGQgHgGAAgJQAAgIAHgHQAHgHAHACQAJgBAHAHQAGAGAAAIQAAAJgGAHQgHAGgHAAIgCgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.4);


(lib.Symbol132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAWQgIAAgIgHQgFgGAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAHQAHAHAAAHQAAAKgHAGQgGAGgJAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.5);


(lib.Symbol131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgHgGAHgFQACgDADAAQAEAAACADQAGAFgGAHQgDACgDAAQgCAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.Symbol130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQABgGAEgEQAEgEAFAAQAHAAAEAFQAEAEAAAFQAAAGgEAFQgGAEgFAAQgEAAgFgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,3.2,3.2);


(lib.Symbol129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAPQgGgGAAgJQAAgIAGgHQAHgFAIAAQAJAAAGAFQAHAHgBAIQAAAJgHAHQgFAGgJgBQgIABgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.4,4.4);


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAPQgGgHAAgIQAAgHAGgIQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAIgHAHQgGAHgJAAQgIAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.5);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAWQgJAAgGgHQgGgGAAgJQAAgIAGgHQAHgHAIABQAJAAAHAHQAGAGAAAIQAAAJgHAHQgGAGgIAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.5);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAJIgBgGIACAFIAAgGIABAGIACgIQAAgGABgEIgBAIIAAADQAAAGABACIACgJIgBAHIABgDQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIACgEQABACgCADIgDABIgCABQgCAAgCgCg");
	this.shape.setTransform(0,1.9,1.732,1.732);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCF5C9").s().p("AgDAMIgBgBQAAgGgBAAIACABIgBgEIABACIABgEIABACIAAgFIABAFIAAgFQABgDAAgGIABAKQgCAEABADQACgEABgDQACAEgCAHIACgEQAAAEgCADIgEABQgBAAgCgBg");
	this.shape_1.setTransform(-0.1,1.5,1.732,1.732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8E70C").s().p("AgEARIgBgBQgEgFADgHIACAEIAAAAIAAgHQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAAgHIABADQABgDAAgDQAAgJAAgCQAAAFACAHIAAAHIgBABIABAAIACgDIAAAEQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIgBAIIACgCQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQACAFgGAHIAAAAIgEABQgCAAgCgBg");
	this.shape_2.setTransform(0.1,0.7,1.732,1.732);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFCFA").s().p("AgEANIgBgCQABgHgCgBQABgBACAGIABgIIABADQAAgGABgCIAAAFQACgHgCgIQADADgBAOIAEgEIgCALQADgDAAgCIgCAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDABQgBAAgDgDg");
	this.shape_3.setTransform(-0.2,1.1,1.732,1.732);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3BC00").s().p("AgEAUIgCgCQgFgFAFgLIABAEQADgHAAgEIABAFQABgEAAgEQAAgIABgEQgBAHACAHQABAEgBAFQABgDACAAIABAKIACgFQADAIgFAGIgBAAIgBABIgEABQgCAAgCgBg");
	this.shape_4.setTransform(0,0.1,1.732,1.732);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB7F1F").s().p("AgEAUIgDgCQgFgGAGgLIABAEQACgFAAgGQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABgCAAgKQAAgDABgEQAAAHABAGIABAJQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQgCAEACAFQACgCAAgEQAFAKgHAGIgBABIgDABIgCABQgCAAgCgCg");
	this.shape_5.setTransform(0,0,1.732,1.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-3.9,3.7,7.8);


(lib.Symbol123copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1BBDA").s().p("AgTAAQABgTASABQAUgBAAATQAAATgUAAQgSAAgBgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5E3F0").s().p("AgTAAQABgTASABQAUgBAAATQAAATgUAAQgSAAgBgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBEIAAgTIAFAAIAAAMIAFAAIAAgKIAEAAIAAAKQAEAAABgBQABgBAAgEIgBgGIAGAAIABAHQgBAIgCACQgCACgHAAgAgEAuQgFAAgBgCQgDgDAAgGQAAgFACgDIAEAAIgBAIIABADIACABIACgBQACgJABgCQACgCAEAAQAEABACACQACACAAAHQgBAGgBACIgFAAQABgEAAgEIAAgEIgCgBIgBABIgCAGIgDAFQAAABAAAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgBAAgAgKATQgDgCABgIIABgGIAEAAIgBAGQAAABABABQAAAAAAABQAAAAAAABQABAAAAAAQABABAFAAQAGAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgGIAFABIABAFQAAAHgDADQgDADgIAAQgGAAgEgDgAgMgGIAAgIQAKgFAQgEIAAAIIgGABIAAAKIAFABIAAAEQgPgBgKgGgAgFgJIAJAEIAAgIIgJAEgAgMgZIAAgUIAFAAIAAAMIAGAAIAAgLIAEAAIAAALIALAAQgBAIgEAAgAgMgwIABgTIAEAAIAAAMIAGAAIAAgLIAEAAIAAALQADAAABgBQACgBAAgEIgBgGIAFAAQABABAAAFQAAAIgCADQgEACgFAAg");
	this.shape.setTransform(8.1,-2.5,1.732,1.732);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBKIAAgEQgBgFAGgDIATgLIgYAAIABh8QAFAAAAAIIgBBtIAeAAIABAEQgBAGgFACIgSAMIAXAAIAAAGg");
	this.shape_1.setTransform(7.2,2.5,1.732,1.732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFAFQgDgDgDgBQgGgBAAgCIAAgGQAJACADADQADADAAADIAAAGIgDgEg");
	this.shape_2.setTransform(3.6,-13.1,1.732,1.732);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0927").s().p("AgYBsQgJgBgEgHQgCgEgBgDIgBgWIgBgDIgBAAIgMgCQgPgDgMgHIgIgGQgVgPgIgdQgFgOgFgjQgCgJAAgHQABgIAHgDIAHgBIAEAAIA/AAQABAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIgBgVIgCgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIADAAIAMgBQAjgCBcACQAeAAAGACQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgLDGQAAAIgHAFQgHADg4AAQg5AAgRgCgAhvgzIADAVIADARQADAPADAGIAIAPQAMARARAGIAVAFIAAgCQAAgsgBgFIgFgUQgEgYgKgFQgFgDgLAAIgfAAIgBAAIgCABg");
	this.shape_3.setTransform(0,0,1.732,1.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-19.2,45.8,38.4);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36461A").s().p("AiMA3QgGgFgBgGIADAAQAGgCgCgGQgBgEgDgBIAEgEIACgBQAHgFAIAGQAHAFAAAIQgBAJgHAGQgEACgEAAQgEAAgEgCgAB3ghQgCgDgBgDIAEAAQAHgCgDgHQgBgEgDgBQADgDAFAAIADAAQAIAAAGAHQAFAHgEAIQgDAIgKAAIgBAAQgIAAgFgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-5.7,29.7,11.6);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAeIAthAIAUAMIgpA5g");
	this.shape.setTransform(-10.1,10,1.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],7.2,4.9,0,7.2,4.9,26.8).s().p("ABEAyIgHgLIgDgEIgGAAQgjACgtgKIgegHQgQgFgLgHQgFAHgFgDQgFgCABgJIgGgBIAcg0IABAAIADgEQAHAEAbAHQAXAGAkAOQAGADAOAJQANAHAHgFIAFgIQAEgGAEACQAIAEgMAQIAVgCQANAAAAAFQABAHgbgCIARAGQAOAGgCAFQgCAEgOgCIgQgFIAQAIQAMAHgDAEQgEAFgLgFIgQgGIAMANQAHAJgIACIgCABQgEAAgFgHg");
	this.shape_1.setTransform(5.4,15,1.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B88B1").s().p("Ag7BsQgZgVADg1QAEg0BPg3QApgbAngRIhBDFIgyAmIgBAAQgNAAgMgKg");
	this.shape_2.setTransform(-9.5,-4.6,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-24.8,47.1,49.6);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AghA8IAAg8QACgLALgGIAYgSQANgKAHgNIADgCQAEABAAAEQAMAngiAVQgHAEgIAIIgCAJQgHAcgHAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-6.1,6.9,12.2);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AAJBJQgTgTgBgBQgNgQgMgXQgFgMAPgCQgGgMAIgUIAKgVQAKgRgJgRIgBgLIAKAMQAEAHAAAIIADBPQADAPAVAVQAUAVgPAXIgGAKQgEgNgNgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-9.9,7.8,19.8);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AgMA5QgNgKgGgWQgHgWAHgQQAMgjgFgTIgIgTQALAEARAPQARAOACAXQACAQgEAYQgGAaAKAPIARAaIACAKIgwgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-8.7,7.3,17.4);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AAkBZQgagIgGgEIgTgLQgMgIgFgJQgPgZAEgUIAHgRIALgUQgBgggMgPIgHgJIABAAIAdARIACAGIANAqIgCAEQgGAQAFAWIABgUIABAAIAFAeQACAfAjAWQAGADgCAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-9.1,9.3,18.2);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("ABSCIQgJAGgVgMQgjgQgRgmQgNgUALghQACgJAAgNIgBgVIgBgMQgDgQgNgGQgRgJgWgUIgOgHQgTgKgJgIQgJgJgFgZIAEgCIATAVQAJAIAVAMQAUALAoASQAcAOARAgIAFAFQAGAgAAANQACAPgCAdQABATAJAGQAEADABAGQAGASAaAPIALAHIgBADIgXgFIACAGIgBABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-14.5,22.8,29.1);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("ABQBLIgDgCQgDgFgFAAIgKABQgHAAgHgHIgQgVQgFgDAAgDQgCgJgHgIIgPgNQgCgEgQgDIghgIQgUgFgMgHQgbgQgJgXIgDgLQAhAHAGgBQAGABAJgCIAQgDQAngFAJABQAlADAPAqQATA4AjAeQAGAHAOAKIABACgAAAgvQAAgKgKAAIAKgIQgDgCgLACQgLABgBADIAAADQAAABAAABQAAAAAAABQAAAAABAAQAAAAABAAIAOgCQAAAIAKACIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-7.6,24.6,15.2);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AgEAZQgEgEgOgBIgqAGIgBgDQADgMAMgLQANgLAMgBQARAAAZAHQAOAEALgHIAYgXIgCAcQAAAFgEAKIgGAIIgeAMIgHAAQgQAAgFgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-3.3,13.4,6.6);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("ABLBKQgIgDgDgEIgRgRQgIgKgBgMQABgBgEgEIgEgFQgDgIgDgDIgFgKQgDgGgFgCQgMgKgGgCQgMgFgMgBQgJAAgTgMQgOgIgKgLIgHgRIACgBIALAGQAMAJASABIAfAAQAmABAVAMQASAJAKAWQAEAKABAKIgBAbQgBAVAHALQAGAJACAJIgPgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-7.9,18.2,16);


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("ABZCFQgWABgOgGQgqgQgSgYIgKgLQgEgIgBgIQAAgFgCgJIgIgOIABgJQAHgOgKgIIgCghIgEAEIgCAAIgDgkIgEgKQgRgTgXgTQgFgFgMgHIgagHIACgDIANADQAPAEAIgEQADgBADACQAlAOATAJQACABAKANQAUAaARAxQAFAKAFATQACAMAJAYQABAFAGAJIgBAIIA8ApQAHAGARAGQAFAEgBADQgDAEgDgBIgVABIgQgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-13.4,26.6,26.9);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AAsBcQgOgGgJgGQgSgLgFgSQgIgTAFgVQACgGgDgFQgHgagEgJQgEgJgQgTIgagdIgIgFQATgGAIADIAbAIQADABAFAHIAEADQAMACAJAPQAYAgABAVQAAATgCALQgKAnAkAlIAGAGIgFABIgWgKgAAgA4IAFANIACgBIgEgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-10.2,14.4,20.6);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AA2BrIgfgJQgTgGgPgWQgUgZgEggIgBgFIAKgqQADgQgMgOIgggqIATAEQATALAVASQAJAIAMAgQAAADgEAHIAHADIgCAKQgDAFADAJQAFANgJAQQAVAiAKAOQAKAMARANIgLABIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-10.7,13.6,21.5);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AhRAvIgOgFIAAgEIAQgDQAmgJAYgYQAKgRAHgHQAEgNAJAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQACgGAHgBIAKgBIAbgDIAFABIAdAMIABAEIgIACQgVACgPALIgHADQgOACgJAVQgHARgGAIQgGAJgRACIg2AFIgNgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-5,19.3,10.1);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AgsBxQAGgHAOgNQAVgSgCgZQgEgsgKgeQgIgYAQgaQAMgXAlgZIAJgDIADADIgHAJQgbAegGAUIgEAGQgCAJADACQAHAFABALIACAUQADAFAHAcQAFARgEARQgGATgRAPQgIAIgXAOQgMAJgLADIAFgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-12.6,10,25.2);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AhJCmIATgSQAggmAPgUQAOgZgEgdIAAgXIgDgfIgEgHIgHghQgGgWAQgJQAHgFgHgKQgEgCAEgFQAFgZAXgLQAVgMAagJIgRAPQgHAEAEAIIgHARIgBAFIAEAiQgCAhAOAXQAGAKgMACIgDAEIAGAEQAJgDADAMQAIA2gjArQgJANgMALQgEAEgLAGIg8AfIgTAHgAAjBIIAAAIQAJAAAAgBIANgLIADgIQgDABgGgCgAARA6QgEACgBAGQAAAAAAABQAAAAABABQAAAAABABQAAABABAAQABABAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQACAAAIgIQgIgFgCAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-16.9,14.9,34);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("AARBUQgegagDgEQgQgQgCgiQgBgEADgIQAEgHABgFQAMglgKgYIgBgDIABgIQAGgBABAEQAPAQACAEIAHAfQAEANgFAeQgCAVAMAZIAUAoIgDACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-9.3,7.1,18.7);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E10063").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.3,-58.6,142.6,117.3);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE00").s().p("AANBCIgXAZIhMjNIBfBrIAagbIA0CVgAAjgiIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-11.5,17.5,23);


(lib.Symbol95 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE00").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-19.8,184.2,39.7);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEE00").s().p("AseDAQgDgBgBgGIgKhOIgKhnQgEg1gEgcIgBgJQgBgFACgEQgFgEACgHQADgHgCgCQgDgGACgIQABgLgBgDQgCgGAHgIQAHgHAHAAICRgHQAJgBAEAEQAFAEgBAIQgBAPABAGIAEAUQABAIgCADQgDACgJAAQgRAAgSADQgIABgEgDQgDgCgBgIQAAgFgIgPIgCAOQgCAPgBAAIgYACIAGAVQACAKgEAKIgDgJIgBAAIgCAJIADAyIAEgBIAWgGIBSgRQAIgCAEANQACAJADASQADAQgHAAIACABQACADgBAEQgBARADAXIAFAoIACAhIADAQIgJACIABADQABAJgDAEQgDADgJADQgVAFggAAQgsABgJABIgzAEIgCAAQgEAAgBgBgArpArIgBAQQABARAEAPQABAHAAAMIAAAUIAAADQAGABAIgDQAHgCADgEQADgCAGAAIARgBQANgCAAgDIAAgLIgMhGIgOACIgcADIgNACIgBgFgAomCfQgCgCgGgDIgIgEIgGgGQgCgDAFgEQACgCAAgDIgDg6IgCgzIABhZIABggQAAgEAGgHIAFgGIAIgFQAugDAoAFIAeADQAGAAABAIIADAIIAEAHIACAGIAGA3QAAADgDAGIgDgBIACgIIgCAAIgCADIAAACIACAgIABAhQABAZgEAwQAAAPgDAPQgCAMgEAEQgEADgNAAIhWACIgEAAQgIAAgFgEgAnuguIgTACIgBAPIgDBfQAAAPAEAKIAEAHQAAACgHACQATAKAVgIIADgNIACgMIgBgcIgChgQgFgCgGAAIgJABgAmCBdQgGgIABgFQAAgFAIgFQAHgEgHgDIgHgEQgHgHAEgIQADgHAJADIATAEIADgeQADgOAHgMQAEgGAEgSIAKg2IAKgxIAsgHIAHAEIAFAEQADAEAGALIAWArIAYArIAHAMQAFAHACAGIADALIALAaIAGABQAJABAJAGIAPALIgcBDQgCAEgEABIg0AGIABgPIAEgQQABgIgJACIhaAUIAHAFIAIAIIAFAJIADABIgFAEIgFAEIglARIgog8gAkSgqIgRA0IgDAFIgHAXIA+gOQgKgMgIgUIgOgjgAhvCGQgIAAgCgCQgDgCAFgIQAEgGgDgEQgDgEgIgBIAAgNIAFijQABghgFgZQgCgNAGgJQAHgJANgBIAQAAQApgCAQACQAfAEAVASQAPALAHAVQAIAVgDARQgDAPgMARIgWAdQgDADgEACIgqARIgJAFQgEAEAAAGIABA5IABAIIACAIIgLAZQgDAFgGAAgAhAg2QAAAMAMgCIAWgCQAFAAAFgKQAGgKAAgIQABgGgGgHQgFgHgHgCIgggFIgBAvgABxB7QgOgGgNgSQgRgaABgrQAAgLgCgTIgDgcQgBgKACgQIABgaIAAgPIAAgXQABgGAHgOIgDgDIAQgPIAQgPQAGgFAOAAQAWAAAQACQAaAEALAPQAQAYAFAfQAEATAAAnIAABlQAAAFgFAKQgEANgJAMIgTAWQgCACgKABQgSAAgJACIgOACQgMAAgJgFgACGgRQgBAmAIAxIAHgGIAQgoQABgDgCgCQgDgFABgGQAAgEADgFQADgGgBgGIgJhMIgDgHIgGgKQgNArgBAugAEWByIgFgQIAAgFQACgBABgDQABgEgBgCIgDgEIgBgOQAAgJgCgGQgCgEAAgIQAAgIgCgEIgDgFQgDgMAAgEIABgFQAAgBgDgBIAAgCQACgHgCgLIgEgSIgDgVIgDgVIgCgYIgGhBIAFgCQAEgCgBgEIAEgBIA+gEIArgHIAUgBQAIAAADADQACADACAJIAJBAQABAGgCACQgDADgGgBIgXABQgKAAAAgJIgBgJQgBgFgDgEQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIADgFIgrAHIADACQgHACgCADQgCAEACAGIAKAvIADAPIADAPIAAAXIgBANIABAQIAAAPQAAAMAGAHQAEAFAKAAIAWgEQgFgFABgGQAAgDAEgGQABgCAAgDIgBgFIAGgDIAGgBIAdgBQAJAAABAIIAKA3IAAAFQABAEgBACQgCACgFABIhUARIgOABIgOABIgNADIgQgBgAHoBtQgFgWADgjQAEgsAAgKQgBgXABghIABg4QgOgFgOgBQgNgBgZADIgEgiIAAgiIDWgEIgFBMIgsgBQgMABgCAQIgKBLIgIBbIABATQAAAJgFAFQgEAGgKABIgcABIgIAAIgMAAgAKiBVQgHgIABgNQADgWgEghIgSiaIAAgNQAHgBADgFQACgEgEgFQgFgHACgDQACgCAIAAIAqgEQAFAAADAEQAFAHAIARIgBAHIgBAIIAEA2QAAAKAOADIArAPQAEACACACIAYAZQANAQAEAPQAEANgFAUQgGAWgNAMQgUASgeAGQgOAEgoABIgQABIgBAAQgMAAgGgIgALUgIIAEAqIAegHQAGgCAFgHQAFgHgBgGQgBgGgGgIQgHgJgEAAIgVAAIgBAAQgKAAABAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-19.3,167.1,38.8);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A70A").s().p("ACzCIIgaABIgDAAQgKgEgPACIgaAAQgNgCgHAAIgqAAIAAgEIAOgBQgCgDgDAAIgEAAIilgBIg8ABIgKAEIgGgCIghgBIgJACIAAABIAwAAIBagCIAAAEIgJABIhdACIgygDImXACQgWgCglACQgsADgPAAIg0AAQgTgFgJAAIgcAEIgBgMIAGgEQAEgCAAgEIAEgCIAZgGIACAIIAQgFQgCgEgEgBQgGAAgBgCQgCgOABgHQAAgJAIAAIAJgBIgCgJQgHgOAKgGQgJgFAAgFQAAgFAJgJIgEgPQgQgEgCgLQAAgDgFgDQgIgEAAgLQAGgKAOABQAHABAPgCIACgMIgWgCQgIACgGgGIgLgJQgBgBACgJQgLgBADgMIgKgBQAEgOgLgCQgFgBABgHQABgFAHAAIAKgCQAHgCAFADIACAAQAJgGANgBIAYAAIAHAAQATADAcgCIAugEIA0ABIELAHIAvgBIGPABIDggFIA9ACIHngJIAGACQABAKAAAEQgCANgDADQgBABgOACQAEAIAEABQADACALABIAeADIABAWIAbAJQAJAEgDAHQgBAFgIgCIgMgBQgWgFgIAUIgDAIQgCAFgFAAIgFARQgEAJACAIIAEASQgMADgSABIgeABIgOADIALAGIgCAFIAFgHIASgCQAMAAAIADIgGAMQAYAJANgBQAFAAAOADQAFAAAFAGIAAAKIAEANIgUAAQgKgBgLALQgEAEgHACIgPACIgHACQgMAJgSAAIgfAAIgegCQgKgBgOABIgZACQghADglABIh7AAIg7gCIgvADIiaAGQgKgEgQAAgAEsCEIAJAAIAAgBIgJAAgAs7CEIAtAAIAAgDIgtAAgAr7CAIAAABIAdAAIAAgCgAl0B/IBWAAIAAgCIhWAAgAstg3IgBALIAUAAQAHACAKgKQgKgEgGAAIgEgBIgQACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-14,179.1,28);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-79.5,-99.4)).s().p("AsaI+ITg27IFVFUIzSWmg");
	this.shape.setTransform(7.3,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.2,-90.9,159.1,178.8);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-175.5,-102)).s().p("AifvlIG8AJIhkfBInVABg");
	this.shape.setTransform(1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-99.8,57.1,199.6);


(lib.Symbol86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-272,-99.4)).s().p("Al6PhIAA/BIL1AAIAAfBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-99.4,76,198.8);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-98.3,-231.9)).s().p("AvMEsIAApXIeZAAIAAJXg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.8,-30,194.7,60.2);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-307,-230.4)).s().p("AvJE8IAAp3IeTAAIAAJ3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-31.6,194,63.3);


(lib.Symbol83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.packs, null, new cjs.Matrix2D(1,0,0,1,-363,-96.5)).s().p("AmZPEIAA+HIMzAAIAAeHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-96.5,82,193);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F6124").s().p("AgHADQAHgFAIAAQgFAAgKAFIAAAAIAAAAg");
	this.shape.setTransform(0.6,-1.2,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F6124").s().p("AgFACQAFgCAGgDIAAABQgEABgGAEIgBABIAAgCg");
	this.shape_1.setTransform(0.2,-1.6,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F6124").s().p("AAAABIABgCIgBACIAAABIAAgBg");
	this.shape_2.setTransform(1.2,0.2,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F6124").s().p("AAAAFQgBgFACgFIgBAKIAAABIAAgBg");
	this.shape_3.setTransform(1.6,1,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F6124").s().p("AgCAFQABgFADgEIABAAQgDAEgBAFIAAABIgBgBg");
	this.shape_4.setTransform(1.2,0.7,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F6124").s().p("AgCAHQAAgHAGgGQgDADgDAKIAAAAIAAAAg");
	this.shape_5.setTransform(1.5,0.8,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F6124").s().p("AgBAAQABgBACAAIAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAABIgBgCg");
	this.shape_6.setTransform(-3.1,-3.8,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F6124").s().p("AgCADQACgEADgBQgDACgBADIAAAAIgBAAg");
	this.shape_7.setTransform(-2.9,-3.7,1.3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F6124").s().p("AgBAEQAAgEAEgFQgDAFAAAFIgCABIABgCg");
	this.shape_8.setTransform(-1.7,-2.5,1.3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F6124").s().p("AgCAEIgBgBQADgEAEgDIAAABQgEACgBAFIAAABIgBgBg");
	this.shape_9.setTransform(-2.7,-3.4,1.3,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F6124").s().p("AADAIQgTgZgLgIIgIgFQADgBAFgEQAEgEADAAQgJAGAFAIQADADAHgHQAJgJAHADQgGgBgGAKQgFAKAFAFQACgIAIgEQAJgGAJAFQgMgFgGAJQgGAHADAHQACAGAIgDQALgEAFABQgDAAgGADQgJADADAHQADAHAIAJQAIAKAJAHQgOgIgTgYg");
	this.shape_10.setTransform(-0.2,0.1,1.3,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B9DA6A").s().p("AAeAfIABAAQgFgFAEAAQgCgEACgCIgBgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAAAAIgBgGIABAAIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIgBgDIAAgCIgBgCIAAgCIgCgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgCgCIAAgCIgEgEIABgBIgDgDIgBgBIAAgBIgDgCIgCgBIABgBIgCgBIgEAAIACgCIgFgCIAAgBIgEgBIAAgBIgCAAIgFABIACgCIgDABIAAAAIgBAAIgBgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgEABQgDACgCgBIAAAAIgHAGQgEADAAgBQAGgCAEgGIABgBIABAAQABABAFgDIAAABIACAAIADgCIACABIAAAAIAFgBIgBACIACgBIADABIAAABIABAAIADABIAAABIABAAIAFACIgBABIABAAIAEACIgBABIABABIAEACIgBABIABABIADACIAAABIgBAAIAEAFIAAABIADADQgBAAAAAAQgBABAAAAQAAAAABAAQAAABABAAIACADIgBABIACADQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAABAAIABAEQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAABABIABADIgBAAIAAABIAAAAIAAAEIABABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADQgBABACAFQgCgBADAGIgBAAIAAABQAAADAFACQgGgCAAgFg");
	this.shape_11.setTransform(-0.4,-0.6,1.3,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B9DA6A").s().p("AgLACQAKgHANAFQgKgBgCABIgKACIgBABIAAgBg");
	this.shape_12.setTransform(1.5,-0.8,1.3,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#82B227").s().p("AAPAZIgTgZQgQgQgRgMIgFgDIgBgCIAFADQABABAEgDIADgEIAFgDIAAABIAEgCQABgBAAAAQABAAABgBQAAAAABAAQAAAAAAAAIAAABIAFgCIAAABIAAABIAHgBIgBABIAGABIAAAAIAEACIgBABQADAAACACIAAABIAEADIAAAAIAEADQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAFAEQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAEAEQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIADAFIgBAAIAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIADAEIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIADADQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIACAFIgCAAIACAFQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIABAEIAAABIAAgBIgBABIABAFIAAAAIgBAAQAAADADACIAAAAIgBAAIAAABIADAFQgCADAGADIAHAEQgOgBgPgSg");
	this.shape_13.setTransform(0,0,1.3,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#82B227").s().p("AgCAAIAAAAQACAAADAAIgDAAIgCAAg");
	this.shape_14.setTransform(4.6,3.9,1.3,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#82B227").s().p("AADACQgDgCgDgBIAAAAQAGABABACIAAAAIgBAAg");
	this.shape_15.setTransform(4.1,-1.3,1.3,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#82B227").s().p("AgCABQACAAABgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBABQgBAAAAAAQAAAAAAAAIgCAAg");
	this.shape_16.setTransform(4.6,1.3,1.3,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#82B227").s().p("AADAAQAAAAAAAAQAAgBABAAQAAAAAAABQAAAAAAAAQgBABgGAAQADAAADgBg");
	this.shape_17.setTransform(4.5,1.1,1.3,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3F6124").s().p("AABANQgUgdgRgMQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAGAAACgBIAGgGIABAAIAAABIAEgCQABAAAAAAQABgBABAAQAAAAABAAQAAAAAAAAIAAABIAGgCIgBABIAGAAIAAABQACgBAHADIAFAEIgBABIAFACIAAABIAEADQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIAEAEQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAEAFQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIADAEIgBAAIAAABIADAEQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAIADADIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIACAEIgBAAQgBgBABACIABAEIgCAAIACAFIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIABAFIAAAAIgBAAIAAADQgCADAEAFQABAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIADAEQgTgFgRgWg");
	this.shape_18.setTransform(0.9,0.4,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-5.7,11.6,11.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-25.9,63.4,52);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("Ag1AwQANgEAMgMQARgSAGgcQADgWAIgHQAGgEAKAAIAgAAIgGAsQgGATgOAPQgJAJgOAEQgNAEgaAAg");
	this.shape.setTransform(44,-9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGCBfQgNgOAAgnIAAheIBzAAIAAAeIhIAAIAAAhIA+AAIAAAeIg+AAIAAASQABAIADAFQAEAFAIACQAHABANAAQATAAASgFIAAAdQgPAHgaAAQgtAAgRgQgAD7BrQgNgHAAgQIAAiIIBzAAIAAAeIhIAAIAAAhIBCAAIAAAeIhCAAIAABGQgVAAgJgEgAgmBeQgQgRAAgyQAAgxAQgRQARgRAqAAQAJAAAKACQAKABAGAEIAAAdQgPgFgRAAQgXAAgDAIQgEAGgBALIgBAbIABAcQABAMAEAFQADAIAXAAQATAAARgFIgHAeQgMAGgUAAQgqAAgRgRgAi+BmIAAgdQAcAHAWAAQAMAAAFgBQAIgDAAgKQABgIgIgEIgNgGIgcgJQgQgGgGgHQgKgLABgWQAAgYAKgKQAKgJAOgDQAMgDAQAAQARAAAOADQAMACAGAEIAAAdQgagHgVAAQgLAAgEABQgIADgCAIQgBAIAFAEIANAEIAeALQATAHAGAHQAMANgCAYQgCAYgMAJQgJAHgPADQgNADgPAAQgjAAgQgJgAk8BfQgNgOAAgnIAAheIBzAAIAAAeIhIAAIAAAhIA/AAIAAAeIg/AAIABASQABAIADAFQAEAFAIACQAGABAOAAQATAAARgFIAAAdQgOAHgbAAQgsAAgSgQgACvBsIgGgfIg3AAIgFAfIgnAAQAXhtAcgzIAxAAQAOAbAOAsQAOArAKAugAB4AyIArAAQgLgogLgWQgMAcgJAigAmhBeQgHgGgFgLIhEh5IAACYIgnAAIAAjXQAHgDAPAAQAUAAAKAGQAJAHALASIBDB8IAAiaILvAAQAAAOgTAJQgQAHgUAAIqQAAIAAC4QgFADgSAAQgXAAgOgOgAIABkQgEgEAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEgAIDBSQgEADAAAFQAAAEAEAEQADADAFAAQAEAAADgDQAEgEAAgEQAAgFgEgDQgDgEgFAAQgEAAgDAEgAIOBhIgBgDQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgCAAIAAAGIgDAAIAAgOIAFgBQAEAAABACQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBABAAAAIAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAABIABADgAIIBZIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_1.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-14.4,107.6,28.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D51921","#AD151B"],[0.271,1],-6.6,-0.6,13.1,-0.6).s().p("AiDB7IAEgCQAQgLAPgPQAagbAPgkQAOgeAGglQAJg4AagUQAPgLAaAAIBbAAIAAAAIgCAOIgDAVIgHAwIgCAJIgBADIAAADQgPA6gnApIgBAAIgBACIgBAAIg0AgIgIADIgJADIg3AIg");
	this.shape.setTransform(1.8,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D51921","#EE9179"],[0.271,1],-5.5,-0.8,15,-0.8).s().p("AiYCIQASgFATgNQASgMAOgQQAbgcARgkQAOgeAGgoQAKg7AagUQAQgMAcAAIBcAAIgEAZIhaAAQgbAAgPAMQgZAUgJA4QgHAlgNAeQgQAkgZAaQgPAPgQAMIgEACgACRhKIAAAEIgHAsIAHgwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-13.6,30.7,27.4);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuDXcMAAAgu3IcHAAMAAAAu3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2C292A").ss(4,1,1).p("AHYloIhPCBICUAAIAAHWQAABJAuAbQAjAUBXAAIAArPgAlShnIBnh2IAAiIImRAAIABABIAAAUQAABFArAaQAgATBSABIA+AAIhpB6IAABaQBIABAxARQBNAdAABDQAAAqgRAdQgbAuhBAAQgyAAgigeQghgegKg9IiVAAQAHB3BJBHQBJBGByAAQB6AABPhLQBOhKAAhrQAAhIgog0QgWgdglgXQgogbglgFg");
	this.shape.setTransform(71.7,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,145.9,76.2);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Akbi2IHEiBIBzISImqBeg");
	mask.setTransform(32.7,32.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA6C50").s().p("AjoAjIHRhmIgCAnInKBgg");
	this.shape.setTransform(40.7,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA6C50").s().p("Ahjj4IA8gSICLIDIgrASg");
	this.shape_1.setTransform(11.7,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA6C50").s().p("AjqAfIHzhyIAGAfIodCIg");
	this.shape_2.setTransform(27.2,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA6C50").s().p("AATEGIhznuIBFgpIB8IVIgGANg");
	this.shape_3.setTransform(55.7,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNFqQgEgCAAgCQgBgEAIgFQAGgFALgFQAKgFAAgFIAAgEIgCgEIAAgBIgIgBIgBAAIgBAAIgCAAIgBgBIAAgCQgDgwAAgUIgFhDIgBgEQgCgGABgDIgFgMQgVADgUgvQgIgUgEgPIgKgnIgEgfQAAgFADgFIAGgTQAMgYALgCIACgBIAAgFQAEgPAWgEIgVgUIgCgCIgGACQgGACgFgFIAAAAIgCABIgFADQgGABgGgDIgHgFIgDAEQgDAEgHACQgOAEgDgNQgJACgGgFQgDgDgCgEIgBABQgFAFgIACQgPAEgLgOQgFgGgCgEIgCgFQgDgMAHgHIgDgHQgBgEABgFIAEgFQgEgBgDgFIgEgHQgCgIAIgFIgOgNQgCgDgDgJQgDgMAFgLQAGgNAUgJIgBgDQgCgIAFgKQAGgOANgEQAJgCAEABQAAgEACgIQAFgMAOgEIAHAAQABgDAFgGQAGgJAHgBQAGgCAGACIAFADIADgEQACgDAGgCQAIgBAFADIADACQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAFgGAHgBQAJgDADADIADAFIAGgDQAMgDADALIABgDIAFgCQAHgCAGAGIADAEIABgBIACAEIAHgCQAFgCAFAEIAFADIAAAAQAGgCAHAFQAFAEAAACIABAGQAOgGAKAJQAHAGABAHQACAFgCAEQAAADgCAEIABAAQALgDAIAIQAGAGAAAFQACAJAAAFQgBAHgHAIQAEAEABAEIADAJQADALgDAMQgDATgSAFIAAADQACAGgCAGQgDAJgKACIgEAAIgDAHQgDAHgFABQgDABgDgBQAAAEgCADQgFAGgJACQgEACgDgDIgIAgIgDAJIACAAQAOgDAMAEQAKAFABAEIAAABIgBABIACAGIABABIABgBQAGgBAXATIAeAcQAKAIAKARQAHANADANIACALIAAAUQAAAbgIADIAFAXQADANgBAGIAAABIACABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQADAJgFAIIAFAQIAJA+QAFA/gJACIAAAAIgDACQgHAFgFABIABAJIAOAAIANABQAGgBAEACQADACABADQABADgCADQgEAEgJACQgMADgEgDIgEgDQgCgBgEAAIgBACIABACQAAADgFABQgHACgCgDIgBgEIgBgMIAAgBIAAgLIgHAAIgBgBIgDgDIAAgBIAAgBIgCgKIAAgBIACADIAAgKIgBgMQgGgdgRgLQgQgKgZAGQgRAFgKAUQgGALgCAMIAAAMIABANQACAOgFACIgHACIAAABIACAOIAGAQIABACQgCACgFABQgJACgBgDIAAgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABIgDACIgBAFQgCAGgLADIgGABQgFAAgCgCgAAVFJQACAFgUALIgLAHQgGADAAADQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAEABAFgBQALgEABgFIAAgEQABgCAFgCQAGgBABADIABAEIAIgCIgFgQIgCgKIAAgEIgHACIgBAAIADAKgACeEvIgHABIABARIABAGQABAFAEgCIAEgBIgCgEQAAgDAEgBQAEgBAEABIAEADQAEAEAKgCQAHgCADgDIACgDQgBgDgTgBIgSgBIAAACIgBABQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgBgGIAAgFgAAAEDQAAAFAEAgQADAQgBAEIACAAQAEABAEgBIAAAAIAAAAIAKgCQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAGgCABgCQADgCgBgFIgEgMQgBgJAEgMQABgKAGgLQALgWATgFIAOgCIgEgRIgCgPIgNABIAEAgIgBAAIgCgDIgDgYQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgGABQgiAEgQgCQgFAAgFgFIgDgCgAB8DPIAJAnQAFAJADALQABAGAAANIAAAPQACABADAAIgDgdQgBgbgCgFQgFghgJgYIABAAQACAEADALIAGATQAEAUADAWIAEApIABABIAGgCIACAAQgCgJgCgbQgEgigHgdIgGgRIAAgDIABAAIAFAQIAGARQAEAQADAgQAEAaAAAMIAMgGIABgBIgBgBIgCgvQgDgwgHggIgBgEIABAAIAHAUQAEASAEBZIAAACQAGgegFgrIgKhBQgMATg4AOIgHABIAKAeIAAAFQgDgFgEgPIgFgPIgHABIAFAhQAYgBAPATIADAEIgQg5IAAgBIAAAAQAGALAEANgAgFCtQABAFAEAEQAEAEAIACQANACAjgEIAegEIAAgBIABABIAHgCQBIgSgCgbIgCgCQAAAKgGAHQgMAPgnAJIgDABIgBgBQADgEATgIQAUgIAHgGQAFgFABgJIAAgBIgIg1QgIgigRgoQgPgdgDgJQAAgEACgBQAHAJAGAMQgBgGACgCIABAAIABABIACANIAAADIADAHQABgEADgCIACAEIgBAMQAMAeAIAiIADgJQAEgVgEgSQgJgggmghIgkgbIADAIQAFAUgFABIgEgCQgEAGgQAHIgXAKQgGACgIAAQgHABgDgCQgCADgCABQgEABgCgDIgFgCIgCACIgEACQgFACgFgHIgBADIgDABQgEABgDgEIgBABQgDABgEgJIgDgKIgCgNQgZARgBAhQAAARACANIAGAZQAIAhAJASQANAcASAKIgUhJIgJgFQgDgDgDgGIACgBQADAAAGAFIABABIgCgGIgBAAQgGgCgFgGIgJgKIAAAAIADgBIAQAOIgBgBIgEgKQgFACgIgSIgGgSQgCgHABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAFASAMAQIgGgPQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIgFgOQgBgGABAAIALAbIABAGIANAeQAPAmAJAlIAGAZIAAABIAAABIABACIACgBIAWALQAMADAZgEIAagDIAAACQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgCADgRADQgdAIgYgJIgMgHIgDgCgAgTgRQADAEAEgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAIgIgVQgBgDACgCIAHAZIABgCIADABIgGgRQgBgFADgCIAFARIABAIIABAAIACABIgGgYIABAAIAFAYIAEAAIgGgUQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABACAAAEIAFARIAAAAIACAAIABAAIAAgBIABgBIABABIAEACIAKgEIAFAAIADAAQAQgEAGgFIAMgFIAFgGQADgGACAAIABACIAAACIABAAQACgGgFgRIgCgIIgDgGIgKgIIgKgBIgQABQgDAKgDAFIAAABIAFgCIAKgCIgEgCIAAAAIAGgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQgBAAAAABQAAABgBABIgGAHIgIAGIAAABIgBABIgCgBQgIAEgMADQgRAFgMgFQgIgDgBgFQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEAGIACgCIAMgEIAHgBIgBgDIgEgCQgDAAgFgEQgWADgDAPQgCAHADANIAGAOIAAgDIABgDIABAAQgBgBgCgHIgBgHIAAgJIABACIAFAVQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIAAAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgBACIADACIADACQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgDIABgBQABAAADAFgAAAgzQgBgBgCgEIAAgCIgIADIgKABIgCAAQAIAGAPgDgAALhBQgGABgHAAIABABIAAAAIABABIAAACIABAGIAAADIAGgBQANgEAHgEIgCgFIgBgEIAAAAIgBgBQgDACgJADgAAnhFIgLABIACAHIALgJgAgEhEQAEACAKgDQAKgCADgDIAEgCIAAAAIAEgKIAAgBIAAgBIAEgPQAJgeACgRIAFhCQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgSQgBgRgBgFQgHgfgGgRIgJgBIgIAAIgFgCIgDgDIgHAFQgFABgFgCIgEgDIgCADQgCADgFABQgHACgFgEIgCgCIAAAAQABADgEAGQgGAHgIABQgEACgGgDIgFgCIgDAGQgCAEgHACIgJABIgEgBQAAAFgEAIQgIANgRADIgCABIALAeIANAiIAAADIgBABQgDgEgJgVIgJgZIgEgSQgFAAgEgEQgEgEgBgDIAAgCIABAAIACABIADAEQAFAFAGgBQATgFAFgNQACgEAAgEIAAgFIABAAIACAAIACACQADABAIgBQAIgCACgGIAAgEIABgEIAGAFQAFADAFgBQAKgDADgGIABgEIACgCIABAAIgCgDIAAgBIACgBIAEAFQAEAEAGgCQAHgBAAgEIABgDIABgDIAEAFQAEAEAHgCQABgBAGgFIACAAIAAADQABAEAHAAIAIgBIACAAIAAACIAEAAIABgBIAAAAIAEgBIABgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAADgGADIAPAvQADAMAAAXIAAAEIABgCIAAAAIAAABIAFgDQADgCACADIACACIAAACIgBACIgBgBIgBgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAgDAEIAAABIgBAaIACABQAHgCAFgRQACgHAAgEQABgFgBgCIgCgFQgDgEgEAAQgDACgCAEIgBAGIgCgBIABgGQABgGAFgBQAHgCADAFQABABACAGQABABgBAGIgCANQgEATgKACIgCAAIgCgBIAAACIgEAyIACABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAOgDgCgMIAAgBIACAAIACABIAFAAQAHgCABgIIABgFIABgDQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIACABQAMgDAAgLIgBgIIgBAAIAAAAIgCgBIACgBIgBgCIAAgDIABAAQABAAAAAAQABAAAAAAQAAABABABQAAAAAAACQAagOgHgfIgDgKQgDgFgHgBIACgCIABAAQAKgDAAgMIgBgJIAAgDQgCgGgFgEQgHgGgMACIAAABQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIACgGQACgFgBgGQgCgIgGgEQgKgIgPAIIAAgBIAAgJQgBgEgHgCIgGgBIAAAGIgBABQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAIgBgCIAAgBIgEgCQgEgCgFABIgHADIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgBgBQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgFgGQgDgFgEABQgGABgDADIAAACIAAABIgCAAIAAgDIgCgEQgCgFgIACIgFADIgBACQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAIgBgDQgDgEgIACQgKACgCAEIgCAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABIgBgDQAAgCgEgBQgFgCgEACQgGAAgCAGIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgGgDQgHgDgFABQgJACgFAKIgEAJIgDgBIgDgBQgNADgEAIQgBACgDANIADACQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgDAAIAAABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCAAQgDgBgIABQgKADgGAJQgDAHgBAEIgBAFQAAAEABABQAFAGgDACQgFgBgEABQgNAFgFAOQgEAKADAKQACAKAJAIIAHAEIADADQAAABgFAEQgFAEABAEQABAEALAIIgBAAIABABIgDAGQgEAGACACIAFAIQgFAFgBAEQgBADABAHQABAFAHAIQAKAMAOgDQAJgDACgEQACgEgBgCIABAAIACgCIABAAIAAADIABABIAAACQABAEACACQAEAFAEAAIAJABIABAEIADADQADACAGgCQAHgBADgFIABgDQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAIAEQAIAFAEgBQAFgCAAgCIgBgCIAAgCIABAAIAEAEQAFAEAEgBIAEgCQgLgLgJgMIgQgZIgCACIgCACQgLADgPgQIgKgLIgEgIIgBgIQAAgHAIgCQAFgBAFAFQADACACADIgCACIgFgFQgDgEgFABQgFACAAAGIABAGQAAABAEAFIAKALQAOANAIgCIACgDIgOgXIgDgCQgGgDgBABQAAAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABIAAADQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBgCIABgDQABgEADAAQAFgBAEACIgBgBIgBgEIABAAIAFAIIADACIgBABIAMASIAUAeQAGAJAOAPQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAABQAPAPASAMIAAAAQACAAADADgAA1jJIAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIADgDIgCgCQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBgFACgBIABAAIAAAFIAFAGIgBADQgBACgFACg");
	this.shape_4.setTransform(35.3,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyAeQgFgFgBgGQgBgGADgFIgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIAAABIAAABIgBABIgCgBIAAABIACAAIADABIAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAABQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAgCIAAgEIgKgEQgOgEAAgCIABgBQADgBAKAEQAIACAEADIACAAIAFAAIACACIACgCQAHgGATgEQAOgDAJAIIAEAEIACgCQADgCAFgBQAJgCAHADIgCgEQgBgDADgHQAEgIAGgCQAZgGANAEIABgBIgIgHIAAgBIABAAQACgBAIAHIAAAAQAGgCAAAFIAAADIgCACQADADABAGQACAFgGAHQgHAHgPAEQgTAFgKgJIgEgFIAAAAIgBABIgFgCQgEgBgHABQgDABgEADIgCACIABADQACAFgFAGQgHAJgWAGIgHAAQgJAAgGgGgAgyAJQgEAGABADQABAFAFAFQAHAHALgDQAVgFAHgIQADgFgBgEQgBgGgGgEQgIgEgKACIgOADIgCgBQgGACgEAHgAAngUQgEACgEAFQgDAFABADQACAFAFAEQAJAHAQgDQANgDAHgHQAFgHgBgDQAAgBgDgDQgCgEgFgDQgGgCgHAAQgKAAgNAFg");
	this.shape_5.setTransform(33.3,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AABApIgBgOQgFg3ACgVIADAxQAAAfAFATQgCgBgCgIg");
	this.shape_6.setTransform(38.2,74.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAOIgBgdIABgBIAAAEIABANIABAPIgBAAIgBgCg");
	this.shape_7.setTransform(40.1,70.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAKIAAgKQgBgJABgDIAAABIABAXIgBAAg");
	this.shape_8.setTransform(41.2,70);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAZQgCglACgNIAAAAIAAABIAAADQABAFAAAqIgBAAg");
	this.shape_9.setTransform(39.4,71.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AACA1QgCgQgCgqQgDgnACgMIAAABIADAxQADAxACANIAAABQgCgBgBgDg");
	this.shape_10.setTransform(37,75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABA1QgBgJgBgtQgCgvAAgLIABgBIAAABQABADABA0QABAvADARIgBABQgCgDAAgFg");
	this.shape_11.setTransform(35.9,74.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAADIgDgGIAAgCQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAEAQIAAABg");
	this.shape_12.setTransform(37,46.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAABIgDgJQgBAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQACAEAEAOQAAABABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAABg");
	this.shape_13.setTransform(35.9,46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAAFIAAgFQgDgIABgDIAFAWIAAABQgCgCgBgFg");
	this.shape_14.setTransform(38.1,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAAIAAgJIAAgBIABAJIADALIgBABg");
	this.shape_15.setTransform(38.6,45.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAAAQgDgJABgCIAFAWIgBABQgCgCAAgKg");
	this.shape_16.setTransform(40.4,45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AACALIgEgRIAAgEIADAKIACALg");
	this.shape_17.setTransform(40.8,44.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDgJQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAFAPIABAHIgBABQgDgIgDgNg");
	this.shape_18.setTransform(41.3,44.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIAIIABgCQgQAEgIAAIgEgBIgDgBIAAgBIABAAIAHAAQAGAAAMgCQAagFANgLQAKgJgBgIIABAAIACACQAAACgDAEQgDAFgGAFIgNAJIAEAJIAFAMQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgEgIIgEgKIgBgDQgJACgJADIgBABIAGAUIAAACIAAABg");
	this.shape_19.setTransform(38,44.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAgBIgDgJIABgBIAAAAQACABACAIIACAOIgBAAg");
	this.shape_20.setTransform(41.8,43.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AABAKIgCgTQgBAAAAAAQAAgBABAAQAAAAAAAAQAAgBABAAIACALIABAMIgCgCg");
	this.shape_21.setTransform(42.2,43.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAGIgBgIQgCgIABgDIAFAaIAAABQgCgBgBgHg");
	this.shape_22.setTransform(32.3,46.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAEAHQgDgHABgDQgCgBgCgDIgBgBIgFgGIAAgCIABgCQADAFANAKQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQgDAAgCgBIAFAPIAAAGQgDgCgBgJg");
	this.shape_23.setTransform(32.4,45.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAFA8IABgQIgCgPIgDgdQgBgKgBgUIgGgeIABAAIAEAMQACAOAFAqQADAhAAATIgCABg");
	this.shape_24.setTransform(51.3,73);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AABAKIgBgMIgGgQIAAgBIABAAQACADADAMIAGAQIABAHIAAABQgEgDgCgHg");
	this.shape_25.setTransform(46.3,70.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DE8D4A").s().p("AgGAJIgBgBQAAgBADgDQgEAAgDgBIgGgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAHAAQAGACAEgCQAIAAAFgEIADgEIABACQABABgFAEIgBABIACAAIAAABIgIABQgFABgEAEQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_26.setTransform(35.6,39.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAHIgBgCIAAgHIgCgEIAAgBIABAAQACAAACAFIAAACIgBADQAAAAABAAQAAABAAAAQAAAAAAAAQABAAABAAIAEACIAAABIgBAAIgEABIgDgBg");
	this.shape_27.setTransform(25.2,32.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgBADIgBgCQgCgCAEgCQACgBACAEQAAACgDACg");
	this.shape_28.setTransform(36.6,27.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHAOIgDgDIgDgCQgCgCgCgGQgCgDADgIQAEgIAJgCQAJgDAHAHQADAEACAFQAEAPgTAEQgEACgFgBIAPAIIAAABQgJgBgHgHgAgEgRQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEACgCAHIAAAHIAAABIAEAEIABABQAFAEAGgCQAQgDgDgMQgCgGgEgCQgDgDgGAAIgEAAg");
	this.shape_29.setTransform(36.9,28.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAAgBIAAgBIABACIAAACIAAABg");
	this.shape_30.setTransform(36.4,36.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAAAIAAgBIAAAAIABADIAAAAg");
	this.shape_31.setTransform(36.8,36.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAAQgBgDABgBIAAABIABAHIgBABg");
	this.shape_32.setTransform(34.2,37.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAAAIAAgDIAAAAIABADIAAAEg");
	this.shape_33.setTransform(34.7,37.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAgBQAAgDABgCQgBADAAADIABAGIAAABg");
	this.shape_34.setTransform(32.5,37.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAABIAAgEIAAAAIAAACIAAAFg");
	this.shape_35.setTransform(33.2,37.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgBAAIAAgBIABgBIACAEIgBABg");
	this.shape_36.setTransform(37.1,36.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgfBBIgCgGIgBgDQgDAAgFgDIgEgDIABAFIAAAAIgBABIgCAAIgBgDIAAgGQABgFADAAIACgBIABACIgDAEIAAAAIALAGIABgGQABgLAIgDIADAAIgDgGIgCgFIgCgQQAAgJgBgFIAAAAIAEAGIABAKQAAAIABAFIACAFIAFAJQAJANAHgDQANgDAEgLQACgGgCgHQgBgGgMgNQgLgPgCgJIgEgNQgFgXAAgIIAFAXQAHAaALAQIAJAJQAFAGABAHIABAFIABgBIAGgDQAEgBAGANIABgCIADgEIABgDIAAgCIgFACIgBgBQAAgBABAAQAAgBAAAAQABAAABgBQAAAAABAAQAFgCAEAHQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgCABIgCgEIgBAGQgCAFgDABIgBAAIACAFIAAAAIAAAEIgBABIAAACQABAGgSAEIgCADQgDACgDABIgFAAIgDAAIgIAGIgLABIgIgBIAAAAIgDABIgCABQgEAAgCgFgAgHBBIAEAAIAJgHIADABQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQADgBADgDIACgDIADACIAEgDIADgBIgBgGQgCgGgFgDIABgBIAGAFIADAKQABAAAAAAQABgBAAAAQAAgBAAAAQABgBgBgBIAAgFIACACIABgCIgEgHQgGgLgCABIgEACIgBAAIgBAAIgBAJQgEALgPAEQgJADgKgPIgCgDIgHAHIgDAFQgBAHABAFQAAAEADABQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIgBgDIABAAIgCgDIABgFIABgHIAAAAIABABIAAAGIAAAHQAAABABABQAAAAABABQAAAAAAABQAAAAAAAAIAKgCg");
	this.shape_37.setTransform(34.6,32);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgBACIgBgCIAAgBIACgCQACAAACADIgBABIgCACIgBABIgBgCg");
	this.shape_38.setTransform(29.3,29.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAFAYIAEgGQAFgIABgEIAAgBQgEAFgKADQgIADgGgHQgDgDgCgFQgBgEACgHQACgLAJgDQAOgDAGAGQACADACAGIABAFQABAFgDAKQgFAMgGAFIgBABIAAgCgAgHgUQgGACgCAJQgCAHABACQACAFADADQAGAEAFgCQAMgDADgIQACgGgCgEQgBgGgDgDQgCgCgFAAQgEAAgHACg");
	this.shape_39.setTransform(29.2,30.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAOIgBgDIgBgEIABgBIAAABIACgCIAHgFQANgJAMgDIAFgBIACAAIABgCQABABACAHIABAFQgBACgIABQgQAMgOACIgCABQgBAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAgAgUAKQABADADAAQAMgDAJgGIALgFQAFgDAAgDIgCgEIgMAFIgPAGQgJAEgDAFIgBAAg");
	this.shape_40.setTransform(27.1,26.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DE8D4A").s().p("AhFATIAFgFIARgJQAcgLAdgIQAXgFAOAAQANAAAKADIgBACQgKgCgQABQgRABgPADQgZAHgSAFQgRAHgTAMIAAAAIgBgBg");
	this.shape_41.setTransform(31.7,24.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DE8D4A").s().p("Ag5AQQADgDANgEQAQgEABgCIALgDQAIgDAKgCIAYgIQALgCARAAIABABIgBABIgCAAIgNABQgJABgEABQghAIgVAHIgfALg");
	this.shape_42.setTransform(31.2,23);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAJIgBgGQAAgDABgBIAAgBIgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIADgCIABgBIAAAAIABAAQAYgGAKAFQADABABAEIACAJIgCABIgKABIgQABIgJABQgGAAAAgCgAgRgCIgCACIABAGQAAACAMgBQATgDAHABIgCgHQgCgDgJAAIgYADg");
	this.shape_43.setTransform(36.2,24.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DE8D4A").s().p("AgdAHIAUgGIAggJIANgBIABABIgBABIgMACIgrANIgRACQACgCAFgBg");
	this.shape_44.setTransform(30.1,21.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DE8D4A").s().p("AgpAOQgBgDASgHQAVgHAqgLIADAAIAAABIgfAIQghAIgTAMIAAAAIAAgBg");
	this.shape_45.setTransform(30.4,22.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAKIAAgCIAAAAQADgEAJgEIAQgHIALgEIACAEQAAADgEADIgLAFQgKAFgLAEQgDAAgCgDg");
	this.shape_46.setTransform(27.1,26.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#171411").s().p("AgTAUQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgCAFgEIAOgHQASgIgCgFIgEgKIACAAIAHgCIAAADIACALIAFANIgJACIAAgEQgBgDgHACQgEABgBACIgBAEQAAAGgLADIgFABIgEgBg");
	this.shape_47.setTransform(36.2,83.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F4BF00").s().p("AgBAAIABAAIAAAAIABAAIAAgBIABABIgCABg");
	this.shape_48.setTransform(41.4,27.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7BA75").s().p("AgJAGIgDgGIABAAIgCgBIAAAAIgBgBQAJAAAFgBQAIgDADgCIABAAIAAAAIABAFIACADQgHAEgLADIgGACg");
	this.shape_49.setTransform(36.5,43.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2F383F").s().p("AgFgBIAJgBIACgBIgJAHg");
	this.shape_50.setTransform(38.8,42.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2A4E74").s().p("AhAAMIAFggIAFANQAHALANACQANACAHgCIAIgCIATgEIAGAAIAFgBIATgKIAHgHIAJgLIAGAbIgEABIgCgBQgEAHgfAKIgJAFIgVAGIgsAEg");
	this.shape_51.setTransform(37,45.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2F383F").s().p("AgKAAIABAAIAJAAIAHgDIABACQABADACABIgJABQgHAAgFgEg");
	this.shape_52.setTransform(34,44.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#345D8E").s().p("AglAgQgDgEgBAAIgBABIAAACQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAIgDgCIgCgDIAAgCQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIAAgBIABABIAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIgEgWIgCgBIAAAJIACAHQABAGACACIgBAAIgBADIgBACIgFgOQgEgMACgFQADgQAWgDQAGAFADAAIADACIABACIgHACIgLAEIgCABIgEgGQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABQACAFAIABQAMAEATgEQAKgBAIgFIABABIABgBIAAgBIAIgGIAGgHQABAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgFAAIgBABIAEABIgKACIgEACIgBAAQAEgGADgKIAPAAIALABIAKAHIACAHIADAIQAEAOgBAHIgBAAIAAgDIgCgCQgCABgDAFIgEAGIgMAFQgHAGgQAEIgDgBIgFABIgIADIgDgCIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgFgRgEgEQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAIAEALIAGAKIgCAAIgBABIAAAAIgBAAIgCABIAAgBIgFgQQAAgEgCgCQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABIAIAUIgEAAIgIgZIgBABIAHAXIgDAAIgBgBIgBgHIgFgRQgDABACAFIAFASIgCgBIgBABIgIgZQgBACAAAEIAIAUQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIAAAAQgEAAgDgEgAg3gEIAAABIAGAFQgCACACAJIADAJQABAIACAAIABgBIgHgbIABAAQADADACABQgBAEADAJQACAIADADIgBgHIgFgRQADACACgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAQgOgHgEgFgAAIAPIACAGQABAGADABIAAgBIgHgXQgBACACAJgAAAAHIAIAVIAAgBIAAgCIgHgVIACAAQAKgDAJgDIABADIAEAKIAEAJQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgEgLIgFgJIANgKQAGgEAEgFQADgFgBgCIgBgCIgBAAQABAIgLAJQgMALgbAFQgLADgHAAIgHgBIgBABIABABIACABIAEAAQAJAAANgEgAgDAKIAAACIADAIIACAHIABgBIgFgSQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAgAAMACIABAJIAEAOIABgBIgCgNIgEgJgAAfAEQADALACADIABgBIgHgWQgBACACAHgAApAOIgCgMIgFgJIAAAEIAGARIABAAIAAAAgAAmgLQAEANAEAIIABgBIgBgHIgHgPQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAgAArgQIAEAJIADANIABgBIgCgNQgDgIgCgBIgBAAgAA3ABIgBgLIgEgMQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAEAUIACABIAAAAg");
	this.shape_53.setTransform(37,44.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#171411").s().p("AgWAKIgBgGIgBgPIAHgBIACgBIAAAFIABAGQAAAAAAABQAAABABAAQAAAAAAAAQABAAAAAAIABAAIAAgCIAQABQATABABABIgCADQgDADgHACQgKACgDgEIgDgDQgEgBgEABQgEABAAADIACAEIgEABIgCABQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_54.setTransform(53,81.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSAFIgBgGIABgCIAZgDQAJAAABADIADAHQgIAAgSACIgHABQgFAAAAgCg");
	this.shape_55.setTransform(36.2,24.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgLAUIgDgBIgJACQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIAAgIIAAgGIAAgBIgBABIgBAGIAAAGIABADIAAAAIABACQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgCgCgBgDQgBgFACgHIADgDIAGgHIACADQAKAMAMgDQAMgDAFgKIABgJIAAAAIACAAIAEgCQACAAAFAKIAEAIIgBACIgBgCIAAADQAAAAAAABQAAABAAAAQgBABAAAAQgBAAgBABIgCgJIgHgFIgBACQAGACABAFIACAFIgDACIgEACIgDgBIgDADQgDADgDAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAIgDAAIgJAHIgBAAIgEgBgAgZAJIADAKIABgBIgBgGQgBgFABgCQgDABAAADgAgHANIABAFIABgBIgBgJIgBgBQgCABACAFgAgRAOIABACIAAgGIgBgCIgBAAgAgCAMIACAEIAAgFIgCgEIgBAAgAALABIAEAFIAAgBIAAgBIgDgEgAAQAAIABABIACACIABAAIgDgEgAATgCIAAACIAEACIAAgBIgDgEg");
	this.shape_56.setTransform(35,36.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2A4E74").s().p("AheA0QgIALgCgDQgEgJgCgXIgBgWQAJgcAMgNIAKgGIB7gXIA+AzQALAIgGAqQgKgcgMgTQgIgNgnAPQgdAJgVAQQgKAGgRgCQgVgDgGACQgLADgBAVQAAAKACALQgNgZgIAMg");
	this.shape_57.setTransform(38.7,49.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#42AAAF").s().p("AAAgBIAAACIAAABg");
	this.shape_58.setTransform(32.1,32.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#345D8E").s().p("AgiCDQgIgCgGgEQgFgFgCgFIAAgCIAEgCIADADQAIAEAGACQAXAJAbgIIASgFIgYADQgVAEgPgDIgYgLIgBAAIgCABIgBgEIAAgCIgJgiIgEgCIAHAaIgEgCQgTgLgOgcQgJgWgHgdQgFgRgBgGQgDgRAAgOQABgkAagSIADgCIACAQIADAKQACAFACACIABAAIACgCIABACIAKgDIBfgUIACgCIADABIACAAQABgEgDgOIgFgOIAPALIAaAUQAGAFAEAFQAeAdAHAeQAFASgFATIgEARIgNgrIgDADQAIAUAEASIAIA0IAAADQgBAJgFAFQgHAGgUAJIgSAIQAkgJAMgOQAGgIAAgIIgBgFIAFAFIABABIAAABQADAdhKASIgHACIgCAAIgeAEQgTADgOAAIgNgBg");
	this.shape_59.setTransform(40,55.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DF8E51").s().p("AgHAEQgJgLACgHQABgEAJAGIAHAHIANAVIgEAAQgMAAgHgMg");
	this.shape_60.setTransform(25,32.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F7BA75").s().p("AAEATQgPgQgHgIQgEgGADgFQACgEAFgBQADgBAHAFIAEAGIATAeIgFAEg");
	this.shape_61.setTransform(24.7,32.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EFA466").s().p("AgIA3QgEgEgHgQIgFgfIAEANQAFAOADAFQAEAGAHACQAGACAFgHQAFgHgEgOQgEgMgHgGQgEgFgGgaIgEgZIAGAZQAIAcAGAHQANAOAEAPQAFASgQAEQgHACgFAAQgEAAgEgCg");
	this.shape_62.setTransform(34.2,30.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4A443C").s().p("AhYADIAAgMIBxgsIA7ANIAGAfQgBABAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgCQgCgCgZAJIgaAIIgdAEIgPAFQgSAGgIAFQgHAGgKgCQgOgDgCAAQgGABgFAOIgCAOg");
	this.shape_63.setTransform(43.7,68.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#42AAAF").s().p("AgEgIIAAgBIADABQADADADAEIAAAAQgCAKgDgCQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBADg");
	this.shape_64.setTransform(41,28.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DF8E51").s().p("AAEAJQgCgEgDgCIgEgBIgBgEIACgEQAEgFAEADQADADAAAFIgCAKg");
	this.shape_65.setTransform(41.1,27.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4AB5B8").s().p("AgTANQgGgFgBgGQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAEABAFgBQAQgCgDgNIAAgBQAJgCAIADIABABIgBARIACgCQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQADADADgKQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQABADgGAFQgDAEgGADIgCAAIAAABIgIADIgIACQgKAAgFgFg");
	this.shape_66.setTransform(39,29.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#68C2D8").s().p("AgMAHIgBgBIACgEQAFgFAGgBIAAABIANgFIABAAIgBAGQgDAIgKADIgEAAQgFAAgDgCg");
	this.shape_67.setTransform(29.4,30.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4AB5B8").s().p("AgVANQgEgFgCgFIABgDIABAAQAFACAIgCQALgBABgJIABgHQAKgCAIAGQAHAEABAGQACADgFAEQgHAIgUAFIgFABQgHAAgGgFg");
	this.shape_68.setTransform(30.6,31.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#68C2D8").s().p("AgKAIQAAgDACgDQAEgEAEgCIAKgEIAAABQADALgOAEIgEABIgFgBg");
	this.shape_69.setTransform(37.4,28.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgJAMIgBgCIgEgEIAAgBIAAgGQACgIAEgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAIgDAFAFQAEADACAFIgMACQgDACgDAGQgCADAAADgAgBgFQgGACACADIABABIAEABQACgCgBgBQgBgEAAAAIgBAAg");
	this.shape_70.setTransform(36.9,28);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgPAIQgBgEABgFQACgKAGgBQANgEAGAEQACADACAFIAAAEIgBAAIgNADIgCgBQgEACgFAHIgCAEQgDgDgBgEgAAAgFIAAACIgBADIABAAQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIACgBIAAgCQgBgDgDAAIgBAAg");
	this.shape_71.setTransform(29.1,30.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F7BA75").s().p("AgBADIgBgCQgCgCAEgCQACgBACAEQAAACgDACg");
	this.shape_72.setTransform(36.6,27.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F7BA75").s().p("AgBACIgBgCIAAgBIACgCQACAAACADIgBABIgCACIgBABIgBgCg");
	this.shape_73.setTransform(29.3,29.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EFA466").s().p("AgOARIgEgKQABgfARACQAQABACAKQADAGgDAJQgEAOgMAEIgEABQgHAAgFgGg");
	this.shape_74.setTransform(29,30.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EFA466").s().p("AgLAQIgGgHQABgJACgGQAGgPAMAEQAPAFgCAMQgCAKgMAHQgDACgCAAQgFAAgEgDg");
	this.shape_75.setTransform(37.5,28.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F7BA75").s().p("AAXB8QgVgCgmg3Igjg3IgCgKIgXg5IgCgHQAOgFAIgEQAHgFAEgRIADABQAEABAGgBQAJgDADgLIAEADQAHADAHgCQALgDACgMIABgBIAFACQAEADADgBQAFgBAEgIIAJAGQAEABALgFQABAFAYAAIAOA2IADAdIACgBIADgHQAEgGAGADIADAFQACAFgBAFQgEAhgLgBIgCgBQAFgCAEgDQAFgHgBgDQAAgCgDgDQgCgEgFgCQgLgFgNADQgCgFgDgDQgGgFgJADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgFABgBAIIgBAIIABABIADAEIABACIAEACQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQACAGAFADQAJAHAQgEIAJgDQAAAdgIAiQgEASgGATQgCAMgFAEQgHAFgOAAIgKAAgAgngQQgGACgCAJQgCAFABAEQACAEADADIgBAFQABAGAFAEQAHAIALgDQAUgGAGgHQAFgGgBgEQgBgFgIgDQgFgGgKADIgBgEQgBgGgDgDQgCgCgFAAQgGAAgHACg");
	this.shape_76.setTransform(32.4,30.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#FFFFFF","#FEFDFD","#F8F8F7","#EEEDEE","#DFDFDF","#CCCCCC","#B5B4B4","#B3B3B3"],[0,0.412,0.584,0.714,0.824,0.914,0.996,1],0.6,0.4,0,0.6,0.4,16.1).s().p("AAiCSQgRAAgXggIgEACQgEABgFgEIgEgEIgBAAIAAACIABACQAAACgFACQgEABgIgFIgIgEQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgBADQgDAFgHABQgGACgDgCIgDgDIgBgEIgJgBQgEAAgEgFQgCgCgBgEIAAgCIgBgBIAAgDIgBAAIgCACIgBAAQABACgCAEQgCAEgJADQgOADgKgMQgHgIgBgFQgBgHABgDQABgEAFgFIgFgIQgCgCAEgGIADgGIgBgBIABAAQgLgIgBgEQgBgEAFgEQAFgEAAgBIgDgDIgHgEQgJgIgCgIQgDgKAEgKQAFgOANgFQAEgBAFABQADgCgFgGQgBgBAAgEIABgFQABgEADgHQAGgJAKgDQAIgBADABIACAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAAgBIADAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIgDgCQADgNABgCQAEgIANgDIADABIADABIAEgJQAFgKAJgCQAFgBAHADIAGADQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIABgDQACgGAGAAQAEgCAFACQAEABAAACIABADQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIACgEQACgEAIgCQAIgCADAEIABADQAAAAABABQAAAAAAAAQABAAAAAAQAAABABAAIABgCIAFgDQAIgCACAFIACAEIAAADIACAAIABgBIABgCQADgDAGgBQAEgBADAFIAFAGQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIABABIAHgDQAFgBAEACIAEACIAAABIABACQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAAAQAAABABAAIABgBIAAgGIAGABQAHACABAEIAAAJIAAABQAPgIAKAIQAGAEACAIQABAGgCAFIgCAGQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAIAAgBQAMgCAHAGQAFAEACAGIAAADIABAJQAAAMgKADIgBAAIgCACQAHABADAFIADAKQAHAdgaAOQAAgCgBAAQAAgBAAgBQAAAAgBAAQAAAAgBAAIgBAAIAAADIABACIgCABIACABIAAAAIABAAIABAIQAAALgMADIgCgBQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBADIgBAFQgBAIgHACIgFAAIgCgBIgCAAIAAABQACAMgOADQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCgBIAEgyQACgcgBgHIAAAAIgBAFIAAABIAAABIgBAaQAAAcgIAjIgKAmQgCALgFAEQgIAFgUAAIgDAAgAgJBvQgQgUgSgdIgRgbIAAgCIgDgEIgBAAIABAEIABABQgEgCgFABQgDAAgBAEIgBADIABACQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBQgBAAAAAAIAAgDQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABgBAGADIADACIAOAXIgCADQgIACgOgNIgKgLQgEgFAAgBIgBgGQAAgGAFgCQAFgBADAEIAFAFIACgCQgCgDgDgCQgFgFgFABQgIACAAAHIABAIIAEAIIAKALQAPAQALgDIACgCIACgCIAQAZIARAUIAAAAgAhCAmIAAABIACAEIAAAIIABACQADACAGgBIABgBIAAgBIgEgBQgBgBgBAAQgBAAgBAAQAAAAgBAAQAAgBAAAAIABgDIAAgEQgCgFgCAAgAhlgzIAAACQABADAEAEQAEAEAFAAIAEASIAJAXQAJAVADAEIABAAIgYg9IgCgHQAOgFAIgEQAHgEAEgRIADABQAEABAGgCQAJgCADgLIAEADQAHACAHgCQALgCAAgMIABgCIAFADQAGACADAAQAFgBAEgJIAJAGQAEACALgGQABAFAYABIAAAAQAGgBAAgEQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgBACIgEABIAAAAIgBABIgEAAIAAgCIgCAAIgIABQgHAAgBgEIAAgDIgCAAQgGAFgDABQgHACgEgEIgEgFIgBADIgBADQAAAEgHABQgGACgEgEIgEgFIAAABIAAABIAAADIAAAAIgBACIgBAEQgDAGgKADQgFABgFgDIgGgFIgBAEIAAAEQgCAGgIACQgIABgDgBIgCgCIgCAAIgBAAIAAAFQAAAEgCAEQgFANgTAFQgGABgFgFIgDgEIgCgBgABbgFQAAgagDgOIgNgrIAMAwIAEAjIAAAAg");
	this.shape_77.setTransform(31.3,28.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#645D55").s().p("AggBCIgBgBQAAgEgCgPQgFggAAgGIgEhJIACACQAIAFAEABQARABAggDIAGgBQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAEAYIABADIABAAIgEgfIAOgCIACAPIADARIgNACQgTAFgLAWQgEAKgCAKQgEALACAKIADALQACAGgDABQgBADgGABQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgJADIAAgBIgBABIgEAAIgEAAgAgagBQACAqAEAQQABADACABIAAgBQgCgNgEgxIgEgxIAAgCQgCAMADAogAgmg7QAAAMACAuQABAtADAJQAAAGACACIABgBQgDgRgCguQgCg1gBgCIAAgBgAgGAyQgEgTgCgfIgDgxQgDAVAGA3IACAOQACAHACACIAAAAgAAAg2QgDANADAnIAAABIABAAQAAgsgBgEIAAgEIAAgBgAAEg1IACAfIACACIABAAIgBgPIgBgPIgBgEgAAPgvIABAMIACADIABAAIgDgZIAAgBQgBADAAAIg");
	this.shape_78.setTransform(39.4,74.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#645D55").s().p("AAKBKIAAgQQAAgMgBgGQgDgMgFgIIgHglQgEgNgGgMIAAABIAAABIAQA3IgDgEQgPgSgYABIgFggIAHgBIAFAPQAEAPADAEIAAgFIgKgdIAHgCQA2gNAMgUIAKBBQAFApgGAeIAAgBQgEhXgEgSIgHgUIgBAAIABAEQAHAfADAuIACAvIABABIgBABIgMAGQAAgMgEgaQgDgggEgNIgGgSIgFgPIgBAAIAAACIAGASQAHAbAEAhQACAbACAKIgCAAIgGABIgBAAIgEgpQgDgXgEgSIgGgSQgBgLgCgFIgBAAQAHAZAFAfQACAEABAbIADAdIgBABIgEgBgAAZgWQAEATAAAJIADAeIACAQIAAAPIAAACIADgBQAAgTgEgiQgFgpgEgPIgDgMIgCAAgAgbgmIgBABIAHAPIACAOQADAIADAAIABAAIgCgGIgFgSQgFgMgDgDg");
	this.shape_79.setTransform(48.5,72.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#F6DB00","#EFA600"],[0,1],0.7,1.9,0,0.7,1.9,30.4).s().p("AiiEcQgWgNgGgZIgCgMQgeAHgbgQQgbgRgHgeQgFgUAGgUQAFgTAOgOQgbgQgIgeQgGgbAMgZQgLgGgCgKQgFgQANgNQgEgGgCgKQgJgkATgfQATgfAjgIQAWgGAWAGQA1hABSgUQBWgVBSAmQAKgSAVgGQAUgFARALQARAKAFAUQACAHgBAJQAjgFAfAUQAeAUAIAjQAIAggOAeQgOAdgdAPIACAYQASABANAKQAOALAFASQAGAbgSAUQAAAHgGAGQgFAGgHACQgLACgJgFQgLAAgIgEIgHAPIAEAOQAKAmgVAiQgVAigmAKQghAIgfgPQgUAJgUAFIgNACQgWARgaAHQgpAKgqgPQgNAMgRAFQgIACgHAAQgRAAgQgKgABYjzQAAgDABgCQACgDACAAQAHgCACAHQABACgCADQgCADgCAAIgDABQgEAAgCgGgABqkcQgBgDACgCQABgDADgBQADAAACABQADACAAADQACAHgHABIgCABQgFAAgBgGg");
	this.shape_80.setTransform(39.2,54.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DF0024").s().p("Akbi2IHEiBIBzISImqBeg");
	this.shape_81.setTransform(32.7,32.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,1.4,57,62.6);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgTAIQgJgJABgEIABADIABgGQAAgMAUgEQALgCAJANIAOATQgNARgKACIgDAAQgJAAgNgRg");
	mask_1.setTransform(2.9,2.8);

	// Layer 3
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgGAJIgFgIQgDgGAAgCQAAgEAEAAIAHABQAMADADADQACACABAFQABAHgCACg");
	this.shape_82.setTransform(2.6,5.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAHAKIgHgCQgPgDgCgEQgCgBACgIIAjABIAAgDQACARgFADIgDABIgFgBg");
	this.shape_83.setTransform(3,1.1);

	this.shape_82.mask = this.shape_83.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82}]}).wait(1));

	// Layer 1
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AC2D2C").s().p("AgTAIQgJgJABgEIABADIABgGQAAgMAUgEQALgCAJANIAOATQgNARgKACIgDAAQgJAAgNgRg");
	this.shape_84.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,5.8,5.1);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAZQgOgQAAgTQAAgSALgQQgGAOAAAPQAAATAMARQAJAQASAIQgTgEgLgQg");
	this.shape.setTransform(2.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,9);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAEBF5").s().p("AgZAAIADAAIAsAAIAEAAg");
	this.shape.setTransform(2.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.2,0.2);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghhvIAXAAQADAAACADQACABAAADQAAAEgCACQgCACgDAAIgEAAIAABOQAUAFAOAQQAOATAAAXQAAAcgVATQgRAUgdAAg");
	this.shape.setTransform(3.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,22.5);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAoIAAhOQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABIAAAAIAAADQAFAAACADIABAAIADAEIAEAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIAAAMQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIAAACIAAADIAAAAIAAAAIABACIANAFQAKAFgBAJIgDAag");
	this.shape.setTransform(2.4,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,8.2);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E8").s().p("AgRABIAAgBIAjAAIAAABg");
	this.shape.setTransform(1.9,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,0.3);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B15F").s().p("AgoAJIgDgSIBXAAIgDASg");
	this.shape.setTransform(4.4,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,2);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAEBF5").s().p("AguANIAAgDQgCgJAKgEIARgJIAsAAIAQAJQAKADgBAKIgBADg");
	this.shape.setTransform(4.8,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,9.6,2.7);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272D2F").s().p("AgsgUIAWgZIBDBFIgaAWg");
	this.shape.setTransform(4.6,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.2,9.3);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgugoIAHgIIBWBZIgHAIg");
	this.shape_1.setTransform(4.8,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.6,9.8);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah2EoIiNiSIHUnGIAvAxIABABIABADIABABIABACIAAACIAAAHIgBAEIAAABIgCABIAAABIgCACIgGADQgIADgKgHIgDgCIipClQgZAYgoCdQgUBPgQBKQgJAagZAKQgKADgJAAQgNAAgKgJg");
	this.shape_1.setTransform(26.1,30.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.2,61.2);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiaAvQADgOALgLQALgNAPgEQCfgfBlgeIAJAJQhlAeifAfQgPAFgMAMQgKAMgDAOg");
	this.shape_1.setTransform(15.6,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.1,11.5);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AALDFQgHgCgUgIIgfgMQAMgOABgDQgSAKgWgIIglgRQABgDAOgRQAMgOABgGQgYAZgQgBQgNgBgTgVIAVgSQAOgOABgHIgpAaQgLgOgSgcQAggBAcgzQAcg/AMgWQAVgkAwgiQAwgiAtgFIB1E1IgzAuQggAegZAGQgFACgDgGQgDgGgGAAQgFAAgWAHQgRAFgHAAIgDAAg");
	mask.setTransform(26.8,20.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A1B31").s().p("AgSAqQg2AAgUgRIASgNQAGgBAJgJQALgKADgCIgCAQQAOgDARgJIAXgSQgGAYgCADQAOgDAagUIAbgVQADADALAFQAKAFACAEQAFAIgMAOIgTAQQgiAcgtAAIgFAAg");
	this.shape.setTransform(30.9,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A1B31").s().p("AAAAAIABAAIgBABg");
	this.shape_1.setTransform(21.4,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#761241").s().p("AAAA9QgvgEgNgTQgEgFgDgJIgGgPIAWgEQAGAHAcggQASgZAKgPIgJAkQgEAYgJABQAGgBAMgHIAVgOQgJAdgHAHQAIgBAOgIQASgIAFgBQgLAQgEAEQAGgBAagPQgGAFgFAMIgJASQgQAZggAAIgGAAg");
	this.shape_2.setTransform(19.2,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE6D97").s().p("AhaClQgbgUgZgkQgQgZABgbQACgXAPgdQAuhPBAg0QAYgTAggMQAZgIAogHIAjgIQAagEAGAJIgCABIAAgCIgLAGIgLAFQgLAGgNAMIgXAUQgeAZgYAzIglBTQgJAOgDACQAHgEASgWIAdgeQABAIgSAhQgPAhgGAHIATgNQAQgLgBACQgCAHgaAqIgOAWQADABAUgQIAZgSQgFAOgZAfQgWAfgMAJQgLAIgNAAQgTAAgXgRg");
	this.shape_3.setTransform(15.9,18.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B3D20").s().p("AALDFQgHgCgUgIIgfgMQAMgOABgDQgSAKgWgIIglgRQABgDAOgRQAMgOABgGQgYAZgQgBQgNgBgTgVIAVgSQAOgOABgHIgpAaQgLgOgSgcQAggBAcgzQAcg/AMgWQAVgkAwgiQAwgiAtgFIB1E1IgzAuQggAegZAGQgFACgDgGQgDgGgGAAQgFAAgWAHQgRAFgHAAIgDAAg");
	this.shape_4.setTransform(26.8,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,0.9,38.2,39.6);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AicAiQAJhTBdgqQBcgqBGA4QAiAbAQAkIgoAJIgfghIAQAmIhAAKIgHgaIgLAZIinBlQgPgiAFgqg");
	mask_2.setTransform(15.9,11);

	// Layer 3
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE6D97").s().p("AhEAYIgGAgIAhgXQAKgIAqhBIgJAwQAWgPAGgKQAEgHANgaQAMgaAAgCIAlBEIgHgBIAFADIg5AnIiEAwg");
	this.shape_85.setTransform(12.6,12.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE6D97").s().p("AgDAiIggAFIgGgbIAPADIgIgeIAUAZQgFgfgCgDIgHgeIAxAzIAIgVIANBPg");
	this.shape_86.setTransform(25.8,8.8);

	this.shape_85.mask = this.shape_86.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85}]}).wait(1));

	// Layer 1
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8B3D20").s().p("AicAiQAJhTBdgqQBcgqBGA4QAiAbAQAkIgoAJIgfghIAQAmIhAAKIgHgaIgLAZIinBlQgPgiAFgqg");
	this.shape_87.setTransform(15.9,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_87).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.8,22.1);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(4.1,18.6,1.8,1.8,0,0,0,35,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.9,-58.8,126,154.8);


(lib.Symbol176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.c1 = new lib.Symbol177();
	this.c1.setTransform(-44.8,-16.3,1,1,15,0,0,11.4,-10.3);

	this.c2 = new lib.Symbol177();
	this.c2.setTransform(-33.6,19.5,1,1,0,0,0,10.8,-9.5);

	this.c3 = new lib.Symbol177();
	this.c3.setTransform(-8.3,27.3,1,1,0,0,0,2,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c3},{t:this.c2},{t:this.c1}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A0015").s().p("AgVEPQgagdgTgDQgQgDgbAFQgeAGgOABQgyAFgLgrQgIgcgDgGQgJgOgWgEQgNgDgqAEQgjADgTgJQgogVAhhGQAthJADgYQAEgqgagUQgTgPgzgIQAdgIAwgUIBOgfQCDgyCpgkQBAgNAjgFQA4gIAsADQAdABAJAIIAHgCQAjADAfAMQAjAPATAXQAcAhgcA3QgHAQgwBAQhJBlh0B4IhCBGQgrAsggANQgFACgFAAQgNAAgQgTg");
	this.shape.setTransform(0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-52.2,153.1,104.5);


(lib.Symbol166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.h4 = new lib.Symbol170();
	this.h4.setTransform(4.3,6.1,1,1,0,0,0,3.9,0);

	this.h3 = new lib.Symbol169();
	this.h3.setTransform(4.4,2.2,1,1,0,0,0,5.5,0);

	this.h2 = new lib.Symbol168();
	this.h2.setTransform(7.2,-1.2,1,1,0,0,0,7.8,-0.1);

	this.h1 = new lib.Symbol167();
	this.h1.setTransform(9.8,-5.4,1,1,0,0,0,7.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h1},{t:this.h2},{t:this.h3},{t:this.h4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-7.8,19.6,15.7);


(lib.Symbol164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.hair = new lib.Symbol166();
	this.hair.setTransform(0.3,-7.6,1,1,0,0,0,27.3,9.4);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// eyes
	this.eyes = new lib.Symbol165();
	this.eyes.setTransform(8.2,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E19654").s().p("AgFAGQABgHAEgDQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABgEACIgEAEg");
	this.shape.setTransform(32.3,-3.4,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E19654").s().p("AgFAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIADgBQABAAAGAEIAAAAIgGABQgEAAgBgDg");
	this.shape_1.setTransform(-17.7,10.8,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E19654").s().p("AgJAkQgLgGABgLIAHg5QAFALAVAhQAKASgHAHQgKAIgHAAQgEAAgFgDg");
	this.shape_2.setTransform(6.8,-0.8,1.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E67674").s().p("AgmAeQgOgPgHgFIgIgFQgFgDgCgCQgFgFAMgFIAQgGIAMgIQAXgNAQgCQAJgCAZAAQAWABANgEQAFgCACAFQACAFgEADQgFAEgEAKIgFAPQgJATgDAFQgQAUgaAFIgHABQgTAAgSgQgAAAgZQgTADgVANQgKAGgGACIAHADIASAPQAZAVAVgLQAXgLAMgbIAGgRQgEABgFgBIgJAAIgUAAQgLABgHACg");
	this.shape_3.setTransform(9.3,13.7,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#594E42").s().p("AiCB2QgkhCgDgrQgGhaBygeQBvgdAsA0QAXAagBAgIA2AlIiUAKQguAEgugVIglgTIgNAaQgOAfgDAQQgCANAJAnQAFAQgCAAIgDgEg");
	this.shape_4.setTransform(6.5,-12.2,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAVQgJgFgDgKQgCgIAFgJQAGgKAKgCIABAAQAIgDAJAGQAJAFACAKQADAIgFAJQgGAJgKADIgBAAIgFABQgGAAgGgEg");
	this.shape_5.setTransform(18.1,-5.3,1.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594E42").s().p("AgSATQgBgOAIgNQAFgHAHgDQAKgDAGAGQAEAEgGAFIgLAGQgIAEgEADQgIAGgBAHg");
	this.shape_6.setTransform(-13,-4.9,1.8,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E19654").s().p("AgPAbQgLgHgEgNQgDgLAHgLQAHgMANgDQALgDALAHQALAHAEANQADALgHALQgHALgNAEIgHABQgHAAgIgFg");
	this.shape_7.setTransform(18.2,-5.3,1.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAVQgJgFgCgKQgDgIAFgJQAGgKAKgCIABAAQAIgDAJAGQAJAFACAKQADAIgFAJQgGAJgKADIgBAAIgFABQgGAAgGgEg");
	this.shape_8.setTransform(-6.2,0.8,1.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrAFQAUgMAUgGQAQgGAfACQgBALgFAFQgHAGgUAGQgLAFgKABIgQABQgGgBgLgMg");
	this.shape_9.setTransform(9.2,10.1,1.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E19654").s().p("AgPAbQgLgHgEgNQgDgKAHgMQAHgLANgEQALgDALAHQALAHAEANQADALgHALQgHALgNAEIgHABQgHAAgIgFg");
	this.shape_10.setTransform(-6.1,1.1,1.8,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B22A2A").s().p("AgGAnQgLgCgcgWIgLgLQgGgGgFgBIAAgBQAKAAAOgKQASgMAUgGQAOgFAdABQAZABAFgEQgGAEgFAQIgHAWQgSAlgfAAIgHgBg");
	this.shape_11.setTransform(9.6,13.6,1.8,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3B673").s().p("AgQgDQAGgJAIgEQAJgGAGAIQAIAJgKAKQgHAJgKAFg");
	this.shape_12.setTransform(32.2,-2.8,1.8,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#594E42").s().p("AhWBLQgXgLgQgZQgQgaABgXQAcgGAcgUQAogfAhgIQAWgGARACIAeACIAWABQAMAAAKgCQAOgEAJgHQATAkgDAaQgEAlgYAcQgXAZgjANQgjAOgiAAQgnAAghgPg");
	this.shape_13.setTransform(9.9,17.8,1.8,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3B673").s().p("AgGALQgRgFAJgOQACgFAMgBQAKABAIABIABAaQgTAAgGgDg");
	this.shape_14.setTransform(-18,11,1.8,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3B673").s().p("AhMCZQgggTgJgkIggiAQgJgjATggQATgfAjgJIBfgZQAkgIAfASQAgATAJAkIAgCAQAJAjgSAgQgTAfgkAJIhfAZQgMADgLAAQgXAAgVgNg");
	this.shape_15.setTransform(6,-1,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-34.2,74.1,68.5);


(lib.Symbol126 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol153();
	this.instance.setTransform(-0.9,-2.2);

	this.instance_1 = new lib.Symbol152();
	this.instance_1.setTransform(38.4,-43.4);

	this.instance_2 = new lib.Symbol151();
	this.instance_2.setTransform(40.7,-31.5);

	this.instance_3 = new lib.Symbol150();
	this.instance_3.setTransform(28.8,-30.9);

	this.instance_4 = new lib.Symbol149();
	this.instance_4.setTransform(28.2,-19.4);

	this.instance_5 = new lib.Symbol148();
	this.instance_5.setTransform(17.4,-15.6);

	this.instance_6 = new lib.Symbol147();
	this.instance_6.setTransform(5.4,-13.7);

	this.instance_7 = new lib.Symbol146();
	this.instance_7.setTransform(13.6,-6.5);

	this.instance_8 = new lib.Symbol145();
	this.instance_8.setTransform(-2.6,-11.9);

	this.instance_9 = new lib.Symbol144();
	this.instance_9.setTransform(-12,-5.2);

	this.instance_10 = new lib.Symbol143();
	this.instance_10.setTransform(-13.2,14.1);

	this.instance_11 = new lib.Symbol142();
	this.instance_11.setTransform(-0.3,6.9);

	this.instance_12 = new lib.Symbol141();
	this.instance_12.setTransform(12.7,5.1);

	this.instance_13 = new lib.Symbol140();
	this.instance_13.setTransform(7.5,9.6);

	this.instance_14 = new lib.Symbol139();
	this.instance_14.setTransform(6.6,25.1);

	this.instance_15 = new lib.Symbol138();
	this.instance_15.setTransform(-1.7,16.5);

	this.instance_16 = new lib.Symbol137();
	this.instance_16.setTransform(-5.1,43.5);

	this.instance_17 = new lib.Symbol136();
	this.instance_17.setTransform(1.6,33.9);

	this.instance_18 = new lib.Symbol135();
	this.instance_18.setTransform(-7.6,34.5);

	this.instance_19 = new lib.Symbol134();
	this.instance_19.setTransform(-17.1,34.8);

	this.instance_20 = new lib.Symbol133();
	this.instance_20.setTransform(-8.3,25.5);

	this.instance_21 = new lib.Symbol132();
	this.instance_21.setTransform(-19.6,25.3);

	this.instance_22 = new lib.Symbol131();
	this.instance_22.setTransform(-31.4,22);

	this.instance_23 = new lib.Symbol130();
	this.instance_23.setTransform(-30.1,-2.6);

	this.instance_24 = new lib.Symbol129();
	this.instance_24.setTransform(-40.7,5.2);

	this.instance_25 = new lib.Symbol128();
	this.instance_25.setTransform(-25.3,11.7);

	this.instance_26 = new lib.Symbol127();
	this.instance_26.setTransform(-14.8,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-44.4,85.8,88.9);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.q1 = new lib.Symbol123copy();
	this.q1.setTransform(-8.7,2.6,0.5,0.5,0,0,0,-0.1,0);

	this.q1_1 = new lib.Symbol123copy();
	this.q1_1.setTransform(-3,-1.5,0.5,0.5,0,0,0,-0.1,0);

	this.q1_2 = new lib.Symbol123copy();
	this.q1_2.setTransform(-1,1,0.5,0.5,0,0,0,-0.1,0);

	this.q1_3 = new lib.Symbol123copy();
	this.q1_3.setTransform(1.6,3.1,0.5,0.5,0,0,0,-0.1,0);

	this.q1_4 = new lib.Symbol123copy();
	this.q1_4.setTransform(2.4,1.3,0.5,0.5,0,0,0,-0.1,0);

	this.q1_5 = new lib.Symbol123copy();
	this.q1_5.setTransform(7.4,0.9,0.5,0.5,0,0,0,-0.1,0);

	this.q1_6 = new lib.Symbol123copy();
	this.q1_6.setTransform(4.1,-1.1,0.5,0.5,0,0,0,-0.1,0);

	this.q1_7 = new lib.Symbol123copy();
	this.q1_7.setTransform(1.3,-15.2,0.5,0.5,0,0,0,-0.1,0);

	this.q1_8 = new lib.Symbol123copy();
	this.q1_8.setTransform(-1.5,-16,0.5,0.5,0,0,0,-0.1,0);

	this.q1_9 = new lib.Symbol123copy();
	this.q1_9.setTransform(-1.4,-12.1);

	this.q1_10 = new lib.Symbol123copy();
	this.q1_10.setTransform(-0.4,-4.6);

	this.q1_11 = new lib.Symbol123copy();
	this.q1_11.setTransform(5.1,2.4);

	this.q1_12 = new lib.Symbol123copy();
	this.q1_12.setTransform(0.6,-1);

	this.q1_13 = new lib.Symbol123copy();
	this.q1_13.setTransform(-6.8,-0.7);

	this.q1_14 = new lib.Symbol123copy();
	this.q1_14.setTransform(-4.4,1.5);

	this.q1_15 = new lib.Symbol123();
	this.q1_15.setTransform(-6.3,11.4,0.5,0.5);

	this.q1_16 = new lib.Symbol123();
	this.q1_16.setTransform(-1.7,16.2,0.5,0.5);

	this.q1_17 = new lib.Symbol123();
	this.q1_17.setTransform(1.3,11.2,0.5,0.5);

	this.q1_18 = new lib.Symbol123();
	this.q1_18.setTransform(3.8,15.7,0.5,0.5);

	this.q1_19 = new lib.Symbol123();
	this.q1_19.setTransform(6,13.6,0.5,0.5);

	this.q1_20 = new lib.Symbol123();
	this.q1_20.setTransform(7,7.6,0.5,0.5);

	this.q1_21 = new lib.Symbol123();
	this.q1_21.setTransform(8.3,4.5,0.5,0.5);

	this.q1_22 = new lib.Symbol123();
	this.q1_22.setTransform(0.8,5.8,0.5,0.5);

	this.q1_23 = new lib.Symbol123();
	this.q1_23.setTransform(-4.4,5.5,0.5,0.5);

	this.q1_24 = new lib.Symbol123();
	this.q1_24.setTransform(0.8,14.1);

	this.q1_25 = new lib.Symbol123();
	this.q1_25.setTransform(8.3,10.6);

	this.q1_26 = new lib.Symbol123();
	this.q1_26.setTransform(3.3,11.4);

	this.q1_27 = new lib.Symbol123();
	this.q1_27.setTransform(-2.9,11.4);

	this.q1_28 = new lib.Symbol123();
	this.q1_28.setTransform(2.7,7.6);

	this.q1_29 = new lib.Symbol123();
	this.q1_29.setTransform(-3.6,7.6);

	this.q1_30 = new lib.Symbol123();
	this.q1_30.setTransform(-7.1,6.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1BBDA").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(-2.9,-1.5,1.732,1.732);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1BBDA").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_1.setTransform(5.1,2.3,1.732,1.732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1BBDA").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_2.setTransform(-0.4,-4.7,1.732,1.732);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C1BBDA").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_3.setTransform(0.5,-1,1.732,1.732);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C1BBDA").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_4.setTransform(-6.8,-0.7,1.732,1.732);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C1BBDA").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_5.setTransform(-1.6,-11.4,1.732,1.732);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C1BBDA").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_6.setTransform(-4.4,1.5,1.732,1.732);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E3F0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_7.setTransform(2.8,7.6,1.732,1.732);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5E3F0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_8.setTransform(8.2,10.6,1.732,1.732);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5E3F0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_9.setTransform(-3.7,7.6,1.732,1.732);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5E3F0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_10.setTransform(-2.9,11.4,1.732,1.732);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5E3F0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_11.setTransform(3.5,11.3,1.732,1.732);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C1BBDA").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_12.setTransform(7.5,0.8,1.732,1.732);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C1BBDA").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_13.setTransform(2.4,1.2,1.732,1.732);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C1BBDA").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_14.setTransform(-8.7,2.6,1.732,1.732);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C1BBDA").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_15.setTransform(4,-1.2,1.732,1.732);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C1BBDA").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_16.setTransform(-1.6,-16.2,1.732,1.732);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C1BBDA").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_17.setTransform(1.3,-8.1,1.732,1.732);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C1BBDA").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_18.setTransform(1.3,-15.2,1.732,1.732);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C1BBDA").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_19.setTransform(-1,0.9,1.732,1.732);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5E3F0").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_20.setTransform(8.2,4.4,1.732,1.732);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5E3F0").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_21.setTransform(-6.4,11.4,1.732,1.732);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5E3F0").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_22.setTransform(-4.5,5.4,1.732,1.732);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C1BBDA").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_23.setTransform(1.6,3.1,1.732,1.732);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5E3F0").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_24.setTransform(0.8,5.7,1.732,1.732);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E5E3F0").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_25.setTransform(6.9,7.5,1.732,1.732);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E5E3F0").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_26.setTransform(1.1,11,1.732,1.732);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E5E3F0").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_27.setTransform(5.8,13.3,1.732,1.732);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5E3F0").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_28.setTransform(3.6,15.7,1.732,1.732);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5E3F0").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_29.setTransform(-1.8,16.1,1.732,1.732);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E5E3F0").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_30.setTransform(0.7,14.1,1.732,1.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.q1_30},{t:this.q1_29},{t:this.q1_28},{t:this.q1_27},{t:this.q1_26},{t:this.q1_25},{t:this.q1_24},{t:this.q1_23},{t:this.q1_22},{t:this.q1_21},{t:this.q1_20},{t:this.q1_19},{t:this.q1_18},{t:this.q1_17},{t:this.q1_16},{t:this.q1_15},{t:this.q1_14},{t:this.q1_13},{t:this.q1_12},{t:this.q1_11},{t:this.q1_10},{t:this.q1_9},{t:this.q1_8},{t:this.q1_7},{t:this.q1_6},{t:this.q1_5},{t:this.q1_4},{t:this.q1_3},{t:this.q1_2},{t:this.q1_1},{t:this.q1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-17,19.9,34.2);


(lib.Symbol122 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272D2F").s().p("AgCAOIAAgbIAFAAIAAAbg");
	this.shape.setTransform(5.2,-4.2,1.732,1.732);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#546565").s().p("AgEAOIAAgbIAJAAIAAAbg");
	this.shape_1.setTransform(4.8,-4.2,1.732,1.732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#272D2F").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape_2.setTransform(-26.6,-4.2,1.732,1.732);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#546565").s().p("AgYAOIAAgbIAxAAIAAAbg");
	this.shape_3.setTransform(-28.8,-4.2,1.732,1.732);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#272D2F").s().p("Ag1ADIAAgFIBqAAIAAAFg");
	this.shape_4.setTransform(-15,-3.7,1.732,1.732);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#546565").s().p("Ag1AGIAAgLIBqAAIAAALg");
	this.shape_5.setTransform(-15,-4.2,1.732,1.732);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#272D2F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_6.setTransform(3.1,-4,1.732,1.732);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#546565").s().p("AgEACIAAgDIAJAAIAAADg");
	this.shape_7.setTransform(3.1,-4.2,1.732,1.732);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#546565").s().p("AgQANIAAgZIAhAAIAAAZg");
	this.shape_8.setTransform(-1.8,-4.2,1.732,1.732);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#040404").s().p("AgVAQIAAgfIArAAIAAAfg");
	this.shape_9.setTransform(-1.8,-4.2,1.732,1.732);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#272D2F").s().p("AgFEZIAAoxQALAAAAAIIAAIpg");
	this.shape_10.setTransform(-1,-2.7,1.732,1.732);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#546565").s().p("AgLEZIAAopQAAgIALAAQAMAAAAAIIAAIpg");
	this.shape_11.setTransform(-2,-2.7,1.732,1.732);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#060606").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_12.setTransform(36.3,50.5,1.732,1.732);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#060606").s().p("AgWAFIAAgJIAuAAIAAAJg");
	this.shape_13.setTransform(-36.3,50.5,1.732,1.732);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#060606").s().p("AjuAJIAAgRIHdAAIAAARg");
	this.shape_14.setTransform(0,47.8,1.732,1.732);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgzB/QgXgYAAghIAAirQAAgPgLgKQgKgLgPAAQgPAAgMALQgLAKAAAPIAABHIgMAAIAAhHQAAgUAPgOQAOgOAVAAQAUAAAOAOQAOAOAAAUIAACrQAAAcAUAUQAUAUAaAAQAdAAAUgVQAVgUAAgdQAAgSANgMQAMgNASAAQASAAANANQANAMAAASIAAA5IgNAAIAAg5QAAgMgJgKQgJgJgNAAQgMAAgKAJQgJAKAAAMQAAAigYAYQgYAYgiAAQgfAAgYgXg");
	this.shape_15.setTransform(-1.9,-14.7,1.732,1.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Path();
	this.instance.setTransform(-28.7,-12.9,1.732,1.732,0,0,0,1.9,0.1);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-22.9,3.9,1.732,1.732,0,0,0,3.4,11.3);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bubbles
	this.bs = new lib.Symbol125();
	this.bs.setTransform(-28.8,4.6);

	this.timeline.addTween(cjs.Tween.get(this.bs).wait(1));

	// Layer 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CEE3F0").s().p("AgVAHQgDAAgCgCQgCgDAAgCQAAgCACgCQACgCADAAIArAAQADAAACACQACACAAACQAAACgCADQgCACgDAAg");
	this.shape_16.setTransform(-29.4,-14.7,1.732,1.732);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#62797E").s().p("AgNADIAAgFIAbAAIAAAFg");
	this.shape_17.setTransform(-28.8,-12.9,1.732,1.732);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAOIAAgbIAFAAIAAAbg");
	this.shape_18.setTransform(-28.8,-10.6,1.732,1.732);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#272D2F").s().p("AgNAPIgCgdIAfAAIgCAdg");
	this.shape_19.setTransform(-28.8,-14.9,1.732,1.732);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2F2F2").s().p("AgCAgIAAg/IAFAAIAAA/g");
	this.shape_20.setTransform(-28.8,-14.9,1.732,1.732);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5EFF5").s().p("AgRAtIAAhaIAjAAIAABag");
	this.shape_21.setTransform(-28.8,-5.1,1.732,1.732);

	this.instance_2 = new lib.Path_6();
	this.instance_2.setTransform(-34.8,13.5,1.732,1.732,0,0,0,2.3,4.5);
	this.instance_2.alpha = 0.398;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A29AC7").s().p("AgrAWQgTgSAAgZQAAgJADgKIB3AAQADALAAAIQAAAZgSASQgTATgaAAQgYAAgTgTg");
	this.shape_22.setTransform(-28.9,15.4,1.732,1.732);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5EFF5").s().p("AguAwQgUgUAAgcQAAgaAUgVQATgTAbAAQAbAAAUATQAUAVAAAaQAAAcgUAUQgUATgbAAQgbAAgTgTg");
	this.shape_23.setTransform(-28.8,11.6,1.732,1.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.instance_2},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-51.4,82.9,102.9);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.f1 = new lib.Symbol124();
	this.f1.setTransform(0.3,-3.2,1,1,0,0,0,0,3.9);

	this.instance = new lib.Path_0();
	this.instance.setTransform(4.5,3.9,1.732,1.732,0,0,0,2.4,4);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(-0.1,4.4,1.732,1.732,0,0,0,4.9,1.3);
	this.instance_1.alpha = 0.648;

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(-0.2,8.6,1.732,1.732,0,0,0,4.4,1);
	this.instance_2.alpha = 0.422;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222021").s().p("AgMACIADgCIATAAIADACg");
	this.shape.setTransform(0.2,-1.4,1.732,1.732);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMADIAEgDQABgCAGAAIADAAQAGAAABACIABAAIADADg");
	this.shape_1.setTransform(0.2,-1.6,1.732,1.732);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAKIgBAAIAAgEIABgBIACgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgJQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAjAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIACABIABABIAAAEIgBAAg");
	this.shape_2.setTransform(0.2,0.8,1.732,1.732);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(0.3,2.8,1.732,1.732,0,0,0,2.6,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#222021").s().p("AgVAnQgKgBgDgCQgIgGAOgGQAPgHAZAFQABgFgCgEQgLgKAAgGQgDgKAAgUIAAgFIADAAIAAAGQAAARADALQABAEAJAIQAGAFgCAJQAMADAIAEQAAAAABAAQAAABAAAAQAAABAAAAQAAAAgBAAQgBACgEgCIgQgEQgHAMgPAAgAgXAbQgLADAEADQACABAWAAQAMAAAEgJIgPgBQgKAAgIADg");
	this.shape_3.setTransform(0.5,3.7,1.732,1.732);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4B15F").s().p("AgoAJIgCgSIBWAAIgDASg");
	this.shape_4.setTransform(-0.3,8.5,1.732,1.732);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DAEBF5").s().p("AgrAYIgDgYQgCgJAKgFIARgJIAsAAIAQAJQAKAFgBAJIgEAYg");
	this.shape_5.setTransform(-0.3,6.4,1.732,1.732);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAEBF5").s().p("AgrAYIgDgYQgCgJAKgFIARgJIAsAAIAQAJQAKAFgBAJIgEAYg");
	this.shape_6.setTransform(-0.3,6.4,1.732,1.732);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.f1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-11,17.3,22.1);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.m1 = new lib.Symbol120();
	this.m1.setTransform(15.7,26.7);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// Layer 3
	this.m2 = new lib.Symbol121();
	this.m2.setTransform(-30,35.4);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// Layer 1
	this.m3 = new lib.Symbol122();

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-51.4,82.9,102.9);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.eyes = new lib.Symbol118();
	this.eyes.setTransform(1.9,7.3);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6BE88").s().p("AgFgNIAZAPIgnAMg");
	this.shape.setTransform(4.1,9.7,1.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#24272A").s().p("AgnAVQgBgMAGgJQAGgJAKgFIANgFQAFgBAKABIAJACQAFABAIgEQAIgFAAgDIAAAKQgCASgMAGIgBAAQgIgGgFAAQgIgBgGABIgIACQgOAHgBAMIAAADIgBAAIgEABIgHAEg");
	this.shape_1.setTransform(14.7,-1,1.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAdQgcgCADgdQAEgeAbAEQAaAIgCAYQgBAZgbAAIgCAAg");
	this.shape_2.setTransform(15,2.2,1.7,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FACC91").s().p("AgXAfQgZgTAPgcIADgHQAhgiAbAjQAKAOAAAOQAAARgMAJQgOAJgNAAQgLAAgNgKg");
	this.shape_3.setTransform(14.7,2.4,1.7,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#24272A").s().p("AgpAHIgGgHQABABAJAAQAJgBAEgBIAGgHQAFgFAJgEQAEgDAHgBQAMgBALAFQAKAFAGAKIACAGIgIACIgDABIgBAAIgCgCQgIgJgPACQgEAAgEACQgFABgHAHQgDADgDAKIgBABIgBAAQgMAAgMgPgAAwAEIABAAgAgwAAIABAAIgBAAg");
	this.shape_4.setTransform(-13.2,7.5,1.7,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVATQgQgTARgUQAUgUAUAXQAUAWgXARQgLAJgHAAQgLAAgJgMg");
	this.shape_5.setTransform(-11.4,10.7,1.7,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FACC91").s().p("AgFApQgPgBgKgOQgJgNABgQQADgsAuAJIAHAEQAdAQgLAdQgKAegeAAIgBAAg");
	this.shape_6.setTransform(-11.1,10.9,1.7,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3544E").s().p("AAAAjQgKgCgJgKIgPgUQgGgGgEgCQALAAADgCIAMgJQAGgHALgBIABAAQAFgFAQAAIAMAAQAEAAAIgGQgDAGgBAPIgDAVQgDASgIAFQgGADgJACIgHABIgFgBgAgcAAIAEACIAGAEIAKAKQAIAFAEAAQAOACAHgKQAEgGAAgGQAEgJABgGIABgGIAAgBQgEAEgFABIgLAAIgGAAIgFAEIgBAAQgGABgFADIgJAGQgFACgFAAIgBAAIAAAAg");
	this.shape_7.setTransform(2.9,20.5,1.695,1.695);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGgDQAHgFAIABQAEAAAAAEQABADgCABQgCAFgJACQgFABgGgBIgCABQgBgJAHgDg");
	this.shape_8.setTransform(5.2,24.2,1.695,1.695);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAMIgHgEQgEgCgDAAIAIgGQAFgDAMgFIAIgEIAJABIAJAAQAAAKgEAEQgCADgEABIgIABIgIADIgJACIgCgBg");
	this.shape_9.setTransform(2.8,18.4,1.695,1.695);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A251F").s().p("AgDAcQgHgDgIgHIgNgLIgBgBIgHgGQAHgCAIgGQAMgIAKgEQAGgDARAAIATgGQgEAIgBAOQgBANgCAGQgEAMgLAEQgFACgFAAQgGAAgEgCg");
	this.shape_10.setTransform(3,20.3,1.695,1.695);

	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-1.7,-6.8,1.7,1.7,0,0,0,15.9,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E69E5E").s().p("AgHACQgCgCAEgCQAJgEAEAGQACABgDACQgDACgDgCIgBAAIgBABIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAg");
	this.shape_11.setTransform(-19,20.1,1.7,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAD4A9").s().p("AgegJQATgNAVAFIAYANQgLAXggABIgBAAQggAAAMgdg");
	this.shape_12.setTransform(-18.6,20.6,1.7,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E69E5E").s().p("AgEAEQgCgCACgCQgCgEAFgBIABAAIACABQABAAABAAQABABAAAAQAAABABAAQAAABAAAAQAAAEgGADIgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_13.setTransform(27,2.1,1.7,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAD4A9").s().p("AgZAGQAIgSARgKQARgLAIAWQAGASg0AUg");
	this.shape_14.setTransform(26.4,3,1.7,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAD4A9").s().p("AgaCbQgYgJgXgRQgRgMgPgPQgRgUgMgeQgWg1ALgwQAMgzAughQAvgiAxAJQAuAIAmAoQAkAmAPAxQAOAtgUAzQgTAzgsAWQgWAMgcACIgPABQgTAAgRgGg");
	this.shape_15.setTransform(0.2,4.2,1.7,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B3D20").s().p("Ag6CmIgxgmQgygcgQggQgQghAKg4QAKg3AGgQQANgjAbgTQAogcAvgIQAugJAtAPQAzAQAiArQAXAcAMAiQALAkgCAhQgDAhgSAiQgSAggaAYQgYAWgqASQgKAEgTACIgdACIgGABQgVAAgagUg");
	this.shape_16.setTransform(0,-0.1,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-31.7,62.8,63.5);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m1 = new lib.Symbol117();
	this.m1.setTransform(18.3,25.8,1,1,0,0,0,7.2,29);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E19654").s().p("AgchUIBTALQAGANgECIIhyAJg");
	this.shape.setTransform(16.3,34.1,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.m2 = new lib.ClipGroup_1_1();
	this.m2.setTransform(18.3,25.9,1.7,1.7,0,0,0,43.5,36.1);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-35.5,98,84.2);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],-11.1,2.1,0,-11.1,2.1,22.7).s().p("Ag8BoQgIgGABgMQAAgMAIgMQAEgHAKgLIANgRQAcgpALg4IACgGQABAAAAAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQgJgTAEgGQAHgGAEAMIAEARIADgRQADgMAGAAQAFgBgBAOIgCASIAFgQQAGgNAEABQAGABgDAPIgFASQAPgXADAEQAHADgIAMIgNAQQATAAgBAIQAAAFgHgBIgKAAQgEADgCASIgCAZIgMAsQgIAZgMASQgLATgTAHQgIADgIAAQgNAAgMgIg");
	this.shape.setTransform(29,-13.1,1.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAvQgEAAgPgKIgMgPQgCgCABgKIACgKQAAgBAGgJIAIgLIAVgZIAVgCQAhBHgCADIgHAHIgHAGQAAACgLAEIgOAEg");
	this.shape_1.setTransform(22.9,-0.6,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424143").s().p("AALAPIgZgZQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIAYAZQABAAAAABQAAAAAAABQAAAAAAABQAAABgBAAIgCABIgBgBg");
	this.shape_2.setTransform(17.2,-8.4,1.7,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424143").s().p("AADAHIgJgJQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAABIAJAJQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgCgBg");
	this.shape_3.setTransform(20.7,-9.3,1.7,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424143").s().p("AADAHIgJgJQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIAJAJQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgCgBg");
	this.shape_4.setTransform(23,-11.5,1.7,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424143").s().p("AADAHIgJgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAJAJQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgCgBg");
	this.shape_5.setTransform(25.2,-13.7,1.7,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424143").s().p("AALAPIgZgZQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABABIAYAZQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIgCABIgCgBg");
	this.shape_6.setTransform(26.2,-17.3,1.7,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424143").s().p("AAKAPIgYgZQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABIAYAZQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAIgCABIgDgBg");
	this.shape_7.setTransform(35.3,-26,1.7,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424143").s().p("AADAHIgJgJQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABIAJAJQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABIgCAAIgCgBg");
	this.shape_8.setTransform(29.8,-18.1,1.7,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424143").s().p("AADAHIgJgJQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIAJAJQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgCABIgCgBg");
	this.shape_9.setTransform(32.1,-20.3,1.7,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424143").s().p("AADAHIgJgJQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQAAAAABABIAJAJQABABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgCABIgCgBg");
	this.shape_10.setTransform(34.3,-22.5,1.7,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424143").s().p("AADAHIgJgJQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAABIAJAJQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABIgCgBg");
	this.shape_11.setTransform(38.8,-26.9,1.7,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424143").s().p("AADAHIgJgKQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABIAJAJQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgCABIgCgBg");
	this.shape_12.setTransform(41.1,-29.1,1.7,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424143").s().p("AADAIIgJgKQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAABQABAAAAABIAJAJQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABIgCABIgCgBg");
	this.shape_13.setTransform(43.3,-31.3,1.7,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424143").s().p("AAKAPIgYgZQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAIAZAZQAAABABAAQAAABAAAAQAAABgBAAQAAABgBAAIgBABIgDgBg");
	this.shape_14.setTransform(44.3,-34.8,1.7,1.7);

	this.instance = new lib.Path_0_1();
	this.instance.setTransform(11.1,6,1.7,1.7,0,0,0,26.1,30.6);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 3
	this.bs = new lib.Symbol126();
	this.bs.setTransform(-2.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.bs).wait(1));

	// Layer 4
	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(-27.3,-1.9,1.7,1.7,0,0,0,15.6,5.7);
	this.instance_1.alpha = 0.559;

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.setTransform(41.9,-41,1.7,1.7,0,0,0,4.8,4.9);
	this.instance_2.alpha = 0.148;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CEE3F0").s().p("AAhA8IhbheQgKgRAMgJQANgKAOAPIBUBXQAOAOgKANQgFAGgHAAQgGAAgIgFg");
	this.shape_15.setTransform(44.7,-43.8,1.7,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8F599D").s().p("ABSDGIkXkfQgFgGACgMQADgJAHgIQAHgIALgEQCpgiBkgfIBoBrQgkBjgkCqQgDALgJAHQgIAHgJACIgGAAQgHAAgFgEg");
	this.shape_16.setTransform(-21.2,20.5,1.7,1.7);

	this.instance_3 = new lib.Path_4();
	this.instance_3.setTransform(42.3,-41.9,1.7,1.7,0,0,0,4.5,4.7);
	this.instance_3.alpha = 0.738;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5EFF5").s().p("AgsFCIkZkiQgPgQAKgXQALgZAagIQBOgQBRgUQCggnASgSICqilQgOgRANgLQANgLAPAPIBWBZQAPAQgMAMQgLAMgRgOIipClQgZAYgqCdQgUBPgQBKQgJAagXAKQgKAEgJAAQgNgBgKgJg");
	this.shape_17.setTransform(-1.5,1.5,1.7,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#272D2F").s().p("AhFACIBDhHIBIBKIhJBBg");
	this.shape_18.setTransform(46.5,-46.1,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.instance_3},{t:this.shape_16},{t:this.shape_15},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-58,117,116);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// h1
	this.h1 = new lib.Symbol114();
	this.h1.setTransform(-40.2,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.h1).wait(1));

	// h2
	this.h2 = new lib.Symbol115();
	this.h2.setTransform(-86.5,53.7,1,1,0,0,0,-90.2,58);

	this.timeline.addTween(cjs.Tween.get(this.h2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B88B1").s().p("AgTgcIAHgCIANA2IAFAAIAFg3IAJAAIgJA/IgOABg");
	this.shape.setTransform(-14.7,-38.9,1.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5FB2E4").s().p("AgNAFIAVgRIAGAIIgVARg");
	this.shape_1.setTransform(-10.3,-23.3,1.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5FB2E4").s().p("AgLgIIAHgFIAQAVIgIAGg");
	this.shape_2.setTransform(-10.3,-23.3,1.7,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5FB2E4").s().p("AgNAFIAVgQIAGAHIgVAQg");
	this.shape_3.setTransform(-9.7,-28.6,1.7,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5FB2E4").s().p("AgLgIIAIgFIAPAVIgHAGg");
	this.shape_4.setTransform(-9.8,-28.6,1.7,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5FB2E4").s().p("AgNAFIAVgRIAGAIIgVARg");
	this.shape_5.setTransform(-9.1,-33.8,1.7,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5FB2E4").s().p("AgLgHIAHgGIAQAVIgIAGg");
	this.shape_6.setTransform(-9.1,-33.8,1.7,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5FB2E4").s().p("AgNAFIAVgRIAGAIIgVARg");
	this.shape_7.setTransform(-8.4,-39.3,1.7,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5FB2E4").s().p("AgLgIIAIgFIAPAVIgHAGg");
	this.shape_8.setTransform(-8.5,-39.3,1.7,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5FB2E4").s().p("AgLAIIAPgVIAIAFIgQAWg");
	this.shape_9.setTransform(-17.7,-23.2,1.7,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5FB2E4").s().p("AgNgEIAGgHIAVAQIgGAHg");
	this.shape_10.setTransform(-17.7,-23.2,1.7,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5FB2E4").s().p("AgLAJIAPgWIAIAFIgPAWg");
	this.shape_11.setTransform(-18.5,-28.4,1.7,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5FB2E4").s().p("AgNgEIAGgHIAVAQIgGAHg");
	this.shape_12.setTransform(-18.6,-28.4,1.7,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5FB2E4").s().p("AgLAJIAQgWIAHAFIgPAWg");
	this.shape_13.setTransform(-19.2,-33.7,1.7,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5FB2E4").s().p("AgNgEIAGgHIAVAQIgGAHg");
	this.shape_14.setTransform(-19.3,-33.7,1.7,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5FB2E4").s().p("AgLAJIAPgWIAIAGIgQAVg");
	this.shape_15.setTransform(-20,-39.2,1.7,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5FB2E4").s().p("AgNgEIAGgHIAVAQIgGAHg");
	this.shape_16.setTransform(-20.1,-39.2,1.7,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E19654").s().p("AAAAdIgNg5IAagBIgFA7g");
	this.shape_17.setTransform(-14.9,-39.5,1.7,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag1hCIBrgKIgDCXIhVACg");
	this.shape_18.setTransform(-14.7,-31.9,1.7,1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B9413E").s().p("AiUA0IEiiIIAGAOIkMCag");
	this.shape_19.setTransform(-10.5,31.7,1.7,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag0AGIgPgNIARgGIAGAGQAMAHAbgCQAZgBASgHQAIgEADgDIATAIQgEAGgJAFQgVAMgiADIgJABQgaAAgRgMg");
	this.shape_20.setTransform(-14.5,-43.3,1.7,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4B88B1").s().p("AipDMQgkhKgThxQgXiJBXhRQAsgpAwgMIAJAEQANAFAWACQAWACARgHQAKgDAFgDIAfAGQAmAOAlAoQAmAoAgA2QAQAaAIATIgLBKQgcAAgTgMQgHgGgMgMQgLgMAAABQgBADgBA0IgBA1IAMAlIkgCEQgOgOgSglg");
	this.shape_21.setTransform(-11.3,-1.8,1.7,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#356868").s().p("AgMAbIAMg2IANAGIgMAxg");
	this.shape_22.setTransform(56.5,28.7,1.7,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#356868").s().p("AgWgOIAMgMIAhApIgRAMg");
	this.shape_23.setTransform(-16.3,91,1.7,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#356868").s().p("AgmgPIBNAJIg0AWg");
	this.shape_24.setTransform(36.9,22.8,1.7,1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#356868").s().p("AgFAVIgRgeIAtgVIgVA9g");
	this.shape_25.setTransform(1,74,1.7,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#356868").s().p("AAVAOIgwguIAQgJIAnAwIgGAjg");
	this.shape_26.setTransform(-5.8,32.4,1.7,1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E2B2C").s().p("AgiALIAJgKIAWAEIAVgWIARACIghAhg");
	this.shape_27.setTransform(10.1,23.3,1.7,1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E2B2C").s().p("AgEAjIADgaIgJgnIAJgKIAMA0IgIAdg");
	this.shape_28.setTransform(-25.5,45.7,1.7,1.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#224448").s().p("Ai+C6IBOhtIhhhTIg5hSIDPiFIDMACIB6AdIgLApIhzgJIjGAfIghAmIAuCcIgWA8IhgBfg");
	this.shape_29.setTransform(12.8,57.6,1.7,1.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8ECC9").s().p("AgKAKIAVgfIgLArg");
	this.shape_30.setTransform(71.4,15.8,1.7,1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8ECC9").s().p("AgWBEIAkiOIAJACIggCTg");
	this.shape_31.setTransform(70.9,24.4,1.7,1.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#665935").s().p("AgbAqIAKgyIAGAAIAcguIALALIgZBig");
	this.shape_32.setTransform(67,26.9,1.7,1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC543F").s().p("Ag1AnIAMghIATACIAAABIAXAGIA1hWIggCPg");
	this.shape_33.setTransform(65,24.2,1.7,1.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8ECC9").s().p("AgdAPIAAgdIA7AQIAAANg");
	this.shape_34.setTransform(-10,109.4,1.7,1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8ECC9").s().p("AAAAgIhHg2IAHgJIBBAzIArAAIAbAMg");
	this.shape_35.setTransform(-17.3,106.6,1.7,1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#665935").s().p("AgqgDIASggIAMgNIAaAcIgHALIAkAsIgRAPg");
	this.shape_36.setTransform(-21.1,102.8,1.7,1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC543F").s().p("AgpAJIA1hKIAWAeIggAkIAoAyIgKAPg");
	this.shape_37.setTransform(-21.4,100.6,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5
	this.head = new lib.Symbol116();
	this.head.setTransform(-14.4,-44.9,1,1,0,0,0,17.9,32.3);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-112.7,162.8,224.8);


(lib.Symbol92 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol95();

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-19.8,184.2,39.7);


(lib.Symbol91 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol93();
	this.t2.setTransform(6.9,24.2);

	this.t1 = new lib.Symbol92();
	this.t1.setTransform(0,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-43.6,184.2,87.2);


(lib.Symbol82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171D1F").s().p("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QAAgFgCAEIgxA6QgDACgHgCQgHgDABgFQACgSAAgaQAAgagCgNQAAgFAKgBQAKAAABAEQAEAOgDApQAAAFADgDIAwg8QACgDAHADQAHADAAAEQgFAqAFApQABAGgKABIgEAAQgGAAAAgDgAElAxQgEgaACgdQAAgFgCAEIgyA6QgDACgHgCQgGgDABgFQACgSAAgaQgBgbgBgMQgBgFALgBQAJAAACAEQADAOgDApQAAAFADgDIAxg8QACgDAHADQAHADAAAEQgFAqAFApQAAAGgJABIgFAAQgFAAgBgDgAC5AxQgEgaACgdQAAgFgCAEIgyA6QgCACgHgCQgHgDABgFQACgSAAgaIgCgnQgBgFALgBQAKAAABAEQADAOgCApQAAAFACgDQAGgGArg2QACgDAHADQAIADgBAEQgFAqAFApQABAGgKABIgFAAQgFAAgBgDgAiyAwIgBgfQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBABQgMAIgLAAQgYAAgGgXQgFgQAFgaQACgEAJABQAKAAgBAFQgEATADANQAEANAMAAQAKAAAIgGQACgDAAgFIADghQABgFAKABQAKABgBAFQgFArAEArQABAFgLABIgDAAQgGAAgBgEgAlMAwQADgzgFglQAAgFAKAAQAKgCABAEQACALAAAVIABAEIADABQASADALgCQAFAAAAgFIABghQAAgEALABQAJAAAAAFQgDAtAFAqQAAAFgJAAQgKACgBgDQgBgCgCggIAAgFQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBABQgNACgSgCQgDAAAAAFIgCAgQgBAEgJAAQgKgBAAgDgADyhFQgBgDAHgGQAGgGABADQAGAJAKAAQAJAAAHgGQACgCAEAHQAFAHgBABQgDADgHAEQgIAEgKAAQgUAAgHgPg");
	this.shape.setTransform(-1,0.4);

	this.instance = new lib.Symbol90();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-14,179.1,28);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.d6 = new lib.Symbol189();
	this.d6.setTransform(70.8,-24.4);

	this.d4 = new lib.Symbol188();
	this.d4.setTransform(51.6,-46.2);

	this.d3 = new lib.Symbol187();
	this.d3.setTransform(-24.3,-44.6);

	this.d2 = new lib.Symbol186();
	this.d2.setTransform(-48.8,-51.6);

	this.d1 = new lib.Symbol185();
	this.d1.setTransform(-61.7,-40.7);

	this.d5 = new lib.Symbol184();
	this.d5.setTransform(-62.5,29.6);

	this.d10 = new lib.Symbol182();
	this.d10.setTransform(128.7,6.8);

	this.d8 = new lib.Symbol182();
	this.d8.setTransform(75.4,22.2);

	this.d11 = new lib.Symbol181();
	this.d11.setTransform(149.3,-32.1,1.8,1.8);

	this.d9 = new lib.Symbol181();
	this.d9.setTransform(-16.6,102.8,1.8,1.8);

	this.d7 = new lib.Symbol181();
	this.d7.setTransform(-56,60.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d7},{t:this.d9},{t:this.d11},{t:this.d8},{t:this.d10},{t:this.d5},{t:this.d1},{t:this.d2},{t:this.d3},{t:this.d4},{t:this.d6}]}).wait(1));

	// l1
	this.l1 = new lib.Symbol183();
	this.l1.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.6,-67.1,228.6,186.9);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],3.7,6.2,0,3.7,6.2,17.9).s().p("AAgBEQgHgCACgUIAAgFIgFgDQgZgQgfgdQgbgdgHgPQgHADgCgEQgDgEAFgGIgBgCIAegDIABABQASAEAYAAIADAAIAdAnQAEAFAGAOQAGAKAHAAQACAAAGgEQAGgCACADQADAGgPAIIAQAJQAKAGgEAFQgBAFgVgOIALANQAHALgEADQgEADgJgJIgKgMIAIAOQAGAMgFABQgFACgGgKQgGgKgDgCIADAPQAAAJgFAAIgCAAg");
	this.shape.setTransform(-232.2,3.4,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#47AFDA").s().p("AgjgXIgBgDQAAgEAEgBIBFAoIAAAWIgMABg");
	this.shape_1.setTransform(-174.5,7.4,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F8C372","#F7BF7A","#E36353"],[0,0.424,1],-7.8,0.3,0,-7.8,0.3,17.9).s().p("ABMAfQgQAEgmgCQgqgDgegMIgFgBIgEADIgJAIQgHAEgEgCQgHgEAJgHIANgIIgPACQgLABgCgFQgCgEAMgDIAQgCIgPAAQgMgBgBgEQAAgGANgBIARAAQgYgGADgFQABgHAMAEIARAHQgFgRAIgBQAEgBABAGIADAIQAEAGANgCIAVgFQAcgCASAAIACAEQAEAGAJAJIAOAMIAaAZIgFABQgBAIgFAAQgFAAgDgHg");
	this.shape_2.setTransform(-186.1,7.8,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 7
	this.cup = new lib.Symbol194();
	this.cup.setTransform(-232.3,-125.7);

	this.b4 = new lib.Symbol193();
	this.b4.setTransform(-236.8,-102);

	this.b3 = new lib.Symbol192();
	this.b3.setTransform(-235.6,-88.5);

	this.b2 = new lib.Symbol191();
	this.b2.setTransform(-236,-63);

	this.b1 = new lib.Symbol190();
	this.b1.setTransform(-226.1,-31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7EEE6").s().p("AhmAAIDBggIAKAIIACAMIgBAMIgDACIjAAfg");
	this.shape_3.setTransform(-212.3,-15.1,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7EEE6").s().p("Ah4ABIDlgbIAMAKIgDAJIgGACIjlAgg");
	this.shape_4.setTransform(-215.8,-5.5,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7EEE6").s().p("Ah+AIQDyglAEACIAHALIgEAMIj1Agg");
	this.shape_5.setTransform(-216.4,2.1,1.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7EEE6").s().p("AhvAjQADgJgBgMQgBgMgHgGIgCgBIDeggIANAFIAEAQIgGAQIjiAmg");
	this.shape_6.setTransform(-214.2,12.1,1.8,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0C418").s().p("AhxgHIDFghIAZAKIAFAXIgPATIjIAdg");
	this.shape_7.setTransform(-210.5,-15.5,1.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009A86").s().p("AiBgIIDmgbIAdAOIgEARIgSAKIjnAeg");
	this.shape_8.setTransform(-214.2,-5.6,1.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC8953").s().p("AiHAAID9gjIASAJIgDAWIgQAGIj2Aig");
	this.shape_9.setTransform(-214.8,1.9,1.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009A86").s().p("Ah7AuQAEgLABgHQABgMgDgGQgCgGgIgHIgBgLIDmgiIAbAKIAGAbIgKAYIj1Akg");
	this.shape_10.setTransform(-212.3,11.3,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.cup}]}).wait(1));

	// Layer 10
	this.eyes = new lib.Symbol195();
	this.eyes.setTransform(-189.7,-60.7);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#47AFDA").s().p("AgpACIgDgHIAQgFIBCAJIAHAMg");
	this.shape_11.setTransform(-238.8,-8,1.8,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3B3B3B").s().p("AALAGQgJgFgMAAQgEAAAAgDQAAgFAEABQARADAHAFQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgCABIgBgBg");
	this.shape_12.setTransform(-198,-76,1.8,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3B3B3B").s().p("AACALQgBAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgFgEgIQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABgBABAAQAAAAAAAAQAAAAAAABQAAAAABABQAFALgBAGQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_13.setTransform(-169.7,-60,1.8,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F18E83").s().p("AgDAeQgJgBgGgFQgDgEgEgJIgFgOIAAgCQgBgJgEgIQADACADAAIACAAQAHgBAFgFQAIgFAFADQACACAAADIAHgCQAIAAAEAIQACAGAEAFIAAABIADACQADADAFABIgWAVQgJAIgHAAIgBAAgAgQgOIgIABIAAAAIADALQAEALADAEQADAFAIABQAFAAAKgIIAKgIIgCgCIgHgHQgEgFgIgDQgCgCgFAAQgFAAgFACg");
	this.shape_14.setTransform(-193.2,-49.8,1.8,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#87CCEA").s().p("AgSAbIACg5IAHAAIgCAzIAFABIARguIAIACIgXA1g");
	this.shape_15.setTransform(-195.4,-29.4,1.8,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0669B2").s().p("AgMACIAWgJIADAGIgXAJg");
	this.shape_16.setTransform(-196.8,-13.8,1.8,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0669B2").s().p("AgGgKIAGgCIAHAXIgGACg");
	this.shape_17.setTransform(-196.8,-13.8,1.8,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0669B2").s().p("AgMACIAXgJIACAGIgXAJg");
	this.shape_18.setTransform(-194.9,-18.5,1.8,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0669B2").s().p("AgHgJIAHgDIAHAWIgGADg");
	this.shape_19.setTransform(-194.9,-18.5,1.8,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0669B2").s().p("AgMABIAWgIIAEAHIgXAIg");
	this.shape_20.setTransform(-192.8,-23.2,1.8,1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0669B2").s().p("AgGgKIAGgCIAHAXIgGACg");
	this.shape_21.setTransform(-192.9,-23.3,1.8,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0669B2").s().p("AgMABIAXgIIACAHIgXAIg");
	this.shape_22.setTransform(-190.7,-28.1,1.8,1.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0669B2").s().p("AgHgKIAHgCIAIAXIgHACg");
	this.shape_23.setTransform(-190.8,-28.2,1.8,1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0669B2").s().p("AgMAEIAUgNIAFAFIgUAOg");
	this.shape_24.setTransform(-203.6,-15.7,1.8,1.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0669B2").s().p("AgJgHIAFgEIAOATIgGAEg");
	this.shape_25.setTransform(-203.7,-15.7,1.8,1.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0669B2").s().p("AgLAEIATgNIAFAFIgUAOg");
	this.shape_26.setTransform(-203,-20.7,1.8,1.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0669B2").s().p("AgJgHIAGgEIANATIgGAEg");
	this.shape_27.setTransform(-203.1,-20.7,1.8,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0669B2").s().p("AgLAFIATgOIAEAFIgTAOg");
	this.shape_28.setTransform(-202.2,-25.8,1.8,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0669B2").s().p("AgJgHIAGgEIANATIgGAEg");
	this.shape_29.setTransform(-202.3,-25.9,1.8,1.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0669B2").s().p("AgMAFIAUgPIAEAHIgTAOg");
	this.shape_30.setTransform(-201.5,-31.1,1.8,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0669B2").s().p("AgJgIIAGgDIANATIgFAFg");
	this.shape_31.setTransform(-201.6,-31.1,1.8,1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E19654").s().p("AgMAZIACg1IAXAGIgSAzg");
	this.shape_32.setTransform(-195.5,-30,1.8,1.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag6A1IAPh9IAnABIAgAIIAfAOIgqB6g");
	this.shape_33.setTransform(-197,-22,1.8,1.8);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-193.4,-48.9,1.8,1.8,0,0,0,2.9,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0091D5").s().p("Ag+AMIAsgkIgHAVIAbgVIgCAYIAYgNIABAUIAmgHIgoAZg");
	this.shape_34.setTransform(-234.7,-10.5,1.8,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0091D5").s().p("AgcgOIgKgNIAUACIAGgPIANAWIAMgVIALAVIAMgIIADBCg");
	this.shape_35.setTransform(-175.4,4.6,1.8,1.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E19654").s().p("AAAAAQgFAAAAAAQAAgFAFADQAEACACABIAAADQgBgCgFgCg");
	this.shape_36.setTransform(-211.3,-68.4,1.8,1.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0F7090").s().p("AgRAhQgJgBgEgHIAOgTQALgPAHgLQAGgGABgGQADgCADADQAEAGgOAKIASAGQALAFgDAEQgBAEgHAAQgIABgEgDIAIAHQAFAGgEADQgDADgIgDIgJgGIAHAIQAFAGgEADQgFACgGgFIgKgIIADALQAAAFgEAAIgDgBg");
	this.shape_37.setTransform(-223.7,10.1,1.8,1.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E19654").s().p("AAAACQgEgDgCABIABgCQAFgBACAAQAFABAAADQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgEgCg");
	this.shape_38.setTransform(-167.8,-47.4,1.8,1.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3B673").s().p("AgKAAQgBgLAKgCQAIgCAFAKIgCATQgTgDgBgLg");
	this.shape_39.setTransform(-211.7,-68.3,1.8,1.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3B673").s().p("AABANQgOgBgBgNIAKgIQAEgFAGAEQAIADABAGQACAOgPAAIgBAAg");
	this.shape_40.setTransform(-167.6,-47,1.8,1.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B93732").s().p("AgwAeQACgHAagWQAUgRgEgRIAEAFQAIACAPgBQAQgCAIABQACAMgBARIgBAgQgIABgFgCIABgRQgBgLgFgEQgGAEgEAMQgEALgHADQgIAEgTAAQgUAAgJgEg");
	this.shape_41.setTransform(-183.5,126.1,1.8,1.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EE9A00").s().p("ABrB6QgSgOgZgMQiRhGg3hAQg5hGA1g6QAYgGAgAEQASACAmAJIAZAJIBEAZQAnAQAXAWQARAUAGAZQAEATgDBXQgDBJASAdIgEADIg3gxg");
	this.shape_42.setTransform(-175.8,-71.2,1.8,1.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E19654").s().p("AgHASQgLgMAMgLIAKgJIAHgHIACABQgBAFABAJIAAAMQgBAKgHAEQgCACgDAAQgCAAgFgEg");
	this.shape_43.setTransform(-191.4,-60.7,1.8,1.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3B3B3B").s().p("AAGATQAFgHgBgFQgDgIgHgFQgHgGgHgBQgFgBgHACQgGACgEAEIgBAAQADgHAFgFQAKgJARAFQAIADAHAGQAIAJAFADQAEABAIABIgRAHIgJAJQgHAHgEABIAFgGg");
	this.shape_44.setTransform(-176.3,-56.3,1.8,1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgIATIAAAAQgIgEgDgIQgEgHAEgIQAEgIAJgDQAGgDAIAEIABAAQAIAEADAJQADAGgEAIQgEAIgIADIgHABQgDAAgFgCg");
	this.shape_45.setTransform(-178.6,-55.8,1.8,1.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E19654").s().p("AgKAYQgLgFgEgKQgDgJAEgKQAFgLAMgDQAIgEAKAFQALAFAEAKQADAJgEAKQgGALgKAEIgJABQgEAAgGgDg");
	this.shape_46.setTransform(-178.6,-55.8,1.8,1.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3B3B3B").s().p("AAYAaQACgOgLgIQgFgEgKgCQgHgCgJAEQgFAAgCAIIgCAJQgBgEABgKIABgLIgCgIIgCgJQADABAGAFQAGACAMABQAHABAJAGQAOAJAAANQgBAHgEAGg");
	this.shape_47.setTransform(-201.4,-69.1,1.8,1.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgIATIAAAAQgIgEgDgIQgEgHAEgIQAEgIAJgDQAGgDAIAEIABAAQAIAEADAJQADAGgEAIQgDAIgJADIgHABQgDAAgFgCg");
	this.shape_48.setTransform(-201.2,-66.6,1.8,1.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E19654").s().p("AgLAYQgKgFgDgKQgFgJAGgKQAFgLAKgDQAJgEALAFQAKAFADAKQAFAJgGAKQgEALgLAEIgJABQgEAAgHgDg");
	this.shape_49.setTransform(-201.2,-66.6,1.8,1.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ECB800").s().p("AgDAFQgDgCABgDQABgCACgDQACgCADABQADACAAAEIAAADQgBADgFABIAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_50.setTransform(-229,26.4,1.8,1.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#743C1C").s().p("AhpCUQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAHgFAIgJIANgRIAbgjIA2hLQAZghAeguIAYgnQAOgXADgJIAGAEQgDAHgFAJIgKAPIgaAqQgaAqgbAjIg4BPIgdAlQgOATgMAIIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_51.setTransform(-199.3,0.4,1.8,1.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9B5D2E").s().p("AgdAZQgWgLAAgVIAFgWIBiAnQgMAIgRAGQgQAGgNAAQgMAAgLgFg");
	this.shape_52.setTransform(-223.9,21.7,1.8,1.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#743C1C").s().p("AgdApQgigTANgjIAUghQACACApASIAqASIgWAjQgTAUgSAAQgMAAgNgGg");
	this.shape_53.setTransform(-225.9,26.2,1.8,1.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#47AFDA").s().p("AhfgFIAFgbIC6AlIgCAcg");
	this.shape_54.setTransform(-203.3,5.5,1.8,1.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0669B2").s().p("AhaEuQhSgVgagOIgJgJICpkgQCnkjACADQAkAjAbArIAOCPQgLAAgXgcQgXgdgKAAIgSgYIgWBAQANAYATBJQAeBuAABxQAABIgHAYQgbAKgsAEQgZADgZAAQg9AAhAgRg");
	this.shape_55.setTransform(-205.3,30.7,1.8,1.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B93732").s().p("AgwAeQACgGAagXQAUgRgEgRIAEAFQAIADAPgCQARgCAHABQACANgBAQIgBAgQgIAAgFgBIABgRQgBgKgFgFQgGAEgEAMQgEALgHADQgIADgTABQgUgBgJgDg");
	this.shape_56.setTransform(-207.1,125.8,1.8,1.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F4A198").s().p("AAYBbQgTgCgmizIA5ABQATC0gSAAIgBAAg");
	this.shape_57.setTransform(-190.6,88.7,1.8,1.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5595D0").s().p("AggFIQhZgShBgoIgvgjQABgMAIgZQAPgxAfg8QAshZA5hGIAvg0IAIhbIhqAlQgNgGgIgDIgYgGIBdhVQAVgLAzgnQAZgVBHANQBGAMAZAbQAWAXAQAjQAJASAFANIg8A0IgWBAQANAXATBHQAeBxAABxQAABIgHAYQgZAHgqAEQgbADgcAAQg7AAg7gMg");
	this.shape_58.setTransform(-214.6,26.5,1.8,1.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F3B673").s().p("AhZBnQgygvAPhnQAGghAjg0QACATARAYQAKANAWAXQAZAcA1AZQALAEAjAMQAfANAFATQgpBChEAPQgSAEgOAAQgsAAgggeg");
	this.shape_59.setTransform(-187.3,-62.5,1.8,1.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E19654").s().p("AgzARIAMgcQAOgfAFgFIBIAXIgSBIg");
	this.shape_60.setTransform(-196.2,-35.1,1.8,1.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F4A198").s().p("AAZBbQgTgCgnizIA5ABQATC0gSAAIAAAAg");
	this.shape_61.setTransform(-214.1,88.2,1.8,1.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E96862").s().p("AAMB+IhFj+IBSACIAhD/g");
	this.shape_62.setTransform(-209.3,99.3,1.8,1.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E96862").s().p("AAKB0IhBjpIBMABIAkDqg");
	this.shape_63.setTransform(-185.4,101.5,1.8,1.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E75F1C").s().p("AACDBQg5gPgzggQgkgXgUgUQgXgXgSgiQgHgNgKgiQgJgigJgOQARgBASgQIAdgfIApgxQAbggAUgLQAagOAnADQAVABArALIAZAJIBGAZQAnARAXAWQARAUAGAZQAEATgDBWQgDBKASAdQgxAnhEASQgYAHgcAAQggAAgkgJg");
	this.shape_64.setTransform(-188.9,-65.7,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.2,-142.6,114.5,274.9);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.l7 = new lib.Symbol179();
	this.l7.setTransform(49.6,-72.5,1,0.583,66.9);

	this.l6 = new lib.Symbol179();
	this.l6.setTransform(49.6,-72.5,1,0.583,21.9);

	this.l5 = new lib.Symbol179();
	this.l5.setTransform(-32.1,22.2,1,1.528,-139.2);

	this.l4 = new lib.Symbol179();
	this.l4.setTransform(-46.7,-38.5,1,0.762,-13.5);

	this.l3 = new lib.Symbol179();
	this.l3.setTransform(-150.2,53,1,1.687,-131.5);

	this.l2 = new lib.Symbol179();
	this.l2.setTransform(-160.8,8.6,1,0.557,-13.5);

	this.l1 = new lib.Symbol179();
	this.l1.setTransform(-224.2,60.5,1,1,-129.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l1},{t:this.l2},{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l6},{t:this.l7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.4,-77.9,283.3,142.7);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.head = new lib.Symbol164();
	this.head.setTransform(-58.1,-35.9,1,1,0,0,0,1.1,37.6);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// hand1b
	this.hand1b = new lib.Symbol171();
	this.hand1b.setTransform(-35.9,-36.5,1,1,0,0,0,-4.7,12.6);

	this.timeline.addTween(cjs.Tween.get(this.hand1b).wait(1));

	// leg1
	this.leg1 = new lib.Symbol174();
	this.leg1.setTransform(-73.6,88,1,1,0,0,0,3.6,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.leg1).wait(1));

	// leg2
	this.leg2 = new lib.Symbol175();
	this.leg2.setTransform(-158.7,90.7,1,1,0,0,0,6.7,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.leg2).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6001B").s().p("AlXA1QAmgLBMgaQBMgYAmgKQBcgaBCgHQBWgIBNAQIAfAJQAUAFALABQAPAJAXACIAqACQgiAPhlgZQhNgUhWAGQhCAEhdAXQgmAKhRAXQhOAYgpAJg");
	this.shape.setTransform(-110,-36.9,1.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF0024").s().p("AjzApQA9geAqgOQBngmBkgSIBigNQA9gIAogLIAJAbQALAyASAOQALAHAhAQQgeAFgjgEQgagDgngKQhOgShVAGQhCAChdAXQgmAJhQAZQhMAYgpAKIBkgzg");
	this.shape_1.setTransform(-110.1,-43.7,1.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD722C").s().p("AgZgFIAHgRIAsAbIgMASg");
	this.shape_2.setTransform(-70.5,82.9,1.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6671F").s().p("AgcAPIAggrIAZASIgXAbIgYAMg");
	this.shape_3.setTransform(-72.8,86.2,1.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#945C22").s().p("AgPARIAJgmIAGADIAQAog");
	this.shape_4.setTransform(-56.1,56.7,1.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#517070").s().p("AgoAlQANgcAbhGIAYhEIBEgrIgJBXIgsAEIARAbIiTDjQAMgwAnhYg");
	this.shape_5.setTransform(-45.2,-19.5,1.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#364F52").s().p("Ah/DKIA0iWQAPgsAmg8QATgfAOgWIAMhXQBqhBgBBBQAAAhgWAuIiFDmQgEAIgSAzIgRAyg");
	this.shape_6.setTransform(-45,-8.1,1.8,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#517070").s().p("Ag6geIAWgdIgSgMIAVg2IBUgSIAIAeQgBAHgLAXQgLAYgDASQgGAnggBAQgRAhgPAZIgQAYg");
	this.shape_7.setTransform(-79.3,-24.4,1.8,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#364F52").s().p("AiSCgICKjeIAKheIAtgrIBkAIIgLA0QgTBBgmBHQg8Bug3Bdg");
	this.shape_8.setTransform(-96,-11.2,1.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD722C").s().p("AgVgRIAOgLIAdAvIgTAKg");
	this.shape_9.setTransform(-153.3,88.8,1.8,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#945C22").s().p("AgYAIIAIgfIAqAEIgzArg");
	this.shape_10.setTransform(-126.9,73.7,1.8,1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8A823").s().p("AAHAGIgIgEQgGgCgDgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAFAFAKACQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgCACIgCgBg");
	this.shape_11.setTransform(-92.7,36.3,1.8,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F3832").s().p("AgDAJQgEgCgBgEQgBgDABgDQADgEADgBQACgBAEACQAEACABADQACACgDAEQgCAEgDABIgDABIgDgBg");
	this.shape_12.setTransform(-94.7,35.4,1.8,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8A823").s().p("AgGAQQgHgEgEgHQgCgFADgHQADgHAIgCQAFgCAHADQAIAEACAHQAEAGgEAGQgEAHgHACIgGABQgCAAgEgCg");
	this.shape_13.setTransform(-94.7,35.4,1.8,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F3832").s().p("AiKg0IAIgPIEMB8IgBALg");
	this.shape_14.setTransform(-94.5,34.4,1.8,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#945C22").s().p("AgHAcIAZhDIAPAOIghA5IggAHg");
	this.shape_15.setTransform(-94.6,44.7,1.8,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6F9F8").s().p("AgOAdIg+ASIgihjIAUACQAUADADADICdAcIAVgJIhMBOg");
	this.shape_16.setTransform(-49.8,-43,1.8,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B6DBD4").s().p("AgCAFQgFgDADgDQAEgGADADQAFADgDAEQgCADgDAAIgCgBg");
	this.shape_17.setTransform(-81.3,22,1.8,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B6DBD4").s().p("AAAAFQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBIgBgBQgCgCADgDQADgDACACQAEADgBACQgBAEgEAAg");
	this.shape_18.setTransform(-76.6,13.3,1.8,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B6DBD4").s().p("AgDAFIgBgBIgBgBQgDgHAIgCQABgBADADQADACgBACIgBAEQgBADgEAAIAAAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_19.setTransform(-72.4,5.1,1.8,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B6DBD4").s().p("AgCAFQgGgDAEgEQADgGAEAEQAGADgEAEQgCAEgDAAIgCgCg");
	this.shape_20.setTransform(-67.9,-2.4,1.8,1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B6DBD4").s().p("AAAAGQgDAAgBgEIAAgDQABgDACgBQABgBADABQAEACgBADQAAADgDADIgDAAIAAAAg");
	this.shape_21.setTransform(-63.6,-9.9,1.8,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B6DBD4").s().p("AgBAEQgFgCADgDQADgFACADQAFACgDADQgCADgCAAIgBgBg");
	this.shape_22.setTransform(-60.2,-16.3,1.8,1.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B6DBD4").s().p("AAAAFIgDgDQgDgDADgCQADgEADAEQADABAAACQAAADgDACIgDABIAAgBg");
	this.shape_23.setTransform(-56.6,-22.7,1.8,1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#594E42").s().p("AAAADIgCgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIADAEQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgBAAIgBgBg");
	this.shape_24.setTransform(-94.1,-16.2,1.8,1.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#594E42").s().p("AAEACIgHgCIgCAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIAIACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_25.setTransform(-96.8,-11.4,1.8,1.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#594E42").s().p("AgIACQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAHgBAHgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgNADIAAAAIgCgBg");
	this.shape_26.setTransform(-98.5,-5.7,1.8,1.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B6DBD4").s().p("AgRApIhFASIgaiBIDhBBIhVBMg");
	this.shape_27.setTransform(-51.4,-40.8,1.8,1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B6DBD4").s().p("AhzC4IDfl6IAIAFIjSGAg");
	this.shape_28.setTransform(-74.3,1.3,1.8,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F6F9F8").s().p("AjdCMIAGgTIDfltIAKgGQAOgHAPgDQAygKA4AiQBEAoABBiQAAAxgOAoIikERg");
	this.shape_29.setTransform(-78.2,-1.7,1.8,1.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C3219").s().p("AgegVIAOAIIAOAOIARgBIAQAHIgmAPg");
	this.shape_30.setTransform(-70.4,47.6,1.8,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C3219").s().p("AgmAMIAbgGIAmgcIANAJIgwAiIgfACg");
	this.shape_31.setTransform(-118,31.3,1.8,1.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7C4C1D").s().p("AkZCiIBah1IBDiaIA5heIFNC8IAQAoIhQCBIgigKIAjhmIi7g8IiPB3IiFBng");
	this.shape_32.setTransform(-104,56.2,1.8,1.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C6671F").s().p("AgcAUIgDgRIAwgXIAPAaIggAPg");
	this.shape_33.setTransform(-156.6,90.5,1.8,1.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#223332").s().p("AgugZQBeAGgBAEQgCAEgkAmg");
	this.shape_34.setTransform(-114,22.6,1.8,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#223332").s().p("AgogkIBWAsIhbAdg");
	this.shape_35.setTransform(-65.6,31,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// hand2
	this.hand2 = new lib.Symbol173();
	this.hand2.setTransform(-89.5,-44.2,1,1,0,0,0,24.5,-33.1);

	this.timeline.addTween(cjs.Tween.get(this.hand2).wait(1));

	// hand1a
	this.hand1a = new lib.Symbol172();
	this.hand1a.setTransform(-35.9,-36.6,1,1,0,0,0,-47.5,32.7);

	this.timeline.addTween(cjs.Tween.get(this.hand1a).wait(1));

	// coat
	this.coat = new lib.Symbol176();
	this.coat.setTransform(-110.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.coat).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.8,-109.8,252.9,223.5);


(lib.Symbol40 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.m3 = new lib.Symbol180();
	this.m3.setTransform(-58.1,10.6,0.799,0.799,174.6,0,0,-36,-7.5);

	this.m2 = new lib.Symbol180();
	this.m2.setTransform(-86.2,17.1,0.799,0.799,-171.2,0,0,-24.1,-15.9);

	this.m1 = new lib.Symbol180();
	this.m1.setTransform(-74,13.1,1,1,106.9,0,0,-3.7,-21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2},{t:this.m3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.6,-36,76.6,69.5);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.hand = new lib.Symbol154();
	this.hand.setTransform(91.7,-366.8,1,1,0,0,0,117.2,-362.4);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// hand
	this.m9 = new lib.Symbol163();
	this.m9.setTransform(109.8,-32.3);

	this.m8 = new lib.Symbol162();
	this.m8.setTransform(88,-3.6);

	this.m7 = new lib.Symbol161();
	this.m7.setTransform(45.6,-32.5);

	this.m6 = new lib.Symbol160();
	this.m6.setTransform(4.4,-54.7);

	this.m5 = new lib.Symbol159();
	this.m5.setTransform(-28.9,-47.1);

	this.m4 = new lib.Symbol158();
	this.m4.setTransform(-56.1,38.5);

	this.m3 = new lib.Symbol157();
	this.m3.setTransform(-80,24.4);

	this.m2 = new lib.Symbol156();
	this.m2.setTransform(-62.8,69.7);

	this.m1 = new lib.Symbol155();
	this.m1.setTransform(-89,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2},{t:this.m3},{t:this.m4},{t:this.m5},{t:this.m6},{t:this.m7},{t:this.m8},{t:this.m9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.2,-79,236.8,156);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.leaf = new lib.Symbol8();
	this.leaf.setTransform(4.8,-13,1,1,0,0,0,-5.7,-4.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ACF16").s().p("AgqASQAegBANgHQAIgDANgJIALgHIALgIQgNARgRAIQgNAIgOACIgNAAIgQAAg");
	this.shape.setTransform(1,10.5,1.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9ACF16").s().p("AAAAAQgDgDAAgCQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABACACAFIABAIQgBgFgDgDg");
	this.shape_1.setTransform(-7.8,11.5,1.3,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64301E").s().p("AgQATQAHgUAOgPQAHgDACAAIADABIgBABQgIAAgIAMQgDAEgHAMIgEAJg");
	this.shape_2.setTransform(2.4,-10.5,1.3,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#64301E").s().p("AABACQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAgBAAIgCgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAAACIAEACQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQABAAAAAAg");
	this.shape_3.setTransform(4.1,-13.4,1.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A25F2F").s().p("AgQAVQAFgVANgQQAGgGACABIACADIAFACIAAABQgIABgJALQgCADgHAOIgEAIg");
	this.shape_4.setTransform(2.2,-10.8,1.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A25F2F").s().p("AAAACQgFgBAAgBQABgDADAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAABABIADABQAFACgFACIgEgCg");
	this.shape_5.setTransform(4,-13.5,1.3,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#74AD29").s().p("AgGABQACgBACgBIAHAAIACABQgBACgFAAIgHgBg");
	this.shape_6.setTransform(1.9,-8.2,1.3,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88C023").s().p("AAKAIQgGAAgEgCQgNgFgEgHQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAGAHAJACQAHADAIgBIACADQgBADgFAAIgCgBg");
	this.shape_7.setTransform(0.4,-9,1.3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66A12C").s().p("AAAAHQgHgDgGgEQgFgEABgEQAEAIANADQAEADAGAAQAHAAABgCQADAFgIAAQgHAAgGgCg");
	this.shape_8.setTransform(0.5,-8.7,1.3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9ACF16").s().p("AgGAMQgQgPgEgfQANAjAoAhIgBABQgZgNgHgKg");
	this.shape_9.setTransform(-11.3,8.2,1.3,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4EC96").s().p("AAAAMQgRgGgMgHQgNgJACgGQABgDAIABQAIACAGAEQgagIAJALQAIAJASAIQARAHAOABQARAAgGgPQAEABACAEQADAFgDAEQgDAEgJAAQgKAAgSgHg");
	this.shape_10.setTransform(0.7,-9,1.3,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4EC96").s().p("AAIANQgFgXgjgPIAUADQAMACAFAAQAEgBACgDIAEgFQAGgEAFAGQANAagMAZQgEAIgDAAQgGAAgGgTg");
	this.shape_11.setTransform(5.4,-1.7,1.3,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9ACF16").s().p("AgBAUQgYgJgQgNQgQgPADgJQAXABAWAQQAGAFAGABIAOAAQAHAAAKACIAKABQAXAXgXADIgLABQgQAAgSgHg");
	this.shape_12.setTransform(0.3,-9,1.3,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8DBA23").s().p("AABAAQgBAAgDABIgGACQACgCgCgCIgDACQgCgDgFgDIAmAFIACABQgNgBgGAGg");
	this.shape_13.setTransform(-6.5,13.7,1.3,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9ACF16").s().p("AgKBlIgKgDIgJgCQgDgBgFAAQgEABgFgCQgYgJgNgUQgMgRgFgbQgFgdAFgcQAIggAUgSQAnggAuAjQAFAEAIABIAPAAQAHAAAKACQARAEAMANQANANADARQAHAmglA0QgdApgqAAIgMgBg");
	this.shape_14.setTransform(-2.7,0.7,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.leaf}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-14.5,32.6,29.1);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.man = new lib.Symbol113();
	this.man.setTransform(21.2,-2.9,1,1,0,0,0,-6.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-115.3,162.8,224.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.m1 = new lib.Symbol97();
	this.m1.setTransform(-37.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// Vector
	this.q7 = new lib.Symbol105();
	this.q7.setTransform(14.2,-27.1,1,1,-75,0,0,-29.4,-27.1);

	this.q8 = new lib.Symbol104();
	this.q8.setTransform(12.5,-19.5,1,1,-75,0,0,-35.1,-44);

	this.q9 = new lib.Symbol103();
	this.q9.setTransform(7,-14.1,1,1,-75,0,0,-27.6,-50.3);

	this.q6 = new lib.Symbol112();
	this.q6.setTransform(-4.6,-31.9,1,1,0,0,0,-16.4,28.2);

	this.q5 = new lib.Symbol111();
	this.q5.setTransform(-19.2,-30.7,1,1,0,0,0,14.1,36.7);

	this.q4 = new lib.Symbol110();
	this.q4.setTransform(-60.3,-27.6,1,1,0,0,0,12.4,30.8);

	this.q3 = new lib.Symbol109();
	this.q3.setTransform(-79.8,-12,1,1,0,0,0,15.4,30.8);

	this.q2 = new lib.Symbol108();
	this.q2.setTransform(-83.1,-10.8,1,1,0,0,0,24.6,34.6);

	this.q1 = new lib.Symbol107();
	this.q1.setTransform(-64.3,10.3,1,1,0,0,0,56.1,36.4);

	this.q10 = new lib.Symbol106();
	this.q10.setTransform(-8.9,-2,1,1,0,0,0,-49.5,3.6);

	this.q11 = new lib.Symbol105();
	this.q11.setTransform(2.1,-3.2,1,1,0,0,0,-41,-32.8);

	this.q12 = new lib.Symbol104();
	this.q12.setTransform(-6.6,-9.5,1,1,0,0,0,-47.6,-53.8);

	this.q13 = new lib.Symbol103();
	this.q13.setTransform(-10.5,-20.7,1,1,0,0,0,-39.3,-66.5);

	this.q14 = new lib.Symbol102();
	this.q14.setTransform(-19.6,14.6,1,1,0,0,0,-22.3,-41.3);

	this.q18 = new lib.Symbol101();
	this.q18.setTransform(-63.6,13.9,1,1,0,0,0,53.1,-19);

	this.q17 = new lib.Symbol100();
	this.q17.setTransform(-74.9,17.2,1,1,0,0,0,23.3,-53.8);

	this.q16 = new lib.Symbol99();
	this.q16.setTransform(-59.2,14,1,1,0,0,0,31.8,-66.8);

	this.q15 = new lib.Symbol98();
	this.q15.setTransform(-49.4,28.4,1,1,0,0,0,0,-37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q15},{t:this.q16},{t:this.q17},{t:this.q18},{t:this.q14},{t:this.q13},{t:this.q12},{t:this.q11},{t:this.q10},{t:this.q1},{t:this.q2},{t:this.q3},{t:this.q4},{t:this.q5},{t:this.q6},{t:this.q9},{t:this.q8},{t:this.q7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.7,-77.3,213.3,175.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai2DHIAAmNIDZAAQA9AAAkAbQAkAaAAAvQAAA+g/AcQBOAWAABMQAAAzgoAdQgoAdhFAAgAhGBuIBXAAQAaAAANgLQAMgLAAgSQAAgRgMgKQgOgLgcAAIhUAAgAhGgmIBNAAQAXAAANgMQAMgKAAgSQAAgQgLgKQgMgKgXgBIhPAAg");
	this.shape.setTransform(4.6,0.2,0.31,0.31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C292A").ss(1.4).p("AAjjGQA9AAAkAbQAkAbAAAuQAAA/g/AbQBOAWAABNQAAAygoAdQgoAdhFAAIjYAAIAAmNgAAHgmQAXAAANgLQAMgLAAgSQAAgQgLgJQgMgLgXAAIhPAAIAABMgAARBvQAaAAANgLQAMgLAAgTQAAgRgMgKQgOgLgcAAIhUAAIAABPg");
	this.shape_1.setTransform(4.6,0.2,0.31,0.31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai2DHIAAmNIDZAAQA9AAAkAbQAkAaAAAvQAAA+g/AcQBOAWAABMQAAAzgoAdQgoAdhFAAgAhGBuIBXAAQAaAAANgLQAMgLAAgSQAAgRgMgKQgOgLgcAAIhUAAgAhGgmIBNAAQAXAAANgMQAMgKAAgSQAAgQgLgKQgMgKgXgBIhPAAg");
	this.shape_2.setTransform(4.6,0.2,0.31,0.31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCBaQgXgWgCglIAuAAQAEATAKAJQAKAKAQAAQAUAAAJgPQAEgJABgNQAAgVgYgJQgPgDgWgBIAAgcIAgglIgUAAQgZgBgKgGQgNgIAAgVIAAgGIB8AAIAAAqIggAkQALACANAIQALAHAIAJQAMAPAAAWQAAAigZAWQgYAXglAAQgkAAgXgVgAC2BpQgPgJAAgWIAAiRIguAAIAZgnIBJAAIAADdQgaAAgLgGg");
	this.shape_3.setTransform(0,-0.2);

	this.instance = new lib.CompoundPath();
	this.instance.setTransform(0,-0.1,0.31,0.31,0,0,0,71.6,36.8);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-13.6,45.3,27.4);


(lib.s1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.m3 = new lib.Symbol6();
	this.m3.setTransform(78.1,162.4);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// Layer 2
	this.m2 = new lib.Symbol5();
	this.m2.setTransform(-3.9,80.9);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// Layer 1
	this.m1 = new lib.Symbol4();
	this.m1.setTransform(10.1,-78);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// Layer 2
	this.m4 = new lib.Symbol119();
	this.m4.setTransform(-62.5,142);

	this.timeline.addTween(cjs.Tween.get(this.m4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-155.3,232.4,348.8);


(lib.packs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.q1 = new lib.Symbol88();
	this.q1.setTransform(99.1,104.2,1,1,0,0,0,207.8,147.1);

	this.q2 = new lib.Symbol87();
	this.q2.setTransform(-337.9,34,1,1,0,0,0,-264.2,-0.1);

	this.q3 = new lib.Symbol86();
	this.q3.setTransform(328.3,3.4,1,1,0,0,0,331.3,-0.1);

	this.q4 = new lib.Symbol84();
	this.q4.setTransform(111.8,-308.9,1,1,0,0,0,41.8,-210.4);

	this.q6 = new lib.Symbol85();
	this.q6.setTransform(121.7,276.1,1,1,0,0,0,41.8,176.1);

	this.q5 = new lib.Symbol83();
	this.q5.setTransform(-234.6,7.6,1,1,0,0,0,-374.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q5},{t:this.q6},{t:this.q4},{t:this.q3},{t:this.q2},{t:this.q1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-133.9,362,267.8);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m2 = new lib.Symbol3();
	this.m2.setTransform(58.3,2.1);

	this.m1 = new lib.Symbol2();
	this.m1.setTransform(-26.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-15.9,161.3,31.7);


(lib.Symbol178 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.m3 = new lib.Symbol43();
	this.m3.setTransform(62.4,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,-111.7,252.9,223.5);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	//  (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADeDQQgZADgHgBIgDAAQgMgHgUACQgZADgHgBQgQgFgIAAIg1AAIAAgEIARgCQgBgEgEgBIgGABIjNgDIhLADQgJAEgDABQgFgDgCAAIgpgCIgMAEIAAABIA8AAIBvgCIAAAEIgKADIh0ADIg+gFIn6ACQgbgDguAEQg3AFgSAAIhCAAQgXgIgLAAIgjAHIgBgUIAIgFQAEgDAAgGIAGgDIAegKIADANIATgHQgBgHgGgCQgHAAgCgDQgCgVABgLQAAgNALAAIALgCIgDgOQgJgVANgJQgMgIAAgHQAAgIAMgOIgGgWQgTgIgCgQQgBgEgGgGQgJgHAAgPQAHgQARACQAJABATgCIACgTIgcgCQgJABgIgIQgIgKgFgFQgCgBACgNQgNgCAEgRIgMgDQAEgUgNgEQgHgCACgKQABgIAIAAIANgDQAJgCAGAEIACAAQALgKARgBIAdAAIAJAAQAYAFAigEIA6gGQAVAAArABIFNALIA6gCIHwACIEXgGQAZAAAzACIJcgNIAIACQACAPgBAHQgCATgEAGQgBABgRADQAFALAEADQAFACANABIAlAFIACAjIAhAOQALAEgDAMQgCAHgJgCIgPgDQgcgGgKAdIgDANQgDAHgGABIgHAaQgEANACANIAFAbQgPAGgXACIglAAIgRAFIAOAJIgDAHIAGgKIAXgCQAOAAALAEIgIARQAeAPAQgCQAHAAARAFQAGAAAGAJIAAAPIAFAVIgYAAQgOgCgNAQQgFAHgJABIgSAEIgJADQgOAOgXABIgmgBIgmgDQgNgCgRACIgfADQgpAFguABIiYAAQgygDgYAAIg7AFIi/AIQgNgFgUAAgAF1DKIALAAIAAgCIgLAAgAwEDKIA4AAIAAgEIg4AAgAu0DEIAAACIAjAAIAAgEgAnPDCIBrAAIAAgCIhrAAgAvzhVIgBASQAVgCAEABQAIACANgNQgMgHgHgBIgGAAQgIAAgMACg");

	// m1
	this.m1 = new lib.Symbol82();

	this.m1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-14,179.1,28);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.apple = new lib.Symbol7();
	this.apple.setTransform(46.7,21.7);

	this.timeline.addTween(cjs.Tween.get(this.apple).wait(1));

	// Layer 2
	this.q5 = new lib.Symbol201();
	this.q5.setTransform(27,-102.3);

	this.q4 = new lib.Symbol200();
	this.q4.setTransform(17.7,-95.6);

	this.q3 = new lib.Symbol199();
	this.q3.setTransform(1.7,-89.2);

	this.q2 = new lib.Symbol198();
	this.q2.setTransform(-20.2,-83);

	this.q1 = new lib.Symbol197();
	this.q1.setTransform(-45.6,-80.4);

	this.port = new lib.Symbol196();
	this.port.setTransform(39.7,134.5,1,1,0,0,0,44.1,154.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.port},{t:this.q1},{t:this.q2},{t:this.q3},{t:this.q4},{t:this.q5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-108.1,126.3,184);


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Vector
	this.f1 = new lib.Symbol96();
	this.f1.setTransform(-70.5,-27,0.654,0.654,170.5,0,0,-35.4,-49.7);

	this.f3 = new lib.Symbol96();
	this.f3.setTransform(-70.5,-27,0.654,0.654,-159.5,0,0,-30.1,-79.3);

	this.f2 = new lib.Symbol96();
	this.f2.setTransform(-70.5,-27,1,1,0,0,0,22.5,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.f2},{t:this.f3},{t:this.f1}]}).wait(1));

	// t2
	this.t2 = new lib.Symbol91();
	this.t2.setTransform(-1.2,141.9);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1
	this.t1 = new lib.Symbol89();
	this.t1.setTransform(2,-131);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// packs
	this.packs = new lib.packs_1();
	this.packs.setTransform(1,-9.1,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.packs).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.2,-152.4,242.5,337.9);


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m3
	this.m3 = new lib.Symbol55();
	this.m3.setTransform(-51.7,155.9);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// m2
	this.m2 = new lib.Symbol54();
	this.m2.setTransform(261.9,62.3);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// m1
	this.m1 = new lib.Symbol59();
	this.m1.setTransform(-52.5,-84.2);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-151.4,238.2,383.1);


(lib.s2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// m2
	this.m2 = new lib.Symbol40();
	this.m2.setTransform(127.8,163.4);

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1));

	// m3
	this.m3 = new lib.Symbol178();
	this.m3.setTransform(-8.1,70.4);

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1));

	// m4
	this.m4 = new lib.Symbol50();
	this.m4.setTransform(55.6,137.1);

	this.timeline.addTween(cjs.Tween.get(this.m4).wait(1));

	// m1
	this.m1 = new lib.Symbol39();
	this.m1.setTransform(-19.2,-91.8);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.8,-170.8,291.1,372.6);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var count = 1;
		var repeat = 2;
		    time1 = 3.5;
			time2 = time1 + 3.8;
			time3 = time2 + 3.5;
		
		var rotKrug = 15;
		var t1 = this.s1.m1;
		var tl = new TimelineMax();
		
		tl.fromTo(this.blk, 0.7, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .staggerFrom([this.logo.m1, this.logo.m2], 1.0, {y:"+=250", alpha:0, ease:Expo.easeOut}, 0.04, 0.0)
		  .from(this.s1.m2.man, 0.8, {x:"-=150", alpha:0, ease:Elastic.easeOut}, 0.5)
		  .from(this.s1.m2.man.h1, 1.7, {rotation:"-=25", ease:Elastic.easeOut}, 0.7)
		  .from(this.s1.m2.man.h2, 1.7, {rotation:"-=15", ease:Elastic.easeOut}, 0.7)
		  .from(this.s1.m2.man.head, 0.7, {rotation:"-=30", ease:Back.easeOut}, 0.5)
		  .from(this.s1.m2.man.head.m1.eyes, 0.2, {x:"+=2", y:"+=2", yoyo:true, repeat:2, repeatDelay:1.5, ease:Sine.easeInOut}, 1.1)
		  //.from(this.s1.m2.man.head.m1, 1.9, {rotation:"+=25", ease:Elastic.easeOut}, 0.8)
		  //.from(this.s1.m2.man.head.m2, 1.9, {rotation:"+=25", ease:Elastic.easeOut}, 0.8)
		  .to(this.s1.m2.man.head.m1, 0.25, {rotation:"+=25", yoyo:true, repeat:15, repeatDelay:0, ease:Sine.easeIn}, 0.7)
		  .to(this.s1.m2.man.head.m2, 0.25, {rotation:"+=25", yoyo:true, repeat:15, repeatDelay:0, ease:Sine.easeIn}, 0.7)
		  
		  .from(this.s1.m3, 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 1.2)
		  .from(this.s1.m3, 1.3, {rotation:"-=90", ease:Elastic.easeOut}, 1.2)
		  .staggerFrom([this.s1.m4.m3, this.s1.m4.m2, this.s1.m4.m1], 0.7, {y:"-=100", alpha:0, ease:Bounce.easeOut}, 0.3, 1.2)
		  .from(this.s1.m4.m2.f1, 0.06, {scaleY:1.5, yoyo:true, repeat:60, repeatDelay:0.0, ease:Sine.easeInOut}, 1.2)
		  .from(this.s1.m4.m2.f1, 0.1, {scaleX:0.5, yoyo:true, repeat:60, repeatDelay:0.0, ease:Sine.easeInOut}, 1.2)
		  .from(t1.m1, 1.0, {scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut}, 1.5)
		  .staggerFrom([t1.q1, t1.q2, t1.q3, t1.q4, t1.q5, t1.q6, t1.q7, t1.q8, t1.q9, t1.q10, t1.q11, t1.q12, t1.q13, t1.q14, t1.q15, t1.q16, t1.q17, t1.q18], 1.0, {scaleX:0.0, scaleY:0.0, ease:Elastic.easeOut}, 0.02, 1.6)
		
		 
		  //2
		  .staggerTo([this.s1.m4, this.s1.m3, this.s1.m2, this.s1.m1], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time1+0.0)
		  .staggerTo([t1.q1, t1.q2, t1.q3, t1.q4, t1.q5, t1.q6, t1.q7, t1.q8, t1.q9, t1.q10, t1.q11, t1.q12, t1.q13, t1.q14, t1.q15, t1.q16, t1.q17, t1.q18], 0.5, {scaleX:0.0, scaleY:0.0, ease:Back.easeIn}, 0.02, time1+0.0)
		  
		  .from(this.s2.m1.hand, 0.8, {rotation:"+=90", ease:Expo.easeOut}, time1+0.9)
		  .staggerFrom([this.s2.m1.m1, this.s2.m1.m2, this.s2.m1.m3, this.s2.m1.m4, this.s2.m1.m5, this.s2.m1.m6, this.s2.m1.m7, this.s2.m1.m8, this.s2.m1.m9], 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.06, time1+1.4)
		  
		  .from(this.s2.m3, 0.5, {x:"-=450", y:"+=450", ease:Expo.easeOut}, time1+1.0)
		  .to(this.s2.m3.m3, 0.4, {x:"+=10", yoyo:true, repeat:10, repeatDelay:0.0, ease:Sine.easeInOut}, time1+1.0)
		  .to(this.s2.m3.m3, 0.6, {y:"-=10", yoyo:true, repeat:10, repeatDelay:0.0, ease:Sine.easeInOut}, time1+1.0)
		  .from(this.s2.m3.m3.hand1a, 0.7, {rotation:"+=95", ease:Expo.easeOut}, time1+1.2)
		  .from(this.s2.m3.m3.hand1b, 0.7, {rotation:"+=95", ease:Expo.easeOut}, time1+1.2)
		  .from(this.s2.m3.m3.hand2, 0.7, {rotation:"-=35", ease:Expo.easeOut}, time1+1.2)
		  .from(this.s2.m3.m3.head, 0.7, {rotation:"+=30", ease:Expo.easeOut}, time1+1.2)
		  .from(this.s2.m3.m3.leg1, 0.1, {rotation:"-=5", yoyo:true, repeat:30, repeatDelay:0.0, ease:Sine.easeInOut}, time1+1.3)
		  .from(this.s2.m3.m3.leg2, 0.1, {rotation:"-=5", yoyo:true, repeat:30, repeatDelay:0.0, ease:Sine.easeInOut}, time1+1.35)
		  .from(this.s2.m3.m3.head.hair, 0.7, {rotation:"+=30", ease:Expo.easeOut}, time1+1.2)
		  //.from(this.s2.m3.head.eyes, 0.2, {x:"+=1", y:"+=1", yoyo:true, repeat:5, repeatDelay:1.0, ease:Sine.easeInOut}, time1+1.6)
		  .from(this.s2.m3.m3.head.eyes, 0.2, {x:"+=1", y:"+=1", ease:Sine.easeInOut}, time1+1.6)
		  .to(this.s2.m3.m3.head.eyes, 0.2, {x:"+=1", y:"+=1", ease:Sine.easeInOut}, time1+2.5)
		  .to(this.s2.m3.m3.head.eyes, 0.2, {x:"-=3", y:"-=0", ease:Sine.easeInOut}, time1+3.2)
		  
		  .staggerFrom([this.s2.m3.m3.coat.c1, this.s2.m3.m3.coat.c2, this.s2.m3.m3.coat.c3], 0.1, {scaleX:0, scaleY:0, yoyo:true, repeat:60, repeatDelay:0.0, ease:Power0.easeNone}, 0.07, time1+1.3)
		  
		  .staggerFrom([this.s2.m4.l1, this.s2.m4.l2, this.s2.m4.l3, this.s2.m4.l4, this.s2.m4.l5], 0.1, {scaleY:0, ease:Power0.easeNone}, 0.1, time1+1.3)
		  .staggerFrom([this.s2.m4.l6, this.s2.m4.l7], 0.8, {scaleY:0, ease:Elastic.easeOut}, 0.0, time1+1.8)
		  //.from(this.s2.m4., 0.8, {scaleY:0, ease:Elastic.easeOut}, time1+1.0)
		  
		  .staggerFrom([this.s2.m2.m1, this.s2.m2.m2, this.s2.m2.m3], 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.02, time1+1.1)
		  
		  .from(this.s2.m2.m1, 0.7, {y:"+=130", ease:Expo.easeOut}, time1+1.9)
		  .from(this.s2.m2.m1, 3.1, {rotation:"+=180", ease:SlowMo.ease.config(0.1, 0.9, false)}, time1+1.9)
		  .from(this.s2.m2.m2, 0.8, {y:"+=130", ease:Expo.easeOut}, time1+1.7)
		  .from(this.s2.m2.m2, 3.3, {rotation:"+=180", ease:SlowMo.ease.config(0.1, 0.9, false)}, time1+1.7)
		  .from(this.s2.m2.m3, 0.9, {y:"+=130", ease:Expo.easeOut}, time1+1.7)
		  .from(this.s2.m2.m3, 3.2, {rotation:"+=180", ease:SlowMo.ease.config(0.1, 0.9, false)}, time1+1.7)
		  /*.from(this.s2.m2.m1, 0.7, {y:"+=130", rotation:"+=90", ease:Sine.easeOut}, time1+1.8)
		  .to(this.s2.m2.m1, 2.3, {y:"+=0", rotation:"-=100", ease:Sine.easeIn}, time1+2.5)
		  .from(this.s2.m2.m2, 0.9, {y:"+=130", rotation:"+=90", ease:Sine.easeOut}, time1+1.8)
		  .to(this.s2.m2.m2, 2.3, {y:"+=0", rotation:"-=100", ease:Sine.easeIn}, time1+2.7)
		  .from(this.s2.m2.m3, 1.2, {y:"+=130", rotation:"+=90", ease:Sine.easeOut}, time1+1.8)
		  .to(this.s2.m2.m3, 2.0, {y:"+=0", rotation:"-=100", ease:Sine.easeIn}, time1+3.0)*/
		  
		  
		  //3
		  .staggerTo([this.s2.m4, this.s2.m3, this.s2.m2, this.s2.m1], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time2+0.0)
		  .from(this.s3.m1.l1, 0.7, {scaleX:0, scaleY:0, rotation:"-=40", ease:Expo.easeOut}, time2+1.0)
		  .staggerFrom([this.s3.m1.d1, this.s3.m1.d2, this.s3.m1.d3, this.s3.m1.d4, this.s3.m1.d5, this.s3.m1.d6, this.s3.m1.d7, this.s3.m1.d8, this.s3.m1.d9, this.s3.m1.d10, this.s3.m1.d11], 1.2, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.01, time2+1.1)
		  .from(this.s3.m2, 0.5, {x:"+=250", ease:Expo.easeOut}, time2+1.3)
		  .staggerFrom([this.s3.m2.b1, this.s3.m2.b2, this.s3.m2.b3, this.s3.m2.b4], 1.3, {x:"+=10", ease:Elastic.easeOut}, 0.03, time2+1.5)
		  .from(this.s3.m2.cup, 0.7, {y:"-=100", alpha:0, ease:Bounce.easeOut}, time2+2.0)
		  .to(this.s3.m2.eyes, 0.1, {x:"-=2", y:"-=2", ease:Power0.easeNone}, time2+2.4)
		  .to(this.s3.m2.eyes, 0.1, {x:"+=0", y:"+=3", ease:Power0.easeNone}, time2+3.1)
		  .to(this.s3.m2.eyes, 0.1, {x:"+=2", y:"-=1", ease:Power0.easeNone}, time2+3.9)
		  
		  .from(this.s3.m3.port, 0.7, {rotation:"-=60", ease:Elastic.easeOut}, time2+1.8)
		  .staggerFrom([this.s3.m3.q1, this.s3.m3.q2, this.s3.m3.q3, this.s3.m3.q4, this.s3.m3.q5], 0.6, {x:"+=40", y:"-=20", alpha:0, ease:Expo.easeOut}, 0.02, time2+2.0)
		  .from(this.s3.m3.apple, 0.7, {y:"-=100", alpha:0, ease:Bounce.easeOut}, time2+2.0)
		  .from(this.s3.m3.apple.leaf, 1.2, {rotation:"-=90", ease:Elastic.easeOut}, time2+2.2)
		  
		  //4
		  .staggerTo([this.s3.m3, this.s3.m2, this.s3.m1], 1.0, {y:"+=500", ease:Expo.easeIn}, 0.1, time3+0.0)
		  .from(this.s4.t1, 1.2, {x:"-=250", ease:Expo.easeOut}, time3+1.0)
		  .from(this.s4.t1.m1, 1.2, {x:"+=250", ease:Expo.easeOut}, time3+1.0)
		  .staggerFrom([this.s4.packs.q1, this.s4.packs.q2, this.s4.packs.q3, this.s4.packs.q4, this.s4.packs.q5, this.s4.packs.q6], 1.0, {rotation:"-=180", alpha:0, ease:Expo.easeOut}, 0.08, time3+1.2)
		  .staggerFrom([this.s4.f1, this.s4.f2, this.s4.f3], 1.0, {scaleX:0, scaleY:0, ease:Elastic.easeOut}, 0.05, time3+1.8)
		  .from(this.s4.t2.t1, 0.7, {x:"+=250", ease:Elastic.easeOut}, time3+2.1)
		  .from(this.s4.t2.t2, 0.7, {x:"-=250", ease:Elastic.easeOut, onComplete:replay}, time3+2.1)
		  
		  //.call(replay)
		  .to(this.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, rotKrug)
		  ;
		
		
		
		
		
		function replay() {
			
		  if (count == repeat){
		      //tl.pause();
			  tl.kill();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		function restart() {
			tl.play(0);
		}
		
		
		
		var r = this.s1.m4.m3.bs;
		var m = this.s1.m2.man.h2.bs;
		
		function shake() {
			var i=1;
			for (currObj in r) {
			  if(r[currObj] && typeof r[currObj] == "object"){
				  console.log(i);
				  i++;
			   TweenMax.from(r[currObj], 0.2+0.005*i, {scaleX:0, scaleY:0, ease:/*Power0.easeNone*/Sine.easeInOut, yoyo:true, repeat:70/*, repeatDelay:Ran(0,2)*/});
			  }
			 }
		}
		shake();
		function shake2() {
			var j=1;
			for (currObj in m) {
			  if(m[currObj] && typeof m[currObj] == "object"){
				  console.log(j);
				  j++;
			   TweenMax.from(m[currObj], 0.2+0.005*j, {scaleX:0, scaleY:0, ease:/*Power0.easeNone*/Sine.easeInOut, yoyo:true, repeat:70/*, repeatDelay:Ran(0,2)*/});
			  }
			 }
		}
		shake2();
		
		/*function Ran(min, max) {
			return min + ( Math.random() * (max - min))
			};*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#98B587").ss(2,2,0,3,true).p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.setTransform(0.4,-169.5,1,1,0,0,0,0.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// s4
	this.s4 = new lib.s4();

	this.timeline.addTween(cjs.Tween.get(this.s4).wait(1));

	// s3
	this.s3 = new lib.s3();
	this.s3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.s3).wait(1));

	// s2
	this.s2 = new lib.s2();
	this.s2.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

	// s1
	this.s1 = new lib.s1();

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#6A3CDD","#3C227D"],[0,1],0,0,0,0,0,195.5).s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.7,-201,295,432.7);


// stage content:
(lib.n1_240x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTag, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link_for_GDN
	this.btn = new lib.link();
	this.btn.setTransform(120,200,1.333,1.333);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyufQMAAAg+fMAldAAAMAAAA+fg");
	mask.setTransform(120,200);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(120,200);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;