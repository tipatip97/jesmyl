import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.00024 2L22.0002 22',
  d2: 'M12.0005 21H8.00049C5.64347 21 4.46495 21 3.73272 20.2678C3.00049 19.5355 3.00049 18.357 3.00049 16V8C3.00049 5.64298 3.00049 4.46447 3.73272 3.73223M12.0005 21C14.3575 21 15.536 21 16.2683 20.2678C16.889 19.647 16.9835 18.7056 16.9979 16.9974M12.0005 21H17.0005C18.8861 21 19.8289 21 20.4147 20.4142M21.0005 16.9974V10C21.0005 8.11438 21.0005 7.17157 20.4147 6.58579C19.8289 6 18.8861 6 17.0005 6M17.0005 13.1109V8C17.0005 5.64298 17.0005 4.46447 16.2683 3.73223C15.536 3 14.3575 3 12.0005 3H8.00049C7.5983 3 7.23042 3 6.89321 3.00364',
  d3: 'M17.0002 16V8C17.0002 5.64298 17.0002 4.46447 16.268 3.73223C15.5358 3 14.3573 3 12.0002 3H8.00024C5.64322 3 4.46471 3 3.73248 3.73223C3.00024 4.46447 3.00024 5.64298 3.00024 8V16C3.00024 18.357 3.00024 19.5355 3.73248 20.2678C4.46471 21 5.64322 21 8.00024 21H12.0002C14.3573 21 15.5358 21 16.268 20.2678C17.0002 19.5355 17.0002 18.357 17.0002 16Z',
  d4: 'M12.0005 20.9999H8.00049C5.64347 20.9999 4.46495 20.9999 3.73272 20.2677C3.00049 19.5355 3.00049 18.357 3.00049 15.9999V7.99994C3.00049 5.64292 3.00049 4.46441 3.73272 3.73218M12.0005 20.9999C14.3575 20.9999 15.536 20.9999 16.2683 20.2677C16.889 19.647 16.9835 18.7056 16.9979 16.9974M12.0005 20.9999H17.0005C18.8861 20.9999 19.8289 20.9999 20.4147 20.4142',
  d5: 'M21.0003 16.9974V10C21.0003 8.11438 21.0003 7.17157 20.4146 6.58579C19.8288 6 18.886 6 17.0003 6M17.0003 13.1109V8C17.0003 5.64298 17.0003 4.46447 16.2681 3.73223C15.5359 3 14.3574 3 12.0003 3H8.00034C7.59815 3 7.23027 3 6.89307 3.00364',
  d6: 'M1.54181 1.5418C1.93078 1.15283 2.56144 1.15283 2.95042 1.5418L22.4583 21.0497C22.8472 21.4387 22.8472 22.0693 22.4583 22.4583C22.0693 22.8472 21.4386 22.8472 21.0497 22.4583L1.54181 2.95039C1.15283 2.56142 1.15283 1.93077 1.54181 1.5418Z',
  d7: 'M12.0537 2.25H7.94631H7.94626C7.13042 2.24998 6.42197 2.24997 5.81638 2.28667L17.75 14.2203V7.94632V7.94616C17.75 7.68428 17.75 7.43348 17.7488 7.19359C18.254 7.19833 18.6309 7.21235 18.9337 7.2536C19.3494 7.3102 19.4797 7.40157 19.5526 7.47546C19.6256 7.54934 19.7158 7.68129 19.7717 8.10228C19.8313 8.55118 19.8333 9.16043 19.8333 10.1029V16.3036L21.7388 18.2091C21.75 17.8284 21.75 17.4109 21.75 16.961V10.039V10.039C21.75 9.17863 21.7501 8.43727 21.6713 7.84362C21.5868 7.20738 21.3964 6.59751 20.9079 6.10284C20.4195 5.60817 19.8173 5.41527 19.1891 5.32973C18.7564 5.2708 18.2442 5.2554 17.6638 5.2514C17.66 5.21954 17.656 5.18804 17.6518 5.15689C17.5491 4.39294 17.3268 3.7306 16.7981 3.20191C16.2694 2.67321 15.6071 2.45093 14.8431 2.34822C14.1123 2.24996 13.1865 2.24998 12.0537 2.25H12.0537Z',
  d8: 'M2.25 7.94625V7.94627V16.0537V16.0537C2.24998 17.1865 2.24996 18.1123 2.34822 18.8431C2.45093 19.6071 2.67321 20.2694 3.20191 20.7981C3.7306 21.3268 4.39294 21.5491 5.15689 21.6518C5.88773 21.75 6.81344 21.75 7.94624 21.75H7.94627H12.0537L12.2235 21.75L17.0214 21.75C17.871 21.75 18.603 21.7501 19.1891 21.6703C19.8173 21.5847 20.4195 21.3918 20.9079 20.8972L3.20191 3.20191C2.67328 3.73058 2.45092 4.39298 2.34822 5.15689C2.24996 5.88774 2.24998 6.81344 2.25 7.94625Z',
  d9: 'M2.25 7.94551V7.94553V16.053V16.053C2.24998 17.1858 2.24996 18.1115 2.34822 18.8424C2.45093 19.6063 2.67321 20.2687 3.20191 20.7974C3.7306 21.3261 4.39294 21.5483 5.15689 21.6511C5.88773 21.7493 6.81344 21.7493 7.94624 21.7493H7.94627H12.0537L12.2235 21.7493L17.0214 21.7493C17.871 21.7493 18.603 21.7493 19.1891 21.6695C19.8173 21.584 20.4195 21.3911 20.9079 20.8964L3.20191 3.20117C2.67328 3.72985 2.45092 4.39225 2.34822 5.15615C2.24996 5.887 2.24998 6.81271 2.25 7.94551Z',
  d10: 'M12.0537 2.25H7.94633H7.94628C7.13044 2.24998 6.422 2.24997 5.81641 2.28667L17.75 14.2203V7.94632V7.94616C17.75 7.68428 17.75 7.43348 17.7488 7.19359C18.2541 7.19833 18.6309 7.21235 18.9338 7.2536C19.3494 7.3102 19.4797 7.40157 19.5527 7.47546C19.6256 7.54934 19.7158 7.68129 19.7717 8.10228C19.8313 8.55118 19.8334 9.16043 19.8334 10.1029V16.3036L21.7388 18.2091C21.7501 17.8284 21.75 17.411 21.75 16.9611V16.961V10.039V10.039C21.7501 9.17863 21.7501 8.43727 21.6713 7.84362C21.5868 7.20738 21.3964 6.59751 20.908 6.10284C20.4195 5.60817 19.8174 5.41527 19.1892 5.32973C18.7564 5.2708 18.2442 5.2554 17.6638 5.2514C17.66 5.21954 17.656 5.18804 17.6518 5.15689C17.5491 4.39294 17.3268 3.7306 16.7981 3.20191C16.2694 2.67321 15.6071 2.45093 14.8431 2.34822C14.1123 2.24996 13.1866 2.24998 12.0538 2.25H12.0537Z',
  d11: 'M17.0005 20.9999L3.00049 20.9998V2.99976M17.0005 20.9999V16.9998M17.0005 20.9999L21.0005 20.9997M17.0005 5.99976H21.0005V17.8178M17.0005 13.8178V2.99976H6.18247',
  d12: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d13: 'M2.25195 3V21C2.25195 21.4142 2.58774 21.75 3.00195 21.75L17.0019 21.7501L17.0152 21.75L20.8353 21.7499C21.0843 21.7499 21.3102 21.6448 21.4754 21.4741L2.4713 2.47C2.33577 2.60569 2.25195 2.79306 2.25195 3Z',
  d14: 'M21.752 6.22059C21.752 5.68455 21.3415 5.25 20.8353 5.25H17.752V3C17.752 2.58579 17.4162 2.25 17.002 2.25H5.78683L17.752 14.2151V7.19118H19.9186V16.3818L21.752 18.2151V6.22059Z',
} as const;

