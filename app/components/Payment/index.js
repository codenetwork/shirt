/**
*
* Payment
*
*/

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import styled from 'styled-components';


function Payment() {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      name="Code Network Shirt"
      description="TODO: size"
      panelLabel="Give Money"
      amount={1000000}
      currency="USD"
      stripeKey="pk_test_ubbxA4uUdiCguySAW0U6PtOu" // TODO: Remove this
      shippingAddress
      billingAddress
      bitcoin
      allowRememberMe
      token={onToken}
      reconfigureOnUpdate={false}
    >
    </StripeCheckout>

  );
}

Payment.propTypes = {

};

export default Payment;
