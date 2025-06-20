function showConfirmation() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create confirmation message
    const confirmationMessage = `
        Please confirm your details:
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `;

    // Show alert with confirmation message
    if (confirm(confirmationMessage)) {
        // Optionally, you can show a success message
        document.querySelector('.success-message').style.display = 'block';
        return true; // Allow form submission
    } else {
        return false; // Prevent form submission
    }
}
let map;

        function initMap() {
            const location = { lat: -29.1139, lng: 26.2041 }; // Coordinates for Northridge Mall, Bloemfontein
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: location,
            });
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: "DermaGlow Organic Skincare",
            });
        }

        document.getElementById('voice-command').addEventListener('click', function() {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'en-ZA'; // Set to one of the official languages
            recognition.start();

            recognition.onresult = function(event) {
                const command = event.results[0][0].transcript.toLowerCase();
                if (command.includes('directions to derma glow')) {
                    // Logic to get directions
                    alert('Getting directions to DermaGlow Organic Skincare...');
                    
                }
            };

            recognition.onerror = function(event) {
                console.error('Speech recognition error', event.error);
            };
        });

    // Multilingual responses
    function getDirectionsMessage(lang) {
        const messages = {
            'en': "DermaGlow is located at Shop 35C, Northridge Mall, Bloemfontein. From your location, head towards the mall entrance and follow signs to the beauty section.",
            'zu': "I-DermaGlow itholakala eSitolo 35C, eNorthridge Mall, eBloemfontein. Sukela endaweni yakho, uye emnyango we-mall bese ulandela izibonisi ukuya esigabeni sobuhle.",
            'xh': "I-DermaGlow ifumaneka kwivenkile 35C, eNorthridge Mall, eBloemfontein. Ukusuka kwindawo yakho, yiya emnyango we-mall ulandela iimpawu ukuya kwicandelo lobuhle.",
            'af': "DermaGlow is by Shop 35C, Northridge Mall, Bloemfontein. Vanaf jou ligging, gaan na die mall-ingang en volg die tekens na die skoonheidsafdeling.",
            'nso': "DermaGlow e hwetšwa ka Shop 35C, Northridge Mall, Bloemfontein. Go tšwa lefelong la gago, eya monyako wa mall o latela diswantšho go ya karolong ya botse.",
            'tn': "DermaGlow e fitlhelwa mo Shop 35C, Northridge Mall, Bloemfontein. Go tswa lefelong la gago, tsamaya kwa monyako wa mall o latela matshwao a go ya kgaolong ya botsogo.",
            'st': "DermaGlow e fumaneha Shop 35C, Northridge Mall, Bloemfontein. Ho tloha sebakeng sa hao, tsamaea lebatong la mall u latela matshwao ho ea karolong ea botle.",
            'ts': "DermaGlow yi kumeka eShop 35C, Northridge Mall, Bloemfontein. Ku suka eka xiyimo xa wena, famba u ya emahlweni ya mall u landzela tinhlamulo u ya exiyengweni xa vutshila.",
            'ss': "I-DermaGlow itholakala eSitolo 35C, eNorthridge Mall, eBloemfontein. Kusuka endaweni yakho, iya emnyango we-mall bese ulandela izimpawu ukuya esigabeni sobuhle.",
            've': "DermaGlow yi wanala kha Shop 35C, Northridge Mall, Bloemfontein. U bva kha vhukuma ha vhone, edza mulango wa mall u tevhedza zwiimiswa u ya kha tshipiḓa tsha vhutsila.",
            'nr': "I-DermaGlow itholakala eSitolo 35C, eNorthridge Mall, eBloemfontein. Kusuka endaweni yakho, iya emnyango we-mall bese ulandela izimpawu ukuya esigabeni sobuhle."
        };
        return messages[lang] || messages['en'];
    }
    function getDefaultResponse(lang) {
        const messages = {
            'en': "Sorry, I didn't understand. Try saying 'directions to DermaGlow'.",
            'zu': "Uxolo, angizwanga. Zama ukuthi 'izinkomba zokuya e-DermaGlow'.",
            'xh': "Uxolo, andizange ndiqonde. Zama ukuthi 'inkomba yokuya kwi-DermaGlow'.",
            'af': "Jammer, ek het nie verstaan nie. Probeer sê 'aanwysings na DermaGlow'.",
            'nso': "Tshwarelo, ga ke a kwešiša. Lekana go re 'ditaelo tša go ya DermaGlow'.",
            'tn': "Tshwarelo, ga ke a go utlwa. Lekana go bua 'ditaelo tsa go ya DermaGlow'.",
            'st': "Tšoarelo, ha kea utloisisa. Lekanya ho re 'litaelo tsa ho ea DermaGlow'.",
            'ts': "Xolani, a ndzi ku twisisi. Ringeta ku vulavula 'ndlela yo ya eka DermaGlow'.",
            'ss': "Uxolo, angikuzwanga. Zama ukusho 'izinkomba zokuya e-DermaGlow'.",
            've': "Ndi khou humbela zwothe, a thi pfesesei. Lingedza u amba 'ndila ya u ya DermaGlow'.",
            'nr': "Uxolo, angikuzwanga. Zama ukuthi 'izinkomba zokuya e-DermaGlow'."
        };
        return messages[lang] || messages['en'];
    }
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();