"use client";

import { useEffect } from "react";

export default function GokuPet() {
  useEffect(() => {
    let cancelled = false;

    let pet: import("sprite-pet").PetRuntime | null = null;
    let shell: HTMLDivElement | null = null;
    let visual: HTMLDivElement | null = null;
    let sprite: HTMLSpanElement | null = null;

    let x = 0;
    let y = 0;
    let width = 92;
    let height = 0;
    let isDragging = false;
    let hasBeenDragged = false;

    let cleanup = () => {};

    const FRAME_WIDTH = 192;
    const FRAME_HEIGHT = 208;

    const isMobile = () => window.innerWidth < 640;

    const getWidth = () => (isMobile() ? 72 : 92);

    const getViewportHeight = () =>
      window.visualViewport?.height ?? window.innerHeight;

    const getViewportTop = () => window.visualViewport?.offsetTop ?? 0;

    const updatePosition = () => {
      if (!shell) return;

      const viewportHeight = getViewportHeight();
      const viewportTop = getViewportTop();

      x = Math.max(8, Math.min(x, window.innerWidth - width - 8));

      y = Math.max(
        viewportTop + 8,
        Math.min(y, viewportTop + viewportHeight - height - 8)
      );

      shell.style.left = `${x}px`;
      shell.style.top = `${y}px`;
    };

    const updateSize = () => {
      if (!shell || !visual) return;

      const oldWidth = width;
      const oldHeight = height;

      width = getWidth();
      height = width * (FRAME_HEIGHT / FRAME_WIDTH);

      const scale = width / FRAME_WIDTH;

      shell.style.width = `${width}px`;
      shell.style.height = `${height}px`;

      visual.style.transform = `translateX(-50%) scale(${scale})`;

      // Keep the pet in its current relative position after resizing.
      if (oldWidth > 0 && oldHeight > 0) {
        x = Math.min(x, window.innerWidth - width - 8);
        y = Math.min(y, getViewportTop() + getViewportHeight() - height - 8);
      }

      updatePosition();
    };

    const placeAtTopRight = () => {
      if (!shell) return;

      const mobile = isMobile();
      const rightSpacing = mobile ? 16 : 24;
      const topSpacing = mobile ? 90 : 24;

      x = window.innerWidth - width - rightSpacing;
      y = mobile
        ? topSpacing
        : getViewportTop() + getViewportHeight() - height - 24;

      updatePosition();
    };
    
    const initializePet = async () => {
      try {
        const { PetRuntime, loadCodexPet } = await import("sprite-pet");

        const spec = await loadCodexPet("/pets/goku/pet.json");

        if (cancelled) return;

        width = getWidth();
        height = width * (FRAME_HEIGHT / FRAME_WIDTH);

        shell = document.createElement("div");

        shell.style.cssText = `
          position: fixed;
          width: ${width}px;
          height: ${height}px;
          z-index: 9999;
          cursor: grab;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          overflow: visible;
          background: transparent;
        `;

        visual = document.createElement("div");

        visual.style.cssText = `
          position: absolute;
          width: ${FRAME_WIDTH}px;
          height: ${FRAME_HEIGHT}px;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) scale(${width / FRAME_WIDTH});
          transform-origin: center bottom;
          overflow: visible;
          pointer-events: none;
        `;

        sprite = document.createElement("span");

        sprite.style.cssText = `
          display: block;
          position: absolute;
          inset: 0;
          width: ${FRAME_WIDTH}px;
          height: ${FRAME_HEIGHT}px;
          background-repeat: no-repeat;
          background-position: 0 0;
          pointer-events: none;
        `;

        visual.appendChild(sprite);
        shell.appendChild(visual);
        document.body.appendChild(shell);

        placeAtTopRight();

        pet = new PetRuntime({
          spec,
          interactionElement: shell,
          spriteElement: sprite,

          onDragMove: ({ deltaX, deltaY }) => {
            x += deltaX;
            y += deltaY;
            hasBeenDragged = true;
            updatePosition();
          },
        });

        pet.start();

        let lastPointerX = -1;
        let lastPointerY = -1;

        const handlePointerEnter = () => {
          if (!pet || isDragging) return;
          pet.trigger("hover");
        };

        const handlePointerLeave = () => {
          if (!pet || isDragging) return;
          pet.trigger("idle");
        };

        const handlePointerDown = () => {
          if (!shell) return;

          isDragging = true;
          shell.style.cursor = "grabbing";
        };

        const handlePointerPosition = (event: PointerEvent) => {
          lastPointerX = event.clientX;
          lastPointerY = event.clientY;
        };

        const handlePointerUp = () => {
          if (!shell) return;

          isDragging = false;
          shell.style.cursor = "grab";

          const rect = shell.getBoundingClientRect();

          const pointerInside =
            window.matchMedia("(pointer: fine)").matches &&
            lastPointerX >= rect.left &&
            lastPointerX <= rect.right &&
            lastPointerY >= rect.top &&
            lastPointerY <= rect.bottom;

          pet?.trigger(pointerInside ? "hover" : "idle");
        };

        const handleResize = () => {
          updateSize();

          // Preserve a manually chosen position; otherwise keep the
          // default bottom-right placement on the new viewport.
          if (!hasBeenDragged) {
            placeAtTopRight();
          }
        };

        const handleViewportChange = () => {
          if (!hasBeenDragged) {
            placeAtTopRight();
          } else {
            updatePosition();
          }
        };

        shell.addEventListener("pointerenter", handlePointerEnter);
        shell.addEventListener("pointerleave", handlePointerLeave);
        shell.addEventListener("pointerdown", handlePointerDown);

        window.addEventListener("pointermove", handlePointerPosition);
        window.addEventListener("pointerup", handlePointerUp);
        window.addEventListener("pointercancel", handlePointerUp);
        window.addEventListener("resize", handleResize);

        window.visualViewport?.addEventListener("resize", handleViewportChange);

        window.visualViewport?.addEventListener("scroll", handleViewportChange);

        cleanup = () => {
          shell?.removeEventListener("pointerenter", handlePointerEnter);
          shell?.removeEventListener("pointerleave", handlePointerLeave);
          shell?.removeEventListener("pointerdown", handlePointerDown);

          window.removeEventListener("pointermove", handlePointerPosition);
          window.removeEventListener("pointerup", handlePointerUp);
          window.removeEventListener("pointercancel", handlePointerUp);
          window.removeEventListener("resize", handleResize);

          window.visualViewport?.removeEventListener(
            "resize",
            handleViewportChange
          );

          window.visualViewport?.removeEventListener(
            "scroll",
            handleViewportChange
          );
        };
      } catch (error) {
        console.error("Goku Pet initialization failed:", error);
      }
    };

    initializePet();

    return () => {
      cancelled = true;
      cleanup();
      pet?.destroy();
      pet = null;

      shell?.remove();

      shell = null;
      visual = null;
      sprite = null;
    };
  }, []);

  return null;
}
