AFRAME.registerComponent('manager', {
    init: function () {
        let self = this;

        this.fire = document.querySelector('#fire1');
        this.scene = document.querySelector('a-scene');
        $("#fullScreen").click(function () {
            if (!document.fullscreenElement
                && !document.mozFullScreenElement
                && !document.webkitFullscreenElement && !document.msFullscreenElement
            ) {  // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        });
        this.fire.setAttribute('visible', 'false')
        this.stage1Handler = this.stage1Handler.bind(this);
        this.stage2Handler = this.stage2Handler.bind(this);
        this.stage3Handler = this.stage3Handler.bind(this);
        this.stage4Handler = this.stage4Handler.bind(this);
        this.stage5Handler = this.stage5Handler.bind(this);
        this.stage6Handler = this.stage6Handler.bind(this);
        this.stage7Handler = this.stage7Handler.bind(this);
        this.stage8Handler = this.stage8Handler.bind(this);
        $("#stage1").click(self.stage1Handler);
        $("#stage2").click(self.stage2Handler);
        $("#stage3").click(self.stage3Handler);
        $("#stage4").click(self.stage4Handler);
        $("#stage5").click(self.stage5Handler);
        $("#stage6").click(self.stage6Handler);
        $("#stage7").click(self.stage7Handler);
        $("#stage8").click(self.stage8Handler);


    },

    stage1StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');

        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        //Remove models from markers and append to the scene
        let u1old = document.querySelector("#u1");
        if(u1old) u1old.parentNode.removeChild(u1old);
        // Recreate u1 with three unions soldiers
        let u1 = document.createElement('a-entity');
        u1.setAttribute("id",'u1');
        u1.object3D.position.copy(marker1);
        let u11 = this.create3Dmodel('u11','union');
        u11.object3D.position.x -=0.5;
        let u12 = this.create3Dmodel('u12','union');
        let u13 = this.create3Dmodel('u13','union');
        u13.object3D.position.x +=0.5;
        u1.appendChild(u11);
        u1.appendChild(u12);
        u1.appendChild(u13);
        this.scene.appendChild(u1);

        let c1old = document.querySelector("#c1");
        if(c1old) c1old.parentNode.removeChild(c1old);
        let c1 = document.createElement('a-entity');
        c1.setAttribute("id",'c1');
        c1.object3D.position.copy(marker2);
        let c11 = this.create3Dmodel('c11','conf');
        c11.object3D.position.x -=1;
        c11.object3D.position.z -=1;
        c11.object3D.rotation.y = Math.PI/2;
        let c12 = this.create3Dmodel('c12','conf',"no");
        c12.object3D.position.x -=1.3;
        c12.object3D.rotation.y = Math.PI/2;
        let c13 = this.create3Dmodel('c13','conf');
        c13.object3D.position.x -=1.6;
        c13.object3D.position.z +=1;
        c13.object3D.rotation.y = Math.PI/2;
        c1.appendChild(c11);
        c1.appendChild(c12);
        c1.appendChild(c13);
        this.scene.appendChild(c1);

    },
    stage2StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');


        let marker2 = document.querySelector('#pos2').object3D.position;

        let u1old = document.querySelector('#u1');
        let c1old = document.querySelector('#c1');
        let c11old = document.querySelector('#c11');
        let c12old = document.querySelector('#c12');
        let c13old = document.querySelector('#c13');
        if(c11old) c11old.parentNode.removeChild(c11old);
        if(c12old) c12old.parentNode.removeChild(c12old);
        if(c13old) c13old.parentNode.removeChild(c13old);
        if(u1old) u1old.parentNode.removeChild(u1old);
        if(c1old) c1old.parentNode.removeChild(c1old);
        // let marker2 = document.querySelector('#pos2').object3D.position;

        let u1 = document.createElement('a-entity');
        u1.setAttribute("id",'u1');
        let u11 = this.create3Dmodel('u11','union');
        u11.object3D.position.x +=1;
        u11.object3D.position.z -=1;
        u11.setAttribute('animation-mixer', {clip: 'Idle'})
        u11.object3D.rotation.y = -Math.PI/2;

        let u12 = this.create3Dmodel('u12','union','no');
        u12.object3D.position.x +=1;
        u12.object3D.rotation.y = -Math.PI/2;
        u12.setAttribute('animation-mixer', {clip: 'Idle'})
        let u13 = this.create3Dmodel('u13','union','no');
        u13.object3D.position.x +=1;
        u13.object3D.position.z +=1;
        u13.object3D.rotation.y = -Math.PI/2;
        u13.setAttribute('animation-mixer', {clip: 'Idle'})

        u1.appendChild(u11);
        u1.appendChild(u12);
        u1.appendChild(u13);
        u1.object3D.position.copy(marker2)
        this.scene.appendChild(u1);


        let c11 = this.create3Dmodel('c11','conf');
        c11.object3D.position.copy(marker2);
        c11.object3D.position.x -=1;
        c11.object3D.position.z -=1;
        c11.setAttribute('animation-mixer', {clip: 'Idle1'})
        c11.object3D.rotation.y = Math.PI/2;

        let c12 = this.create3Dmodel('c12','conf','no');
        c12.object3D.position.copy(marker2);
        c12.object3D.position.x -=1;
        c12.object3D.rotation.y = Math.PI/2;
        c12.setAttribute('animation-mixer', {clip: 'Idle1'})
        let c13 = this.create3Dmodel('c13','conf','no');
        c13.object3D.position.copy(marker2);
        c13.object3D.position.x -=1;
        c13.object3D.position.z +=1;
        c13.object3D.rotation.y = Math.PI/2;
        c13.setAttribute('animation-mixer', {clip: 'Idle1'})


        this.scene.appendChild(c11);
        this.scene.appendChild(c12);
        this.scene.appendChild(c13);

    },
    stage3StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker4 = document.querySelector('#pos4');
        let marker5 = document.querySelector('#pos5');
        let marker6 = document.querySelector('#pos6');

        //Remove models from markers and append to the scene
        let u1old = document.querySelector("#u1");
        if(u1old) u1old.parentNode.removeChild(u1old);

        let c1old = document.querySelector("#c1");
        if(c1old) c1old.parentNode.removeChild(c1old);
        // Recreate u1 with three unions soldiers
        let u1 = document.createElement('a-entity');
        u1.setAttribute("id",'u1');
        u1.object3D.position.copy(marker2);
        let u11 = this.create3Dmodel('u11','union');
        u11.object3D.position.x -=0.5;
        let u12 = this.create3Dmodel('u12','union','no');
        let u13 = this.create3Dmodel('u13','union','no');
        u13.object3D.position.x +=0.5;
        u1.appendChild(u11);
        u1.appendChild(u12);
        u1.appendChild(u13);
        this.scene.appendChild(u1);


        let c11old = document.querySelector('#c11');
        if(c11old) c11old.parentNode.removeChild(c11old);
        let c11 = this.create3Dmodel('c11', 'conf');
        marker4.appendChild(c11);

        let c12old = document.querySelector('#c12');
        if(c12old) c12old.parentNode.removeChild(c12old);
        let c12 = this.create3Dmodel('c12', 'conf','no');
        marker5.appendChild(c12);

        let c13old = document.querySelector('#c13');
        if(c13old) c13old.parentNode.removeChild(c13old);
        let c13 = this.create3Dmodel('c13', 'conf','no');
        marker6.appendChild(c13);

    },
    stage4StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');



        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        let c1 = document.querySelector('#c1');
        if(c1) c1.parentNode.removeChild(c1);
        let u1old = document.querySelector('#u1');
        if(u1old) u1old.parentNode.removeChild(u1old);

        let c1old = document.querySelector('#c11');
        if(c1old) c1old.parentNode.removeChild(c1old);
        let c11 = this.create3Dmodel('c11', 'conf');
        this.scene.append(c11);
        c11.object3D.position.copy(marker4);

        let c2old = document.querySelector('#c12');
        if(c2old) c2old.parentNode.removeChild(c2old);
        let c12 = this.create3Dmodel('c12', 'conf','no');

        this.scene.append(c12);
        c12.object3D.position.copy(marker5);


        let c3old = document.querySelector('#c13');
        if(c3old) c3old.parentNode.removeChild(c3old);
        let c13 = this.create3Dmodel('c13', 'conf','no');
        c13.setAttribute('gltf-model', '#confRTroop');
        this.scene.append(c13);
        c13.object3D.position.copy(marker6);



        let pos2 = document.querySelector("#pos2");

        let u1 = document.createElement('a-entity');
        u1.setAttribute("id",'u1');
        let u11 = this.create3Dmodel('u11','union');
        u11.object3D.position.x +=1;
        u11.object3D.position.z -=1;
        u11.setAttribute('animation-mixer', {clip: 'Idle'})
        u11.object3D.rotation.y = -Math.PI/2;

        let u12 = this.create3Dmodel('u12','union','no');
        u12.object3D.position.x +=1;
        u12.object3D.rotation.y = -Math.PI/2;
        u12.setAttribute('animation-mixer', {clip: 'Idle'})
        let u13 = this.create3Dmodel('u13','union','no');
        u13.object3D.position.x +=1;
        u13.object3D.position.z +=1;
        u13.object3D.rotation.y = -Math.PI/2;
        u13.setAttribute('animation-mixer', {clip: 'Idle'})

        u1.appendChild(u11);
        u1.appendChild(u12);
        u1.appendChild(u13);
        u1.object3D.position.copy(pos2.object3D.position);
        this.scene.appendChild(u1);


    },
    stage5StartPosition:function(){
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');

        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        //Remove models from markers and append to the scene
        let u1old = document.querySelector("#u1");
        if(u1old) u1old.parentNode.removeChild(u1old);

        // Recreate u1 with three unions soldiers
        let u1 = document.createElement('a-entity');
        u1.setAttribute("id",'u1');
        u1.object3D.position.copy(marker1);
        let u11 = this.create3Dmodel('u11','union');
        u11.object3D.position.x -=0.5;
        let u12 = this.create3Dmodel('u12','union');
        let u13 = this.create3Dmodel('u13','union');
        u13.object3D.position.x +=0.5;
        u1.appendChild(u11);
        u1.appendChild(u12);
        u1.appendChild(u13);
        this.scene.appendChild(u1);

        let c1old = document.querySelector("#c1");
        if(c1old) c1old.parentNode.removeChild(c1old);

        let c11old = document.querySelector("#c11");
        if(c11old) c11old.parentNode.removeChild(c11old);
        let c12old = document.querySelector("#c12");
        if(c12old) c12old.parentNode.removeChild(c12old);
        let c13old = document.querySelector("#c13");
        if(c13old) c13old.parentNode.removeChild(c13old);
        let c1 = document.createElement('a-entity');
        c1.setAttribute("id",'c1');
        c1.object3D.position.copy(marker2);
        let c11 = this.create3Dmodel('c11','conf');
        c11.object3D.position.x -=1;
        c11.object3D.position.z -=1;
        c11.object3D.rotation.y = Math.PI/2;
        let c12 = this.create3Dmodel('c12','conf');
        c12.object3D.position.x -=1.3;
        c12.object3D.rotation.y = Math.PI/2;
        let c13 = this.create3Dmodel('c13','conf');
        c13.object3D.position.x -=1.6;
        c13.object3D.position.z +=1;
        c13.object3D.rotation.y = Math.PI/2;
        c1.appendChild(c11);
        c1.appendChild(c12);
        c1.appendChild(c13);
        this.scene.appendChild(c1);
    },
    stage7StartPosition:function(){
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');



        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        let c1 = document.querySelector('#c1');
        if(c1) c1.parentNode.removeChild(c1);
        let u1old = document.querySelector('#u1');
        if(u1old) u1old.parentNode.removeChild(u1old);

        let c1old = document.querySelector('#c11');
        if(c1old) c1old.parentNode.removeChild(c1old);
        let c11 = this.create3Dmodel('c11', 'conf');
        this.scene.append(c11);
        c11.object3D.position.copy(marker4);

        let c2old = document.querySelector('#c12');
        if(c2old) c2old.parentNode.removeChild(c2old);
        let c12 = this.create3Dmodel('c12', 'conf','no');
        c12.setAttribute('gltf-model', '#cannon');
        c12.setAttribute("scale",'0.3 0.3 0.3');
        this.scene.append(c12);
        c12.object3D.position.copy(marker5);


        let c3old = document.querySelector('#c13');
        if(c3old) c3old.parentNode.removeChild(c3old);
        let c13 = this.create3Dmodel('c13', 'conf','no');
        c13.setAttribute('gltf-model', '#confRTroop');
        this.scene.append(c13);
        c13.object3D.position.copy(marker6);



        let pos2 = document.querySelector("#pos2");

        let u1 = document.createElement('a-entity');
        u1.setAttribute("id",'u1');
        let u11 = this.create3Dmodel('u11','union');
        u11.object3D.position.x +=1;
        u11.object3D.position.z -=1;
        u11.setAttribute('animation-mixer', {clip: 'Idle'})
        u11.object3D.rotation.y = -Math.PI/2;

        let u12 = this.create3Dmodel('u12','union');
        u12.object3D.position.x +=1;
        u12.object3D.rotation.y = -Math.PI/2;
        u12.setAttribute('animation-mixer', {clip: 'Idle'})
        let u13 = this.create3Dmodel('u13','union');
        u13.object3D.position.x +=1;
        u13.object3D.position.z +=1;
        u13.object3D.rotation.y = -Math.PI/2;
        u13.setAttribute('animation-mixer', {clip: 'Idle'})

        u1.appendChild(u11);
        u1.appendChild(u12);
        u1.appendChild(u13);
        u1.object3D.position.copy(pos2.object3D.position);
        this.scene.appendChild(u1);
    },
    removeMarkerModels: function () {
        let u = document.querySelector('#union')
        let c = document.querySelector('#conf');
        if (u) {
            u.parentNode.removeChild(u)
        }
        if (c) {
            c.parentNode.removeChild(c)
        }
    },
    create3Dmodel: function (id, type,flag) {
        let el = document.createElement('a-entity');
        el.setAttribute('id', id);
        el.setAttribute('animation-mixer', "clip:Idle");
        if (type === 'union') {

                let unionFlag = document.createElement('a-plane');
                unionFlag.setAttribute('src', '#unionFlag');
                unionFlag.setAttribute('height', "0.3");
                unionFlag.setAttribute('width', "0.5");
                unionFlag.setAttribute('position', "0 2 0");
                unionFlag.setAttribute('look-at', "[camera]");
                el.setAttribute('gltf-model', '#unionTroop');
                el.appendChild(unionFlag)



        } else {

                let confederateFlag = document.createElement('a-plane');
                confederateFlag.setAttribute('src', '#confederate');
                confederateFlag.setAttribute('height', "0.3");
                confederateFlag.setAttribute('width', "0.5");
                confederateFlag.setAttribute('position', "0 2 0");
                confederateFlag.setAttribute('look-at', "[camera]");
                el.setAttribute('gltf-model', '#confTroop');
                el.appendChild(confederateFlag)


        }
        return el;
    },
    stage1Handler: function () {
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage1").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message01").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio1").trigger("play");

        let marker2 = document.querySelector('#pos2').object3D.position;
        marker2.x +=0.5;
        this.stage1StartPosition();
        var self = this;
        let u1 = document.querySelector('#u1');


        let u11 = document.querySelector('#u11');
        u11.setAttribute('animation-mixer', {clip: 'Walking'});
        let u12 = document.querySelector('#u12');
        u12.setAttribute('animation-mixer', {clip: 'Walking'});
        let u13 = document.querySelector('#u13');
        u13.setAttribute('animation-mixer', {clip: 'Walking'})

        let curve = document.createElement('a-curve');
        curve.setAttribute('id', 'track1');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', u1.object3D.position);
        curvePoint2.setAttribute('position', marker2);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        this.scene.appendChild(curve);
        u1.setAttribute('alongpath', {curve: '#track1', dur: 3000, rotate: true, delay: 2000});
        u1.addEventListener('movingended', stage1Finish)

        function stage1Finish() {
            let u1old = document.querySelector('#u1');
            let c1old = document.querySelector('#c1');
            if(u1old) u1old.parentNode.removeChild(u1old);
            if(c1old) c1old.parentNode.removeChild(c1old);
            // let marker2 = document.querySelector('#pos2').object3D.position;
            let pos2 = document.querySelector("#pos2");

            let u1 = document.createElement('a-entity');
            u1.setAttribute("id",'u1');
            let u11 = self.create3Dmodel('u11','union');
            u11.object3D.position.x +=1;
            u11.object3D.position.z -=1;
            u11.setAttribute('animation-mixer', {clip: 'Attack'})
            u11.object3D.rotation.y = -Math.PI/2;

            let u12 = self.create3Dmodel('u12','union');
            u12.object3D.position.x +=1;
            u12.object3D.rotation.y = -Math.PI/2;
            u12.setAttribute('animation-mixer', {clip: 'Attack'})
            let u13 = self.create3Dmodel('u13','union');
            u13.object3D.position.x +=1;
            u13.object3D.position.z +=1;
            u13.object3D.rotation.y = -Math.PI/2;
            u13.setAttribute('animation-mixer', {clip: 'Attack'})

            u1.appendChild(u11);
            u1.appendChild(u12);
            u1.appendChild(u13);
            pos2.appendChild(u1);



            let c1 = document.createElement('a-entity');
            c1.setAttribute("id",'c1');
            let c11 = self.create3Dmodel('c11','conf');
            c11.object3D.position.x -=1;
            c11.object3D.position.z -=1;
            c11.setAttribute('animation-mixer', {clip: 'Attack'})
            c11.object3D.rotation.y = Math.PI/2;

            let c12 = self.create3Dmodel('c12','conf');
            c12.object3D.position.x -=1;
            c12.object3D.rotation.y = Math.PI/2;
            c12.setAttribute('animation-mixer', {clip: 'Attack'})
            let c13 = self.create3Dmodel('c13','conf');
            c13.object3D.position.x -=1;
            c13.object3D.position.z +=1;
            c13.object3D.rotation.y = Math.PI/2;
            c13.setAttribute('animation-mixer', {clip: 'Attack'})

            c1.appendChild(c11);
            c1.appendChild(c12);
            c1.appendChild(c13);
            pos2.appendChild(c1);
            $("#sword").trigger("play");

            setTimeout(self.stage2Handler,5000);

        }

    },
    stage2Handler: function () {
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage2").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message02").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio2").trigger("play");
        this.stage2StartPosition();
        let self = this;
        let t1 = document.querySelector('#c11');
        let t2 = document.querySelector('#c12');
        let t3 = document.querySelector('#c13');

        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        // Set animations
        t1.setAttribute('animation-mixer', {clip: 'Running'});
        t2.setAttribute('animation-mixer', {clip: 'Running'});
        t3.setAttribute('animation-mixer', {clip: 'Running'});

        // Create track4,5,6
        let track4 = document.createElement('a-curve');
        track4.setAttribute('id', 'track4');
        let track41 = document.createElement('a-curve-point');
        let track42 = document.createElement('a-curve-point');
        track41.setAttribute('position', t1.object3D.position);
        track42.setAttribute('position', marker4);
        track4.appendChild(track41);
        track4.appendChild(track42);
        this.scene.appendChild(track4);

        let track5 = document.createElement('a-curve');
        track5.setAttribute('id', 'track5');
        let track51 = document.createElement('a-curve-point');
        let track52 = document.createElement('a-curve-point');
        track51.setAttribute('position', t2.object3D.position);
        track52.setAttribute('position', marker5);
        track5.appendChild(track51);
        track5.appendChild(track52);
        this.scene.appendChild(track5);

        let track6 = document.createElement('a-curve');
        track6.setAttribute('id', 'track6');
        let track61 = document.createElement('a-curve-point');
        let track62 = document.createElement('a-curve-point');
        track61.setAttribute('position', t3.object3D.position);
        track62.setAttribute('position', marker6);
        track6.appendChild(track61);
        track6.appendChild(track62);
        this.scene.appendChild(track6);
        t1.setAttribute('alongpath', {curve: '#track4', dur: 3000, rotate: true, delay: 2000});
        t2.setAttribute('alongpath', {curve: '#track5', dur: 3000, rotate: true, delay: 2000});
        t3.setAttribute('alongpath', {curve: '#track6', dur: 3000, rotate: true, delay: 2000});
        t1.addEventListener('movingended', stage2Finish);
        function stage2Finish() {

            let marker4 = document.querySelector('#pos4');
            let marker5 = document.querySelector('#pos5');
            let marker6 = document.querySelector('#pos6');
            let c11old = document.querySelector('#c11');
            if(c11old) c11old.parentNode.removeChild(c11old);
            let c11 = self.create3Dmodel('c11', 'conf');
            marker4.appendChild(c11);

            let c12old = document.querySelector('#c12');
            if(c12old) c12old.parentNode.removeChild(c12old);
            let c12 = self.create3Dmodel('c12', 'conf');
            marker5.appendChild(c12);

            let c13old = document.querySelector('#c13');
            if(c13old) c13old.parentNode.removeChild(c13old);
            let c13 = self.create3Dmodel('c13', 'conf');
            marker6.appendChild(c13);

            setTimeout(self.stage3Handler,4000);
        }
    },
    stage3Handler: function () {
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage3").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message03").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio3").trigger("play");
        this.stage3StartPosition();
        let self = this;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let u1 = document.querySelector('#u1');
        let u11 = document.querySelector('#u11');
        u11.setAttribute('animation-mixer','clip:Walking')
        let u12 = document.querySelector('#u12');
        u12.setAttribute('animation-mixer','clip:Walking')
        let u13 = document.querySelector('#u13');
        u13.setAttribute('animation-mixer','clip:Walking')

        let track7 = document.createElement('a-curve');
        track7.setAttribute('id', 'track7');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', u1.object3D.position);
        curvePoint2.setAttribute('position', marker3);
        track7.appendChild(curvePoint1);
        track7.appendChild(curvePoint2);
        this.scene.appendChild(track7);
        u1.setAttribute('alongpath', {curve: '#track7', dur: 3000, rotate: true, delay: 2000});
        u1.addEventListener('movingended', stage3Finished)
        function stage3Finished() {
            let u1old = document.querySelector('#u1');
            if(u1old) u1old.parentNode.removeChild(u1old);
            let marker3 = document.querySelector('#pos3');
            let marker2 = document.querySelector('#pos2');
            let u1 = document.createElement('a-entity');
            u1.setAttribute("id",'u1');

            let u11 = self.create3Dmodel('u11','union');
            u11.setAttribute("animation-mixer",'clip:Resting');
            u11.object3D.position.x -=0.5;
            let u12 = self.create3Dmodel('u12','union');
            u12.setAttribute("animation-mixer",'clip:Resting');

            let u13 = self.create3Dmodel('u13','union');
            u13.setAttribute("animation-mixer",'clip:Resting');

            u13.object3D.position.x +=0.5;
            u1.appendChild(u11);
            u1.appendChild(u12);
            u1.appendChild(u13);
            marker3.appendChild(u1);


            let fire = document.querySelector('#fire1');
            fire.object3D.position.copy(marker2.object3D.position);
            fire.setAttribute('visible', 'true');
            setTimeout(self.stage4Handler,7000)
        }

    },
    stage4Handler: function () {
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage4").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message04").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio4").trigger("play");
        this.stage4StartPosition();
        let _self = this;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let c11 = document.querySelector('#c11');
        let c12 = document.querySelector('#c12');
        let c13 = document.querySelector('#c13');
        let tt1 = document.querySelector('#track8');
        let tt2 = document.querySelector('#track9');
        let tt3 = document.querySelector('#track10');
        if(tt1) tt1.parentNode.removeChild(tt1);
        if(tt2) tt2.parentNode.removeChild(tt2);
        if(tt3) tt3.parentNode.removeChild(tt3);
        c11.setAttribute('animation-mixer', {clip: 'Walking'});
        c12.setAttribute('animation-mixer', {clip: 'Walking'});
        c13.setAttribute('animation-mixer', {clip: 'Walking'});

        let track8 = document.createElement('a-curve');
        track8.setAttribute('id', 'track8');
        let track81 = document.createElement('a-curve-point');
        let track82 = document.createElement('a-curve-point');
        track81.setAttribute('position', c11.object3D.position);
        track82.setAttribute('position', marker2);
        track8.appendChild(track81);
        track8.appendChild(track82);
        this.scene.appendChild(track8);

        let track9 = document.createElement('a-curve');
        track9.setAttribute('id', 'track9');
        let track91 = document.createElement('a-curve-point');
        let track92 = document.createElement('a-curve-point');
        track91.setAttribute('position', c12.object3D.position);
        track92.setAttribute('position',marker2);
        track9.appendChild(track91);
        track9.appendChild(track92);
        this.scene.appendChild(track9);

        let track10 = document.createElement('a-curve');
        track10.setAttribute('id', 'track10');
        let track101 = document.createElement('a-curve-point');
        let track102 = document.createElement('a-curve-point');
        track101.setAttribute('position', c13.object3D.position);
        track102.setAttribute('position', marker2);
        track10.appendChild(track101);
        track10.appendChild(track102);
        this.scene.appendChild(track10);

        c11.setAttribute('alongpath', {curve: '#track8', dur: 3000, rotate: true, delay: 2000});
        c12.setAttribute('alongpath', {curve: '#track9', dur: 3000, rotate: true, delay: 2000});
        c13.setAttribute('alongpath', {curve: '#track10', dur: 3000, rotate: true, delay: 2000});
        c11.addEventListener('movingended', stage4Finished)
        function stage4Finished() {

            let c11old = document.querySelector("#c11");
            if(c11old) c11old.parentNode.removeChild(c11old);
            let c12old = document.querySelector("#c12");
            if(c12old) c12old.parentNode.removeChild(c12old);
            let c13old = document.querySelector("#c13");
            if(c13old) c13old.parentNode.removeChild(c13old);

            let c1 = document.createElement('a-entity');
            let c11 = _self.create3Dmodel('c11','conf');
            c11.setAttribute('animation-mixer','clip:Attack')

            c11.object3D.position.x -=1;
            c11.object3D.position.z -=1;
            c11.object3D.rotation.y = Math.PI/2;

            let c12 = _self.create3Dmodel('c12','conf');
            c12.setAttribute('animation-mixer','clip:Attack')
            c12.object3D.position.x -=1.3;
            c12.object3D.rotation.y = Math.PI/2;

            let c13 = _self.create3Dmodel('c13','conf');
            c13.setAttribute('gltf-model', '#confRTroop');
            c13.setAttribute('animation-mixer','clip:Firing')
            c13.object3D.position.x -=1.6;
            c13.object3D.position.z +=1;
            c13.object3D.rotation.y = Math.PI/2;
            c1.appendChild(c11);
            c1.appendChild(c12);
            c1.appendChild(c13);

            let pos2 = document.querySelector('#pos2');
            pos2.appendChild(c1);
            let u11 = document.querySelector("#u11");
            u11.setAttribute('animation-mixer','clip:Attack');
            let u12 = document.querySelector("#u12");
            u12.setAttribute('animation-mixer','clip:Attack');

            let u13 = document.querySelector("#u13");
            u13.setAttribute('animation-mixer','clip:Attack');
            $("#gunfight2").trigger("play");
            $("#sword").trigger("play");


            setTimeout(function () {
                $('.audio-play').each(function(){
                    this.pause(); // Stop playing
                    this.currentTime = 0; // Reset time
                });
                let u1 = document.querySelector('#u1');

                let c11 = document.querySelector('#c11');
                c11.setAttribute('animation-mixer','clip:Idle1');
                let marker1 = document.querySelector('#pos1').object3D.position;

                let c12 = document.querySelector('#c12');
                c12.setAttribute('animation-mixer','clip:Idle1');
                let c13 = document.querySelector('#c13');
                c13.setAttribute('animation-mixer','clip:Idle');
                let u11 = document.querySelector('#u11');
                u11.setAttribute('animation-mixer','clip:Running');

                let u12 = document.querySelector('#u12');
                u12.setAttribute('animation-mixer','clip:Running');
                let u13 = document.querySelector('#u13');
                u13.setAttribute('animation-mixer','clip:Running');
                let track11 = document.createElement('a-curve');
                track11.setAttribute('id', 'track11');
                let curvePoint111 = document.createElement('a-curve-point');
                let curvePoint112 = document.createElement('a-curve-point');
                curvePoint111.setAttribute('position', u1.object3D.position);
                curvePoint112.setAttribute('position', marker1);
                track11.appendChild(curvePoint111);
                track11.appendChild(curvePoint112);
                _self.scene.appendChild(track11);
                u1.setAttribute('alongpath', {curve: '#track11', dur: 3000, rotate: true, delay: 2000});
                u1.addEventListener('movingended', stage5Finished)
                function stage5Finished() {
                    let marker1 = document.querySelector('#pos1');

                    //Remove models from markers and append to the scene
                    let u1old = document.querySelector("#u1");
                    if(u1old) u1old.parentNode.removeChild(u1old);
                    // Recreate u1 with three unions soldiers
                    let u1 = document.createElement('a-entity');
                    u1.setAttribute("id",'u1');
                    let u11 = _self.create3Dmodel('u11','union');
                    u11.object3D.position.x -=0.5;
                    let u12 = _self.create3Dmodel('u12','union');
                    let u13 = _self.create3Dmodel('u13','union');
                    u13.object3D.position.x +=0.5;
                    u1.appendChild(u11);
                    u1.appendChild(u12);
                    u1.appendChild(u13);
                    marker1.appendChild(u1);
                    setTimeout(_self.stage5Handler,5000);
                }

            },5000);




        }

    },
    stage5Handler:function(){
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage5").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message05").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio5").trigger("play");
        let marker2 = document.querySelector('#pos2').object3D.position;
        marker2.x +=0.5;
        this.stage5StartPosition();
        var self = this;
        let u1 = document.querySelector('#u1');


        let u11 = document.querySelector('#u11');
        u11.setAttribute('animation-mixer', {clip: 'Walking'});
        let u12 = document.querySelector('#u12');
        u12.setAttribute('animation-mixer', {clip: 'Walking'});
        let u13 = document.querySelector('#u13');
        u13.setAttribute('animation-mixer', {clip: 'Walking'})

        let curve = document.createElement('a-curve');
        curve.setAttribute('id', 'track55');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', u1.object3D.position);
        curvePoint2.setAttribute('position', marker2);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        this.scene.appendChild(curve);
        u1.setAttribute('alongpath', {curve: '#track55', dur: 3000, rotate: true, delay: 2000});
        u1.addEventListener('movingended', stage5Finish)

        function stage5Finish() {
            let u1old = document.querySelector('#u1');
            let c1old = document.querySelector('#c1');
            if(u1old) u1old.parentNode.removeChild(u1old);
            if(c1old) c1old.parentNode.removeChild(c1old);
            // let marker2 = document.querySelector('#pos2').object3D.position;
            let pos2 = document.querySelector("#pos2");

            let u1 = document.createElement('a-entity');
            u1.setAttribute("id",'u1');
            let u11 = self.create3Dmodel('u11','union');
            u11.object3D.position.x +=1;
            u11.object3D.position.z -=1;
            u11.setAttribute('animation-mixer', {clip: 'Attack'})
            u11.object3D.rotation.y = -Math.PI/2;

            let u12 = self.create3Dmodel('u12','union');
            u12.object3D.position.x +=1;
            u12.object3D.rotation.y = -Math.PI/2;
            u12.setAttribute('animation-mixer', {clip: 'Attack'})
            let u13 = self.create3Dmodel('u13','union');
            u13.object3D.position.x +=1;
            u13.object3D.position.z +=1;
            u13.object3D.rotation.y = -Math.PI/2;
            u13.setAttribute('animation-mixer', {clip: 'Attack'})

            u1.appendChild(u11);
            u1.appendChild(u12);
            u1.appendChild(u13);
            pos2.appendChild(u1);

            let c1 = document.createElement('a-entity');
            c1.setAttribute("id",'c1');
            let c11 = self.create3Dmodel('c11','conf');
            c11.object3D.position.x -=1;
            c11.object3D.position.z -=1;
            c11.setAttribute('animation-mixer', {clip: 'Attack'})
            c11.object3D.rotation.y = Math.PI/2;

            let c12 = self.create3Dmodel('c12','conf');
            c12.object3D.position.x -=1;
            c12.object3D.rotation.y = Math.PI/2;
            c12.setAttribute('animation-mixer', {clip: 'Attack'})
            let c13 = self.create3Dmodel('c13','conf');
            c13.object3D.position.x -=1;
            c13.object3D.position.z +=1;
            c13.object3D.rotation.y = Math.PI/2;
            c13.setAttribute('animation-mixer', {clip: 'Attack'})

            c1.appendChild(c11);
            c1.appendChild(c12);
            c1.appendChild(c13);
            pos2.appendChild(c1);

            setTimeout(function () {
                self.stage2StartPosition();
                setTimeout(function () {
                    let t1 = document.querySelector('#c11');
                    let t2 = document.querySelector('#c12');
                    let t3 = document.querySelector('#c13');

                    let marker4 = document.querySelector('#pos4').object3D.position;
                    let marker5 = document.querySelector('#pos5').object3D.position;
                    let marker6 = document.querySelector('#pos6').object3D.position;
                    // Set animations
                    t1.setAttribute('animation-mixer', {clip: 'Running'});
                    t2.setAttribute('animation-mixer', {clip: 'Running'});
                    t3.setAttribute('animation-mixer', {clip: 'Running'});

                    // Create track4,5,6
                    let track4 = document.createElement('a-curve');
                    track4.setAttribute('id', 'track4');
                    let track41 = document.createElement('a-curve-point');
                    let track42 = document.createElement('a-curve-point');
                    track41.setAttribute('position', t1.object3D.position);
                    track42.setAttribute('position', marker4);
                    track4.appendChild(track41);
                    track4.appendChild(track42);
                    self.scene.appendChild(track4);

                    let track5 = document.createElement('a-curve');
                    track5.setAttribute('id', 'track5');
                    let track51 = document.createElement('a-curve-point');
                    let track52 = document.createElement('a-curve-point');
                    track51.setAttribute('position', t2.object3D.position);
                    track52.setAttribute('position', marker5);
                    track5.appendChild(track51);
                    track5.appendChild(track52);
                    self.scene.appendChild(track5);

                    let track6 = document.createElement('a-curve');
                    track6.setAttribute('id', 'track6');
                    let track61 = document.createElement('a-curve-point');
                    let track62 = document.createElement('a-curve-point');
                    track61.setAttribute('position', t3.object3D.position);
                    track62.setAttribute('position', marker6);
                    track6.appendChild(track61);
                    track6.appendChild(track62);
                    self.scene.appendChild(track6);
                    t1.setAttribute('alongpath', {curve: '#track4', dur: 3000, rotate: true, delay: 2000});
                    t2.setAttribute('alongpath', {curve: '#track5', dur: 3000, rotate: true, delay: 2000});
                    t3.setAttribute('alongpath', {curve: '#track6', dur: 3000, rotate: true, delay: 2000});
                    t1.addEventListener('movingended', stage51Finish);
                    function stage51Finish() {

                        let marker4 = document.querySelector('#pos4');
                        let marker5 = document.querySelector('#pos5');
                        let marker6 = document.querySelector('#pos6');
                        let c11old = document.querySelector('#c11');
                        if(c11old) c11old.parentNode.removeChild(c11old);
                        let c11 = self.create3Dmodel('c11', 'conf');
                        marker4.appendChild(c11);

                        let c12old = document.querySelector('#c12');
                        if(c12old) c12old.parentNode.removeChild(c12old);
                        let c12 = self.create3Dmodel('c12', 'conf');
                        marker5.appendChild(c12);

                        let c13old = document.querySelector('#c13');
                        if(c13old) c13old.parentNode.removeChild(c13old);
                        let c13 = self.create3Dmodel('c13', 'conf');
                        marker6.appendChild(c13);

                         setTimeout(function () {
                             self.stage6Handler();
                         },3000);
                    }
                },3000)

            },5000)

    }
        },
    stage6Handler:function(){
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage6").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message06").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio6").trigger("play");
        this.stage3StartPosition();
        let self = this;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let u1 = document.querySelector('#u1');
        let u11 = document.querySelector('#u11');
        u11.setAttribute('animation-mixer','clip:Walking')
        let u12 = document.querySelector('#u12');
        u12.setAttribute('animation-mixer','clip:Walking')
        let u13 = document.querySelector('#u13');
        u13.setAttribute('animation-mixer','clip:Walking')

        let track7 = document.createElement('a-curve');
        track7.setAttribute('id', 'track66');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', u1.object3D.position);
        curvePoint2.setAttribute('position', marker3);
        track7.appendChild(curvePoint1);
        track7.appendChild(curvePoint2);
        this.scene.appendChild(track7);
        u1.setAttribute('alongpath', {curve: '#track66', dur: 3000, rotate: true, delay: 2000});
        u1.addEventListener('movingended', stage66Finished)
        function stage66Finished() {
            let u1old = document.querySelector('#u1');
            if(u1old) u1old.parentNode.removeChild(u1old);
            let marker3 = document.querySelector('#pos3');
            let marker2 = document.querySelector('#pos2');
            let u1 = document.createElement('a-entity');
            u1.setAttribute("id",'u1');

            let u11 = self.create3Dmodel('u11','union');
            u11.setAttribute("animation-mixer",'clip:Resting');
            u11.object3D.position.x -=0.5;
            let u12 = self.create3Dmodel('u12','union');
            u12.setAttribute("animation-mixer",'clip:Resting');

            let u13 = self.create3Dmodel('u13','union');
            u13.setAttribute("animation-mixer",'clip:Resting');

            u13.object3D.position.x +=0.5;
            u1.appendChild(u11);
            u1.appendChild(u12);
            u1.appendChild(u13);
            marker3.appendChild(u1);
            setTimeout(self.stage7Handler,4000)

        }
    },
    stage7Handler:function(){
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage7").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message07").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio7").trigger("play");
        this.stage7StartPosition();
        let _self = this;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let c11 = document.querySelector('#c11');
        let c12 = document.querySelector('#c12');
        let c13 = document.querySelector('#c13');
        let tt1 = document.querySelector('#track8');
        let tt2 = document.querySelector('#track9');
        let tt3 = document.querySelector('#track10');
        if(tt1) tt1.parentNode.removeChild(tt1);
        if(tt2) tt2.parentNode.removeChild(tt2);
        if(tt3) tt3.parentNode.removeChild(tt3);
        c11.setAttribute('animation-mixer', {clip: 'Walking'});
        c12.setAttribute('animation-mixer', {clip: 'Walking'});
        c13.setAttribute('animation-mixer', {clip: 'Walking'});

        let track8 = document.createElement('a-curve');
        track8.setAttribute('id', 'track71');
        let track81 = document.createElement('a-curve-point');
        let track82 = document.createElement('a-curve-point');
        track81.setAttribute('position', c11.object3D.position);
        track82.setAttribute('position', marker2);
        track8.appendChild(track81);
        track8.appendChild(track82);
        this.scene.appendChild(track8);

        let track9 = document.createElement('a-curve');
        track9.setAttribute('id', 'track72');
        let track91 = document.createElement('a-curve-point');
        let track92 = document.createElement('a-curve-point');
        track91.setAttribute('position', c12.object3D.position);
        track92.setAttribute('position',marker2);
        track9.appendChild(track91);
        track9.appendChild(track92);
        this.scene.appendChild(track9);

        let track10 = document.createElement('a-curve');
        track10.setAttribute('id', 'track73');
        let track101 = document.createElement('a-curve-point');
        let track102 = document.createElement('a-curve-point');
        track101.setAttribute('position', c13.object3D.position);
        track102.setAttribute('position', marker2);
        track10.appendChild(track101);
        track10.appendChild(track102);
        this.scene.appendChild(track10);

        c11.setAttribute('alongpath', {curve: '#track71', dur: 3000, rotate: true, delay: 2000});
        c12.setAttribute('alongpath', {curve: '#track72', dur: 3000, rotate: true, delay: 2000});
        c13.setAttribute('alongpath', {curve: '#track73', dur: 3000, rotate: true, delay: 2000});
        c11.addEventListener('movingended', stage77Finished)
        function stage77Finished() {
            setTimeout(()=> {
                let c11old = document.querySelector("#c11");
                if(c11old) c11old.parentNode.removeChild(c11old);
                let c12old = document.querySelector("#c12");
                if(c12old) c12old.parentNode.removeChild(c12old);
                let c13old = document.querySelector("#c13");
                if(c13old) c13old.parentNode.removeChild(c13old);

                let c1 = document.createElement('a-entity');
                let c11 = _self.create3Dmodel('c11','conf');
                c11.setAttribute('animation-mixer','clip:Attack')

                c11.object3D.position.x -=1;
                c11.object3D.position.z -=1;
                c11.object3D.rotation.y = Math.PI/2;

                let c12 = _self.create3Dmodel('c12','conf','no');
                c12.setAttribute('gltf-model', '#cannon');
                c12.setAttribute("scale",'0.3 0.3 0.3');

                c12.object3D.position.x -=1.3;
                c12.object3D.rotation.y = Math.PI/2;

                let c13 = _self.create3Dmodel('c13','conf','no');
                c13.setAttribute('gltf-model', '#confRTroop');
                c13.setAttribute('animation-mixer','clip:Firing');

                c13.object3D.position.x -=1.6;
                c13.object3D.position.z +=1;
                c13.object3D.rotation.y = Math.PI/2;
                c1.appendChild(c11);
                c1.appendChild(c12);
                c1.appendChild(c13);
                $("#cannonFight").trigger("play");
                $("#sword").trigger("play");
                $("#gunfight2").trigger("play");
                let pos2 = document.querySelector('#pos2');
                pos2.appendChild(c1);
                let u11 = document.querySelector("#u11");
                u11.setAttribute('animation-mixer','clip:Attack');
                let u12 = document.querySelector("#u12");
                u12.setAttribute('animation-mixer','clip:Attack');

                let u13 = document.querySelector("#u13");
                u13.setAttribute('animation-mixer','clip:Attack');


                setTimeout(function () {
                    _self.stage8Handler();

                },7000);
            },5000)





        }


    },
    stage8Handler:function(){
        $(".stage").removeClass('btn-danger').addClass('btn-dark');
        $("#stage8").removeClass('btn-dark').addClass('btn-danger');
        $(".message").hide();
        $("#message08").fadeIn(500);
        $('.audio-play').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
        $("#audio8").trigger("play");
        let u1 = document.querySelector('#u1');
        var _self = this;
        let c11 = document.querySelector('#c11');
        c11.setAttribute('animation-mixer','clip:Idle1');
        let marker1 = document.querySelector('#pos1').object3D.position;

        let c12 = document.querySelector('#c12');
        c12.setAttribute('animation-mixer','clip:Idle1');
        let c13 = document.querySelector('#c13');
        c13.setAttribute('animation-mixer','clip:Idle');
        let u11 = document.querySelector('#u11');
        u11.setAttribute('animation-mixer','clip:Running');

        let u12 = document.querySelector('#u12');
        u12.setAttribute('animation-mixer','clip:Running');
        let u13 = document.querySelector('#u13');
        u13.setAttribute('animation-mixer','clip:Running');
        let track11 = document.createElement('a-curve');
        track11.setAttribute('id', 'track11');
        let curvePoint111 = document.createElement('a-curve-point');
        let curvePoint112 = document.createElement('a-curve-point');
        curvePoint111.setAttribute('position', u1.object3D.position);
        curvePoint112.setAttribute('position', marker1);
        track11.appendChild(curvePoint111);
        track11.appendChild(curvePoint112);
        this.scene.appendChild(track11);
        u1.setAttribute('alongpath', {curve: '#track11', dur: 3000, rotate: true, delay: 2000});
        u1.addEventListener('movingended', stage8Finished)
        function stage8Finished() {
            let marker1 = document.querySelector('#pos1');

            //Remove models from markers and append to the scene
            let u1old = document.querySelector("#u1");
            if(u1old) u1old.parentNode.removeChild(u1old);
            // Recreate u1 with three unions soldiers
            let u1 = document.createElement('a-entity');
            u1.setAttribute("id",'u1');
            let u11 = _self.create3Dmodel('u11','union');
            u11.object3D.position.x -=0.5;
            let u12 = _self.create3Dmodel('u12','union');
            let u13 = _self.create3Dmodel('u13','union');
            u13.object3D.position.x +=0.5;
            u1.appendChild(u11);
            u1.appendChild(u12);
            u1.appendChild(u13);
            marker1.appendChild(u1);
        }
    },
    tick: function (time, timeDelta) {
        let pos1 = document.querySelector('#pos1').object3D;
        let pos2 = document.querySelector('#pos2').object3D;
        let pos3 = document.querySelector('#pos3').object3D;
        let pos4 = document.querySelector('#pos4').object3D;
        let pos5 = document.querySelector('#pos5').object3D;
        let pos6 = document.querySelector('#pos6').object3D;
        let flag1 = pos1.visible === true && pos2.visible === true;
        let flag2 = pos2.visible === true && pos4.visible === true&&pos5.visible === true && pos6.visible === true;
        let flag3 = pos2.visible === true;
        let flag4 = pos1.visible === true && pos2.visible === true && pos4.visible === true && pos5.visible === true && pos6.visible === true;
        let flag5 = pos2.visible === true && pos4.visible === true&&pos5.visible === true && pos6.visible === true;
        let flag6 = pos2.visible === true && pos3.visible === true;
        let flag7 = flag2;
        let flag8 = pos3.visible === true && pos1.visible === true;
        $('#stage1').prop('disabled', !flag1);
        $('#stage2').prop('disabled', !flag2);
        $('#stage3').prop('disabled', !flag3);
        $('#stage4').prop('disabled', !flag4);
        $('#stage5').prop('disabled', !flag5);
        $('#stage6').prop('disabled', !flag6);
        $('#stage7').prop('disabled', !flag7);
        $('#stage8').prop('disabled', !flag8);


    }
});