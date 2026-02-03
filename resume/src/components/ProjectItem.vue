<template>
  <div class="card-project flex flex-wrap mb3 items-start">
    <div class="icon-container p2 col-12 sm-col-4">
      <slot name="icon"></slot>
    </div>
    <div class="detail-container pl2 col-12 sm-col-8">
      <h3>
        <slot name="project-tile"></slot>
      </h3>
      <h4>
        <slot name="short-description"></slot>
      </h4>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card-project {
  display: flex;
  flex-direction: row;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
