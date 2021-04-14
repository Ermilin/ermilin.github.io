---
title: 'React Marquee'
description: 'An infinite carousel built using React and GSAP'
image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg'
---

## Libraries

### React

**useRef()** is used to save DOM elements in a variable.  
**useEffect()** is used to:

1. create new elements
1. position the elements
1. animate

**createRef()** creates references to the newly created elements.  
**useState()** stores strings and the widest element width.

### GSAP

**set()** sets the position of the elements.  
**to()** animates the elements.

## Code Structure

### Cloning

1.  Array of strings coming in as props to the marquee component
2.  Store each element as a ref

```javascript
let els = useRef(items.map(() => createRef()));
```

3.  Measure the width of the caontainer and the props
4.  Keep cloning elements if the container width is greater than the total width of the elements
5.  Find the widest element to offset the container with
    <!-- // if (maxWidth < width) {
    // maxWidth = width;
    // } -->

```javascript
const [items, setItems] = useState(props.data);

useEffect(() => {
  let totalWidth = 0;
  let arr = items;
  while (totalWidth < containerWidth) {
    els.forEach((item, i) => {
      let width = item.getBoundingClientRect().width;

      if (totalWidth < containerWidth) {
        arr.push(item.textContent);
      }
      totalWidth = totalWidth + width;
    });
  }
  setItems(arr);
}, []);
```

### Steps

The elements are placed on the X-axis using gsap.set and the total width of the placed elements which accumulates throughout the iteration.

```javascript
let accWidth = 0;
els.forEach((item) => {
  let width = item.getBoundingClientRect().width;
  gsap.set(item, {
    x: accWidth,
  });
  accWidth = accWidth + width;
});
```

### Animation

1. Each item animates from its initial position to the total width of every element combined
1. When the element has reached the end, it has to place itself at the end of the row, this is done with a modulus of the total width using gsap.utils.wrap()
1. **delta** is either **1** or **-1** depending on the direction of the animation

```javascript
const wrap = gsap.utils.wrap(0, accWidth);
const animation = gsap.to(els, {
  x: `+=${accWidth * delta}`,
  modifiers: {
    x: gsap.utils.unitize(wrap),
  },
  duration: accWidth / 50,
  ease: 'none',
  repeat: -1,
});
```

### Render

```javascript
<div ref={container}>
  <ul style={{ left: -maxElWidth }}>
    {items.map((e, i) => (
      <li key={i} ref={(e) => (els[i] = e)}>
        {e}
      </li>
    ))}
  </ul>
</div>
```

This is how I built my React marquee component using GSAP.
