import {
  AppstoreOutlined,
  HomeOutlined,
  SearchEmpty,
  SettingOutlined
} from "@ct-design/icons";

export default {
  title: "Foundations/Icons",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Shared icon exports, including Ant Design re-exports and ct-design custom illustrations, for consistent workspace consumption."
      }
    }
  }
};

export function Gallery() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 24,
        fontSize: 24,
        color: "#7dd3fc"
      }}
    >
      <HomeOutlined />
      <AppstoreOutlined />
      <SettingOutlined />
      <SearchEmpty style={{ width: 72, height: 72 }} />
    </div>
  );
}

Gallery.tags = ["!dev"];
