import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.59 17.7408C14.9612 18.162 13.3126 19.0221 14.3167 20.0983C14.8072 20.624 15.3536 21 16.0404 21H18H19.9596C20.6464 21 21.1928 20.624 21.6833 20.0983C22.6874 19.0221 21.0388 18.162 20.41 17.7408C18.9355 16.7531 17.0645 16.7531 15.59 17.7408Z',
  d2: 'M20 12.5C20 13.6046 19.1046 14.5 18 14.5C16.8954 14.5 16 13.6046 16 12.5C16 11.3954 16.8954 10.5 18 10.5C19.1046 10.5 20 11.3954 20 12.5Z',
  d3: 'M10 6H15M10 3H18',
  d4: 'M7 9.5V14C7 14.9428 7 15.4142 6.70711 15.7071C6.41421 16 5.94281 16 5 16H4C3.05719 16 2.58579 16 2.29289 15.7071C2 15.4142 2 14.9428 2 14V11.5C2 10.5572 2 10.0858 2.29289 9.79289C2.58579 9.5 3.05719 9.5 4 9.5H7ZM7 9.5H12',
  d5: 'M6.5 5C6.5 6.10457 5.60457 7 4.5 7C3.39543 7 2.5 6.10457 2.5 5C2.5 3.89543 3.39543 3 4.5 3C5.60457 3 6.5 3.89543 6.5 5Z',
  d6: 'M15.592 17.7408C14.9632 18.162 13.3146 19.0221 14.3187 20.0983C14.8092 20.624 15.3556 21 16.0424 21H18.002H19.9616C20.6484 21 21.1948 20.624 21.6853 20.0983C22.6894 19.0221 21.0408 18.162 20.412 17.7408C18.9375 16.7531 17.0665 16.7531 15.592 17.7408Z',
  d7: 'M4.00195 16C3.05914 16 2.58774 16 2.29484 15.7071C2.00195 15.4142 2.00195 14.9428 2.00195 14V11.5C2.00195 10.5572 2.00195 10.0858 2.29484 9.79289C2.58774 9.5 3.05914 9.5 4.00195 9.5H7.00195V14C7.00195 14.9428 7.00195 15.4142 6.70906 15.7071C6.41616 16 5.94476 16 5.00195 16H4.00195Z',
  d8: 'M20.002 12.5C20.002 13.6046 19.1066 14.5 18.002 14.5C16.8974 14.5 16.002 13.6046 16.002 12.5C16.002 11.3954 16.8974 10.5 18.002 10.5C19.1066 10.5 20.002 11.3954 20.002 12.5Z',
  d9: 'M7.00195 9.5V14C7.00195 14.9428 7.00195 15.4142 6.70906 15.7071C6.41616 16 5.94476 16 5.00195 16H4.00195C3.05914 16 2.58774 16 2.29484 15.7071C2.00195 15.4142 2.00195 14.9428 2.00195 14V11.5C2.00195 10.5572 2.00195 10.0858 2.29484 9.79289C2.58774 9.5 3.05914 9.5 4.00195 9.5H7.00195ZM7.00195 9.5H12.002',
  d10: 'M6.50195 5C6.50195 6.10457 5.60652 7 4.50195 7C3.39738 7 2.50195 6.10457 2.50195 5C2.50195 3.89543 3.39738 3 4.50195 3C5.60652 3 6.50195 3.89543 6.50195 5Z',
  d11: 'M10 6H15.0291M10 3H17.9683',
  d12: 'M15.1727 17.1177C16.8998 15.9608 19.1004 15.9608 20.8275 17.1177C21.1375 17.3137 21.8435 17.7614 22.2143 18.1697C22.4496 18.4288 22.6977 18.7967 22.7429 19.2626C22.7915 19.7627 22.5935 20.2221 22.2317 20.6099C21.6846 21.1963 20.953 21.75 19.9597 21.75H16.0405C15.0472 21.75 14.3156 21.1963 13.7685 20.6099C13.4067 20.2221 13.2087 19.7627 13.2573 19.2626C13.3025 18.7967 13.5506 18.4288 13.7859 18.1697C14.1567 17.7614 14.8627 17.3137 15.1727 17.1177Z',
  d13: 'M15.25 12.5C15.25 10.9812 16.4812 9.75 18 9.75C19.5188 9.75 20.75 10.9812 20.75 12.5C20.75 14.0188 19.5188 15.25 18 15.25C16.4812 15.25 15.25 14.0188 15.25 12.5Z',
  d14: 'M9 3.25C9 2.69772 9.44772 2.25 10 2.25H18C18.5523 2.25 19 2.69772 19 3.25C19 3.80228 18.5523 4.25 18 4.25H10C9.44772 4.25 9 3.80228 9 3.25ZM9 6.25C9 5.69772 9.44772 5.25 10 5.25H15C15.5523 5.25 16 5.69772 16 6.25C16 6.80228 15.5523 7.25 15 7.25H10C9.44772 7.25 9 6.80228 9 6.25Z',
  d15: 'M7.70671 15.1972C7.75011 14.8744 7.75006 14.4776 7.75001 14.0448L7.75001 10.75H11.75C12.3023 10.75 12.75 10.3023 12.75 9.75C12.75 9.19772 12.3023 8.75 11.75 8.75H5.75L5.7467 8.75001L3.95526 8.75C3.52244 8.74995 3.12561 8.74991 2.8028 8.79331C2.44732 8.8411 2.07159 8.95355 1.76257 9.26257C1.45355 9.57159 1.3411 9.94732 1.29331 10.3028C1.24991 10.6256 1.24995 11.0224 1.25 11.4553V14.0448C1.24995 14.4776 1.24991 14.8744 1.29331 15.1972C1.3411 15.5527 1.45355 15.9284 1.76257 16.2374C2.07159 16.5465 2.44732 16.6589 2.8028 16.7067C3.1256 16.7501 3.52246 16.7501 3.95525 16.75H3.95526H5.0448H5.04481C5.47761 16.7501 5.87442 16.7501 6.19721 16.7067C6.5527 16.6589 6.92842 16.5465 7.23744 16.2374C7.54647 15.9284 7.65891 15.5527 7.70671 15.1972Z',
  d16: 'M1.75 5C1.75 3.48122 2.98122 2.25 4.5 2.25C6.01878 2.25 7.25 3.48122 7.25 5C7.25 6.51878 6.01878 7.75 4.5 7.75C2.98122 7.75 1.75 6.51878 1.75 5Z',
  d17: 'M22 20.9836H14C14 18.7766 15.7909 16.9873 18 16.9873C20.2091 16.9873 22 18.7766 22 20.9836Z',
  d18: 'M20 12.4913C20 13.5949 19.1046 14.4895 18 14.4895C16.8954 14.4895 16 13.5949 16 12.4913C16 11.3877 16.8954 10.4932 18 10.4932C19.1046 10.4932 20 11.3877 20 12.4913Z',
  d19: 'M7 9.49414V15.9882H2V9.49414H7ZM7 9.49414H12',
  d20: 'M6.5 4.99816C6.5 6.10171 5.60457 6.99631 4.5 6.99631C3.39543 6.99631 2.5 6.10171 2.5 4.99816C2.5 3.8946 3.39543 3 4.5 3C5.60457 3 6.5 3.8946 6.5 4.99816Z',
  d21: 'M9.00391 6.00586H14.9888',
  d22: 'M9.0332 2.98242H17.9995',
  d23: 'M13.25 21C13.25 18.3766 15.3766 16.25 18 16.25C20.6234 16.25 22.75 18.3766 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H14C13.5858 21.75 13.25 21.4142 13.25 21Z',
  d24: 'M9 2.25H18V4.25H9V2.25ZM15 7.25H9V5.25H15V7.25Z',
  d25: 'M2 8.75C1.58579 8.75 1.25 9.08579 1.25 9.5L1.25 16C1.25 16.1989 1.32902 16.3897 1.46967 16.5303C1.61032 16.671 1.80109 16.75 2 16.75H7C7.41422 16.75 7.75 16.4142 7.75 16V10.75H12V8.75H2Z',
} as const;

export const IconMentorStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mentor-stroke-rounded IconMentorStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconMentorDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mentor-duotone-rounded IconMentorDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMentorTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mentor-twotone-rounded IconMentorTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconMentorSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mentor-solid-rounded IconMentorSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMentorBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mentor-bulk-rounded IconMentorBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMentorStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mentor-stroke-sharp IconMentorStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMentorSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mentor-solid-sharp IconMentorSolidSharp"
    >
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMentor: TheIconSelfPack = {
  name: 'Mentor',
  StrokeRounded: IconMentorStrokeRounded,
  DuotoneRounded: IconMentorDuotoneRounded,
  TwotoneRounded: IconMentorTwotoneRounded,
  SolidRounded: IconMentorSolidRounded,
  BulkRounded: IconMentorBulkRounded,
  StrokeSharp: IconMentorStrokeSharp,
  SolidSharp: IconMentorSolidSharp,
};