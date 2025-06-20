document.addEventListener('DOMContentLoaded', function() {
    // Wait for the Bing Maps API to load
    function loadMapScenario() {
        if (typeof Microsoft !== 'undefined' && Microsoft.Maps) {
            const map = new Microsoft.Maps.Map(document.getElementById('storeMap'), {
                credentials: 'YOUR_BING_MAPS_KEY', // Replace with your Bing Maps key
                center: new Microsoft.Maps.Location(-29.1139, 26.2041), // Northridge Mall coordinates
                zoom: 17,
                mapTypeId: Microsoft.Maps.MapTypeId.aerial
            });
            
            // Add a pushpin for the store location
            const storeLocation = new Microsoft.Maps.Location(-29.1139, 26.2041);
            const pin = new Microsoft.Maps.Pushpin(storeLocation, {
                title: 'DermaGlow Organic Skincare',
                subTitle: 'Shop 35C, Northridge Mall',
                color: 'green'
            });
            
            map.entities.push(pin);
            
            // Add an infobox with store information
            const infobox = new Microsoft.Maps.Infobox(storeLocation, {
                title: 'DermaGlow Organic Skincare',
                description: 'Shop 35C, Northridge Mall<br>Open: Mon-Fri 9:00-18:00'
            });
            
            infobox.setMap(map);
        } else {
            setTimeout(loadMapScenario, 100);
        }
    }
    
    loadMapScenario();
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing contact form and footer year code
    
    // Add interactive functionality to the map image
    const mapImage = document.getElementById('storeMap');
    if (mapImage) {
        mapImage.addEventListener('click', function() {
            // Open the Bing Maps URL in a new tab
            window.open('https://www.bing.com/maps?pglt=43&q=Northridgemall+bloemfontein+shop+35&cvid=0d54d01bfb0f45e389b9d7c8f400fa73&FORM=ANSPA1&PC=U531', '_blank');
        });
    }
});
