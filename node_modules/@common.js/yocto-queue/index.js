/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Queue;
    }
});
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _classApplyDescriptorUpdate(receiver, descriptor) {
    if (descriptor.set) {
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldInit(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function _classPrivateFieldUpdate(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "update");
    return _classApplyDescriptorUpdate(receiver, descriptor);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
        return function(v1) {
            return step([
                n,
                v1
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
var Node = function Node(value) {
    "use strict";
    _classCallCheck(this, Node);
    _defineProperty(this, "value", void 0);
    _defineProperty(this, "next", void 0);
    this.value = value;
};
var _head = /*#__PURE__*/ new WeakMap(), _tail = /*#__PURE__*/ new WeakMap(), _size = /*#__PURE__*/ new WeakMap();
var _iterator = Symbol.iterator;
var Queue = /*#__PURE__*/ function() {
    "use strict";
    function Queue() {
        _classCallCheck(this, Queue);
        _classPrivateFieldInit(this, _head, {
            writable: true,
            value: void 0
        });
        _classPrivateFieldInit(this, _tail, {
            writable: true,
            value: void 0
        });
        _classPrivateFieldInit(this, _size, {
            writable: true,
            value: void 0
        });
        this.clear();
    }
    _createClass(Queue, [
        {
            key: "enqueue",
            value: function enqueue(value) {
                var node = new Node(value);
                if (_classPrivateFieldGet(this, _head)) {
                    _classPrivateFieldGet(this, _tail).next = node;
                    _classPrivateFieldSet(this, _tail, node);
                } else {
                    _classPrivateFieldSet(this, _head, node);
                    _classPrivateFieldSet(this, _tail, node);
                }
                _classPrivateFieldUpdate(this, _size).value++;
            }
        },
        {
            key: "dequeue",
            value: function dequeue() {
                var current = _classPrivateFieldGet(this, _head);
                if (!current) {
                    return;
                }
                _classPrivateFieldSet(this, _head, _classPrivateFieldGet(this, _head).next);
                _classPrivateFieldUpdate(this, _size).value--;
                return current.value;
            }
        },
        {
            key: "peek",
            value: function peek() {
                if (!_classPrivateFieldGet(this, _head)) {
                    return;
                }
                return _classPrivateFieldGet(this, _head).value;
            // TODO: Node.js 18.
            // return this.#head?.value;
            }
        },
        {
            key: "clear",
            value: function clear() {
                _classPrivateFieldSet(this, _head, undefined);
                _classPrivateFieldSet(this, _tail, undefined);
                _classPrivateFieldSet(this, _size, 0);
            }
        },
        {
            key: "size",
            get: function get() {
                return _classPrivateFieldGet(this, _size);
            }
        },
        {
            key: _iterator,
            value: function value() {
                var current;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            current = _classPrivateFieldGet(this, _head);
                            _state.label = 1;
                        case 1:
                            if (!current) return [
                                3,
                                3
                            ];
                            return [
                                4,
                                current.value
                            ];
                        case 2:
                            _state.sent();
                            current = current.next;
                            return [
                                3,
                                1
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            }
        }
    ]);
    return Queue;
}();
