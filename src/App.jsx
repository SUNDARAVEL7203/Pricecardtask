import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import './App.css'



const plans = [
  {
    name: 'Free',
    price: '$0/month',
    features: [
      { feature: '✔ Single User', available: true },
      { feature: '✔ 50GB Storage', available: true },
      { feature: '✔ Unlimited Public Projects', available: true },
      { feature: '✔ Community Access', available: true },
      { feature: '✘ Unlimited Private Projects', available: false },
      { feature: '✘ Dedicated Phone Support', available: false },
      { feature: '✘ Free Subdomain', available: false },
      { feature: '✘ Monthly Status Reports', available: false },
    ],
  },
  {
    name: 'Plus',
    price: '$9/month',
    features: [
      { feature: '✔ 5 Users', available: true },
      { feature: '✔ 50GB Storage', available: true },
      { feature: '✔ Unlimited Public Projects', available: true },
      { feature: '✔ Community Access', available: true },
      { feature: '✔ Unlimited Private Projects', available: true },
      { feature: '✔ Dedicated Phone Support', available: true },
      { feature: '✔ Free Subdomain', available: true },
      { feature: '✘ Monthly Status Reports', available: false },
    ],
  },
  {
    name: 'Pro',
    price: '$49/month',
    features: [
      { feature: '✔ Unlimited Users', available: true },
      { feature: '✔ 50GB Storage', available: true },
      { feature: '✔ Unlimited Public Projects', available: true },
      { feature: '✔ Community Access', available: true },
      { feature: '✔ Unlimited Private Projects', available: true },
      { feature: '✔ Dedicated Phone Support', available: true },
      { feature: '✔ Free Subdomain', available: true },
      { feature: '✔ Monthly Status Reports', available: true },
    ],
  },
];

const PricingTable = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', backgroundColor: '#007bff ', width: '800px' , margin: '50px auto' }}>
      {plans.map((plan) => (
        <div key={plan.name} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '300px', backgroundColor: '#fff' }}>
          <h2 style={{ textAlign: 'center', color: '#007BFF' }}>{plan.name}</h2>
          <h3 style={{ textAlign: 'center', color: '#333' }}>{plan.price}</h3>
          <ul style={{ listStyle: 'none', padding: '0', color: '#555' }}>
            {plan.features.map((item, index) => (
              <li key={index} style={{ textDecoration: item.available ? 'none' : 'line-through', color: item.available ? '#333' : '#ccc' }}>
                {item.feature}
              </li>
            ))}
          </ul>
          <button style={{ display: 'block', margin: '20px auto', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
            BUTTON
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;