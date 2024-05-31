import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 7.75736 2 5.63604 3.17157 4.31802C4.34315 3 6.22876 3 10 3H14C17.7712 3 19.6569 3 20.8284 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.8284 19.682C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.682C2 18.364 2 16.2426 2 12Z',
  d2: 'M2 9H10C12.8284 9 14.2426 9 15.1213 9.87868C16 10.7574 16 12.1716 16 15V21',
  d3: 'M10 21L10 9',
  d4: 'M2.02344 9H11.0003C13.3574 9 14.5359 9 15.2681 9.73223C16.0003 10.4645 16.0003 11.643 16.0003 14V20.9902C18.4799 20.9499 19.8857 20.743 20.8288 19.682C22.0003 18.364 22.0003 16.2426 22.0003 12C22.0003 7.75736 22.0003 5.63604 20.8288 4.31802C19.6572 3 17.7716 3 14.0003 3H10.0003C6.2291 3 4.34348 3 3.17191 4.31802C2.31684 5.27997 2.08584 6.66983 2.02344 9Z',
  d5: 'M14.0625 2.25H14.0625H14.0625H9.93748H9.93746H9.93745C8.10494 2.24998 6.64403 2.24996 5.49875 2.42319C4.30896 2.60315 3.35423 2.98363 2.61102 3.81975C1.87907 4.64319 1.55636 5.67956 1.40175 6.97328C1.3636 7.29244 1.33505 7.63419 1.31367 8L10.0706 8C11.4247 7.99997 12.5413 7.99994 13.4251 8.11875C14.3529 8.2435 15.1723 8.51547 15.8284 9.17158C16.4845 9.82768 16.7565 10.6471 16.8812 11.5749C17.0001 12.4587 17 13.5753 17 14.9294V14.9295V21.7114C17.5515 21.6863 18.0508 21.6449 18.5013 21.5768C19.691 21.3969 20.6458 21.0164 21.389 20.1803C22.1209 19.3568 22.4436 18.3204 22.5983 17.0267C22.75 15.7568 22.75 14.1292 22.75 12.0513V12.0512V11.9488V11.9487C22.75 9.87082 22.75 8.24318 22.5983 6.97328C22.4436 5.67956 22.1209 4.64319 21.389 3.81975C20.6458 2.98363 19.691 2.60315 18.5013 2.42319C17.356 2.24996 15.8951 2.24998 14.0625 2.25ZM15 21.7491V15C15 13.5575 14.9979 12.5763 14.8991 11.8414C14.8042 11.1354 14.6368 10.8084 14.4142 10.5858C14.1916 10.3632 13.8646 10.1958 13.1586 10.1009C12.6077 10.0269 11.9183 10.0071 11 10.0019V21.75H14.0625C14.3865 21.75 14.6989 21.75 15 21.7491ZM9 21.7491V10H1.25578C1.24999 10.6009 1.25 11.2493 1.25 11.9488V11.9488V12.0512V12.0512C1.24999 14.1292 1.24998 15.7568 1.40175 17.0267C1.55636 18.3204 1.87907 19.3568 2.61102 20.1803C3.35423 21.0164 4.30896 21.3969 5.49875 21.5768C6.44154 21.7194 7.59822 21.7446 9 21.7491Z',
  d6: 'M14.0625 2.25C15.8951 2.24998 17.356 2.24996 18.5013 2.42319C19.691 2.60315 20.6458 2.98363 21.389 3.81975C22.1209 4.64319 22.4436 5.67956 22.5983 6.97328C22.75 8.24318 22.75 9.87082 22.75 11.9487V11.9488V12.0512V12.0513C22.75 14.1292 22.75 15.7568 22.5983 17.0267C22.4436 18.3204 22.1209 19.3568 21.389 20.1803C20.6458 21.0164 19.691 21.3969 18.5013 21.5768C17.356 21.75 15.8951 21.75 14.0625 21.75H9.93746C8.10495 21.75 6.64403 21.75 5.49875 21.5768C4.30896 21.3969 3.35423 21.0164 2.61102 20.1803C1.87907 19.3568 1.55636 18.3204 1.40175 17.0267C1.24998 15.7568 1.24999 14.1292 1.25 12.0512V11.9488C1.24999 9.87085 1.24998 8.24319 1.40175 6.97328C1.55636 5.67956 1.87907 4.64319 2.61102 3.81975C3.35423 2.98363 4.30896 2.60315 5.49875 2.42319C6.64403 2.24996 8.10495 2.24998 9.93746 2.25H9.93748H14.0625H14.0625Z',
  d7: 'M1.25586 10C1.26294 9.26432 1.2787 8.59981 1.31375 8L10.0707 8C11.4248 7.99997 12.5414 7.99994 13.4251 8.11876C14.353 8.2435 15.1724 8.51547 15.8285 9.17158C16.4846 9.82769 16.7566 10.6471 16.8813 11.5749C17.0001 12.4587 17.0001 13.5753 17.0001 14.9294V21.7114C16.3973 21.7388 15.7321 21.7467 15.0001 21.7491V15C15.0001 13.5575 14.998 12.5763 14.8992 11.8414C14.8042 11.1354 14.6369 10.8084 14.4143 10.5858C14.1917 10.3632 13.8647 10.1958 13.1586 10.1009C12.6078 10.0269 11.9184 10.0071 11.0001 10.0019V21.75H9.93754C9.61354 21.75 9.30116 21.75 9.00008 21.7491V10H1.25586Z',
  d8: 'M22 3H2V21H22V3Z',
  d9: 'M2 9H16V21',
  d10: 'M2 2.25C1.80109 2.25 1.61032 2.32902 1.46967 2.46967C1.32902 2.61032 1.25 2.80109 1.25 3V8H17V21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V3C22.75 2.58579 22.4142 2.25 22 2.25H2Z',
  d11: 'M15 21.75V10H11V21.75H15Z',
  d12: 'M9 21.75V10H1.25V21C1.25 21.4142 1.58579 21.75 2 21.75H9Z',
} as const;

export const IconAspectRatioStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="aspect-ratio-stroke-rounded IconAspectRatioStrokeRounded"
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

export const IconAspectRatioDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="aspect-ratio-duotone-rounded IconAspectRatioDuotoneRounded"
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

export const IconAspectRatioTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="aspect-ratio-twotone-rounded IconAspectRatioTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAspectRatioSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="aspect-ratio-solid-rounded IconAspectRatioSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAspectRatioBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="aspect-ratio-bulk-rounded IconAspectRatioBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAspectRatioStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="aspect-ratio-stroke-sharp IconAspectRatioStrokeSharp"
    >
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAspectRatioSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="aspect-ratio-solid-sharp IconAspectRatioSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAspectRatio: TheIconSelfPack = {
  name: 'AspectRatio',
  StrokeRounded: IconAspectRatioStrokeRounded,
  DuotoneRounded: IconAspectRatioDuotoneRounded,
  TwotoneRounded: IconAspectRatioTwotoneRounded,
  SolidRounded: IconAspectRatioSolidRounded,
  BulkRounded: IconAspectRatioBulkRounded,
  StrokeSharp: IconAspectRatioStrokeSharp,
  SolidSharp: IconAspectRatioSolidSharp,
};