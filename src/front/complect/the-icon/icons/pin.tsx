import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 21L8 16',
  d2: 'M13.2585 18.8714C9.51516 18.0215 5.97844 14.4848 5.12853 10.7415C4.99399 10.1489 4.92672 9.85266 5.12161 9.37197C5.3165 8.89129 5.55457 8.74255 6.03071 8.44509C7.10705 7.77265 8.27254 7.55888 9.48209 7.66586C11.1793 7.81598 12.0279 7.89104 12.4512 7.67048C12.8746 7.44991 13.1622 6.93417 13.7376 5.90269L14.4664 4.59604C14.9465 3.73528 15.1866 3.3049 15.7513 3.10202C16.316 2.89913 16.6558 3.02199 17.3355 3.26771C18.9249 3.84236 20.1576 5.07505 20.7323 6.66449C20.978 7.34417 21.1009 7.68401 20.898 8.2487C20.6951 8.8134 20.2647 9.05346 19.4039 9.53358L18.0672 10.2792C17.0376 10.8534 16.5229 11.1406 16.3024 11.568C16.0819 11.9955 16.162 12.8256 16.3221 14.4859C16.4399 15.7068 16.2369 16.88 15.5555 17.9697C15.2577 18.4458 15.1088 18.6839 14.6283 18.8786C14.1477 19.0733 13.8513 19.006 13.2585 18.8714Z',
  d3: 'M13.2388 18.9117C9.48599 18.0596 5.94028 14.514 5.08821 10.7612C4.85108 9.71676 5.07234 9.0339 5.99268 8.45893C7.07176 7.78478 8.24021 7.57047 9.45283 7.67772C11.1544 7.82822 12.0051 7.90347 12.4295 7.68235C13.3997 7.17686 13.9291 5.53361 14.4498 4.60009C14.9311 3.73715 15.1718 3.30567 15.7379 3.10227C16.3041 2.89888 16.6448 3.02205 17.3262 3.26839C18.9197 3.8445 20.1555 5.08032 20.7316 6.6738C20.9779 7.35521 21.1011 7.69591 20.8977 8.26204C20.6943 8.82817 20.2628 9.06884 19.3999 9.55018C18.4608 10.074 16.7954 10.6108 16.2905 11.5898C16.0694 12.0184 16.1497 12.8506 16.3103 14.5151C16.4283 15.7391 16.2248 16.9153 15.5416 18.0077C14.9661 18.928 14.2834 19.1489 13.2388 18.9117Z',
  d4: 'M8.95711 15.0429C9.34763 15.4334 9.34763 16.0666 8.95711 16.4571L3.95711 21.4571C3.56658 21.8476 2.93342 21.8476 2.54289 21.4571C2.15237 21.0666 2.15237 20.4334 2.54289 20.0429L7.54289 15.0429C7.93342 14.6524 8.56658 14.6524 8.95711 15.0429Z',
  d5: 'M17.7093 2.55346C19.4569 3.18528 20.8147 4.54305 21.4465 6.29064C21.5536 6.58633 21.6798 6.93507 21.7258 7.24165C21.7801 7.60384 21.744 7.94519 21.608 8.32365C21.3168 9.13408 20.6643 9.49626 19.9452 9.89542L18.5273 10.6861C18.0145 10.9721 17.676 11.1618 17.4348 11.3286C17.2 11.4909 17.1333 11.582 17.1056 11.6358C17.0909 11.6641 17.0453 11.8022 17.0573 12.2506C17.0686 12.6742 17.1236 13.2487 17.2024 14.0663C17.3296 15.3845 17.1109 16.6904 16.3502 17.9068C16.2218 18.1123 16.0604 18.3708 15.88 18.563C15.6669 18.7901 15.4215 18.9506 15.1053 19.0787C14.7835 19.2091 14.4907 19.2619 14.1748 19.2478C13.906 19.2358 13.5974 19.1656 13.3398 19.107C11.3641 18.6584 9.47833 17.5121 7.98305 16.0169C6.48778 14.5216 5.34151 12.6359 4.89294 10.6602C4.83436 10.4027 4.76418 10.0941 4.75221 9.82535C4.73813 9.50941 4.79103 9.21658 4.92151 8.89474C5.04969 8.5786 5.21026 8.3331 5.43747 8.12006C5.62978 7.93974 5.88832 7.7784 6.09379 7.65019C7.29324 6.90084 8.58854 6.66967 9.89679 6.78538C10.7321 6.85926 11.321 6.91095 11.754 6.91998C11.968 6.92445 12.2391 6.94301 12.3803 6.86947C12.4326 6.84219 12.5235 6.7753 12.6865 6.53889C12.8534 6.29676 13.0438 5.95698 13.3302 5.44342L14.1046 4.05478C14.5037 3.33567 14.8659 2.68318 15.6763 2.39201C16.0548 2.25603 16.3961 2.2199 16.7583 2.27422C17.0649 2.32019 17.4136 2.44643 17.7093 2.55346Z',
  d6: 'M7.30361 15.2812L2.54289 20.042C2.15237 20.4325 2.15237 21.0657 2.54289 21.4562C2.93342 21.8467 3.56658 21.8467 3.95711 21.4562L8.71784 16.6955C8.464 16.4785 8.21868 16.2516 7.98305 16.0159C7.74745 15.7803 7.52052 15.5351 7.30361 15.2812Z',
  d7: 'M3 21L9 15',
  d8: 'M15.504 3C15.504 3 14.9662 3.72435 14.5056 4.57662C13.9332 5.6355 13.4887 6.97441 12.6486 7.84609C12.6486 7.84609 11.1254 7.72792 9.41785 7.53514C7.66749 7.33753 6.46752 8.01179 4.96344 9.54338L4 10.5057L13.4937 20L14.4571 19.0377C15.9892 17.5342 16.6628 16.3335 16.4652 14.583C16.2724 12.8753 16.1543 11.352 16.1543 11.352C17.0259 10.5118 18.3647 10.0673 19.4235 9.49492C20.2757 9.03424 21 8.49636 21 8.49636C20.9336 6.97368 20.3961 5.77286 19.3119 4.68823C18.2273 3.6039 17.0266 3.06639 15.504 3Z',
  d9: 'M15.5196 2.26636L15.122 2.24902L12.3143 7.08324C12.1577 7.07001 11.9574 7.05268 11.7238 7.03159C11.1332 6.97828 10.3314 6.9011 9.48483 6.80553C8.48257 6.69237 7.60302 6.82875 6.75966 7.22884C5.93726 7.619 5.18937 8.24138 4.41372 9.03093L2.92188 10.521L7.49326 15.0927L2.25 20.3359L3.66421 21.7502L8.90742 16.5069L13.4762 21.076L14.9652 19.5887L14.9676 19.5863C15.7577 18.8107 16.3802 18.0627 16.7703 17.2399C17.1703 16.3964 17.3064 15.5167 17.1933 14.5145C17.0977 13.6679 17.0205 12.866 16.9672 12.2754C16.9462 12.0417 16.9288 11.8414 16.9156 11.6847L21.7495 8.87688L21.7321 8.47934C21.6574 6.7653 21.039 5.38794 19.825 4.1735C18.6107 2.95939 17.2335 2.3411 15.5196 2.26636Z',
} as const;

export const IconPinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-stroke-rounded IconPinStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-duotone-rounded IconPinDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconPinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-twotone-rounded IconPinTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconPinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-solid-rounded IconPinSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-bulk-rounded IconPinBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-stroke-sharp IconPinStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-solid-sharp IconPinSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPin: TheIconSelfPack = {
  name: 'Pin',
  StrokeRounded: IconPinStrokeRounded,
  DuotoneRounded: IconPinDuotoneRounded,
  TwotoneRounded: IconPinTwotoneRounded,
  SolidRounded: IconPinSolidRounded,
  BulkRounded: IconPinBulkRounded,
  StrokeSharp: IconPinStrokeSharp,
  SolidSharp: IconPinSolidSharp,
};