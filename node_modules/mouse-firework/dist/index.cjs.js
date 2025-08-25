'use strict';

var anime = require('theme-shokax-anime');

const sample = (raw) => {
    return Array.isArray(raw) ? anime.random(raw[0], raw[1]) : raw;
};
const hasAncestor = (node, name) => {
    name = name.toUpperCase();
    while (node) {
        if (node.nodeName === name)
            return true;
        node = node.parentNode;
    }
    return false;
};
const setEndPos = (p, particle) => {
    const index = particle.move.indexOf("emit");
    if (index >= 0) {
        const { emitRadius = [50, 180] } = particle.moveOptions[index] || {};
        const angle = (anime.random(0, 360) * Math.PI) / 180;
        const radius = [-1, 1][anime.random(0, 1)] * sample(emitRadius);
        p.endPos = {
            x: p.x + radius * Math.cos(angle),
            y: p.y + radius * Math.sin(angle),
        };
    }
};
const setEndRotation = (p, particle) => {
    const index = particle.move.indexOf("rotate");
    if (index >= 0) {
        const { angle = [-180, 180] } = particle.moveOptions[index] || {};
        p.endRotation = sample(angle);
    }
};
const formatAlpha = (alpha) => {
    if (Array.isArray(alpha)) {
        return alpha.map((a) => a * 100);
    }
    return [alpha * 100, alpha * 100];
};

class BaseEntity {
    constructor(ctx, x, y, color, radius, alpha, lineWidth) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.alpha = alpha;
        this.lineWidth = lineWidth;
        this.rotation = 0;
    }
    draw() {
        const { ctx, x, y } = this;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(this.rotation * (Math.PI / 180));
        ctx.globalAlpha = this.alpha;
        let color = this.color;
        if (this.color.startsWith("var(")) {
            const [, key] = this.color.match(/var\((--[^)]+)\)/) || [];
            if (key) {
                color = getComputedStyle(document.documentElement).getPropertyValue(key).trim();
            }
        }
        this.paint();
        if (this.lineWidth) {
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
        else {
            ctx.fillStyle = color;
            ctx.fill();
        }
        ctx.globalAlpha = 1;
        ctx.restore();
    }
}

class Circle extends BaseEntity {
    paint() {
        const { ctx } = this;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
    }
}

class Polygon extends BaseEntity {
    constructor(ctx, x, y, color, radius, alpha, sides, lineWidth) {
        super(ctx, x, y, color, radius, alpha, lineWidth);
        this.sides = sides;
    }
    paint() {
        const { ctx, sides, radius } = this;
        ctx.beginPath();
        ctx.moveTo(radius * Math.cos(0), radius * Math.sin(0));
        for (let i = 1; i <= sides; i++) {
            const angle = (i * 2 * Math.PI) / sides;
            ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
        }
        ctx.closePath();
    }
}

class Star extends BaseEntity {
    constructor(ctx, x, y, color, radius, alpha, spikes, lineWidth) {
        super(ctx, x, y, color, radius, alpha, lineWidth);
        this.spikes = spikes;
    }
    paint() {
        const { ctx, spikes, radius } = this;
        ctx.beginPath();
        ctx.moveTo(0, -radius);
        for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes - Math.PI / 2;
            const length = i % 2 === 0 ? radius : radius * 0.5;
            const px = Math.cos(angle) * length;
            const py = Math.sin(angle) * length;
            ctx.lineTo(px, py);
        }
        ctx.closePath();
    }
}

const ENTITY_MAP = {
    circle: Circle,
    polygon: Polygon,
    star: Star,
};
const entityFactory = (ctx, x, y, particle) => {
    const shapeType = ENTITY_MAP[particle.shape];
    const { shapeOptions, colors, number } = particle;
    let { radius, alpha = 1, lineWidth } = shapeOptions;
    alpha = formatAlpha(alpha);
    return Array.from({ length: sample(number) }, () => {
        const color = colors[anime.random(0, colors.length - 1)];
        const shapeArgs = [ctx, x, y, color, sample(radius), sample(alpha) / 100];
        if (shapeType === Star) {
            shapeArgs.push(sample(shapeOptions.spikes));
        }
        else if (shapeType === Polygon) {
            shapeArgs.push(sample(shapeOptions.sides));
        }
        const shape = new shapeType(...shapeArgs, sample(lineWidth));
        setEndPos(shape, particle);
        setEndRotation(shape, particle);
        return shape;
    });
};

