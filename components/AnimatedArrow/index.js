import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedArrow = () => {
  const arrowSpringProps = useSpring({
    from: { transform: 'translateY(0)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-5px)' });
        await next({ transform: 'translateY(0)' });
      }
    },
    loop: true,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <animated.div style={arrowSpringProps}>
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderBottom: '20px solid var(--lightGrey)',
            borderRadius: '4px',
          }}
        />
      </animated.div>
      <animated.div
        style={{
          width: '8px',
          height: '40px',
          background: 'var(--lightGrey)',
          borderRadius: '4px',
          transform: arrowSpringProps.transform,
        }}
      />
    </div>
  );
};

export default AnimatedArrow;
