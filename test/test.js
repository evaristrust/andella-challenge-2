import parcel from '../src/api/models/parcel';

var chai = require('chai')
var expect = chai.expect;
var should = chai.should();
var chaiHttp = require("chai-http");
var app = require('../src/app');

chai.use(chaiHttp);


describe('/GET parcels', () => {
	it('It should get all parcels we have', (done) => {
		chai.request(app)
		.get('/api/v1/parcels/')
		
		.end((err, res) => {
			res.should.have.status(200);
			expect(res.body.length).to.equal(3);
			res.body.should.be.a('array');
			done();
		});

	});

});


describe('/POST newParcel', () => {
	it('It should create a new parcel', (done) => {
		const parcel_length = parcel.length;

		chai.request(app)
		.post('/api/v1/parcels/')
		.send({
			'name': 'Tupac',
			'phone': '0712345678',
			'quantity': 50,
			'country': 'DRC'
		})
		.end((err, res) => {
			res.should.have.status(200);
			expect(parcel_length + 1).to.equal(parcel.length);
			// res.body.should.be.a('string');
			done();
		});

	});

});


describe('/PUT cancelParcel', () => {
	it('It should cancel an incomplete parcel', (done) => {
		

		chai.request(app)
		.put('/api/v1/parcels/1/cancel')
		
		.end((err, res) => {
			res.should.have.status(400);

			// check for parcel id 2
			chai.request(app)
			.put('/api/v1/parcels/2/cancel')
			.end((err, res) =>{
				res.should.have.status(200);
			})

			done();
		});

	});

});


describe('/GET parcelDetail', () => {
	it('It should return detail of a parcel', (done) => {
		

		chai.request(app)
		.get('/api/v1/parcels/1/')
		
		.end((err, res) => {
			res.should.have.status(200);
			expect(res.body.length).to.equal(1);

			// check for parcel id 2
			chai.request(app)
			.get('/api/v1/parcels/3000')
			.end((err, res) =>{
				res.should.have.status(200);
				expect(res.body.length).to.equal(0);
			})

			done();
		});

	});

});


describe('/GET userParcels', () => {
	it('It should return parcels of a specific user', (done) => {
		

		chai.request(app)
		.get('/api/v1/users/1/parcels/')
		
		.end((err, res) => {
			res.should.have.status(200);
			expect(res.body.length).to.equal(2);

			// check for user id 200
			chai.request(app)
			.get('/api/v1/users/200000/parcels/')
			.end((err, res) =>{
				res.should.have.status(200);
				expect(res.body.length).to.equal(0);
			})

			done();
		});

	});

});



