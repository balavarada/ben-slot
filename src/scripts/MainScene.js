import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { PuzzleGrid } from "./PuzzleGrid";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container;
        this.createBckground();
        this.createPuzzleGrid();
        Globals.resources.music.sound.play({
            loop:true,
            volume:0.9
        });
    }

    createBckground() {
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
        
        this.frame = new PIXI.Sprite(Globals.resources["frame"].texture);
        
        // available methods
        // this.bg.scale(2, 1); // 200% bigger  takes one / two params
        // this.bg.anchor(0.5, 0); // position on the point of x & y in screen takes one / two params
        this.frame.alpha = 1; //opacity
        this.frame.visible = true; // visibility
        this.frame.tint = 0xffffff; // this is white color - check 0xff0000 for red tint color
        this.frame.x = window.innerWidth / 8;
        this.frame.y = 20 ;
        // this.frame.width = window.innerWidth / 1.2;
        // this.frame.height = window.innerHeight / 1.2 ;
        this.container.addChild(this.frame);   
    }

    createPuzzleGrid() {
        const grid = new PuzzleGrid();
        // this.container.addChild(grid.container);

    }
}