import Stripe from 'stripe';


console.log(process.env.STRIPE_SECRET_KEY)
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
  typescript: true,
});
