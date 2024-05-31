import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.9264 22.2511V20.6921C19.9264 20.2895 20.0525 19.8985 20.2639 19.5553C21.7583 17.1291 22.2279 14.5267 21.9002 13.5131C20.857 11.3521 17.3758 10.5018 15.76 10.2991L16.7966 5.13937C16.9705 4.32113 16.3513 3.49745 15.4135 3.29963C14.4758 3.1018 13.5746 3.60475 13.4007 4.42299L11.3462 14.089L8.77462 12.4516C8.77462 12.4516 7.47969 11.4162 6.44041 12.4516C5.40114 13.487 6.44041 14.777 6.44041 14.777L10.3488 19.7795C10.6003 20.1013 10.7468 20.4921 10.7688 20.8993L10.8401 22.2172',
  d2: 'M6.95693 2.23905C6.95693 2.23905 6.7053 4.51022 6.95693 4.7578M6.95693 4.7578C7.28338 5.07891 9.55878 4.80861 9.55878 4.80861M6.95693 4.7578L10.001 1.7489M5.04502 9.25084C5.04502 9.25084 5.29665 6.97968 5.04502 6.73209M5.04502 6.73209C4.71857 6.41098 2.44317 6.68128 2.44317 6.68128M5.04502 6.73209L2.00098 9.74099',
  d3: 'M20.9985 17.9047C21.7056 16.5019 22.6732 13.7564 21.3211 12.4637C19.5443 10.765 17.3993 10.2221 15.6979 10.125L16.7445 4.99632C16.9558 3.96375 16.1499 3 15.0753 3C14.3006 3 13.6236 3.51259 13.428 4.2472L11.3355 13.925L8.78341 12.1876C8.05938 11.5795 6.96519 11.6802 6.36948 12.41C5.87385 13.0171 5.87719 13.8807 6.3775 14.4841L9.65863 18.6024C10.2302 19.3199 10.5161 19.6786 10.6732 20.0974C10.6871 20.1346 10.7003 20.172 10.7126 20.2097C10.8518 20.6346 10.8518 21.0897 10.8518 22H19.8919V20.4629C19.8919 19.5835 20.6159 18.6636 20.9985 17.9047Z',
  d4: 'M21.3211 12.4637L20.8028 13.0058H20.8028L21.3211 12.4637ZM20.9985 17.9047L21.6682 18.2423V18.2423L20.9985 17.9047ZM11.3355 13.925L10.9135 14.545C11.1197 14.6853 11.3821 14.714 11.6138 14.6215C11.8454 14.5289 12.0159 14.3273 12.0686 14.0835L11.3355 13.925ZM8.78341 12.1876L8.30102 12.7619C8.32035 12.7781 8.34049 12.7934 8.36136 12.8076L8.78341 12.1876ZM6.3775 14.4841L6.96408 14.0168C6.96105 14.013 6.95797 14.0092 6.95486 14.0054L6.3775 14.4841ZM9.65864 18.6024L10.2452 18.1351H10.2452L9.65864 18.6024ZM6.36948 12.41L5.78849 11.9357H5.78849L6.36948 12.41ZM19.1419 22C19.1419 22.4142 19.4777 22.75 19.8919 22.75C20.3061 22.75 20.6419 22.4142 20.6419 22H19.1419ZM10.1018 22C10.1018 22.4142 10.4376 22.75 10.8518 22.75C11.266 22.75 11.6018 22.4142 11.6018 22H10.1018ZM10.7126 20.2097L9.9999 20.4432L10.7126 20.2097ZM10.6732 20.0974L11.3754 19.834L11.3754 19.834L10.6732 20.0974ZM16.7445 4.99632L16.0097 4.84597L16.0096 4.84636L16.7445 4.99632ZM13.428 4.2472L12.7033 4.05427C12.7002 4.06568 12.6975 4.07716 12.695 4.0887L13.428 4.2472ZM15.6979 10.125L14.963 9.97504C14.9195 10.1884 14.9708 10.4101 15.1036 10.5826C15.2365 10.7551 15.4377 10.8614 15.6551 10.8738L15.6979 10.125ZM20.8028 13.0058C21.2047 13.3901 21.3412 14.0743 21.1912 15.0261C21.0463 15.9452 20.6625 16.9051 20.3287 17.5671L21.6682 18.2423C22.0416 17.5015 22.4951 16.3872 22.6729 15.2597C22.8454 14.1649 22.7896 12.83 21.8393 11.9215L20.8028 13.0058ZM20.3287 17.5671C20.2459 17.7314 20.1416 17.9103 20.0178 18.1205C19.8985 18.3232 19.7624 18.5531 19.638 18.7893C19.3966 19.248 19.1419 19.833 19.1419 20.4629H20.6419C20.6419 20.2134 20.7492 19.8987 20.9654 19.4879C21.0699 19.2894 21.1865 19.0921 21.3105 18.8814C21.4301 18.6782 21.5597 18.4575 21.6682 18.2423L20.3287 17.5671ZM11.7576 13.305L9.20546 11.5676L8.36136 12.8076L10.9135 14.545L11.7576 13.305ZM5.79091 14.9515L9.07205 19.0698L10.2452 18.1351L6.96408 14.0168L5.79091 14.9515ZM5.78849 11.9357C5.06611 12.8206 5.07107 14.0835 5.80013 14.9628L6.95486 14.0054C6.68331 13.6779 6.68159 13.2136 6.95047 12.8843L5.78849 11.9357ZM9.2658 11.6133C8.22354 10.7379 6.65046 10.8798 5.78849 11.9357L6.95047 12.8843C7.27992 12.4807 7.89522 12.421 8.30102 12.7619L9.2658 11.6133ZM19.1419 20.4629V22H20.6419V20.4629H19.1419ZM11.6018 22C11.6018 21.1373 11.6104 20.5411 11.4254 19.9763L9.9999 20.4432C10.0932 20.7281 10.1018 21.0422 10.1018 22H11.6018ZM9.07205 19.0698C9.6734 19.8245 9.86521 20.0789 9.97098 20.3609L11.3754 19.834C11.167 19.2783 10.7871 18.8152 10.2452 18.1351L9.07205 19.0698ZM11.4254 19.9763C11.4097 19.9285 11.3931 19.8811 11.3754 19.834L9.97098 20.3609C9.9812 20.3881 9.99085 20.4156 9.9999 20.4432L11.4254 19.9763ZM12.0686 14.0835L14.1611 4.4057L12.695 4.0887L10.6025 13.7665L12.0686 14.0835ZM14.1528 4.44013C14.2586 4.0428 14.6313 3.75 15.0753 3.75V2.25C13.9699 2.25 12.9886 2.98237 12.7033 4.05427L14.1528 4.44013ZM17.4793 5.14667C17.7894 3.63074 16.6057 2.25 15.0753 2.25V3.75C15.6942 3.75 16.1221 4.29676 16.0097 4.84597L17.4793 5.14667ZM16.0096 4.84636L14.963 9.97504L16.4327 10.275L17.4793 5.14628L16.0096 4.84636ZM15.6551 10.8738C17.2411 10.9643 19.194 11.4677 20.8028 13.0058L21.8393 11.9215C19.8947 10.0623 17.5575 9.47996 15.7406 9.37622L15.6551 10.8738Z',
  d5: 'M7.49986 5.06081C7.20697 5.3537 6.73209 5.3537 6.4392 5.06081C6.14631 4.76792 6.14631 4.29304 6.4392 4.00015L7.49986 5.06081ZM5.14141 7.65187L5.88908 7.71094V7.71094L5.14141 7.65187ZM5.77815 9.11488C5.74553 9.5278 5.38434 9.8361 4.97141 9.80347C4.55848 9.77085 4.25019 9.40966 4.28281 8.99673L5.77815 9.11488ZM2.50352 7.21745C2.09059 7.25008 1.7294 6.94178 1.69677 6.52886C1.66415 6.11593 1.97245 5.75474 2.38537 5.72212L2.50352 7.21745ZM3.84839 6.35886L3.78932 5.61119H3.78932L3.84839 6.35886ZM8.15073 4.64168L8.2098 5.38935L8.2098 5.38935L8.15073 4.64168ZM9.4956 3.78308C9.90853 3.75046 10.2697 4.05876 10.3023 4.47168C10.335 4.88461 10.0267 5.2458 9.61375 5.27842L9.4956 3.78308ZM6.22097 1.88566C6.25359 1.47274 6.61478 1.16444 7.02771 1.19707C7.44064 1.22969 7.74893 1.59088 7.71631 2.00381L6.22097 1.88566ZM6.85771 3.34867L6.11004 3.2896V3.2896L6.85771 3.34867ZM6.96864 4.53075L6.43831 5.06109L6.96864 4.53075ZM2.53033 10.0303C2.23744 10.3232 1.76256 10.3232 1.46967 10.0303C1.17678 9.73744 1.17678 9.26256 1.46967 8.96967L2.53033 10.0303ZM9.46967 0.969671C9.76256 0.676777 10.2374 0.676776 10.5303 0.969669C10.8232 1.26256 10.8232 1.73744 10.5303 2.03033L9.46967 0.969671ZM5.88908 7.71094L5.77815 9.11488L4.28281 8.99673L4.39374 7.5928L5.88908 7.71094ZM2.38537 5.72212L3.78932 5.61119L3.90746 7.10653L2.50352 7.21745L2.38537 5.72212ZM4.39374 7.5928C4.40703 7.42457 4.41761 7.28998 4.42385 7.17421C4.43012 7.05773 4.43078 6.97984 4.42774 6.92546C4.42145 6.8132 4.40451 6.9042 4.50016 6.99984L5.56081 5.93918C5.84581 6.22417 5.91048 6.57545 5.92539 6.84157C5.9395 7.09351 5.91348 7.40204 5.88908 7.71094L4.39374 7.5928ZM3.78932 5.61119C4.09804 5.5868 4.40653 5.56071 4.6583 5.57473C4.92437 5.58954 5.27571 5.65408 5.56081 5.93918L4.50015 6.99984C4.5959 7.09558 4.6871 7.07865 4.57492 7.07241C4.52056 7.06938 4.44268 7.07007 4.32617 7.07637C4.21036 7.08263 4.07577 7.09323 3.90746 7.10653L3.78932 5.61119ZM8.09166 3.89401L9.4956 3.78308L9.61375 5.27842L8.2098 5.38935L8.09166 3.89401ZM7.71631 2.00381L7.60538 3.40774L6.11004 3.2896L6.22097 1.88566L7.71631 2.00381ZM8.2098 5.38935C7.90092 5.41375 7.59243 5.43977 7.34055 5.42566C7.07436 5.41074 6.72324 5.34602 6.43831 5.06109L7.49896 4.00042C7.40339 3.90485 7.3124 3.92173 7.42447 3.92801C7.4788 3.93105 7.55665 3.93039 7.6731 3.92412C7.78885 3.91788 7.92342 3.9073 8.09166 3.89401L8.2098 5.38935ZM7.60538 3.40774C7.59209 3.57598 7.58151 3.71055 7.57527 3.8263C7.569 3.94275 7.56834 4.0206 7.57138 4.07493C7.57766 4.18699 7.59454 4.096 7.49896 4.00042L6.43831 5.06109C6.15337 4.77615 6.08865 4.42503 6.07373 4.15884C6.05962 3.90696 6.08564 3.59848 6.11004 3.2896L7.60538 3.40774ZM5.56081 6.99984L2.53033 10.0303L1.46967 8.96967L4.50015 5.93918L5.56081 6.99984ZM10.5303 2.03033L7.49986 5.06081L6.4392 4.00015L9.46967 0.969671L10.5303 2.03033Z',
  d6: 'M12.8283 4.42927C13.1136 3.35737 14.0949 2.625 15.2003 2.625C16.7305 2.625 17.9142 4.0055 17.6043 5.52128L16.7242 9.83412C18.3818 10.0608 20.3143 10.719 21.9643 12.2965C22.9146 13.205 22.9704 14.5399 22.7979 15.6347C22.6201 16.7622 22.1666 17.8765 21.7932 18.6173C21.6737 18.8203 21.1915 19.6709 21.0904 19.8629C20.8742 20.2737 20.7669 20.5884 20.7669 20.8379V20.8379C20.7669 21.0682 20.7669 21.3031 20.7539 21.4805C20.7399 21.6713 20.708 21.8808 20.6135 22.0916C20.4379 22.4828 20.1247 22.796 19.7334 22.9716C19.5227 23.0662 19.3132 23.0981 19.1224 23.112C18.945 23.125 18.7335 23.125 18.5032 23.125H12.7516C12.4797 23.125 12.2292 23.125 12.0197 23.1066C11.7925 23.0866 11.5456 23.0407 11.3044 22.9078C11.1596 22.8281 11.0758 22.7673 10.955 22.6546C10.7249 22.4399 10.5909 22.1371 10.494 21.891C10.3889 21.6241 10.2364 21.1647 10.096 20.7359C9.99021 20.4539 9.79838 20.1995 9.19705 19.4448L5.92005 15.3317C5.19605 14.4526 5.19279 13.1935 5.91349 12.3107C6.76673 11.2655 8.31674 11.1158 9.35896 11.962L10.9627 13.0538L12.8283 4.42927Z',
  d7: 'M10.8321 1.16789C10.4416 0.777369 9.80842 0.777369 9.41789 1.16789L8.38562 2.20016L7.84273 1.65727C7.67708 1.46992 7.44139 1.34409 7.1724 1.32284C6.62183 1.27934 6.14024 1.6904 6.09674 2.24097L5.982 3.69313L5.982 3.69315C5.95913 3.98118 5.93465 4.28951 5.94912 4.54783C5.96548 4.83971 6.03818 5.26451 6.38653 5.61286C6.73488 5.96121 7.15969 6.03391 7.45156 6.05027C7.70989 6.06474 8.01824 6.04026 8.30627 6.01739L9.75844 5.90265C10.309 5.85915 10.7201 5.37756 10.6766 4.82699C10.6588 4.60234 10.5681 4.40091 10.4296 4.24411L9.79984 3.61438L10.8321 2.58211C11.2226 2.19158 11.2226 1.55842 10.8321 1.16789Z',
  d8: 'M3.94426 5.73303L2.49068 5.84789C1.94011 5.89139 1.52905 6.37298 1.57255 6.92355C1.59379 7.19232 1.71942 7.42785 1.90652 7.59348L2.44942 8.13636L1.41789 9.16789C1.02737 9.55842 1.02737 10.1916 1.41789 10.5821C1.80842 10.9726 2.44158 10.9726 2.83211 10.5821L3.86364 9.55057L4.49339 10.1803C4.65025 10.3191 4.85185 10.4099 5.07672 10.4277C5.62729 10.4712 6.10888 10.0601 6.15238 9.50957L6.26711 8.05755C6.28999 7.76944 6.31447 7.461 6.3 7.20259C6.28366 6.91083 6.21103 6.48584 5.86259 6.1374C5.51402 5.78883 5.08891 5.71635 4.79719 5.70011C4.53945 5.68577 4.23172 5.71021 3.94428 5.73303L3.94426 5.73303Z',
  d9: 'M19.8983 21.8779V19.8789C20.4639 18.7227 21.9101 16.5254 21.9987 14.428C22.1623 12.6211 20.9754 11.9883 19.8001 11.1992C18.3632 10.3945 17.1684 10.1016 15.7045 10.0215L16.7587 4.99297C17.0131 3.91343 16.1946 2.87891 15.086 2.87891C14.3041 2.87891 13.6206 3.40722 13.4232 4.16437L11.3349 13.8083L8.92317 12.1551C8.10601 11.5469 7.18498 11.4531 6.41566 12.2344C5.83369 12.9023 5.87066 13.7722 6.44272 14.4249L10.8618 19.8984V21.8867',
  d10: 'M2.00977 9.87662L5.20758 6.74869M2.00977 6.87393H5.00188V9.8762M10.0196 1.88281L7.1732 4.72266M7.01733 1.88456V4.88086H10.0045',
  d11: 'M10.6028 20.7661L6.2983 15.4596C5.57203 14.5804 5.56801 13.3196 6.28946 12.4358C7.1427 11.3906 8.69271 11.241 9.73494 12.0872L11.3386 13.1789L13.1997 4.57151L13.2042 4.55439C13.4896 3.48249 14.4709 2.75012 15.5763 2.75012C17.1065 2.75012 18.2902 4.13063 17.9803 5.6464L17.1002 9.95925C18.7578 10.1859 20.6903 10.8442 22.3403 12.4217C23.2905 13.3301 23.3464 14.665 23.1738 15.7598C22.9961 16.8874 22.5426 18.0016 22.1692 18.7424C21.9737 19.1303 21.6934 19.6608 21.4644 20.0901C21.3494 20.3056 21.2465 20.4973 21.1723 20.6351L21.1429 20.6897L21.1429 23.2501H10.6028V20.7661Z',
  d12: 'M6.75 0.75H8.75V2.33579L10.3358 0.75L11.75 2.16421L10.1642 3.75H11.75V5.75H6.75V0.75Z',
  d13: 'M3.75 11.75V10.1642L2.16421 11.75L0.75 10.3358L2.33579 8.75H0.75V6.75H5.75V11.75H3.75Z',
} as const;

export const IconMinimize01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-01-stroke-rounded IconMinimize01StrokeRounded"
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

export const IconMinimize01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-01-duotone-rounded IconMinimize01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-01-twotone-rounded IconMinimize01TwotoneRounded"
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

export const IconMinimize01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-01-solid-rounded IconMinimize01SolidRounded"
    >
      <path 
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

export const IconMinimize01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-01-bulk-rounded IconMinimize01BulkRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-01-stroke-sharp IconMinimize01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinimize01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minimize-01-solid-sharp IconMinimize01SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfMinimize01: TheIconSelfPack = {
  name: 'Minimize01',
  StrokeRounded: IconMinimize01StrokeRounded,
  DuotoneRounded: IconMinimize01DuotoneRounded,
  TwotoneRounded: IconMinimize01TwotoneRounded,
  SolidRounded: IconMinimize01SolidRounded,
  BulkRounded: IconMinimize01BulkRounded,
  StrokeSharp: IconMinimize01StrokeSharp,
  SolidSharp: IconMinimize01SolidSharp,
};