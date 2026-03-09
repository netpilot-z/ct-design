import { AppstoreOutlined, HomeOutlined, SettingOutlined } from "@ct-design/icons";
import { buildApiUrl } from "@ct-design/request";
import {
  ActionBar,
  Button,
  CtDesignProvider,
  EmptyState,
  FilterBar,
  IconButton,
  PageHeader,
  PageCard,
  StatCard,
  StatusTag,
  Surface,
  useCtThemeTokens
} from "@ct-design/ui";
import { createWorkspaceBanner, toKebabCase } from "@ct-design/utils";

const packages = [
  "@ct-design/utils",
  "@ct-design/tokens",
  "@ct-design/request",
  "@ct-design/icons",
  "@ct-design/ui"
];

export default function App() {
  return (
    <CtDesignProvider themeMode="dark">
      <DashboardContent />
    </CtDesignProvider>
  );
}

function DashboardContent() {
  const tokens = useCtThemeTokens();

  return (
    <main className="page">
      <div className="page-shell">
        <PageHeader
          title="ct-design enterprise dashboard"
          subtitle="A monorepo starter validating reusable UI primitives, adapter-based components, and publish-ready packages."
          extra={<SettingOutlined />}
          meta={
            <>
              <StatusTag tone="processing">Preview</StatusTag>
              <StatusTag tone="success">Healthy</StatusTag>
            </>
          }
          actions={
            <>
              <Button type="default">View docs</Button>
              <Button type="primary" icon={<AppstoreOutlined />}>
                New workspace
              </Button>
              <IconButton
                type="default"
                icon={<SettingOutlined />}
                aria-label="Open settings"
              />
            </>
          }
        />

        <section className="stat-grid">
          <StatCard
            label="Workspace packages"
            value={packages.length}
            icon={<AppstoreOutlined />}
            trend={<StatusTag tone="processing">Actively evolving</StatusTag>}
            helper="Shared foundation packages consumed by the demo app."
          />
          <StatCard
            label="Token modes"
            value="2"
            icon={<SettingOutlined />}
            trend={<StatusTag tone="success">default + dark</StatusTag>}
            helper="`@ct-design/tokens` exposes multi-format theme assets."
          />
          <StatCard
            label="Utility demo"
            value={toKebabCase("Ct Design Monorepo")}
            icon={<HomeOutlined />}
            helper={createWorkspaceBanner("ct design utils")}
          />
        </section>

        <Surface
          className="panel"
          title="Workspace integration demo"
          extra={<SettingOutlined />}
          style={{ borderColor: tokens.colorBorder }}
        >
          <span className="tag">Monorepo Ready</span>
          <p>
            当前示例应用已经直接消费 5 个 workspace 包，并通过 `antd` adapter
            结构验证了组件层联调。
          </p>
          <p>
            request demo:{" "}
            <code>{buildApiUrl("https://api.example.com/", "/v1/projects")}</code>
          </p>
          <div className="icon-row">
            <HomeOutlined />
            <AppstoreOutlined />
            <SettingOutlined />
          </div>
          <div className="package-list">
            {packages.map((item) => (
              <span key={item} className="package-pill">
                {item}
              </span>
            ))}
          </div>
          <FilterBar
            className="demo-filter-bar"
            filters={
              <>
                <StatusTag tone="default">Scope: UI</StatusTag>
                <StatusTag tone="processing">Theme: Dark</StatusTag>
              </>
            }
            actions={
              <>
                <Button type="default">Reset</Button>
                <Button type="primary">Apply filters</Button>
              </>
            }
          />
          <ActionBar
            className="demo-bar"
            start={<span>Foundation components</span>}
            end={
              <>
                <Button type="default">Cancel</Button>
                <Button type="primary">Apply</Button>
              </>
            }
          />
          <PageCard
            title="PageCard demo"
            subtitle="A page-level card wrapper for enterprise pages."
            extra={<SettingOutlined />}
            toolbar={<Button type="primary">Create</Button>}
            style={{ marginTop: 20 }}
          >
            <EmptyState
              title="No records"
              description="This area demonstrates a reusable empty state."
              action={<Button type="default">Refresh</Button>}
            />
          </PageCard>
        </Surface>
      </div>
    </main>
  );
}
