/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api-gifts-router.ts":
/*!*****************************!*\
  !*** ./api-gifts-router.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var gifts_products_router_1 = __webpack_require__(/*! ./gifts-products/gifts-products-router */ "./gifts-products/gifts-products-router.ts");
var gifts_orders_router_1 = __webpack_require__(/*! ./gifts-orders/gifts-orders-router */ "./gifts-orders/gifts-orders-router.ts");
var gifts_users_router_1 = __webpack_require__(/*! ./gifts-users/gifts-users-router */ "./gifts-users/gifts-users-router.ts");
var gifts_staffs_router_1 = __webpack_require__(/*! ./gifts-staffs/gifts-staffs-router */ "./gifts-staffs/gifts-staffs-router.ts");
var giftsRouter = express_1.Router();
// url: /api/gifts
giftsRouter.use('/products', gifts_products_router_1.default);
giftsRouter.use('/orders', gifts_orders_router_1.default);
giftsRouter.use('/users', gifts_users_router_1.default);
giftsRouter.use('/staffs', gifts_staffs_router_1.default);
exports.default = giftsRouter;


/***/ }),

/***/ "./api-router.ts":
/*!***********************!*\
  !*** ./api-router.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var router_1 = __webpack_require__(/*! ./lta/router */ "./lta/router.ts");
var router_2 = __webpack_require__(/*! ./http-request/router */ "./http-request/router.ts");
var router_3 = __webpack_require__(/*! ./lunchfun-and-dictionary/router */ "./lunchfun-and-dictionary/router.ts");
var api_gifts_router_1 = __webpack_require__(/*! ./api-gifts-router */ "./api-gifts-router.ts");
var email_ops_1 = __webpack_require__(/*! ./email/email.ops */ "./email/email.ops.ts");
var apiRouter = express_1.Router();
// url: /api
apiRouter.use('/dictionary', router_3.dictionaryRouter);
apiRouter.use('/http', router_2.default);
apiRouter.use('/lunchfun', router_3.lunchfunRouter);
apiRouter.use('/lta/bus', router_1.busRouter);
apiRouter.use('/gifts', api_gifts_router_1.default);
// msg from users; forward it via nodemailer.
apiRouter.post('/msg', function (req, res) {
    email_ops_1.default(req.body, res);
});
// error handling
apiRouter.all('/*', function (req, res) {
    return res.status(400).send('Invalid Request');
});
exports.default = apiRouter;


/***/ }),

/***/ "./email/email.ops.ts":
/*!****************************!*\
  !*** ./email/email.ops.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __webpack_require__(/*! nodemailer */ "nodemailer");
var outlook_transporter = nodemailer_1.createTransport({
    service: 'outlook',
    auth: {
        user: 'yuanchao@outlook.sg',
        pass: 'pingmeHC83'
    }
});
var outlook_mailOptions = {
    from: 'yuanchao@outlook.sg',
    to: 'seesea2@gmail.com',
    subject: null,
    html: null
};
function SendEmail(body, res) {
    var emailHtml = '<!DOCTYPE html><head>' +
        '<meta http-equiv="content-type" content="text/html;charset=UTF-8"></head>' +
        ("<body><br><b>Message from User " + body.name) +
        ' :</b><br><br>' +
        ("<p><b>Email: </b> " + body.email) +
        '</p>' +
        ("<p><b>Mobile: </b> " + body.mobile) +
        '</p>' +
        ("<p><b>Message: </b> " + body.message) +
        '</p>' +
        '</body></html>';
    outlook_mailOptions.subject = 'User Inquiry';
    outlook_mailOptions.html = emailHtml;
    outlook_transporter.sendMail(outlook_mailOptions);
    return res.status(200).send({ result: 'ok' });
}
exports.default = SendEmail;


/***/ }),

/***/ "./gifts-orders/gifts-orders-router.ts":
/*!*********************************************!*\
  !*** ./gifts-orders/gifts-orders-router.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var giftsOrdersRouter = express_1.Router();
// order list with order_no, status & staff id to follow-up.
giftsOrdersRouter.get('/allOrders', function (req, res) {
    if (!req.session || !req.session.staff) {
        return res.sendStatus(401);
    }
    return res.status(200).send({ result: 'ok' });
});
// update order status by staff follow-up.
giftsOrdersRouter.put('/updateStatus', function (req, res) {
    if (!req.session || !req.session.staff.id) {
        return res.sendStatus(401);
    }
    if (!req.body.new_status || !req.body.sno || !req.body.order_no) {
        return res.status(400).send('Failed. Pleaes review inputs.');
    }
    var param = {
        1: req.body.order_no,
        2: req.body.sno,
        3: Date.now(),
        4: req.session.staff.id,
        5: req.body.new_status,
        6: req.body.note || null
    };
    return res.status(200).send({ result: 'ok' });
});
// staff to update contact info of the order.
giftsOrdersRouter.put('/updateContact', function (req, res) {
    if (!req.session || !req.session.staff.id) {
        return res.sendStatus(401);
    }
    if (!req.body.order_no) {
        return res.status(400).send('Order_no empty.');
    }
    else if (!req.body.email ||
        !req.body.email.includes('@') ||
        !req.body.email.includes('.') ||
        req.body.email.includes('/') ||
        req.body.email.includes('\\')) {
        return res.status(400).send('Invalid email.');
    }
    else if (!req.body.name) {
        return res.status(400).send('Invalid name.');
    }
    var param = {
        1: req.body.name,
        2: req.body.email,
        3: req.body.mobile || null,
        4: req.body.company || null,
        5: req.body.mobile2 || null,
        6: req.body.addr || null,
        7: req.body.order_no
    };
    return res.status(200).send({ result: 'ok' });
});
// staff to change order details e.g. price, qty, in case users changed mind.
// staff may change status of specific product of the order.
giftsOrdersRouter.put('/updateOrderItem', function (req, res) {
    if (!req.session || !req.session.staff.id) {
        return res.sendStatus(401);
    }
    if (!req.body.order_no) {
        return res.status(400).send('Failed. Invalid Order No.');
    }
    if (!req.body.sno || req.body.sno === '') {
        return res.status(400).send('Failed. Invalid Order Sno.');
    }
    var param = {
        1: req.body.new_sale_price,
        2: req.body.new_qty,
        3: req.body.new_status,
        4: req.body.order_no,
        5: req.body.sno
    };
    return res.status(200).send({ result: 'ok' });
});
exports.default = giftsOrdersRouter;


/***/ }),

/***/ "./gifts-orders/gifts-orders.ops.ts":
/*!******************************************!*\
  !*** ./gifts-orders/gifts-orders.ops.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function NewOrder(customer, cartItems) {
    return __awaiter(this, void 0, void 0, function () {
        var dbOrders, insertRslt, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-orders')];
                case 1:
                    dbOrders = _a.sent();
                    insertRslt = dbOrders.insertOne({
                        created_on: new Date(),
                        shipping: {
                            name: customer.name,
                            mobile: customer.mobile,
                            address: customer.address,
                            message: customer.message
                        },
                        payment: { method: 'visa', transaction_id: '2312213312XXXTD' },
                        cartItems: cartItems
                    });
                    console.log('insertRslt: ', insertRslt);
                    return [2 /*return*/, insertRslt];
                case 2:
                    e_1 = _a.sent();
                    throw 'create new order failed.';
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.NewOrder = NewOrder;


/***/ }),

/***/ "./gifts-products/gifts-products-categories.ops.ts":
/*!*********************************************************!*\
  !*** ./gifts-products/gifts-products-categories.ops.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var globalCategories = [];
var globalSamplesOfCategories = [];
function GetCategories(res) {
    return __awaiter(this, void 0, void 0, function () {
        var categories, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, GetCategoriesByLevel(0)];
                case 1:
                    categories = _a.sent();
                    return [2 /*return*/, res.status(200).send(categories)];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.GetCategories = GetCategories;
function GetSamplesOfCategories(res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (globalSamplesOfCategories.length > 0) {
                        return [2 /*return*/, res.status(200).send(globalSamplesOfCategories)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, GetSamples()];
                case 2:
                    globalSamplesOfCategories = _a.sent();
                    return [2 /*return*/, res.status(200).send(globalSamplesOfCategories)];
                case 3:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetSamplesOfCategories = GetSamplesOfCategories;
function AddCategory(body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!body.name || !body.category) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products-catalog')];
                case 2:
                    dbCollection = _a.sent();
                    return [4 /*yield*/, dbCollection.insertOne({ name: body.name, category: body.category })];
                case 3:
                    _a.sent();
                    globalCategories = [];
                    globalSamplesOfCategories = [];
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AddCategory = AddCategory;
function DeleteCategory(query, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!query._id) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products-catalog')];
                case 2:
                    dbCollection = _a.sent();
                    return [4 /*yield*/, dbCollection.deleteOne({ _id: new mongodb_ops_1.ObjectID(query._id) })];
                case 3:
                    _a.sent();
                    globalCategories = [];
                    globalSamplesOfCategories = [];
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteCategory = DeleteCategory;
// @level:
// 0 - all;  1 - 1st level;  2 - 2nd and above levels
function GetCategoriesByLevel(level) {
    return __awaiter(this, void 0, void 0, function () {
        var e_5, returnCategories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(globalCategories.length <= 0)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, GetCategoriesFromDb()];
                case 2:
                    globalCategories = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    throw e_5;
                case 4:
                    if (level === 0) {
                        return [2 /*return*/, globalCategories];
                    }
                    returnCategories = [];
                    globalCategories.forEach(function (cat) {
                        console.log(cat.category.match(new RegExp('/', 'g')));
                        if (cat.category.match(new RegExp('/', 'g')).length <= level) {
                            returnCategories.push(cat);
                        }
                    });
                    return [2 /*return*/, returnCategories];
            }
        });
    });
}
function GetCategoriesFromDb() {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products-catalog')];
                case 1:
                    dbCollection = _a.sent();
                    return [4 /*yield*/, dbCollection
                            .find()
                            .sort('category', 1)
                            .toArray()];
                case 2:
                    globalCategories = _a.sent();
                    return [2 /*return*/, globalCategories];
                case 3:
                    e_6 = _a.sent();
                    throw { errMsg: 'Get categories from database failed.' };
                case 4: return [2 /*return*/];
            }
        });
    });
}
function GetSamples() {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, docs, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products')];
                case 1:
                    dbCollection = _a.sent();
                    docs = null;
                    return [4 /*yield*/, dbCollection
                            .aggregate([
                            { $sort: { _id: -1 } },
                            {
                                $group: {
                                    _id: { category: '$category' },
                                    products: {
                                        $push: {
                                            _id: '$_id',
                                            category: '$category',
                                            img: '$img'
                                        }
                                    }
                                }
                            },
                            {
                                $project: {
                                    _id: '$_id',
                                    products: {
                                        $slice: [
                                            '$products',
                                            4 // max number of elements returned from the start of the array
                                        ]
                                    }
                                }
                            }
                        ])
                            .toArray()];
                case 2:
                    docs = _a.sent();
                    return [2 /*return*/, docs];
                case 3:
                    e_7 = _a.sent();
                    console.log(e_7);
                    return [2 /*return*/, { errMsg: 'Get products failed.' }];
                case 4: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./gifts-products/gifts-products-inventory.ops.ts":
/*!********************************************************!*\
  !*** ./gifts-products/gifts-products-inventory.ops.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function GetInventory(res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbInventory, inventory, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 1:
                    dbInventory = _a.sent();
                    return [4 /*yield*/, dbInventory.find().toArray()];
                case 2:
                    inventory = _a.sent();
                    return [2 /*return*/, res.status(200).send(inventory)];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetInventory = GetInventory;
// qty by product; Todo: by colour, size, etc.
function AdjustInventory(_id, qty, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbInventory, rslt, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_id || !qty) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 2:
                    dbInventory = _a.sent();
                    return [4 /*yield*/, dbInventory.updateOne({
                            _id: new mongodb_ops_1.ObjectID(_id)
                        }, { $set: { modifiedOn: new Date(), qty: qty } }, { upsert: true })];
                case 3:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send(rslt)];
                case 4:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AdjustInventory = AdjustInventory;
function ReserveInventory(id, cartItems) {
    return __awaiter(this, void 0, void 0, function () {
        var success, failed, dbInventory, i, result, i, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!cartItems || cartItems.length <= 0) {
                        throw 'The cart is empty.';
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    success = [];
                    failed = [];
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 2:
                    dbInventory = _a.sent();
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < cartItems.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, dbInventory.updateOne({
                            _id: new mongodb_ops_1.ObjectID(cartItems[i].product._id),
                            qty: { $gte: cartItems[i].qty }
                        }, {
                            $inc: { qty: -cartItems[i].qty },
                            $push: {
                                reservations: {
                                    qty: cartItems[i].qty,
                                    _id: new mongodb_ops_1.ObjectID(id),
                                    createdOn: new Date()
                                }
                            }
                        })];
                case 4:
                    result = _a.sent();
                    if (result.result.nModified === 0) {
                        failed.push(cartItems[i].product);
                        return [3 /*break*/, 6];
                    }
                    else {
                        success.push(cartItems[i].product);
                    }
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6:
                    if (failed.length > 0) {
                        for (i = 0; i < success.length; i++) {
                            dbInventory.updateOne({
                                _id: success[i]._id,
                                'reservations._id': id
                            }, {
                                $inc: { qty: success[i].qty },
                                $pull: { reservations: { _id: id } }
                            });
                        }
                        throw 'Not enough storage.';
                    }
                    return [2 /*return*/, 'Success.'];
                case 7:
                    e_3 = _a.sent();
                    throw e_3;
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.ReserveInventory = ReserveInventory;
function DeleteInventoryReservation(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var dbInventory, updateRslt, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 1:
                    dbInventory = _a.sent();
                    return [4 /*yield*/, dbInventory.updateOne({
                            'reservations._id': new mongodb_ops_1.ObjectID(_id)
                        }, {
                            $pull: { reservations: { _id: new mongodb_ops_1.ObjectID(_id) } }
                        })];
                case 2:
                    updateRslt = _a.sent();
                    if (updateRslt.result.nModified <= 0) {
                        throw 'delete reservation failed.';
                    }
                    return [2 /*return*/, updateRslt];
                case 3:
                    e_4 = _a.sent();
                    console.log(e_4);
                    throw 'delete reservation failed with exception.';
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteInventoryReservation = DeleteInventoryReservation;


/***/ }),

/***/ "./gifts-products/gifts-products-router.ts":
/*!*************************************************!*\
  !*** ./gifts-products/gifts-products-router.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var gifts_products_categories_ops_1 = __webpack_require__(/*! ./gifts-products-categories.ops */ "./gifts-products/gifts-products-categories.ops.ts");
