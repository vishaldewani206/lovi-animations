import { useMediaQuery } from 'react-responsive';

export const useScreenSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      from: 30,
      to: 300,
    };
  }

  if (isTablet) {
    return {
      from: 40,
      to: 400,
    };
  }

  return {
    from: 50,
    to: 500,
  };
};

export const useScreenBoxSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return [
      {
        x: '-left-10',
        y: '-top-0',
        stickX: 'left-20',
        stickY: 'top-10',
        stickRotation: 'rotate-z-32',
        stickLength: "w-10",
        circleX: 'left-29',
        circleY: 'top-12',
      },
      {
        x: '-left-10',
        y: 'top-55',
        stickX: 'left-14',
        stickY: 'top-52',
        stickRotation: '-rotate-z-66',
        stickLength: "w-10",
        circleX: 'left-20',
        circleY: 'top-44',
      },
      {
        x: 'left-45',
        y: 'top-60',
        stickX: 'left-48',
        stickY: 'top-56',
        stickRotation: 'rotate-z-52',
        stickLength: "w-10",
        circleX: 'left-47',
        circleY: 'top-49',
      },
    ];
  }

  return [
    {
      x: '-left-35',
      y: '-top-20',
      stickX: '',
      stickY: 'top-10',
      stickRotation: 'rotate-z-32',
      stickLength: "w-40",
      circleX: 'left-36',
      circleY: 'top-19',
    },
    {
      x: '-left-35',
      y: 'top-80',
      stickX: 'left-0',
      stickY: 'top-85',
      stickRotation: '-rotate-z-32',
      stickLength: "w-20",
      circleX: 'left-18',
      circleY: 'top-74',
    },
    {
      x: 'left-85',
      y: 'top-50',
      stickX: 'left-68',
      stickY: 'top-75',
      stickRotation: '-rotate-z-32',
      stickLength: "w-20",
      circleX: 'left-62',
      circleY: 'top-78',
    },
  ];
};

export const useMobileSettings = ()=>{
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if(isMobile) return {x: 100}

  if(isTablet) return {x: 200}

  return {
    x: 250
  }
}

export const useImageSettings = ()=>{
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if(isMobile){
    return {
      first: 70,
      second: 10,
      from: 300
    }
  }

  return{
    first: 70,
    second: 10,
    from: 300
  }
}