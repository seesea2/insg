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
exports.giftsRouter = giftsRouter;
// url: /api/gifts
giftsRouter.use('/products', gifts_products_router_1.giftsProductsRouter);
giftsRouter.use('/orders', gifts_orders_router_1.giftsOrdersRouter);
giftsRouter.use('/users', gifts_users_router_1.giftsUsersRouter);
giftsRouter.use('/staffs', gifts_staffs_router_1.giftsStaffsRouter);


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
var router_1 = __webpack_require__(/*! ./lunchfun-and-dictionary/router */ "./lunchfun-and-dictionary/router.ts");
var api_gifts_router_1 = __webpack_require__(/*! ./api-gifts-router */ "./api-gifts-router.ts");
var email_ops_1 = __webpack_require__(/*! ./email/email.ops */ "./email/email.ops.ts");
var apiRouter = express_1.Router();
exports.apiRouter = apiRouter;
// url: /api
apiRouter.use('/dictionary', router_1.dictionaryRouter);
apiRouter.use('/lunchfun', router_1.lunchfunRouter);
apiRouter.use('/gifts', api_gifts_router_1.giftsRouter);
// msg from users; forward it via nodemailer.
apiRouter.post('/msg', function (req, res) {
    email_ops_1.SendEmail(req.body, res);
});
// error handling
apiRouter.all('/*', function (req, res) {
    return res.status(400).send('Invalid Request');
});


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
exports.SendEmail = SendEmail;


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
exports.giftsOrdersRouter = giftsOrdersRouter;
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
exports.giftsProductsRouter = giftsProductsRouter;
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
exports.giftsStaffsRouter = giftsStaffsRouter;
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
exports.giftsUsersRouter = giftsUsersRouter;
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
                    console.log(e_2);
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
    return res
        .status(200)
        .send({
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
exports.CheckOxfordDictionary = CheckOxfordDictionary;


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
                    console.log(e_2);
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
    dictionary_1.CheckOxfordDictionary(req.params.word, res);
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
                    console.log(e_2);
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
app.use('/api', api_router_1.apiRouter);
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
app.listen(app.get('port'), function () {
    console.log("Node server listening on http://" + HOST + ":" + PORT);
});
// https default port
// const httpsOptions = {
//   cert: fs.readFileSync(join(__dirname, '/keys/certificate.pem')),
//   key: fs.readFileSync(join(__dirname, '/keys/privatekey.pem'))
// };
// const server = https.createServer(httpsOptions, app);
// server.listen(443);
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
        console.log('encrypt => ', e);
    }
}
exports.encrypt = encrypt;
function decrypt(text) {
    var decipher = crypto.createDecipheriv(algorithm, key, iv);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}
exports.decrypt = decrypt;
/*
 * string operation
 */