var gifts_products_ops_1 = __webpack_require__(/*! ./gifts-products.ops */ "./gifts-products/gifts-products.ops.ts");
var gifts_products_inventory_ops_1 = __webpack_require__(/*! ./gifts-products-inventory.ops */ "./gifts-products/gifts-products-inventory.ops.ts");
var giftsProductsRouter = express_1.Router();
giftsProductsRouter.get('/view/:product_no', function (req, res) {
    gifts_products_ops_1.GetProduct(req.params, res);
});
/*
 * inquiry: /api/gifts/products
 */
giftsProductsRouter.get('/categories', function (req, res) {
    gifts_products_categories_ops_1.GetCategories(res);
});
giftsProductsRouter.post('/category', function (req, res) {
    gifts_products_categories_ops_1.AddCategory(req.body, res);
});
giftsProductsRouter.delete('/category', function (req, res) {
    gifts_products_categories_ops_1.DeleteCategory(req.query, res);
});
giftsProductsRouter.get('/samples', function (req, res) {
    gifts_products_categories_ops_1.GetSamplesOfCategories(res);
});
giftsProductsRouter.get('', function (req, res) {
    gifts_products_ops_1.GetProductsByCategory(req, res);
});
giftsProductsRouter.get('/product', function (req, res) {
    gifts_products_ops_1.GetProduct(req.query, res);
});
giftsProductsRouter.post('/product', function (req, res) {
    gifts_products_ops_1.AddProduct(req.body, res);
});
giftsProductsRouter.put('/product', function (req, res) {
    gifts_products_ops_1.UpdateProduct(req.body, res);
});
giftsProductsRouter.delete('/product', function (req, res) {
    gifts_products_ops_1.DeleteProduct(req.query, res);
});
giftsProductsRouter.get('/inventory', function (req, res) {
    gifts_products_inventory_ops_1.GetInventory(res);
});
giftsProductsRouter.put('/inventory', function (req, res) {
    gifts_products_inventory_ops_1.AdjustInventory(req.body._id, req.body.qty, res);
});
exports.default = giftsProductsRouter;


/***/ }),

/***/ "./gifts-products/gifts-products.ops.ts":
/*!**********************************************!*\
  !*** ./gifts-products/gifts-products.ops.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function GetProduct(params, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, product, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!params._id) {
                        return [2 /*return*/, res.status(400).send('Invalid product no.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .collection('gifts-products')
                            .findOne({ _id: new mongodb_ops_1.ObjectID(params._id) })];
                case 3:
                    product = _a.sent();
                    return [2 /*return*/, res.status(200).send(product)];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.GetProduct = GetProduct;
function GetProductsByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, docs, regex, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products')];
                case 1:
                    dbCollection = _a.sent();
                    docs = null;
                    if (!req.query.category) return [3 /*break*/, 3];
                    regex = new RegExp(['^', req.query.category.trim()].join(''), 'i');
                    return [4 /*yield*/, dbCollection.find({ category: regex }).toArray()];
                case 2:
                    docs = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, dbCollection.find().toArray()];
                case 4:
                    docs = _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/, res.status(200).send(docs)];
                case 6:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.GetProductsByCategory = GetProductsByCategory;
function AddProduct(body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!body.name) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.collection('gifts-products').insertOne({
                            name: body.name,
                            img: body.img,
                            price: body.price,
                            category: body.category,
                            color: body.color,
                            packaging: body.packaging,
                            material: body.material,
                            size: body.size,
                            note: body.note,
                            retailer: body.retailer,
                            createdOn: new Date()
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AddProduct = AddProduct;
function UpdateProduct(body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbProducts, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!body._id) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products')];
                case 2:
                    dbProducts = _a.sent();
                    return [4 /*yield*/, dbProducts.updateOne({ _id: new mongodb_ops_1.ObjectID(body._id) }, {
                            $set: {
                                modifiedOn: new Date(),
                                name: body.name,
                                img: body.img,
                                price: body.price,
                                category: body.category,
                                color: body.color,
                                packaging: body.packaging,
                                material: body.material,
                                size: body.size,
                                note: body.note,
                                retailer: body.retailer
                            }
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.UpdateProduct = UpdateProduct;
function DeleteProduct(query, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!query._id) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .collection('gifts-products')
                            .deleteOne({ _id: new mongodb_ops_1.ObjectID(query._id) })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_5)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteProduct = DeleteProduct;


/***/ }),

/***/ "./gifts-staffs/gifts-staffs-router.ts":
/*!*********************************************!*\
  !*** ./gifts-staffs/gifts-staffs-router.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var giftsStaffsRouter = express_1.Router();
giftsStaffsRouter.post('/login', function (req, res) {
    // Login(req, res);
});
giftsStaffsRouter.get('/logout', function (req, res) {
    // Logout(req, res);
});
giftsStaffsRouter.post('/register', function (req, res) {
    // Register(req, res);
});
giftsStaffsRouter.delete('/deleteuser', function (req, res) {
    // DeleteUser(req, res);
});
exports.default = giftsStaffsRouter;


/***/ }),

/***/ "./gifts-users/gifts-carts.ops.ts":
/*!****************************************!*\
  !*** ./gifts-users/gifts-carts.ops.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var string_ops_1 = __webpack_require__(/*! ../string-ops */ "./string-ops.ts");
var gifts_users_ops_1 = __webpack_require__(/*! ./gifts-users.ops */ "./gifts-users/gifts-users.ops.ts");
var gifts_products_inventory_ops_1 = __webpack_require__(/*! ../gifts-products/gifts-products-inventory.ops */ "./gifts-products/gifts-products-inventory.ops.ts");
var gifts_orders_ops_1 = __webpack_require__(/*! ../gifts-orders/gifts-orders.ops */ "./gifts-orders/gifts-orders.ops.ts");
function GetCart(session, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, cart, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(403).send('User not login')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.findOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) })];
                case 3:
                    cart = _a.sent();
                    console.log(cart);
                    return [2 /*return*/, res.status(200).send(cart)];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.GetCart = GetCart;
function AddToCart(session, body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rslt, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(403).send('User not login')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.updateOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) }, { $pull: { products: { productId: new mongodb_ops_1.ObjectID(body.product._id) } } })];
                case 3:
                    rslt = _a.sent();
                    return [4 /*yield*/, db.updateOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) }, {
                            $push: {
                                products: {
                                    productId: new mongodb_ops_1.ObjectID(body.product._id),
                                    quantity: body.qty,
                                    name: body.product.name,
                                    price: body.product.price
                                }
                            }
                        }, { upsert: true })];
                case 4:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 5:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.AddToCart = AddToCart;
function UpdateCartQty(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rslt, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(req.session)) {
                        res.status(403).send('User not login.');
                    }
                    if (!req.body.productId || !req.body.qty) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.collection('gifts-carts').updateOne({
                            _id: req.session.user._id,
                            'products.productId': req.body.productId
                        }, {
                            $set: {
                                'products.$.qty': req.body.qty,
                                modifiedOn: new Date()
                            }
                        })];
                case 3:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.UpdateCartQty = UpdateCartQty;
function DeleteCart(session, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(400).send('User not login.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    db.deleteOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) });
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteCart = DeleteCart;
function DeleteInCart(session, _id, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rslt, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(400).send('User not login.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.updateOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) }, { $pull: { products: { productId: new mongodb_ops_1.ObjectID(_id) } } })];
                case 3:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_5)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteInCart = DeleteInCart;
function CartCheckout(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var bMember, id, cartItems, customer, insertRslt, updateRslt, dbCarts, deleteRslt, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body.cart ||
                        !req.body.cart.customer ||
                        !req.body.cart.customer.name ||
                        !req.body.cart.customer.mobile ||
                        !req.body.cart.customer.address) {
                        return [2 /*return*/, res.status(400).send('Invalid customer information.')];
                    }
                    if (req.body.cart.total <= 0) {
                        return [2 /*return*/, res.status(400).send('No product to checkout.')];
                    }
                    bMember = gifts_users_ops_1.bLogin(req.session);
                    id = '';
                    if (bMember) {
                        id = req.session.user._id;
                    }
                    else {
                        id = string_ops_1.randomString(20);
                    }
                    cartItems = req.body.cart.cartItems;
                    customer = req.body.cart.customer;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 10, , 11]);
                    // reserve inventory, it throw error in case of failure.
                    return [4 /*yield*/, gifts_products_inventory_ops_1.ReserveInventory(id, cartItems)];
                case 2:
                    // reserve inventory, it throw error in case of failure.
                    _a.sent();
                    return [4 /*yield*/, gifts_orders_ops_1.NewOrder(customer, cartItems)];
                case 3:
                    insertRslt = _a.sent();
                    if (!(insertRslt.result.n <= 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, gifts_products_inventory_ops_1.DeleteInventoryReservation(id)];
                case 4:
                    _a.sent();
                    throw 'Create new order failed.';
                case 5: return [4 /*yield*/, gifts_products_inventory_ops_1.DeleteInventoryReservation(id)];
                case 6:
                    updateRslt = _a.sent();
                    console.log(updateRslt);
                    if (!bMember) return [3 /*break*/, 9];
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 7:
                    dbCarts = _a.sent();
                    return [4 /*yield*/, dbCarts.deleteOne({ _id: new mongodb_ops_1.ObjectID(id) })];
                case 8:
                    deleteRslt = _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/, res.status(200).send({ orderId: id })];
                case 10:
                    e_6 = _a.sent();
                    console.error(e_6);
                    return [2 /*return*/, res.status(500).send(e_6)];
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.CartCheckout = CartCheckout;


/***/ }),

/***/ "./gifts-users/gifts-users-router.ts":
/*!*******************************************!*\
  !*** ./gifts-users/gifts-users-router.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var gifts_users_ops_1 = __webpack_require__(/*! ./gifts-users.ops */ "./gifts-users/gifts-users.ops.ts");
var gifts_carts_ops_1 = __webpack_require__(/*! ./gifts-carts.ops */ "./gifts-users/gifts-carts.ops.ts");
var giftsUsersRouter = express_1.Router();
// url: /api/gifts/users/
giftsUsersRouter.post('/login', function (req, res) {
    gifts_users_ops_1.Login(req, res);
});
giftsUsersRouter.get('/info', function (req, res) {
    gifts_users_ops_1.UserInfo(req.session, res);
});
giftsUsersRouter.get('/logout', function (req, res) {
    gifts_users_ops_1.Logout(req, res);
});
giftsUsersRouter.post('/register', function (req, res) {
    gifts_users_ops_1.Register(req, res);
});
giftsUsersRouter.delete('/deleteuser', function (req, res) {
    gifts_users_ops_1.DeleteUser(req.session, res);
});
giftsUsersRouter.get('/cart', function (req, res) {
    gifts_carts_ops_1.GetCart(req.session, res);
});
giftsUsersRouter.post('/cart', function (req, res) {
    gifts_carts_ops_1.AddToCart(req.session, req.body, res);
});
giftsUsersRouter.delete('/cart', function (req, res) {
    gifts_carts_ops_1.DeleteCart(req.session, res);
});
giftsUsersRouter.put('/cart', function (req, res) {
    gifts_carts_ops_1.UpdateCartQty(req, res);
});
giftsUsersRouter.delete('/cart/product', function (req, res) {
    gifts_carts_ops_1.DeleteInCart(req.session, req.query._id, res);
});
giftsUsersRouter.post('/cart/checkout', function (req, res) {
    gifts_carts_ops_1.CartCheckout(req, res);
});
exports.default = giftsUsersRouter;


/***/ }),

/***/ "./gifts-users/gifts-users.ops.ts":
/*!****************************************!*\
  !*** ./gifts-users/gifts-users.ops.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var string_ops_1 = __webpack_require__(/*! ../string-ops */ "./string-ops.ts");
(function () { return __awaiter(_this, void 0, void 0, function () {
    var db;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-users')];
            case 1:
                db = _a.sent();
                db.createIndex('uid', { unique: true });
                return [2 /*return*/];
        }
    });
}); })();
function Login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbUsers, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (req.session && req.session.user) {
                        return [2 /*return*/, res.status(200).send({ uid: req.session.user.uid })];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-users')];
                case 2:
                    dbUsers = _b.sent();
                    _a = req.session;
                    return [4 /*yield*/, dbUsers.findOne({
                            uid: req.body.uid,
                            pwd: string_ops_1.encrypt(req.body.pwd)
                        })];
                case 3:
                    _a.user = _b.sent();
                    if (!req.session.user) {
                        return [2 /*return*/, res.status(403).send('Incorrect username or password')];
                    }
                    return [2 /*return*/, res.status(200).send({ uid: req.session.user.uid })];
                case 4:
                    e_1 = _b.sent();
                    return [2 /*return*/, res.status(500).send('server error.')];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.Login = Login;
function Logout(req, res) {
    if (req.session && req.session.user) {
        req.session.user = null;
    }
    return res.status(200).send({ result: 'ok' });
}
exports.Logout = Logout;
function Register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbUsers, rslt, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body.uid ||
                        !req.body.pwd ||
                        !req.body.email ||
                        !req.body.firstName ||
                        !req.body.lastName) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-users')];
                case 2:
                    dbUsers = _a.sent();
                    return [4 /*yield*/, dbUsers.insertOne({
                            uid: req.body.uid,
                            pwd: string_ops_1.encrypt(req.body.pwd),
                            email: req.body.email,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            createdOn: new Date()
                        })];
                case 3:
                    rslt = _a.sent();
                    if (rslt.insertedCount === 1) {
                        return [2 /*return*/, res.status(200).send(rslt.ops[0])];
                    }
                    else {
                        return [2 /*return*/, res.status(500).send('Register failed. Please try again later.')];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    // console.log(e);
                    return [2 /*return*/, res.status(500).send('Register failed. Please try again later.')];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.Register = Register;
function DeleteUser(session, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session || !session.user) {
                        return [2 /*return*/, res.status(403).send('Login is required.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    db.collection('gifts-users').deleteOne({
                        _id: session.user._id
                    });
                    session.user = null;
                    return [2 /*return*/, res.status(200).send({ result: 'User deleted.' })];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(400).send(e_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteUser = DeleteUser;
function UserInfo(session, res) {
    if (!bLogin(session)) {
        return res.status(403).send('User Not login.');
    }
    return res.status(200).send({
        _id: session.user._id,
        uid: session.user.uid,
        email: session.user.email
    });
}
exports.UserInfo = UserInfo;
function bLogin(session) {
    if (!session || !session.user) {
        return false;
    }
    return true;
}
exports.bLogin = bLogin;


/***/ }),

/***/ "./http-request/http-request.ts":
/*!**************************************!*\
  !*** ./http-request/http-request.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "axios");
function Delete(body, res) {
    var url = body.url;
    if (body.querys && body.querys.length > 0) {
        url += '?';
        for (var i = 0; i < body.querys.length; ++i) {
            url += body.query[i];
            url += '=';
            url += body.queryValue[i];
        }
    }
    axios_1.default.delete(url)
        .then(function (response) {
        res.status(200).send(response);
    })
        .catch(function (e) {
        res.status(400).send(e);
    });
}
exports.Delete = Delete;
function Post(req, res) {
    var headers = {};
    return res.status(200).send(req);
    var url = req.body.url;
    if (req.body.headers) {
        headers = {
            headers: req.body.headers
        };
    }
    if (req.body.parameters) {
        url += '?';
        for (var i = 0; i < req.body.parameters.length; ++i) {
            url += req.body.parameters[i] + '=' + req.body.parameterValue[i] + '&';
        }
    }
    axios_1.default.get(url, headers).then(function (response) {
        res.send(response.data);
    });
}
exports.Post = Post;
function Put(req, res) {
    axios_1.default.put(req.body.url).then(function (response) {
        res.send(response.data);
    });
}
exports.Put = Put;
function Get(req, res) {
    axios_1.default.post(req.body.url).then(function (response) {
        res.send(response.data);
    });
}
exports.Get = Get;


/***/ }),

