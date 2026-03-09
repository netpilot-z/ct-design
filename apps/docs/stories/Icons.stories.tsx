import { AppstoreOutlined, HomeOutlined, SettingOutlined } from "@ct-design/icons";

export default {
  title: "Foundations/Icons",
  tags: ["autodocs"]
};

export function Gallery() {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        fontSize: 24,
        color: "#7dd3fc"
      }}
    >
      <HomeOutlined />
      <AppstoreOutlined />
      <SettingOutlined />
    </div>
  );
}
