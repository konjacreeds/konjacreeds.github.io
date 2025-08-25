class Timeline {
    constructor() {
        this.queue = [];
    }
    add(options) {
        this.queue.push(new Anime(options));
        return this;
    }
    play() {
        this.queue.forEach((instance) => instance.play());
    }
}

const defaultOptions = {
    targets: null,
    duration: Infinity,
    easing: "linear",
    delay: 0,
    begin: null, // 初始回调
    update: null, // 更新回调
    complete: null, // 结束回调
};

var penner = () => {
    // Based on jQuery UI's implementation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
    const eases = {
        linear: () => (t) => t,
    };
    const functionEasings = {
        Sine: () => (t) => 1 - Math.cos((t * Math.PI) / 2),
        Expo: () => (t) => (t ? Math.pow(2, 10 * t - 10) : 0),
        Circ: () => (t) => 1 - Math.sqrt(1 - t * t),
        Back: () => (t) => t * t * (3 * t - 2),
        Bounce: () => (t) => {
            let pow2, b = 4;
            while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) { }
            return (1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2));
        },
    };
    ["Quad", "Cubic", "Quart", "Quint"].forEach((name, i) => {
        functionEasings[name] = () => (t) => Math.pow(t, i + 2);
    });
    Object.keys(functionEasings).forEach((name) => {
        const easeIn = functionEasings[name];
        eases["easeIn" + name] = easeIn;
        eases["easeOut" + name] = () => (t) => 1 - easeIn()(1 - t);
        eases["easeInOut" + name] = () => (t) => t < 0.5 ? easeIn()(t * 2) / 2 : 1 - easeIn()(t * -2 + 2) / 2;
        eases["easeOutIn" + name] = () => (t) => t < 0.5 ? (1 - easeIn()(1 - t * 2)) / 2 : (easeIn()(t * 2 - 1) + 1) / 2;
    });
    return eases;
};

const pennerFn = penner();
// 目前仅支持translate
const validTransform = ["translateX", "translateY", "translateZ"];
const selectKey = (target, key) => target instanceof HTMLElement
    ? "transform" in target.style && validTransform.includes(key)
        ? "transform"
        : key in target.style
            ? "style"
            : "attribute"
    : "attribute";
