import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 22.0003V20.8357C17.5 19.913 17.9987 19.1864 18.5 18.5M8 22.0003C8 20.883 7.62579 19.527 6.93707 18.6472L3.33738 14.049C2.8758 13.4316 2.88907 12.5792 3.36965 11.9766C3.99772 11.189 5.16877 11.124 5.8797 11.8371L7.5 13.4625V7.5',
  d2: 'M13.5018 5.5C13.5018 4.67157 14.1733 4 15.0018 4C15.8302 4 16.5018 4.67157 16.5018 5.5V7.5M13.5018 5.5V3.5C13.5018 2.67157 12.8302 2 12.0018 2C11.1733 2 10.5018 2.67157 10.5018 3.5L10.502 5M13.5018 5.5V9.50024M10.502 5C10.5016 4.17187 9.83019 3.50117 9.00197 3.50064C8.17376 3.50011 8 4 8 4M10.502 5V6.50045M16.5018 12V7.5M16.5018 7.5C16.5018 6.67157 17.1733 6 18.0018 6C18.8302 6 19.5018 6.67157 19.5018 7.5V13.6668C19.5018 14.3812 19.5018 14.9897 19.49 15.5',
  d3: 'M2 2L22 22',
  d4: 'M6.93707 18.6471L3.33738 14.0489C2.8758 13.4315 2.88907 12.5791 3.36965 11.9765C3.99772 11.1889 5.16877 11.1239 5.8797 11.837L7.5 13.4624L7.50015 7.5L18.6694 18.6471C18.475 18.9144 18.2585 19.1756 18.0652 19.3964C17.7148 19.7964 17.5 20.3038 17.5 20.8356V22.0002H8C8 20.8829 7.62579 19.5269 6.93707 18.6471Z',
  d5: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d6: 'M16.8245 11.9998V4.66345C16.8245 3.95337 16.2489 3.37773 15.5388 3.37773C14.8287 3.37773 14.2531 3.95337 14.2531 4.66345V10.7169L20.1799 16.6437C20.1919 16.522 20.2018 16.3967 20.21 16.2673C20.2529 15.592 20.2529 14.7571 20.2529 13.6924V13.6924V6.55814C20.2529 5.84812 19.6773 5.27253 18.9673 5.27253C18.2572 5.27253 17.6816 5.84812 17.6816 6.55814V11.9998C17.6816 12.2311 17.4898 12.4186 17.2531 12.4186C17.0164 12.4186 16.8245 12.2311 16.8245 11.9998Z',
  d7: 'M18.2529 20.8354C18.2529 20.5076 18.3861 20.1713 18.6322 19.8903C18.7995 19.6994 19.0016 19.4593 19.1981 19.1974L7.39593 7.39526V13.6331C7.39593 13.8026 7.29136 13.9554 7.13105 14.0202C6.97074 14.0849 6.7863 14.0489 6.66384 13.9288L4.81206 12.1134C4.1804 11.4942 3.14033 11.5505 2.58203 12.2347C2.37404 12.4895 2.2644 12.7959 2.25391 13.1051C2.25821 13.2525 2.27578 13.3995 2.30666 13.5444C2.35509 13.7173 2.43637 13.8836 2.55066 14.0339L6.34937 19.1092C6.59183 19.4189 6.80009 19.8239 6.95634 20.2803C7.12928 20.7853 7.28285 21.2339 7.41725 21.548C7.54291 21.8417 7.72014 22.1987 8.03506 22.4238C8.32623 22.6318 8.65569 22.6956 8.9459 22.7233C9.22627 22.75 9.57436 22.75 9.96881 22.7499L16.37 22.75C16.4897 22.7501 16.6141 22.7502 16.7284 22.7353C17.516 22.633 18.1359 22.0131 18.2383 21.2255C18.2531 21.1112 18.253 20.9551 18.2529 20.8354Z',
  d8: 'M8.68176 2.75042C9.39191 2.75042 9.9676 3.32611 9.9676 4.03625V6.4314L7.40654 3.87034C7.48792 3.23856 8.02784 2.75042 8.68176 2.75042Z',
  d9: 'M12.1105 1.25C12.8207 1.25 13.3964 1.82571 13.3964 2.53587L13.396 9.85978L10.8247 7.28854V2.53581C10.8247 1.82568 11.4004 1.25 12.1105 1.25Z',
  d10: 'M18.2529 20.8346C18.2529 20.5069 18.3861 20.1706 18.6322 19.8896C18.7995 19.6986 19.0016 19.4586 19.1981 19.1967L7.39593 7.39453V13.6324C7.39593 13.8019 7.29136 13.9547 7.13105 14.0195C6.97074 14.0842 6.7863 14.0481 6.66384 13.9281L4.81206 12.1127C4.1804 11.4935 3.14033 11.5498 2.58203 12.2339C2.37404 12.4888 2.2644 12.7951 2.25391 13.1044C2.25821 13.2517 2.27578 13.3988 2.30666 13.5437C2.35509 13.7166 2.43637 13.8828 2.55066 14.0331L6.34937 19.1085C6.59183 19.4182 6.80009 19.8232 6.95634 20.2795C7.12928 20.7846 7.28285 21.2331 7.41725 21.5473C7.54291 21.841 7.72014 22.198 8.03506 22.423C8.32623 22.6311 8.65569 22.6949 8.9459 22.7225C9.22626 22.7493 9.57434 22.7492 9.96878 22.7492H9.96881L16.37 22.7492C16.4897 22.7494 16.6141 22.7495 16.7284 22.7346C17.516 22.6322 18.1359 22.0123 18.2383 21.2248C18.2531 21.1104 18.253 20.9544 18.2529 20.8346Z',
  d11: 'M14.251 5.5C14.251 4.67157 14.9225 4 15.751 4C16.5794 4 17.251 4.67157 17.251 5.5V7.5M14.251 5.5V3.5C14.251 2.67157 13.5794 2 12.751 2C11.9225 2 11.251 2.67157 11.251 3.5L11.2512 5M14.251 5.5V11M11.2512 5C11.2508 4.17187 10.5794 3.50064 9.75119 3.50064C8.92276 3.50064 8.25119 4.17221 8.25119 5.00064L8.25118 5.06823M11.2512 5V8.06823M18.251 22.0002V19.3964L18.7729 18.771M8.25098 22V19.5L4.08835 14.0489C3.62678 13.4315 3.64005 12.5791 4.12063 11.9765C4.7487 11.1889 5.91975 11.1239 6.63067 11.837L8.25098 13.4624L8.25111 8.24915M17.251 12V7.5M17.251 7.5C17.251 6.67157 17.9225 6 18.751 6C19.5794 6 20.251 6.67157 20.251 7.5V15.5501C20.251 15.9961 20.1765 16.4353 20.0336 16.8507',
  d12: 'M21.3377 22.75L1.25195 2.66421L2.66617 1.25L22.752 21.3358L21.3377 22.75Z',
  d13: 'M9.75 4.20221C9.74961 3.49502 9.1632 2.92168 8.43988 2.92168C7.89991 2.92168 7.43624 3.2411 7.2357 3.69724L9.75 6.21154V4.20221Z',
  d14: 'M4.60247 12.0936C3.96079 11.4642 2.90419 11.5214 2.33706 12.2168C1.90308 12.7489 1.89067 13.5018 2.30675 14.0474L2.3079 14.0489L7.12951 20.2229V22.7498L17.7244 22.75V20.098L18.8188 18.8159L7.12968 7.12675L7.12949 14.5724L4.60247 12.0936Z',
  d15: 'M20.0029 15.9547V6.987C20.0029 6.27948 19.4164 5.70592 18.6928 5.70592C17.9692 5.70592 17.3827 6.27948 17.3827 6.987V11.9999H16.5852V4.75904C16.5852 4.05152 15.9986 3.47796 15.2751 3.47796C14.5515 3.47796 13.965 4.05152 13.965 4.75904V10.4265L19.9738 16.4353C19.9931 16.2765 20.0029 16.116 20.0029 15.9547Z',
  d16: 'M13.1675 2.53108C13.1675 1.82356 12.5809 1.25 11.8574 1.25C11.1338 1.25 10.5473 1.82358 10.5472 2.53108L10.5474 7.00892L13.1675 9.62902V2.53108Z',
} as const;

