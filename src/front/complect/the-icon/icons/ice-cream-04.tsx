import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.9689 9.04176C16.8199 9.01423 16.6664 8.99984 16.5094 8.99984C15.6895 8.99984 14.9616 9.39251 14.5043 9.99958M16.9689 9.04176C18.7733 9.37521 19.5986 11.5609 18.5145 13H6.48388C5.28562 11.4092 6.44796 8.99984 8.48899 8.99984M16.9689 9.04176C17.5621 5.23504 13.3655 6.22849 12.6771 3.92272C12.4926 3.30496 12.6431 2.57097 13.5018 2C10.9742 2 9.22685 3.55661 9.57139 5.17479M9.57139 5.17479C9.70516 5.80304 10.1542 6.44057 10.9954 6.99989M9.57139 5.17479C7.31821 6.06511 7.59942 9.46523 9.99282 9.94981',
  d2: 'M7.80394 18.8677L6.5 13H18.5L17.1961 18.8677C16.8624 20.3694 16.6955 21.1202 16.1471 21.5601C15.5987 22 14.8296 22 13.2913 22H11.7087C10.1704 22 9.4013 22 8.85289 21.5601C8.30448 21.1202 8.13763 20.3694 7.80394 18.8677Z',
  d3: 'M16.9671 9.04176C16.8181 9.01423 16.6646 8.99984 16.5076 8.99984C15.6877 8.99984 14.9598 9.39251 14.5025 9.99958M16.9671 9.04176C18.7715 9.37521 19.5968 11.5609 18.5127 13H6.48209C5.28382 11.4092 6.45568 8.9905 8.49671 8.9905M16.9671 9.04176C17.5603 5.23504 13.3638 6.22849 12.6753 3.92272C12.4908 3.30496 12.6413 2.57097 13.5 2C10.9724 2 9.22506 3.55661 9.5696 5.17479M9.5696 5.17479C9.70336 5.80304 10.1524 6.44057 10.9936 6.99989M9.5696 5.17479C7.31642 6.06511 7.59763 9.46523 9.99103 9.94981',
  d4: 'M5.41498 12.5307C5.55732 12.3533 5.77252 12.25 6.00001 12.25H18C18.2275 12.25 18.4427 12.3533 18.585 12.5307C18.7274 12.7082 18.7815 12.9406 18.7321 13.1627L17.4184 19.0743C17.26 19.7877 17.1265 20.3882 16.9593 20.8618C16.7819 21.3643 16.5402 21.8052 16.1164 22.1451C15.6926 22.4851 15.2098 22.6253 14.6808 22.6895C14.1823 22.75 13.5671 22.75 12.8364 22.75H12.8363H11.1637H11.1636C10.4329 22.75 9.81775 22.75 9.31924 22.6895C8.79022 22.6253 8.30739 22.4851 7.8836 22.1451C7.45981 21.8052 7.21813 21.3643 7.0407 20.8618C6.87349 20.3882 6.74007 19.7877 6.58157 19.0744L6.58157 19.0744L5.26787 13.1627C5.21852 12.9406 5.27263 12.7082 5.41498 12.5307Z',
  d5: 'M9.40909 2.41573C10.2949 1.68137 11.5573 1.25 12.9685 1.25C13.3947 1.25 13.7705 1.52763 13.8938 1.93345C14.017 2.33926 13.8586 2.77748 13.5037 3.01222C13.2297 3.1935 13.1348 3.35409 13.0992 3.45038C13.0629 3.54885 13.0596 3.65877 13.0976 3.78521C13.1699 4.0264 13.3309 4.21669 13.6808 4.427C13.8617 4.53571 14.0724 4.63711 14.3248 4.7503C14.3905 4.77974 14.4613 4.81097 14.5352 4.84357C14.7255 4.92746 14.9363 5.02042 15.1327 5.11537C15.6848 5.38231 16.3525 5.76708 16.8098 6.44533C17.1624 6.96815 17.3402 7.58704 17.3415 8.31099C19.1873 9.19701 19.8793 11.6588 18.5859 13.367C18.4033 13.6082 18.1173 13.75 17.8138 13.75H6.18506C5.88153 13.75 5.59562 13.6082 5.413 13.367C4.06453 11.5862 4.89664 9.07009 6.79562 8.25022C6.51308 6.95925 6.95025 5.51144 8.16479 4.70634C8.21737 3.80025 8.71004 2.99522 9.40909 2.41573ZM8.83371 6.751C8.38989 7.53318 8.74328 8.70667 9.76859 8.91317C10.2918 9.01856 10.6301 9.52592 10.5242 10.0464C10.4182 10.5669 9.90819 10.9034 9.38497 10.798C8.71168 10.6624 8.1616 10.3609 7.73934 9.95709C6.95654 10.1817 6.50228 11.0734 6.75446 11.8269H17.2443C17.508 11.0422 17.0244 10.0898 16.1442 9.92799C16.0578 9.91212 15.9682 9.9037 15.8757 9.9037C15.399 9.9037 14.9765 10.1295 14.7096 10.482C14.3884 10.9061 13.7824 10.991 13.356 10.6715C12.9296 10.352 12.8443 9.74909 13.1655 9.32492C13.6903 8.63179 14.4811 8.1453 15.3876 8.01531C15.3527 7.78298 15.2793 7.62776 15.2044 7.51658C15.0416 7.2752 14.7611 7.07391 14.2876 6.84498C14.1233 6.76551 13.9628 6.6948 13.7864 6.61702C13.7051 6.58119 13.6204 6.54387 13.5304 6.50349C13.2626 6.38343 12.9651 6.2437 12.6811 6.07299C12.1012 5.72447 11.5055 5.20277 11.2452 4.33541C11.1738 4.09747 11.1336 3.84077 11.1376 3.57483C10.9496 3.67037 10.7852 3.77823 10.6467 3.89307C10.1636 4.29355 10.0409 4.71834 10.1148 5.06398C10.1771 5.35479 10.4125 5.77621 11.0811 6.21844C11.5256 6.51249 11.6463 7.10934 11.3507 7.55154C11.0551 7.99374 10.4552 8.11385 10.0106 7.8198C9.53282 7.50375 9.1359 7.14506 8.83371 6.751Z',
  d6: 'M16.9689 9.04176C16.8199 9.01423 16.6664 8.99984 16.5094 8.99984C15.6895 8.99984 14.9616 9.39251 14.5043 9.99958M16.9689 9.04176C18.7733 9.37521 19.5986 11.5609 18.5145 13H6.48388C5.28562 11.4092 6.44796 8.99984 8.48899 8.99984M16.9689 9.04176C17.5621 5.23504 14 6.5 13 4.5C12.5 3.5 13.5018 2 13.5018 2C10.9742 2 9.22685 3.55661 9.57139 5.17479M9.57139 5.17479C9.70516 5.80304 10.1542 6.44057 10.9954 6.99989M9.57139 5.17479C7.31821 6.06511 7.59942 9.46523 9.99282 9.94981',
  d7: 'M8.5 22L6.5 13H18.5L16.5 22H8.5Z',
  d8: 'M9.47996 2.40441C10.3447 1.68376 11.5914 1.25 13.0023 1.25H14.4051L13.6271 2.41496L13.6264 2.41594L13.6222 2.42248C13.6175 2.42977 13.6097 2.44217 13.5992 2.45919C13.5782 2.49331 13.5471 2.5455 13.5105 2.61197C13.4364 2.74642 13.3439 2.93166 13.266 3.13888C13.0915 3.60326 13.0705 3.96283 13.1714 4.16459C13.3176 4.457 13.5627 4.65677 13.9491 4.84125C14.1464 4.93542 14.3628 5.01741 14.61 5.10792L14.6937 5.13849C14.9101 5.21739 15.1509 5.30523 15.3817 5.40564C15.907 5.63421 16.4999 5.97608 16.885 6.62432C17.1882 7.13459 17.3167 7.75533 17.2792 8.50605C19.1538 9.30204 19.8872 11.7613 18.6142 13.4512H5.3854C4.04588 11.6729 4.95181 9.13015 6.91228 8.43273C6.53369 7.10019 6.96496 5.538 8.27816 4.73479C8.28783 3.82245 8.76557 2.99974 9.47996 2.40441Z',
  d9: 'M16.6033 22.75H7.40005L5.66699 14.9513H18.3364L16.6033 22.75Z',
} as const;

export const IconIceCream04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-04-stroke-rounded IconIceCream04StrokeRounded"
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

export const IconIceCream04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-04-duotone-rounded IconIceCream04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
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

export const IconIceCream04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-04-twotone-rounded IconIceCream04TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconIceCream04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-04-solid-rounded IconIceCream04SolidRounded"
    >
      <path 
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

export const IconIceCream04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-04-bulk-rounded IconIceCream04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconIceCream04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-04-stroke-sharp IconIceCream04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceCream04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-cream-04-solid-sharp IconIceCream04SolidSharp"
    >
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

export const iconPackOfIceCream04: TheIconSelfPack = {
  name: 'IceCream04',
  StrokeRounded: IconIceCream04StrokeRounded,
  DuotoneRounded: IconIceCream04DuotoneRounded,
  TwotoneRounded: IconIceCream04TwotoneRounded,
  SolidRounded: IconIceCream04SolidRounded,
  BulkRounded: IconIceCream04BulkRounded,
  StrokeSharp: IconIceCream04StrokeSharp,
  SolidSharp: IconIceCream04SolidSharp,
};