//Player
(function() {

    function Puppy(x, y) {
        this.type = C.ass.player;
        this.enabled = true;

        this.home = {x:x,y:y};
        this.x = x;
        this.y = y;
        this.z = 0;
        this.p =0;
        this.dx = 0;
        this.dy = 0; 

        this.jumping = false;
        this.dest = {x:0, y:0};

        this.accel = 180;  

        this.action = C.act.dn;
        this.motion = 0;
        this.death = 0;
        this.endCount = 64;

        this.shadow = Util.Build([assets.tile.sol],1.5,[C.col.sw]);
        this.body= [
            [Fac[C.src.up],Fac[C.src.up+1]],
            [Fac[C.src.dn],Fac[C.src.dn+1]],            
            [Fac[C.src.lt],Fac[C.src.lt+1]],
            [Fac[C.src.rt],Fac[C.src.rt+1]],
            [],[],[]
        ];

        this.anims = [];
        this.reset = function(die){
            //if(die==true){
            //    this.death = die;
            //}
            this.jumping = false;
            this.dx = 0;
            this.dy = 0;
            this.z = 0;
        }        
    };

    Puppy.prototype = {
        
        Logic: function(dt){
            var speed = this.accel * dt;

            if(this.death == 0){
                if(!this.jumping)
                {
                    var inp = {
                                up: (input.isDown('UP') || input.isDown('W') ),
                                down: (input.isDown('DOWN') || input.isDown('S') ),
                                left: (input.isDown('LEFT') || input.isDown('A') ),
                                right: (input.isDown('RIGHT') || input.isDown('D') )
                            };

                
                    AssetUtil.InputLogic(inp, this, speed, 48);
                }
                else
                {
                    if((this.z) > 4){
                        this.motion = 1;
                    }
                    else{
                        this.motion = 0;
                    }

                    var t = AssetUtil.HopLogic(this, 48, 8);
                    if(!this.jumping)// landed
                    {
                        this.motion = 0;
                        //check what landed on
                        if(map.colliders.over.indexOf(t) != -1){
                            if(t > 12 && t < 16){//water
                                this.action = C.act.sp;
                                this.death = C.act.sp;

                                for(var i=0;i<8;i++){                                              
                                    this.anims.push(new AnimObj(0, 0, 60, 
                                        Fac[C.act.cb], Util.RndI(6,8), true));
                                }
                            }
                            else{
                                this.action = C.act.fl;
                                this.death = C.act.fl;
                            }
                        }
                        // var c = gameAsset.scene.Cell(this.x, this.y, 48);
                        // this.x = c.x;
                        // this.y = c.y;                    
                    }
                }
            }

        },
        Update: function(dt){
            this.x += this.dx;
            this.y += this.dy;

            for(var i=0;i<this.anims.length;i++){
                if(this.anims[i].enabled){                    
                    this.anims[i].Update(dt);
                }
            }

        },
        Collider: function(perps){
            if(this.jumping){
                //determine if can jump
                var d = AssetUtil.Collisions(this, perps, this.jumping);

                //if(d && (d.type == C.ass.stump || d.type == C.ass.dood)){
                //    this.reset();
                //}
            } 
        },
        Render: function(os){
            var x = this.x;
            var y = this.y;

            var pt = Util.IsoPoint(x-os.x, y-os.y);
            if(this.death == 0){
                Renderer.PolySprite(pt.x, pt.y, this.shadow);
            }
            Renderer.PolySprite(pt.x, pt.y-this.z, this.body[this.action][this.motion] );

            for(var i=0;i<this.anims.length;i++){
                if(this.anims[i].enabled){   
                    this.anims[i].p.y = pt.y-this.z;   
                    this.anims[i].p.x = pt.x;                   
                    this.anims[i].Render();
                }
            }
        }
    };

    window.Puppy = Puppy;
})();

//Human man
(function() {
    function Man(x, y) {
        this.type = C.ass.man;
        this.enabled = true;

        this.x = x;
        this.y = y;
        this.z = 0;
        this.p =0;
        this.dx = 0;
        this.dy = 0; 

        this.jumping = false;
        this.dest = {x:0, y:0};

        this.accel = 90;  

        this.action = C.act.dn;
        this.motion = 0;

        this.target;

        this.shadow = Util.Build([assets.tile.sol],1.5,[C.col.sw]);
        this.body= [
            [Fac[C.src.mup],Fac[C.src.mup+1],Fac[C.src.mup],Fac[C.src.mup+2]],
            [Fac[C.src.mdn],Fac[C.src.mdn+1],Fac[C.src.mdn],Fac[C.src.mdn+2]],            
            [Fac[C.src.mlt],Fac[C.src.mlt+1],Fac[C.src.mlt],Fac[C.src.mlt+2]],
            [Fac[C.src.mrt],Fac[C.src.mrt+1],Fac[C.src.mrt],Fac[C.src.mrt+2]],
            [],[],[]
        ];
    };

    Man.prototype = {
        Logic: function(dt){
            var speed = this.accel * dt;

            if(!this.jumping)
            {
                var inp = AssetUtil.Dir(this.target, this);

                if( inp.d < (8*32) && inp.d > (4*32) ){

                    AssetUtil.InputLogic(inp, this, speed, 48); 
                }
            }
            else
            {
                // if((this.z) > 4){
                //     this.motion = 1;
                // }
                // else{
                //     this.motion = 0;
                // }

                this.motion = this.p/12|0;

                var t = AssetUtil.HopLogic(this, 48, 6);
                if(!this.jumping)// landed
                {
                    this.motion = 0;
                    //check what landed on
                }
            }

        },
        Collider: function(perps){
        },
        Update: function(dt){
            this.x += this.dx;
            this.y += this.dy;
        },
        Render: function(os){
            var x = this.x;
            var y = this.y;

            var pt = Util.IsoPoint(x-os.x, y-os.y);
            Renderer.PolySprite(pt.x, pt.y, this.shadow);
            Renderer.PolySprite(pt.x, pt.y-this.z, this.body[this.action][this.motion] );
        }
    };

    window.Man = Man;
})();

//an animated auxilary feature such as hat or splash
(function() {
    function AnimObj(x, y, c, b, q) {
        this.type = C.ass.null;
        this.enabled = true;

        this.p = {x:0, y:0};
        this.o = {x:x, y:y};
        this.ct = c;
        this.d = {x: Util.Rnd(64)-32, y: -(Util.Rnd(64)+32)};  
        this.body = b;
        this.die = q;
    };

    AnimObj.prototype = {
        Update: function(dt){
            if(this.ct > 0){
                this.ct--;
                this.o.y += (this.d.y*dt);
                this.o.x += (this.d.x*dt);
                this.d.y+=2.5;
                if(this.ct==0 && this.die)
                {
                    this.enabled = false;
                }
            }
        },
        Render: function(){
            Renderer.PolySprite(this.p.x + this.o.x, this.p.y+this.o.y,  this.body);
        }
    };

    window.AnimObj = AnimObj;
})();

