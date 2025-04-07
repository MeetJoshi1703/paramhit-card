document.addEventListener('DOMContentLoaded', function() {

    // Update footer year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Share Button Functionality
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            const shareData = {
                title: document.title,
                text: `Check out the digital card for ${document.querySelector('.card-header h1').textContent}`,
                url: window.location.href
            };

            try {
                // Use Web Share API if available
                if (navigator.share) {
                    await navigator.share(shareData);
                    console.log('Content shared successfully');
                } else {
                    // Fallback for browsers that don't support Web Share API
                    alert('Web Share not supported. Please copy the link manually.');
                    // Optionally, implement a copy-to-clipboard fallback here
                }
            } catch (err) {
                console.error('Error sharing content:', err);
                // Handle errors, e.g., user cancelled sharing
                // Don't show an alert for cancellation errors (AbortError)
                if (err.name !== 'AbortError') {
                    alert(`Sharing failed: ${err.message}`);
                }
            }
        });
    }

    // --- Save Contact Button (Placeholder/Explanation) ---
    // The most reliable way for a static site is linking a pre-made VCF file:
    // <a href="shashwat_hospital_contact.vcf" download="ShashwatHospital.vcf" id="saveContactButton" class="action-btn save-btn">...</a>
    // The HTML above already includes this approach.

    // A JavaScript approach to *generate* a VCF is more complex and less reliable across browsers/devices.
    // Example of a basic JS VCF generator concept (could replace the <a> link if needed, but has limitations):
    /*
    const saveContactButtonJS = document.getElementById('saveContactButtonJS');
    if (saveContactButtonJS) {
        saveContactButtonJS.addEventListener('click', () => {
            const vCard = `BEGIN:VCARD
VERSION:3.0
N:Hospital;Shashwat;;;
FN:Shashwat Hospital
ORG:Shashwat Hospital
TEL;TYPE=WORK,VOICE:+919876543210  // Replace with actual number
ADR;TYPE=WORK:;;Opp. GERI Compound, Race Course Cir;Vadodara;Gujarat;390007;India // Replace with actual address
EMAIL:info@shashwathospital.com // Replace with actual email
URL:https://www.shashwathospital.com // Replace with actual website
NOTE:Multi Speciality Hospital
END:VCARD`;

            const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'ShashwatHospital.vcf'; // Filename for download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url); // Clean up the object URL
        });
    }
    */

});

