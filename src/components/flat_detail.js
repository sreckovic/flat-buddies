import React from 'react';

const FlatDetails = (props) => {
  return (
    <div className="flat">

      <ul>
        <li>Share house</li>
        <li>4 Bedrooms</li>
        <li>1 Bathroom</li>
        <li>3 Flatmates</li>
      </ul>

      <h4>Room details</h4>
      <ul>
        <li>Room Type {props.flat.roomtype}</li>
        <li>Bathroom {props.flat.bathroom}</li>
        <li>Furnishing {props.flat.furnishing}</li>
        <li>Available {props.flat.available}</li>
        <li>Length of Stay Minimum {props.flat.length}</li>
        <li>Gender {props.flat.gender}</li>
      </ul>

      <h4>Charges for the room</h4>
      Weekly rent $200
      Bond 4 weeks rent
      Bills Not included in rent
      Internet Included in rent
      Parking On street parking

      <h5>Preferences</h5>
      <p>Relaxed group of guys who are courteous and respectful but like to play music and have a fun energy about the place. The rooms in the house are spacious, the ceilings are nice and high - cool during summer. There is a also great entertaining space in our back sunroom that we all spend a lot of time in.
</p>
      <h5>Flatmates</h5>
      <p>We are three mid twenties guys. One Musician, one Carpenter and one Graphic Designer. We'd like to think that we are all really easy going guys who are respectful of people's privacy but are more than willing to party down if necessary. We love playing music throughout the house and spitballing ways to enjoy our weekends. We are very tolerant individuals who embrace the eccentricities in people and value a good sense of humour.</p>
      <p>We are looking for a like-minded easy going housemate who can enjoy an afternoon drink with us and show us their favourite songs.</p>
    </div>
  )
}

export default FlatDetails;