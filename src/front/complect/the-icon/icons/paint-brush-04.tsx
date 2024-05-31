import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 4C10 2.89543 10.8954 2 12 2H13C14.1046 2 15 2.89543 15 4V6.55337C15 7.86603 15.8534 9.02626 17.1065 9.41722L17.8935 9.66278C19.1466 10.0537 20 11.214 20 12.5266V14C20 14.5523 19.5523 15 19 15H6C5.44772 15 5 14.5523 5 14V12.5266C5 11.214 5.85339 10.0537 7.10648 9.66278L7.89352 9.41722C9.14661 9.02626 10 7.86603 10 6.55337V4Z',
  d2: 'M6.00217 15C6.15797 16.3082 5.4957 19.5132 4 21.8679C4 21.8679 14.2924 23.0594 15.6851 17.9434V19.8712C15.6851 20.8125 15.6851 21.2831 15.9783 21.5755C16.5421 22.1377 19.1891 22.1531 19.7538 21.5521C20.0504 21.2363 20.0207 20.7819 19.9611 19.8731C19.8629 18.3746 19.5932 16.4558 18.8523 15',
  d3: 'M12 1.25C10.4812 1.25 9.25 2.48122 9.25 4V6.55337C9.25 7.53787 8.60996 8.40804 7.67014 8.70126L6.8831 8.94682C5.31674 9.43552 4.25 10.8858 4.25 12.5266C4.25 13.4931 5.0335 14.2766 6 14.2766H19C19.9665 14.2766 20.75 13.4931 20.75 12.5266C20.75 10.8858 19.6833 9.43552 18.1169 8.94682L17.3299 8.70126C16.39 8.40804 15.75 7.53787 15.75 6.55337V4C15.75 2.48122 14.5188 1.25 13 1.25H12ZM6 15.776H19C19.1284 15.776 19.255 15.7686 19.3795 15.7541C19.6769 15.7195 19.8256 15.7022 19.917 15.7626C20.0083 15.8229 20.0436 15.9425 20.1142 16.1818C20.4828 17.4304 20.6396 18.7569 20.7095 19.8235L20.7126 19.8706C20.7398 20.2842 20.7653 20.6734 20.7384 20.9966C20.7079 21.364 20.6041 21.7417 20.3004 22.065C19.9944 22.3907 19.5276 22.5404 19.1667 22.6201C18.7653 22.7088 18.308 22.7488 17.8667 22.7494C17.4249 22.7499 16.9697 22.7109 16.5715 22.6267C16.2149 22.5513 15.7544 22.4107 15.4487 22.1059C15.1392 21.7972 15.0264 21.4217 14.9785 21.0663C14.9475 20.8364 14.6682 20.7115 14.4805 20.8478C14.2083 21.0455 13.9194 21.2218 13.6197 21.3787C12.3465 22.0453 10.8297 22.3916 9.41285 22.5678C7.9881 22.745 6.6165 22.7556 5.60582 22.7231C5.09907 22.7068 4.67969 22.6795 4.38554 22.6561C3.88039 22.5678 3.43409 22.4231 3.32299 22.19C3.21188 21.9569 3.22848 21.6831 3.36692 21.4651C4.0635 20.3685 4.57655 19.0543 4.89533 17.8491C5.03502 17.321 5.13296 16.8309 5.19429 16.4029C5.24054 16.08 5.26366 15.9186 5.34902 15.8452C5.43438 15.7718 5.6144 15.7732 5.97444 15.7759L6 15.776Z',
  d4: 'M9.25 4C9.25 2.48122 10.4812 1.25 12 1.25H13C14.5188 1.25 15.75 2.48122 15.75 4V6.55337C15.75 7.53787 16.39 8.40804 17.3299 8.70126L18.1169 8.94682C19.6833 9.43552 20.75 10.8858 20.75 12.5266C20.75 13.4931 19.9665 14.2766 19 14.2766H6C5.0335 14.2766 4.25 13.4931 4.25 12.5266C4.25 10.8858 5.31674 9.43552 6.8831 8.94682L7.67014 8.70126C8.60996 8.40804 9.25 7.53787 9.25 6.55337V4Z',
  d5: 'M19 15.776H6C5.99147 15.776 5.98295 15.776 5.97444 15.7759C5.6144 15.7732 5.43438 15.7718 5.34902 15.8452C5.26366 15.9186 5.24054 16.08 5.19429 16.4029C5.13296 16.8309 5.03502 17.321 4.89533 17.8491C4.57655 19.0543 4.0635 20.3685 3.36692 21.4651C3.22848 21.6831 3.21188 21.9569 3.32299 22.19C3.43409 22.4231 3.88039 22.5678 4.38554 22.6561C4.67969 22.6795 5.09907 22.7068 5.60582 22.7231C6.6165 22.7557 7.9881 22.745 9.41285 22.5678C10.8297 22.3916 12.3465 22.0453 13.6197 21.3787C13.9194 21.2218 14.2083 21.0455 14.4805 20.8478C14.6682 20.7115 14.9475 20.8364 14.9785 21.0663C15.0264 21.4217 15.1392 21.7972 15.4487 22.1059C15.7544 22.4107 16.2149 22.5513 16.5715 22.6267C16.9697 22.7109 17.4249 22.7499 17.8667 22.7494C18.308 22.7488 18.7653 22.7088 19.1667 22.6201C19.5276 22.5404 19.9944 22.3907 20.3004 22.065C20.6041 21.7417 20.7079 21.364 20.7384 20.9966C20.7653 20.6734 20.7398 20.2842 20.7126 19.8706L20.7095 19.8235C20.6396 18.7569 20.4828 17.4304 20.1142 16.1818C20.0436 15.9425 20.0083 15.8229 19.917 15.7626C19.8256 15.7022 19.6769 15.7195 19.3795 15.7541C19.255 15.7686 19.1284 15.776 19 15.776Z',
  d6: 'M6.49407 15.0117C6.49407 15.0117 6.49407 18.5068 4 22.0017C4 22.0017 13.4775 22.501 15.9715 18.0074V22.0017H19.962L18.4656 15.0117',
  d7: 'M9.96215 9.00386V2.02661C9.96215 2.02108 9.96662 2.0166 9.97213 2.0166H14.9451C14.9506 2.0166 14.9551 2.02108 14.9551 2.02661V9.00386L19.9923 12.0382C19.9953 12.04 19.9971 12.0433 19.9971 12.0468V15.0038H5.03711V12.0021C5.03711 11.9986 5.03893 11.9954 5.04192 11.9936L9.96215 9.00386Z',
  d8: 'M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V8.57536L20.3859 11.3569C20.6118 11.4924 20.75 11.7366 20.75 12V14.75H4.25V12C4.25 11.7366 4.38822 11.4924 4.61413 11.3569L9.25 8.57536V2Z',
  d9: 'M5.59366 15.75H19.5555L20.7333 21.826C20.7809 22.0475 20.7258 22.2787 20.5834 22.4549C20.441 22.6311 20.2266 22.7335 20 22.7335H16C15.5858 22.7335 15.25 22.3977 15.25 21.9835V20.0268C14.6895 20.4945 14.0539 20.8765 13.3897 21.189C12.0616 21.814 10.5653 22.1875 9.18273 22.412C7.79583 22.6373 6.49458 22.7171 5.5423 22.7411C5.07083 22.7529 4.25429 22.7379 3.9706 22.7327L3.96068 22.7325C3.68703 22.7181 3.44299 22.5556 3.32417 22.3087C3.20536 22.0618 3.23067 21.7697 3.39019 21.5469C4.79126 19.59 5.36194 17.0167 5.59366 15.75Z',
} as const;

export const IconPaintBrush04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-04-stroke-rounded IconPaintBrush04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPaintBrush04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-04-duotone-rounded IconPaintBrush04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-04-twotone-rounded IconPaintBrush04TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPaintBrush04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-04-solid-rounded IconPaintBrush04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-04-bulk-rounded IconPaintBrush04BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-04-stroke-sharp IconPaintBrush04StrokeSharp"
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

export const IconPaintBrush04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-04-solid-sharp IconPaintBrush04SolidSharp"
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

export const iconPackOfPaintBrush04: TheIconSelfPack = {
  name: 'PaintBrush04',
  StrokeRounded: IconPaintBrush04StrokeRounded,
  DuotoneRounded: IconPaintBrush04DuotoneRounded,
  TwotoneRounded: IconPaintBrush04TwotoneRounded,
  SolidRounded: IconPaintBrush04SolidRounded,
  BulkRounded: IconPaintBrush04BulkRounded,
  StrokeSharp: IconPaintBrush04StrokeSharp,
  SolidSharp: IconPaintBrush04SolidSharp,
};