import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 6.50049C8.97247 6.50414 7.91075 6.55392 7.23223 7.23243C6.5 7.96467 6.5 9.14318 6.5 11.5002V12.5002C6.5 14.8572 6.5 16.0357 7.23223 16.768C7.96447 17.5002 9.14298 17.5002 11.5 17.5002H12.5C14.857 17.5002 16.0355 17.5002 16.7678 16.768C17.4463 16.0895 17.4961 15.0277 17.4997 13.0002',
  d2: 'M6.5 11.0005C4.47247 11.0041 3.41075 11.0539 2.73223 11.7324C2 12.4647 2 13.6432 2 16.0002V17.0002C2 19.3572 2 20.5357 2.73223 21.268C3.46447 22.0002 4.64298 22.0002 7 22.0002H8C10.357 22.0002 11.5355 22.0002 12.2678 21.268C12.9463 20.5895 12.9961 19.5277 12.9997 17.5002',
  d3: 'M12.5 17.4997H11.5C9.14298 17.4997 7.96447 17.4997 7.23223 16.7674C6.5 16.0352 6.5 14.8567 6.5 12.4997V11.4997C6.5 11.327 6.5 11.1606 6.50029 11.0002C4.47257 11.0039 3.41078 11.0536 2.73223 11.7322C2 12.4644 2 13.6429 2 16V17C2 19.357 2 20.5355 2.73223 21.2677C3.46447 22 4.64298 22 7 22H8C10.357 22 11.5355 22 12.2678 21.2677C12.9463 20.5891 12.9961 19.5273 12.9997 17.4994C12.8393 17.4997 12.6728 17.4997 12.5 17.4997Z',
  d4: 'M11 6.5C8.97247 6.50365 7.91075 6.55343 7.23223 7.23194C6.5 7.96418 6.5 9.14269 6.5 11.4997V12.4997C6.5 14.8567 6.5 16.0352 7.23223 16.7675C7.96447 17.4997 9.14298 17.4997 11.5 17.4997H12.5C14.857 17.4997 16.0355 17.4997 16.7678 16.7675C17.4463 16.089 17.4961 15.0272 17.4997 12.9997',
  d5: 'M6.5 11C4.47247 11.0037 3.41075 11.0534 2.73223 11.7319C2 12.4642 2 13.6427 2 15.9997V16.9997C2 19.3567 2 20.5352 2.73223 21.2675C3.46447 21.9997 4.64298 21.9997 7 21.9997H8C10.357 21.9997 11.5355 21.9997 12.2678 21.2675C12.9463 20.589 12.9961 19.5272 12.9997 17.4997',
  d6: 'M11 6.5C8.97247 6.50365 7.91075 6.55343 7.23223 7.23194C6.5 7.96418 6.5 9.14269 6.5 11.4997V12.4997C6.5 14.8567 6.5 16.0352 7.23223 16.7675C7.96447 17.4997 9.14298 17.4997 11.5 17.4997H12.5C14.857 17.4997 16.0355 17.4997 16.7678 16.7675C17.4463 16.089 17.4961 15.0272 17.4997 12.9997M6.5 11C4.47247 11.0037 3.41075 11.0534 2.73223 11.7319C2 12.4642 2 13.6427 2 15.9997V16.9997C2 19.3567 2 20.5352 2.73223 21.2675C3.46447 21.9997 4.64298 21.9997 7 21.9997H8C10.357 21.9997 11.5355 21.9997 12.2678 21.2675C12.9463 20.589 12.9961 19.5272 12.9997 17.4997',
  d7: 'M17.0537 1.25C18.1865 1.24998 19.1123 1.24996 19.8431 1.34822C20.6071 1.45093 21.2694 1.67321 21.7981 2.2019C22.3268 2.7306 22.5491 3.39294 22.6518 4.15689C22.75 4.88775 22.75 5.81348 22.75 6.94631V8.05369C22.75 9.18652 22.75 10.1123 22.6518 10.8431C22.5491 11.6071 22.3268 12.2694 21.7981 12.7981C21.2694 13.3268 20.6071 13.5491 19.8431 13.6518C19.1123 13.75 18.1865 13.75 17.0537 13.75H15.9463C14.8135 13.75 13.8877 13.75 13.1569 13.6518C12.3929 13.5491 11.7306 13.3268 11.2019 12.7981C10.6732 12.2694 10.4509 11.6071 10.3482 10.8431C10.25 10.1123 10.25 9.18654 10.25 8.05372V8.05369V6.94631V6.94629C10.25 5.81346 10.25 4.88774 10.3482 4.15689C10.4509 3.39293 10.6732 2.7306 11.2019 2.2019C11.7306 1.67321 12.3929 1.45093 13.1569 1.34822C13.8877 1.24996 14.8135 1.24998 15.9463 1.25H15.9463H17.0537H17.0537Z',
  d8: 'M15.8744 14.9987C14.801 14.9988 13.8049 14.9989 12.9903 14.8894C12.0883 14.7681 11.1179 14.4806 10.318 13.6807C9.5181 12.8808 9.23064 11.9104 9.10937 11.0084C8.99985 10.1938 8.99992 9.1977 9 8.12437V6.87312C8.99998 6.63041 8.99996 6.39165 9.00121 6.15804C9.00128 6.14509 9.00132 6.13859 9.00106 6.1319C8.99448 5.96467 8.84132 5.83 8.67463 5.84487C8.66795 5.84547 8.66426 5.84597 8.65689 5.84696C7.89294 5.94967 7.2306 6.17195 6.70191 6.70064C6.17321 7.22934 5.95093 7.89167 5.84822 8.65563C5.74996 9.38648 5.74998 10.3122 5.75 11.445V12.5524C5.74998 13.6852 5.74996 14.611 5.84822 15.3419C5.95093 16.1058 6.17321 16.7681 6.70191 17.2968C7.2306 17.8255 7.89294 18.0478 8.65689 18.1505C9.38775 18.2488 10.3135 18.2488 11.4463 18.2487H12.5537C13.6865 18.2488 14.6123 18.2488 15.3431 18.1505C16.1071 18.0478 16.7694 17.8255 17.2981 17.2968C17.8268 16.7681 18.0491 16.1058 18.1518 15.3419C18.1528 15.3345 18.1533 15.3308 18.1539 15.3241C18.1687 15.1574 18.0341 15.0043 17.8668 14.9977C17.8602 14.9974 17.8537 14.9975 17.8407 14.9975C17.6071 14.9988 17.3683 14.9988 17.1256 14.9987H15.8744Z',
  d9: 'M4.5 11.3729C4.49998 11.1303 4.49996 10.8916 4.50121 10.658C4.50128 10.6451 4.50132 10.6386 4.50105 10.6319C4.49448 10.4647 4.34132 10.33 4.17463 10.3449C4.16795 10.3455 4.16426 10.346 4.15689 10.347C3.39294 10.4497 2.7306 10.6719 2.20191 11.2006C1.67321 11.7293 1.45093 12.3917 1.34822 13.1556C1.24996 13.8865 1.24998 14.8122 1.25 15.945V17.0524C1.24998 18.1852 1.24996 19.111 1.34822 19.8419C1.45093 20.6058 1.67321 21.2681 2.20191 21.7968C2.7306 22.3255 3.39294 22.5478 4.15689 22.6505C4.88775 22.7488 5.81348 22.7488 6.94632 22.7487H8.05369C9.18652 22.7488 10.1123 22.7488 10.8431 22.6505C11.6071 22.5478 12.2694 22.3255 12.7981 21.7968C13.3268 21.2681 13.5491 20.6058 13.6518 19.8419C13.6528 19.8343 13.6533 19.8306 13.6539 19.8238C13.6687 19.6572 13.5341 19.5042 13.367 19.4975C13.3602 19.4973 13.3536 19.4973 13.3406 19.4974C13.107 19.4986 12.8682 19.4986 12.6256 19.4986H11.3744C10.3011 19.4987 9.30491 19.4987 8.49033 19.3892C7.58834 19.2679 6.61795 18.9805 5.81802 18.1806C5.0181 17.3806 4.73064 16.4102 4.60937 15.5083C4.49985 14.6937 4.49992 13.6975 4.5 12.6242V11.3729Z',
  d10: 'M11 6.5H6.5V17.5H17.5V13',
  d11: 'M6.5 11H2V22H13V17.5',
  d12: 'M10.25 2C10.25 1.58579 10.5858 1.25 11 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V13C22.75 13.4142 22.4142 13.75 22 13.75H11C10.5858 13.75 10.25 13.4142 10.25 13V2Z',
  d13: 'M9.25 5.75H6.5C6.08579 5.75 5.75 6.08579 5.75 6.5V17.5C5.75 17.9142 6.08579 18.25 6.5 18.25H17.5C17.9142 18.25 18.25 17.9142 18.25 17.5V14.75H9.25V5.75Z',
  d14: 'M4.75 10.25H2C1.58579 10.25 1.25 10.5858 1.25 11V22C1.25 22.4142 1.58579 22.75 2 22.75H13C13.4142 22.75 13.75 22.4142 13.75 22V19.25H4.75V10.25Z',
} as const;

