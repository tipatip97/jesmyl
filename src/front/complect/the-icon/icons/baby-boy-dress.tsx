import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.94724 9.003C5.94724 9.003 3.68265 11.252 3.01654 10.9766C2.07687 10.5882 1.67051 6.8204 2.30951 6.24512L4.76679 4.03287C5.90144 3.01137 5.93084 3 7.43853 3H8.95703C9.1835 4.3592 10.4956 5.99207 12 5.99207C13.5044 5.99207 14.8165 4.3592 15.043 3H16.5615C18.0692 3 18.0986 3.01136 19.2332 4.03287L21.6905 6.24512C22.3295 6.8204 21.9231 10.5882 20.9835 10.9766C20.3173 11.252 18.0489 9.003 18.0489 9.003',
  d2: 'M6 8V18.5267C6 19.2323 6.11985 19.6092 6.75491 19.9496C9.3676 21.3501 14.6324 21.3501 17.2451 19.9496C17.8802 19.6092 18 19.2323 18 18.5267L18 8',
  d3: 'M6 10C8 12.6667 16 12.6667 18 10',
  d4: 'M7.43853 3H8.95703C9.1835 4.3592 10.4956 5.99207 12 5.99207C13.5044 5.99207 14.8165 4.3592 15.043 3H16.5615C18.0692 3 18.0986 3.01136 19.2332 4.03287L21.6905 6.24512C22.3295 6.8204 21.9231 10.5882 20.9835 10.9766C20.3173 11.252 18.0489 9.003 18.0489 9.003C14 14.5 6.5 11 5.94724 9.003C5.94724 9.003 3.68265 11.252 3.01654 10.9766C2.07687 10.5882 1.67051 6.8204 2.30951 6.24512L4.76679 4.03287C5.90144 3.01137 5.93084 3 7.43853 3Z',
  d5: 'M5.84736 12.7358C5.56764 12.6199 5.42778 12.562 5.33889 12.6214C5.25 12.6808 5.25 12.8263 5.25 13.1174V18.5273C5.25 19.4393 5.57249 20.1673 6.40056 20.6112C7.85986 21.3935 9.96898 21.7506 12 21.7506C14.031 21.7506 16.1401 21.3935 17.5994 20.6112C18.4275 20.1673 18.75 19.4393 18.75 18.5273V13.1173C18.75 12.8262 18.75 12.6807 18.6611 12.6213C18.5722 12.5619 18.4324 12.6198 18.1526 12.7357C17.6777 12.9325 17.1648 13.0949 16.6356 13.2277C15.2361 13.579 13.6106 13.7503 11.9999 13.7503C10.3891 13.7503 8.76368 13.579 7.36419 13.2277C6.83509 13.0949 6.32222 12.9325 5.84736 12.7358Z',
  d6: 'M7.35716 2.25C6.05511 2.24933 5.30478 2.54501 4.33819 3.41703L1.81871 5.68776C1.42877 6.0392 1.32448 6.61072 1.2825 7.10956C1.1738 8.40138 1.3124 10.0181 2.08822 11.118C2.23024 11.3194 2.44026 11.5457 2.74001 11.6698C3.20992 11.8642 3.71807 11.6719 4.13546 11.4406C4.53414 11.2197 4.90185 10.9442 5.25729 10.6601C5.77097 11.0892 6.61893 11.4922 7.73394 11.7723C8.98934 12.0877 10.4873 12.2497 11.9999 12.2497C13.5125 12.2497 15.0104 12.0877 16.2658 11.7723C17.3845 11.4912 18.2295 11.091 18.7427 10.6601C19.0982 10.9442 19.4659 11.2197 19.8645 11.4406C20.2819 11.6719 20.7901 11.8642 21.26 11.6698C21.5597 11.5457 21.7698 11.3194 21.9118 11.118C22.6876 10.0181 22.8262 8.40138 22.7175 7.10956C22.6755 6.61072 22.5712 6.0392 22.1813 5.68776L19.6618 3.41703C18.6952 2.54501 17.9449 2.24933 16.6429 2.25L15.9346 2.25002C15.5178 2.25002 15.3094 2.25003 15.1758 2.35059C15.0423 2.45116 14.9735 2.6902 14.836 3.16829C14.4697 4.44218 13.5213 5.68776 12 5.68776C10.4787 5.68776 9.5303 4.44218 9.16396 3.16829C9.02648 2.6902 8.95773 2.45116 8.82417 2.35059C8.69061 2.25003 8.48221 2.25002 8.06542 2.25002L7.35716 2.25Z',
  d7: 'M5.99219 8V21H17.9922V8',
  d8: 'M6 12H17.9879',
  d9: 'M18.1383 9.24901L20.4997 10.6937C20.5052 10.6971 20.5124 10.6945 20.5144 10.6884L21.9981 6.31539C21.9995 6.31146 21.9982 6.30711 21.995 6.30447L17.9919 3L14.9919 3.00033C14.9919 4.59156 13.6573 5.88124 12.0021 5.88124C10.3469 5.88124 8.99194 4.59123 8.99194 3L5.99194 3.00033L2.00532 6.33441C2.00212 6.33709 2.00092 6.34147 2.00231 6.34541L3.51688 10.6387C3.51896 10.6445 3.52584 10.6471 3.53126 10.644L5.86931 9.31376',
  d10: 'M18.4936 2.43553C18.3569 2.31591 18.1814 2.24998 17.9997 2.24998L14.25 2.24996V2.99997C14.25 4.23796 13.2436 5.24436 12.003 5.246C10.7601 5.24765 9.75 4.24029 9.75 2.99998V2.24998H6.00026C5.8186 2.24998 5.64312 2.31591 5.5064 2.43553L1.50614 5.93553C1.27873 6.1345 1.19294 6.45049 1.28849 6.73715L2.78849 11.2371C2.86042 11.453 3.02642 11.6245 3.23977 11.7034C3.45313 11.7823 3.69077 11.7601 3.88584 11.6431L5.25 10.8247V12.25H18.75V10.8247L20.1142 11.6431C20.3092 11.7601 20.5469 11.7823 20.7602 11.7034C20.9736 11.6245 21.1396 11.453 21.2115 11.2371L22.7115 6.73715C22.8071 6.45049 22.7213 6.1345 22.4939 5.93553L18.4936 2.43553Z',
  d11: 'M18.75 13.75H5.25V21.75H18.75V13.75Z',
} as const;

