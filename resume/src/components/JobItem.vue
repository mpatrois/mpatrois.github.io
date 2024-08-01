<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="job-tile"></slot>
      </h3>
      <h4>
        <slot name="company"></slot>
      </h4>
      <h5>
        <slot name="time"></slot>
      </h5>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  flex-direction: column;
}

.details {
  flex: 1;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 128px;
  margin-bottom: 1rem;

  color: var(--color-text);
}

h3 {
  font-weight: 500;
  color: var(--color-heading);
}

h4 {
  font-weight: 400;
  color: var(--color-heading);
}

h5 {
  font-weight: 300;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    flex-direction: row;
    margin-left: 40px;
  }

  i {
    top: calc(50% - 64px);
    left: calc(-64px - 32px);
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 128px;
    height: 128px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: -32px;
    bottom: calc(50% + 64px);
    height: calc(50% - 64px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: -32px;
    top: calc(50% + 64px);
    height: calc(50% - 64px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
