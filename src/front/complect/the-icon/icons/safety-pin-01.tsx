import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5459 3.79364L12.2929 5.4104C11.2216 6.79272 13.3531 8.46736 14.4395 7.07557L14.8139 6.59591C15.5066 5.70846 16.8119 5.61801 17.5969 6.40307C18.382 7.18812 18.2915 8.49338 17.4041 9.18609L16.9244 9.56049C15.5326 10.6469 17.2073 12.7784 18.5896 11.7071L20.2064 10.4541C22.4319 8.7293 22.6147 5.42276 20.596 3.40405C18.5772 1.38533 15.2707 1.56805 13.5459 3.79364Z',
  d2: 'M3 17.4103L12 7M6.58974 21L17 12',
  d3: 'M21.1263 2.8736C18.7966 0.543941 14.9618 0.742184 12.9531 3.33411L11.7001 4.95086C11.3024 5.46405 11.1782 6.0484 11.2883 6.59693C11.3944 7.12575 11.7068 7.57082 12.0956 7.87435C12.4844 8.17791 12.9928 8.37342 13.5334 8.34585C14.0942 8.31726 14.63 8.0503 15.0308 7.53694L15.4052 7.05728C15.8279 6.51563 16.6086 6.47522 17.0666 6.93329C17.5247 7.39135 17.4843 8.17198 16.9426 8.59476L16.463 8.96917C15.9496 9.36987 15.6827 9.90573 15.6541 10.4666C15.6265 11.0072 15.822 11.5155 16.1256 11.9043C16.4291 12.2931 16.8742 12.6055 17.403 12.7116C17.9515 12.8217 18.5359 12.6975 19.0491 12.2998L20.6658 11.0468C23.2577 9.0381 23.456 5.20327 21.1263 2.8736Z',
  d4: 'M4.5 18C3.67157 18 3 18.6716 3 19.5C3 20.3284 3.67157 21 4.5 21C5.32843 21 6 20.3284 6 19.5C6 18.6716 5.32843 18 4.5 18ZM1 19.5C1 17.567 2.567 16 4.5 16C6.433 16 8 17.567 8 19.5C8 21.433 6.433 23 4.5 23C2.567 23 1 21.433 1 19.5Z',
  d5: 'M12.654 6.24353C13.0718 6.60473 13.1177 7.23623 12.7565 7.65402L3.7565 18.0643C3.39531 18.4821 2.7638 18.528 2.34601 18.1668C1.92821 17.8056 1.88233 17.1741 2.24353 16.7563L11.2435 6.34601C11.6047 5.92821 12.2362 5.88233 12.654 6.24353ZM17.7565 11.346C18.1177 11.7638 18.0718 12.3953 17.654 12.7565L7.24377 21.7565C6.82597 22.1177 6.19447 22.0718 5.83327 21.654C5.47207 21.2362 5.51796 20.6047 5.93575 20.2435L16.346 11.2435C16.7638 10.8823 17.3953 10.9282 17.7565 11.346Z',
  d6: 'M20.2061 10.4541L17.9997 12L16.433 10.0771L17.4038 9.18609C18.2913 8.49338 18.3817 7.18812 17.5966 6.40307C16.8116 5.61801 15.5063 5.70845 14.8136 6.59591L13.7875 7.64421L11.7402 5.74052L13.5456 3.79364C15.2704 1.56805 18.5769 1.38533 20.5957 3.40404C22.6144 5.42276 22.4317 8.7293 20.2061 10.4541Z',
  d7: 'M20.208 10.4541L18.0017 12L16.4349 10.0771L17.4058 9.18609C18.2932 8.49338 18.3837 7.18812 17.5986 6.40307C16.8135 5.61801 15.5083 5.70845 14.8156 6.59591L13.7895 7.64421L11.7422 5.74052L13.5476 3.79364C15.2724 1.56805 18.5789 1.38533 20.5976 3.40404C22.6163 5.42276 22.4336 8.7293 20.208 10.4541Z',
  d8: 'M20.0644 3.93426C18.3566 2.22649 15.5784 2.3937 14.1374 4.25296C14.1239 4.27043 14.1096 4.28729 14.0946 4.3035L12.7985 5.70119L13.7619 6.59706L14.2497 6.09876C15.2195 4.89845 17.0247 4.77136 18.126 5.87262C19.2304 6.977 19.0995 8.78934 17.8897 9.75714L17.4601 10.1514L18.1396 10.9854L19.7593 9.85057C21.6057 8.40668 21.7679 5.63785 20.0644 3.93426ZM12.973 3.307C14.9873 0.740829 18.8035 0.552088 21.125 2.8736C23.4547 5.20327 23.2564 9.0381 20.6645 11.0468C20.655 11.0542 20.6453 11.0613 20.6355 11.0682L18.4291 12.6141C18.1071 12.8397 17.6656 12.7784 17.4173 12.4736L15.8505 10.5507C15.5997 10.2429 15.6323 9.79287 15.9249 9.52438L16.8957 8.6334C16.9104 8.61992 16.9256 8.60703 16.9414 8.59476C17.483 8.17198 17.5234 7.39135 17.0653 6.93329C16.6073 6.47522 15.8266 6.51563 15.4039 7.05727C15.3866 7.07934 15.3682 7.10042 15.3486 7.12042L14.3225 8.16873C14.038 8.45939 13.5737 8.47031 13.2758 8.19335L11.2285 6.28965C10.9255 6.00786 10.9079 5.53387 11.1893 5.23044L12.973 3.307Z',
  d9: 'M12.9745 3.307C14.9889 0.740829 18.8051 0.552088 21.1266 2.8736C23.4563 5.20327 23.258 9.0381 20.6661 11.0468L20.6518 11.0579L17.8595 13.0144L15.4055 10.0025L16.9194 8.61317L16.9429 8.59476C17.4846 8.17198 17.525 7.39135 17.0669 6.93329C16.6089 6.47522 15.8282 6.51563 15.4055 7.05727L15.3796 7.09039L13.8128 8.69114L10.6816 5.77963L12.9745 3.307Z',
  d10: 'M4.49902 17.75C3.53253 17.75 2.74902 18.5335 2.74902 19.5C2.74902 20.4665 3.53253 21.25 4.49902 21.25C5.46552 21.25 6.24902 20.4665 6.24902 19.5C6.24902 18.5335 5.46552 17.75 4.49902 17.75ZM1.24902 19.5C1.24902 17.7051 2.7041 16.25 4.49902 16.25C6.29395 16.25 7.74902 17.7051 7.74902 19.5C7.74902 21.2949 6.29395 22.75 4.49902 22.75C2.7041 22.75 1.24902 21.2949 1.24902 19.5Z',
  d11: 'M12.4895 6.43265C12.8029 6.70355 12.8373 7.17717 12.5664 7.49052L3.5664 17.9008C3.2955 18.2141 2.82188 18.2485 2.50853 17.9776C2.19518 17.7067 2.16077 17.2331 2.43167 16.9198L11.4317 6.50951C11.7026 6.19616 12.1762 6.16175 12.4895 6.43265ZM17.5664 11.5095C17.8373 11.8229 17.8029 12.2965 17.4895 12.5674L7.07929 21.5674C6.76594 21.8383 6.29231 21.8039 6.02141 21.4905C5.75051 21.1772 5.78493 20.7035 6.09827 20.4326L16.5085 11.4326C16.8219 11.1617 17.2955 11.1962 17.5664 11.5095Z',
} as const;

export const IconSafetyPin01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-01-stroke-rounded IconSafetyPin01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSafetyPin01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-01-duotone-rounded IconSafetyPin01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSafetyPin01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-01-twotone-rounded IconSafetyPin01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSafetyPin01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-01-solid-rounded IconSafetyPin01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSafetyPin01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-01-bulk-rounded IconSafetyPin01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSafetyPin01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-01-stroke-sharp IconSafetyPin01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSafetyPin01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-01-solid-sharp IconSafetyPin01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSafetyPin01: TheIconSelfPack = {
  name: 'SafetyPin01',
  StrokeRounded: IconSafetyPin01StrokeRounded,
  DuotoneRounded: IconSafetyPin01DuotoneRounded,
  TwotoneRounded: IconSafetyPin01TwotoneRounded,
  SolidRounded: IconSafetyPin01SolidRounded,
  BulkRounded: IconSafetyPin01BulkRounded,
  StrokeSharp: IconSafetyPin01StrokeSharp,
  SolidSharp: IconSafetyPin01SolidSharp,
};