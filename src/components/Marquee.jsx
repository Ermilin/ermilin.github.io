import styles from '@styles/Marquee.module.scss';
import React, { useRef, useEffect, useState, createRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

const Marquee = ({ data, duration, padding, reverse }) => {
  gsap.registerPlugin(ScrollTrigger, Draggable);
  const [items, setItems] = useState(data);
  const [maxItemWidth, setMaxItemWidth] = useState(0);
  const [maxItemHeight, setMaxItemHeight] = useState(0);
  const [delta, setDelta] = useState(-1);

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

  //Set item pos
  useEffect(() => {
    setItemPos();
  }, [maxItemWidth]);

  let animation;
  let additionalX = { val: 0 };
  let additionalXAnim;
  let offset = 0;
  let boxWidth;
  let wrapWidth;
  let wrapVal;
  let draggable;
  const proxy = document.createElement('div');

  useEffect(() => {
    let sections = gsap.utils.toArray(els);
    wrapVal = gsap.utils.wrap(0, accWidth);
    animation = gsap
      .to(sections, {
        x: `+=${accWidth * delta}`,
        modifiers: {
          // x: gsap.utils.unitize(gsap.utils.wrap(0, accWidth)), //original
          x: (x) => {
            offset += additionalX.val;
            return wrapVal(parseFloat(x) + offset) + 'px';
          },
        },
        repeat: -1,
        duration: 100,
        ease: 'none',
      })
      .progress(9999);

    sections.forEach((step, i) => {
      //forward
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top 10%',
        end: 'bottom 0%',
        scrub: 2,
        onUpdate: function (self) {
          if (self.direction == 1) {
            if (animation.reversed() == true) {
              animation.reversed(false);
            }
            const velocity = self.getVelocity();
            if (additionalXAnim) additionalXAnim.kill();
            additionalX.val = -velocity / 4000;
            additionalXAnim = gsap.to(additionalX, { val: 0, duration: 1 });
          }
        },
      });
      //backwards
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top 10%',
        end: 'bottom 0%',
        scrub: 2,
        onUpdate: function (self) {
          if (self.direction == -1) {
            if (animation.reversed() == false) {
              animation.reversed(true);
            }
            const velocity = self.getVelocity();
            if (additionalXAnim) additionalXAnim.kill();
            additionalX.val = -velocity / 4000;
            additionalXAnim = gsap.to(additionalX, { val: 0, duration: 1 });
          }
        },
      });
    });
  }, [setItemPos, delta]);

  setTimeout(() => {}, 1000);

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
