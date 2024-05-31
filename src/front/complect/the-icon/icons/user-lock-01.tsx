import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453366 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952',
  d2: 'M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d3: 'M16.7596 16.378C15.6796 16.378 15.2171 17.1576 15.0971 17.6373C14.9771 18.117 14.9771 19.856 15.0491 20.5755C15.2891 21.475 15.8891 21.8468 16.4771 21.9667C17.0171 22.0147 19.2971 21.9967 19.9571 21.9967C20.9171 22.0147 21.6371 21.6549 21.9371 20.5755C21.9971 20.2157 22.0571 18.2369 21.9071 17.6373C21.5891 16.6778 20.866 16.378 20.266 16.378M16.7596 16.378H20.266M16.7596 16.378C16.7596 16.378 16.7582 15.5516 16.7596 15.1173C16.7609 14.7204 16.726 14.3378 16.9156 13.9876C17.626 12.5748 19.666 12.7187 20.17 14.1579C20.2573 14.3948 20.2626 14.7704 20.26 15.1173C20.2567 15.5605 20.266 16.378 20.266 16.378',
  d4: 'M12.751 22.292H6.84185C5.29647 22.292 4.06729 21.54 2.96364 20.4886C0.704343 18.3361 4.41378 16.616 5.82855 15.7736C8.22777 14.345 11.0935 13.9495 13.751 14.5872',
  d5: 'M16.751 6.79199C16.751 9.27727 14.7363 11.292 12.251 11.292C9.7657 11.292 7.75098 9.27727 7.75098 6.79199C7.75098 4.30671 9.7657 2.29199 12.251 2.29199C14.7363 2.29199 16.751 4.30671 16.751 6.79199Z',
  d6: 'M5.34646 16.0505C5.52444 15.9498 5.68785 15.8574 5.82855 15.7736C9.14617 13.7981 13.3558 13.7981 16.6734 15.7736C16.8141 15.8574 16.9775 15.9498 17.1555 16.0505C17.4736 16.2305 17.8382 16.4369 18.2029 16.667H17.876C17.0606 16.667 16.6529 16.667 16.3313 16.8097C15.9025 17 15.5618 17.365 15.3842 17.8245C15.251 18.169 15.251 18.6059 15.251 19.4795C15.251 20.3531 15.251 20.79 15.3842 21.1345C15.5618 21.594 15.9025 21.959 16.3313 22.1493C16.3885 22.1747 16.4485 22.1956 16.513 22.2127C16.2394 22.2645 15.9555 22.292 15.6601 22.292H6.84185C5.29647 22.292 4.06729 21.54 2.96364 20.4886C0.929046 18.5502 3.73496 16.9624 5.34646 16.0505Z',
  d7: 'M17.0096 16.67C15.9296 16.67 15.4671 17.4496 15.3471 17.9293C15.2271 18.409 15.2271 20.148 15.2991 20.8675C15.5391 21.767 16.1391 22.1388 16.7271 22.2587C17.2671 22.3067 19.5471 22.2887 20.2071 22.2887C21.1671 22.3067 21.8871 21.9469 22.1871 20.8675C22.2471 20.5077 22.3071 18.5289 22.1571 17.9293C21.8391 16.9698 21.116 16.67 20.516 16.67M17.0096 16.67H20.516M17.0096 16.67C17.0096 16.67 17.0082 15.8436 17.0096 15.4093C17.0109 15.0124 16.976 14.6298 17.1656 14.2796C17.876 12.8668 19.916 13.0107 20.42 14.4499C20.5073 14.6868 20.5126 15.0624 20.51 15.4093C20.5067 15.8525 20.516 16.67 20.516 16.67',
  d8: 'M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952',
  d9: 'M16.0803 21.8573L15.7761 22.5428L15.7761 22.5428L16.0803 21.8573ZM15.1332 20.8425L14.4337 21.113H14.4337L15.1332 20.8425ZM21.8668 20.8425L22.5663 21.113L22.5663 21.113L21.8668 20.8425ZM20.9197 21.8573L21.2239 22.5428L21.2239 22.5428L20.9197 21.8573ZM20.9197 16.5177L21.2239 15.8322L20.9197 16.5177ZM21.8668 17.5325L22.5663 17.262L22.5663 17.262L21.8668 17.5325ZM16.0803 16.5177L15.7761 15.8322L16.0803 16.5177ZM15.1332 17.5325L14.4337 17.262L15.1332 17.5325ZM16 16.375C16 16.7892 16.3358 17.125 16.75 17.125C17.1642 17.125 17.5 16.7892 17.5 16.375H16ZM19.5 16.375C19.5 16.7892 19.8358 17.125 20.25 17.125C20.6642 17.125 21 16.7892 21 16.375H19.5ZM17.625 17.125H19.375V15.625H17.625V17.125ZM19.375 21.25H17.625V22.75H19.375V21.25ZM17.625 21.25C17.2063 21.25 16.9325 21.2495 16.7222 21.2342C16.5196 21.2193 16.4338 21.1936 16.3845 21.1718L15.7761 22.5428C16.0484 22.6637 16.3272 22.7093 16.6128 22.7302C16.8905 22.7505 17.2283 22.75 17.625 22.75V21.25ZM14.25 19.1875C14.25 19.6147 14.2496 19.9702 14.2682 20.2611C14.2871 20.5577 14.3278 20.839 14.4337 21.113L15.8328 20.5721C15.8054 20.5014 15.7795 20.3921 15.7651 20.1658C15.7504 19.9336 15.75 19.6339 15.75 19.1875H14.25ZM16.3845 21.1718C16.1471 21.0664 15.9427 20.8566 15.8328 20.5721L14.4337 21.113C14.6789 21.7474 15.1559 22.2676 15.7761 22.5428L16.3845 21.1718ZM21.25 19.1875C21.25 19.6339 21.2496 19.9336 21.2349 20.1658C21.2205 20.3921 21.1946 20.5014 21.1672 20.5721L22.5663 21.113C22.6722 20.839 22.7129 20.5577 22.7318 20.2611C22.7504 19.9702 22.75 19.6147 22.75 19.1875H21.25ZM19.375 22.75C19.7717 22.75 20.1095 22.7505 20.3872 22.7302C20.6728 22.7093 20.9516 22.6637 21.2239 22.5428L20.6155 21.1718C20.5662 21.1936 20.4804 21.2193 20.2778 21.2342C20.0675 21.2495 19.7937 21.25 19.375 21.25V22.75ZM21.1672 20.5721C21.0573 20.8566 20.8529 21.0664 20.6155 21.1718L21.2239 22.5428C21.8441 22.2676 22.3211 21.7474 22.5663 21.113L21.1672 20.5721ZM19.375 17.125C19.7937 17.125 20.0675 17.1255 20.2778 17.1408C20.4804 17.1557 20.5662 17.1814 20.6155 17.2032L21.2239 15.8322C20.9516 15.7113 20.6728 15.6657 20.3872 15.6448C20.1095 15.6245 19.7717 15.625 19.375 15.625V17.125ZM22.75 19.1875C22.75 18.7603 22.7504 18.4048 22.7318 18.1139C22.7129 17.8173 22.6722 17.536 22.5663 17.262L21.1672 17.8029C21.1946 17.8736 21.2205 17.9829 21.2349 18.2092C21.2496 18.4414 21.25 18.7411 21.25 19.1875H22.75ZM20.6155 17.2032C20.8529 17.3086 21.0573 17.5184 21.1672 17.8029L22.5663 17.262C22.3211 16.6277 21.8441 16.1074 21.2239 15.8322L20.6155 17.2032ZM17.625 15.625C17.2283 15.625 16.8905 15.6245 16.6128 15.6448C16.3272 15.6657 16.0484 15.7113 15.7761 15.8322L16.3845 17.2032C16.4338 17.1814 16.5196 17.1557 16.7222 17.1408C16.9325 17.1255 17.2063 17.125 17.625 17.125V15.625ZM15.75 19.1875C15.75 18.7411 15.7504 18.4414 15.7651 18.2092C15.7795 17.9829 15.8054 17.8736 15.8328 17.8029L14.4337 17.262C14.3278 17.536 14.2871 17.8173 14.2682 18.1139C14.2496 18.4048 14.25 18.7603 14.25 19.1875H15.75ZM15.7761 15.8322C15.1559 16.1074 14.6789 16.6277 14.4337 17.262L15.8328 17.8029C15.9427 17.5184 16.1471 17.3086 16.3845 17.2032L15.7761 15.8322ZM17.5 16.375V14.6875H16V16.375H17.5ZM19.5 14.6875V16.375H21V14.6875H19.5ZM18.5 13.75C19.0782 13.75 19.5 14.1952 19.5 14.6875H21C21 13.3158 19.8548 12.25 18.5 12.25V13.75ZM17.5 14.6875C17.5 14.1952 17.9218 13.75 18.5 13.75V12.25C17.1452 12.25 16 13.3158 16 14.6875H17.5Z',
  d10: 'M16 15.7492V14.6875C16 13.3158 17.1452 12.25 18.5 12.25C19.8548 12.25 21 13.3158 21 14.6875V15.7492C21.0751 15.772 21.1498 15.7993 21.2239 15.8322C21.8441 16.1074 22.3211 16.6277 22.5663 17.262C22.6722 17.536 22.7129 17.8173 22.7318 18.1139C22.75 18.3994 22.75 18.7472 22.75 19.1639V19.2111C22.75 19.6278 22.75 19.9756 22.7318 20.2611C22.7129 20.5577 22.6722 20.8391 22.5663 21.113C22.3211 21.7474 21.8441 22.2676 21.2239 22.5428C20.9516 22.6637 20.6728 22.7093 20.3872 22.7302C20.1156 22.75 19.7866 22.75 19.4011 22.75H17.5989C17.2135 22.75 16.8844 22.75 16.6128 22.7302C16.3272 22.7093 16.0484 22.6637 15.7761 22.5428C15.1559 22.2676 14.6789 21.7474 14.4337 21.113C14.3278 20.8391 14.2871 20.5577 14.2682 20.2611C14.25 19.9756 14.25 19.6279 14.25 19.2111V19.1639C14.25 18.7472 14.25 18.3994 14.2682 18.1139C14.2871 17.8173 14.3278 17.536 14.4337 17.262C14.6789 16.6277 15.1559 16.1074 15.7761 15.8322C15.8502 15.7993 15.9249 15.772 16 15.7492ZM17.5 14.6875C17.5 14.1952 17.9218 13.75 18.5 13.75C19.0782 13.75 19.5 14.1952 19.5 14.6875V15.625C19.4675 15.625 19.4345 15.625 19.4011 15.625H17.5989C17.5655 15.625 17.5325 15.625 17.5 15.625V14.6875Z',
  d11: 'M6.75035 6.5C6.75035 3.6005 9.10086 1.25 12.0004 1.25C14.8998 1.25 17.2504 3.6005 17.2504 6.5C17.2504 9.39949 14.8998 11.75 12.0004 11.75C9.10086 11.75 6.75035 9.39949 6.75035 6.5Z',
  d12: 'M14.1117 13.6976C14.3403 13.7574 14.4546 13.7873 14.5178 13.8775C14.581 13.9677 14.5699 14.087 14.5477 14.3254L14.5257 14.5622C14.5135 14.6939 14.5073 14.7597 14.4788 14.8132C14.4502 14.8666 14.3929 14.913 14.2784 15.0058C13.7185 15.4594 13.292 16.0552 13.0346 16.7211C12.8502 17.1981 12.7946 17.6511 12.7712 18.0186C12.75 18.3523 12.75 18.7409 12.75 19.1292V19.2458C12.75 19.6341 12.75 20.0227 12.7712 20.3564C12.7946 20.7239 12.8502 21.1769 13.0346 21.6539C13.0371 21.6605 13.0397 21.667 13.0423 21.6736C13.2553 22.2165 13.3619 22.488 13.2726 22.619C13.1832 22.75 12.9276 22.75 12.4162 22.75H6.59104C4.77274 22.75 3.36695 21.8556 2.1955 20.7396C1.51649 20.0927 1.17802 19.3646 1.26283 18.5888C1.34257 17.8592 1.78123 17.2637 2.2429 16.8118C2.98106 16.0893 4.05857 15.4814 4.77139 15.0793C4.93401 14.9875 5.07775 14.9064 5.19404 14.8372C6.49889 14.0602 7.93096 13.5691 9.39543 13.3625C10.4593 13.2125 11.5411 13.2125 12.6049 13.3625C13.0161 13.4205 13.6673 13.5813 14.1117 13.6976Z',
  d13: 'M12 1.25C9.1005 1.25 6.75 3.6005 6.75 6.5C6.75 9.39949 9.1005 11.75 12 11.75C14.8995 11.75 17.25 9.39949 17.25 6.5C17.25 3.6005 14.8995 1.25 12 1.25Z',
  d14: 'M14.5178 13.8775C14.4546 13.7873 14.3403 13.7574 14.1117 13.6976C13.6673 13.5813 13.0161 13.4205 12.6049 13.3625C11.5411 13.2125 10.4593 13.2125 9.39543 13.3625C7.93096 13.5691 6.49889 14.0602 5.19404 14.8372C5.07778 14.9064 4.93408 14.9875 4.77151 15.0792C4.05869 15.4813 2.98106 16.0893 2.2429 16.8118C1.78123 17.2637 1.34257 17.8592 1.26283 18.5888C1.17802 19.3646 1.51649 20.0927 2.1955 20.7396C3.36695 21.8556 4.77274 22.75 6.59104 22.75H12.4162C12.9276 22.75 13.1832 22.75 13.2726 22.619C13.3619 22.488 13.2553 22.2165 13.0423 21.6736L13.0346 21.6539C12.8502 21.1769 12.7946 20.7239 12.7712 20.3564C12.75 20.0227 12.75 19.6341 12.75 19.2458V19.1292C12.75 18.7409 12.75 18.3523 12.7712 18.0186C12.7946 17.6511 12.8502 17.1981 13.0346 16.7211C13.292 16.0552 13.7185 15.4594 14.2784 15.0058C14.3929 14.913 14.4502 14.8666 14.4788 14.8132C14.5073 14.7597 14.5135 14.6939 14.5257 14.5622L14.5477 14.3254C14.5699 14.087 14.581 13.9677 14.5178 13.8775Z',
  d15: 'M12 20H2C2 16.134 5.58172 13 10 13C11.4571 13 12.8233 13.3409 14 13.9365M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z',
  d16: 'M20.5 16.5V15C20.5 13.8954 19.6046 13 18.5 13C17.3954 13 16.5 13.8954 16.5 15V16.5M15 16.5H22V22H15V16.5Z',
  d17: 'M18.5 12.25C16.9812 12.25 15.75 13.4812 15.75 15V15.75H14.25V22.75H22.75V15.75H21.25V15C21.25 13.4812 20.0188 12.25 18.5 12.25ZM17.25 15V15.75H19.75V15C19.75 14.3096 19.1904 13.75 18.5 13.75C17.8096 13.75 17.25 14.3096 17.25 15Z',
  d18: 'M10 1.25C7.37665 1.25 5.25 3.37665 5.25 6C5.25 8.62335 7.37665 10.75 10 10.75C12.6234 10.75 14.75 8.62335 14.75 6C14.75 3.37665 12.6234 1.25 10 1.25Z',
  d19: 'M10 12.25C5.26471 12.25 1.25 15.6289 1.25 20V20.75H12.75V14.25H14.316C14.3692 13.9511 14.4536 13.6631 14.5658 13.3893C13.2263 12.6639 11.6573 12.25 10 12.25Z',
} as const;

export const IconUserLock01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-01-stroke-rounded IconUserLock01StrokeRounded"
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

export const IconUserLock01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-01-duotone-rounded IconUserLock01DuotoneRounded"
    >
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLock01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-01-twotone-rounded IconUserLock01TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLock01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-01-solid-rounded IconUserLock01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconUserLock01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-01-bulk-rounded IconUserLock01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserLock01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-01-stroke-sharp IconUserLock01StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserLock01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-lock-01-solid-sharp IconUserLock01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserLock01: TheIconSelfPack = {
  name: 'UserLock01',
  StrokeRounded: IconUserLock01StrokeRounded,
  DuotoneRounded: IconUserLock01DuotoneRounded,
  TwotoneRounded: IconUserLock01TwotoneRounded,
  SolidRounded: IconUserLock01SolidRounded,
  BulkRounded: IconUserLock01BulkRounded,
  StrokeSharp: IconUserLock01StrokeSharp,
  SolidSharp: IconUserLock01SolidSharp,
};