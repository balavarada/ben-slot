import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { PuzzleGrid } from "./PuzzleGrid";
import { Reel } from "./reel";
import { FlightConfig } from "./LoaderConfig";
import pixiSound from "pixi-sound";
export class MainScene {
    constructor() {
        this.container = new PIXI.Container;
        this.createBckground();
        this.createPuzzleGrid();
        // this.createFlightAnimation();
        Globals.resources.music.sound.play({
            loop:true,
            volume:0.9
        });
    }

    createBckground() {

        // set background image
        this.bg = new PIXI.Sprite(Globals.resources["bg"].texture);
        // available methods
        // this.bg.scale(2, 1); // 200% bigger  takes one / two params
        // this.bg.anchor(0.5, 0); // position on the point of x & y in screen takes one / two params
        this.bg.alpha = 1; //opacity
        this.bg.visible = true; // visibility
        this.bg.tint = 0xffffff; // this is white color - check 0xff0000 for red tint color
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
        
        //set reel background image
         // set reel frame image
         this.frame = new PIXI.Sprite(Globals.resources["reel_bg"].texture);
        
         // available methods
         this.frame.scale.set(1.01);
         this.frame.x = window.innerWidth / 2 - this.frame.width / 2;
         this.frame.y = window.innerHeight / 2 - this.frame.height / 2;
         this.container.addChild(this.frame); 

        // set reel frame image
        this.frame = new PIXI.Sprite(Globals.resources["frame"].texture);
        
        // available methods
        this.frame.scale.set(1);
        this.frame.x = window.innerWidth / 2 - this.frame.width / 2;
        this.frame.y = window.innerHeight / 2 - this.frame.height / 2;
        this.container.addChild(this.frame);  
        
        // set reel frame image
        //  let spinbtn = new PIXI.Sprite(Globals.resources["spin_bg"]);
        this.spin_frame = PIXI.Texture.from('/src/sprites/spin_bg.png');
        
        // available methods
        //  this.spin_frame.scale.set(.40);
        let  anim = new PIXI.Sprite(this.spin_frame);
        // anim.anchor = (1);
        // anim.x = (window.innerWidth / 2 + this.frame.width / 2) + 20;
        // anim.y = (window.innerHeight / 2 - 10);

        // anim.frame = {"x":483,"y":692,"w":169,"h":226};
        // anim.trimmed = true;
        // anim.spriteSourceSize = {"x":3,"y":4,"w":169,"h":226};
        // anim.sourceSize = {"w":175,"h":240};
        //  FlightConfig.frames[`rollSequence00${val}.png`].frame;
        //     _frame.rotated = FlightConfig.frames[`rollSequence00${val}.png`].rotated;
        //     _frame.trimmed = FlightConfig.frames[`rollSequence00${val}.png`].trimmed;
        //     _frame.spriteSourceSize = FlightConfig.frames[`rollSequence00${val}.png`].spriteSourceSize;
        //     _frame.sourceSize = FlightConfig.frames[`rollSequence00${val}.png`].sourceSize;

         this.container.addChild(anim); 

    }

    createPuzzleGrid() {
        const grid = new PuzzleGrid();
        // this.hero = new Reel();
        // this.container.addChild(this.hero.sprite);
        // this.container.addChild(grid.container);

    }

    createFlightAnimation() {

        // const s = PIXI.Loader.shared.resources['https://pixijs.io/examples/examples/assets/spritesheet/fighter.json'].spritesheet.textures;
        // let fire = [];
  
        // // Load frames of sprite
        // for (let i = 0; i < 41; i++) {
        //   // Get frame number padded with 4 zeros
        //   j = i.toString();
        //   const val = j < 10 ? `0${j}` : j;

        //   do { j = "0" + j } while (j.length < 4)
  
        //   fire.push(new PIXI.Sprite(s[`rollSequence00${j}.png`]));
        // }
        // fire = new PIXI.AnimatedSprite(fire);
        // fire.loop = true; fire.animationSpeed = 0.5;

        // // create an array of textures from an image path
        // const frames = [];

        // const _frame = Globals.resources['flight'].texture;
        // for (let i = 0; i < 30; i++) {
        //     const val = i < 10 ? `0${i}` : i;

        //     //FlightConfig.frames[`rollSequence00${val}.png`]
            
        //     _frame.frame = FlightConfig.frames[`rollSequence00${val}.png`].frame;
        //     _frame.rotated = FlightConfig.frames[`rollSequence00${val}.png`].rotated;
        //     _frame.trimmed = FlightConfig.frames[`rollSequence00${val}.png`].trimmed;
        //     _frame.spriteSourceSize = FlightConfig.frames[`rollSequence00${val}.png`].spriteSourceSize;
        //     _frame.sourceSize = FlightConfig.frames[`rollSequence00${val}.png`].sourceSize;

        //     // magically works since the spritesheet was loaded with the pixi loader
        //     frames.push(_frame);
        // }

        // // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
        // const anim = new PIXI.AnimatedSprite(frames);

        // /*
        // * An AnimatedSprite inherits all the properties of a PIXI sprite
        // * so you can change its position, its anchor, mask it, etc
        // */

        // anim.x = window.innerWidth / 2;
        // anim.y = window.innerHeight / 2;
        // anim.anchor.set(0.5);
        // anim.animationSpeed = 0.5;
        // anim.play();

        // this.container.addChild(anim);

        // // // Animate the rotation
        // // this.container.ticker.add(() => {
        // //     anim.rotation += 0.01;
        // // });
    }
}