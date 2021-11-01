 mapboxgl.accessToken = 'pk.eyJ1Ijoic3I5Njc5MTciLCJhIjoiY2ttMHQwMHY3MHE5YTJwcGZ1ZGxmb2hpYSJ9.TlYch1D0fgc6ETTeOsWRBQ';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/sr967917/ckuptrc1v0ov915nn2iak62lt',
            center: [-82.100, 39.326],
            zoom: 14.38,
        });

        map.on('click', ({ point }) => {
            const features = map.queryRenderedFeatures(point, {
                layers: ['haunted-athens']
            });
            if (!features.length) {
                return;
            }
            const feature = features[0];

            const popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML(
                    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                )
                .addTo(map);
        });