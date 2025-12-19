import WhyChooseUsHomeCard from '@/components/ui/Why-Choose-Us-Home-Card';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function WhyChooseCards() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const whyChooseUsData = [
    {
      icon: "/images/why-choose-us/choose-star.svg",
      title: "All-in-One Platform",
      description:
        "Everything from check-ins to cleaning, managed in one place."
    },
    {
      icon: "/images/why-choose-us/choose-prize.svg",
      title: "Reliable Services",
      description:
        "We provide professional services to keep your property in top condition at all times."
    },
    {
      icon: "/images/why-choose-us/choose-location.svg",
      title: "Flexible & Scalable",
      description:
        "Whether you own a single property or an entire portfolio, our platform grows with your needs."
    },
    {
      icon: "/images/why-choose-us/choose-prop.svg",
      title: "24 x 7",
      description:
        "Our team is always available to assist with any inquiries or requests."
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col gap-[16px] md:flex-row md:justify-between md:gap-[16px]"
    >
      {whyChooseUsData.map((item, index) => (
        <WhyChooseUsHomeCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </motion.div>
  );
}

export default WhyChooseCards;
