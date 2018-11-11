'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _parcel = require('../models/parcel');

var _parcel2 = _interopRequireDefault(_parcel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    showParcels: function showParcels(req, res, next) {
        /*
        Show list of parcels
        */
        res.send(_parcel2.default);
        // res.json({'parcels':parcel});
    },
    parcelDetail: function parcelDetail(req, res, next) {
        /*
        Show detail of a specific parcel. Pass id of the parcel as part of the URL
        */

        var parcel_id = req.params.parcel_id;

        // find the parcel in parcel array whose id is equal to parcel_id

        var parcel_detail = _parcel2.default.filter(function (p) {
            return p.id == parcel_id;
        });

        res.send(parcel_detail);
    },
    userParcels: function userParcels(req, res, next) {
        /*
        Show parcels ordered by a specific user
        */

        var user_id = req.params.user_id;

        // find the parcels in parcel array whose id is equal to customer_id

        var parcels = _parcel2.default.filter(function (p) {
            return p.customer_id == user_id;
        });

        res.send(parcels);
    },
    newParcel: function newParcel(req, res, next) {
        /*
        Create a new parcel order.
         	Method: Post
         	@input name : String. Name of the customer making the order
        @input quantity : Number. Quanity of parcels ordered
        @input phone: Number. Phone number of the customer making the order
        */

        var _req$body = req.body,
            name = _req$body.name,
            quantity = _req$body.quantity,
            phone = _req$body.phone;

        // new parcel id.

        var new_id = _parcel2.default.length + 1;
        var order_code = new_id + 'UIOO';

        var customer_id = 0; // initalize it

        // generate customer id or use existing? Check the phone
        var check_phone = _parcel2.default.filter(function (p) {
            return p.customer_phone == phone;
        });

        if (check_phone.length == 0) {
            // phone not found so it must be new customer. so generate customer id
            customer_id = Math.floor(Math.random() * (9000 - 1000) + 1000);
        } else {
            // the customer is not new. previously he/she is registered
            customer_id = check_phone[0]['customer_id'];
        }

        // create the order now
        _parcel2.default.push({
            id: new_id,
            order_code: order_code,
            customer_phone: phone,
            customer_name: name,
            customer_id: customer_id,
            quantity: quantity,
            status: 'incomplete'
        });

        res.send('The order was created successfully with order code ' + order_code);
    },
    cancelParcel: function cancelParcel(req, res, next) {
        /*
        Cancel the parcel. Pass parcelid as parameter
         	Only incomplete parcels can be cancelled
        */
        var parcel_id = req.params.parcel_id;

        // get the parcel

        var order = _parcel2.default.filter(function (p) {
            return p.id == parcel_id;
        });

        var http_status = 200;

        var msg = '';

        // did we find the parcel?

        if (order.length == 0) {
            http_status = 400;
            msg = 'The parcel was not found';
        } else {
            // the parcel exists but can it be cancelled?

            if (order[0].status == 'complete') {
                http_status = 400;
                msg = 'The parcel cannot be cancelled because it is already complete';
            } else {
                msg = 'The order has been cancelled successfully';
                order[0]['status'] = 'cancelled';
            }
        }

        res.status(http_status).send(msg);
    }
};