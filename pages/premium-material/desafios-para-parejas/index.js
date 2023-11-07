import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const getRandomNumber = () => {
  // Generate a random number between 0 and 1
  return Math.random() < 0.5 ? 0 : 1;
};

const ABTestPage = () => {
  const router = useRouter();
  const [origin, setOrigin] = useState(null);
  const [userSegment, setUserSegment] = useState(null);

  

  useEffect(() => {
    if (router.isReady){
      if (router.query.origin) {
        setOrigin(router.query.origin);
      }
    }
  }, [router.isReady, origin]);

  console.log("orgin of origins");
  console.log(origin);

  useEffect(() => {
    // Generate the random number and set the user segment
    setUserSegment(getRandomNumber());
  }, []);

  //console.log('User Segment coming:', userSegment);

  useEffect(() => {
    // Check if userSegment is not null and redirect accordingly
    if (userSegment !== null && typeof window !== 'undefined') {
      const nextPage =
        userSegment === 0
          ? `/premium-material/desafios-para-parejas/testing-a?origin=${origin}`
          : `/premium-material/desafios-para-parejas/testing-b?origin=${origin}`;
      router.push(nextPage);
    }
  }, [userSegment, origin]);

  return null; // Return null during the first render
};

export default ABTestPage;







// import { useEffect, useState } from 'react';
// import TestingA from '@/components/desafios/testingA';
// import TestingB from '@/components/desafios/testingB';

// const getRandomNumber = () => {
//   // Generate a random number between 0 and 1
//   return Math.random() < 0.5 ? 0 : 1;
// };

// const ABTestPage = () => {
//   const [userSegment, setUserSegment] = useState(null);

//   useEffect(() => {
//     // Generate the random number and set the user segment
//     setUserSegment(getRandomNumber());
//   }, []);

//   //console.log('User Segment coming:', userSegment);

//   if (userSegment === null) {
//     return null; // Return null during the first render
//   }

//   return (
//     <div>
//       {userSegment === 0 ? <TestingA /> : <TestingB />}
//     </div>
//   );
// };

// export default ABTestPage;