export const IconDoNotTouch01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="do-not-touch-01-stroke-rounded IconDoNotTouch01StrokeRounded"
    >
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDoNotTouch01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="do-not-touch-01-duotone-rounded IconDoNotTouch01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDoNotTouch01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="do-not-touch-01-twotone-rounded IconDoNotTouch01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconDoNotTouch01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="do-not-touch-01-solid-rounded IconDoNotTouch01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconDoNotTouch01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="do-not-touch-01-bulk-rounded IconDoNotTouch01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoNotTouch01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="do-not-touch-01-stroke-sharp IconDoNotTouch01StrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDoNotTouch01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="do-not-touch-01-solid-sharp IconDoNotTouch01SolidSharp"
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

export const iconPackOfDoNotTouch01: TheIconSelfPack = {
  name: 'DoNotTouch01',
  StrokeRounded: IconDoNotTouch01StrokeRounded,
  DuotoneRounded: IconDoNotTouch01DuotoneRounded,
  TwotoneRounded: IconDoNotTouch01TwotoneRounded,
  SolidRounded: IconDoNotTouch01SolidRounded,
  BulkRounded: IconDoNotTouch01BulkRounded,
  StrokeSharp: IconDoNotTouch01StrokeSharp,
  SolidSharp: IconDoNotTouch01SolidSharp,
};