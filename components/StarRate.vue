<template>
  <div class="container">
    <div class="star-widget">
      <input type="radio" name="rate" id="rate-5" />
      <label for="rate-5"><fa icon="star" /></label>
      <input type="radio" name="rate" id="rate-4" />
      <label for="rate-4"><fa icon="star" /></label>
      <input type="radio" name="rate" id="rate-3" />
      <label for="rate-3"><fa icon="star" /></label>
      <input type="radio" name="rate" id="rate-2" />
      <label for="rate-2"><fa icon="star" /></label>
      <input type="radio" name="rate" id="rate-1" />
      <label for="rate-1"><fa icon="star" /></label>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  /* background: rgb(26, 26, 26); */
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}

.star-widget input {
  display: none;
}

.star-widget label {
  font-size: 30px;
  float: right;
  color: #444;
  padding: 10px;
  transition: 0.2s ease;
  cursor: pointer;
}

.star-widget input:not(:checked) ~ label:hover,
.star-widget input:not(:checked) ~ label:hover ~ label {
  color: rgb(224, 83, 28);
}

input:checked ~ label {
  color: rgb(224, 83, 28);
  text-shadow: 0 0 5px rgb(224, 83, 28);
}
</style>