export const IconBabyBoyDressStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-boy-dress-stroke-rounded IconBabyBoyDressStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBabyBoyDressDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-boy-dress-duotone-rounded IconBabyBoyDressDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBabyBoyDressTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-boy-dress-twotone-rounded IconBabyBoyDressTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBabyBoyDressSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-boy-dress-solid-rounded IconBabyBoyDressSolidRounded"
    >
      <path 
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

export const IconBabyBoyDressBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-boy-dress-bulk-rounded IconBabyBoyDressBulkRounded"
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

export const IconBabyBoyDressStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-boy-dress-stroke-sharp IconBabyBoyDressStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBabyBoyDressSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-boy-dress-solid-sharp IconBabyBoyDressSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBabyBoyDress: TheIconSelfPack = {
  name: 'BabyBoyDress',
  StrokeRounded: IconBabyBoyDressStrokeRounded,
  DuotoneRounded: IconBabyBoyDressDuotoneRounded,
  TwotoneRounded: IconBabyBoyDressTwotoneRounded,
  SolidRounded: IconBabyBoyDressSolidRounded,
  BulkRounded: IconBabyBoyDressBulkRounded,
  StrokeSharp: IconBabyBoyDressStrokeSharp,
  SolidSharp: IconBabyBoyDressSolidSharp,
};