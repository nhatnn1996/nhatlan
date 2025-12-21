import Home from "@/app/components";

export const metadata = {
  title: "Ngọc Nhất & Thùy Lan - Wedding",
  description: "Trang mời cưới của Ngọc Nhất & Thùy Lan",
  // Để mình để hình lên
  openGraph: {
    images: [
      {
        url: "/hinh1.png", // Đường dẫn tới hình cover của đám cưới
        width: 1200,
        height: 630,
        alt: "Ngọc Nhất & Thùy Lan - Wedding",
      },
    ],
  },
};

export default function Page() {
  return <Home />;
}
