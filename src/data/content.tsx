import { Wrench, CarFront, Battery, Disc, Home, Zap, Award } from 'lucide-react';

export const services = [
  {
    id: "services",
    title: "Car Service",
    description: "At home car servicing by a qualified mobile mechanic. Maintain your warranty.",
    icon: <Wrench size={32} />,
    image: "https://tus.ie/app/uploads/Study/Apprenticeships/Motor-Mechanic-TUS.jpg",
    buttonText: "Book Service",
    highlight: false
  },
  {
    id: "car-repairs",
    title: "Car Repairs",
    description: "Quality car repairs that come to you. Mechanical, electrical, engine and exhaust.",
    icon: <CarFront size={32} />,
    image: "https://www.artisantraining.co.za/wp-content/uploads/2024/04/motor-mechanic.jpeg",
    buttonText: "Book Repair",
    highlight: true
  },
  {
    id: "batteries",
    title: "Car Batteries",
    description: "Highest quality car battery brands delivered and installed.",
    icon: <Battery size={32} />,
    image: "https://greatlakesautocentre.com.au/wp-content/uploads/sites/50/2021/09/auto-mechanic-replacing-car-battery-NREDMBX-scaled.jpg",
    buttonText: "Get Battery",
    highlight: false
  },
  {
    id: "tyres",
    title: "Tyre Fitting",
    description: "New tyre fitment at home or work. We stock world-leading brands.",
    icon: <Disc size={32} />,
    image: "https://www.otc-trainingcentre.co.za/wp-content/uploads/2017/12/Untitled-design-1-960x512.jpg",
    buttonText: "Book Tyres",
    highlight: false
  }
];

export const galleryImages = [
  "https://withoutahitch.com.au/wp-content/uploads/2014/05/Fotolia_39585456_Subscription_Monthly_M-e1400569021269.jpg",
  "https://www.jaycolansvale.com.au/sites/27/2023/09/single-alex-servcie-pricing-banner-sm-1691389393-sm-1693552563-840x518.jpg",
  "https://tus.ie/app/uploads/Study/Apprenticeships/Motor-Mechanic-TUS.jpg",
  "https://perthmobilemechanic.com.au/wp-content/uploads/2017/03/Mechanic-1024x576.jpg"
];

export const repairTypes = [
  "Car Battery Replacement",
  "Brake Pad Replacement",
  "Clutch Repair & Replacement",
  "Starter Motor Replacement",
  "Car Alternator Repair",
  "Transmission Service",
  "Fan Belt Repair",
  "Fuel Injector Repair",
  "Timing Belt Service",
  "Radiator Replacement",
  "Wheel Bearing Hub",
  "Shock Absorber Replacement",
  "Headlights & Electrical",
  "Disc Rotors"
];

export const reasons = [
  {
    title: "Convenient onsite service",
    desc: "Qualified mechanics that do the work at your location.",
    icon: <Home size={40} />
  },
  {
    title: "Same or next day appointments",
    desc: "More vans on the road means we can get to your car faster!",
    icon: <Zap size={40} />
  },
  {
    title: "The highest quality parts and brands",
    desc: "We only use the best quality parts, oils and equipment on your vehicle.",
    icon: <Award size={40} />
  }
];

export const tyreBrands = [
  {
    name: "Bridgestone",
    desc: "Bridgestone has a range of tyres to suit your lifestyle.",
    image: "https://tse2.mm.bing.net/th?id=OIP.3fQ_vL9y_4x_8g_9z_0_wHaHa&pid=Api",
  },
  {
    name: "Firestone",
    desc: "Always dependable, wherever the journey takes you.",
    image: "https://tse3.mm.bing.net/th?id=OIP.v_X_5_6_7_8_9_0_1_2_3&pid=Api", 
  },
  {
    name: "Dayton",
    desc: "Best value budget tyres for your car, SUV or 4WD.",
    image: "https://tse4.mm.bing.net/th?id=OIP.A_B_C_D_E_F_G_H_I_J&pid=Api",
  }
];

export const reviews = [
  {
    name: "Sarah Jenkins",
    rating: 5,
    text: "Georgi is amazing! Came to my workplace and fixed my brakes in no time. Honest pricing and super friendly."
  },
  {
    name: "Mike T.",
    rating: 5,
    text: "Saved me a towing fee. Diagnosed the starter motor issue quickly and got me back on the road. Highly recommend The Lube Master."
  },
  {
    name: "David Chen",
    rating: 5,
    text: "Professional, punctual, and clean. Did a full logbook service on my Toyota. Will definitely use again."
  }
];
