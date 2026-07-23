import type {
  FaqItem,
  NavItem,
  NewsCard,
  ProductCategory,
  ProjectImage,
  ServiceField,
  ServiceItem,
  StatItem,
  Testimonial,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  {
    label: "Dịch vụ",
    href: "#dich-vu",
    children: [
      { label: "Thiết kế kiến trúc", href: "#dich-vu" },
      { label: "Thiết kế nội thất", href: "#dich-vu" },
      { label: "Thi công & hoàn thiện", href: "#dich-vu" },
    ],
  },
  {
    label: "Sản phẩm thiết kế",
    href: "#san-pham",
    children: [
      { label: "Villa – Biệt thự", href: "#san-pham" },
      { label: "Căn hộ Penthouse | Duplex", href: "#san-pham" },
      { label: "Khu nghỉ dưỡng | Showroom", href: "#san-pham" },
    ],
  },
  { label: "Lĩnh vực", href: "#linh-vuc" },
  { label: "Câu hỏi", href: "#faq" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const HERO = {
  videoId: "DKpGwF9A8h0",
  poster: "/images/hero-poster.jpg",
};

export const HERO_BUTTONS = [
  { label: "Về chúng tôi", href: "#gioi-thieu" },
  { label: "Dịch vụ của chúng tôi", href: "#dich-vu" },
  { label: "Chia sẻ dự án của bạn", href: "#lien-he" },
];

export const INTRO = {
  eyebrow: "Về chúng tôi",
  titleItalic: "Lắng nghe",
  titleRest: "và đồng hành",
  paragraph:
    "Chúng tôi mong muốn với kiến thức & kinh nghiệm làm việc tại Anh, hơn 12 năm hoạt động với nhiều dự án chất lượng sẽ góp phần định hướng tiên phong trong việc thay đổi quan niệm về phong cách sống và xu hướng trong thiết kế kiến trúc và nội thất cao cấp.",
};

export const PROJECT_GALLERY: ProjectImage[] = [
  { src: "/images/project-a0206862.png", alt: "Không gian nội thất sang trọng" },
  { src: "/images/project-a0206247.png", alt: "Phòng khách cổ điển" },
  { src: "/images/project-h4.jpg", alt: "Kiến trúc biệt thự" },
  { src: "/images/project-psy05440.png", alt: "Hầm rượu và cầu thang gỗ" },
  { src: "/images/project-h1.jpg", alt: "Không gian kiến trúc" },
  { src: "/images/project-a0208364.png", alt: "Thiết kế nội thất cao cấp" },
];

export const ABOUT = {
  eyebrow: "Về chúng tôi",
  titleTop: "Building the",
  titleBottom: "future cities",
  intro:
    "Chúng tôi mong muốn với kiến thức & kinh nghiệm làm việc tại Anh, hơn 12 năm hoạt động với nhiều dự án chất lượng sẽ góp phần định hướng tiên phong trong việc thay đổi quan niệm về phong cách sống và xu hướng trong thiết kế kiến trúc và nội thất cao cấp.",
  cta: "Read the story",
  cards: [
    {
      title: "Award-winning Architecture",
      text: "Many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity.",
      image: "/images/about-1.jpg",
    },
    {
      title: "Unique and influential design",
      text: "Many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity.",
      image: "/images/about-2.jpg",
    },
    {
      title: "Building the future cities",
      text: "Many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity.",
      image: "/images/about-3.jpg",
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    titleItalic: "Thiết kế",
    titleRest: "kiến trúc",
    description:
      "Một bản thiết kế kiến trúc giá trị khi mang trong mình sự tổng hoà của nghệ thuật, mỹ thuật và khoa học. Không gian, khối hộp, ánh sáng... đều nhằm tạo ra sự tiện nghi, phù hợp với con người.",
    href: "#",
  },
  {
    index: "02",
    titleItalic: "Thiết kế",
    titleRest: "nội thất",
    description:
      "Thiết kế của Nhà Đẹp Phú Quốc hướng đến sự hài hòa giữa vẻ đẹp cổ điển trường tồn với thời gian và nét phá cách của các vật liệu mới mang hơi thở thời đại. Mỗi dự án sẽ là một góc nhìn riêng về chủ nhân ngôi nhà.",
    href: "#",
  },
  {
    index: "03",
    titleItalic: "Thi công",
    titleRest: "và hoàn thiện nội thất",
    description:
      "Nhà Đẹp Phú Quốc là một thương hiệu thiết kế và sản xuất nội thất chất lượng cao, độ hoàn thiện đáp ứng những yêu cầu chi tiết nhất, dịch vụ hậu mãi trọn vẹn, mang tới trải nghiệm trọn vẹn trong hành trình xây dựng tổ ấm của các khách hàng.",
    href: "#",
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    number: "1",
    label: "1. Villa – Biệt thự",
    title: "Villa",
    description:
      "Những công trình với sự sáng tạo nằm trong quy chuẩn kiến trúc nghiêm ngặt nhằm mang tới một khối kết cấu thẩm mỹ bền vững",
    image: "/images/project-a0208364.png",
  },
  {
    number: "2",
    label: "2. Căn hộ Penthouse | Duplex",
    title: "Penthouse",
    description:
      "Những không gian đặc biệt cần sự sắp xếp nội thất đặc biệt tương xứng với những đặc quyền vốn có",
    image: "/images/project-a0206247.png",
  },
  {
    number: "3",
    label: "3. Khu nghỉ dưỡng | Showroom",
    title: "Showroom",
    description:
      'Hình ảnh là yếu tố đầu tiên tác động lên cảm xúc của con người, vì vậy "thiết kế góc nhìn và trải nghiệm" dành cho thương mại là một phần rất cần thiết và nên được đầu tư.',
    image: "/images/project-psy05440.png",
  },
];

export const STATS: StatItem[] = [
  { value: 12, suffix: "+", label: "Số năm kinh nghiệm" },
  { value: 116, suffix: "+", label: "Số dự án đã thực hiện" },
  { value: 16000, suffix: "+", label: "Không gian đã thiết kế" },
];

export const NEWS: NewsCard[] = [
  {
    category: "Office",
    title: "MND – Gala Dinner 2022",
    image: "/images/news-gala-2022.jpeg",
    href: "#",
  },
  {
    category: "Office",
    title: "Training nội bộ Q3.2023",
    image: "/images/news-training-q3.jpeg",
    href: "#",
  },
  {
    category: "Customer",
    title: "MND – MORTLACH PRIVATE PARTY",
    image: "/images/news-mortlach.jpg",
    href: "#",
  },
];

export const FOOTER = {
  headings: ["May đo phong cách sống", "Thiết kế nội thất Tư duy kiến trúc"],
  contactLabel: "Liên hệ với chúng tôi",
  tagline: "Interior design is the art and science of enhancing the interiors.",
  socials: [
    { name: "YouTube", href: "https://youtube.com/@minhnguyendesign" },
    { name: "Facebook", href: "#" },
    { name: "TikTok", href: "#" },
    { name: "Instagram", href: "#" },
  ],
};

export const FIELDS: ServiceField[] = [
  {
    number: "01",
    title: "Nhà phố",
    subtitle: "Townhouse",
    description:
      "Thiết kế & thi công nhà phố hiện đại, tối ưu công năng trên diện tích hạn chế.",
    image: "/images/project-h4.jpg",
  },
  {
    number: "02",
    title: "Biệt thự – Villa",
    subtitle: "Villa",
    description:
      "Không gian sống đẳng cấp, kiến trúc bền vững và nội thất cao cấp cho biệt thự.",
    image: "/images/project-a0208364.png",
  },
  {
    number: "03",
    title: "Căn hộ – Penthouse",
    subtitle: "Apartment",
    description:
      "Giải pháp nội thất tinh tế cho căn hộ, penthouse và duplex sang trọng.",
    image: "/images/project-a0206247.png",
  },
  {
    number: "04",
    title: "Resort – Khách sạn",
    subtitle: "Hospitality",
    description:
      "Thi công trọn gói khu nghỉ dưỡng, khách sạn mang dấu ấn thương hiệu riêng.",
    image: "/images/project-a0206862.png",
  },
  {
    number: "05",
    title: "Showroom – Thương mại",
    subtitle: "Commercial",
    description:
      '"Thiết kế góc nhìn & trải nghiệm" cho showroom, cửa hàng và mặt bằng thương mại.',
    image: "/images/project-psy05440.png",
  },
  {
    number: "06",
    title: "Văn phòng",
    subtitle: "Office",
    description:
      "Không gian làm việc truyền cảm hứng, cân bằng giữa thẩm mỹ và hiệu suất.",
    image: "/images/project-a0206661.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Đội ngũ Nhà Đẹp Phú Quốc biến ngôi nhà của tôi thành một tác phẩm nghệ thuật. Từng chi tiết đều được chăm chút tỉ mỉ và đúng tiến độ.",
    name: "Anh Quốc Anh",
    role: "Villa Bãi Trường, Phú Quốc",
    rating: 5,
    image: "/images/project-portrait-1.jpg",
  },
  {
    quote:
      "Sự chuyên nghiệp từ khâu thiết kế đến thi công thực sự vượt mong đợi. Không gian sống của gia đình tôi giờ đây vừa sang trọng vừa ấm cúng.",
    name: "Chị Mai Hương",
    role: "Căn hộ Penthouse, Grand World",
    rating: 5,
    image: "/images/news-5.jpg",
  },
  {
    quote:
      "Showroom được thiết kế đúng insight thương hiệu, khách hàng ghé thăm đều trầm trồ. Rất đáng để đầu tư cùng một đơn vị tận tâm như vậy.",
    name: "Anh Đức Thịnh",
    role: "Showroom nội thất, Dương Đông",
    rating: 5,
    image: "/images/news-4.jpg",
  },
];

export const PARTNERS: { name: string; logo: string }[] = [
  { name: "Samsung", logo: "/images/partners/samsung.svg" },
  { name: "LG", logo: "/images/partners/lg.svg" },
  { name: "Bosch", logo: "/images/partners/bosch.svg" },
  { name: "Panasonic", logo: "/images/partners/panasonic.svg" },
  { name: "Toshiba", logo: "/images/partners/toshiba.svg" },
  { name: "Siemens", logo: "/images/partners/siemens.svg" },
  { name: "Sony", logo: "/images/partners/sony.svg" },
  { name: "Sharp", logo: "/images/partners/sharp.svg" },
  { name: "Hitachi", logo: "/images/partners/hitachi.svg" },
  { name: "Mitsubishi", logo: "/images/partners/mitsubishi.svg" },
  { name: "Xiaomi", logo: "/images/partners/xiaomi.svg" },
];

export const FAQS: FaqItem[] = [
  {
    question: "Quy trình làm việc của Nhà Đẹp Phú Quốc gồm những bước nào?",
    answer:
      "Gồm 5 bước: (1) Khảo sát & tư vấn, (2) Thiết kế concept 2D–3D, (3) Chốt phương án & báo giá, (4) Thi công và giám sát, (5) Nghiệm thu & bàn giao kèm bảo hành.",
  },
  {
    question: "Thời gian thi công một công trình trung bình bao lâu?",
    answer:
      "Tuỳ quy mô: căn hộ 45–60 ngày, villa/biệt thự 90–150 ngày. Tiến độ chi tiết được cam kết bằng hợp đồng và cập nhật hằng tuần.",
  },
  {
    question: "Chi phí thiết kế và thi công được tính như thế nào?",
    answer:
      "Thiết kế tính theo m² sàn sử dụng, thi công tính theo khối lượng bóc tách thực tế. Chúng tôi luôn báo giá minh bạch, không phát sinh ngoài hợp đồng.",
  },
  {
    question: "Tôi ở xa Phú Quốc thì có làm việc được không?",
    answer:
      "Hoàn toàn được. Chúng tôi tư vấn và duyệt thiết kế online, gửi báo cáo hình ảnh/video tiến độ, và bàn giao tận nơi.",
  },
  {
    question: "Chính sách bảo hành ra sao?",
    answer:
      "Bảo hành 12–24 tháng tuỳ gói dịch vụ, bảo trì trọn đời với chi phí ưu đãi. Hỗ trợ kỹ thuật phản hồi trong 24 giờ.",
  },
  {
    question: "Có thể chỉ thuê thiết kế hoặc chỉ thi công không?",
    answer:
      "Có. Bạn có thể chọn gói Thiết kế, gói Thi công theo bản vẽ có sẵn, hoặc gói Trọn gói chìa khoá trao tay.",
  },
];

export const CONTACT = {
  eyebrow: "Liên hệ",
  title: "Bắt đầu",
  titleAccent: "kiến tạo tổ ấm",
  intro:
    "Để lại thông tin, đội ngũ Nhà Đẹp Phú Quốc sẽ liên hệ tư vấn và gửi báo giá trong vòng 24 giờ.",
  projectTypes: [
    "Villa – Biệt thự",
    "Căn hộ – Penthouse",
    "Nhà phố",
    "Showroom – Thương mại",
  ],
  info: {
    address: "Đường Trần Hưng Đạo, Dương Đông, Phú Quốc, Kiên Giang",
    phone: "0900 000 000",
    email: "contact@nhadepphuquoc.vn",
  },
};
