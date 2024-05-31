import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 16V8C17 5.64298 17 4.46447 16.2678 3.73223C15.5355 3 14.357 3 12 3H8C5.64298 3 4.46447 3 3.73223 3.73223C3 4.46447 3 5.64298 3 8V16C3 18.357 3 19.5355 3.73223 20.2678C4.46447 21 5.64298 21 8 21H12C14.357 21 15.5355 21 16.2678 20.2678C17 19.5355 17 18.357 17 16Z',
  d2: 'M11 21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V10C21 8.11438 21 7.17157 20.4142 6.58579C19.8284 6 18.8856 6 17 6',
  d3: 'M13 11V13',
  d4: 'M18.9337 7.25359C18.4905 7.19324 17.8889 7.19118 16.9583 7.19118C16.4291 7.19118 16 6.75663 16 6.22059C16 5.68455 16.4291 5.25 16.9583 5.25L17.0214 5.25C17.871 5.24995 18.603 5.24991 19.1891 5.32973C19.8173 5.41527 20.4195 5.60817 20.9079 6.10284C21.3964 6.59751 21.5868 7.20738 21.6713 7.84362C21.7501 8.43729 21.75 9.17863 21.75 10.039V16.961C21.75 17.8214 21.7501 18.5627 21.6713 19.1564C21.5868 19.7926 21.3964 20.4025 20.9079 20.8972C20.4195 21.3918 19.8173 21.5847 19.1891 21.6703C18.603 21.7501 17.871 21.75 17.0214 21.75L11.2083 21.75C10.6791 21.75 10.25 21.3154 10.25 20.7794C10.25 20.2434 10.6791 19.8088 11.2083 19.8088H16.9583C17.8889 19.8088 18.4905 19.8068 18.9337 19.7464C19.3494 19.6898 19.4797 19.5984 19.5526 19.5245C19.6256 19.4507 19.7158 19.3187 19.7717 18.8977C19.8313 18.4488 19.8333 17.8396 19.8333 16.8971V10.1029C19.8333 9.16042 19.8313 8.55118 19.7717 8.10227C19.7158 7.68129 19.6256 7.54934 19.5526 7.47546C19.4797 7.40157 19.3494 7.31019 18.9337 7.25359Z',
  d5: 'M14.8431 2.34822C14.1123 2.24996 13.1865 2.24998 12.0537 2.25H12.0537H7.94631H7.94629C6.81346 2.24998 5.88774 2.24996 5.15689 2.34822C4.39294 2.45093 3.7306 2.67321 3.2019 3.2019C2.67321 3.7306 2.45093 4.39294 2.34822 5.15689C2.24996 5.88774 2.24998 6.81346 2.25 7.94629V7.94631V16.0537V16.0537C2.24998 17.1865 2.24996 18.1123 2.34822 18.8431C2.45093 19.6071 2.67321 20.2694 3.2019 20.7981C3.7306 21.3268 4.39294 21.5491 5.15689 21.6518C5.88774 21.75 6.81345 21.75 7.94626 21.75H7.94629H7.94631H12.0537H12.0537H12.0537C13.1865 21.75 14.1123 21.75 14.8431 21.6518C15.6071 21.5491 16.2694 21.3268 16.7981 20.7981C17.3268 20.2694 17.5491 19.6071 17.6518 18.8431C17.75 18.1123 17.75 17.1865 17.75 16.0537V7.94631C17.75 6.81348 17.75 5.88775 17.6518 5.15689C17.5491 4.39294 17.3268 3.7306 16.7981 3.2019C16.2694 2.67321 15.6071 2.45093 14.8431 2.34822ZM13.75 11C13.75 10.5858 13.4142 10.25 13 10.25C12.5858 10.25 12.25 10.5858 12.25 11V13C12.25 13.4142 12.5858 13.75 13 13.75C13.4142 13.75 13.75 13.4142 13.75 13V11Z',
  d6: 'M12.0537 2.25C13.1865 2.24998 14.1123 2.24996 14.8431 2.34822C15.6071 2.45093 16.2694 2.67321 16.7981 3.2019C17.3268 3.7306 17.5491 4.39294 17.6518 5.15689C17.75 5.88775 17.75 6.81348 17.75 7.94631V16.0537C17.75 17.1865 17.75 18.1123 17.6518 18.8431C17.5491 19.6071 17.3268 20.2694 16.7981 20.7981C16.2694 21.3268 15.6071 21.5491 14.8431 21.6518C14.1123 21.75 13.1865 21.75 12.0537 21.75H12.0537H7.94631H7.94629C6.81347 21.75 5.88774 21.75 5.15689 21.6518C4.39294 21.5491 3.7306 21.3268 3.2019 20.7981C2.67321 20.2694 2.45093 19.6071 2.34822 18.8431C2.24996 18.1123 2.24998 17.1865 2.25 16.0537V16.0537V7.94631V7.94629C2.24998 6.81346 2.24996 5.88774 2.34822 5.15689C2.45093 4.39294 2.67321 3.7306 3.2019 3.2019C3.7306 2.67321 4.39294 2.45093 5.15689 2.34822C5.88774 2.24996 6.81346 2.24998 7.94629 2.25H7.94631H12.0537H12.0537Z',
  d7: 'M13 10.25C13.4142 10.25 13.75 10.5858 13.75 11V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11C12.25 10.5858 12.5858 10.25 13 10.25Z',
  d8: 'M12.2227 21.7505L17.0206 21.7506C17.8701 21.7506 18.6021 21.7506 19.1883 21.6708C19.8165 21.5853 20.4187 21.3924 20.9071 20.8977C21.3955 20.403 21.586 19.7932 21.6704 19.1569C21.7493 18.5633 21.7492 17.8219 21.7492 16.9615V10.0396C21.7492 9.17919 21.7493 8.43784 21.6704 7.84417C21.586 7.20794 21.3955 6.59807 20.9071 6.1034C20.4187 5.60872 19.8165 5.41582 19.1883 5.33028C18.7555 5.27136 18.2433 5.25596 17.663 5.25195C17.7284 5.79476 17.7442 6.44059 17.748 7.19414C18.2532 7.19889 18.63 7.21291 18.9329 7.25415C19.3486 7.31075 19.4789 7.40213 19.5518 7.47601C19.6248 7.5499 19.715 7.68185 19.7709 8.10283C19.8305 8.55173 19.8325 9.16098 19.8325 10.1035V16.8976C19.8325 17.8401 19.8305 18.4494 19.7709 18.8983C19.715 19.3193 19.6248 19.4512 19.5518 19.5251C19.4789 19.599 19.3486 19.6904 18.9329 19.747C18.5684 19.7966 18.0968 19.8068 17.4232 19.8089C17.2867 20.1758 17.0884 20.5075 16.7973 20.7987C16.2686 21.3273 15.6062 21.5496 14.8423 21.6523C14.1483 21.7456 13.2786 21.7503 12.2227 21.7505Z',
  d9: 'M17 21.0001V3H3V21L17 21.0001Z',
  d10: 'M17 21V6H21V20.9999L17 21Z',
  d11: 'M13 10.5V13.5',
  d12: 'M15.25 6.22059C15.25 5.68455 15.6604 5.25 16.1667 5.25H20.8333C21.3396 5.25 21.75 5.68455 21.75 6.22059V20.7793C21.75 21.3154 21.3396 21.7499 20.8334 21.7499L16.1667 21.75C15.9236 21.75 15.6904 21.6478 15.5185 21.4657C15.3466 21.2837 15.25 21.0368 15.25 20.7794V6.22059ZM17.0833 7.19118V19.8088L19.9167 19.8088V7.19118H17.0833Z',
  d13: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58578 21.75 2.99999 21.75L17 21.7501C17.1989 21.7501 17.3897 21.6711 17.5303 21.5304C17.671 21.3898 17.75 21.199 17.75 21.0001V3C17.75 2.58579 17.4142 2.25 17 2.25H3ZM12.25 10.5V13.5H13.75V10.5H12.25Z',
} as const;

export const IconMeetingRoomStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="meeting-room-stroke-rounded IconMeetingRoomStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMeetingRoomDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="meeting-room-duotone-rounded IconMeetingRoomDuotoneRounded"
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

export const IconMeetingRoomTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="meeting-room-twotone-rounded IconMeetingRoomTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMeetingRoomSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="meeting-room-solid-rounded IconMeetingRoomSolidRounded"
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

export const IconMeetingRoomBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="meeting-room-bulk-rounded IconMeetingRoomBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMeetingRoomStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="meeting-room-stroke-sharp IconMeetingRoomStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMeetingRoomSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="meeting-room-solid-sharp IconMeetingRoomSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfMeetingRoom: TheIconSelfPack = {
  name: 'MeetingRoom',
  StrokeRounded: IconMeetingRoomStrokeRounded,
  DuotoneRounded: IconMeetingRoomDuotoneRounded,
  TwotoneRounded: IconMeetingRoomTwotoneRounded,
  SolidRounded: IconMeetingRoomSolidRounded,
  BulkRounded: IconMeetingRoomBulkRounded,
  StrokeSharp: IconMeetingRoomStrokeSharp,
  SolidSharp: IconMeetingRoomSolidSharp,
};