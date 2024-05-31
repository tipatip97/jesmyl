import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 12.5L6.20943 12.735C6.59836 13.1714 7.25402 13.052 7.5 12.5C7.74598 11.948 8.40164 11.8286 8.79057 12.265L9 12.5',
  d2: 'M15.8413 18L15.9521 17.6549C16.1579 17.014 15.6742 16.4273 15 16.5C14.3258 16.5727 13.8421 15.986 14.0479 15.3451L14.1587 15',
  d3: 'M19.009 13H19',
  d4: 'M9.00896 17H9',
  d5: 'M8.00896 8H8',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15 10C16.1046 10 17 9.10457 17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8C13 9.10457 13.8954 10 15 10Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15 6.75C14.3096 6.75 13.75 7.30964 13.75 8C13.75 8.69036 14.3096 9.25 15 9.25C15.6904 9.25 16.25 8.69036 16.25 8C16.25 7.30964 15.6904 6.75 15 6.75ZM12.25 8C12.25 6.48122 13.4812 5.25 15 5.25C16.5188 5.25 17.75 6.48122 17.75 8C17.75 9.51878 16.5188 10.75 15 10.75C13.4812 10.75 12.25 9.51878 12.25 8ZM5.64952 13.2591C6.43203 14.1485 7.77216 13.7914 8.22029 12.7727L8.44009 13.021C8.71567 13.3343 9.18976 13.3619 9.49899 13.0828C9.80823 12.8036 9.83551 12.3234 9.55993 12.0102L9.3505 11.7721C8.56799 10.8827 7.22772 11.2399 6.77959 12.2586L6.55993 12.0102C6.28435 11.697 5.81026 11.6693 5.50102 11.9485C5.19178 12.2276 5.1645 12.7078 5.44009 13.021L5.64952 13.2591ZM14.3872 14.2861C14.7816 14.4128 14.9986 14.8351 14.8719 15.2295L14.7611 15.5746C14.7375 15.638 14.7358 15.7627 14.9187 15.7545C16.1221 15.6247 17.0403 16.7168 16.6653 17.8844L16.5545 18.2295C16.4279 18.6239 16.0055 18.8409 15.6111 18.7143C15.2167 18.5876 14.9997 18.1653 15.1264 17.7709L15.2372 17.4258C15.2886 17.2656 15.1536 17.2391 15.0796 17.2459C13.8762 17.3757 12.958 16.2836 13.333 15.116L13.4438 14.7709C13.5704 14.3765 13.9928 14.1595 14.3872 14.2861ZM18.9955 12C18.4457 12 18 12.4477 18 13C18 13.5523 18.4457 14 18.9955 14H19.0045C19.5543 14 20 13.5523 20 13C20 12.4477 19.5543 12 19.0045 12H18.9955ZM8 17C8 16.4477 8.44572 16 8.99554 16H9.00446C9.55428 16 10 16.4477 10 17C10 17.5523 9.55428 18 9.00446 18H8.99554C8.44572 18 8 17.5523 8 17ZM7.99554 7C7.44572 7 7 7.44771 7 8C7 8.55228 7.44572 9 7.99554 9H8.00446C8.55428 9 9 8.55228 9 8C9 7.44771 8.55428 7 8.00446 7H7.99554Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d9: 'M15 6.75C14.3096 6.75 13.75 7.30964 13.75 8C13.75 8.69036 14.3096 9.25 15 9.25C15.6904 9.25 16.25 8.69036 16.25 8C16.25 7.30964 15.6904 6.75 15 6.75ZM12.25 8C12.25 6.48122 13.4812 5.25 15 5.25C16.5188 5.25 17.75 6.48122 17.75 8C17.75 9.51878 16.5188 10.75 15 10.75C13.4812 10.75 12.25 9.51878 12.25 8Z',
  d10: 'M8.22029 12.7727C7.77216 13.7914 6.43203 14.1485 5.64952 13.2591L5.44009 13.021C5.1645 12.7078 5.19178 12.2276 5.50102 11.9485C5.81026 11.6693 6.28435 11.697 6.55993 12.0102L6.77959 12.2586C7.22772 11.2399 8.56799 10.8827 9.3505 11.7721L9.55993 12.0102C9.83551 12.3234 9.80823 12.8036 9.49899 13.0828C9.18976 13.3619 8.71567 13.3343 8.44009 13.021L8.22029 12.7727Z',
  d11: 'M14.3891 14.2861C14.7835 14.4128 15.0006 14.8351 14.8739 15.2295L14.7631 15.5746C14.7394 15.638 14.7378 15.7627 14.9207 15.7545C16.1241 15.6247 17.0423 16.7168 16.6673 17.8844L16.5565 18.2295C16.4298 18.6239 16.0074 18.8409 15.6131 18.7143C15.2187 18.5876 15.0017 18.1653 15.1283 17.7709L15.2391 17.4258C15.2906 17.2656 15.1555 17.2391 15.0815 17.2459C13.8781 17.3757 12.9599 16.2836 13.3349 15.116L13.4457 14.7709C13.5724 14.3765 13.9948 14.1595 14.3891 14.2861Z',
  d12: 'M18 13C18 12.4477 18.4457 12 18.9955 12H19.0045C19.5543 12 20 12.4477 20 13C20 13.5523 19.5543 14 19.0045 14H18.9955C18.4457 14 18 13.5523 18 13Z',
  d13: 'M8 17C8 16.4477 8.44572 16 8.99554 16H9.00446C9.55428 16 10 16.4477 10 17C10 17.5523 9.55428 18 9.00446 18H8.99554C8.44572 18 8 17.5523 8 17Z',
  d14: 'M7 8C7 7.44772 7.44572 7 7.99554 7H8.00446C8.55428 7 9 7.44772 9 8C9 8.55228 8.55428 9 8.00446 9H7.99554C7.44572 9 7 8.55228 7 8Z',
  d15: 'M6 12.5L6.34905 12.735C6.99726 13.1714 8.09003 13.052 8.5 12.5C8.90997 11.948 10.0027 11.8286 10.6509 12.265L11 12.5',
  d16: 'M15.8413 18L15.9521 17.5399C16.1579 16.6853 15.6742 15.903 15 16C14.3258 16.097 13.8421 15.3147 14.0479 14.4601L14.1587 14',
  d17: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15 6.75C14.3096 6.75 13.75 7.30964 13.75 8C13.75 8.69036 14.3096 9.25 15 9.25C15.6904 9.25 16.25 8.69036 16.25 8C16.25 7.30964 15.6904 6.75 15 6.75ZM12.25 8C12.25 6.48122 13.4812 5.25 15 5.25C16.5188 5.25 17.75 6.48122 17.75 8C17.75 9.51878 16.5188 10.75 15 10.75C13.4812 10.75 12.25 9.51878 12.25 8ZM9.10302 12.9471C9.14087 12.8961 9.28671 12.7881 9.56849 12.7573C9.839 12.7277 10.0869 12.7887 10.233 12.887L10.582 13.122L11.4198 11.8778L11.0707 11.6428C10.5686 11.3047 9.94599 11.2071 9.40557 11.2662C8.87642 11.324 8.27089 11.5517 7.89878 12.0527C7.86092 12.1037 7.71508 12.2117 7.43331 12.2425C7.1628 12.2721 6.91492 12.2111 6.76881 12.1128L6.41976 11.8778L5.58203 13.122L5.93108 13.357C6.43319 13.6951 7.0558 13.7927 7.59622 13.7336C8.12538 13.6758 8.73091 13.4481 9.10302 12.9471ZM14.8878 14.1755L14.7769 14.6356C14.7159 14.8891 14.7683 15.0896 14.8317 15.1923C14.8599 15.2378 14.8832 15.2541 14.8895 15.2579L14.8931 15.2575C15.5857 15.1579 16.1421 15.5305 16.4439 16.0185C16.7394 16.4964 16.8259 17.1143 16.6812 17.7153L16.5703 18.1755L15.112 17.8242L15.2229 17.3641C15.2839 17.1106 15.2315 16.91 15.1681 16.8074C15.1399 16.7619 15.1166 16.7456 15.1103 16.7418L15.1067 16.7422C14.4141 16.8418 13.8577 16.4692 13.5559 15.9812C13.2604 15.5033 13.1739 14.8854 13.3186 14.2844L13.4295 13.8242L14.8878 14.1755ZM19 12C18.4477 12 18 12.4477 18 13C18 13.5523 18.4477 14 19 14H19.009C19.5612 14 20.009 13.5523 20.009 13C20.009 12.4477 19.5612 12 19.009 12H19ZM8 17C8 16.4477 8.44772 16 9 16H9.00896C9.56125 16 10.009 16.4477 10.009 17C10.009 17.5523 9.56125 18 9.00896 18H9C8.44772 18 8 17.5523 8 17ZM8 7C7.44772 7 7 7.44771 7 8C7 8.55228 7.44772 9 8 9H8.00896C8.56125 9 9.00896 8.55228 9.00896 8C9.00896 7.44771 8.56125 7 8.00896 7H8Z',
} as const;

export const IconBacteriaStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bacteria-stroke-rounded IconBacteriaStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="15" 
        cy="8" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBacteriaDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bacteria-duotone-rounded IconBacteriaDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="15" 
        cy="8" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBacteriaTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bacteria-twotone-rounded IconBacteriaTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="15" 
        cy="8" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBacteriaSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bacteria-solid-rounded IconBacteriaSolidRounded"
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

export const IconBacteriaBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bacteria-bulk-rounded IconBacteriaBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBacteriaStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bacteria-stroke-sharp IconBacteriaStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="15" 
        cy="8" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBacteriaSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bacteria-solid-sharp IconBacteriaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBacteria: TheIconSelfPack = {
  name: 'Bacteria',
  StrokeRounded: IconBacteriaStrokeRounded,
  DuotoneRounded: IconBacteriaDuotoneRounded,
  TwotoneRounded: IconBacteriaTwotoneRounded,
  SolidRounded: IconBacteriaSolidRounded,
  BulkRounded: IconBacteriaBulkRounded,
  StrokeSharp: IconBacteriaStrokeSharp,
  SolidSharp: IconBacteriaSolidSharp,
};