const canvasEl = document.createElement("canvas");
canvasEl.style.cssText =
    "position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";
document.body.appendChild(canvasEl);
const ctx = canvasEl.getContext("2d");
const tap = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    ? "touchstart"
    : "click";
let pointerX = 0;
let pointerY = 0;
const setCanvasSize = () => {
    if (!ctx)
        return;
    const { clientWidth: width, clientHeight: height } = document.documentElement;
    canvasEl.width = width * 2;
    canvasEl.height = height * 2;
    canvasEl.style.width = width + "px";
    canvasEl.style.height = height + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(2, 2);
};
const updateCoords = (e) => {
    var _a, _b;
    pointerX =
        (_a = e.clientX) !== null && _a !== undefined ? _a : (e.touches && e.touches[0].clientX);
    pointerY =
        (_b = e.clientY) !== null && _b !== undefined ? _b : (e.touches && e.touches[0].clientY);
};
const setParticleMovement = (particle) => {
    const { move, moveOptions } = particle;
    let dist = {};
    move.forEach((m, i) => {
        if (m === "emit") {
            const { radius = 0.1, alphaChange = false, alphaEasing = "linear", alphaDuration = [600, 800], alpha = 0, } = moveOptions[i] || {};
            dist = {
                x: (p) => p.endPos.x,
                y: (p) => p.endPos.y,
                radius: sample(radius),
            };
            if (alphaChange) {
                dist.alpha = {
                    value: sample(formatAlpha(alpha)) / 100,
                    easing: alphaEasing,
                    duration: sample(alphaDuration),
                };
            }
        }
        else if (m === "diffuse") {
            const { diffuseRadius = [80, 160], lineWidth = 0, alphaEasing = "linear", alphaDuration = [600, 800], alpha = 0, } = moveOptions[i] || {};
            dist = {
                radius: sample(diffuseRadius),
                lineWidth: sample(lineWidth),
                alpha: {
                    value: sample(formatAlpha(alpha)) / 100,
                    easing: alphaEasing,
                    duration: sample(alphaDuration),
                },
            };
        }
        else if (m === "rotate") {
            dist.rotation = (p) => p.endRotation;
        }
    });
    return dist;
};
const renderParticle = (targets) => {
    for (const target of targets) {
        target.draw();
    }
};
const clearRenderer = anime({
    duration: Infinity,
    update() {
        if (!ctx)
            return;
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    },
});
let currentCallback = null;
let globalOptions = null;
const initFireworks = (options) => {
    globalOptions = options;
    if (currentCallback) {
        document.removeEventListener(tap, currentCallback, false);
    }
    currentCallback = (e) => {
        if (options.excludeElements.some((excludeElement) => hasAncestor(e.target, excludeElement))) {
            return;
        }
        clearRenderer.play();
        updateCoords(e);
        animateParticles(pointerX, pointerY);
    };
    document.addEventListener(tap, currentCallback, false);
    setCanvasSize();
    window.removeEventListener("resize", setCanvasSize, false);
    window.addEventListener("resize", setCanvasSize, false);
};
const animateParticles = (x, y) => {
    if (!globalOptions || !ctx)
        return;
    const { particles } = globalOptions;
    const timeLine = anime().timeline();
    particles.forEach((particle) => {
        const { move, moveOptions } = particle;
        particle.move = Array.isArray(move) ? move : [move];
        particle.moveOptions = moveOptions
            ? Array.isArray(moveOptions)
                ? moveOptions
                : [moveOptions]
            : [];
        timeLine.add({
            targets: entityFactory(ctx, x, y, particle),
            duration: sample(particle.duration),
            easing: particle.easing || "linear",
            update: renderParticle,
            ...setParticleMovement(particle),
        });
    });
    timeLine.play();
};
var index = (options) => {
    if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", () => initFireworks(options), {
            passive: true,
        });
    }
    else {
        initFireworks(options);
    }
};

module.exports = index;