export const IconNoMeetingRoomStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-meeting-room-stroke-rounded IconNoMeetingRoomStrokeRounded"
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

export const IconNoMeetingRoomDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-meeting-room-duotone-rounded IconNoMeetingRoomDuotoneRounded"
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

export const IconNoMeetingRoomTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-meeting-room-twotone-rounded IconNoMeetingRoomTwotoneRounded"
    >
      <path 
        d={d.d1} 
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

export const IconNoMeetingRoomSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-meeting-room-solid-rounded IconNoMeetingRoomSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoMeetingRoomBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-meeting-room-bulk-rounded IconNoMeetingRoomBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNoMeetingRoomStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-meeting-room-stroke-sharp IconNoMeetingRoomStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconNoMeetingRoomSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="no-meeting-room-solid-sharp IconNoMeetingRoomSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNoMeetingRoom: TheIconSelfPack = {
  name: 'NoMeetingRoom',
  StrokeRounded: IconNoMeetingRoomStrokeRounded,
  DuotoneRounded: IconNoMeetingRoomDuotoneRounded,
  TwotoneRounded: IconNoMeetingRoomTwotoneRounded,
  SolidRounded: IconNoMeetingRoomSolidRounded,
  BulkRounded: IconNoMeetingRoomBulkRounded,
  StrokeSharp: IconNoMeetingRoomStrokeSharp,
  SolidSharp: IconNoMeetingRoomSolidSharp,
};