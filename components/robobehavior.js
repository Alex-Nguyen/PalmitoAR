AFRAME.registerComponent('behavior', {
    init:function () {
        this.fightTimes = 5;
        let self = this;
       this.el.addEventListener('movingstarted',function () {
           self._walking();
       });
        this.el.addEventListener('movingended',function () {
            self._punch();
        });
    },
    _walking:function(){
        this.el.setAttribute('animation-mixer',{clip:'mixamo.com'})
    },
    _idle:function(){
        this.el.setAttribute('animation-mixer',{clip:'Idle'})

    },
    _punch:function(){
        let time = this.fightTimes;
        let target1 = document.querySelector("#target1");
        let self = this;
        this.el.setAttribute('animation-mixer',{clip:'Punch'});
        target1.setAttribute('animation-mixer',{clip:'Punch'});
        let countdown = setInterval(function () {
            time--;
            if(time <=0){

                target1.setAttribute('animation-mixer',{clip:'mixamo.com'});
                target1.setAttribute('alongpath', {curve: '#track2', dur: 5000, rotate: true});
                target1.addEventListener('movingended',function () {
                    target1.removeAttribute('animation-mixer');
                });
                let target2 = document.querySelector("#target2");
                let target3 = document.querySelector("#target3");

                target2.setAttribute('animation-mixer',{clip:'mixamo.com'});
                target2.setAttribute('alongpath', {curve: '#track3', dur: 5000})

                target2.addEventListener('movingended',function () {
                    target2.removeAttribute('animation-mixer');
                });

                target3.setAttribute('animation-mixer',{clip:'mixamo.com'});
                target3.setAttribute('alongpath', {curve: '#track4', dur: 5000})

                target3.addEventListener('movingended',function () {
                    target3.removeAttribute('animation-mixer');
                });

                // self.el.setAttribute('alongpath', {curve: '#smove2', dur: 5000});
                //                 // self.el.addEventListener('movingended',function () {
                //                 //     self.el.setAttribute('animation-mixer',{clip:''});
                //                 // });
                clearInterval(countdown);
            }
        },1000)

        setTimeout(function () {
            target.setAttribute('animation-mixer',{clip:'Death',loop:'pingpong'})
        },3000)
    },
    tick:function (time,timeDelta) {

    }
});

