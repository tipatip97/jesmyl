import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z',
  d2: 'M2.96388 16.289C2.34585 14.9892 2 13.535 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.5778 22 9.22492 21.7031 8 21.1679M2.96388 16.289C2.38605 16.6396 2 17.2747 2 18C2 19.1046 2.89543 20 4 20C4.52223 20 4.99771 19.7998 5.35392 19.4721C5.75112 19.1065 6 18.5823 6 18C6 16.8954 5.10457 16 4 16C3.6207 16 3.26606 16.1056 2.96388 16.289Z',
  d3: 'M16.3283 14.5048C15.9751 14.1908 15.5098 14 15 14C13.8954 14 13 14.8954 13 16C13 16.3067 13.069 16.5972 13.1924 16.8569M16.3283 14.5048C16.7404 14.8711 17 15.4052 17 16C17 17.1046 16.1046 18 15 18C14.2021 18 13.5133 17.5328 13.1924 16.8569M16.3283 14.5048C16.7555 13.7683 17 12.9127 17 12C17 11.0893 16.7565 10.2354 16.3311 9.5M13.1924 16.8569C12.8103 16.9504 12.4109 17 12 17C9.23858 17 7 14.7614 7 12C7 11.0893 7.24349 10.2354 7.66891 9.5',
  d4: 'M2 18C2 19.1046 2.89543 20 4 20C4.52223 20 4.99771 19.7998 5.35392 19.4721C5.75112 19.1065 6 18.5823 6 18C6 16.8954 5.10457 16 4 16C3.6207 16 3.26606 16.1056 2.96388 16.289C2.38605 16.6396 2 17.2747 2 18Z',
  d5: 'M15 18C16.1046 18 17 17.1046 17 16C17 15.4052 16.7404 14.8711 16.3283 14.5048C15.9751 14.1908 15.5098 14 15 14C13.8954 14 13 14.8954 13 16C13 16.3067 13.069 16.5972 13.1924 16.8569C13.5133 17.5328 14.2021 18 15 18Z',
  d6: 'M2.96388 16.289C2.34585 14.9892 2 13.535 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.5778 22 9.22492 21.7031 8 21.1679',
  d7: 'M16.3283 14.5048C16.7555 13.7683 17 12.9127 17 12C17 11.0893 16.7565 10.2354 16.3311 9.5M13.1924 16.8569C12.8103 16.9504 12.4109 17 12 17C9.23858 17 7 14.7614 7 12C7 11.0893 7.24349 10.2354 7.66891 9.5',
  d8: 'M9.25 7C9.25 5.48122 10.4812 4.25 12 4.25C13.5188 4.25 14.75 5.48122 14.75 7C14.75 8.51878 13.5188 9.75 12 9.75C10.4812 9.75 9.25 8.51878 9.25 7Z',
  d9: 'M2.57478 15.6478C2.99095 15.3952 3.47966 15.25 4 15.25C5.51878 15.25 6.75 16.4812 6.75 18C6.75 18.8007 6.40682 19.5224 5.86177 20.0239C5.37258 20.4741 4.71765 20.75 4 20.75C2.48122 20.75 1.25 19.5188 1.25 18C1.25 17.0019 1.78223 16.1288 2.57478 15.6478Z',
  d10: 'M12.25 16C12.25 14.4812 13.4812 13.25 15 13.25C15.7005 13.25 16.3414 13.5129 16.8266 13.9443C17.392 14.4469 17.75 15.1821 17.75 16C17.75 17.5188 16.5188 18.75 15 18.75C13.9018 18.75 12.9554 18.1062 12.5149 17.1787C12.3448 16.8205 12.25 16.4203 12.25 16Z',
  d11: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 13.3519 3.50887 14.63 4.05182 15.7718C4.2836 16.2593 4.07634 16.8423 3.5889 17.0741C3.10147 17.3058 2.51844 17.0986 2.28666 16.6112C1.62166 15.2126 1.25 13.6483 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.4729 22.75 9.01779 22.431 7.69964 21.8551C7.20505 21.639 6.97929 21.0629 7.19538 20.5683C7.41148 20.0737 7.9876 19.8479 8.48218 20.064C9.5582 20.5342 10.7473 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455Z',
  d12: 'M8.25669 8.71089C8.72389 8.98114 8.88354 9.57897 8.61328 10.0462C8.28125 10.6201 8.09091 11.2864 8.09091 12C8.09091 14.1589 9.84107 15.9091 12 15.9091C12.3227 15.9091 12.635 15.8702 12.933 15.7973C13.4573 15.669 13.9863 15.99 14.1145 16.5143C14.2428 17.0386 13.9218 17.5676 13.3975 17.6958C12.9487 17.8056 12.4804 17.8636 12 17.8636C8.7616 17.8636 6.13636 15.2384 6.13636 12C6.13636 10.9336 6.42193 9.93093 6.92141 9.06747C7.19167 8.60028 7.78949 8.44063 8.25669 8.71089ZM15.7433 8.71089C16.2105 8.44063 16.8083 8.60028 17.0786 9.06747C17.5781 9.93093 17.8636 10.9336 17.8636 12C17.8636 13.0687 17.5768 14.0734 17.0753 14.9381C16.8046 15.405 16.2066 15.564 15.7397 15.2933C15.2728 15.0225 15.1138 14.4245 15.3846 13.9576C15.7179 13.3827 15.9091 12.7152 15.9091 12C15.9091 11.2864 15.7188 10.6201 15.3867 10.0462C15.1165 9.57897 15.2761 8.98114 15.7433 8.71089Z',
  d13: 'M3.20455 12C3.20455 7.1424 7.1424 3.20455 12 3.20455C16.8576 3.20455 20.7955 7.1424 20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C10.7473 20.7955 9.5582 20.5342 8.48218 20.064C7.9876 19.8479 7.41148 20.0737 7.19538 20.5683C6.97929 21.0629 7.20505 21.639 7.69964 21.8551C9.01779 22.431 10.4729 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.4371 1.53251 14.8103 2.04562 16.0655C2.20392 15.9055 2.38162 15.765 2.57478 15.6478C2.94433 15.4235 3.37108 15.2839 3.82638 15.2554C3.42536 14.2495 3.20455 13.1515 3.20455 12Z',
  d14: 'M8.61328 10.0462C8.88354 9.57897 8.72389 8.98114 8.25669 8.71089C7.78949 8.44063 7.19167 8.60028 6.92141 9.06747C6.42193 9.93093 6.13636 10.9336 6.13636 12C6.13636 15.2384 8.7616 17.8636 12 17.8636C12.3106 17.8636 12.6162 17.8394 12.9146 17.7926C12.7555 17.6076 12.6206 17.4013 12.5149 17.1787C12.3448 16.8205 12.25 16.4203 12.25 16C12.25 15.9669 12.2506 15.934 12.2517 15.9011C12.1686 15.9064 12.0847 15.9091 12 15.9091C9.84107 15.9091 8.09091 14.1589 8.09091 12C8.09091 11.2864 8.28125 10.6201 8.61328 10.0462Z',
  d15: 'M17.3052 14.5001C17.1708 14.2939 17.0096 14.1069 16.8266 13.9443C16.5029 13.6564 16.1098 13.4436 15.6759 13.3338C15.8268 12.9182 15.9091 12.4694 15.9091 12C15.9091 11.2864 15.7188 10.6201 15.3867 10.0462C15.1165 9.57897 15.2761 8.98114 15.7433 8.71089C16.2105 8.44063 16.8083 8.60028 17.0786 9.06747C17.5781 9.93093 17.8636 10.9336 17.8636 12C17.8636 12.8928 17.6635 13.741 17.3052 14.5001Z',
  d16: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 13.3519 3.50887 14.63 4.05182 15.7718L2.28666 16.6112C1.62166 15.2126 1.25 13.6483 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.4729 22.75 9.01779 22.431 7.69964 21.8551L8.48218 20.064C9.5582 20.5342 10.7473 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455ZM15.9091 12C15.9091 11.2864 15.7188 10.6201 15.3867 10.0462L17.0786 9.06747C17.5781 9.93093 17.8636 10.9336 17.8636 12C17.8636 13.0687 17.5768 14.0734 17.0753 14.9381L15.3846 13.9576C15.7179 13.3827 15.9091 12.7152 15.9091 12ZM8.61328 10.0462C8.28125 10.6201 8.09091 11.2864 8.09091 12C8.09091 14.1589 9.84107 15.9091 12 15.9091C12.3227 15.9091 12.635 15.8702 12.933 15.7973L13.3975 17.6958C12.9487 17.8056 12.4804 17.8636 12 17.8636C8.7616 17.8636 6.13636 15.2384 6.13636 12C6.13636 10.9336 6.42193 9.93093 6.92141 9.06747L8.61328 10.0462Z',
} as const;

export const IconOrbit02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orbit-02-stroke-rounded IconOrbit02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOrbit02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orbit-02-duotone-rounded IconOrbit02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOrbit02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orbit-02-twotone-rounded IconOrbit02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOrbit02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orbit-02-solid-rounded IconOrbit02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOrbit02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orbit-02-bulk-rounded IconOrbit02BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconOrbit02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orbit-02-stroke-sharp IconOrbit02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconOrbit02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="orbit-02-solid-sharp IconOrbit02SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOrbit02: TheIconSelfPack = {
  name: 'Orbit02',
  StrokeRounded: IconOrbit02StrokeRounded,
  DuotoneRounded: IconOrbit02DuotoneRounded,
  TwotoneRounded: IconOrbit02TwotoneRounded,
  SolidRounded: IconOrbit02SolidRounded,
  BulkRounded: IconOrbit02BulkRounded,
  StrokeSharp: IconOrbit02StrokeSharp,
  SolidSharp: IconOrbit02SolidSharp,
};