AFRAME.registerComponent('follow', {
    schema:{
        target:{type:'selector'},
        speed:{type:'number'}
    },
    init:function () {
        this.directionV3 = new THREE.Vector3();
    },
    tick:function (time,timeDelta) {
        let direction = this.directionV3;
        let targetPos = this.data.target.object3D.position;
        let currPos = this.el.object3D.position;
        direction.copy(targetPos).sub(currPos);
        let distance = direction.length();
        if(distance < 0.3){return;}
        let factor = this.data.speed/distance;
        ['x','y','z'].forEach(axis=>{
            direction[axis] *= factor*(timeDelta/1000);
        });
        this.el.setAttribute('position',{
            x:currPos.x+direction.x,
            y:currPos.y+direction.y,
            z:currPos.z+direction.z,

        })

    }
});