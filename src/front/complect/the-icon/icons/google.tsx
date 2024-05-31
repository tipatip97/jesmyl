import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8 12C8 9.79086 9.79086 8 12 8C13.1048 8 14.1035 8.44662 14.8284 9.17157C15.219 9.5621 15.8521 9.5621 16.2426 9.17157C16.6332 8.78105 16.6332 8.14788 16.2426 7.75736C15.1579 6.67267 13.6566 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.4477 17.5523 11 17 11H12C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13H15.874C15.4299 14.7252 13.8638 16 12 16C9.79086 16 8 14.2091 8 12Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C13.8638 16 15.4299 14.7252 15.874 13H12C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11H17C17.5523 11 18 11.4477 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.6566 6 15.1579 6.67267 16.2426 7.75736C16.6332 8.14788 16.6332 8.78105 16.2426 9.17157C15.8521 9.5621 15.219 9.5621 14.8284 9.17157C14.1035 8.44662 13.1048 8 12 8Z',
  d5: 'M15.55 8.45235C14.6402 7.54178 13.3829 6.97852 11.994 6.97852C9.21783 6.97852 6.96729 9.22906 6.96729 12.0052C6.96729 14.7814 9.21783 17.032 11.994 17.032C14.7702 17.032 17.0208 14.7814 17.0208 12.0052H11.994',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8 12C8 9.79086 9.79086 8 12 8C13.1048 8 14.1035 8.44662 14.8284 9.17157L16.2426 7.75736C15.1579 6.67267 13.6566 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12V11H12V13H15.874C15.4299 14.7252 13.8638 16 12 16C9.79086 16 8 14.2091 8 12Z',
} as const;

export const IconGoogleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-stroke-rounded IconGoogleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-duotone-rounded IconGoogleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-twotone-rounded IconGoogleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-solid-rounded IconGoogleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-bulk-rounded IconGoogleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGoogleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-stroke-sharp IconGoogleStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoogleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="google-solid-sharp IconGoogleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGoogle: TheIconSelfPack = {
  name: 'Google',
  StrokeRounded: IconGoogleStrokeRounded,
  DuotoneRounded: IconGoogleDuotoneRounded,
  TwotoneRounded: IconGoogleTwotoneRounded,
  SolidRounded: IconGoogleSolidRounded,
  BulkRounded: IconGoogleBulkRounded,
  StrokeSharp: IconGoogleStrokeSharp,
  SolidSharp: IconGoogleSolidSharp,
};