import styles from '@styles/Marquee.module.scss';
import React, { useRef, useEffect, useState, createRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = ({ data, duration, padding, reverse }) => {
  const [items, setItems] = useState(data);
  const [maxItemWidth, setMaxItemWidth] = useState(0);
  const [maxItemHeight, setMaxItemHeight] = useState(0);

  let els = useRef(items.map(() => createRef()));
  let container = useRef();
  let containerWidth;
  els = els.current;
  let accWidth = 0;

  //Create items
  useEffect(() => {
    let arr = items;
    let totalWidth = 0;
    let maxWidth = 0;
    let maxHeight = 0;

    //Keep adding children until the total width of said children exceed innerWidth
    containerWidth = container.current.getBoundingClientRect().width;
    while (totalWidth < containerWidth) {
      els.forEach((item, i) => {
        let width = item.getBoundingClientRect().width;
        let height = item.getBoundingClientRect().height;
        if (maxWidth < width) maxWidth = width;
        if (maxHeight < height) maxHeight = height;
        //stop adding during current iteration if condition is not met
        if (totalWidth < containerWidth) {
          arr.push(item.textContent);
        }
        totalWidth = totalWidth + width;
      });
    }
    setMaxItemWidth(maxWidth);
    setMaxItemHeight(maxHeight);
    setItems(arr);
  }, []);

  const setItemPos = () => {
    els.forEach((item) => {
      //Set initial position
      let width = item.getBoundingClientRect().width;
      gsap.set(item, {
        x: accWidth + els.length, // + 50 because of a bug when initializing animation causing two items to stack
      });
      accWidth = accWidth + width;
    });
  };

  const additionalX = { val: 0 };
  let additionalXAnim;
  let offset = 0;

  var windowWrap = gsap.utils.wrap(0, accWidth);
  const animate = (delta) => {
    const tl = gsap.timeline();
    tl.to(els, {
      x: `+=${accWidth * delta}`,
      modifiers: {
        x: gsap.utils.unitize(gsap.utils.wrap(0, accWidth)), //original
        // x: (x) => windowWrap(parseFloat(x)) + 'px',
        // x: function (x, target) {
        //   return `${parseInt(x) % accWidth}px`;
        // },
        // x: function (x, target) {
        //   x = gsap.utils.wrap(0, accWidth);
        // },
      },
      // duration: accWidth / 50,
      // paused: true,
      duration: 5,
      ease: 'none',
      repeat: -1,
    });
    // animation.progress(9999);
  };

  const imagesScrollerTrigger = ScrollTrigger.create({
    trigger: container.current,
    start: 'top 50%',
    end: 'bottom 0%',
    markers: true,
    onUpdate: function (self) {
      const velocity = self.getVelocity();
      // console.log(velocity);

      if (velocity > 0) {
        if (additionalXAnim) additionalXAnim.kill();

        additionalX.val = velocity / 1000;
        additionalXAnim = gsap.to(additionalX, { val: 0 });
      }
    },
  });

  //Set item pos
  useEffect(() => {
    setItemPos();
  }, [maxItemWidth]);

  // Start animating
  useEffect(() => {
    reverse ? animate(1) : animate(-1);
  }, [setItemPos]);

  return (
    <>
      <div className={styles.wrapper} ref={container}>
        <ul
          className={styles.boxes}
          style={{ left: -maxItemWidth, height: maxItemHeight }}
        >
          {items.map((e, i) => (
            <li
              key={i}
              ref={(e) => (els[i] = e)}
              className={styles.item}
              style={{ padding: `0 ${padding}px` }}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Marquee;
