import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.47817 4.45277C9.65285 2.81759 10.7402 2 12 2C13.2598 2 14.3471 2.81759 16.5218 4.45277L18.5122 5.94933C20.5086 7.45049 21.5068 8.20106 21.8632 9.29857C22.2196 10.3961 21.8488 11.5774 21.107 13.94L20.1987 16.833C19.4169 19.3234 19.0259 20.5685 18.0401 21.2843C17.0543 22 15.7302 22 13.082 22H10.918C8.2698 22 6.94571 22 5.95989 21.2843C4.97406 20.5685 4.58314 19.3234 3.80129 16.833L2.89299 13.94C2.15124 11.5774 1.78037 10.3961 2.13677 9.29857C2.49317 8.20106 3.49139 7.45049 5.48783 5.94933L7.47817 4.45277Z',
  d2: 'M10.1165 9.82727C11.0309 9.26108 11.4882 8.97799 11.9906 9.00134C12.4929 9.02468 12.9214 9.34894 13.7783 9.99745L14.4662 10.518C15.3519 11.1883 15.7948 11.5235 15.946 12.0138C16.0972 12.5041 15.9189 13.0272 15.5625 14.0734L15.3544 14.6843C15.0321 15.6303 14.8709 16.1034 14.5002 16.3959C14.1295 16.6885 13.6281 16.7385 12.6253 16.8384L12.0522 16.8955C10.7626 17.024 10.1178 17.0882 9.63256 16.7595C9.14736 16.4308 8.9739 15.8122 8.62699 14.5751L8.35683 13.6117C8.04673 12.5058 7.89168 11.9529 8.08546 11.4588C8.27924 10.9648 8.77048 10.6607 9.75295 10.0524L10.1165 9.82727Z',
  d3: 'M2.5 9.5L8 11.5',
  d4: 'M14.5 16.5L18 21',
  d5: 'M16 12L21.5 9.5',
  d6: 'M6.5 21L9 16.5',
  d7: 'M12 9V2',
  d8: 'M12 2C10.7402 2 9.65285 2.81759 7.47817 4.45277L5.48783 5.94933C3.49139 7.45049 2.49317 8.20106 2.13677 9.29857C1.78037 10.3961 2.15124 11.5774 2.89299 13.9399L3.80129 16.833C4.58314 19.3234 4.97406 20.5685 5.95989 21.2843C6.94571 22 8.26979 22 10.9179 22H13.082C15.7302 22 17.0543 22 18.0401 21.2843C19.0259 20.5685 19.4169 19.3234 20.1987 16.8331L21.107 13.94C21.8488 11.5774 22.2196 10.3961 21.8632 9.29857C21.5068 8.20106 20.5086 7.45049 18.5122 5.94933L16.5218 4.45277C14.3471 2.81759 13.2598 2 12 2ZM11.9906 9.00134C11.4882 8.97799 11.0309 9.26108 10.1165 9.82727L9.75295 10.0524C8.77048 10.6607 8.27924 10.9648 8.08546 11.4588C7.89168 11.9529 8.04673 12.5058 8.35683 13.6117L8.62699 14.5751C8.9739 15.8122 9.14736 16.4308 9.63256 16.7595C10.1178 17.0882 10.7626 17.024 12.0522 16.8955L12.6253 16.8384C13.6281 16.7385 14.1295 16.6885 14.5002 16.3959C14.8709 16.1034 15.0321 15.6303 15.3544 14.6843L15.5625 14.0734C15.9189 13.0272 16.0972 12.5041 15.946 12.0138C15.7948 11.5235 15.3519 11.1883 14.4662 10.518L13.7783 9.99745C12.9214 9.34894 12.4929 9.02468 11.9906 9.00134Z',
  d9: 'M2.5 9.5L8 11.5M14.5 16.5L18 21M16 12L21.5 9.5M6.5 21L9 16.5M12 9V2M8.35683 13.6117L8.62699 14.5751C8.9739 15.8122 9.14736 16.4308 9.63256 16.7595C10.1178 17.0882 10.7626 17.024 12.0522 16.8955L12.6253 16.8384C13.6281 16.7385 14.1295 16.6885 14.5002 16.3959C14.8709 16.1034 15.0321 15.6303 15.3544 14.6843L15.5625 14.0734C15.9189 13.0272 16.0972 12.5041 15.946 12.0138C15.7948 11.5235 15.3519 11.1883 14.4662 10.518L13.7783 9.99745C12.9214 9.34894 12.4929 9.02468 11.9906 9.00134C11.4882 8.97799 11.0309 9.26108 10.1165 9.82727L9.75295 10.0524C8.77048 10.6607 8.27924 10.9648 8.08546 11.4588C7.89168 11.9529 8.04673 12.5058 8.35683 13.6117Z',
  d10: 'M11.2473 2.32391C11.2473 1.74849 11.2473 1.46077 11.008 1.31456C10.7687 1.16834 10.543 1.28412 10.0915 1.51567C9.96223 1.58199 9.83228 1.65403 9.70098 1.73132C8.96068 2.16715 8.11472 2.80945 7.05757 3.6121L7.05756 3.61211L4.99162 5.18064L4.99158 5.18067C4.02189 5.91688 3.24426 6.50727 2.66926 7.05457C2.55979 7.15877 2.45576 7.26312 2.35745 7.3685C2.06721 7.67961 1.92209 7.83517 1.95367 8.06981C1.95768 8.09961 1.96768 8.14111 1.97768 8.16946C2.05645 8.39273 2.28475 8.47534 2.74134 8.64055L8.2564 10.6656C8.40831 10.7231 8.57876 10.6906 8.70843 10.5927C8.96889 10.3962 9.31018 10.1828 9.7496 9.90812L10.1137 9.68051C10.3278 9.54665 10.5169 9.42843 10.6874 9.32617C10.9741 9.15417 11.1175 9.06816 11.1824 8.95353C11.2473 8.83889 11.2473 8.68653 11.2473 8.38179V2.32391ZM12.7495 8.54401C12.7495 8.81527 12.7495 8.9509 12.8036 9.05754C12.8577 9.16417 12.9777 9.25202 13.2178 9.42771C13.3845 9.54972 13.5696 9.69123 13.7808 9.8526L14.4696 10.379C14.8656 10.6816 15.1732 10.9166 15.4059 11.1282C15.4877 11.2026 15.6047 11.2267 15.7069 11.1847L21.1957 8.66545L21.2594 8.63496C21.7281 8.41046 21.9625 8.29821 22.0081 8.0468C22.0536 7.79538 21.8941 7.62937 21.575 7.29735C21.4968 7.21606 21.4153 7.13527 21.3305 7.05457C20.7555 6.50727 19.9779 5.91686 19.0082 5.18064L16.9422 3.6121C15.8851 2.80945 15.0391 2.16715 14.2988 1.73132C14.1663 1.6533 14.0351 1.58063 13.9046 1.51379C13.4535 1.28273 13.2279 1.1672 12.9887 1.31344C12.7495 1.45967 12.7495 1.74719 12.7495 2.32223V8.54401ZM22.7319 10.6194C22.7541 10.4243 22.7651 10.3268 22.7216 10.213C22.6577 10.0457 22.4492 9.89735 22.2703 9.89174C22.1485 9.88791 22.04 9.93988 21.823 10.0438L16.315 12.5717C16.306 12.5759 16.2969 12.5798 16.2877 12.5836C16.1929 12.6226 16.1455 12.6421 16.1085 12.6655C16.0246 12.7187 15.9716 12.7778 15.9277 12.8669C15.9084 12.9061 15.8919 12.9627 15.8589 13.0759C15.7853 13.329 15.6863 13.6224 15.5676 13.9742L15.3591 14.5919C15.2348 14.9605 15.1344 15.2581 15.0367 15.5016C14.9746 15.6564 14.9926 15.8343 15.0949 15.9661L18.5915 20.5055C18.7564 20.7041 18.8388 20.8034 18.956 20.8506C19.0943 20.9063 19.2983 20.8849 19.422 20.8015C19.5268 20.731 19.5776 20.6342 19.6793 20.4406C19.7533 20.2995 19.8238 20.1523 19.8918 19.9989C20.2289 19.2383 20.5335 18.2587 20.9131 17.0376L20.9131 17.0376L21.8501 14.0242L21.8501 14.0242C22.2101 12.8663 22.4993 11.9362 22.6485 11.1578C22.6838 10.9741 22.712 10.795 22.7319 10.6194ZM17.161 22.4949C17.3465 22.4469 17.4392 22.4229 17.5295 22.3423C17.649 22.2358 17.7194 22.0174 17.6848 21.8611C17.6587 21.7429 17.5829 21.6517 17.4315 21.4693C17.4256 21.4622 17.4198 21.455 17.4142 21.4477L13.9107 16.8993L13.9091 16.8973C13.8913 16.8743 13.8824 16.8628 13.8757 16.8549C13.7653 16.7241 13.6204 16.6644 13.4499 16.6794C13.4396 16.6803 13.4209 16.6828 13.3836 16.6876C13.1675 16.7157 12.918 16.7408 12.6261 16.7702L12.0522 16.8279C10.8787 16.9459 10.2383 17.0103 9.76658 16.7718C9.72415 16.7503 9.67136 16.7639 9.64779 16.8052L7.14702 21.3504C7.14314 21.3575 7.13914 21.3644 7.13504 21.3714C6.86318 21.8304 6.72724 22.0599 6.82487 22.2919C6.83191 22.3087 6.84278 22.3307 6.85182 22.3465C6.97689 22.565 7.21597 22.5933 7.69413 22.6499C7.7042 22.6511 7.71427 22.6523 7.72437 22.6535C8.55335 22.7488 9.5834 22.7488 10.8708 22.7488H13.129C14.4164 22.7488 15.4465 22.7488 16.2754 22.6535C16.588 22.6175 16.8823 22.5671 17.161 22.4949ZM4.46739 20.7038C4.71298 21.1171 4.83578 21.3238 5.11279 21.3301C5.11944 21.3302 5.12945 21.3302 5.13609 21.3301C5.4131 21.3234 5.5553 21.0834 5.8397 20.6032L8.34321 16.053L8.61554 15.5758C8.71941 15.3938 8.77135 15.3028 8.78362 15.2033C8.79589 15.1037 8.76707 15.0009 8.70944 14.7953C8.68141 14.6953 8.65238 14.5908 8.62202 14.4815L8.35147 13.5073C8.24179 13.1123 8.15148 12.7871 8.08908 12.5097C8.07968 12.4679 8.07498 12.4469 8.07198 12.436C8.02928 12.2797 7.93658 12.1729 7.78781 12.1087C7.77737 12.1042 7.76238 12.0985 7.73239 12.0871L2.23129 10.0672L2.22799 10.066C1.91984 9.95454 1.76577 9.89879 1.61308 9.94037C1.49305 9.97306 1.35799 10.082 1.30067 10.1925C1.22777 10.3329 1.24657 10.4721 1.28416 10.7504C1.30219 10.8839 1.32476 11.0195 1.35127 11.1578C1.50047 11.9362 1.78967 12.8662 2.14972 14.0242L3.08664 17.0375L3.08664 17.0375C3.46632 18.2586 3.77089 19.2382 4.10804 19.9989C4.21954 20.2504 4.3376 20.4853 4.46739 20.7038Z',
  d11: 'M11.2481 2.32397C11.2481 1.74873 11.2481 1.46111 11.0088 1.31489C10.7696 1.16866 10.5439 1.28432 10.0926 1.51563C9.96272 1.5822 9.83218 1.65455 9.70028 1.7322C8.95997 2.16803 8.11401 2.81033 7.05686 3.61297L4.99091 5.18152C4.02122 5.91773 3.24356 6.50815 2.66856 7.05545C2.55981 7.15896 2.45645 7.2626 2.35871 7.36727C2.06858 7.67799 1.92351 7.83334 1.95471 8.06773C1.95872 8.0979 1.96883 8.13988 1.97898 8.16857C2.05787 8.39148 2.28595 8.474 2.7421 8.63906L8.25716 10.6641C8.40994 10.7219 8.58135 10.6894 8.71187 10.5911C8.9718 10.3954 9.3118 10.1829 9.7489 9.90962L10.113 9.68202C10.3275 9.54787 10.517 9.42944 10.6877 9.32703C10.9747 9.15491 11.1182 9.06886 11.1831 8.95421C11.2481 8.83957 11.2481 8.68713 11.2481 8.38226V2.32397Z',
  d12: 'M12.7502 8.54672C12.7502 8.81785 12.7502 8.95342 12.8043 9.06005C12.8584 9.16668 12.9783 9.25447 13.2182 9.43004C13.3846 9.55186 13.5694 9.6931 13.7801 9.8541L14.4689 10.3805C14.8625 10.6812 15.1687 10.9152 15.4009 11.1258C15.4843 11.2015 15.6035 11.226 15.7077 11.1832L21.1965 8.66395L21.2575 8.63473C21.7264 8.41015 21.9608 8.29787 22.0064 8.0464C22.0519 7.79494 21.8923 7.6289 21.5729 7.29682C21.4952 7.216 21.4141 7.13568 21.3298 7.05545C20.7548 6.50814 19.9772 5.91774 19.0075 5.18151L16.9415 3.61298C15.8844 2.81033 15.0384 2.16803 14.2981 1.7322C14.1662 1.65453 14.0356 1.58217 13.9057 1.51559C13.4544 1.28429 13.2288 1.16864 12.9895 1.31486C12.7502 1.46109 12.7502 1.7487 12.7502 2.32393V8.54672Z',
  d13: 'M22.7316 10.6169C22.7535 10.4231 22.7644 10.3262 22.7213 10.2129C22.6574 10.0449 22.4481 9.8961 22.2686 9.89086C22.1473 9.88733 22.0395 9.93899 21.8237 10.0423L16.3157 12.5702C16.3067 12.5744 16.2976 12.5783 16.2885 12.5821C16.193 12.6214 16.1453 12.641 16.1081 12.6646C16.0246 12.7177 15.9717 12.7765 15.9279 12.8653C15.9084 12.9048 15.8919 12.9618 15.8587 13.0758C15.785 13.3292 15.6858 13.6231 15.5669 13.9757L15.3584 14.5934C15.2346 14.9604 15.1345 15.257 15.0372 15.4999C14.9752 15.6548 14.9934 15.8327 15.0956 15.9646L18.5922 20.504C18.757 20.7025 18.8394 20.8017 18.9565 20.8489C19.095 20.9048 19.2992 20.8833 19.4231 20.7997C19.5277 20.7292 19.5785 20.6324 19.68 20.4388C19.7535 20.2985 19.8235 20.1522 19.8911 19.9997C20.2282 19.2391 20.5327 18.2596 20.9124 17.0385L21.8494 14.0251C22.2094 12.8672 22.4986 11.937 22.6478 11.1587C22.6833 10.9738 22.7117 10.7935 22.7316 10.6169Z',
  d14: 'M17.1615 22.4955C17.3487 22.447 17.4423 22.4227 17.533 22.3412C17.6512 22.235 17.7211 22.0181 17.6873 21.8629C17.6613 21.7437 17.585 21.6518 17.4323 21.4678C17.4264 21.4607 17.4206 21.4535 17.415 21.4462L13.9115 16.8978L13.9099 16.8958C13.894 16.8753 13.886 16.865 13.8803 16.8581C13.7691 16.725 13.6221 16.6645 13.4495 16.6807C13.4405 16.6816 13.4235 16.6838 13.3893 16.6883C13.1716 16.7167 12.9201 16.742 12.6254 16.7717L12.0514 16.8294C10.8753 16.9477 10.2347 17.0121 9.76271 16.7717C9.72198 16.7509 9.67121 16.764 9.64855 16.8037L7.14777 21.3489C7.14597 21.3522 7.14414 21.3554 7.14229 21.3587C7.14016 21.3624 7.138 21.3662 7.1358 21.3699C6.86245 21.8314 6.72577 22.0621 6.82502 22.2951C6.83163 22.3106 6.84171 22.331 6.85002 22.3456C6.97487 22.5659 7.21533 22.5943 7.69623 22.6512C7.70536 22.6522 7.71451 22.6533 7.72367 22.6544C8.55264 22.7497 9.58269 22.7497 10.8701 22.7497H13.1283C14.4157 22.7497 15.4457 22.7497 16.2747 22.6544C16.5877 22.6183 16.8825 22.5678 17.1615 22.4955Z',
  d15: 'M4.46528 20.7023C4.71212 21.1183 4.83555 21.3262 5.11423 21.3313C5.11952 21.3314 5.12748 21.3314 5.13277 21.3313C5.41145 21.326 5.55445 21.0846 5.84046 20.6017L8.34396 16.0515L8.61475 15.577C8.71862 15.395 8.77056 15.304 8.78283 15.2045C8.7951 15.1049 8.76628 15.0021 8.70865 14.7966C8.68065 14.6967 8.65164 14.5922 8.62131 14.483L8.35076 13.5088C8.24031 13.1111 8.14949 12.7841 8.08706 12.5053C8.07821 12.4658 8.07379 12.4461 8.07113 12.4361C8.02878 12.2778 7.935 12.1697 7.78426 12.1054C7.77482 12.1014 7.76093 12.0962 7.73314 12.0856L2.23205 10.0657L2.22874 10.0645C1.91883 9.95241 1.76388 9.89634 1.61046 9.93865C1.49157 9.97144 1.35762 10.0795 1.30042 10.1888C1.22662 10.3298 1.2455 10.4698 1.28325 10.7498C1.30132 10.8838 1.32395 11.0199 1.35056 11.1587C1.49977 11.937 1.78897 12.8671 2.14902 14.0251L3.08593 17.0383C3.46561 18.2595 3.77018 19.2391 4.10733 19.9997C4.21843 20.2504 4.33604 20.4845 4.46528 20.7023Z',
  d16: 'M22.7316 10.6168C22.7535 10.423 22.7644 10.3261 22.7213 10.2128C22.6574 10.0449 22.4481 9.89604 22.2686 9.8908C22.1473 9.88726 22.0395 9.93892 21.8237 10.0422L16.3157 12.5702C16.3067 12.5743 16.2976 12.5782 16.2885 12.582C16.193 12.6213 16.1453 12.641 16.1081 12.6646C16.0246 12.7177 15.9717 12.7765 15.9279 12.8652C15.9084 12.9047 15.8919 12.9617 15.8587 13.0757C15.785 13.3292 15.6858 13.623 15.5669 13.9757L15.3584 14.5934C15.2346 14.9604 15.1345 15.257 15.0372 15.4999C14.9752 15.6548 14.9934 15.8327 15.0956 15.9645L18.5922 20.5039C18.757 20.7024 18.8394 20.8016 18.9565 20.8488C19.095 20.9047 19.2992 20.8832 19.4231 20.7997C19.5277 20.7291 19.5785 20.6323 19.68 20.4387C19.7535 20.2985 19.8235 20.1521 19.8911 19.9997C20.2282 19.2391 20.5327 18.2595 20.9124 17.0385L21.8494 14.0251C22.2094 12.8671 22.4986 11.937 22.6478 11.1586C22.6833 10.9737 22.7117 10.7935 22.7316 10.6168Z',
  d17: 'M17.1615 22.4954C17.3487 22.4469 17.4423 22.4226 17.533 22.3411C17.6512 22.2349 17.7211 22.0181 17.6873 21.8628C17.6613 21.7437 17.585 21.6517 17.4323 21.4678C17.4264 21.4607 17.4206 21.4535 17.415 21.4461L13.9115 16.8978L13.9099 16.8957C13.894 16.8752 13.886 16.8649 13.8803 16.858C13.7691 16.7249 13.6221 16.6644 13.4495 16.6807C13.4405 16.6815 13.4235 16.6837 13.3893 16.6882C13.1716 16.7166 12.9201 16.7419 12.6254 16.7716L12.0514 16.8293C10.8753 16.9476 10.2347 17.0121 9.76271 16.7716C9.72198 16.7508 9.67121 16.7639 9.64855 16.8036L7.14777 21.3488C7.14597 21.3521 7.14414 21.3554 7.14229 21.3586C7.14016 21.3624 7.138 21.3661 7.1358 21.3698C6.86245 21.8313 6.72577 22.0621 6.82502 22.295C6.83163 22.3105 6.84171 22.3309 6.85002 22.3456C6.97487 22.5658 7.21533 22.5943 7.69623 22.6511C7.70536 22.6522 7.71451 22.6532 7.72367 22.6543C8.55264 22.7497 9.58269 22.7496 10.8701 22.7496H13.1283C14.4157 22.7496 15.4457 22.7497 16.2747 22.6543C16.5877 22.6183 16.8825 22.5678 17.1615 22.4954Z',
  d18: 'M4.46528 20.7022C4.71212 21.1182 4.83555 21.3262 5.11423 21.3312C5.11952 21.3313 5.12748 21.3313 5.13277 21.3312C5.41145 21.3259 5.55445 21.0845 5.84046 20.6017L8.34396 16.0514L8.61475 15.577C8.71862 15.395 8.77056 15.304 8.78283 15.2044C8.7951 15.1049 8.76628 15.0021 8.70865 14.7965C8.68065 14.6966 8.65164 14.5921 8.62131 14.4829L8.35076 13.5087C8.24031 13.111 8.14949 12.784 8.08706 12.5052C8.07821 12.4657 8.07379 12.446 8.07113 12.4361C8.02878 12.2778 7.935 12.1697 7.78426 12.1054C7.77482 12.1014 7.76093 12.0961 7.73314 12.0856L2.23205 10.0657L2.22874 10.0645C1.91883 9.95234 1.76388 9.89627 1.61046 9.93858C1.49157 9.97137 1.35762 10.0794 1.30042 10.1887C1.22662 10.3297 1.2455 10.4697 1.28325 10.7497C1.30132 10.8837 1.32395 11.0198 1.35056 11.1586C1.49977 11.937 1.78897 12.867 2.14902 14.025L3.08593 17.0383C3.46561 18.2594 3.77018 19.239 4.10733 19.9997C4.21843 20.2503 4.33604 20.4844 4.46528 20.7022Z',
  d19: 'M5.91685 22H18.0833L22 9.29857L12 2L2 9.29857L5.91685 22Z',
  d20: 'M11.9905 9.00146L15.946 12.0139L14.4995 16.5001H8.99951L8.08545 11.459L11.9905 9.00146Z',
  d21: 'M14.5 16.5L17.5 21.5',
  d22: 'M11.2548 1.25L1.97415 8.08535L8.61988 10.9091L11.2548 9.23576V1.25Z',
  d23: 'M12.7672 9.34968L15.365 11.3462L22.1024 8.12568L12.7672 1.25022V9.34968Z',
  d24: 'M22.75 9.50484L15.6468 12.9002L14.7083 15.8374L19.06 21.58L22.75 9.50484Z',
  d25: 'M18.0427 22.75L13.2239 16.3909H10.0945L6.01703 22.75H18.0427Z',
  d26: 'M4.96314 21.5843L8.8344 15.5468L8.27207 12.4172L1.25 9.43361L4.96314 21.5843Z',
} as const;

export const IconChartRadarStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-radar-stroke-rounded IconChartRadarStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartRadarDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-radar-duotone-rounded IconChartRadarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartRadarTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-radar-twotone-rounded IconChartRadarTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartRadarSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-radar-solid-rounded IconChartRadarSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartRadarBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-radar-bulk-rounded IconChartRadarBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
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

export const IconChartRadarStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-radar-stroke-sharp IconChartRadarStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
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
        d={d.d21} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartRadarSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-radar-solid-sharp IconChartRadarSolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChartRadar: TheIconSelfPack = {
  name: 'ChartRadar',
  StrokeRounded: IconChartRadarStrokeRounded,
  DuotoneRounded: IconChartRadarDuotoneRounded,
  TwotoneRounded: IconChartRadarTwotoneRounded,
  SolidRounded: IconChartRadarSolidRounded,
  BulkRounded: IconChartRadarBulkRounded,
  StrokeSharp: IconChartRadarStrokeSharp,
  SolidSharp: IconChartRadarSolidSharp,
};