export const IconLayers02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-02-stroke-rounded IconLayers02StrokeRounded"
    >
      <rect 
        x="11" 
        y="2" 
        width="11" 
        height="11" 
        rx="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-02-duotone-rounded IconLayers02DuotoneRounded"
    >
      <rect 
        opacity="0.3" 
        x="11" 
        y="2" 
        width="11" 
        height="11" 
        rx="2.5" 
        fill="var(--icon-fill)"></rect>
      <path 
        opacity="0.3" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <rect 
        x="11" 
        y="2" 
        width="11" 
        height="11" 
        rx="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-02-twotone-rounded IconLayers02TwotoneRounded"
    >
      <rect 
        x="11" 
        y="2" 
        width="11" 
        height="11" 
        rx="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-02-solid-rounded IconLayers02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-02-bulk-rounded IconLayers02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-02-stroke-sharp IconLayers02StrokeSharp"
    >
      <rect 
        x="11" 
        y="2" 
        width="11" 
        height="11" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayers02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layers-02-solid-sharp IconLayers02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayers02: TheIconSelfPack = {
  name: 'Layers02',
  StrokeRounded: IconLayers02StrokeRounded,
  DuotoneRounded: IconLayers02DuotoneRounded,
  TwotoneRounded: IconLayers02TwotoneRounded,
  SolidRounded: IconLayers02SolidRounded,
  BulkRounded: IconLayers02BulkRounded,
  StrokeSharp: IconLayers02StrokeSharp,
  SolidSharp: IconLayers02SolidSharp,
};