// Adjust string to better display. Capital first character of each word.
function trimToFirstCapital(org_string) {
    if (!org_string) {
        return '';
    }
    var output_str = '';
    var str_split = org_string.trim().split(' ');
    str_split.forEach(function (org) {
        org = org.trim();
        if (!org) {
            return;
        }
        else if (output_str) {
            output_str +=
                ' ' + org.charAt(0).toUpperCase() + org.substring(1).toLowerCase();
        }
        else {
            output_str = org.charAt(0).toUpperCase() + org.substring(1).toLowerCase();
        }
    });
    return output_str;
}
exports.trimToFirstCapital = trimToFirstCapital;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLWdpZnRzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hcGktcm91dGVyLnRzIiwid2VicGFjazovLy8uL2VtYWlsL2VtYWlsLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtdXNlcnMvZ2lmdHMtY2FydHMub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvZGljdGlvbmFyeS50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9sdW5jaGZ1bi1wYWxzLnRzIiwid2VicGFjazovLy8uL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L2x1bmNoZnVuLXJlY29yZHMudHMiLCJ3ZWJwYWNrOi8vLy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvcm91dGVyLnRzIiwid2VicGFjazovLy8uL21vbmdvZGItb3BzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zdHJpbmctb3BzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm94Zm9yZC1kaWN0aW9uYXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FB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LElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQ3RDLE9BQU8sR0FBRyxZQUFZLENBQUM7S0FDeEI7U0FBTSxJQUFJLElBQUksS0FBSyxXQUFXLENBQUMsT0FBTyxFQUFFO1FBQ3ZDLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQztLQUN4QztTQUFNO1FBQ0wsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUksTUFBTSxHQUFXLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQy9CLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7QUN4RkQsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIudHNcIik7XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IGdpZnRzUHJvZHVjdHNSb3V0ZXIgfSBmcm9tICcuL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlcic7XHJcbmltcG9ydCB7IGdpZnRzT3JkZXJzUm91dGVyIH0gZnJvbSAnLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlcic7XHJcbmltcG9ydCB7IGdpZnRzVXNlcnNSb3V0ZXIgfSBmcm9tICcuL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlcic7XHJcbmltcG9ydCB7IGdpZnRzU3RhZmZzUm91dGVyIH0gZnJvbSAnLi9naWZ0cy1zdGFmZnMvZ2lmdHMtc3RhZmZzLXJvdXRlcic7XHJcblxyXG5jb25zdCBnaWZ0c1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpL2dpZnRzXHJcbmdpZnRzUm91dGVyLnVzZSgnL3Byb2R1Y3RzJywgZ2lmdHNQcm9kdWN0c1JvdXRlcik7XHJcbmdpZnRzUm91dGVyLnVzZSgnL29yZGVycycsIGdpZnRzT3JkZXJzUm91dGVyKTtcclxuZ2lmdHNSb3V0ZXIudXNlKCcvdXNlcnMnLCBnaWZ0c1VzZXJzUm91dGVyKTtcclxuZ2lmdHNSb3V0ZXIudXNlKCcvc3RhZmZzJywgZ2lmdHNTdGFmZnNSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IHsgZ2lmdHNSb3V0ZXIgfTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBkaWN0aW9uYXJ5Um91dGVyLFxyXG4gIGx1bmNoZnVuUm91dGVyXHJcbn0gZnJvbSAnLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnaWZ0c1JvdXRlciB9IGZyb20gJy4vYXBpLWdpZnRzLXJvdXRlcic7XHJcbmltcG9ydCB7IFNlbmRFbWFpbCB9IGZyb20gJy4vZW1haWwvZW1haWwub3BzJztcclxuXHJcbmNvbnN0IGFwaVJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpXHJcbmFwaVJvdXRlci51c2UoJy9kaWN0aW9uYXJ5JywgZGljdGlvbmFyeVJvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9sdW5jaGZ1bicsIGx1bmNoZnVuUm91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2dpZnRzJywgZ2lmdHNSb3V0ZXIpO1xyXG5cclxuLy8gbXNnIGZyb20gdXNlcnM7IGZvcndhcmQgaXQgdmlhIG5vZGVtYWlsZXIuXHJcbmFwaVJvdXRlci5wb3N0KCcvbXNnJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFNlbmRFbWFpbChyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGluZ1xyXG5hcGlSb3V0ZXIuYWxsKCcvKicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgUmVxdWVzdCcpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGFwaVJvdXRlciB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IG91dGxvb2tfdHJhbnNwb3J0ZXIgPSBjcmVhdGVUcmFuc3BvcnQoe1xyXG4gIHNlcnZpY2U6ICdvdXRsb29rJyxcclxuICBhdXRoOiB7XHJcbiAgICB1c2VyOiAneXVhbmNoYW9Ab3V0bG9vay5zZycsXHJcbiAgICBwYXNzOiAncGluZ21lSEM4MydcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgb3V0bG9va19tYWlsT3B0aW9ucyA9IHtcclxuICBmcm9tOiAneXVhbmNoYW9Ab3V0bG9vay5zZycsXHJcbiAgdG86ICdzZWVzZWEyQGdtYWlsLmNvbScsXHJcbiAgc3ViamVjdDogbnVsbCxcclxuICBodG1sOiBudWxsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBTZW5kRW1haWwoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgY29uc3QgZW1haWxIdG1sOiBzdHJpbmcgPVxyXG4gICAgJzwhRE9DVFlQRSBodG1sPjxoZWFkPicgK1xyXG4gICAgJzxtZXRhIGh0dHAtZXF1aXY9XCJjb250ZW50LXR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sO2NoYXJzZXQ9VVRGLThcIj48L2hlYWQ+JyArXHJcbiAgICBgPGJvZHk+PGJyPjxiPk1lc3NhZ2UgZnJvbSBVc2VyICR7Ym9keS5uYW1lfWAgK1xyXG4gICAgJyA6PC9iPjxicj48YnI+JyArXHJcbiAgICBgPHA+PGI+RW1haWw6IDwvYj4gJHtib2R5LmVtYWlsfWAgK1xyXG4gICAgJzwvcD4nICtcclxuICAgIGA8cD48Yj5Nb2JpbGU6IDwvYj4gJHtib2R5Lm1vYmlsZX1gICtcclxuICAgICc8L3A+JyArXHJcbiAgICBgPHA+PGI+TWVzc2FnZTogPC9iPiAke2JvZHkubWVzc2FnZX1gICtcclxuICAgICc8L3A+JyArXHJcbiAgICAnPC9ib2R5PjwvaHRtbD4nO1xyXG5cclxuICBvdXRsb29rX21haWxPcHRpb25zLnN1YmplY3QgPSAnVXNlciBJbnF1aXJ5JztcclxuICBvdXRsb29rX21haWxPcHRpb25zLmh0bWwgPSBlbWFpbEh0bWw7XHJcbiAgb3V0bG9va190cmFuc3BvcnRlci5zZW5kTWFpbChvdXRsb29rX21haWxPcHRpb25zKTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNlbmRFbWFpbCB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IGdpZnRzT3JkZXJzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyBvcmRlciBsaXN0IHdpdGggb3JkZXJfbm8sIHN0YXR1cyAmIHN0YWZmIGlkIHRvIGZvbGxvdy11cC5cclxuZ2lmdHNPcmRlcnNSb3V0ZXIuZ2V0KCcvYWxsT3JkZXJzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbi8vIHVwZGF0ZSBvcmRlciBzdGF0dXMgYnkgc3RhZmYgZm9sbG93LXVwLlxyXG5naWZ0c09yZGVyc1JvdXRlci5wdXQoJy91cGRhdGVTdGF0dXMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5Lm5ld19zdGF0dXMgfHwgIXJlcS5ib2R5LnNubyB8fCAhcmVxLmJvZHkub3JkZXJfbm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRmFpbGVkLiBQbGVhZXMgcmV2aWV3IGlucHV0cy4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgMTogcmVxLmJvZHkub3JkZXJfbm8sXHJcbiAgICAyOiByZXEuYm9keS5zbm8sXHJcbiAgICAzOiBEYXRlLm5vdygpLFxyXG4gICAgNDogcmVxLnNlc3Npb24uc3RhZmYuaWQsXHJcbiAgICA1OiByZXEuYm9keS5uZXdfc3RhdHVzLFxyXG4gICAgNjogcmVxLmJvZHkubm90ZSB8fCBudWxsXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuLy8gc3RhZmYgdG8gdXBkYXRlIGNvbnRhY3QgaW5mbyBvZiB0aGUgb3JkZXIuXHJcbmdpZnRzT3JkZXJzUm91dGVyLnB1dCgnL3VwZGF0ZUNvbnRhY3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ09yZGVyX25vIGVtcHR5LicpO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICAhcmVxLmJvZHkuZW1haWwgfHxcclxuICAgICFyZXEuYm9keS5lbWFpbC5pbmNsdWRlcygnQCcpIHx8XHJcbiAgICAhcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJy4nKSB8fFxyXG4gICAgcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJy8nKSB8fFxyXG4gICAgcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJ1xcXFwnKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGVtYWlsLicpO1xyXG4gIH0gZWxzZSBpZiAoIXJlcS5ib2R5Lm5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBuYW1lLicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAxOiByZXEuYm9keS5uYW1lLFxyXG4gICAgMjogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAzOiByZXEuYm9keS5tb2JpbGUgfHwgbnVsbCxcclxuICAgIDQ6IHJlcS5ib2R5LmNvbXBhbnkgfHwgbnVsbCxcclxuICAgIDU6IHJlcS5ib2R5Lm1vYmlsZTIgfHwgbnVsbCxcclxuICAgIDY6IHJlcS5ib2R5LmFkZHIgfHwgbnVsbCxcclxuICAgIDc6IHJlcS5ib2R5Lm9yZGVyX25vXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuLy8gc3RhZmYgdG8gY2hhbmdlIG9yZGVyIGRldGFpbHMgZS5nLiBwcmljZSwgcXR5LCBpbiBjYXNlIHVzZXJzIGNoYW5nZWQgbWluZC5cclxuLy8gc3RhZmYgbWF5IGNoYW5nZSBzdGF0dXMgb2Ygc3BlY2lmaWMgcHJvZHVjdCBvZiB0aGUgb3JkZXIuXHJcbmdpZnRzT3JkZXJzUm91dGVyLnB1dCgnL3VwZGF0ZU9yZGVySXRlbScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAoIXJlcS5zZXNzaW9uIHx8ICFyZXEuc2Vzc2lvbi5zdGFmZi5pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ZhaWxlZC4gSW52YWxpZCBPcmRlciBOby4nKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5zbm8gfHwgcmVxLmJvZHkuc25vID09PSAnJykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdGYWlsZWQuIEludmFsaWQgT3JkZXIgU25vLicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAxOiByZXEuYm9keS5uZXdfc2FsZV9wcmljZSxcclxuICAgIDI6IHJlcS5ib2R5Lm5ld19xdHksXHJcbiAgICAzOiByZXEuYm9keS5uZXdfc3RhdHVzLFxyXG4gICAgNDogcmVxLmJvZHkub3JkZXJfbm8sXHJcbiAgICA1OiByZXEuYm9keS5zbm9cclxuICB9O1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBnaWZ0c09yZGVyc1JvdXRlciB9O1xyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcbmltcG9ydCB7IGJMb2dpbiB9IGZyb20gJy4uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLm9wcyc7XHJcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnLi4vZ2lmdHMtdXNlcnMvdXNlcnMtaW50ZXJmYWNlJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIE5ld09yZGVyKGN1c3RvbWVyLCBjYXJ0SXRlbXM6IENhcnRJdGVtW10pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJPcmRlcnMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLW9yZGVycycpO1xyXG4gICAgbGV0IGluc2VydFJzbHQgPSBkYk9yZGVycy5pbnNlcnRPbmUoe1xyXG4gICAgICBjcmVhdGVkX29uOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBzaGlwcGluZzoge1xyXG4gICAgICAgIG5hbWU6IGN1c3RvbWVyLm5hbWUsXHJcbiAgICAgICAgbW9iaWxlOiBjdXN0b21lci5tb2JpbGUsXHJcbiAgICAgICAgYWRkcmVzczogY3VzdG9tZXIuYWRkcmVzcyxcclxuICAgICAgICBtZXNzYWdlOiBjdXN0b21lci5tZXNzYWdlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBheW1lbnQ6IHsgbWV0aG9kOiAndmlzYScsIHRyYW5zYWN0aW9uX2lkOiAnMjMxMjIxMzMxMlhYWFREJyB9LFxyXG4gICAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtc1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnaW5zZXJ0UnNsdDogJywgaW5zZXJ0UnNsdCk7XHJcbiAgICByZXR1cm4gaW5zZXJ0UnNsdDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyAnY3JlYXRlIG5ldyBvcmRlciBmYWlsZWQuJztcclxuICB9XHJcbn1cclxuLy8gYXN5bmMgZnVuY3Rpb24gR2V0Q2FydChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGxldCBjYXJ0ID0gYXdhaXQgZGJcclxuLy8gICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJylcclxuLy8gICAgICAgLmZpbmQoeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0pXHJcbi8vICAgICAgIC50b0FycmF5KCk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNhcnQpO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUNhcnRRdHkocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG4vLyAgIGlmICghcmVxLmJvZHkucHJvZHVjdElkIHx8ICFyZXEuYm9keS5xdWFudGl0eSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgbGV0IHJzbHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpLnVwZGF0ZU9uZShcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQsXHJcbi8vICAgICAgICAgJ3Byb2R1Y3RzLnByb2R1Y3RJZCc6IHJlcS5ib2R5LnByb2R1Y3RJZFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgJHNldDoge1xyXG4vLyAgICAgICAgICAgJ3Byb2R1Y3RzLiQucXVhbnRpdHknOiByZXEuYm9keS5xdWFudGl0eSxcclxuLy8gICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhyc2x0KTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhcnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgYXdhaXQgZGJcclxuLy8gICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJylcclxuLy8gICAgICAgLmRlbGV0ZU9uZSh7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBEZWxldGVDYXJ0UHJvZHVjdChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpLnVwZGF0ZU9uZShcclxuLy8gICAgICAgeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICAkc2V0OiB7IG1vZGlmaWVkT246IG5ldyBEYXRlKCkgfSxcclxuLy8gICAgICAgICAkcHVsbDoge1xyXG4vLyAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuLy8gICAgICAgICAgICAgcHJvZHVjdElkOiByZXEuYm9keS5wcm9kdWN0SWQsXHJcbi8vICAgICAgICAgICAgIHF1YW50aXR5OiByZXEuYm9keS5xdWFudGl0eVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIENhcnRDaGVja291dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpLnVwZGF0ZU9uZShcclxuLy8gICAgICAgeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICAkc2V0OiB7IG1vZGlmaWVkT246IG5ldyBEYXRlKCkgfSxcclxuLy8gICAgICAgICAkcHVsbDoge1xyXG4vLyAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuLy8gICAgICAgICAgICAgcHJvZHVjdElkOiByZXEuYm9keS5wcm9kdWN0SWQsXHJcbi8vICAgICAgICAgICAgIHF1YW50aXR5OiByZXEuYm9keS5xdWFudGl0eVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB7IERlbGV0ZUNhcnQsIERlbGV0ZUNhcnRQcm9kdWN0LCBHZXRDYXJ0LCBVcGRhdGVDYXJ0UXR5IH07XHJcbmV4cG9ydCB7IE5ld09yZGVyIH07XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JqZWN0SUQsIERiQ29sbGVjdGlvbiB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuXHJcbmxldCBnbG9iYWxDYXRlZ29yaWVzID0gW107XHJcbmxldCBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gW107XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXRlZ29yaWVzKHJlczogUmVzcG9uc2UpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IEdldENhdGVnb3JpZXNCeUxldmVsKDApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGNhdGVnb3JpZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFNhbXBsZXNPZkNhdGVnb3JpZXMocmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBhd2FpdCBHZXRTYW1wbGVzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkQ2F0ZWdvcnkoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Lm5hbWUgfHwgIWJvZHkuY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzLWNhdGFsb2cnKTtcclxuICAgIGF3YWl0IGRiQ29sbGVjdGlvbi5pbnNlcnRPbmUoeyBuYW1lOiBib2R5Lm5hbWUsIGNhdGVnb3J5OiBib2R5LmNhdGVnb3J5IH0pO1xyXG4gICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhdGVnb3J5KHF1ZXJ5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXF1ZXJ5Ll9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMtY2F0YWxvZycpO1xyXG4gICAgYXdhaXQgZGJDb2xsZWN0aW9uLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKHF1ZXJ5Ll9pZCkgfSk7XHJcbiAgICBnbG9iYWxDYXRlZ29yaWVzID0gW107XHJcbiAgICBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gW107XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQGxldmVsOlxyXG4vLyAwIC0gYWxsOyAgMSAtIDFzdCBsZXZlbDsgIDIgLSAybmQgYW5kIGFib3ZlIGxldmVsc1xyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXRlZ29yaWVzQnlMZXZlbChsZXZlbDogbnVtYmVyKSB7XHJcbiAgaWYgKGdsb2JhbENhdGVnb3JpZXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGdsb2JhbENhdGVnb3JpZXMgPSBhd2FpdCBHZXRDYXRlZ29yaWVzRnJvbURiKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobGV2ZWwgPT09IDApIHtcclxuICAgIHJldHVybiBnbG9iYWxDYXRlZ29yaWVzO1xyXG4gIH1cclxuICBjb25zdCByZXR1cm5DYXRlZ29yaWVzID0gW107XHJcbiAgZ2xvYmFsQ2F0ZWdvcmllcy5mb3JFYWNoKGNhdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjYXQuY2F0ZWdvcnkubWF0Y2gobmV3IFJlZ0V4cCgnLycsICdnJykpKTtcclxuICAgIGlmIChjYXQuY2F0ZWdvcnkubWF0Y2gobmV3IFJlZ0V4cCgnLycsICdnJykpLmxlbmd0aCA8PSBsZXZlbCkge1xyXG4gICAgICByZXR1cm5DYXRlZ29yaWVzLnB1c2goY2F0KTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmV0dXJuQ2F0ZWdvcmllcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllc0Zyb21EYigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cy1jYXRhbG9nJyk7XHJcbiAgICBnbG9iYWxDYXRlZ29yaWVzID0gYXdhaXQgZGJDb2xsZWN0aW9uXHJcbiAgICAgIC5maW5kKClcclxuICAgICAgLnNvcnQoJ2NhdGVnb3J5JywgMSlcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiBnbG9iYWxDYXRlZ29yaWVzO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IHsgZXJyTXNnOiAnR2V0IGNhdGVnb3JpZXMgZnJvbSBkYXRhYmFzZSBmYWlsZWQuJyB9O1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0U2FtcGxlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpO1xyXG4gICAgbGV0IGRvY3MgPSBudWxsO1xyXG4gICAgZG9jcyA9IGF3YWl0IGRiQ29sbGVjdGlvblxyXG4gICAgICAuYWdncmVnYXRlKFtcclxuICAgICAgICB7ICRzb3J0OiB7IF9pZDogLTEgfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRncm91cDoge1xyXG4gICAgICAgICAgICBfaWQ6IHsgY2F0ZWdvcnk6ICckY2F0ZWdvcnknIH0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgICAgJHB1c2g6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogJyRfaWQnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICckY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgaW1nOiAnJGltZydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRwcm9qZWN0OiB7XHJcbiAgICAgICAgICAgIF9pZDogJyRfaWQnLFxyXG4gICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICRzbGljZTogW1xyXG4gICAgICAgICAgICAgICAgJyRwcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICA0IC8vIG1heCBudW1iZXIgb2YgZWxlbWVudHMgcmV0dXJuZWQgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdKVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIGRvY3M7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4geyBlcnJNc2c6ICdHZXQgcHJvZHVjdHMgZmFpbGVkLicgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkZENhdGVnb3J5LCBEZWxldGVDYXRlZ29yeSwgR2V0Q2F0ZWdvcmllcywgR2V0U2FtcGxlc09mQ2F0ZWdvcmllcyB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRJbnZlbnRvcnkocmVzOiBSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBjb25zdCBpbnZlbnRvcnkgPSBhd2FpdCBkYkludmVudG9yeS5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGludmVudG9yeSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gcXR5IGJ5IHByb2R1Y3Q7IFRvZG86IGJ5IGNvbG91ciwgc2l6ZSwgZXRjLlxyXG5hc3luYyBmdW5jdGlvbiBBZGp1c3RJbnZlbnRvcnkoX2lkOiBzdHJpbmcsIHF0eTogbnVtYmVyLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFfaWQgfHwgIXF0eSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAge1xyXG4gICAgICAgIF9pZDogbmV3IE9iamVjdElEKF9pZClcclxuICAgICAgfSxcclxuICAgICAgeyAkc2V0OiB7IG1vZGlmaWVkT246IG5ldyBEYXRlKCksIHF0eTogcXR5IH0gfSxcclxuICAgICAgeyB1cHNlcnQ6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyc2x0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBSZXNlcnZlSW52ZW50b3J5KGlkOiBzdHJpbmcsIGNhcnRJdGVtczogYW55KSB7XHJcbiAgaWYgKCFjYXJ0SXRlbXMgfHwgY2FydEl0ZW1zLmxlbmd0aCA8PSAwKSB7XHJcbiAgICB0aHJvdyAnVGhlIGNhcnQgaXMgZW1wdHkuJztcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzdWNjZXNzID0gW107XHJcbiAgICBjb25zdCBmYWlsZWQgPSBbXTtcclxuXHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgX2lkOiBuZXcgT2JqZWN0SUQoY2FydEl0ZW1zW2ldLnByb2R1Y3QuX2lkKSxcclxuICAgICAgICAgIHF0eTogeyAkZ3RlOiBjYXJ0SXRlbXNbaV0ucXR5IH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRpbmM6IHsgcXR5OiAtY2FydEl0ZW1zW2ldLnF0eSB9LFxyXG4gICAgICAgICAgJHB1c2g6IHtcclxuICAgICAgICAgICAgcmVzZXJ2YXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgcXR5OiBjYXJ0SXRlbXNbaV0ucXR5LFxyXG4gICAgICAgICAgICAgIF9pZDogbmV3IE9iamVjdElEKGlkKSxcclxuICAgICAgICAgICAgICBjcmVhdGVkT246IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3VsdC5yZXN1bHQubk1vZGlmaWVkID09PSAwKSB7XHJcbiAgICAgICAgZmFpbGVkLnB1c2goY2FydEl0ZW1zW2ldLnByb2R1Y3QpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1Y2Nlc3MucHVzaChjYXJ0SXRlbXNbaV0ucHJvZHVjdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmFpbGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWNjZXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBfaWQ6IHN1Y2Nlc3NbaV0uX2lkLFxyXG4gICAgICAgICAgICAncmVzZXJ2YXRpb25zLl9pZCc6IGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAkaW5jOiB7IHF0eTogc3VjY2Vzc1tpXS5xdHkgfSxcclxuICAgICAgICAgICAgJHB1bGw6IHsgcmVzZXJ2YXRpb25zOiB7IF9pZDogaWQgfSB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aHJvdyAnTm90IGVub3VnaCBzdG9yYWdlLic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ1N1Y2Nlc3MuJztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24oX2lkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgbGV0IHVwZGF0ZVJzbHQgPSBhd2FpdCBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICAncmVzZXJ2YXRpb25zLl9pZCc6IG5ldyBPYmplY3RJRChfaWQpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkcHVsbDogeyByZXNlcnZhdGlvbnM6IHsgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKSB9IH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmICh1cGRhdGVSc2x0LnJlc3VsdC5uTW9kaWZpZWQgPD0gMCkge1xyXG4gICAgICB0aHJvdyAnZGVsZXRlIHJlc2VydmF0aW9uIGZhaWxlZC4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVwZGF0ZVJzbHQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB0aHJvdyAnZGVsZXRlIHJlc2VydmF0aW9uIGZhaWxlZCB3aXRoIGV4Y2VwdGlvbi4nO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBBZGp1c3RJbnZlbnRvcnksXHJcbiAgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24sXHJcbiAgR2V0SW52ZW50b3J5LFxyXG4gIFJlc2VydmVJbnZlbnRvcnlcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgQWRkQ2F0ZWdvcnksXHJcbiAgRGVsZXRlQ2F0ZWdvcnksXHJcbiAgR2V0Q2F0ZWdvcmllcyxcclxuICBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzXHJcbn0gZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcyc7XHJcbmltcG9ydCB7XHJcbiAgQWRkUHJvZHVjdCxcclxuICBEZWxldGVQcm9kdWN0LFxyXG4gIEdldFByb2R1Y3QsXHJcbiAgR2V0UHJvZHVjdHNCeUNhdGVnb3J5LFxyXG4gIFVwZGF0ZVByb2R1Y3RcclxufSBmcm9tICcuL2dpZnRzLXByb2R1Y3RzLm9wcyc7XHJcbmltcG9ydCB7IEFkanVzdEludmVudG9yeSwgR2V0SW52ZW50b3J5IH0gZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzJztcclxuXHJcbmNvbnN0IGdpZnRzUHJvZHVjdHNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvdmlldy86cHJvZHVjdF9ubycsIChyZXEsIHJlcykgPT4ge1xyXG4gIEdldFByb2R1Y3QocmVxLnBhcmFtcywgcmVzKTtcclxufSk7XHJcblxyXG4vKlxyXG4gKiBpbnF1aXJ5OiAvYXBpL2dpZnRzL3Byb2R1Y3RzXHJcbiAqL1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL2NhdGVnb3JpZXMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0Q2F0ZWdvcmllcyhyZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wb3N0KCcvY2F0ZWdvcnknLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkQ2F0ZWdvcnkocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmRlbGV0ZSgnL2NhdGVnb3J5JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZUNhdGVnb3J5KHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcblxyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL3NhbXBsZXMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0U2FtcGxlc09mQ2F0ZWdvcmllcyhyZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFByb2R1Y3QocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wb3N0KCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRQcm9kdWN0KHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wdXQoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFVwZGF0ZVByb2R1Y3QocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmRlbGV0ZSgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUHJvZHVjdChyZXEucXVlcnksIHJlcyk7XHJcbn0pO1xyXG5cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9pbnZlbnRvcnknLCAocmVxLCByZXMpID0+IHtcclxuICBHZXRJbnZlbnRvcnkocmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucHV0KCcvaW52ZW50b3J5JywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgQWRqdXN0SW52ZW50b3J5KHJlcS5ib2R5Ll9pZCwgcmVxLmJvZHkucXR5LCByZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGdpZnRzUHJvZHVjdHNSb3V0ZXIgfTtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UHJvZHVjdChwYXJhbXM6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcGFyYW1zLl9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHByb2R1Y3Qgbm8uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJylcclxuICAgICAgLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChwYXJhbXMuX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChwcm9kdWN0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKTtcclxuICAgIGxldCBkb2NzID0gbnVsbDtcclxuICAgIGlmIChyZXEucXVlcnkuY2F0ZWdvcnkpIHtcclxuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFsnXicsIHJlcS5xdWVyeS5jYXRlZ29yeS50cmltKCldLmpvaW4oJycpLCAnaScpO1xyXG4gICAgICBkb2NzID0gYXdhaXQgZGJDb2xsZWN0aW9uLmZpbmQoeyBjYXRlZ29yeTogcmVnZXggfSkudG9BcnJheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jcyA9IGF3YWl0IGRiQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRvY3MpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFByb2R1Y3QoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Lm5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJykuaW5zZXJ0T25lKHtcclxuICAgICAgbmFtZTogYm9keS5uYW1lLFxyXG4gICAgICBpbWc6IGJvZHkuaW1nLFxyXG4gICAgICBwcmljZTogYm9keS5wcmljZSxcclxuICAgICAgY2F0ZWdvcnk6IGJvZHkuY2F0ZWdvcnksXHJcbiAgICAgIGNvbG9yOiBib2R5LmNvbG9yLFxyXG4gICAgICBwYWNrYWdpbmc6IGJvZHkucGFja2FnaW5nLFxyXG4gICAgICBtYXRlcmlhbDogYm9keS5tYXRlcmlhbCxcclxuICAgICAgc2l6ZTogYm9keS5zaXplLFxyXG4gICAgICBub3RlOiBib2R5Lm5vdGUsXHJcbiAgICAgIHJldGFpbGVyOiBib2R5LnJldGFpbGVyLFxyXG4gICAgICBjcmVhdGVkT246IG5ldyBEYXRlKClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Ll9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiUHJvZHVjdHMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJyk7XHJcbiAgICBhd2FpdCBkYlByb2R1Y3RzLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChib2R5Ll9pZCkgfSxcclxuICAgICAge1xyXG4gICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBuYW1lOiBib2R5Lm5hbWUsXHJcbiAgICAgICAgICBpbWc6IGJvZHkuaW1nLFxyXG4gICAgICAgICAgcHJpY2U6IGJvZHkucHJpY2UsXHJcbiAgICAgICAgICBjYXRlZ29yeTogYm9keS5jYXRlZ29yeSxcclxuICAgICAgICAgIGNvbG9yOiBib2R5LmNvbG9yLFxyXG4gICAgICAgICAgcGFja2FnaW5nOiBib2R5LnBhY2thZ2luZyxcclxuICAgICAgICAgIG1hdGVyaWFsOiBib2R5Lm1hdGVyaWFsLFxyXG4gICAgICAgICAgc2l6ZTogYm9keS5zaXplLFxyXG4gICAgICAgICAgbm90ZTogYm9keS5ub3RlLFxyXG4gICAgICAgICAgcmV0YWlsZXI6IGJvZHkucmV0YWlsZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUHJvZHVjdChxdWVyeTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFxdWVyeS5faWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpXHJcbiAgICAgIC5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChxdWVyeS5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRkUHJvZHVjdCxcclxuICBEZWxldGVQcm9kdWN0LFxyXG4gIEdldFByb2R1Y3RzQnlDYXRlZ29yeSxcclxuICBHZXRQcm9kdWN0LFxyXG4gIFVwZGF0ZVByb2R1Y3RcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBnaWZ0c1N0YWZmc1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZ2lmdHNTdGFmZnNSb3V0ZXIucG9zdCgnL2xvZ2luJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIExvZ2luKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzU3RhZmZzUm91dGVyLmdldCgnL2xvZ291dCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAvLyBMb2dvdXQocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNTdGFmZnNSb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIFJlZ2lzdGVyKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzU3RhZmZzUm91dGVyLmRlbGV0ZSgnL2RlbGV0ZXVzZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gRGVsZXRlVXNlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgZ2lmdHNTdGFmZnNSb3V0ZXIgfTtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tICcuLi9zdHJpbmctb3BzJztcclxuXHJcbmltcG9ydCB7IGJMb2dpbiB9IGZyb20gJy4vZ2lmdHMtdXNlcnMub3BzJztcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuL3VzZXJzLWludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24sXHJcbiAgUmVzZXJ2ZUludmVudG9yeVxyXG59IGZyb20gJy4uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLWludmVudG9yeS5vcHMnO1xyXG5pbXBvcnQgeyBOZXdPcmRlciB9IGZyb20gJy4uL2dpZnRzLW9yZGVycy9naWZ0cy1vcmRlcnMub3BzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhcnQoc2Vzc2lvbjogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJ0KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjYXJ0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRUb0NhcnQoc2Vzc2lvbjogYW55LCBib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgbGV0IHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAgeyAkcHVsbDogeyBwcm9kdWN0czogeyBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChib2R5LnByb2R1Y3QuX2lkKSB9IH0gfVxyXG4gICAgKTtcclxuICAgIHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAge1xyXG4gICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChib2R5LnByb2R1Y3QuX2lkKSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IGJvZHkucXR5LFxyXG4gICAgICAgICAgICBuYW1lOiBib2R5LnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgcHJpY2U6IGJvZHkucHJvZHVjdC5wcmljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgeyB1cHNlcnQ6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBVcGRhdGVDYXJ0UXR5KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4gICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5LnByb2R1Y3RJZCB8fCAhcmVxLmJvZHkucXR5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IHJlcS5zZXNzaW9uLnVzZXIuX2lkLFxyXG4gICAgICAgICdwcm9kdWN0cy5wcm9kdWN0SWQnOiByZXEuYm9keS5wcm9kdWN0SWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICdwcm9kdWN0cy4kLnF0eSc6IHJlcS5ib2R5LnF0eSxcclxuICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2FydChzZXNzaW9uOiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGRiLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUluQ2FydChzZXNzaW9uOiBhbnksIF9pZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBsZXQgcnNsdCA9IGF3YWl0IGRiLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9LFxyXG4gICAgICB7ICRwdWxsOiB7IHByb2R1Y3RzOiB7IHByb2R1Y3RJZDogbmV3IE9iamVjdElEKF9pZCkgfSB9IH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ2FydENoZWNrb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChcclxuICAgICFyZXEuYm9keS5jYXJ0IHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lciB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIubmFtZSB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIubW9iaWxlIHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lci5hZGRyZXNzXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgY3VzdG9tZXIgaW5mb3JtYXRpb24uJyk7XHJcbiAgfVxyXG4gIGlmIChyZXEuYm9keS5jYXJ0LnRvdGFsIDw9IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnTm8gcHJvZHVjdCB0byBjaGVja291dC4nKTtcclxuICB9XHJcblxyXG4gIGxldCBiTWVtYmVyOiBib29sZWFuID0gYkxvZ2luKHJlcS5zZXNzaW9uKTtcclxuXHJcbiAgbGV0IGlkID0gJyc7XHJcbiAgaWYgKGJNZW1iZXIpIHtcclxuICAgIGlkID0gcmVxLnNlc3Npb24udXNlci5faWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlkID0gcmFuZG9tU3RyaW5nKDIwKTtcclxuICB9XHJcbiAgY29uc3QgY2FydEl0ZW1zOiBDYXJ0SXRlbVtdID0gcmVxLmJvZHkuY2FydC5jYXJ0SXRlbXM7XHJcbiAgY29uc3QgY3VzdG9tZXIgPSByZXEuYm9keS5jYXJ0LmN1c3RvbWVyO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gcmVzZXJ2ZSBpbnZlbnRvcnksIGl0IHRocm93IGVycm9yIGluIGNhc2Ugb2YgZmFpbHVyZS5cclxuICAgIGF3YWl0IFJlc2VydmVJbnZlbnRvcnkoaWQsIGNhcnRJdGVtcyk7XHJcblxyXG4gICAgbGV0IGluc2VydFJzbHQgPSBhd2FpdCBOZXdPcmRlcihjdXN0b21lciwgY2FydEl0ZW1zKTtcclxuICAgIGlmIChpbnNlcnRSc2x0LnJlc3VsdC5uIDw9IDApIHtcclxuICAgICAgYXdhaXQgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24oaWQpO1xyXG4gICAgICB0aHJvdyAnQ3JlYXRlIG5ldyBvcmRlciBmYWlsZWQuJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXBkYXRlUnNsdCA9IGF3YWl0IERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVwZGF0ZVJzbHQpO1xyXG5cclxuICAgIGlmIChiTWVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGRiQ2FydHMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICAgIGxldCBkZWxldGVSc2x0ID0gYXdhaXQgZGJDYXJ0cy5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChpZCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgb3JkZXJJZDogaWQgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRkVG9DYXJ0LFxyXG4gIENhcnRDaGVja291dCxcclxuICBEZWxldGVDYXJ0LFxyXG4gIERlbGV0ZUluQ2FydCxcclxuICBHZXRDYXJ0LFxyXG4gIFVwZGF0ZUNhcnRRdHlcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgTG9naW4sXHJcbiAgTG9nb3V0LFxyXG4gIFJlZ2lzdGVyLFxyXG4gIERlbGV0ZVVzZXIsXHJcbiAgVXNlckluZm9cclxufSBmcm9tICcuL2dpZnRzLXVzZXJzLm9wcyc7XHJcbmltcG9ydCB7XHJcbiAgQWRkVG9DYXJ0LFxyXG4gIENhcnRDaGVja291dCxcclxuICBEZWxldGVDYXJ0LFxyXG4gIERlbGV0ZUluQ2FydCxcclxuICBHZXRDYXJ0LFxyXG4gIFVwZGF0ZUNhcnRRdHlcclxufSBmcm9tICcuL2dpZnRzLWNhcnRzLm9wcyc7XHJcblxyXG5jb25zdCBnaWZ0c1VzZXJzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyB1cmw6IC9hcGkvZ2lmdHMvdXNlcnMvXHJcbmdpZnRzVXNlcnNSb3V0ZXIucG9zdCgnL2xvZ2luJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIExvZ2luKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvaW5mbycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBVc2VySW5mbyhyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvbG9nb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIExvZ291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBSZWdpc3RlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmRlbGV0ZSgnL2RlbGV0ZXVzZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlVXNlcihyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRDYXJ0KHJlcS5zZXNzaW9uLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRUb0NhcnQocmVxLnNlc3Npb24sIHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5kZWxldGUoJy9jYXJ0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZUNhcnQocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnB1dCgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgVXBkYXRlQ2FydFF0eShyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmRlbGV0ZSgnL2NhcnQvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVJbkNhcnQocmVxLnNlc3Npb24sIHJlcS5xdWVyeS5faWQsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9jYXJ0L2NoZWNrb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIENhcnRDaGVja291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgZ2lmdHNVc2Vyc1JvdXRlciB9O1xyXG4iLCJpbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE1vbmdvRGIsIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGVuY3J5cHQgfSBmcm9tICcuLi9zdHJpbmctb3BzJztcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJyk7XHJcbiAgZGIuY3JlYXRlSW5kZXgoJ3VpZCcsIHsgdW5pcXVlOiB0cnVlIH0pO1xyXG59KSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gTG9naW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlcS5zZXNzaW9uICYmIHJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHVpZDogcmVxLnNlc3Npb24udXNlci51aWQgfSk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBsZXQgZGJVc2VycyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKTtcclxuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSBhd2FpdCBkYlVzZXJzLmZpbmRPbmUoe1xyXG4gICAgICB1aWQ6IHJlcS5ib2R5LnVpZCxcclxuICAgICAgcHdkOiBlbmNyeXB0KHJlcS5ib2R5LnB3ZClcclxuICAgIH0pO1xyXG4gICAgaWYgKCFyZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyB1aWQ6IHJlcS5zZXNzaW9uLnVzZXIudWlkIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnc2VydmVyIGVycm9yLicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTG9nb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChyZXEuc2Vzc2lvbiAmJiByZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXEuc2Vzc2lvbi51c2VyID0gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBSZWdpc3RlcihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoXHJcbiAgICAhcmVxLmJvZHkudWlkIHx8XHJcbiAgICAhcmVxLmJvZHkucHdkIHx8XHJcbiAgICAhcmVxLmJvZHkuZW1haWwgfHxcclxuICAgICFyZXEuYm9keS5maXJzdE5hbWUgfHxcclxuICAgICFyZXEuYm9keS5sYXN0TmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgbGV0IGRiVXNlcnMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJyk7XHJcbiAgICBsZXQgcnNsdCA9IGF3YWl0IGRiVXNlcnMuaW5zZXJ0T25lKHtcclxuICAgICAgdWlkOiByZXEuYm9keS51aWQsXHJcbiAgICAgIHB3ZDogZW5jcnlwdChyZXEuYm9keS5wd2QpLFxyXG4gICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAgIGZpcnN0TmFtZTogcmVxLmJvZHkuZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogcmVxLmJvZHkubGFzdE5hbWUsXHJcbiAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgfSk7XHJcbiAgICBpZiAocnNsdC5pbnNlcnRlZENvdW50ID09PSAxKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyc2x0Lm9wc1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1JlZ2lzdGVyIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnUmVnaXN0ZXIgZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlVXNlcihzZXNzaW9uOiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdMb2dpbiBpcyByZXF1aXJlZC4nKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGRiLmNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJykuZGVsZXRlT25lKHtcclxuICAgICAgX2lkOiBzZXNzaW9uLnVzZXIuX2lkXHJcbiAgICB9KTtcclxuICAgIHNlc3Npb24udXNlciA9IG51bGw7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdVc2VyIGRlbGV0ZWQuJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VySW5mbyhzZXNzaW9uOiBhbnksIHJlcykge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgTm90IGxvZ2luLicpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbiAgICAuc3RhdHVzKDIwMClcclxuICAgIC5zZW5kKHtcclxuICAgICAgX2lkOiBzZXNzaW9uLnVzZXIuX2lkLFxyXG4gICAgICB1aWQ6IHNlc3Npb24udXNlci51aWQsXHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWxcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiTG9naW4oc2Vzc2lvbjogYW55KSB7XHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGJMb2dpbiwgTG9naW4sIExvZ291dCwgUmVnaXN0ZXIsIERlbGV0ZVVzZXIsIFVzZXJJbmZvIH07XHJcbiIsImltcG9ydCAqIGFzIE94Zm9yZERpY3Rpb25hcnkgZnJvbSAnb3hmb3JkLWRpY3Rpb25hcnknOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBESUNUID0gbmV3IE94Zm9yZERpY3Rpb25hcnkoe1xyXG4gIGFwcF9pZDogJzAzMTRlOWUyJyxcclxuICBhcHBfa2V5OiAnNWE2YzI1ODk0NzRhMmY4M2NjZDY5ZjM5N2JmZWM3YTInLFxyXG4gIHNvdXJjZV9sYW5nOiAnZW4nXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ2hlY2tPeGZvcmREaWN0aW9uYXJ5KHdvcmQ6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghd29yZCB8fCAhd29yZC50cmltKCkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCB3b3JkLicpO1xyXG4gIH1cclxuXHJcbiAgRElDVC5kZWZpbml0aW9ucyh3b3JkLnRyaW0oKSkudGhlbihcclxuICAgIGRlZmluaXRpb25zID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRlZmluaXRpb25zKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyKTtcclxuICAgIH1cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBDaGVja094Zm9yZERpY3Rpb25hcnkgfTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24gfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5sZXQgbHVuY2hQYWxzID0gW107XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoUGFscygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFsc0NvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXBhbHMnKTtcclxuICAgIGx1bmNoUGFscyA9IGF3YWl0IHBhbHNDb2xsZWN0aW9uXHJcbiAgICAgIC5maW5kKClcclxuICAgICAgLnNvcnQoeyBuYW1lOiAxIH0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFBhbHMocmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChsdW5jaFBhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGx1bmNoUGFscyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChsdW5jaFBhbHMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFBhbChuYW1lOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYWxzQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcGFscycpO1xyXG4gICAgcGFsc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUGFsKG5hbWU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIG5hbWUgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhbHNDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1wYWxzJyk7XHJcbiAgICBwYWxzQ29sbGVjdGlvbi5kZWxldGVPbmUoeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQYWxzQXR0ZW5kYW5jZShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbnN0IGF0dGVuZGFuY2VzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuYWdncmVnYXRlKFtcclxuICAgICAgICB7ICR1bndpbmQ6ICckYXR0ZW5kZWVzJyB9LFxyXG4gICAgICAgIHsgJGdyb3VwOiB7IF9pZDogJyRhdHRlbmRlZXMnLCBhdHRlbmRhbmNlOiB7ICRzdW06IDEgfSB9IH0sXHJcbiAgICAgICAgeyAkcHJvamVjdDogeyBuYW1lOiAnJF9pZCcsIGF0dGVuZGFuY2U6ICckYXR0ZW5kYW5jZScgfSB9XHJcbiAgICAgIF0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoYXR0ZW5kYW5jZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkZFBhbCwgRGVsZXRlUGFsLCBHZXRQYWxzLCBHZXRQYWxzQXR0ZW5kYW5jZSB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRSZWNvcmRzKHJlczogUmVzcG9uc2UsIHF0eT86IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuZmluZCh7fSlcclxuICAgICAgLnNvcnQoeyBjcmVhdGVkT246IC0xIH0pXHJcbiAgICAgIC5saW1pdChxdHkgfCAzMClcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZWNvcmRzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRSZWNvcmQocGF5ZXI6IHN0cmluZywgYXR0ZW5kZWVzOiBzdHJpbmdbXSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcGF5ZXIgfHwgIWF0dGVuZGVlcyB8fCBhdHRlbmRlZXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBwYXJhbXMgdG8gYWRkLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGF3YWl0IGNvbGxlY3Rpb24uaW5zZXJ0T25lKHtcclxuICAgICAgcGF5ZXI6IHBheWVyLFxyXG4gICAgICBhdHRlbmRlZXM6IGF0dGVuZGVlcyxcclxuICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnRXJyb3IgYXQgc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUmVjb3JkKF9pZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFfaWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCByZWNvcmQgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbGxlY3Rpb24uZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRSZWNvcmQsIERlbGV0ZVJlY29yZCwgR2V0UmVjb3JkcyB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ2hlY2tPeGZvcmREaWN0aW9uYXJ5IH0gZnJvbSAnLi9kaWN0aW9uYXJ5JztcclxuaW1wb3J0IHsgQWRkUGFsLCBEZWxldGVQYWwsIEdldFBhbHMsIEdldFBhbHNBdHRlbmRhbmNlIH0gZnJvbSAnLi9sdW5jaGZ1bi1wYWxzJztcclxuaW1wb3J0IHsgQWRkUmVjb3JkLCBEZWxldGVSZWNvcmQsIEdldFJlY29yZHMgfSBmcm9tICcuL2x1bmNoZnVuLXJlY29yZHMnO1xyXG5cclxuY29uc3QgZGljdGlvbmFyeVJvdXRlciA9IFJvdXRlcigpO1xyXG5jb25zdCBsdW5jaGZ1blJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZGljdGlvbmFyeVJvdXRlci5nZXQoJy9veGZvcmQvOndvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQ2hlY2tPeGZvcmREaWN0aW9uYXJ5KHJlcS5wYXJhbXMud29yZCwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9wYWxzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFBhbHMocmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLnBvc3QoJy9wYWwnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUGFsKHJlcS5ib2R5Lm5hbWUsIHJlcyk7XHJcbn0pO1xyXG5sdW5jaGZ1blJvdXRlci5kZWxldGUoJy9wYWwnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUGFsKHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9yZWNvcmRzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFJlY29yZHMocmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLnBvc3QoJy9yZWNvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUmVjb3JkKHJlcS5ib2R5LnBheWVyLCByZXEuYm9keS5hdHRlbmRlZXMsIHJlcyk7XHJcbn0pO1xyXG5sdW5jaGZ1blJvdXRlci5kZWxldGUoJy9yZWNvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUmVjb3JkKHJlcS5xdWVyeS5faWQsIHJlcyk7XHJcbn0pO1xyXG5cclxubHVuY2hmdW5Sb3V0ZXIuZ2V0KCcvc3RhdHMvYXR0ZW5kYW5jZScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRQYWxzQXR0ZW5kYW5jZShyZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGRpY3Rpb25hcnlSb3V0ZXIsIGx1bmNoZnVuUm91dGVyIH07XHJcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50LCBEYiwgT2JqZWN0SUQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IE1PTkdPX1VSTCA9XHJcbiAgJ21vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5AY2x1c3RlcjAtZHh3a2cubW9uZ29kYi5uZXQvaW5zZz9yZXRyeVdyaXRlcz10cnVlJztcclxuXHJcbmxldCBkYXRhYmFzZTogRGI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0RGIoKTogUHJvbWlzZTxEYj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KE1PTkdPX1VSTCwge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChkYXRhYmFzZSA9IGNsaWVudC5kYignaW5zZycpKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyAnRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQuJztcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIE1vbmdvRGIoKTogUHJvbWlzZTxEYj4ge1xyXG4gIGlmIChkYXRhYmFzZSkge1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEluaXREYigpO1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERiQ29sbGVjdGlvbihuYW1lOiBzdHJpbmcpIHtcclxuICBpZiAoZGF0YWJhc2UpIHtcclxuICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEluaXREYigpO1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24obmFtZSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfTtcclxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xyXG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGFwaVJvdXRlciB9IGZyb20gJy4vYXBpLXJvdXRlcic7XHJcblxyXG4vLyBFeHByZXNzIHNlcnZlclxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IEhPU1QgPSAnbG9jYWxob3N0JztcclxuY29uc3QgUE9SVCA9IDgwO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5cclxuYXBwLnVzZShcclxuICBzZXNzaW9uKHtcclxuICAgIHNlY3JldDogJ2luc2cteWMtbHktMTcnLFxyXG4gICAgcmVzYXZlOiBmYWxzZSxcclxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxyXG4gICAgY29va2llOiB7XHJcbiAgICAgIG1heEFnZTogMTAwMCAqIDYwICogNjAgKiAyNCAvLyBtaWxsc2Vjb25kcyBvZiAyNGhycyAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcblxyXG5hcHAudXNlKCcvYXBpJywgYXBpUm91dGVyKTtcclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kRmlsZShqb2luKF9fZGlybmFtZSwgJy9jbGllbnQvaW5kZXguaHRtbCcpKTtcclxufSk7XHJcblxyXG4vLyBTZXJ2ZXIgc3RhdGljIGZpbGVzIGZyb20gL2NsaWVudFxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKGpvaW4oX19kaXJuYW1lLCAnL2NsaWVudCcpKSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGluZyAtIDFcclxuYXBwLmFsbCgnLyonLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kRmlsZShqb2luKF9fZGlybmFtZSwgJy9jbGllbnQvaW5kZXguaHRtbCcpKTtcclxufSk7XHJcbi8vIGVycm9yIGhhbmRsaW5nIC0gMlxyXG5hcHAudXNlKChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnSXNzdWUgaGFwcGVuZWQuIFBsZWFzZSByZXRyeSBsYXRlciEnKTtcclxufSk7XHJcblxyXG4vLyBTdGFydCB1cCB0aGUgTm9kZSBzZXJ2ZXJcclxuLy8gaHR0cFxyXG5hcHAuc2V0KCdkb21haW4nLCBIT1NUKTtcclxuYXBwLnNldCgncG9ydCcsIFBPUlQpO1xyXG5hcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBOb2RlIHNlcnZlciBsaXN0ZW5pbmcgb24gaHR0cDovLyR7SE9TVH06JHtQT1JUfWApO1xyXG59KTtcclxuXHJcbi8vIGh0dHBzIGRlZmF1bHQgcG9ydFxyXG4vLyBjb25zdCBodHRwc09wdGlvbnMgPSB7XHJcbi8vICAgY2VydDogZnMucmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnL2tleXMvY2VydGlmaWNhdGUucGVtJykpLFxyXG4vLyAgIGtleTogZnMucmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnL2tleXMvcHJpdmF0ZWtleS5wZW0nKSlcclxuLy8gfTtcclxuLy8gY29uc3Qgc2VydmVyID0gaHR0cHMuY3JlYXRlU2VydmVyKGh0dHBzT3B0aW9ucywgYXBwKTtcclxuLy8gc2VydmVyLmxpc3Rlbig0NDMpO1xyXG4vLyBleHBvcnQgeyBzZXJ2ZXIgfTtcclxuIiwiaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcblxyXG5jb25zdCBhbGdvcml0aG0gPSAnYWVzLTE5Mi1jYmMnO1xyXG5jb25zdCBwYXNzd29yZCA9ICdpblNHeWM4Myc7XHJcbmNvbnN0IGtleSA9IGNyeXB0by5zY3J5cHRTeW5jKHBhc3N3b3JkLCAnc2FsdCcsIDI0KTtcclxuY29uc3QgaXYgPSBCdWZmZXIuYWxsb2MoMTYsIDApO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY3J5cHQodGV4dDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjaXBoZXIgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyaXYoYWxnb3JpdGhtLCBrZXksIGl2KTtcclxuICAgIGxldCBjcnlwdGVkID0gY2lwaGVyLnVwZGF0ZSh0ZXh0LCAndXRmOCcsICdoZXgnKTtcclxuICAgIGNyeXB0ZWQgKz0gY2lwaGVyLmZpbmFsKCdoZXgnKTtcclxuICAgIHJldHVybiBjcnlwdGVkO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbmNyeXB0ID0+ICcsIGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY3J5cHQodGV4dDogc3RyaW5nKSB7XHJcbiAgbGV0IGRlY2lwaGVyID0gY3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoYWxnb3JpdGhtLCBrZXksIGl2KTtcclxuICBsZXQgZGVjID0gZGVjaXBoZXIudXBkYXRlKHRleHQsICdoZXgnLCAndXRmOCcpO1xyXG4gIGRlYyArPSBkZWNpcGhlci5maW5hbCgndXRmOCcpO1xyXG4gIHJldHVybiBkZWM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIHN0cmluZyBvcGVyYXRpb25cclxuICovXHJcblxyXG4vLyBBZGp1c3Qgc3RyaW5nIHRvIGJldHRlciBkaXNwbGF5LiBDYXBpdGFsIGZpcnN0IGNoYXJhY3RlciBvZiBlYWNoIHdvcmQuXHJcbmZ1bmN0aW9uIHRyaW1Ub0ZpcnN0Q2FwaXRhbChvcmdfc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGlmICghb3JnX3N0cmluZykge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuICBsZXQgb3V0cHV0X3N0ciA9ICcnO1xyXG4gIGNvbnN0IHN0cl9zcGxpdCA9IG9yZ19zdHJpbmcudHJpbSgpLnNwbGl0KCcgJyk7XHJcbiAgc3RyX3NwbGl0LmZvckVhY2gob3JnID0+IHtcclxuICAgIG9yZyA9IG9yZy50cmltKCk7XHJcbiAgICBpZiAoIW9yZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKG91dHB1dF9zdHIpIHtcclxuICAgICAgb3V0cHV0X3N0ciArPVxyXG4gICAgICAgICcgJyArIG9yZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG9yZy5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG91dHB1dF9zdHIgPSBvcmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBvcmcuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG91dHB1dF9zdHI7XHJcbn1cclxuXHJcbmVudW0gUmFuZG9tVHlwZXMge1xyXG4gIENhcGl0YWwsXHJcbiAgTnVtYmVyLFxyXG4gIFN0cmluZ1xyXG59XHJcblxyXG4vLyByZXR1cm4gc3RyaW5nIG9mIHJhbmRvbSBudW1iZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLk51bWJlciwgbGVuZ3RoKTtcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gY2FwaXRhbCBjaGFyYWN0ZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tQ2FwaXRhbHMobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIHJldHVybiByYW5kb20oUmFuZG9tVHlwZXMuQ2FwaXRhbCwgbGVuZ3RoKTtcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gY2hhcmFjdGVycyBvciBudW1iZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLlN0cmluZywgbGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tKHR5cGU6IFJhbmRvbVR5cGVzLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgbGV0IHJTdHJpbmc6IHN0cmluZyA9ICcnO1xyXG4gIGlmICh0eXBlID09PSBSYW5kb21UeXBlcy5TdHJpbmcpIHtcclxuICAgIHJTdHJpbmcgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuTnVtYmVyKSB7XHJcbiAgICByU3RyaW5nID0gJzAxMjM0NTY3ODknO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuQ2FwaXRhbCkge1xyXG4gICAgclN0cmluZyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHtcclxuICAgIHJlc3VsdCArPSByU3RyaW5nW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJTdHJpbmcubGVuZ3RoKV07XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgdHJpbVRvRmlyc3RDYXBpdGFsLFxyXG4gIHJhbmRvbUNhcGl0YWxzLFxyXG4gIHJhbmRvbU51bWJlcixcclxuICByYW5kb21TdHJpbmcsXHJcbiAgUmFuZG9tVHlwZXNcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm94Zm9yZC1kaWN0aW9uYXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==