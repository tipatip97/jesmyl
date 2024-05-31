import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.56457 19.5607C5.97878 20.1464 5.02903 20.1464 4.44325 19.5607C3.85746 18.9749 3.85746 18.0251 4.44325 17.4393C5.02903 16.8536 5.97878 16.8536 6.56457 17.4393C7.15035 18.0251 7.15035 18.9749 6.56457 19.5607Z',
  d2: 'M6.00391 12H6.37548C6.90591 12 7.41462 12.2107 7.78969 12.5858L11.4181 16.2142C11.7932 16.5893 12.0039 17.098 12.0039 17.6284V18',
  d3: 'M10.5103 15L18.5559 8.37415C18.8887 8.10007 19.1248 7.7264 19.2294 7.30812L19.9938 4.25039C20.0307 4.10291 19.8971 3.96933 19.7496 4.0062L16.6919 4.77063C16.2736 4.8752 15.8999 5.11126 15.6258 5.44407L9 13.4897',
  d4: 'M13.9091 2.89255C12.86 2.29753 12.3355 2.00001 12.0007 2C11.6659 1.99999 11.1413 2.29748 10.0921 2.89247C9.07711 3.46803 8.01375 3.82383 6.97637 4.04312C4.91674 4.47852 3.88691 4.69622 3.44345 5.23327C3 5.77032 3 6.61265 3 8.29731V9.96205M12.0006 22C12.3126 22 12.6246 21.9587 12.9276 21.8762C13.4183 21.7426 13.8799 21.4552 14.8031 20.8804C16.8654 19.5964 17.8965 18.9545 18.6779 18.13C19.643 17.1117 20.3379 15.8876 20.7044 14.5603C20.9539 13.6568 20.9937 12.6829 21 11',
  d5: 'M6.5 17.5L9.5 14.5',
  d6: 'M18.5559 8.37415L10.5103 15L9 13.4897L15.6258 5.44407C15.8999 5.11126 16.2736 4.8752 16.6919 4.77063L19.7496 4.0062C19.8971 3.96933 20.0307 4.10291 19.9938 4.25039L19.2294 7.30812C19.1248 7.7264 18.8887 8.10007 18.5559 8.37415Z',
  d7: 'M11.7597 3.32322C11.4964 3.45229 11.1437 3.65227 10.6207 3.94956C9.52654 4.57149 8.39122 4.94966 7.30362 5.1801C6.28047 5.39689 5.57963 5.54639 5.07622 5.70209C4.55662 5.86278 4.43436 5.97875 4.40919 6.0093C4.36624 6.06144 4.29243 6.18005 4.24783 6.57392C4.20148 6.98311 4.2 7.53499 4.2 8.38147V10.0084C4.2 10.5481 3.76348 10.9856 3.225 10.9856C2.68653 10.9856 2.25 10.5481 2.25 10.0084L2.25 8.32655V8.32651C2.24997 7.55025 2.24994 6.88614 2.31027 6.35346C2.37376 5.79293 2.51614 5.23752 2.90555 4.76481C3.31275 4.27051 3.90872 4.01769 4.50129 3.83442C5.10008 3.64923 5.889 3.48208 6.85208 3.27804L6.90031 3.26782C7.83559 3.06965 8.77383 2.75239 9.65879 2.24936L9.6873 2.23316C10.1745 1.95621 10.5796 1.72598 10.9031 1.5674C11.202 1.42088 11.5913 1.24998 12.0007 1.25C12.4101 1.25002 12.7994 1.42093 13.0983 1.56747C13.4217 1.72606 13.8267 1.9563 14.3139 2.23326L14.3139 2.23328L14.3424 2.24948C14.8108 2.51577 14.9751 3.11222 14.7094 3.58169C14.4438 4.05116 13.8487 4.21588 13.3803 3.94959C12.8574 3.65229 12.5047 3.4523 12.2414 3.32322C12.119 3.26318 12.0423 3.23256 12.0006 3.21727C11.9589 3.23256 11.8822 3.26317 11.7597 3.32322Z',
  d8: 'M20.7787 10.0455C21.3171 10.0475 21.752 10.4867 21.75 11.0264C21.7439 12.6559 21.7097 13.7349 21.4266 14.7622C21.0259 16.2167 20.2673 17.5538 19.2187 18.6629C18.37 19.5605 17.2654 20.2497 15.3813 21.4252L15.2484 21.5082L15.1315 21.5811C14.345 22.0724 13.7795 22.4257 13.1606 22.5947C12.7811 22.6983 12.3906 22.75 12.0006 22.75C11.4621 22.75 11.0256 22.3125 11.0256 21.7727C11.0256 21.233 11.4621 20.7955 12.0006 20.7955C12.219 20.7955 12.437 20.7665 12.6481 20.7088C12.9559 20.6248 13.2656 20.4431 14.2177 19.8489C16.2737 18.5659 17.148 18.0114 17.8033 17.3184C18.6365 16.4372 19.233 15.3817 19.547 14.242C19.7505 13.5034 19.7938 12.6789 19.8 11.019C19.802 10.4793 20.2402 10.0434 20.7787 10.0455Z',
  d9: 'M19.5677 3.27927C20.2645 3.10508 20.8956 3.73621 20.7214 4.43297L19.957 7.49071C19.8135 8.06477 19.4895 8.57761 19.0327 8.95378L11.651 15.0329L12.1252 15.5071C12.6878 16.0697 13.0039 16.8328 13.0039 17.6284V18C13.0039 18.5523 12.5562 19 12.0039 19C11.4516 19 11.0039 18.5523 11.0039 18V17.6284C11.0039 17.3632 10.8985 17.1089 10.711 16.9213L9.60203 15.8123L7.63568 17.7787C7.90058 18.5635 7.72032 19.4656 7.0949 20.091C6.21622 20.9697 4.7916 20.9697 3.91292 20.091C3.03424 19.2123 3.03424 17.7877 3.91292 16.909C4.53685 16.2851 5.43605 16.1042 6.2196 16.3663L8.18782 14.3981L7.08259 13.2929C6.89505 13.1054 6.6407 13 6.37548 13H6.00391C5.45162 13 5.00391 12.5523 5.00391 12C5.00391 11.4477 5.45162 11 6.00391 11H6.37548C7.17113 11 7.93419 11.3161 8.4968 11.8787L8.96783 12.3497L15.0469 4.96797C15.4231 4.5112 15.9359 4.18722 16.51 4.04371L19.5677 3.27927ZM6.03424 17.9697C5.74134 17.6768 5.26647 17.6768 4.97358 17.9697C4.68068 18.2626 4.68068 18.7374 4.97358 19.0303C5.26647 19.3232 5.74134 19.3232 6.03424 19.0303C6.32713 18.7374 6.32713 18.2626 6.03424 17.9697Z',
  d10: 'M6.5587 19.547C5.97381 20.1323 5.02551 20.1323 4.44062 19.547C3.85573 18.9616 3.85573 18.0126 4.44062 17.4272C5.02551 16.842 5.97381 16.842 6.5587 17.4272C7.14359 18.0126 7.14359 18.9616 6.5587 19.547Z',
  d11: 'M10.4982 14.9893L18.975 7.99466L19.9735 4.00391L15.9796 4.99695L8.99028 13.4802M7.19683 11.9915L11.9857 16.784M6.49414 17.4874L9.48956 14.4897',
  d12: 'M21.4749 10.0248C21.1522 17.915 15.4795 21.3743 11.9841 21.9958C10.7275 21.7501 10.1931 21.4466 9.08075 20.9551M3.25376 14.0381C2.92739 13.1265 1.83979 9.76566 3.00716 5.02581C6.83952 5.02547 9.57584 0.785802 13.9847 2.33884',
  d13: 'M7.21135 2.79893C8.51534 2.08702 10.0485 1.25 12.0087 1.25C12.8327 1.25 13.5777 1.39528 14.2645 1.6185L13.661 3.47542C13.1368 3.30502 12.5962 3.20253 12.0087 3.20253C10.5834 3.20253 9.4486 3.80235 8.08295 4.54762C8.05998 4.56016 8.03693 4.57274 8.01381 4.58536C6.89484 5.1963 5.60751 5.89917 4.02766 6.08454C3.48116 8.88303 3.64654 11.4541 4.36356 13.6367L2.50863 14.2461C1.60728 11.5024 1.48409 8.31284 2.27898 4.93161L2.45597 4.17877H3.22931C4.64933 4.17877 5.78104 3.57949 7.14767 2.83369C7.16884 2.82214 7.19006 2.81055 7.21135 2.79893ZM22.2509 10.0783C21.9767 16.4582 18.1306 21.4373 12.2134 22.7061L12.0087 22.75L11.804 22.7061C10.7255 22.4749 9.71041 22.1185 8.77013 21.6486L9.64291 19.902C10.3742 20.2674 11.1646 20.5539 12.0087 20.7511C16.8389 19.6219 20.0628 15.5193 20.3002 9.99446L22.2509 10.0783Z',
  d14: 'M12.5311 16.266L11.4572 15.1921L19.6683 8.42187L21.0315 2.97754L15.5796 4.33207L8.80887 12.5438L7.73487 11.4698L6.36614 12.8385L7.96556 14.4379L6.07945 16.324C5.33111 16.1274 4.50121 16.3224 3.91463 16.909C3.03595 17.7877 3.03595 19.2123 3.91463 20.091C4.7933 20.9697 6.21793 20.9697 7.09661 20.091C7.69159 19.496 7.88369 18.6507 7.6729 17.8941L9.5473 16.0197L11.1624 17.6347L12.5311 16.266Z',
} as const;

export const IconAdventureStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adventure-stroke-rounded IconAdventureStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdventureDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adventure-duotone-rounded IconAdventureDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdventureTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adventure-twotone-rounded IconAdventureTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdventureSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adventure-solid-rounded IconAdventureSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdventureBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adventure-bulk-rounded IconAdventureBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdventureStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adventure-stroke-sharp IconAdventureStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdventureSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adventure-solid-sharp IconAdventureSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfAdventure: TheIconSelfPack = {
  name: 'Adventure',
  StrokeRounded: IconAdventureStrokeRounded,
  DuotoneRounded: IconAdventureDuotoneRounded,
  TwotoneRounded: IconAdventureTwotoneRounded,
  SolidRounded: IconAdventureSolidRounded,
  BulkRounded: IconAdventureBulkRounded,
  StrokeSharp: IconAdventureStrokeSharp,
  SolidSharp: IconAdventureSolidSharp,
};