/***/ "./http-request/router.ts":
/*!********************************!*\
  !*** ./http-request/router.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var http_request_1 = __webpack_require__(/*! ./http-request */ "./http-request/http-request.ts");
var httpRouter = express_1.Router();
httpRouter.post('', function (req, res) {
    if (req.body.type === 'DELETE') {
        http_request_1.Delete(req.body, res);
    }
    else if (req.body.type === 'GET') {
        http_request_1.Get(req.body, res);
    }
    else if (req.body.type === 'POST') {
        http_request_1.Post(req.body, res);
    }
    else if (req.body.type === 'PUT') {
        http_request_1.Put(req.body, res);
    }
});
exports.default = httpRouter;


/***/ }),

/***/ "./lta/bus-arrival.ts":
/*!****************************!*\
  !*** ./lta/bus-arrival.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "axios");
var lta_1 = __webpack_require__(/*! ./lta */ "./lta/lta.ts");
var bus_stops_1 = __webpack_require__(/*! ./bus-stops */ "./lta/bus-stops.ts");
function getBusArrival(busStopCode, res) {
    busStopCode = busStopCode.trim();
    if (!busStopCode) {
        return res.status(400).send('Invalid BusStopCode.');
    }
    var busStopInfo = bus_stops_1.checkBusStopLocally(busStopCode);
    if (!busStopInfo) {
        return res.status(400).send('Bus Stop not found.');
    }
    var url = lta_1.busArrivalUrl + "?BusStopCode=" + busStopCode;
    axios_1.default.get(url, lta_1.headerConfig)
        .then(function (respose) {
        res
            .status(200)
            .send({ busStopInfo: busStopInfo, busArrival: respose.data });
    })
        .catch(function (e) {
        res.status(400).send(e);
    });
}
exports.default = getBusArrival;


/***/ }),

/***/ "./lta/bus-stops.ts":
/*!**************************!*\
  !*** ./lta/bus-stops.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "axios");
var lta_1 = __webpack_require__(/*! ./lta */ "./lta/lta.ts");
var busStops = [];
exports.busStops = busStops;
function getBusStopsFromLta(skip) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = lta_1.busStopsUrl;
                    if (skip) {
                        url += "?$skip=" + skip;
                    }
                    return [4 /*yield*/, axios_1.default.get(url, lta_1.headerConfig)];
                case 1:
                    response = _a.sent();
                    if (response.status != 200) {
                        throw { status: response.status };
                    }
                    return [2 /*return*/, response.data.value];
                case 2:
                    e_1 = _a.sent();
                    throw e_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getAllBusStops() {
    return __awaiter(this, void 0, void 0, function () {
        var skip, newBusStops, temp, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    skip = 0;
                    newBusStops = [];
                    _a.label = 1;
                case 1: return [4 /*yield*/, getBusStopsFromLta(skip)];
                case 2:
                    newBusStops = _a.sent();
                    temp = busStops;
                    exports.busStops = busStops = temp.concat(newBusStops);
                    skip += 500;
                    _a.label = 3;
                case 3:
                    if (newBusStops.length === 500) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4:
                    console.log('Total bus stops: ' + busStops.length);
                    return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    exports.busStops = busStops = [];
                    getAllBusStops();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
getAllBusStops();
function checkBusStopLocally(busStopCode) {
    if (!busStopCode) {
        return;
    }
    for (var i = 0; i < busStops.length; i++) {
        if (busStopCode === busStops[i].BusStopCode) {
            return busStops[i];
        }
    }
    return;
}
exports.checkBusStopLocally = checkBusStopLocally;
function getBusStopInfo(busStopCode, res) {
    if (!busStopCode) {
        return res.status(400).send('Invalid Bus Stop Code.');
    }
    var busStopInfo = checkBusStopLocally(busStopCode);
    if (busStopInfo) {
        return res.status(200).send(busStopInfo);
    }
    return res.status(400).send('Bus Stop Info not found.');
}
exports.getBusStopInfo = getBusStopInfo;


/***/ }),

/***/ "./lta/lta.ts":
/*!********************!*\
  !*** ./lta/lta.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ltaAccountKey = '6sVzf9zXRaCgkJUdjxIw2A==';
var busArrivalUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2';
exports.busArrivalUrl = busArrivalUrl;
var busStopsUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops';
exports.busStopsUrl = busStopsUrl;
var headerConfig = {
    headers: {
        AccountKey: ltaAccountKey
    }
};
exports.headerConfig = headerConfig;


/***/ }),

/***/ "./lta/router.ts":
/*!***********************!*\
  !*** ./lta/router.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var bus_arrival_1 = __webpack_require__(/*! ./bus-arrival */ "./lta/bus-arrival.ts");
var bus_stops_1 = __webpack_require__(/*! ./bus-stops */ "./lta/bus-stops.ts");
// url: /api/lta/bus
var busRouter = express_1.Router();
exports.busRouter = busRouter;
busRouter.get('/busArrival/:busStopCode', function (req, res) {
    bus_arrival_1.default(req.params.busStopCode, res);
});
busRouter.get('/busStop/:busStopCode', function (req, res) {
    bus_stops_1.getBusStopInfo(req.params.busStopCode, res);
});


/***/ }),

/***/ "./lunchfun-and-dictionary/dictionary.ts":
/*!***********************************************!*\
  !*** ./lunchfun-and-dictionary/dictionary.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var OxfordDictionary = __webpack_require__(/*! oxford-dictionary */ "oxford-dictionary"); // tslint:disable-line
var DICT = new OxfordDictionary({
    app_id: '0314e9e2',
    app_key: '5a6c2589474a2f83ccd69f397bfec7a2',
    source_lang: 'en'
});
function CheckOxfordDictionary(word, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!word || !word.trim()) {
                return [2 /*return*/, res.status(400).send('Invalid word.')];
            }
            DICT.definitions(word.trim()).then(function (definitions) {
                return res.status(200).send(definitions);
            }, function (err) {
                return res.status(400).send(err);
            });
            return [2 /*return*/];
        });
    });
}
exports.default = CheckOxfordDictionary;


/***/ }),

/***/ "./lunchfun-and-dictionary/lunchfun-pals.ts":
/*!**************************************************!*\
  !*** ./lunchfun-and-dictionary/lunchfun-pals.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var lunchPals = [];
function refreshPals() {
    return __awaiter(this, void 0, void 0, function () {
        var palsCollection, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-pals')];
                case 1:
                    palsCollection = _a.sent();
                    return [4 /*yield*/, palsCollection
                            .find()
                            .sort({ name: 1 })
                            .toArray()];
                case 2:
                    lunchPals = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function GetPals(res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (lunchPals.length > 0) {
                        return [2 /*return*/, res.status(200).send(lunchPals)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, refreshPals()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send(lunchPals)];
                case 3:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetPals = GetPals;
function AddPal(name, res) {
    return __awaiter(this, void 0, void 0, function () {
        var palsCollection, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!name) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-pals')];
                case 2:
                    palsCollection = _a.sent();
                    palsCollection.insertOne({ name: name });
                    refreshPals();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.AddPal = AddPal;
function DeletePal(name, res) {
    return __awaiter(this, void 0, void 0, function () {
        var palsCollection, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!name) {
                        return [2 /*return*/, res.status(400).send('Invalid name to delete.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-pals')];
                case 2:
                    palsCollection = _a.sent();
                    palsCollection.deleteOne({ name: name });
                    refreshPals();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeletePal = DeletePal;
function GetPalsAttendance(res) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, attendances, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection
                            .aggregate([
                            { $unwind: '$attendees' },
                            { $group: { _id: '$attendees', attendance: { $sum: 1 } } },
                            { $project: { name: '$_id', attendance: '$attendance' } }
                        ])
                            .toArray()];
                case 2:
                    attendances = _a.sent();
                    return [2 /*return*/, res.status(200).send(attendances)];
                case 3:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_5)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetPalsAttendance = GetPalsAttendance;


/***/ }),

/***/ "./lunchfun-and-dictionary/lunchfun-records.ts":
/*!*****************************************************!*\
  !*** ./lunchfun-and-dictionary/lunchfun-records.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function GetRecords(res, qty) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, records, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection
                            .find({})
                            .sort({ createdOn: -1 })
                            .limit(qty | 30)
                            .toArray()];
                case 2:
                    records = _a.sent();
                    return [2 /*return*/, res.status(200).send(records)];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetRecords = GetRecords;
function AddRecord(payer, attendees, res) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!payer || !attendees || attendees.length <= 0) {
                        return [2 /*return*/, res.status(400).send('Invalid params to add.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 2:
                    collection = _a.sent();
                    return [4 /*yield*/, collection.insertOne({
                            payer: payer,
                            attendees: attendees,
                            createdOn: new Date()
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_2 = _a.sent();
                    // console.log(e);
                    return [2 /*return*/, res.status(500).send('Error at server. Please try again later.')];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AddRecord = AddRecord;
function DeleteRecord(_id, res) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_id) {
                        return [2 /*return*/, res.status(400).send('Invalid record to delete.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 2:
                    collection = _a.sent();
                    collection.deleteOne({ _id: new mongodb_ops_1.ObjectID(_id) });
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteRecord = DeleteRecord;


/***/ }),

/***/ "./lunchfun-and-dictionary/router.ts":
/*!*******************************************!*\
  !*** ./lunchfun-and-dictionary/router.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var dictionary_1 = __webpack_require__(/*! ./dictionary */ "./lunchfun-and-dictionary/dictionary.ts");
var lunchfun_pals_1 = __webpack_require__(/*! ./lunchfun-pals */ "./lunchfun-and-dictionary/lunchfun-pals.ts");
var lunchfun_records_1 = __webpack_require__(/*! ./lunchfun-records */ "./lunchfun-and-dictionary/lunchfun-records.ts");
var dictionaryRouter = express_1.Router();
exports.dictionaryRouter = dictionaryRouter;
var lunchfunRouter = express_1.Router();
exports.lunchfunRouter = lunchfunRouter;
dictionaryRouter.get('/oxford/:word', function (req, res) {
    dictionary_1.default(req.params.word, res);
});
lunchfunRouter.get('/pals', function (req, res) {
    lunchfun_pals_1.GetPals(res);
});
lunchfunRouter.post('/pal', function (req, res) {
    lunchfun_pals_1.AddPal(req.body.name, res);
});
lunchfunRouter.delete('/pal', function (req, res) {
    lunchfun_pals_1.DeletePal(req.query, res);
});
lunchfunRouter.get('/records', function (req, res) {
    lunchfun_records_1.GetRecords(res);
});
lunchfunRouter.post('/record', function (req, res) {
    lunchfun_records_1.AddRecord(req.body.payer, req.body.attendees, res);
});
lunchfunRouter.delete('/record', function (req, res) {
    lunchfun_records_1.DeleteRecord(req.query._id, res);
});
lunchfunRouter.get('/stats/attendance', function (req, res) {
    lunchfun_pals_1.GetPalsAttendance(res);
});


/***/ }),

/***/ "./mongodb-ops.ts":
/*!************************!*\
  !*** ./mongodb-ops.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
exports.ObjectID = mongodb_1.ObjectID;
var MONGO_URL = 'mongodb+srv://admin:admin@cluster0-dxwkg.mongodb.net/insg?retryWrites=true';
var database;
function InitDb() {
    return __awaiter(this, void 0, void 0, function () {
        var client, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, mongodb_1.MongoClient.connect(MONGO_URL, {
                            useNewUrlParser: true
                        })];
                case 1:
                    client = _a.sent();
                    return [2 /*return*/, (database = client.db('insg'))];
                case 2:
                    e_1 = _a.sent();
                    throw 'Database connection failed.';
                case 3: return [2 /*return*/];
            }
        });
    });
}
function MongoDb() {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (database) {
                        return [2 /*return*/, database];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, InitDb()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, database];
                case 3:
                    e_2 = _a.sent();
                    // console.log(e);
                    throw e_2;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.MongoDb = MongoDb;
function DbCollection(name) {
    return __awaiter(this, void 0, void 0, function () {
        var e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (database) {
                        return [2 /*return*/, database.collection(name)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, InitDb()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, database.collection(name)];
                case 3:
                    e_3 = _a.sent();
                    throw e_3;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DbCollection = DbCollection;


/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(/*! express */ "express");
var session = __webpack_require__(/*! express-session */ "express-session");
var https = __webpack_require__(/*! https */ "https");
var fs = __webpack_require__(/*! fs */ "fs");
var path_1 = __webpack_require__(/*! path */ "path");
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var api_router_1 = __webpack_require__(/*! ./api-router */ "./api-router.ts");
// Express server
var app = express();
var HOST = 'localhost';
var PORT = 80;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'insg-yc-ly-17',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // millseconds of 24hrs  }
    }
}));
app.use('/api', api_router_1.default);
app.get('/', function (req, res) {
    return res.status(200).sendFile(path_1.join(__dirname, '/client/index.html'));
});
// Server static files from /client
app.use(express.static(path_1.join(__dirname, '/client')));
// error handling - 1
app.all('/*', function (req, res) {
    return res.status(200).sendFile(path_1.join(__dirname, '/client/index.html'));
});
// error handling - 2
app.use(function (req, res, next) {
    return res.status(500).send('Issue happened. Please retry later!');
});
// Start up the Node server
// http
app.set('domain', HOST);
app.set('port', PORT);
// app.listen(app.get('port'), () => {
//   console.log(`Node server listening on http://${HOST}:${PORT}`);
// });
// https default port
var httpsOptions = {
    cert: fs.readFileSync(path_1.join(__dirname, '/cert/insg.key')),
    key: fs.readFileSync(path_1.join(__dirname, '/cert/insg.crt'))
};
var server = https.createServer(httpsOptions, app);
server.listen(443);
// export { server };


/***/ }),

