import { test, expect } from '@playwright/test';

test.describe.configure({mode:'serial'})



let bookingId;

test('Create Booking using Playwright', async ({ request }) => {
  const apiResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: {
      'Content-Type': 'application/json' // Specify the content type
    },
    data: {
      "firstname": "Victor",
      "lastname": "Brown",
      "totalprice": 111,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
      },
      "additionalneeds": "Breakfast"
    }
  });

  if (apiResponse.ok()) {
    const responseBody = await apiResponse.json();
    console.log(responseBody);
    bookingId = responseBody.bookingId;
    expect(responseBody).not.toBeNull();
  } else {
    console.error(`Request failed with status: ${apiResponse.status()}`);
    const errorText = await apiResponse.text();
    console.error(`Error details: ${errorText}`);
  }

});


test('Get Booking id', async ({ request }) => {
    //const apiResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
    const apiResponse = await request.get('https://restful-booker.herokuapp.com/booking/4474');
    const responseBody = await apiResponse.json();
    expect(responseBody.firstname).toEqual('Victor');
    console.log(responseBody);

  });
