import React from 'react'
import {
  FaFacebook,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaMailBulk,
} from 'react-icons/fa'

import clanTLImg from './images/clan-thieu-lam.png'
import mmaTLImg from './images/mma-thieu-lam.png'
import headerTLImg from './images/header-thieu-lam.jpg'

import clanCBImg from './images/clan-cai-bang.png'
import mmaCBImg from './images/mma-cai-bang.png'
import headerCBImg from './images/header-cai-bang.jpg'

import clanVDImg from './images/clan-vo-dang.png'
import mmaVDImg from './images/mma-vo-dang.png'
import headerVDImg from './images/header-vo-dang.jpg'

import clanLLImg from './images/clan-luc-lam.png'
import mmaLLImg from './images/mma-luc-lam.png'
import headerLLImg from './images/header-luc-lam.jpg'

import clanBCImg from './images/clan-bi-cung.png'
import mmaBCImg from './images/mma-bi-cung.png'
import headerBCImg from './images/header-bi-cung.jpg'

import clanMGImg from './images/clan-ma-giao.png'
import mmaMGImg from './images/mma-ma-giao.png'
import headerMGImg from './images/header-ma-giao.jpg'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'trang chủ',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/clans',
    text: 'Môn phái',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/news',
    text: 'tin tức',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/ranks',
    text: 'Xếp hạng',
    icon: <FaCalendarAlt />,
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/9d.vng',
    icon: <FaFacebook />,
    type: '',
  },
  {
    id: 2,
    url: 'cuulong9dvng@gmail.com',
    icon: <FaMailBulk />,
    type: 'mail',
  },
  // {
  //   id: 3,
  //   url: 'https://www.twitter.com',
  //   icon: <FaLinkedin />,
  // },
  // {
  //   id: 4,
  //   url: 'https://www.twitter.com',
  //   icon: <FaBehance />,
  // },
  // {
  //   id: 5,
  //   url: 'https://www.twitter.com',
  //   icon: <FaSketch />,
  // },
]

export const clans = [
  {
    id: 1,
    slug: 'thieu-lam',
    name: 'Thiếu Lâm',
    header: headerTLImg,
    image: clanTLImg,
    mma: mmaTLImg,
    desc: 'Thiếu Lâm: là môn phái của những đại sư. Đây là môn phái mệnh danh là Võ Lâm Bắc Đẩu, là nơi mở đầu của lịch sử võ lâm.',
  },
  {
    id: 2,
    slug: 'cai-bang',
    name: 'Cái Bang',
    header: headerCBImg,
    image: clanCBImg,
    mma: mmaCBImg,
    desc: 'Cái Bang: là môn phái của những cao thủ hành khất, có thế lực trải rộng nhất võ lâm, là nơi sản sinh ra nhiều anh hùng.',
  },
  {
    id: 3,
    slug: 'vo-dang',
    name: 'Võ Đang',
    header: headerVDImg,
    image: clanVDImg,
    mma: mmaVDImg,
    desc: 'Võ Đang: Nếu Thiếu Lâm kết hợp võ công với Phật giáo thì Võ Đang kết hợp võ công với Đạo giáo. Nổi tiếng về Thái Cực Quyền nhưng kiếm pháp Võ Đang cũng là 1 tinh hoa võ học.',
  },
  {
    id: 4,
    slug: 'luc-lam',
    name: 'Lục Lâm',
    header: headerLLImg,
    image: clanLLImg,
    mma: mmaLLImg,
    desc: 'Lục Lâm: Thế gian hỗn loạn, những nông dân bị cướp mất ruộng đất, mất kế sinh nhai hay những tội phạm bị quan phủ truy bắt. Họ lập nhóm tự xưng là nghĩa tặc sau đó phát triển thành Lục Lâm.',
  },
  {
    id: 5,
    slug: 'bi-cung',
    name: 'Bí Cung',
    header: headerBCImg,
    image: clanBCImg,
    mma: mmaBCImg,
    desc: 'Bí Cung: là tổ chức bí mật được thiết lập bởi những nữ hiệp. Đây là thế lực thần bí được giấu sau những tấm khăn che mặt, sử dụng võ công đặc biệt dựa trên nền tảng yêu thuật và thủ đoạn xấu xa.',
  },
  {
    id: 6,
    slug: 'ma-giao',
    name: 'Ma Giáo',
    header: headerMGImg,
    image: clanMGImg,
    mma: mmaMGImg,
    desc: 'Ma Giáo: là một giáo phái bí ẩn được tạo ra bởi thế lực Hắc Đạo. Họ không đội trời chung với Triều Đình và Võ Lâm Bạch Đạo trong hàng trăm năm.',
  },
]
