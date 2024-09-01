export const TravelList=[
    {   id:1,
        title: 'Just me',
        description: 'Traveling solo',
        icon: '✈️',
        people:1
    },
    {   id:2,
        title: 'Couple',
        description: 'Two travel in tandem',
        icon: '👩‍❤️‍💋‍👩',
        people:1
    },
    {   id:3,
        title: 'Family',
        description: 'Traveling with family',
        icon: '🏡',
        people:'3 to 5 people'
    },
    {   id:4,
        title: 'Friends',
        description: 'A bunch of thrill Travelers',
        icon: '🏄‍♂️',
        people:'5 to 10 people'
    },
]

export const BudgetList=[
    {
        id:1,
        title: 'Cheap',
        description: 'Stay conscious of cost',
        icon: '💵',
    },
    {
        id:2,
        title: 'Moderate',
        description: 'Stay conscious of cost',
        icon: '💰',
    },
    {
        id:3,
        title: 'Luxury',
        description: 'Dont worry about cost',
        icon: '💸',
    },
  
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit and also with location image url from wikipedia in JSON format.'