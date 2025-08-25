"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return pLimit;
    }
});
var _yoctoQueue = /*#__PURE__*/ _interopRequireDefault(require("yocto-queue"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __generator = (void 0) && (void 0).__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
function pLimit(concurrency) {
    validateConcurrency(concurrency);
    var queue = new _yoctoQueue.default();
    var activeCount = 0;
    var resumeNext = function() {
        if (activeCount < concurrency && queue.size > 0) {
            queue.dequeue()();
            // Since `pendingCount` has been decreased by one, increase `activeCount` by one.
            activeCount++;
        }
    };
    var next = function() {
        activeCount--;
        resumeNext();
    };
    var run = function() {
        var _ref = _asyncToGenerator(function(function_, resolve, arguments_) {
            var result, e;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        result = _asyncToGenerator(function() {
                            return __generator(this, function(_state) {
                                return [
                                    2,
                                    function_.apply(void 0, _toConsumableArray(arguments_))
                                ];
                            });
                        })();
                        resolve(result);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            result
                        ];
                    case 2:
                        _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        e = _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 4:
                        next();
                        return [
                            2
                        ];
                }
            });
        });
        return function run(function_, resolve, arguments_) {
            return _ref.apply(this, arguments);
        };
    }();
    var enqueue = function(function_, resolve, arguments_) {
        // Queue `internalResolve` instead of the `run` function
        // to preserve asynchronous context.
        new Promise(function(internalResolve) {
            queue.enqueue(internalResolve);
        }).then(run.bind(undefined, function_, resolve, arguments_));
        _asyncToGenerator(function() {
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // This function needs to wait until the next microtask before comparing
                        // `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
                        // after the `internalResolve` function is dequeued and called. The comparison in the if-statement
                        // needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
                        return [
                            4,
                            Promise.resolve()
                        ];
                    case 1:
                        _state.sent();
                        if (activeCount < concurrency) {
                            resumeNext();
                        }
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var generator = function(function_) {
        for(var _len = arguments.length, arguments_ = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            arguments_[_key - 1] = arguments[_key];
        }
        return new Promise(function(resolve) {
            enqueue(function_, resolve, arguments_);
        });
    };
    Object.defineProperties(generator, {
        activeCount: {
            get: function() {
                return activeCount;
            }
        },
        pendingCount: {
            get: function() {
                return queue.size;
            }
        },
        clearQueue: {
            value: function value() {
                queue.clear();
            }
        },
        concurrency: {
            get: function() {
                return concurrency;
            },
            set: function set(newConcurrency) {
                validateConcurrency(newConcurrency);
                concurrency = newConcurrency;
                queueMicrotask(function() {
                    // eslint-disable-next-line no-unmodified-loop-condition
                    while(activeCount < concurrency && queue.size > 0){
                        resumeNext();
                    }
                });
            }
        }
    });
    return generator;
}
function validateConcurrency(concurrency) {
    if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
        throw new TypeError("Expected `concurrency` to be a number from 1 and up");
    }
}
