<template>
  <div class="mt-24">
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
          icon: location === currentLocation ? pins.selected : pins.notSelected,
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
</template>

<script>
export default {
  data() {
    return {
      currentLocation: { zoom: 10 },
      locations: [
        {
          lat: 14.116667,
          lng: 122.949997,
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