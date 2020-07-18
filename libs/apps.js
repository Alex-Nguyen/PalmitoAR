var DANI;
!function (e) {
    let t = Backbone.Model.extend({
        defaults: {
            camera: null,
            scene: null,
            renderer: null
        },
        initialize: function () {
            this.time = 0;
            this._onRAF = this._onRAF.bind(this);
        },
        registerAnimation: function (_renderer, _scene, _camera) {
            this.set({renderer: _renderer, scene: _scene, camera: _camera});
            createjs.Ticker.addEventListener('tick', this._onRAF, false);
        },
        unregisterAnimation: function () {
            createjs.Ticker.removeEventListener('tick', this._onRAF);
            this.set({renderer: null, scene: null, camera: null});
        },
        _onRAF: function (t) {
            if (this.get('renderer')) {
                let r = t.delta / 1e2;
                this.time += r;
                this.trigger('draw', this.time, r);
                this.get('renderer').render(this.get('scene'), this.get('camera'));
            }

        },
        _onWindowResize: function () {
            this.get('renderer').setSize(window.innerWidth, window.innerHeight);
            this.get('renderer').setPixelRatio(window.devicePixelRatio);
            this.get('camera').aspect = window.innerWidth / window.innerHeight;
            this.get('camera').updateProjectionMatrix();
        }
    });
    e.AnimationController = new t();
}(DANI || (DANI = {}))
!function(e){
    const t = Backbone.Model.extend({
        init:function () {
            this.time = 0;

            this.clock = new THREE.Clock();
            this._onRAF = this._onRAF.bind(this);
            this.onUpdate = this.onUpdate.bind(this)
            this._initScene();
        },
        _initScene:function(){
            let self = this;
            this.scene = new THREE.Scene();
            this.camera = new THREE.Camera();
            this.scene.add(this.camera);

            this.renderer = new THREE.WebGLRenderer({
                antialias : true,
                alpha: true
            });
            this.renderer.setClearColor(new THREE.Color('lightgrey'), 0)
            this.renderer.setSize( 640, 480 );
            this.renderer.domElement.style.position = 'absolute'
            this.renderer.domElement.style.top = '0px'
            this.renderer.domElement.style.left = '0px'
            document.body.appendChild( this.renderer.domElement );


            this.deltaTime = 0;
            this.totalTime = 0;
            this.arToolkitContext = new THREEx.ArToolkitContext({
                cameraParametersUrl: 'data/camera_para.dat',
                detectionMode: 'mono'
            });
            this.arToolkitContext.init( function onCompleted(){
                self.camera.projectionMatrix.copy( self.arToolkitContext.getProjectionMatrix() );
            });
            this.arToolkitSource = new THREEx.ArToolkitSource({
                sourceType : 'webcam',
            });

            this.arToolkitSource.init(function onReady(){
                self.onResize()
            });
            window.addEventListener('resize', function(){
                self.onResize()
            });
            this.markerRootA = new THREE.Group();
            this.scene.add(this.markerRootA);
            let markerControls1 = new THREEx.ArMarkerControls(this.arToolkitContext, this.markerRootA, {
                type: 'pattern', patternUrl: "data/letterA.patt",
            });

            this.markerRootB = new THREE.Group();
            this.scene.add(this.markerRootB);
            let markerControls2 = new THREEx.ArMarkerControls(this.arToolkitContext, this.markerRootB, {
                type: 'pattern', patternUrl: "data/letterB.patt",
            });

            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            let loader = new THREE.GLTFLoader();
            let modelPath = 'data/RobotExpressive.glb';

            this.sceneGroup = new THREE.Group();
            this.markerRootA.add(this.sceneGroup);

            loader.load(modelPath,function (gltf) {
                self.troop = gltf.scene;
                self.scene.add(self.troop);

            });

            let light = new THREE.PointLight( 0xffffff, 1, 100 );
            light.position.set( 0,4,0 ); // default; light shining from top
            light.castShadow = true;
            this.sceneGroup.add( light );

            let lightSphere = new THREE.Mesh(
                new THREE.SphereGeometry(0.1),
                new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.8
                })
            );
            lightSphere.position.copy( light.position );
            this.sceneGroup.add( lightSphere );

            let ambientLight = new THREE.AmbientLight( 0x666666 );
            this.sceneGroup.add( ambientLight );

            let clipPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(
                new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,0) );
            this.renderer.clippingPlanes = [clipPlane];
            this.on('draw', this.onUpdate)
            // Register action
            createjs.Ticker.addEventListener('tick', this._onRAF, false);

        },
        onUpdate:function(){
            if ( this.arToolkitSource.ready !== false )
                this.arToolkitContext.update( this.arToolkitSource.domElement );

            if ( this.markerRootA.visible && this.markerRootB.visible )
            {

                // align clipping plane to scene.
                this.renderer.clippingPlanes[0].setFromNormalAndCoplanarPoint(
                    new THREE.Vector3(0,1,0).applyQuaternion(this.sceneGroup.getWorldQuaternion()),
                    this.sceneGroup.getWorldPosition()
                );

                let p = this.parabolicPath( this.markerRootA.getWorldPosition(), this.markerRootB.getWorldPosition(), (this.totalTime) % 4 - 1 );
                self.troop.position.copy( p );
                self.troop.rotation.z += 0.1
                $("#overlay").text(`PosA ${this.markerRootA.getWorldPosition()} and PosB ${this.markerRootB.getWorldPosition()}`)
            }
        },
        parabolaEvaluate:function(p0, p1, p2, t){
            return ( 0.5*(p0 - 2*p1 + p2) )*t*t + ( -0.5*(3*p0 - 4*p1 + p2) )*t + ( p0 );
        },
        parabolicPath:function(pointStart, pointEnd, time){
            let pointMiddle = new THREE.Vector3().addVectors( pointStart, pointEnd ).multiplyScalar(0.5).add( new THREE.Vector3(0,2,0) );
            return new THREE.Vector3(
                this.parabolaEvaluate( pointStart.x, pointMiddle.x, pointEnd.x, time ),
                this.parabolaEvaluate( pointStart.y, pointMiddle.y, pointEnd.y, time ),
                this.parabolaEvaluate( pointStart.z, pointMiddle.z, pointEnd.z, time )
            );
        },
        onResize:function(){
            this.arToolkitSource.onResize();
            this.arToolkitSource.copySizeTo(this.renderer.domElement);
            if ( this.arToolkitContext.arController !== null )
            {
                this.arToolkitSource.copySizeTo(this.arToolkitContext.arController.canvas)
            }
        },
        _loadGLTFModel:function(){
            let self = this;
            let loader = new THREE.GLTFLoader();
            let modelPath = 'data/RobotExpressive.glb';
            loader.load(modelPath,function (gltf) {
                self.troopUnion = gltf.scene;
                let clips = gltf.animations;
                self.mixer = new THREE.AnimationMixer( self.troopUnion );
                let clip = THREE.AnimationClip.findByName( clips, "Walking" );
                self.action = self.mixer.clipAction( clip );
                self.action.play();
                self.scene.add(self.troopUnion);
                createjs.Tween.get(self.troopUnion.position).to({x: 0, y: 0, z: 10}, 5000).call(handleComplete);
            });
            function handleComplete() {
                self.action.stop();
            }
        },

        _onRAF: function (t) {
                let r = t.delta / 1e2;
                this.time += r;
                this.deltaTime = this.clock.getDelta();
                this.totalTime += this.deltaTime;
                this.trigger('draw', this.time, r);
                this.renderer.render( this.scene, this.camera );
        },
    });
    e.ThreeScene = new t();
}(DANI || (DANI = {}))
DANI.ThreeScene.init();