

import { FaCheckCircle } from 'react-icons/fa';
import image from '../../../assets/images/BestOffer.png';
import { useEffect, useState } from 'react';

const plans = [
  { amount: 325, profit: 70, total: 6300, name: 'VIP 1' },
  { amount: 1100, profit: 150, total: 13500, name: 'VIP 2' },
  { amount: 2200, profit: 300, total: 27000, name: 'VIP 3' },
  { amount: 4400, profit: 600, total: 54000, name: 'VIP 4' },
  { amount: 8800, profit: 1200, total: 108000, name: 'VIP 5' },
  { amount: 17600, profit: 2500, total: 225000, name: 'VIP 6' },
  { amount: 35200, profit: 4960, total: 446400, name: 'VIP 7' },
  { amount: 66200, profit: 7500, total: 675000, name: 'VIP 8' },
  { amount: 91200, profit: 11200, total: 1008000, name: 'VIP 9' },
  { amount: 165500, profit: 20400, total: 1836000, name: 'VIP 10' },
  { amount: 200000, profit: 25000, total: 2250000, name: 'VIP 11' },
  { amount: 250000, profit: 30000, total: 2700000, name: 'VIP 12' },
];
const gradients = [
  'from-red-500 10% via-white 90% to-pink-500 10%',
  'from-green-500 10% via-white 90% to-yellow-500 10%',
  'from-purple-500 10% via-white 90% to-pink-500 10%',
  'from-blue-500 10% via-white 90% to-yellow-500 10%',
  'from-pink-500 10% via-white 90% to-green-500 10%',
  'from-lime-500 10% via-white 90% to-indigo-500 10%',
];


export default function PricingSection() {

  const [gradientIndex, setGradientIndex] = useState(0);

  // Change gradient every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50">
      <div className="py-3 px-4 max-w-[1250px] mx-auto flex flex-col justify-center items-center">
        <div className="flex gap-1 text-center mb-1">
          <span>Our</span>
          <div className="bg-pink-500 text-white px-2 rounded-[3px]">pricing😍</div>
        </div>
        <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold text-center mb-8">
          Best Plan for Business
        </h2>
        <button className="bg-white border-[4px] py-2 px-5 rounded-[50px] border-blue-200 flex gap-1">
          <span className="font-bold text-[16px]">MP</span>
          <span className="bg-red-500 text-white rounded-[15px] text-[13px] py-0 px-2">Plans</span>
        </button>

        <div className="grid gap-12 mt-30 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          {plans.map((plan, index) => (
            <div
              key={index}
               className={`rounded-xl shadow-lg p-5 relative flex flex-col gap-1.5 
                bg-gradient-to-tr ${gradients[gradientIndex]} transition-all duration-1000`}
            >
              {/* Image Badge */}
              <img
                src={image}
                alt=""
                className="absolute top-3 right-3 w-[50px] 
                  bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 
                  p-1 rounded-full"
              />

              <div className="flex items-center md:flex-row flex-col-reverse gap-4 mt-12">
                <div className="py-6 px-5 rounded-lg lg:text-5xl md:text-4xl text-3xl font-bold text-green-900 text-center text-nowrap bg-red-200">
                  Rs {plan.amount}
                  <div className="text-xs font-medium">Plan Amount</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-[12px] text-gray-700 leading-tight">
                    جیسے ہی اپنا پلان ایکٹو کرو گے فردی اگر منافع مل جائے گا جیسے آپ جوائن اور ادائیگی سب سسٹم میں نکل سکتے ہیں
                  </p>
                </div>
              </div>

              <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
                <div className="flex flex-col gap-3">
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Daily Profit</p>
                  <p className="ml-6"><sup>Pkr.</sup> <strong>{plan.profit} Every Day</strong></p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Plan Valid - 90 Days</p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Daily Task - 1TASK</p>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Refer Bonus Level 1 - 12%</p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Refer Bonus Level 2 - 4%</p>
                  <p className="flex items-center"><FaCheckCircle className="mr-2" /> Total Profit {plan.total} Pkr</p>
                </div>
              </div>

              <button
                className="mt-6 w-[40%] py-3 rounded-full font-semibold text-[15px] text-white shadow 
                  bg-gradient-to-r from-blue-400 via-pink-400 green-600 bred-600 orange-400  blue-800 gray-700 to-purple-400 
                  animate-pulse"
              >
                PURCHASE NOW →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

