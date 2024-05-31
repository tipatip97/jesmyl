import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.99268 14.999V6.96505C3.99268 5.07142 3.99268 4.12461 4.57628 3.53633C4.90165 3.20835 5.33757 3.06323 5.9852 2.99902H10.9665',
  d2: 'M3.49202 16.0144L4.01198 14.999H19.8847L20.4331 16.0144C21.8706 18.676 22.2287 20.0067 21.6822 21.0029C21.1359 21.999 19.6872 21.999 16.7899 21.999H7.13535C4.23802 21.999 2.78935 21.999 2.24296 21.0029C1.69657 20.0067 2.05453 18.676 3.49202 16.0144Z',
  d3: 'M15.4364 2.00098V3.98M11.9624 5.50136H14.0067M19.9555 5.50136H21.9998M19.9555 8.47458H21.9998M11.9624 8.47458H14.0067M15.4364 10.0202V11.9992M18.4505 10.0202V11.9992M18.4398 2.00098V3.98M15.003 9.96854H18.9592C19.5094 9.96854 19.9555 9.52082 19.9555 8.96854V4.98C19.9555 4.42771 19.5094 3.98 18.9592 3.98H15.003C14.4528 3.98 14.0067 4.42771 14.0067 4.98V8.96854C14.0067 9.52082 14.4528 9.96854 15.003 9.96854Z',
  d4: 'M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22H7.15462C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z',
  d5: 'M18 4H16C15.0572 4 14.5858 4 14.2929 4.29289C14 4.58579 14 5.05719 14 6V8C14 8.94281 14 9.41421 14.2929 9.70711C14.5858 10 15.0572 10 16 10H18C18.9428 10 19.4142 10 19.7071 9.70711C20 9.41421 20 8.94281 20 8V6C20 5.05719 20 4.58579 19.7071 4.29289C19.4142 4 18.9428 4 18 4Z',
  d6: 'M4 15V6.96603C4 5.0724 4 4.12559 4.58579 3.53731C4.91238 3.20933 5.34994 3.06421 6 3H11',
  d7: 'M15.4359 2.00098V3.98M11.9619 5.50136H14.0062M19.955 5.50136H21.9993M19.955 8.47458H21.9993M11.9619 8.47458H14.0062M15.4359 10.0202V11.9992M18.45 10.0202V11.9992M18.4393 2.00098V3.98M15.0025 9.96854H18.9587C19.5089 9.96854 19.955 9.52082 19.955 8.96854V4.98C19.955 4.42771 19.5089 3.98 18.9587 3.98H15.0025C14.4523 3.98 14.0062 4.42771 14.0062 4.98V8.96854C14.0062 9.52082 14.4523 9.96854 15.0025 9.96854Z',
  d8: 'M3.99463 14.999V6.96505C3.99463 5.07142 3.99463 4.12461 4.57875 3.53633C4.90441 3.20835 5.34073 3.06323 5.98893 2.99902H10.9747',
  d9: 'M3.49384 16.0144L4.01427 14.999H19.9012L20.4501 16.0144C21.8889 18.676 22.2473 20.0067 21.7003 21.0029C21.1535 21.999 19.7035 21.999 16.8036 21.999H7.14043C4.24051 21.999 2.79054 21.999 2.24366 21.0029C1.69678 20.0067 2.05507 18.676 3.49384 16.0144Z',
  d10: 'M15.4427 2.00049V3.97951M11.9722 5.50087H14.0145M19.9574 5.50087H21.9997M19.9574 8.47409H21.9997M11.9722 8.47409H14.0145M15.4427 10.0197V11.9987M18.4539 10.0197V11.9987M18.4432 2.00049V3.97951M15.0097 9.96805H18.9621C19.5118 9.96805 19.9574 9.52033 19.9574 8.96805V4.97951C19.9574 4.42722 19.5118 3.97951 18.9621 3.97951H15.0097C14.4601 3.97951 14.0145 4.42722 14.0145 4.97951V8.96805C14.0145 9.52033 14.4601 9.96805 15.0097 9.96805Z',
  d11: 'M15.5 1.25C15.9142 1.25 16.25 1.58579 16.25 2V3.25H17.75V2C17.75 1.58579 18.0858 1.25 18.5 1.25C18.9142 1.25 19.25 1.58579 19.25 2V3.30087C19.5896 3.35268 19.9437 3.4688 20.2374 3.76256C20.5312 4.05633 20.6473 4.41037 20.6991 4.75H22C22.4142 4.75 22.75 5.08579 22.75 5.5C22.75 5.91421 22.4142 6.25 22 6.25H20.75V7.75H22C22.4142 7.75 22.75 8.08579 22.75 8.5C22.75 8.91421 22.4142 9.25 22 9.25H20.6991C20.6473 9.58963 20.5312 9.94367 20.2374 10.2374C19.9437 10.5312 19.5896 10.6473 19.25 10.6991V12C19.25 12.4142 18.9142 12.75 18.5 12.75C18.0858 12.75 17.75 12.4142 17.75 12V10.75H16.25V12C16.25 12.4142 15.9142 12.75 15.5 12.75C15.0858 12.75 14.75 12.4142 14.75 12V10.6991C14.4104 10.6473 14.0563 10.5312 13.7626 10.2374C13.4688 9.94367 13.3527 9.58963 13.3009 9.25H12C11.5858 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75H13.25V6.25H12C11.5858 6.25 11.25 5.91421 11.25 5.5C11.25 5.08579 11.5858 4.75 12 4.75H13.3009C13.3527 4.41037 13.4688 4.05633 13.7626 3.76256C14.0563 3.4688 14.4104 3.35268 14.75 3.30087V2C14.75 1.58579 15.0858 1.25 15.5 1.25Z',
  d12: 'M5.92221 2.33224C6.53387 2.25 7.29769 2.25004 8.18417 2.25009L10 2.25C10.5523 2.25 11 2.69772 11 3.25C11 3.80229 10.5523 4.25 10 4.25L8.25 4.25009C7.27892 4.25009 6.65121 4.25221 6.1887 4.3144C5.75496 4.37271 5.61902 4.46686 5.54289 4.54298C5.46677 4.61911 5.37262 4.75506 5.31431 5.1888C5.25212 5.6513 5.25 6.27901 5.25 7.25009V13.6501C5.25 13.9329 5.25 14.0743 5.33787 14.1622C5.42574 14.2501 5.56716 14.2501 5.85 14.2501H20.4063L21.1655 15.6654C21.8895 17.0015 22.3771 18.0654 22.6026 18.9487C22.8346 19.8577 22.8073 20.6496 22.413 21.3657C21.9723 22.1662 21.1848 22.4783 20.3015 22.6166C19.4479 22.7502 18.3095 22.7501 16.913 22.7501H7.08674C5.6903 22.7501 4.55187 22.7502 3.69825 22.6166C2.81497 22.4783 2.02749 22.1662 1.58675 21.3657C1.1925 20.6496 1.16515 19.8577 1.39719 18.9487C1.62267 18.0654 2.11021 17.0015 2.83421 15.6654L3.21015 14.9339L3.22019 14.9142C3.2425 14.868 3.24862 14.8427 3.24991 14.7914L3.25 14.7501L3.25 7.18427C3.24995 6.29778 3.24991 5.53397 3.33215 4.9223C3.42028 4.26679 3.61902 3.63844 4.12868 3.12878C4.63835 2.61911 5.2667 2.42037 5.92221 2.33224Z',
  d13: 'M20 4H14V10H20V4Z',
  d14: 'M15.5 10V12M18.5 10V12M15.5 2V4M18.5 2V4M14 5.5H12M14 8.5H12M22 5.5H20M22 8.5H20',
  d15: 'M11 3L4 3V15',
  d16: 'M2 22L4.01911 15H19.9514L21.9996 22H2Z',
  d17: 'M14.75 3V1.25H16.25V3H17.75V1.25H19.25V3H20.75V4.5H22.5V6H20.75V7.5H22.5V9H20.75V10.5H19.25V12.25H17.75V10.5H16.25V12.25H14.75V10.5H13.25V9H11.5V7.5H13.25V6H11.5V4.5H13.25V3H14.75Z',
  d18: 'M22.7124 21.5056L20.7954 14.8038V13.9643H5.16016V4.20239H11.0012L10.9998 2.25H3.20418V14.8038L1.2876 21.5057C1.20337 21.8002 1.26242 22.1172 1.4471 22.3617C1.63177 22.6062 1.92064 22.75 2.2273 22.75H21.7727C22.0794 22.75 22.3682 22.6062 22.5529 22.3617C22.7376 22.1171 22.7966 21.8002 22.7124 21.5056Z',
} as const;

export const IconAiLaptopStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-laptop-stroke-rounded IconAiLaptopStrokeRounded"
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

export const IconAiLaptopDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-laptop-duotone-rounded IconAiLaptopDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiLaptopTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-laptop-twotone-rounded IconAiLaptopTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiLaptopSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-laptop-solid-rounded IconAiLaptopSolidRounded"
    >
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

export const IconAiLaptopBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-laptop-bulk-rounded IconAiLaptopBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAiLaptopStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-laptop-stroke-sharp IconAiLaptopStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiLaptopSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-laptop-solid-sharp IconAiLaptopSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiLaptop: TheIconSelfPack = {
  name: 'AiLaptop',
  StrokeRounded: IconAiLaptopStrokeRounded,
  DuotoneRounded: IconAiLaptopDuotoneRounded,
  TwotoneRounded: IconAiLaptopTwotoneRounded,
  SolidRounded: IconAiLaptopSolidRounded,
  BulkRounded: IconAiLaptopBulkRounded,
  StrokeSharp: IconAiLaptopStrokeSharp,
  SolidSharp: IconAiLaptopSolidSharp,
};