/***/ "./string-ops.ts":
/*!***********************!*\
  !*** ./string-ops.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var crypto = __webpack_require__(/*! crypto */ "crypto");
var algorithm = 'aes-192-cbc';
var password = 'inSGyc83';
var key = crypto.scryptSync(password, 'salt', 24);
var iv = Buffer.alloc(16, 0);
function encrypt(text) {
    try {
        var cipher = crypto.createCipheriv(algorithm, key, iv);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    catch (e) {
        // console.log('encrypt => ', e);
    }
}
exports.encrypt = encrypt;
function decrypt(text) {
    try {
        var decipher = crypto.createDecipheriv(algorithm, key, iv);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    catch (e) {
        // console.log('decrypt => ', e);
    }
}
exports.decrypt = decrypt;
/*
 * string operation
 */
var RandomTypes;
(function (RandomTypes) {
    RandomTypes[RandomTypes["Capital"] = 0] = "Capital";
    RandomTypes[RandomTypes["Number"] = 1] = "Number";
    RandomTypes[RandomTypes["String"] = 2] = "String";
})(RandomTypes || (RandomTypes = {}));
exports.RandomTypes = RandomTypes;
// return string of random numbers with specified length.
function randomNumber(length) {
    return random(RandomTypes.Number, length);
}
exports.randomNumber = randomNumber;
// return string of random capital characters with specified length.
function randomCapitals(length) {
    return random(RandomTypes.Capital, length);
}
exports.randomCapitals = randomCapitals;
// return string of random characters or numbers with specified length.
function randomString(length) {
    return random(RandomTypes.String, length);
}
exports.randomString = randomString;
function random(type, length) {
    var rString = '';
    if (type === RandomTypes.String) {
        rString = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    else if (type === RandomTypes.Number) {
        rString = '0123456789';
    }
    else if (type === RandomTypes.Capital) {
        rString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    else {
        return '';
    }
    var result = '';
    for (var i = length; i > 0; --i) {
        result += rString[Math.floor(Math.random() * rString.length)];
    }
    return result;
}


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "oxford-dictionary":
/*!************************************!*\
  !*** external "oxford-dictionary" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("oxford-dictionary");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLWdpZnRzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hcGktcm91dGVyLnRzIiwid2VicGFjazovLy8uL2VtYWlsL2VtYWlsLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtdXNlcnMvZ2lmdHMtY2FydHMub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vaHR0cC1yZXF1ZXN0L2h0dHAtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9odHRwLXJlcXVlc3Qvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2x0YS9idXMtYXJyaXZhbC50cyIsIndlYnBhY2s6Ly8vLi9sdGEvYnVzLXN0b3BzLnRzIiwid2VicGFjazovLy8uL2x0YS9sdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbHRhL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9kaWN0aW9uYXJ5LnRzIiwid2VicGFjazovLy8uL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L2x1bmNoZnVuLXBhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvbHVuY2hmdW4tcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbW9uZ29kYi1vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLnRzIiwid2VicGFjazovLy8uL3N0cmluZy1vcHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3hmb3JkLWRpY3Rpb25hcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNB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LENBQUMsTUFBTSxFQUFFO1FBQ3RDLE9BQU8sR0FBRyxZQUFZLENBQUM7S0FDeEI7U0FBTSxJQUFJLElBQUksS0FBSyxXQUFXLENBQUMsT0FBTyxFQUFFO1FBQ3ZDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQztLQUN4QztTQUFNO1FBQ0wsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7QUN0RUQsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIudHNcIik7XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCBnaWZ0c1Byb2R1Y3RzUm91dGVyIGZyb20gJy4vZ2lmdHMtcHJvZHVjdHMvZ2lmdHMtcHJvZHVjdHMtcm91dGVyJztcclxuaW1wb3J0IGdpZnRzT3JkZXJzUm91dGVyIGZyb20gJy4vZ2lmdHMtb3JkZXJzL2dpZnRzLW9yZGVycy1yb3V0ZXInO1xyXG5pbXBvcnQgZ2lmdHNVc2Vyc1JvdXRlciBmcm9tICcuL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlcic7XHJcbmltcG9ydCBnaWZ0c1N0YWZmc1JvdXRlciBmcm9tICcuL2dpZnRzLXN0YWZmcy9naWZ0cy1zdGFmZnMtcm91dGVyJztcclxuXHJcbmNvbnN0IGdpZnRzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyB1cmw6IC9hcGkvZ2lmdHNcclxuZ2lmdHNSb3V0ZXIudXNlKCcvcHJvZHVjdHMnLCBnaWZ0c1Byb2R1Y3RzUm91dGVyKTtcclxuZ2lmdHNSb3V0ZXIudXNlKCcvb3JkZXJzJywgZ2lmdHNPcmRlcnNSb3V0ZXIpO1xyXG5naWZ0c1JvdXRlci51c2UoJy91c2VycycsIGdpZnRzVXNlcnNSb3V0ZXIpO1xyXG5naWZ0c1JvdXRlci51c2UoJy9zdGFmZnMnLCBnaWZ0c1N0YWZmc1JvdXRlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuaW1wb3J0IHsgYnVzUm91dGVyIH0gZnJvbSAnLi9sdGEvcm91dGVyJztcclxuaW1wb3J0IGh0dHBSb3V0ZXIgZnJvbSAnLi9odHRwLXJlcXVlc3Qvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBkaWN0aW9uYXJ5Um91dGVyLFxyXG4gIGx1bmNoZnVuUm91dGVyXHJcbn0gZnJvbSAnLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9yb3V0ZXInO1xyXG5pbXBvcnQgZ2lmdHNSb3V0ZXIgZnJvbSAnLi9hcGktZ2lmdHMtcm91dGVyJztcclxuaW1wb3J0IFNlbmRFbWFpbCBmcm9tICcuL2VtYWlsL2VtYWlsLm9wcyc7XHJcblxyXG5jb25zdCBhcGlSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbi8vIHVybDogL2FwaVxyXG5hcGlSb3V0ZXIudXNlKCcvZGljdGlvbmFyeScsIGRpY3Rpb25hcnlSb3V0ZXIpO1xyXG5hcGlSb3V0ZXIudXNlKCcvaHR0cCcsIGh0dHBSb3V0ZXIpO1xyXG5hcGlSb3V0ZXIudXNlKCcvbHVuY2hmdW4nLCBsdW5jaGZ1blJvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9sdGEvYnVzJywgYnVzUm91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2dpZnRzJywgZ2lmdHNSb3V0ZXIpO1xyXG5cclxuLy8gbXNnIGZyb20gdXNlcnM7IGZvcndhcmQgaXQgdmlhIG5vZGVtYWlsZXIuXHJcbmFwaVJvdXRlci5wb3N0KCcvbXNnJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFNlbmRFbWFpbChyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGluZ1xyXG5hcGlSb3V0ZXIuYWxsKCcvKicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgUmVxdWVzdCcpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaVJvdXRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVHJhbnNwb3J0IH0gZnJvbSAnbm9kZW1haWxlcic7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBvdXRsb29rX3RyYW5zcG9ydGVyID0gY3JlYXRlVHJhbnNwb3J0KHtcclxuICBzZXJ2aWNlOiAnb3V0bG9vaycsXHJcbiAgYXV0aDoge1xyXG4gICAgdXNlcjogJ3l1YW5jaGFvQG91dGxvb2suc2cnLFxyXG4gICAgcGFzczogJ3BpbmdtZUhDODMnXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG91dGxvb2tfbWFpbE9wdGlvbnMgPSB7XHJcbiAgZnJvbTogJ3l1YW5jaGFvQG91dGxvb2suc2cnLFxyXG4gIHRvOiAnc2Vlc2VhMkBnbWFpbC5jb20nLFxyXG4gIHN1YmplY3Q6IG51bGwsXHJcbiAgaHRtbDogbnVsbFxyXG59O1xyXG5cclxuZnVuY3Rpb24gU2VuZEVtYWlsKGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGNvbnN0IGVtYWlsSHRtbDogc3RyaW5nID1cclxuICAgICc8IURPQ1RZUEUgaHRtbD48aGVhZD4nICtcclxuICAgICc8bWV0YSBodHRwLWVxdWl2PVwiY29udGVudC10eXBlXCIgY29udGVudD1cInRleHQvaHRtbDtjaGFyc2V0PVVURi04XCI+PC9oZWFkPicgK1xyXG4gICAgYDxib2R5Pjxicj48Yj5NZXNzYWdlIGZyb20gVXNlciAke2JvZHkubmFtZX1gICtcclxuICAgICcgOjwvYj48YnI+PGJyPicgK1xyXG4gICAgYDxwPjxiPkVtYWlsOiA8L2I+ICR7Ym9keS5lbWFpbH1gICtcclxuICAgICc8L3A+JyArXHJcbiAgICBgPHA+PGI+TW9iaWxlOiA8L2I+ICR7Ym9keS5tb2JpbGV9YCArXHJcbiAgICAnPC9wPicgK1xyXG4gICAgYDxwPjxiPk1lc3NhZ2U6IDwvYj4gJHtib2R5Lm1lc3NhZ2V9YCArXHJcbiAgICAnPC9wPicgK1xyXG4gICAgJzwvYm9keT48L2h0bWw+JztcclxuXHJcbiAgb3V0bG9va19tYWlsT3B0aW9ucy5zdWJqZWN0ID0gJ1VzZXIgSW5xdWlyeSc7XHJcbiAgb3V0bG9va19tYWlsT3B0aW9ucy5odG1sID0gZW1haWxIdG1sO1xyXG4gIG91dGxvb2tfdHJhbnNwb3J0ZXIuc2VuZE1haWwob3V0bG9va19tYWlsT3B0aW9ucyk7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZW5kRW1haWw7XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgZ2lmdHNPcmRlcnNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbi8vIG9yZGVyIGxpc3Qgd2l0aCBvcmRlcl9ubywgc3RhdHVzICYgc3RhZmYgaWQgdG8gZm9sbG93LXVwLlxyXG5naWZ0c09yZGVyc1JvdXRlci5nZXQoJy9hbGxPcmRlcnMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuLy8gdXBkYXRlIG9yZGVyIHN0YXR1cyBieSBzdGFmZiBmb2xsb3ctdXAuXHJcbmdpZnRzT3JkZXJzUm91dGVyLnB1dCgnL3VwZGF0ZVN0YXR1cycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAoIXJlcS5zZXNzaW9uIHx8ICFyZXEuc2Vzc2lvbi5zdGFmZi5pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgfVxyXG4gIGlmICghcmVxLmJvZHkubmV3X3N0YXR1cyB8fCAhcmVxLmJvZHkuc25vIHx8ICFyZXEuYm9keS5vcmRlcl9ubykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdGYWlsZWQuIFBsZWFlcyByZXZpZXcgaW5wdXRzLicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAxOiByZXEuYm9keS5vcmRlcl9ubyxcclxuICAgIDI6IHJlcS5ib2R5LnNubyxcclxuICAgIDM6IERhdGUubm93KCksXHJcbiAgICA0OiByZXEuc2Vzc2lvbi5zdGFmZi5pZCxcclxuICAgIDU6IHJlcS5ib2R5Lm5ld19zdGF0dXMsXHJcbiAgICA2OiByZXEuYm9keS5ub3RlIHx8IG51bGxcclxuICB9O1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufSk7XHJcblxyXG4vLyBzdGFmZiB0byB1cGRhdGUgY29udGFjdCBpbmZvIG9mIHRoZSBvcmRlci5cclxuZ2lmdHNPcmRlcnNSb3V0ZXIucHV0KCcvdXBkYXRlQ29udGFjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAoIXJlcS5zZXNzaW9uIHx8ICFyZXEuc2Vzc2lvbi5zdGFmZi5pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgfVxyXG4gIGlmICghcmVxLmJvZHkub3JkZXJfbm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnT3JkZXJfbm8gZW1wdHkuJyk7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgICFyZXEuYm9keS5lbWFpbCB8fFxyXG4gICAgIXJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCdAJykgfHxcclxuICAgICFyZXEuYm9keS5lbWFpbC5pbmNsdWRlcygnLicpIHx8XHJcbiAgICByZXEuYm9keS5lbWFpbC5pbmNsdWRlcygnLycpIHx8XHJcbiAgICByZXEuYm9keS5lbWFpbC5pbmNsdWRlcygnXFxcXCcpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgZW1haWwuJyk7XHJcbiAgfSBlbHNlIGlmICghcmVxLmJvZHkubmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIG5hbWUuJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbSA9IHtcclxuICAgIDE6IHJlcS5ib2R5Lm5hbWUsXHJcbiAgICAyOiByZXEuYm9keS5lbWFpbCxcclxuICAgIDM6IHJlcS5ib2R5Lm1vYmlsZSB8fCBudWxsLFxyXG4gICAgNDogcmVxLmJvZHkuY29tcGFueSB8fCBudWxsLFxyXG4gICAgNTogcmVxLmJvZHkubW9iaWxlMiB8fCBudWxsLFxyXG4gICAgNjogcmVxLmJvZHkuYWRkciB8fCBudWxsLFxyXG4gICAgNzogcmVxLmJvZHkub3JkZXJfbm9cclxuICB9O1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufSk7XHJcblxyXG4vLyBzdGFmZiB0byBjaGFuZ2Ugb3JkZXIgZGV0YWlscyBlLmcuIHByaWNlLCBxdHksIGluIGNhc2UgdXNlcnMgY2hhbmdlZCBtaW5kLlxyXG4vLyBzdGFmZiBtYXkgY2hhbmdlIHN0YXR1cyBvZiBzcGVjaWZpYyBwcm9kdWN0IG9mIHRoZSBvcmRlci5cclxuZ2lmdHNPcmRlcnNSb3V0ZXIucHV0KCcvdXBkYXRlT3JkZXJJdGVtJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmLmlkKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcblxyXG4gIGlmICghcmVxLmJvZHkub3JkZXJfbm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRmFpbGVkLiBJbnZhbGlkIE9yZGVyIE5vLicpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5LnNubyB8fCByZXEuYm9keS5zbm8gPT09ICcnKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ZhaWxlZC4gSW52YWxpZCBPcmRlciBTbm8uJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbSA9IHtcclxuICAgIDE6IHJlcS5ib2R5Lm5ld19zYWxlX3ByaWNlLFxyXG4gICAgMjogcmVxLmJvZHkubmV3X3F0eSxcclxuICAgIDM6IHJlcS5ib2R5Lm5ld19zdGF0dXMsXHJcbiAgICA0OiByZXEuYm9keS5vcmRlcl9ubyxcclxuICAgIDU6IHJlcS5ib2R5LnNub1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdpZnRzT3JkZXJzUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcbmltcG9ydCB7IGJMb2dpbiB9IGZyb20gJy4uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLm9wcyc7XHJcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnLi4vZ2lmdHMtdXNlcnMvdXNlcnMtaW50ZXJmYWNlJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIE5ld09yZGVyKGN1c3RvbWVyLCBjYXJ0SXRlbXM6IENhcnRJdGVtW10pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJPcmRlcnMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLW9yZGVycycpO1xyXG4gICAgbGV0IGluc2VydFJzbHQgPSBkYk9yZGVycy5pbnNlcnRPbmUoe1xyXG4gICAgICBjcmVhdGVkX29uOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBzaGlwcGluZzoge1xyXG4gICAgICAgIG5hbWU6IGN1c3RvbWVyLm5hbWUsXHJcbiAgICAgICAgbW9iaWxlOiBjdXN0b21lci5tb2JpbGUsXHJcbiAgICAgICAgYWRkcmVzczogY3VzdG9tZXIuYWRkcmVzcyxcclxuICAgICAgICBtZXNzYWdlOiBjdXN0b21lci5tZXNzYWdlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBheW1lbnQ6IHsgbWV0aG9kOiAndmlzYScsIHRyYW5zYWN0aW9uX2lkOiAnMjMxMjIxMzMxMlhYWFREJyB9LFxyXG4gICAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtc1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnaW5zZXJ0UnNsdDogJywgaW5zZXJ0UnNsdCk7XHJcbiAgICByZXR1cm4gaW5zZXJ0UnNsdDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyAnY3JlYXRlIG5ldyBvcmRlciBmYWlsZWQuJztcclxuICB9XHJcbn1cclxuLy8gYXN5bmMgZnVuY3Rpb24gR2V0Q2FydChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGxldCBjYXJ0ID0gYXdhaXQgZGJcclxuLy8gICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJylcclxuLy8gICAgICAgLmZpbmQoeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0pXHJcbi8vICAgICAgIC50b0FycmF5KCk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNhcnQpO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUNhcnRRdHkocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG4vLyAgIGlmICghcmVxLmJvZHkucHJvZHVjdElkIHx8ICFyZXEuYm9keS5xdWFudGl0eSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgbGV0IHJzbHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpLnVwZGF0ZU9uZShcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQsXHJcbi8vICAgICAgICAgJ3Byb2R1Y3RzLnByb2R1Y3RJZCc6IHJlcS5ib2R5LnByb2R1Y3RJZFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgJHNldDoge1xyXG4vLyAgICAgICAgICAgJ3Byb2R1Y3RzLiQucXVhbnRpdHknOiByZXEuYm9keS5xdWFudGl0eSxcclxuLy8gICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhyc2x0KTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhcnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgYXdhaXQgZGJcclxuLy8gICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJylcclxuLy8gICAgICAgLmRlbGV0ZU9uZSh7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBEZWxldGVDYXJ0UHJvZHVjdChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpLnVwZGF0ZU9uZShcclxuLy8gICAgICAgeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICAkc2V0OiB7IG1vZGlmaWVkT246IG5ldyBEYXRlKCkgfSxcclxuLy8gICAgICAgICAkcHVsbDoge1xyXG4vLyAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuLy8gICAgICAgICAgICAgcHJvZHVjdElkOiByZXEuYm9keS5wcm9kdWN0SWQsXHJcbi8vICAgICAgICAgICAgIHF1YW50aXR5OiByZXEuYm9keS5xdWFudGl0eVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIENhcnRDaGVja291dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpLnVwZGF0ZU9uZShcclxuLy8gICAgICAgeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICAkc2V0OiB7IG1vZGlmaWVkT246IG5ldyBEYXRlKCkgfSxcclxuLy8gICAgICAgICAkcHVsbDoge1xyXG4vLyAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuLy8gICAgICAgICAgICAgcHJvZHVjdElkOiByZXEuYm9keS5wcm9kdWN0SWQsXHJcbi8vICAgICAgICAgICAgIHF1YW50aXR5OiByZXEuYm9keS5xdWFudGl0eVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB7IERlbGV0ZUNhcnQsIERlbGV0ZUNhcnRQcm9kdWN0LCBHZXRDYXJ0LCBVcGRhdGVDYXJ0UXR5IH07XHJcbmV4cG9ydCB7IE5ld09yZGVyIH07XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JqZWN0SUQsIERiQ29sbGVjdGlvbiB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuXHJcbmxldCBnbG9iYWxDYXRlZ29yaWVzID0gW107XHJcbmxldCBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gW107XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXRlZ29yaWVzKHJlczogUmVzcG9uc2UpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IEdldENhdGVnb3JpZXNCeUxldmVsKDApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNhdGVnb3JpZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFNhbXBsZXNPZkNhdGVnb3JpZXMocmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBhd2FpdCBHZXRTYW1wbGVzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkQ2F0ZWdvcnkoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Lm5hbWUgfHwgIWJvZHkuY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzLWNhdGFsb2cnKTtcclxuICAgIGF3YWl0IGRiQ29sbGVjdGlvbi5pbnNlcnRPbmUoeyBuYW1lOiBib2R5Lm5hbWUsIGNhdGVnb3J5OiBib2R5LmNhdGVnb3J5IH0pO1xyXG4gICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhdGVnb3J5KHF1ZXJ5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXF1ZXJ5Ll9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMtY2F0YWxvZycpO1xyXG4gICAgYXdhaXQgZGJDb2xsZWN0aW9uLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKHF1ZXJ5Ll9pZCkgfSk7XHJcbiAgICBnbG9iYWxDYXRlZ29yaWVzID0gW107XHJcbiAgICBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gW107XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQGxldmVsOlxyXG4vLyAwIC0gYWxsOyAgMSAtIDFzdCBsZXZlbDsgIDIgLSAybmQgYW5kIGFib3ZlIGxldmVsc1xyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXRlZ29yaWVzQnlMZXZlbChsZXZlbDogbnVtYmVyKSB7XHJcbiAgaWYgKGdsb2JhbENhdGVnb3JpZXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGdsb2JhbENhdGVnb3JpZXMgPSBhd2FpdCBHZXRDYXRlZ29yaWVzRnJvbURiKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobGV2ZWwgPT09IDApIHtcclxuICAgIHJldHVybiBnbG9iYWxDYXRlZ29yaWVzO1xyXG4gIH1cclxuICBjb25zdCByZXR1cm5DYXRlZ29yaWVzID0gW107XHJcbiAgZ2xvYmFsQ2F0ZWdvcmllcy5mb3JFYWNoKGNhdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjYXQuY2F0ZWdvcnkubWF0Y2gobmV3IFJlZ0V4cCgnLycsICdnJykpKTtcclxuICAgIGlmIChjYXQuY2F0ZWdvcnkubWF0Y2gobmV3IFJlZ0V4cCgnLycsICdnJykpLmxlbmd0aCA8PSBsZXZlbCkge1xyXG4gICAgICByZXR1cm5DYXRlZ29yaWVzLnB1c2goY2F0KTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmV0dXJuQ2F0ZWdvcmllcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllc0Zyb21EYigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cy1jYXRhbG9nJyk7XHJcbiAgICBnbG9iYWxDYXRlZ29yaWVzID0gYXdhaXQgZGJDb2xsZWN0aW9uXHJcbiAgICAgIC5maW5kKClcclxuICAgICAgLnNvcnQoJ2NhdGVnb3J5JywgMSlcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiBnbG9iYWxDYXRlZ29yaWVzO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IHsgZXJyTXNnOiAnR2V0IGNhdGVnb3JpZXMgZnJvbSBkYXRhYmFzZSBmYWlsZWQuJyB9O1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0U2FtcGxlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpO1xyXG4gICAgbGV0IGRvY3MgPSBudWxsO1xyXG4gICAgZG9jcyA9IGF3YWl0IGRiQ29sbGVjdGlvblxyXG4gICAgICAuYWdncmVnYXRlKFtcclxuICAgICAgICB7ICRzb3J0OiB7IF9pZDogLTEgfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRncm91cDoge1xyXG4gICAgICAgICAgICBfaWQ6IHsgY2F0ZWdvcnk6ICckY2F0ZWdvcnknIH0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgICAgJHB1c2g6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogJyRfaWQnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICckY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJGltZydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICAgIF9pZDogJyRfaWQnLFxyXG4gICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICRzbGljZTogW1xyXG4gICAgICAgICAgICAgICAgJyRwcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICA0IC8vIG1heCBudW1iZXIgb2YgZWxlbWVudHMgcmV0dXJuZWQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdKVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIGRvY3M7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4geyBlcnJNc2c6ICdHZXQgcHJvZHVjdHMgZmFpbGVkLicgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkZENhdGVnb3J5LCBEZWxldGVDYXRlZ29yeSwgR2V0Q2F0ZWdvcmllcywgR2V0U2FtcGxlc09mQ2F0ZWdvcmllcyB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRJbnZlbnRvcnkocmVzOiBSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBkYkludmVudG9yeS5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGludmVudG9yeSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gcXR5IGJ5IHByb2R1Y3Q7IFRvZG86IGJ5IGNvbG91ciwgc2l6ZSwgZXRjLlxyXG5hc3luYyBmdW5jdGlvbiBBZGp1c3RJbnZlbnRvcnkoX2lkOiBzdHJpbmcsIHF0eTogbnVtYmVyLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFfaWQgfHwgIXF0eSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAge1xyXG4gICAgICAgIF9pZDogbmV3IE9iamVjdElEKF9pZClcclxuICAgICAgfSxcclxuICAgICAgeyAkc2V0OiB7IG1vZGlmaWVkT246IG5ldyBEYXRlKCksIHF0eTogcXR5IH0gfSxcclxuICAgICAgeyB1cHNlcnQ6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyc2x0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBSZXNlcnZlSW52ZW50b3J5KGlkOiBzdHJpbmcsIGNhcnRJdGVtczogYW55KSB7XHJcbiAgaWYgKCFjYXJ0SXRlbXMgfHwgY2FydEl0ZW1zLmxlbmd0aCA8PSAwKSB7XHJcbiAgICB0aHJvdyAnVGhlIGNhcnQgaXMgZW1wdHkuJztcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdWNjZXNzID0gW107XHJcbiAgICBjb25zdCBmYWlsZWQgPSBbXTtcclxuXHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgX2lkOiBuZXcgT2JqZWN0SUQoY2FydEl0ZW1zW2ldLnByb2R1Y3QuX2lkKSxcclxuICAgICAgICAgIHF0eTogeyAkZ3RlOiBjYXJ0SXRlbXNbaV0ucXR5IH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRpbmM6IHsgcXR5OiAtY2FydEl0ZW1zW2ldLnF0eSB9LFxyXG4gICAgICAgICAgJHB1c2g6IHtcclxuICAgICAgICAgICAgcmVzZXJ2YXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgcXR5OiBjYXJ0SXRlbXNbaV0ucXR5LFxyXG4gICAgICAgICAgICAgIF9pZDogbmV3IE9iamVjdElEKGlkKSxcclxuICAgICAgICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3VsdC5yZXN1bHQubk1vZGlmaWVkID09PSAwKSB7XHJcbiAgICAgICAgZmFpbGVkLnB1c2goY2FydEl0ZW1zW2ldLnByb2R1Y3QpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1Y2Nlc3MucHVzaChjYXJ0SXRlbXNbaV0ucHJvZHVjdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmFpbGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWNjZXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBfaWQ6IHN1Y2Nlc3NbaV0uX2lkLFxyXG4gICAgICAgICAgICAncmVzZXJ2YXRpb25zLl9pZCc6IGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAkaW5jOiB7IHF0eTogc3VjY2Vzc1tpXS5xdHkgfSxcclxuICAgICAgICAgICAgJHB1bGw6IHsgcmVzZXJ2YXRpb25zOiB7IF9pZDogaWQgfSB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyAnTm90IGVub3VnaCBzdG9yYWdlLic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ1N1Y2Nlc3MuJztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24oX2lkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgbGV0IHVwZGF0ZVJzbHQgPSBhd2FpdCBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICAncmVzZXJ2YXRpb25zLl9pZCc6IG5ldyBPYmplY3RJRChfaWQpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkcHVsbDogeyByZXNlcnZhdGlvbnM6IHsgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKSB9IH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmICh1cGRhdGVSc2x0LnJlc3VsdC5uTW9kaWZpZWQgPD0gMCkge1xyXG4gICAgICB0aHJvdyAnZGVsZXRlIHJlc2VydmF0aW9uIGZhaWxlZC4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVwZGF0ZVJzbHQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB0aHJvdyAnZGVsZXRlIHJlc2VydmF0aW9uIGZhaWxlZCB3aXRoIGV4Y2VwdGlvbi4nO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBBZGp1c3RJbnZlbnRvcnksXHJcbiAgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24sXHJcbiAgR2V0SW52ZW50b3J5LFxyXG4gIFJlc2VydmVJbnZlbnRvcnlcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgQWRkQ2F0ZWdvcnksXHJcbiAgRGVsZXRlQ2F0ZWdvcnksXHJcbiAgR2V0Q2F0ZWdvcmllcyxcclxuICBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzXHJcbn0gZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcyc7XHJcbmltcG9ydCB7XHJcbiAgQWRkUHJvZHVjdCxcclxuICBEZWxldGVQcm9kdWN0LFxyXG4gIEdldFByb2R1Y3QsXHJcbiAgR2V0UHJvZHVjdHNCeUNhdGVnb3J5LFxyXG4gIFVwZGF0ZVByb2R1Y3RcclxufSBmcm9tICcuL2dpZnRzLXByb2R1Y3RzLm9wcyc7XHJcbmltcG9ydCB7IEFkanVzdEludmVudG9yeSwgR2V0SW52ZW50b3J5IH0gZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzJztcclxuXHJcbmNvbnN0IGdpZnRzUHJvZHVjdHNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvdmlldy86cHJvZHVjdF9ubycsIChyZXEsIHJlcykgPT4ge1xyXG4gIEdldFByb2R1Y3QocmVxLnBhcmFtcywgcmVzKTtcclxufSk7XHJcblxyXG4vKlxyXG4gKiBpbnF1aXJ5OiAvYXBpL2dpZnRzL3Byb2R1Y3RzXHJcbiAqL1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL2NhdGVnb3JpZXMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0Q2F0ZWdvcmllcyhyZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wb3N0KCcvY2F0ZWdvcnknLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkQ2F0ZWdvcnkocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmRlbGV0ZSgnL2NhdGVnb3J5JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZUNhdGVnb3J5KHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcblxyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL3NhbXBsZXMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0U2FtcGxlc09mQ2F0ZWdvcmllcyhyZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFByb2R1Y3QocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wb3N0KCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRQcm9kdWN0KHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wdXQoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFVwZGF0ZVByb2R1Y3QocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmRlbGV0ZSgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUHJvZHVjdChyZXEucXVlcnksIHJlcyk7XHJcbn0pO1xyXG5cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9pbnZlbnRvcnknLCAocmVxLCByZXMpID0+IHtcclxuICBHZXRJbnZlbnRvcnkocmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucHV0KCcvaW52ZW50b3J5JywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgQWRqdXN0SW52ZW50b3J5KHJlcS5ib2R5Ll9pZCwgcmVxLmJvZHkucXR5LCByZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdpZnRzUHJvZHVjdHNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFByb2R1Y3QocGFyYW1zOiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXBhcmFtcy5faWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBwcm9kdWN0IG5vLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpXHJcbiAgICAgIC5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQocGFyYW1zLl9pZCkgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocHJvZHVjdCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UHJvZHVjdHNCeUNhdGVnb3J5KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJyk7XHJcbiAgICBsZXQgZG9jcyA9IG51bGw7XHJcbiAgICBpZiAocmVxLnF1ZXJ5LmNhdGVnb3J5KSB7XHJcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChbJ14nLCByZXEucXVlcnkuY2F0ZWdvcnkudHJpbSgpXS5qb2luKCcnKSwgJ2knKTtcclxuICAgICAgZG9jcyA9IGF3YWl0IGRiQ29sbGVjdGlvbi5maW5kKHsgY2F0ZWdvcnk6IHJlZ2V4IH0pLnRvQXJyYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3MgPSBhd2FpdCBkYkNvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChkb2NzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRQcm9kdWN0KGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYm9keS5uYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpLmluc2VydE9uZSh7XHJcbiAgICAgIG5hbWU6IGJvZHkubmFtZSxcclxuICAgICAgaW1nOiBib2R5LmltZyxcclxuICAgICAgcHJpY2U6IGJvZHkucHJpY2UsXHJcbiAgICAgIGNhdGVnb3J5OiBib2R5LmNhdGVnb3J5LFxyXG4gICAgICBjb2xvcjogYm9keS5jb2xvcixcclxuICAgICAgcGFja2FnaW5nOiBib2R5LnBhY2thZ2luZyxcclxuICAgICAgbWF0ZXJpYWw6IGJvZHkubWF0ZXJpYWwsXHJcbiAgICAgIHNpemU6IGJvZHkuc2l6ZSxcclxuICAgICAgbm90ZTogYm9keS5ub3RlLFxyXG4gICAgICByZXRhaWxlcjogYm9keS5yZXRhaWxlcixcclxuICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYm9keS5faWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYlByb2R1Y3RzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpO1xyXG4gICAgYXdhaXQgZGJQcm9kdWN0cy51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoYm9keS5faWQpIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgbmFtZTogYm9keS5uYW1lLFxyXG4gICAgICAgICAgaW1nOiBib2R5LmltZyxcclxuICAgICAgICAgIHByaWNlOiBib2R5LnByaWNlLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IGJvZHkuY2F0ZWdvcnksXHJcbiAgICAgICAgICBjb2xvcjogYm9keS5jb2xvcixcclxuICAgICAgICAgIHBhY2thZ2luZzogYm9keS5wYWNrYWdpbmcsXHJcbiAgICAgICAgICBtYXRlcmlhbDogYm9keS5tYXRlcmlhbCxcclxuICAgICAgICAgIHNpemU6IGJvZHkuc2l6ZSxcclxuICAgICAgICAgIG5vdGU6IGJvZHkubm90ZSxcclxuICAgICAgICAgIHJldGFpbGVyOiBib2R5LnJldGFpbGVyXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QocXVlcnk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcXVlcnkuX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKVxyXG4gICAgICAuZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQocXVlcnkuX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEFkZFByb2R1Y3QsXHJcbiAgRGVsZXRlUHJvZHVjdCxcclxuICBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnksXHJcbiAgR2V0UHJvZHVjdCxcclxuICBVcGRhdGVQcm9kdWN0XHJcbn07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgZ2lmdHNTdGFmZnNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmdpZnRzU3RhZmZzUm91dGVyLnBvc3QoJy9sb2dpbicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAvLyBMb2dpbihyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1N0YWZmc1JvdXRlci5nZXQoJy9sb2dvdXQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gTG9nb3V0KHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzU3RhZmZzUm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAvLyBSZWdpc3RlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1N0YWZmc1JvdXRlci5kZWxldGUoJy9kZWxldGV1c2VyJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIERlbGV0ZVVzZXIocmVxLCByZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdpZnRzU3RhZmZzUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE1vbmdvRGIsIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IHJhbmRvbVN0cmluZyB9IGZyb20gJy4uL3N0cmluZy1vcHMnO1xyXG5cclxuaW1wb3J0IHsgYkxvZ2luIH0gZnJvbSAnLi9naWZ0cy11c2Vycy5vcHMnO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4vdXNlcnMtaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbixcclxuICBSZXNlcnZlSW52ZW50b3J5XHJcbn0gZnJvbSAnLi4vZ2lmdHMtcHJvZHVjdHMvZ2lmdHMtcHJvZHVjdHMtaW52ZW50b3J5Lm9wcyc7XHJcbmltcG9ydCB7IE5ld09yZGVyIH0gZnJvbSAnLi4vZ2lmdHMtb3JkZXJzL2dpZnRzLW9yZGVycy5vcHMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0Q2FydChzZXNzaW9uOiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGRiLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9KTtcclxuICAgIGNvbnNvbGUubG9nKGNhcnQpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNhcnQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFRvQ2FydChzZXNzaW9uOiBhbnksIGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBsZXQgcnNsdCA9IGF3YWl0IGRiLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9LFxyXG4gICAgICB7ICRwdWxsOiB7IHByb2R1Y3RzOiB7IHByb2R1Y3RJZDogbmV3IE9iamVjdElEKGJvZHkucHJvZHVjdC5faWQpIH0gfSB9XHJcbiAgICApO1xyXG4gICAgcnNsdCA9IGF3YWl0IGRiLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHB1c2g6IHtcclxuICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJZDogbmV3IE9iamVjdElEKGJvZHkucHJvZHVjdC5faWQpLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogYm9keS5xdHksXHJcbiAgICAgICAgICAgIG5hbWU6IGJvZHkucHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICBwcmljZTogYm9keS5wcm9kdWN0LnByaWNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7IHVwc2VydDogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUNhcnRRdHkocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbiAgfVxyXG4gIGlmICghcmVxLmJvZHkucHJvZHVjdElkIHx8ICFyZXEuYm9keS5xdHkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpLnVwZGF0ZU9uZShcclxuICAgICAge1xyXG4gICAgICAgIF9pZDogcmVxLnNlc3Npb24udXNlci5faWQsXHJcbiAgICAgICAgJ3Byb2R1Y3RzLnByb2R1Y3RJZCc6IHJlcS5ib2R5LnByb2R1Y3RJZFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgJ3Byb2R1Y3RzLiQucXR5JzogcmVxLmJvZHkucXR5LFxyXG4gICAgICAgICAgbW9kaWZpZWRPbjogbmV3IERhdGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVDYXJ0KHNlc3Npb246IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgZGIuZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlSW5DYXJ0KHNlc3Npb246IGFueSwgX2lkOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGxldCByc2x0ID0gYXdhaXQgZGIudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0sXHJcbiAgICAgIHsgJHB1bGw6IHsgcHJvZHVjdHM6IHsgcHJvZHVjdElkOiBuZXcgT2JqZWN0SUQoX2lkKSB9IH0gfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBDYXJ0Q2hlY2tvdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKFxyXG4gICAgIXJlcS5ib2R5LmNhcnQgfHxcclxuICAgICFyZXEuYm9keS5jYXJ0LmN1c3RvbWVyIHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lci5uYW1lIHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lci5tb2JpbGUgfHxcclxuICAgICFyZXEuYm9keS5jYXJ0LmN1c3RvbWVyLmFkZHJlc3NcclxuICApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBjdXN0b21lciBpbmZvcm1hdGlvbi4nKTtcclxuICB9XHJcbiAgaWYgKHJlcS5ib2R5LmNhcnQudG90YWwgPD0gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdObyBwcm9kdWN0IHRvIGNoZWNrb3V0LicpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGJNZW1iZXI6IGJvb2xlYW4gPSBiTG9naW4ocmVxLnNlc3Npb24pO1xyXG5cclxuICBsZXQgaWQgPSAnJztcclxuICBpZiAoYk1lbWJlcikge1xyXG4gICAgaWQgPSByZXEuc2Vzc2lvbi51c2VyLl9pZDtcclxuICB9IGVsc2Uge1xyXG4gICAgaWQgPSByYW5kb21TdHJpbmcoMjApO1xyXG4gIH1cclxuICBjb25zdCBjYXJ0SXRlbXM6IENhcnRJdGVtW10gPSByZXEuYm9keS5jYXJ0LmNhcnRJdGVtcztcclxuICBjb25zdCBjdXN0b21lciA9IHJlcS5ib2R5LmNhcnQuY3VzdG9tZXI7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyByZXNlcnZlIGludmVudG9yeSwgaXQgdGhyb3cgZXJyb3IgaW4gY2FzZSBvZiBmYWlsdXJlLlxyXG4gICAgYXdhaXQgUmVzZXJ2ZUludmVudG9yeShpZCwgY2FydEl0ZW1zKTtcclxuXHJcbiAgICBsZXQgaW5zZXJ0UnNsdCA9IGF3YWl0IE5ld09yZGVyKGN1c3RvbWVyLCBjYXJ0SXRlbXMpO1xyXG4gICAgaWYgKGluc2VydFJzbHQucmVzdWx0Lm4gPD0gMCkge1xyXG4gICAgICBhd2FpdCBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbihpZCk7XHJcbiAgICAgIHRocm93ICdDcmVhdGUgbmV3IG9yZGVyIGZhaWxlZC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB1cGRhdGVSc2x0ID0gYXdhaXQgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24oaWQpO1xyXG4gICAgY29uc29sZS5sb2codXBkYXRlUnNsdCk7XHJcblxyXG4gICAgaWYgKGJNZW1iZXIpIHtcclxuICAgICAgY29uc3QgZGJDYXJ0cyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgICAgbGV0IGRlbGV0ZVJzbHQgPSBhd2FpdCBkYkNhcnRzLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKGlkKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBvcmRlcklkOiBpZCB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBBZGRUb0NhcnQsXHJcbiAgQ2FydENoZWNrb3V0LFxyXG4gIERlbGV0ZUNhcnQsXHJcbiAgRGVsZXRlSW5DYXJ0LFxyXG4gIEdldENhcnQsXHJcbiAgVXBkYXRlQ2FydFF0eVxyXG59O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBMb2dpbixcclxuICBMb2dvdXQsXHJcbiAgUmVnaXN0ZXIsXHJcbiAgRGVsZXRlVXNlcixcclxuICBVc2VySW5mb1xyXG59IGZyb20gJy4vZ2lmdHMtdXNlcnMub3BzJztcclxuaW1wb3J0IHtcclxuICBBZGRUb0NhcnQsXHJcbiAgQ2FydENoZWNrb3V0LFxyXG4gIERlbGV0ZUNhcnQsXHJcbiAgRGVsZXRlSW5DYXJ0LFxyXG4gIEdldENhcnQsXHJcbiAgVXBkYXRlQ2FydFF0eVxyXG59IGZyb20gJy4vZ2lmdHMtY2FydHMub3BzJztcclxuXHJcbmNvbnN0IGdpZnRzVXNlcnNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbi8vIHVybDogL2FwaS9naWZ0cy91c2Vycy9cclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvbG9naW4nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgTG9naW4ocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5nZXQoJy9pbmZvJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFVzZXJJbmZvKHJlcS5zZXNzaW9uLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5nZXQoJy9sb2dvdXQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgTG9nb3V0KHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFJlZ2lzdGVyKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZGVsZXRlKCcvZGVsZXRldXNlcicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVVc2VyKHJlcS5zZXNzaW9uLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5nZXQoJy9jYXJ0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldENhcnQocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9jYXJ0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEFkZFRvQ2FydChyZXEuc2Vzc2lvbiwgcmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmRlbGV0ZSgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlQ2FydChyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIucHV0KCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBVcGRhdGVDYXJ0UXR5KHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZGVsZXRlKCcvY2FydC9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZUluQ2FydChyZXEuc2Vzc2lvbiwgcmVxLnF1ZXJ5Ll9pZCwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIucG9zdCgnL2NhcnQvY2hlY2tvdXQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQ2FydENoZWNrb3V0KHJlcSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c1VzZXJzUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE1vbmdvRGIsIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGVuY3J5cHQgfSBmcm9tICcuLi9zdHJpbmctb3BzJztcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJyk7XHJcbiAgZGIuY3JlYXRlSW5kZXgoJ3VpZCcsIHsgdW5pcXVlOiB0cnVlIH0pO1xyXG59KSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gTG9naW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlcS5zZXNzaW9uICYmIHJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHVpZDogcmVxLnNlc3Npb24udXNlci51aWQgfSk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBsZXQgZGJVc2VycyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKTtcclxuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSBhd2FpdCBkYlVzZXJzLmZpbmRPbmUoe1xyXG4gICAgICB1aWQ6IHJlcS5ib2R5LnVpZCxcclxuICAgICAgcHdkOiBlbmNyeXB0KHJlcS5ib2R5LnB3ZClcclxuICAgIH0pO1xyXG4gICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyB1aWQ6IHJlcS5zZXNzaW9uLnVzZXIudWlkIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnc2VydmVyIGVycm9yLicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTG9nb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChyZXEuc2Vzc2lvbiAmJiByZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXEuc2Vzc2lvbi51c2VyID0gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBSZWdpc3RlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoXHJcbiAgICAhcmVxLmJvZHkudWlkIHx8XHJcbiAgICAhcmVxLmJvZHkucHdkIHx8XHJcbiAgICAhcmVxLmJvZHkuZW1haWwgfHxcclxuICAgICFyZXEuYm9keS5maXJzdE5hbWUgfHxcclxuICAgICFyZXEuYm9keS5sYXN0TmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgbGV0IGRiVXNlcnMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJyk7XHJcbiAgICBsZXQgcnNsdCA9IGF3YWl0IGRiVXNlcnMuaW5zZXJ0T25lKHtcclxuICAgICAgdWlkOiByZXEuYm9keS51aWQsXHJcbiAgICAgIHB3ZDogZW5jcnlwdChyZXEuYm9keS5wd2QpLFxyXG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAgIGZpcnN0TmFtZTogcmVxLmJvZHkuZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogcmVxLmJvZHkubGFzdE5hbWUsXHJcbiAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgfSk7XHJcbiAgICBpZiAocnNsdC5pbnNlcnRlZENvdW50ID09PSAxKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyc2x0Lm9wc1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1JlZ2lzdGVyIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnUmVnaXN0ZXIgZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlVXNlcihzZXNzaW9uOiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdMb2dpbiBpcyByZXF1aXJlZC4nKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGRiLmNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJykuZGVsZXRlT25lKHtcclxuICAgICAgX2lkOiBzZXNzaW9uLnVzZXIuX2lkXHJcbiAgICB9KTtcclxuICAgIHNlc3Npb24udXNlciA9IG51bGw7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdVc2VyIGRlbGV0ZWQuJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VySW5mbyhzZXNzaW9uOiBhbnksIHJlcykge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgTm90IGxvZ2luLicpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xyXG4gICAgX2lkOiBzZXNzaW9uLnVzZXIuX2lkLFxyXG4gICAgdWlkOiBzZXNzaW9uLnVzZXIudWlkLFxyXG4gICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiTG9naW4oc2Vzc2lvbjogYW55KSB7XHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGJMb2dpbiwgTG9naW4sIExvZ291dCwgUmVnaXN0ZXIsIERlbGV0ZVVzZXIsIFVzZXJJbmZvIH07XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5mdW5jdGlvbiBEZWxldGUoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgbGV0IHVybCA9IGJvZHkudXJsO1xyXG4gIGlmIChib2R5LnF1ZXJ5cyAmJiBib2R5LnF1ZXJ5cy5sZW5ndGggPiAwKSB7XHJcbiAgICB1cmwgKz0gJz8nO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5LnF1ZXJ5cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB1cmwgKz0gYm9keS5xdWVyeVtpXTtcclxuICAgICAgdXJsICs9ICc9JztcclxuICAgICAgdXJsICs9IGJvZHkucXVlcnlWYWx1ZVtpXTtcclxuICAgIH1cclxuICB9XHJcbiAgQXhpb3MuZGVsZXRlKHVybClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBQb3N0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGxldCBoZWFkZXJzID0ge307XHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXEpO1xyXG4gIGxldCB1cmw6IHN0cmluZyA9IHJlcS5ib2R5LnVybDtcclxuICBpZiAocmVxLmJvZHkuaGVhZGVycykge1xyXG4gICAgaGVhZGVycyA9IHtcclxuICAgICAgaGVhZGVyczogcmVxLmJvZHkuaGVhZGVyc1xyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHJlcS5ib2R5LnBhcmFtZXRlcnMpIHtcclxuICAgIHVybCArPSAnPyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcS5ib2R5LnBhcmFtZXRlcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdXJsICs9IHJlcS5ib2R5LnBhcmFtZXRlcnNbaV0gKyAnPScgKyByZXEuYm9keS5wYXJhbWV0ZXJWYWx1ZVtpXSArICcmJztcclxuICAgIH1cclxuICB9XHJcbiAgQXhpb3MuZ2V0KHVybCwgaGVhZGVycykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICByZXMuc2VuZChyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBQdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgQXhpb3MucHV0KHJlcS5ib2R5LnVybCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICByZXMuc2VuZChyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBHZXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgQXhpb3MucG9zdChyZXEuYm9keS51cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmVzLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IERlbGV0ZSwgR2V0LCBQb3N0LCBQdXQgfTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERlbGV0ZSwgR2V0LCBQb3N0LCBQdXQgfSBmcm9tICcuL2h0dHAtcmVxdWVzdCc7XHJcblxyXG5jb25zdCBodHRwUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5odHRwUm91dGVyLnBvc3QoJycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxLmJvZHkudHlwZSA9PT0gJ0RFTEVURScpIHtcclxuICAgIERlbGV0ZShyZXEuYm9keSwgcmVzKTtcclxuICB9IGVsc2UgaWYgKHJlcS5ib2R5LnR5cGUgPT09ICdHRVQnKSB7XHJcbiAgICBHZXQocmVxLmJvZHksIHJlcyk7XHJcbiAgfSBlbHNlIGlmIChyZXEuYm9keS50eXBlID09PSAnUE9TVCcpIHtcclxuICAgIFBvc3QocmVxLmJvZHksIHJlcyk7XHJcbiAgfSBlbHNlIGlmIChyZXEuYm9keS50eXBlID09PSAnUFVUJykge1xyXG4gICAgUHV0KHJlcS5ib2R5LCByZXMpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBodHRwUm91dGVyO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBidXNBcnJpdmFsVXJsLCBoZWFkZXJDb25maWcgfSBmcm9tICcuL2x0YSc7XHJcbmltcG9ydCB7IGNoZWNrQnVzU3RvcExvY2FsbHkgfSBmcm9tICcuL2J1cy1zdG9wcyc7XHJcblxyXG5mdW5jdGlvbiBnZXRCdXNBcnJpdmFsKGJ1c1N0b3BDb2RlOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBidXNTdG9wQ29kZSA9IGJ1c1N0b3BDb2RlLnRyaW0oKTtcclxuICBpZiAoIWJ1c1N0b3BDb2RlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgQnVzU3RvcENvZGUuJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgYnVzU3RvcEluZm8gPSBjaGVja0J1c1N0b3BMb2NhbGx5KGJ1c1N0b3BDb2RlKTtcclxuICBpZiAoIWJ1c1N0b3BJbmZvKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0J1cyBTdG9wIG5vdCBmb3VuZC4nKTtcclxuICB9XHJcblxyXG4gIGxldCB1cmwgPSBgJHtidXNBcnJpdmFsVXJsfT9CdXNTdG9wQ29kZT0ke2J1c1N0b3BDb2RlfWA7XHJcbiAgQXhpb3MuZ2V0KHVybCwgaGVhZGVyQ29uZmlnKVxyXG4gICAgLnRoZW4ocmVzcG9zZSA9PiB7XHJcbiAgICAgIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAgIC5zZW5kKHsgYnVzU3RvcEluZm86IGJ1c1N0b3BJbmZvLCBidXNBcnJpdmFsOiByZXNwb3NlLmRhdGEgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRCdXNBcnJpdmFsO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBidXNTdG9wc1VybCwgaGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9sdGEnO1xyXG5pbXBvcnQgeyBCdXNTdG9wSW5mbyB9IGZyb20gJy4vYnVzLXN0b3BzLWludGVyZmFjZSc7XHJcblxyXG5sZXQgYnVzU3RvcHM6IEJ1c1N0b3BJbmZvW10gPSBbXTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEJ1c1N0b3BzRnJvbUx0YShza2lwPzogbnVtYmVyKTogUHJvbWlzZTxCdXNTdG9wSW5mb1tdPiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCB1cmwgPSBidXNTdG9wc1VybDtcclxuICAgIGlmIChza2lwKSB7XHJcbiAgICAgIHVybCArPSBgPyRza2lwPSR7c2tpcH1gO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgQXhpb3MuZ2V0KHVybCwgaGVhZGVyQ29uZmlnKTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XHJcbiAgICAgIHRocm93IHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnZhbHVlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxCdXNTdG9wcygpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IHNraXAgPSAwO1xyXG4gICAgbGV0IG5ld0J1c1N0b3BzOiBCdXNTdG9wSW5mb1tdID0gW107XHJcbiAgICBkbyB7XHJcbiAgICAgIG5ld0J1c1N0b3BzID0gYXdhaXQgZ2V0QnVzU3RvcHNGcm9tTHRhKHNraXApO1xyXG4gICAgICBsZXQgdGVtcCA9IGJ1c1N0b3BzO1xyXG4gICAgICBidXNTdG9wcyA9IHRlbXAuY29uY2F0KG5ld0J1c1N0b3BzKTtcclxuICAgICAgc2tpcCArPSA1MDA7XHJcbiAgICB9IHdoaWxlIChuZXdCdXNTdG9wcy5sZW5ndGggPT09IDUwMCk7XHJcbiAgICBjb25zb2xlLmxvZygnVG90YWwgYnVzIHN0b3BzOiAnICsgYnVzU3RvcHMubGVuZ3RoKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBidXNTdG9wcyA9IFtdO1xyXG4gICAgZ2V0QWxsQnVzU3RvcHMoKTtcclxuICB9XHJcbn1cclxuZ2V0QWxsQnVzU3RvcHMoKTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQnVzU3RvcExvY2FsbHkoYnVzU3RvcENvZGU6IHN0cmluZykge1xyXG4gIGlmICghYnVzU3RvcENvZGUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXNTdG9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGJ1c1N0b3BDb2RlID09PSBidXNTdG9wc1tpXS5CdXNTdG9wQ29kZSkge1xyXG4gICAgICByZXR1cm4gYnVzU3RvcHNbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QnVzU3RvcEluZm8oYnVzU3RvcENvZGU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYnVzU3RvcENvZGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBCdXMgU3RvcCBDb2RlLicpO1xyXG4gIH1cclxuICBsZXQgYnVzU3RvcEluZm8gPSBjaGVja0J1c1N0b3BMb2NhbGx5KGJ1c1N0b3BDb2RlKTtcclxuICBpZiAoYnVzU3RvcEluZm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChidXNTdG9wSW5mbyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnQnVzIFN0b3AgSW5mbyBub3QgZm91bmQuJyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGJ1c1N0b3BzLCBjaGVja0J1c1N0b3BMb2NhbGx5LCBnZXRCdXNTdG9wSW5mbyB9O1xyXG4iLCJjb25zdCBsdGFBY2NvdW50S2V5ID0gJzZzVnpmOXpYUmFDZ2tKVWRqeEl3MkE9PSc7XHJcblxyXG5jb25zdCBidXNBcnJpdmFsVXJsID1cclxuICAnaHR0cDovL2RhdGFtYWxsMi5teXRyYW5zcG9ydC5zZy9sdGFvZGF0YXNlcnZpY2UvQnVzQXJyaXZhbHYyJztcclxuY29uc3QgYnVzU3RvcHNVcmwgPSAnaHR0cDovL2RhdGFtYWxsMi5teXRyYW5zcG9ydC5zZy9sdGFvZGF0YXNlcnZpY2UvQnVzU3RvcHMnO1xyXG5cclxuY29uc3QgaGVhZGVyQ29uZmlnID0ge1xyXG4gIGhlYWRlcnM6IHtcclxuICAgIEFjY291bnRLZXk6IGx0YUFjY291bnRLZXlcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBidXNBcnJpdmFsVXJsLCBidXNTdG9wc1VybCwgaGVhZGVyQ29uZmlnIH07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgZ2V0QnVzQXJyaXZhbCBmcm9tICcuL2J1cy1hcnJpdmFsJztcclxuaW1wb3J0IHsgZ2V0QnVzU3RvcEluZm8gfSBmcm9tICcuL2J1cy1zdG9wcyc7XHJcblxyXG4vLyB1cmw6IC9hcGkvbHRhL2J1c1xyXG5jb25zdCBidXNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmJ1c1JvdXRlci5nZXQoJy9idXNBcnJpdmFsLzpidXNTdG9wQ29kZScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBnZXRCdXNBcnJpdmFsKHJlcS5wYXJhbXMuYnVzU3RvcENvZGUsIHJlcyk7XHJcbn0pO1xyXG5cclxuYnVzUm91dGVyLmdldCgnL2J1c1N0b3AvOmJ1c1N0b3BDb2RlJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGdldEJ1c1N0b3BJbmZvKHJlcS5wYXJhbXMuYnVzU3RvcENvZGUsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgYnVzUm91dGVyIH07XHJcbiIsImltcG9ydCAqIGFzIE94Zm9yZERpY3Rpb25hcnkgZnJvbSAnb3hmb3JkLWRpY3Rpb25hcnknOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBESUNUID0gbmV3IE94Zm9yZERpY3Rpb25hcnkoe1xyXG4gIGFwcF9pZDogJzAzMTRlOWUyJyxcclxuICBhcHBfa2V5OiAnNWE2YzI1ODk0NzRhMmY4M2NjZDY5ZjM5N2JmZWM3YTInLFxyXG4gIHNvdXJjZV9sYW5nOiAnZW4nXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ2hlY2tPeGZvcmREaWN0aW9uYXJ5KHdvcmQ6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghd29yZCB8fCAhd29yZC50cmltKCkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCB3b3JkLicpO1xyXG4gIH1cclxuXHJcbiAgRElDVC5kZWZpbml0aW9ucyh3b3JkLnRyaW0oKSkudGhlbihcclxuICAgIGRlZmluaXRpb25zID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRlZmluaXRpb25zKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyKTtcclxuICAgIH1cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja094Zm9yZERpY3Rpb25hcnk7XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxubGV0IGx1bmNoUGFscyA9IFtdO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFBhbHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhbHNDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1wYWxzJyk7XHJcbiAgICBsdW5jaFBhbHMgPSBhd2FpdCBwYWxzQ29sbGVjdGlvblxyXG4gICAgICAuZmluZCgpXHJcbiAgICAgIC5zb3J0KHsgbmFtZTogMSB9KVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQYWxzKHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAobHVuY2hQYWxzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChsdW5jaFBhbHMpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQobHVuY2hQYWxzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRQYWwobmFtZTogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFsc0NvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXBhbHMnKTtcclxuICAgIHBhbHNDb2xsZWN0aW9uLmluc2VydE9uZSh7IG5hbWU6IG5hbWUgfSk7XHJcbiAgICByZWZyZXNoUGFscygpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZVBhbChuYW1lOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBuYW1lIHRvIGRlbGV0ZS4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYWxzQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcGFscycpO1xyXG4gICAgcGFsc0NvbGxlY3Rpb24uZGVsZXRlT25lKHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UGFsc0F0dGVuZGFuY2UocmVzOiBSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb25zdCBhdHRlbmRhbmNlcyA9IGF3YWl0IGNvbGxlY3Rpb25cclxuICAgICAgLmFnZ3JlZ2F0ZShbXHJcbiAgICAgICAgeyAkdW53aW5kOiAnJGF0dGVuZGVlcycgfSxcclxuICAgICAgICB7ICRncm91cDogeyBfaWQ6ICckYXR0ZW5kZWVzJywgYXR0ZW5kYW5jZTogeyAkc3VtOiAxIH0gfSB9LFxyXG4gICAgICAgIHsgJHByb2plY3Q6IHsgbmFtZTogJyRfaWQnLCBhdHRlbmRhbmNlOiAnJGF0dGVuZGFuY2UnIH0gfVxyXG4gICAgICBdKVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGF0dGVuZGFuY2VzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRQYWwsIERlbGV0ZVBhbCwgR2V0UGFscywgR2V0UGFsc0F0dGVuZGFuY2UgfTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UmVjb3JkcyhyZXM6IFJlc3BvbnNlLCBxdHk/OiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcmVjb3JkcycpO1xyXG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGNvbGxlY3Rpb25cclxuICAgICAgLmZpbmQoe30pXHJcbiAgICAgIC5zb3J0KHsgY3JlYXRlZE9uOiAtMSB9KVxyXG4gICAgICAubGltaXQocXR5IHwgMzApXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVjb3Jkcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkUmVjb3JkKHBheWVyOiBzdHJpbmcsIGF0dGVuZGVlczogc3RyaW5nW10sIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXBheWVyIHx8ICFhdHRlbmRlZXMgfHwgYXR0ZW5kZWVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgcGFyYW1zIHRvIGFkZC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZSh7XHJcbiAgICAgIHBheWVyOiBwYXllcixcclxuICAgICAgYXR0ZW5kZWVzOiBhdHRlbmRlZXMsXHJcbiAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0Vycm9yIGF0IHNlcnZlci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZVJlY29yZChfaWQ6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgcmVjb3JkIHRvIGRlbGV0ZS4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb2xsZWN0aW9uLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKF9pZCkgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWRkUmVjb3JkLCBEZWxldGVSZWNvcmQsIEdldFJlY29yZHMgfTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCBDaGVja094Zm9yZERpY3Rpb25hcnkgZnJvbSAnLi9kaWN0aW9uYXJ5JztcclxuaW1wb3J0IHsgQWRkUGFsLCBEZWxldGVQYWwsIEdldFBhbHMsIEdldFBhbHNBdHRlbmRhbmNlIH0gZnJvbSAnLi9sdW5jaGZ1bi1wYWxzJztcclxuaW1wb3J0IHsgQWRkUmVjb3JkLCBEZWxldGVSZWNvcmQsIEdldFJlY29yZHMgfSBmcm9tICcuL2x1bmNoZnVuLXJlY29yZHMnO1xyXG5cclxuY29uc3QgZGljdGlvbmFyeVJvdXRlciA9IFJvdXRlcigpO1xyXG5jb25zdCBsdW5jaGZ1blJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZGljdGlvbmFyeVJvdXRlci5nZXQoJy9veGZvcmQvOndvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQ2hlY2tPeGZvcmREaWN0aW9uYXJ5KHJlcS5wYXJhbXMud29yZCwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9wYWxzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFBhbHMocmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLnBvc3QoJy9wYWwnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUGFsKHJlcS5ib2R5Lm5hbWUsIHJlcyk7XHJcbn0pO1xyXG5sdW5jaGZ1blJvdXRlci5kZWxldGUoJy9wYWwnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUGFsKHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9yZWNvcmRzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFJlY29yZHMocmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLnBvc3QoJy9yZWNvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUmVjb3JkKHJlcS5ib2R5LnBheWVyLCByZXEuYm9keS5hdHRlbmRlZXMsIHJlcyk7XHJcbn0pO1xyXG5sdW5jaGZ1blJvdXRlci5kZWxldGUoJy9yZWNvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUmVjb3JkKHJlcS5xdWVyeS5faWQsIHJlcyk7XHJcbn0pO1xyXG5cclxubHVuY2hmdW5Sb3V0ZXIuZ2V0KCcvc3RhdHMvYXR0ZW5kYW5jZScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRQYWxzQXR0ZW5kYW5jZShyZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGRpY3Rpb25hcnlSb3V0ZXIsIGx1bmNoZnVuUm91dGVyIH07XHJcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50LCBEYiwgT2JqZWN0SUQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IE1PTkdPX1VSTCA9XHJcbiAgJ21vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5AY2x1c3RlcjAtZHh3a2cubW9uZ29kYi5uZXQvaW5zZz9yZXRyeVdyaXRlcz10cnVlJztcclxuXHJcbmxldCBkYXRhYmFzZTogRGI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0RGIoKTogUHJvbWlzZTxEYj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KE1PTkdPX1VSTCwge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChkYXRhYmFzZSA9IGNsaWVudC5kYignaW5zZycpKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyAnRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQuJztcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIE1vbmdvRGIoKTogUHJvbWlzZTxEYj4ge1xyXG4gIGlmIChkYXRhYmFzZSkge1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEluaXREYigpO1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERiQ29sbGVjdGlvbihuYW1lOiBzdHJpbmcpIHtcclxuICBpZiAoZGF0YWJhc2UpIHtcclxuICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEluaXREYigpO1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24obmFtZSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfTtcclxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xyXG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCBhcGlSb3V0ZXIgZnJvbSAnLi9hcGktcm91dGVyJztcclxuXHJcbi8vIEV4cHJlc3Mgc2VydmVyXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgSE9TVCA9ICdsb2NhbGhvc3QnO1xyXG5jb25zdCBQT1JUID0gODA7XHJcblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcblxyXG5hcHAudXNlKFxyXG4gIHNlc3Npb24oe1xyXG4gICAgc2VjcmV0OiAnaW5zZy15Yy1seS0xNycsXHJcbiAgICByZXNhdmU6IGZhbHNlLFxyXG4gICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWUsXHJcbiAgICBjb29raWU6IHtcclxuICAgICAgbWF4QWdlOiAxMDAwICogNjAgKiA2MCAqIDI0IC8vIG1pbGxzZWNvbmRzIG9mIDI0aHJzICB9XHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxuXHJcbmFwcC51c2UoJy9hcGknLCBhcGlSb3V0ZXIpO1xyXG5cclxuYXBwLmdldCgnLycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmRGaWxlKGpvaW4oX19kaXJuYW1lLCAnL2NsaWVudC9pbmRleC5odG1sJykpO1xyXG59KTtcclxuXHJcbi8vIFNlcnZlciBzdGF0aWMgZmlsZXMgZnJvbSAvY2xpZW50XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoam9pbihfX2Rpcm5hbWUsICcvY2xpZW50JykpKTtcclxuXHJcbi8vIGVycm9yIGhhbmRsaW5nIC0gMVxyXG5hcHAuYWxsKCcvKicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmRGaWxlKGpvaW4oX19kaXJuYW1lLCAnL2NsaWVudC9pbmRleC5odG1sJykpO1xyXG59KTtcclxuLy8gZXJyb3IgaGFuZGxpbmcgLSAyXHJcbmFwcC51c2UoKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdJc3N1ZSBoYXBwZW5lZC4gUGxlYXNlIHJldHJ5IGxhdGVyIScpO1xyXG59KTtcclxuXHJcbi8vIFN0YXJ0IHVwIHRoZSBOb2RlIHNlcnZlclxyXG4vLyBodHRwXHJcbmFwcC5zZXQoJ2RvbWFpbicsIEhPU1QpO1xyXG5hcHAuc2V0KCdwb3J0JywgUE9SVCk7XHJcbi8vIGFwcC5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coYE5vZGUgc2VydmVyIGxpc3RlbmluZyBvbiBodHRwOi8vJHtIT1NUfToke1BPUlR9YCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gaHR0cHMgZGVmYXVsdCBwb3J0XHJcbmNvbnN0IGh0dHBzT3B0aW9ucyA9IHtcclxuICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcvY2VydC9pbnNnLmtleScpKSxcclxuICBrZXk6IGZzLnJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy9jZXJ0L2luc2cuY3J0JykpXHJcbn07XHJcbmNvbnN0IHNlcnZlciA9IGh0dHBzLmNyZWF0ZVNlcnZlcihodHRwc09wdGlvbnMsIGFwcCk7XHJcbnNlcnZlci5saXN0ZW4oNDQzKTtcclxuLy8gZXhwb3J0IHsgc2VydmVyIH07XHJcbiIsImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5cclxuY29uc3QgYWxnb3JpdGhtID0gJ2Flcy0xOTItY2JjJztcclxuY29uc3QgcGFzc3dvcmQgPSAnaW5TR3ljODMnO1xyXG5jb25zdCBrZXkgPSBjcnlwdG8uc2NyeXB0U3luYyhwYXNzd29yZCwgJ3NhbHQnLCAyNCk7XHJcbmNvbnN0IGl2ID0gQnVmZmVyLmFsbG9jKDE2LCAwKTtcclxuXHJcbmZ1bmN0aW9uIGVuY3J5cHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGNpcGhlciA9IGNyeXB0by5jcmVhdGVDaXBoZXJpdihhbGdvcml0aG0sIGtleSwgaXYpO1xyXG4gICAgbGV0IGNyeXB0ZWQ6IHN0cmluZyA9IGNpcGhlci51cGRhdGUodGV4dCwgJ3V0ZjgnLCAnaGV4Jyk7XHJcbiAgICBjcnlwdGVkICs9IGNpcGhlci5maW5hbCgnaGV4Jyk7XHJcbiAgICByZXR1cm4gY3J5cHRlZDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZW5jcnlwdCA9PiAnLCBlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY3J5cHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGRlY2lwaGVyID0gY3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoYWxnb3JpdGhtLCBrZXksIGl2KTtcclxuICAgIGxldCBkZWM6IHN0cmluZyA9IGRlY2lwaGVyLnVwZGF0ZSh0ZXh0LCAnaGV4JywgJ3V0ZjgnKTtcclxuICAgIGRlYyArPSBkZWNpcGhlci5maW5hbCgndXRmOCcpO1xyXG4gICAgcmV0dXJuIGRlYztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZGVjcnlwdCA9PiAnLCBlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIHN0cmluZyBvcGVyYXRpb25cclxuICovXHJcbmVudW0gUmFuZG9tVHlwZXMge1xyXG4gIENhcGl0YWwsXHJcbiAgTnVtYmVyLFxyXG4gIFN0cmluZ1xyXG59XHJcblxyXG4vLyByZXR1cm4gc3RyaW5nIG9mIHJhbmRvbSBudW1iZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLk51bWJlciwgbGVuZ3RoKTtcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gY2FwaXRhbCBjaGFyYWN0ZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tQ2FwaXRhbHMobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIHJldHVybiByYW5kb20oUmFuZG9tVHlwZXMuQ2FwaXRhbCwgbGVuZ3RoKTtcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gY2hhcmFjdGVycyBvciBudW1iZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLlN0cmluZywgbGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tKHR5cGU6IFJhbmRvbVR5cGVzLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgbGV0IHJTdHJpbmc6IHN0cmluZyA9ICcnO1xyXG4gIGlmICh0eXBlID09PSBSYW5kb21UeXBlcy5TdHJpbmcpIHtcclxuICAgIHJTdHJpbmcgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuTnVtYmVyKSB7XHJcbiAgICByU3RyaW5nID0gJzAxMjM0NTY3ODknO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuQ2FwaXRhbCkge1xyXG4gICAgclN0cmluZyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHtcclxuICAgIHJlc3VsdCArPSByU3RyaW5nW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJTdHJpbmcubGVuZ3RoKV07XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZW5jcnlwdCxcclxuICBkZWNyeXB0LFxyXG4gIHJhbmRvbUNhcGl0YWxzLFxyXG4gIHJhbmRvbU51bWJlcixcclxuICByYW5kb21TdHJpbmcsXHJcbiAgUmFuZG9tVHlwZXNcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm94Zm9yZC1kaWN0aW9uYXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==