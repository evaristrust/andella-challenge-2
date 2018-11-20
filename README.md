# Andela End Points Challenge #2

The application comes with three static/hard coded parcels that are lost on each call since we don't use database.

# Running the app

First install depedencies:

  npm install

Once dependencies are installed, run npm start

# Heroku Application

<a href="https://andela-challenge-2.herokuapp.com/" target="_blank">https://andela-challenge-2.herokuapp.com/</a>

# End Points

## View All Parcels

   /api/v1/parcels

## View Parcels of One User

  /api/v1/users/<userid>/parcels

  where <userid> is id of the user/customer whose parcels we want to see


## View Detail of a Specific Parcel

  /api/v1/parcels/<parcelid>/

  where <parcelid> is the id of the parcel to view

## Create New Parcel Order

	Method: POST
	/api/v1/parcels/

	post data:

	{

		name : 'Customer Name',
		quantity : 'Quantity',
		phone : 'Customer Phone',
		country: 'Destination Country'
	}

## Cancel An Incomplete/Undelivered Parcel

	Method: PUT
	/api/v1/parcels/<parcelid>/cancel/

	wehre <parcelid> is id of the parcel to cancel


# Running Tests

To run tests on your local machine, type

npm test


