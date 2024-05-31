import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.70235 13.1617L8.71072 14.8945V6.15789C8.71072 5.24227 9.44813 4.5 10.3578 4.5C11.2674 4.5 12.0048 5.24226 12.0048 6.15789V10.6314L14.817 11.0838C16.6321 11.3579 17.5397 11.4949 18.179 11.8804C19.235 12.5172 20 13.4735 20 14.8695C20 15.8419 19.7612 16.4942 19.1808 18.247C18.8125 19.3591 18.6284 19.9152 18.3281 20.3554C17.8337 21.0801 17.1043 21.6093 16.2649 21.8522C15.7551 21.9998 15.1728 21.9998 14.0081 21.9998H13.0209C11.4725 21.9998 10.6983 21.9998 10.0091 21.7138C9.88545 21.6625 9.76465 21.6046 9.64717 21.5404C8.99204 21.1823 8.50384 20.5775 7.52744 19.3679L4.3665 15.4519C3.88077 14.8501 3.87753 13.9889 4.35872 13.3835C4.93708 12.6557 5.99941 12.5552 6.70235 13.1617Z',
  d2: 'M14.3164 6C14.3164 3.79086 12.5255 2 10.3164 2C8.10727 2 6.31641 3.79086 6.31641 6',
  d3: 'M6.70235 13.1613L8.71072 14.8941V6.1325C8.71072 5.21687 9.44813 4.47461 10.3578 4.47461C11.2674 4.47461 12.0048 5.21687 12.0048 6.1325V10.6309L14.817 11.0834C16.6321 11.3574 17.5397 11.4945 18.179 11.88C19.235 12.5167 20 13.473 20 14.8691C20 15.8414 19.7612 16.4938 19.1808 18.2465C18.8125 19.3587 18.6284 19.9148 18.3281 20.355C17.8337 21.0797 17.1043 21.6088 16.2649 21.8518C15.7551 21.9993 15.1728 21.9993 14.0081 21.9993H13.0209C11.4725 21.9993 10.6983 21.9993 10.0091 21.7134C9.88545 21.6621 9.76465 21.6042 9.64717 21.54C8.99204 21.1819 8.50384 20.5771 7.52744 19.3674L4.3665 15.4514C3.88077 14.8497 3.87753 13.9885 4.35872 13.383C4.93708 12.6553 5.99941 12.5548 6.70235 13.1613Z',
  d4: 'M7.96072 6.2829C7.96072 4.9577 9.02929 3.875 10.3578 3.875C11.6863 3.875 12.7548 4.9577 12.7548 6.28289V10.1174L14.9553 10.4712C15.8406 10.6048 16.5414 10.7106 17.0992 10.8326C17.6667 10.9567 18.1449 11.109 18.5663 11.3631C19.7786 12.0942 20.75 13.2642 20.75 14.9945C20.75 16.0302 20.5011 16.7785 20.0172 18.2332L20.0172 18.2332C19.6855 19.2355 19.3081 20.3747 18.9476 20.9031C18.3554 21.7712 17.481 22.406 16.4735 22.6976C15.86 22.8752 13.9134 22.8751 12.865 22.8748C11.4674 22.8753 10.5508 22.8756 9.72162 22.5315C9.57331 22.47 9.42838 22.4006 9.28744 22.3235C8.50005 21.8931 7.92309 21.1779 7.04187 20.0854L3.7829 16.048C3.07662 15.173 3.07194 13.9221 3.77157 13.0418C4.61446 11.9813 6.16605 11.8335 7.19229 12.7189L7.96072 13.3819V6.2829Z',
  d5: 'M10.3164 3.125C8.65955 3.125 7.31641 4.46815 7.31641 6.125C7.31641 6.67728 6.86869 7.125 6.31641 7.125C5.76412 7.125 5.31641 6.67728 5.31641 6.125C5.31641 3.36358 7.55498 1.125 10.3164 1.125C13.0778 1.125 15.3164 3.36358 15.3164 6.125C15.3164 6.67728 14.8687 7.125 14.3164 7.125C13.7641 7.125 13.3164 6.67728 13.3164 6.125C13.3164 4.46815 11.9733 3.125 10.3164 3.125Z',
  d6: 'M6.77783 6.00195C6.77783 3.79281 8.5652 2.00195 10.7701 2.00195C12.9748 2.00195 14.7623 3.79281 14.7623 6.00195',
  d7: 'M6.89817 12.6274L9.01125 14.5076L9.03774 6.08012C9.03774 5.14775 9.91414 4.49414 10.8623 4.49414C11.8191 4.56125 12.4958 5.31449 12.5309 6.1934L12.5081 10.4814H17.1328C18.7336 10.5176 20.0787 11.9785 19.9968 13.5804V19.2051C19.8565 20.7676 18.7336 21.8692 17.1573 21.9981H9.09039C9.05712 21.9981 9.02604 21.9815 9.00751 21.9538L4.39264 15.0607C3.87162 14.4212 3.86814 13.5063 4.38429 12.8629C5.00466 12.0898 6.14416 11.983 6.89817 12.6274Z',
  d8: 'M8.25514 6.25C8.25514 4.86929 9.37442 3.75 10.7551 3.75C12.1358 3.75 13.2551 4.86929 13.2551 6.25V9.72757H17C19.0711 9.72757 20.75 11.4065 20.75 13.4776V19C20.75 21.0711 19.0711 22.75 17 22.75H9C8.74931 22.75 8.5152 22.6247 8.37608 22.4162L3.78334 15.5313C3.06867 14.6238 3.07177 13.3411 3.79549 12.4365C4.67497 11.3371 6.29041 11.1853 7.35934 12.1015L8.25514 12.8693V6.25Z',
  d9: 'M10.7549 2.75C8.95996 2.75 7.50488 4.20507 7.50488 6H6.00488C6.00488 3.37665 8.13153 1.25 10.7549 1.25C13.3782 1.25 15.5049 3.37665 15.5049 6H14.0049C14.0049 4.20507 12.5498 2.75 10.7549 2.75Z',
} as const;

export const IconTap03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-03-stroke-rounded IconTap03StrokeRounded"
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

export const IconTap03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-03-duotone-rounded IconTap03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconTap03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-03-twotone-rounded IconTap03TwotoneRounded"
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

export const IconTap03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-03-solid-rounded IconTap03SolidRounded"
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

export const IconTap03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-03-bulk-rounded IconTap03BulkRounded"
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

export const IconTap03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-03-stroke-sharp IconTap03StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-03-solid-sharp IconTap03SolidSharp"
    >
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

export const iconPackOfTap03: TheIconSelfPack = {
  name: 'Tap03',
  StrokeRounded: IconTap03StrokeRounded,
  DuotoneRounded: IconTap03DuotoneRounded,
  TwotoneRounded: IconTap03TwotoneRounded,
  SolidRounded: IconTap03SolidRounded,
  BulkRounded: IconTap03BulkRounded,
  StrokeSharp: IconTap03StrokeSharp,
  SolidSharp: IconTap03SolidSharp,
};