var engine = (anime) => {
    // 动画开始时间
    const start = Date.now() + anime.delay;
    // 动画结束时间
    const end = start + anime.duration;
    // target是否有效
    const isValid = !!anime.targets;
    const cloneTargets = [];
    // 初始化cloneTargets
    const initTarget = () => {
        if (!isValid)
            return;
        // 将targets转换为array
        if (!Array.isArray(anime.targets)) {
            anime.targets = [anime.targets];
        }
        for (const target of anime.targets) {
            const cloneTarget = {};
            for (const propKey in anime.dest) {
                const propValue = anime.dest[propKey];
                const keyType = selectKey(target, propKey);
                if (Array.isArray(propValue)) {
                    // [0,100]类型，from-to模式
                    if (propValue.length === 2 && typeof propValue[0] !== "object") {
                        // 强制改变当前初始状态
                        if (keyType === "transform") {
                            target.style.transform = `${propKey}(${typeof propValue[0] === "string"
                                ? propValue[0]
                                : propValue[0] + "px"})`;
                        }
                        else if (keyType === "style") {
                            target.style[propKey] = propValue[0];
                        }
                        else {
                            target[propKey] = propValue[0];
                        }
                        cloneTarget[propKey] = propValue[0];
                        anime.dest[propKey] = propValue[1];
                    }
                    else {
                        // keyframe类型
                        // 支持 [{value: 1, duration: 500, easing: 'linear'},{value: 2, duration: 500, easing: 'linear'}]
                        // value 和 duration 是必须的
                        // 为dest绑定startTimeStamp，便于之后判断keyframe
                        let start = 0;
                        for (let o of propValue) {
                            o.startTimeStamp = start;
                            start += o.duration;
                        }
                        cloneTarget[propKey] = target[propKey];
                    }
                }
                else {
                    if (keyType === "transform") {
                        cloneTarget[propKey] = target.style.transform.match(new RegExp(`${propKey}\\((\\w+)\\)`))[1];
                    }
                    else if (keyType === "style") {
                        cloneTarget[propKey] = target.style[propKey];
                    }
                    else {
                        cloneTarget[propKey] = target[propKey];
                    }
                }
            }
            cloneTargets.push(cloneTarget);
        }
    };
    // 改变target单个key的属性
    const change = (target, origin, elapsed, value, key, final = false) => {
        let keyCode;
        if (typeof value === "string") {
            keyCode = value.endsWith("%") ? "%" : value.endsWith("px") ? "px" : null;
            if (keyCode) {
                value = parseFloat(value);
            }
            else {
                throw new TypeError(`string value must ends with '%' or 'px'`);
            }
        }
        let nextValue = final ? value : (value - origin) * elapsed + origin;
        if (keyCode) {
            nextValue += keyCode;
        }
        const targetKey = selectKey(target, key);
        if (targetKey === "transform")
            target.style.transform = `${key}(${nextValue}${keyCode ? "" : "px"})`;
        else if (targetKey === "style")
            target.style[key] = nextValue;
        else
            target[key] = nextValue;
    };
    // 改变target所有的属性
    const changeAll = (elapsed, current, final = false) => {
        anime.targets.forEach((target, index) => {
            Object.keys(anime.dest).forEach((key) => {
                let origin = parseFloat(cloneTargets[index][key]);
                let dest = anime.dest[key];
                // 对象类型
                if (typeof dest === "object") {
                    if (Array.isArray(dest)) {
                        // keyframe模式
                        // 支持 [{value: 1, duration: 500, easing: 'linear'},{value: 2, duration: 500, easing: 'linear'}]
                        let i = 0;
                        while (i < dest.length &&
                            current - start >= dest[i].startTimeStamp)
                            i++;
                        const { value, duration, easing = anime.easing, startTimeStamp, } = dest[i - 1];
                        origin = i <= 1 ? origin : dest[i - 2].value;
                        const elapsed = pennerFn[easing]()((current - start - startTimeStamp) / duration);
                        if (current <= start + duration + startTimeStamp) {
                            change(target, origin, elapsed, value, key);
                        }
                        else if (final) {
                            change(target, origin, elapsed, value, key, final);
                        }
                    }
                    else {
                        // nest模式
                        // 支持 {value: 1, duration: 500, easing: 'linear'}
                        const { value, duration, easing = anime.easing } = dest;
                        const elapsed = pennerFn[easing]()((current - start) / duration);
                        if (current <= start + duration) {
                            change(target, origin, elapsed, value, key);
                        }
                        else if (final) {
                            change(target, origin, elapsed, value, key, final);
                        }
                    }
                }
                else {
                    // function模式
                    if (typeof dest === "function") {
                        dest = dest(target, index);
                    }
                    change(target, origin, elapsed, dest, key, final);
                }
            });
        });
    };
    // 核心函数，用于控制动画rAF
    const step = () => {
        const current = Date.now();
        if (current > end) {
            // 数据回正
            changeAll(1, current, true);
            if (typeof anime.complete === "function") {
                // 已经结束，调用结束回调
                anime.complete(anime.targets);
            }
            anime.isPlay = false;
        }
        else {
            if (current >= start) {
                const elapsed = pennerFn[anime.easing]()((current - start) / anime.duration);
                if (isValid)
                    changeAll(elapsed, current);
                if (typeof anime.update === "function") {
                    // 调用更新回调
                    anime.update(anime.targets);
                }
            }
            requestAnimationFrame(step);
        }
    };
    initTarget();
    // 调用初始回调
    if (typeof anime.begin === "function") {
        anime.begin(anime.targets);
    }
    step();
};

class Anime {
    constructor(options = defaultOptions) {
        options = { ...defaultOptions, ...options };
        const { targets, duration, easing, delay, begin, update, complete, ...dest } = options;
        this.targets = targets;
        this.duration = duration;
        this.easing = easing;
        this.delay = delay;
        this.begin = begin;
        this.update = update;
        this.complete = complete;
        this.dest = dest ? dest : {};
        this.tl = null;
        this.isPlay = false;
    }
    timeline() {
        if (!this.tl) {
            this.tl = new Timeline();
        }
        return this.tl;
    }
    play() {
        if (!this.isPlay) {
            this.isPlay = true;
            engine(this);
        }
    }
}

const anime = (options) => {
    return new Anime(options);
};
anime.random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { anime as default };
