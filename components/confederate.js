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

        let s1old = document.querySelector('#s1');
        if(s1old) s1old.parentNode.removeChild(s1old);
        let s1 = this.create3Dmodel('s1', 'union');
        this.scene.append(s1);
        s1.object3D.position.copy(marker1);

        let t1old = document.querySelector('#t1');
        if(t1old) t1old.parentNode.removeChild(t1old);
        let t1 = this.create3Dmodel('t1', 'conf');
        this.scene.append(t1);
        t1.object3D.position.copy(marker2);
        t1.object3D.position.x-=0.4;

        let t2old = document.querySelector('#t2');
        if(t2old) t2old.parentNode.removeChild(t2old);
        let t2 = this.create3Dmodel('t2', 'conf');
        this.scene.append(t2);
        t2.object3D.position.copy(marker2);
        t2.object3D.position.x-=0.4;
        t2.object3D.position.y+=0.3;

        let t3old = document.querySelector('#t3');
        if(t3old) t3old.parentNode.removeChild(t3old);
        let t3 = this.create3Dmodel('t3', 'conf');
        this.scene.append(t3);
        t3.object3D.position.copy(marker2);
        t3.object3D.position.x-=0.4;
        t3.object3D.position.y-=0.3;



    },
    stage2StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');


        let marker2 = document.querySelector('#pos2').object3D.position;

        let s1old = document.querySelector('#s1');
        if(s1old) s1old.parentNode.removeChild(s1old);
        let s1 = this.create3Dmodel('s1', 'union');
        this.scene.append(s1);
        s1.object3D.position.copy(marker2);

        let t1old = document.querySelector('#t1');
        if(t1old) t1old.parentNode.removeChild(t1old);
        let t1 = this.create3Dmodel('t1', 'conf');
        this.scene.append(t1);
        t1.object3D.position.copy(marker2);
        t1.object3D.position.x-=0.4;

        let t2old = document.querySelector('#t2');
        if(t2old) t2old.parentNode.removeChild(t2old);
        let t2 = this.create3Dmodel('t2', 'conf');
        this.scene.append(t2);
        t2.object3D.position.copy(marker2);
        t2.object3D.position.x-=0.4;
        t2.object3D.position.y+=0.3;

        let t3old = document.querySelector('#t3');
        if(t3old) t3old.parentNode.removeChild(t3old);
        let t3 = this.create3Dmodel('t3', 'conf');
        this.scene.append(t3);
        t3.object3D.position.copy(marker2);
        t3.object3D.position.x-=0.4;
        t3.object3D.position.y-=0.3;

    },
    stage3StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');


        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        let s1old = document.querySelector('#s1');
        if(s1old) s1old.parentNode.removeChild(s1old);
        let s1 = this.create3Dmodel('s1', 'union');
        this.scene.append(s1);
        s1.object3D.position.copy(marker2);

        let t1old = document.querySelector('#t1');
        if(t1old) t1old.parentNode.removeChild(t1old);
        let t1 = this.create3Dmodel('t1', 'conf');
        this.scene.append(t1);
        t1.object3D.position.copy(marker4);

        let t2old = document.querySelector('#t2');
        if(t2old) t2old.parentNode.removeChild(t2old);
        let t2 = this.create3Dmodel('t2', 'conf');
        this.scene.append(t2);
        t2.object3D.position.copy(marker5);


        let t3old = document.querySelector('#t3');
        if(t3old) t3old.parentNode.removeChild(t3old);
        let t3 = this.create3Dmodel('t3', 'conf');
        this.scene.append(t3);
        t3.object3D.position.copy(marker6);

    },
    stage4StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');



        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        let s1old = document.querySelector('#s1');
        if(s1old) s1old.parentNode.removeChild(s1old);
        let s1 = this.create3Dmodel('s1', 'union');
        this.scene.append(s1);
        s1.object3D.position.copy(marker3);

        let t1old = document.querySelector('#t1');
        if(t1old) t1old.parentNode.removeChild(t1old);
        let t1 = this.create3Dmodel('t1', 'conf');
        this.scene.append(t1);
        t1.object3D.position.copy(marker4);

        let t2old = document.querySelector('#t2');
        if(t2old) t2old.parentNode.removeChild(t2old);
        let t2 = this.create3Dmodel('t2', 'conf');
        t2.setAttribute('gltf-model', '#confRTroop');
        this.scene.append(t2);
        t2.object3D.position.copy(marker5);


        let t3old = document.querySelector('#t3');
        if(t3old) t3old.parentNode.removeChild(t3old);
        let t3 = this.create3Dmodel('t3', 'conf');
        this.scene.append(t3);
        t3.object3D.position.copy(marker6);
    },
    stage5StartPosition:function(){
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        fire.object3D.position.x = marker2.x;
        fire.object3D.position.y = marker2.y;
        fire.object3D.position.z = marker2.z;


        let s1old = document.querySelector('#s1');
        if(s1old) s1old.parentNode.removeChild(s1old);
        let s1 = this.create3Dmodel('s1', 'union');
        this.scene.append(s1);
        s1.object3D.position.copy(marker3);

        let t1old = document.querySelector('#t1');
        if(t1old) t1old.parentNode.removeChild(t1old);
        let t1 = this.create3Dmodel('t1', 'conf');
        this.scene.append(t1);
        t1.object3D.position.copy(marker2);
        t1.object3D.position.x-=0.4;

        let t2old = document.querySelector('#t2');
        if(t2old) t2old.parentNode.removeChild(t2old);
        let t2 = this.create3Dmodel('t2', 'conf');
        this.scene.append(t2);
        t2.object3D.position.copy(marker2);
        t2.object3D.position.x-=0.4;
        t2.object3D.position.y+=0.3;

        let t3old = document.querySelector('#t3');
        if(t3old) t3old.parentNode.removeChild(t3old);
        let t3 = this.create3Dmodel('t3', 'conf');
        this.scene.append(t3);
        t3.object3D.position.copy(marker2);
        t3.object3D.position.x-=0.4;
        t3.object3D.position.y-=0.3;
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
    create3Dmodel: function (id, type) {
        let el = document.createElement('a-entity');
        el.setAttribute('id', id);
        el.setAttribute('animation-mixer', "clip:Idle");
        if (type === 'union') {
            let unionFlag = document.createElement('a-plane');
            unionFlag.setAttribute('src', '#unionFlag');
            unionFlag.setAttribute('height', "0.8");
            unionFlag.setAttribute('width', "1.2");
            unionFlag.setAttribute('position', "0 2 0");
            unionFlag.setAttribute('look-at', "[camera]");
            el.setAttribute('gltf-model', '#unionTroop');
            el.appendChild(unionFlag)

        } else {
            let confederateFlag = document.createElement('a-plane');
            confederateFlag.setAttribute('src', '#confederate');
            confederateFlag.setAttribute('height', "0.8");
            confederateFlag.setAttribute('width', "1.2");
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

        this.stage1StartPosition();
        var self = this;
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'Walking'})
        let curve = document.createElement('a-curve');
        curve.setAttribute('id', 'track1');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', s1.object3D.position);
        curvePoint2.setAttribute('position', marker2);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        this.scene.appendChild(curve);
        s1.setAttribute('alongpath', {curve: '#track1', dur: 3000, rotate: true, delay: 2000});
        s1.addEventListener('movingended', stage1Finish)

        function stage1Finish() {
            let s1old = document.querySelector('#s1');
            if(s1old) s1old.parentNode.removeChild(s1old);
            let s1 = self.create3Dmodel('s1', 'union');
            let marker2 = document.querySelector('#pos2')
            marker2.appendChild(s1);
            setTimeout(self.stage2Handler,3000);
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
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');

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
            let t1old = document.querySelector('#t1');
            if(t1old) t1old.parentNode.removeChild(t1old);
            let t1 = self.create3Dmodel('t1', 'conf');
            marker4.appendChild(t1);


            let t2old = document.querySelector('#t2');
            if(t2old) t2old.parentNode.removeChild(t2old);
            let t2 = self.create3Dmodel('t2', 'conf');
            marker5.appendChild(t2);


            let t3old = document.querySelector('#t3');
            if(t3old) t3old.parentNode.removeChild(t3old);
            let t3 = self.create3Dmodel('t3', 'conf');
            marker6.appendChild(t3);


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
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'Walking'})
        let track7 = document.createElement('a-curve');
        track7.setAttribute('id', 'track7');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', s1.object3D.position);
        curvePoint2.setAttribute('position', marker3);
        track7.appendChild(curvePoint1);
        track7.appendChild(curvePoint2);
        this.scene.appendChild(track7);
        s1.setAttribute('alongpath', {curve: '#track7', dur: 3000, rotate: true, delay: 2000});
        s1.addEventListener('movingended', stage3Finished)
        function stage3Finished() {
            let s1old = document.querySelector('#s1');
            if(s1old) s1old.parentNode.removeChild(s1old);
            let s1 = self.create3Dmodel('s1', 'union');
            let marker2 = document.querySelector('#pos2');
            let marker3 = document.querySelector('#pos3');
            marker3.appendChild(s1);
            let fire = document.querySelector('#fire1');
            fire.object3D.position.copy(marker2.object3D.position);
            fire.setAttribute('visible', 'true');

            setTimeout(self.stage4Handler,7000);

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
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');
        let tt1 = document.querySelector('#track8');
        let tt2 = document.querySelector('#track9');
        let tt3 = document.querySelector('#track10');
        if(tt1) tt1.parentNode.removeChild(tt1);
        if(tt2) tt2.parentNode.removeChild(tt2);
        if(tt3) tt3.parentNode.removeChild(tt3);
        t1.setAttribute('animation-mixer', {clip: 'Walking'});
        t2.setAttribute('animation-mixer', {clip: 'Walking'});
        t3.setAttribute('animation-mixer', {clip: 'Walking'});

        let track8 = document.createElement('a-curve');
        track8.setAttribute('id', 'track8');
        let track81 = document.createElement('a-curve-point');
        let track82 = document.createElement('a-curve-point');
        track81.setAttribute('position', t1.object3D.position);
        track82.setAttribute('position', marker2);
        track8.appendChild(track81);
        track8.appendChild(track82);
        this.scene.appendChild(track8);

        let track9 = document.createElement('a-curve');
        track9.setAttribute('id', 'track9');
        let track91 = document.createElement('a-curve-point');
        let track92 = document.createElement('a-curve-point');
        track91.setAttribute('position', t2.object3D.position);
        track92.setAttribute('position',marker2);
        track9.appendChild(track91);
        track9.appendChild(track92);
        this.scene.appendChild(track9);

        let track10 = document.createElement('a-curve');
        track10.setAttribute('id', 'track10');
        let track101 = document.createElement('a-curve-point');
        let track102 = document.createElement('a-curve-point');
        track101.setAttribute('position', t3.object3D.position);
        track102.setAttribute('position', marker2);
        track10.appendChild(track101);
        track10.appendChild(track102);
        this.scene.appendChild(track10);

        t1.setAttribute('alongpath', {curve: '#track8', dur: 3000, rotate: true, delay: 2000});
        t2.setAttribute('alongpath', {curve: '#track9', dur: 3000, rotate: true, delay: 2000});
        t3.setAttribute('alongpath', {curve: '#track10', dur: 3000, rotate: true, delay: 2000});
        t1.addEventListener('movingended', stage4Finished)
        function stage4Finished() {
            let marker2 = document.querySelector('#pos2');

            let t1old = document.querySelector('#t1');
            if(t1old) t1old.parentNode.removeChild(t1old);
            let t1 = _self.create3Dmodel('t1', 'conf');

            marker2.appendChild(t1);


            let t2old = document.querySelector('#t2');
            if(t2old) t2old.parentNode.removeChild(t2old);
            let t2 = _self.create3Dmodel('t2', 'conf');
            t2.object3D.position.y -=0.5;
            marker2.appendChild(t2);


            let t3old = document.querySelector('#t3');
            if(t3old) t3old.parentNode.removeChild(t3old);
            let t3 = _self.create3Dmodel('t3', 'conf');
            t3.object3D.position.y +=0.5;
            marker2.appendChild(t3);

            _self.stage5StartPosition();
            let marker1 = document.querySelector('#pos1').object3D.position;
            let s1 = document.querySelector('#s1');
            s1.setAttribute('animation-mixer', {clip: 'Running'})
            let track11 = document.createElement('a-curve');
            track11.setAttribute('id', 'track11');
            let curvePoint111 = document.createElement('a-curve-point');
            let curvePoint112 = document.createElement('a-curve-point');
            curvePoint111.setAttribute('position', s1.object3D.position);
            curvePoint112.setAttribute('position', marker1);
            track11.appendChild(curvePoint111);
            track11.appendChild(curvePoint112);
            _self.scene.appendChild(track11);
            s1.setAttribute('alongpath', {curve: '#track11', dur: 3000, rotate: true, delay: 2000});
            s1.addEventListener('movingended', stage5Finished)
            function stage5Finished() {
                let s1old = document.querySelector('#s1');
                if(s1old) s1old.parentNode.removeChild(s1old);
                let s1 = _self.create3Dmodel('s1', 'union');
                let marker1 = document.querySelector('#pos1');
                marker1.appendChild(s1);
                setTimeout(_self.stage5Handler,5000);
            }


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

        this.stage1StartPosition();
        let _self = this;
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'Walking'})
        let curve = document.createElement('a-curve');
        curve.setAttribute('id', 'track1');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', s1.object3D.position);
        curvePoint2.setAttribute('position', marker2);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        _self.scene.appendChild(curve);
        s1.setAttribute('alongpath', {curve: '#track1', dur: 3000, rotate: true, delay: 2000});
        s1.addEventListener('movingended', stage1Finish)

        function stage1Finish() {
            let s1old = document.querySelector('#s1');
            if(s1old) s1old.parentNode.removeChild(s1old);
            let s1 = _self.create3Dmodel('s1', 'union');
            let marker2 = document.querySelector('#pos2')
            marker2.appendChild(s1);

            _self.stage2StartPosition();

            let t1 = document.querySelector('#t1');
            let t2 = document.querySelector('#t2');
            let t3 = document.querySelector('#t3');

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
            _self.scene.appendChild(track4);

            let track5 = document.createElement('a-curve');
            track5.setAttribute('id', 'track5');
            let track51 = document.createElement('a-curve-point');
            let track52 = document.createElement('a-curve-point');
            track51.setAttribute('position', t2.object3D.position);
            track52.setAttribute('position', marker5);
            track5.appendChild(track51);
            track5.appendChild(track52);
            _self.scene.appendChild(track5);

            let track6 = document.createElement('a-curve');
            track6.setAttribute('id', 'track6');
            let track61 = document.createElement('a-curve-point');
            let track62 = document.createElement('a-curve-point');
            track61.setAttribute('position', t3.object3D.position);
            track62.setAttribute('position', marker6);
            track6.appendChild(track61);
            track6.appendChild(track62);
            _self.scene.appendChild(track6);
            t1.setAttribute('alongpath', {curve: '#track4', dur: 3000, rotate: true, delay: 2000});
            t2.setAttribute('alongpath', {curve: '#track5', dur: 3000, rotate: true, delay: 2000});
            t3.setAttribute('alongpath', {curve: '#track6', dur: 3000, rotate: true, delay: 2000});
            t1.addEventListener('movingended', stage2Finish);
            function stage2Finish() {

                let marker4 = document.querySelector('#pos4');
                let marker5 = document.querySelector('#pos5');
                let marker6 = document.querySelector('#pos6');
                let t1old = document.querySelector('#t1');
                if(t1old) t1old.parentNode.removeChild(t1old);
                let t1 = _self.create3Dmodel('t1', 'conf');
                marker4.appendChild(t1);


                let t2old = document.querySelector('#t2');
                if(t2old) t2old.parentNode.removeChild(t2old);
                let t2 = _self.create3Dmodel('t2', 'conf');
                marker5.appendChild(t2);


                let t3old = document.querySelector('#t3');
                if(t3old) t3old.parentNode.removeChild(t3old);
                let t3 = _self.create3Dmodel('t3', 'conf');
                marker6.appendChild(t3);


                setTimeout(_self.stage6Handler,4000);
            }

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
        let _self = this;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'Walking'});
        let t7 = document.querySelector('#track7');
        if(t7)t7.parentNode.removeChild(t7);

        let track7 = document.createElement('a-curve');
        track7.setAttribute('id', 'track7');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', s1.object3D.position);
        curvePoint2.setAttribute('position', marker3);
        track7.appendChild(curvePoint1);
        track7.appendChild(curvePoint2);
        _self.scene.appendChild(track7);
        s1.setAttribute('alongpath', {curve: '#track7', dur: 3000, rotate: true, delay: 2000});
        s1.addEventListener('movingended', stage6Finished)
        function stage6Finished() {
            let s1old = document.querySelector('#s1');
            if(s1old) s1old.parentNode.removeChild(s1old);
            let s1 = _self.create3Dmodel('s1', 'union');
            s1.setAttribute("animation-mixer","clip:Rest")
            let marker3 = document.querySelector('#pos3');
            marker3.appendChild(s1);

            setTimeout(_self.stage7Handler,7000);

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
        this.stage4StartPosition();
        let _self = this;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let t1 = document.querySelector('#t1');
        t1.setAttribute('gltf-model', '#cannon');
        t1.setAttribute('scale', '0.5 0.5 0.5');

        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');
        let tt1 = document.querySelector('#track8');
        let tt2 = document.querySelector('#track9');
        let tt3 = document.querySelector('#track10');
        if(tt1) tt1.parentNode.removeChild(tt1);
        if(tt2) tt2.parentNode.removeChild(tt2);
        if(tt3) tt3.parentNode.removeChild(tt3);
        t1.setAttribute('animation-mixer', {clip: 'Walking'});
        t2.setAttribute('animation-mixer', {clip: 'Walking'});
        t3.setAttribute('animation-mixer', {clip: 'Walking'});

        let track8 = document.createElement('a-curve');
        track8.setAttribute('id', 'track8');
        let track81 = document.createElement('a-curve-point');
        let track82 = document.createElement('a-curve-point');
        track81.setAttribute('position', t1.object3D.position);
        track82.setAttribute('position', marker2);
        track8.appendChild(track81);
        track8.appendChild(track82);
        this.scene.appendChild(track8);

        let track9 = document.createElement('a-curve');
        track9.setAttribute('id', 'track9');
        let track91 = document.createElement('a-curve-point');
        let track92 = document.createElement('a-curve-point');
        track91.setAttribute('position', t2.object3D.position);
        track92.setAttribute('position',marker2);
        track9.appendChild(track91);
        track9.appendChild(track92);
        this.scene.appendChild(track9);

        let track10 = document.createElement('a-curve');
        track10.setAttribute('id', 'track10');
        let track101 = document.createElement('a-curve-point');
        let track102 = document.createElement('a-curve-point');
        track101.setAttribute('position', t3.object3D.position);
        track102.setAttribute('position', marker2);
        track10.appendChild(track101);
        track10.appendChild(track102);
        this.scene.appendChild(track10);

        t1.setAttribute('alongpath', {curve: '#track8', dur: 3000, rotate: true, delay: 2000});
        t2.setAttribute('alongpath', {curve: '#track9', dur: 3000, rotate: true, delay: 2000});
        t3.setAttribute('alongpath', {curve: '#track10', dur: 3000, rotate: true, delay: 2000});
        t1.addEventListener('movingended', stage4Finished)
        function stage4Finished() {
            let marker2 = document.querySelector('#pos2');

            let t1old = document.querySelector('#t1');
            if(t1old) t1old.parentNode.removeChild(t1old);
            let t1 = _self.create3Dmodel('t1', 'conf');

            marker2.appendChild(t1);


            let t2old = document.querySelector('#t2');
            if(t2old) t2old.parentNode.removeChild(t2old);
            let t2 = _self.create3Dmodel('t2', 'conf');
            t2.object3D.position.y -=0.5;
            marker2.appendChild(t2);


            let t3old = document.querySelector('#t3');
            if(t3old) t3old.parentNode.removeChild(t3old);
            let t3 = _self.create3Dmodel('t3', 'conf');
            t3.object3D.position.y +=0.5;
            marker2.appendChild(t3);

            setTimeout(_self.stage8Handler,7000);

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
        let _self = this;
        _self.stage5StartPosition();
        let marker1 = document.querySelector('#pos1').object3D.position;
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'Running'})
        let track11 = document.createElement('a-curve');
        track11.setAttribute('id', 'track11');
        let curvePoint111 = document.createElement('a-curve-point');
        let curvePoint112 = document.createElement('a-curve-point');
        curvePoint111.setAttribute('position', s1.object3D.position);
        curvePoint112.setAttribute('position', marker1);
        track11.appendChild(curvePoint111);
        track11.appendChild(curvePoint112);
        _self.scene.appendChild(track11);
        s1.setAttribute('alongpath', {curve: '#track11', dur: 3000, rotate: true, delay: 2000});
        s1.addEventListener('movingended', stage8Finished)
        function stage8Finished() {
            let s1old = document.querySelector('#s1');
            if(s1old) s1old.parentNode.removeChild(s1old);
            let s1 = _self.create3Dmodel('s1', 'union');
            let marker1 = document.querySelector('#pos1');
            marker1.appendChild(s1);
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