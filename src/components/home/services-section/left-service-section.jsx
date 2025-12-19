import ServiceHomeCard from '@/components/ui/Service-Home-Card';
import React from 'react';

function LeftServiceSection() {
  const servicesData = [
    {
      title: "Smart Check-In & Check-Out",
      icon: "/images/service-section/verify.svg", // Placeholder, replace with actual icon if needed
      items: [
        "Provide seamless access to your guests with our smart lock system.",
        "No more physical keys or complicated check-ins—just a secure and easy process."
      ]
    },
    {
      title: "Cleaning Services",
      icon: "/images/service-section/Star Rainbow.svg", // Placeholder, replace with actual icon if needed
      items: [
        "Reliable cleaning services to ensure your property is always spotless",
        "We handle everything, so you don’t have to worry about the details."
      ]
    },
    {
      title: "Maintenance",
      icon: "/images/service-section/History 2.svg", // Placeholder, replace with actual icon if needed
      items: [
        "24/7 support for all your maintenance needs",
        "From repairs to routine upkeep, our team ensures your property stays in top condition."
      ]
    },
    {
      title: "One-Time Use Products",
      icon: "/images/service-section/Hanger 2.svg", // Placeholder, replace with actual icon if needed
      items: [
        "Order bed linens, towels, and hygiene products as needed.",
        "Ensure your property is always stocked and ready for guests"
      ]
    }
  ];
  return (
    <div className="">
      {servicesData.map((service, index) => (
        <ServiceHomeCard
          active={0}
          index={index}
          key={index}
          leftIcon={service.icon}
          title={service.title}
          description={service.items}
        />
      ))}
    </div>
  );
}

export default LeftServiceSection;
