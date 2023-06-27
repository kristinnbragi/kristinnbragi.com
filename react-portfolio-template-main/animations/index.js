import gsap, { Power3 } from "gsap";

export const stagger = (target, fromvVars, toVars) => {
  if (target && target.current) {
    return gsap.fromTo(
      target,
      { opacity: 0, ...fromvVars },
      { opacity: 1, ...toVars, stagger: 0.2, ease: Power3.easeOut }
    );
  };
};
