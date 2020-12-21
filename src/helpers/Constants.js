export const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export const motion = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};
export const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };
