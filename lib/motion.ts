// Motion configuration and utilities for Framer Motion animations

export const motionConfig = {
  // Default easing curve inspired by Stripe/Linear
  easing: [0.22, 1, 0.36, 1] as [number, number, number, number],
  
  // Duration in seconds
  duration: 0.6,
  
  // Stagger delay between child animations (in seconds)
  stagger: 0.08,
  
  // Spring configuration for physics-based animations
  spring: {
    type: "spring" as const,
    stiffness: 140,
    damping: 18,
  },
  
  // Parallax strength multiplier
  parallax: 0.08,
};

// Fade in from bottom animation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: motionConfig.duration,
    ease: motionConfig.easing,
  },
};

// Fade in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: motionConfig.duration,
    ease: motionConfig.easing,
  },
};

// Scale in animation
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: motionConfig.duration,
    ease: motionConfig.easing,
  },
};

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: motionConfig.stagger,
    },
  },
};

// Viewport animation trigger settings
export const viewportConfig = {
  once: true,
  margin: "-100px",
  amount: 0.2,
};

// Magnetic button effect (for hover interactions)
export const magneticButton = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.99 },
  transition: motionConfig.spring,
};

// Tilt effect for cards
export const cardTilt = {
  whileHover: {
    rotateX: 1.5,
    rotateY: 1.5,
    scale: 1.01,
  },
  transition: {
    duration: 0.3,
    ease: motionConfig.easing,
  },
};

// Nav underline animation
export const navUnderline = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  exit: { scaleX: 0 },
  transition: {
    duration: 0.18,
    ease: motionConfig.easing,
  },
};
