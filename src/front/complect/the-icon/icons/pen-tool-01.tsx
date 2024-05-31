import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.5 20.5L7.90613 15.227C8.19164 14.1564 8.33439 13.621 8.73856 13.3105C9.14274 13 9.69677 13 10.8048 13H13.1952C14.3032 13 14.8573 13 15.2614 13.3105C15.6656 13.621 15.8084 14.1564 16.0939 15.227L17.5 20.5',
  d2: 'M9.5 13L11.0769 9.36095C11.4701 8.45365 11.6667 8 12 8C12.3333 8 12.5299 8.45365 12.9231 9.36095L14.5 13',
  d3: 'M17.4666 20.3749C20.1964 18.5894 22 15.5053 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.5053 3.80357 18.5894 6.53336 20.3749L7.90613 15.227C8.19164 14.1564 8.33439 13.621 8.73856 13.3105C9.14274 13 9.69677 13 10.8048 13H9.5L11.0769 9.36095C11.4701 8.45365 11.6667 8 12 8C12.3333 8 12.5299 8.45365 12.9231 9.36095L14.5 13H13.1952C14.3032 13 14.8573 13 15.2614 13.3105C15.6656 13.621 15.8084 14.1564 16.0939 15.227L17.4666 20.3749Z',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d5: 'M6.5 20.439L7.90613 15.166C8.19164 14.0954 8.33439 13.56 8.73856 13.2495C9.14274 12.939 9.69677 12.939 10.8048 12.939H13.1952C14.3032 12.939 14.8573 12.939 15.2614 13.2495C15.6656 13.56 15.8084 14.0954 16.0939 15.166L17.5 20.439M9.5 12.939L11.0769 9.29992C11.4701 8.39262 11.6667 7.93896 12 7.93896C12.3333 7.93896 12.5299 8.39262 12.9231 9.29992L14.5 12.939',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 3.20455C7.14241 3.20455 3.20455 7.14241 3.20455 12C3.20455 16.8576 7.14241 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 7.14241 16.8576 3.20455 12 3.20455Z',
  d7: 'M10.9278 7.9464C11.0933 7.67813 11.4206 7.25 12.0052 7.25C12.5897 7.25 12.917 7.67813 13.0826 7.9464C13.2514 8.22007 13.4171 8.60263 13.5955 9.01449L13.5955 9.0145L14.5807 11.288C14.1781 11.2499 13.723 11.2499 13.2823 11.25H10.7281C10.2874 11.2499 9.8323 11.2499 9.42969 11.288L10.4148 9.0145C10.5932 8.60263 10.759 8.22007 10.9278 7.9464ZM14.5854 12.294C14.2134 12.2499 13.7601 12.25 13.2414 12.25H13.2414H10.7685H10.7684C10.2498 12.25 9.79638 12.2499 9.42439 12.294C9.02268 12.3416 8.63523 12.4479 8.28654 12.7158C7.93786 12.9837 7.73536 13.3307 7.58586 13.7065C7.44741 14.0546 7.33062 14.4927 7.19699 14.9939L6.07422 19.2043C7.63752 20.6303 9.71716 21.5 11.9999 21.5C14.2866 21.5 16.3694 20.6274 17.9336 19.197L16.8128 14.9939C16.6792 14.4927 16.5624 14.0546 16.424 13.7065C16.2745 13.3307 16.072 12.9837 15.7233 12.7158C15.3746 12.4479 14.9871 12.3416 14.5854 12.294Z',
  d8: 'M13.2414 12.25C13.7601 12.25 14.2134 12.2499 14.5854 12.294C14.9871 12.3416 15.3746 12.4479 15.7233 12.7158C16.072 12.9837 16.2745 13.3307 16.424 13.7065C16.5624 14.0546 16.6792 14.4927 16.8128 14.9939L17.9336 19.197C16.3694 20.6274 14.2866 21.5 11.9999 21.5C9.71716 21.5 7.63752 20.6303 6.07422 19.2043L7.19699 14.9939C7.33062 14.4927 7.44741 14.0546 7.58586 13.7065C7.73536 13.3307 7.93786 12.9837 8.28654 12.7158C8.63523 12.4479 9.02268 12.3416 9.42439 12.294C9.79638 12.2499 10.2498 12.25 10.7684 12.25H10.7685H13.2414H13.2414Z',
  d9: 'M12.0052 7.25C11.4206 7.25 11.0933 7.67813 10.9278 7.9464C10.759 8.22007 10.5932 8.60263 10.4148 9.0145L9.42969 11.288C9.8323 11.2499 10.2874 11.2499 10.7281 11.25H13.2823C13.723 11.2499 14.1781 11.2499 14.5807 11.288L13.5955 9.0145C13.4171 8.60264 13.2514 8.22007 13.0826 7.9464C12.917 7.67813 12.5897 7.25 12.0052 7.25Z',
  d10: 'M6 20L8.5 13L15.5 13L18 20',
  d11: 'M14.5 13L12 8L9.5 13',
  d12: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM18.1753 18.263C19.7928 16.668 20.7955 14.4511 20.7955 12C20.7955 7.1424 16.8576 3.20455 12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 14.4506 4.20673 16.667 5.82361 18.262L7.97074 12.25L16.0278 12.25L18.1753 18.263Z',
  d13: 'M14.3382 11.0003L11.9996 6.32324L9.66113 11.0003L14.3382 11.0003Z',
} as const;

export const IconPenTool01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-01-stroke-rounded IconPenTool01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPenTool01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-01-duotone-rounded IconPenTool01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPenTool01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-01-twotone-rounded IconPenTool01TwotoneRounded"
    >
      <path 
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

export const IconPenTool01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-01-solid-rounded IconPenTool01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-01-bulk-rounded IconPenTool01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPenTool01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-01-stroke-sharp IconPenTool01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenTool01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-01-solid-sharp IconPenTool01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPenTool01: TheIconSelfPack = {
  name: 'PenTool01',
  StrokeRounded: IconPenTool01StrokeRounded,
  DuotoneRounded: IconPenTool01DuotoneRounded,
  TwotoneRounded: IconPenTool01TwotoneRounded,
  SolidRounded: IconPenTool01SolidRounded,
  BulkRounded: IconPenTool01BulkRounded,
  StrokeSharp: IconPenTool01StrokeSharp,
  SolidSharp: IconPenTool01SolidSharp,
};