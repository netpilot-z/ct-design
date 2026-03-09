import { AppstoreOutlined, HomeOutlined, SettingOutlined } from "@ct-design/icons";

export default {
  title: "Foundations/Icons",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Shared icon exports re-exposed from Ant Design icons for consistent workspace consumption."
      }
    }
  }
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

Gallery.tags = ["!dev"];
