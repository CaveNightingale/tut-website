<template>
  <section class="static-map" aria-label="服务器静态地图">
    <aside class="map-sidebar">
      <div class="sidebar-heading">
        <span class="eyebrow">TUT SERVER</span>
        <h1>世界地图</h1>
      </div>
      <nav class="world-list" aria-label="选择世界">
        <button
          v-for="world in worlds"
          :key="world.id"
          type="button"
          class="world-button"
          :class="{ selected: selectedWorld === world.id }"
          :aria-pressed="selectedWorld === world.id"
          @click="selectedWorld = world.id"
        >
          <span class="world-indicator" :class="world.id"></span>
          <span>
            <strong>{{ world.name }}</strong>
            <small>{{ world.label }}</small>
          </span>
        </button>
      </nav>
      <div class="sidebar-footer">
        <p>拖动平移 · 滚轮缩放</p>
        <RouterLink to="/map/bluemap" class="bluemap-link">
          返回原 BlueMap <span aria-hidden="true">↗</span>
        </RouterLink>
      </div>
    </aside>

    <div class="map-viewport">
      <canvas ref="canvas" :aria-label="`${worldName}静态地图`"></canvas>
      <div class="map-info" role="status">
        <strong>{{ worldName }}</strong>
        <span>{{
          loading ? "正在加载地图…" : error ? "地图加载失败" : "静态地图"
        }}</span>
      </div>
      <div v-if="error" class="map-error" role="alert">
        <strong>无法加载{{ worldName }}地图</strong>
        <p>{{ error }}</p>
        <button type="button" @click="loadMap">重新加载</button>
      </div>
      <div class="map-controls" aria-label="地图缩放">
        <button
          type="button"
          aria-label="放大地图"
          :disabled="!view || view.scale >= scaleRange.max"
          @click="zoom(2)"
        >
          +
        </button>
        <button
          type="button"
          aria-label="缩小地图"
          :disabled="!view || view.scale <= scaleRange.min"
          @click="zoom(0.5)"
        >
          −
        </button>
      </div>
      <output v-if="view" class="map-position">
        X {{ Math.round(view.x) }} / Z {{ Math.round(view.y) }} ·
        {{ view.scale.toFixed(2) }}×
      </output>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import {
  Map as StaticMap,
  MapErrorEvent,
  type View,
} from "minecraft-map-renderer";

const worlds = [
  { id: "squared/overworld", name: "生存 - 主世界", label: "OVERWORLD" },
  { id: "squared/the_nether", name: "生存 - 下界", label: "THE NETHER" },
  { id: "squared/the_end", name: "生存 - 末地", label: "THE END" },
] as const;
const selectedWorld = ref<(typeof worlds)[number]["id"]>("squared/overworld");
const worldName = computed(
  () => worlds.find((world) => world.id === selectedWorld.value)!.name,
);
const canvas = ref<HTMLCanvasElement | null>(null);
const loading = ref(true);
const error = ref("");
const view = ref<View | null>(null);
const scaleRange = { min: 0.125, max: 8 };
let map: StaticMap | null = null;

async function loadMap() {
  if (!canvas.value) return;
  map?.destroy();
  const current = new StaticMap(
    `${import.meta.env.BASE_URL}static-maps/${selectedWorld.value}/`,
  );
  map = current;
  loading.value = true;
  error.value = "";
  view.value = null;

  current.addEventListener("error", (event) => {
    if (map !== current || !(event instanceof MapErrorEvent)) return;
    loading.value = false;
    error.value = event.error.message;
  });
  current.addEventListener("viewchange", () => {
    if (map === current) view.value = current.view;
  });
  current.addEventListener("load", () => {
    if (map !== current) return;
    loading.value = false;
    error.value = "";
    view.value = current.view;
  });

  try {
    await current.render(canvas.value, { scaleRange });
    if (map === current) view.value = current.view;
  } catch (cause) {
    if (map !== current) return;
    loading.value = false;
    error.value = cause instanceof Error ? cause.message : String(cause);
  }
}

function zoom(factor: number) {
  if (!map || !view.value) return;
  map.setView(
    view.value,
    Math.min(
      scaleRange.max,
      Math.max(scaleRange.min, view.value.scale * factor),
    ),
  );
}

onMounted(loadMap);
watch(selectedWorld, loadMap);
onBeforeUnmount(() => {
  map?.destroy();
  map = null;
});
</script>

