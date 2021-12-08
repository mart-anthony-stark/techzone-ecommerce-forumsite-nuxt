<template>
  <div class="section mt-24 px-8">
    <h1 class="font-bold text-center text-4xl mb-8 text-sec">Order Tracker</h1>
    <div class="flex justify-center">
      <div class="card">
        <div class="flex justify-between items-start">
          <h1 class="text-2xl">
            Order: <span class="text-sec font-extrabold">XCIFGD1</span>
          </h1>
          <div>
            <h3>Expected date: <span class="font-extrabold">12/25/21</span></h3>
            <h4>USPS <span class="font-extrabold">216541064654</span></h4>
          </div>
        </div>

        <div class="track mt-8">
          <ul
            id="progress"
            class="
              text-center
              flex flex-wrap
              gap-1
              items-center
              justify-between
              relative
            "
          >
            <li class="active"></li>
            <li class="active"></li>
            <li class="active"></li>
            <li class=""></li>
          </ul>
        </div>

        <div class="lists flex justify-between">
          <div class="list mt-24">
            <div class="text-5xl text-center">
              <fa icon="list-alt" />
            </div>
            <p class="text-center">
              Order <br />
              Processed
            </p>
          </div>

          <div class="list mt-24">
            <div class="text-5xl text-center">
              <fa icon="archive" />
            </div>
            <p class="text-center">
              Order <br />
              Shipped
            </p>
          </div>

          <div class="list mt-24">
            <div class="text-5xl text-center">
              <fa icon="truck" />
            </div>
            <p class="text-center">
              Order <br />
              Enroute
            </p>
          </div>

          <div class="list mt-24">
            <div class="text-5xl text-center">
              <fa icon="home" />
            </div>
            <p class="text-center">
              Order <br />
              Arrived
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24 px-8">
      <h2>Current Location: <span class="font-bold">Naga City, Bicol</span></h2>
      <h2>
        Destination: <span class="font-bold">Daet, Camarines Norte, Bicol</span>
      </h2>
    </div>
    <div class="mt-4 px-8">
      <GMap
        ref="gMap"
        language="en"
        :cluster="{ options: { styles: clusterStyle } }"
        :center="{ lat: locations[0].lat, lng: locations[0].lng }"
        :options="{ fullscreenControl: false, styles: mapStyle }"
        :zoom="10"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{ lat: location.lat, lng: location.lng }"
          :options="{
            icon:
              location === currentLocation ? pins.selected : pins.notSelected,
          }"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{ maxWidth: 200 }">
            <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions" />
      </GMap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLocation: { zoom: 10 },
      locations: [
        {
          lat: 13.621775,
          lng: 123.194824,
        },
      ],
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  max-width: 900px;
  width: 100%;
}
#pogress li {
  width: 20%;
  position: relative;
}
#progress li::before {
  content: '\2713';
  display: block;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 50px;
  align-items: center;
  font-size: 2rem;
  height: 50px;
  background: var(--c-accent);
  border-radius: 50%;
  color: #fff;
}
#progress li:last-child::before {
  content: '\2713';
  font-weight: bold;
  background: rgb(179, 179, 179);
}
#progress::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 65%;
  margin-left: 35px;
  background: var(--c-accent);
  height: 10px;
  z-index: -1;
}
#progress::after {
  content: '';
  position: absolute;
  top: 20px;
  width: 100%;
  margin-left: 35px;
  background: rgb(179, 179, 179);
  height: 10px;
  z-index: -11;
}
</style>