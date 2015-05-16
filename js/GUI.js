function initGui(){
	var params = {
	  fogDensity : fgDensity,
	  cameraBackMax : camBackMax,
	  cameraMoveFreq : camMoveFreq,
	  cameraMoveTime : camMoveTime,
	  sapiaShadeLevel : sapiaShaderLevel,
	  blurShadeLevel : blurShaderLevel,
	  videoVisible : true
	};

	gui = new dat.GUI();
	
	var folder1 = gui.addFolder('Fog');
	fgDensity = folder1.add(params, 'fogDensity').min(0.00001).max(0.0004).step(0.00001).name('Fog Density').listen();
	fgDensity.onChange(function(value){
								scene.fog.density = value	;
							});

	var folder2 = gui.addFolder('Camera');
	camMaxZ = folder2.add( params, 'cameraBackMax' ).min(1800).max(7000).step(1).name('Move Back Max').listen();
	camMaxZ.onChange(function(value){
								camBackMax = value;
							});

	var camMoveTimeMax = folder2.add( params, 'cameraMoveTime' ).min(200).max(2000).step(1).name('Move Time').listen();
	camMoveTimeMax.onChange(function(value){
								camMoveTime = value;
							});
	var camMoveFreqMax = folder2.add( params, 'cameraMoveFreq' ).min(0).max(10000).step(1).name('Move Freq').listen();
	camMoveFreqMax.onChange(function(value){
								camMoveFreq = value;
							});

	var folder3 = gui.addFolder('Shader');
	var sapiaAmount = folder3.add( params, 'sapiaShadeLevel' ).min(0).max(0.7).step(0.01).name('Sapia').listen();
	sapiaAmount.onChange(function(value){
								effectSepia.uniforms[ "amount" ].value = value;
							});
	var blurAmount = folder3.add( params, 'blurShadeLevel' ).min(0).max(0.7).step(0.02).name('Blur').listen();
	blurAmount.onChange(function(value){
								effectBlend.uniforms[ 'mixRatio' ].value  = value;
							});

	var vidvidVisible = gui.add( params, 'videoVisible' ).name('Video Visible?').listen();
	vidvidVisible.onChange(function(value) 
	{
		if (value){
			videoCanvas.style.visibility = 'visible';
			layer2Canvas.style.visibility = 'visible';
		}
		else{
			videoCanvas.style.visibility = 'hidden';
			layer2Canvas.style.visibility = 'hidden';
		}
	});
	

	gui.open();
}