<style scoped>
.static-map {
  position: fixed;
  inset: 100px 0 0;
  display: flex;
  color: #e5ece9;
  text-align: left;
  background: #171e20;
}

.map-sidebar {
  box-sizing: border-box;
  width: 228px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 28px 16px 20px;
  background: #202a2c;
  border-right: 1px solid #364244;
  overflow-y: auto;
}

.sidebar-heading {
  padding: 0 12px 24px;
}

.eyebrow {
  color: #95aca4;
  font-size: 11px;
  letter-spacing: 2px;
}

h1 {
  margin: 10px 0 0;
  font-size: 23px;
}

.world-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button,
.bluemap-link {
  color: inherit;
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
.bluemap-link:focus-visible {
  outline: 2px solid #b0d9c5;
  outline-offset: 3px;
}

.world-button {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 15px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  text-align: left;
}

.world-button:hover {
  background: #2a3738;
}

.world-button.selected {
  background: #30443d;
  border-color: #668b78;
}

.world-button strong,
.world-button small {
  display: block;
}

.world-button small {
  margin-top: 5px;
  font-size: 10px;
  letter-spacing: 1px;
  color: #a7bab3;
}

.world-indicator {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: #8fc49d;
}

.the_nether {
  background: #d88976;
}

.the_end {
  background: #c3afd8;
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 24px;
}

.sidebar-footer p {
  color: #a7bab3;
  font-size: 12px;
  text-align: center;
}

.bluemap-link {
  display: flex;
  justify-content: space-between;
  padding: 14px 12px;
  border-top: 1px solid #42504f;
  text-decoration: none;
  font-size: 14px;
}

.bluemap-link:hover {
  color: #b0d9c5;
}

.map-viewport {
  position: relative;
  flex: 1;
  min-width: 0;
  background-color: #171e20;
  background-image:
    linear-gradient(
      45deg,
      #1d2729 25%,
      transparent 25%,
      transparent 75%,
      #1d2729 75%
    ),
    linear-gradient(
      45deg,
      #1d2729 25%,
      transparent 25%,
      transparent 75%,
      #1d2729 75%
    );
  background-size: 24px 24px;
  background-position:
    0 0,
    12px 12px;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.map-info,
.map-position,
.map-controls,
.map-error {
  position: absolute;
  background: #202a2cf2;
  border: 1px solid #42504f;
  border-radius: 8px;
}

.map-info {
  top: 20px;
  left: 20px;
  padding: 12px 16px;
  pointer-events: none;
}

.map-info span {
  display: block;
  margin-top: 5px;
  color: #a7bab3;
  font-size: 12px;
}

.map-error {
  top: 110px;
  left: 20px;
  right: 20px;
  max-width: 480px;
  padding: 18px;
  border-color: #b97868;
  overflow-wrap: anywhere;
}

.map-error p {
  font-size: 13px;
  line-height: 1.6;
}

.map-error button,
.map-controls button {
  background: transparent;
  border: 0;
}

.map-error button {
  padding: 8px 12px;
  border: 1px solid #a7bab3;
  border-radius: 4px;
}

.map-controls {
  right: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
}

.map-controls button {
  width: 44px;
  height: 44px;
  font-size: 24px;
}

.map-controls button:disabled {
  opacity: 0.35;
  cursor: default;
}

.map-position {
  right: 16px;
  bottom: 16px;
  padding: 8px 12px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  pointer-events: none;
}

@media (max-width: 600px) {
  .map-sidebar {
    width: 104px;
    padding: 20px 8px 10px;
  }

  .sidebar-heading {
    padding: 0 4px 20px;
  }

  .eyebrow {
    font-size: 9px;
    letter-spacing: 0;
  }

  h1 {
    font-size: 17px;
  }

  .world-button {
    padding: 12px 6px;
    gap: 8px;
  }

  .world-button small,
  .sidebar-footer p {
    display: none;
  }

  .world-indicator {
    width: 8px;
    height: 8px;
  }

  .bluemap-link {
    padding: 12px 4px;
    font-size: 12px;
    line-height: 1.8;
    flex-wrap: wrap;
  }

  .map-info {
    top: 12px;
    left: 12px;
  }

  .map-controls {
    top: 12px;
    right: 12px;
  }
}
</style>
